const Stripe = require('stripe');
const printify = require('./_shared/printifyClient');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-11-20.acacia' });
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }
  const sig = event.headers['stripe-signature'] || event.headers['Stripe-Signature'];
  if (!sig || !webhookSecret) {
    return { statusCode: 400, body: 'Missing signature or STRIPE_WEBHOOK_SECRET' };
  }
  let stripeEvent;
  try {
    const payload = event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString('utf8') : event.body;
    stripeEvent = stripe.webhooks.constructEvent(payload, sig, webhookSecret);
  } catch (err) {
    return { statusCode: 400, body: `Webhook signature verification failed: ${err.message}` };
  }

  if (stripeEvent.type !== 'checkout.session.completed') {
    return { statusCode: 200, body: 'OK' };
  }

  const session = stripeEvent.data.object;
  const meta = session.metadata || {};
  let orderPayloadStr = meta.o;
  if (!orderPayloadStr) {
    const keys = Object.keys(meta).filter((k) => k.startsWith('o_')).sort((a, b) => Number(a.slice(2)) - Number(b.slice(2)));
    orderPayloadStr = keys.map((k) => meta[k]).join('');
  }
  if (!orderPayloadStr) {
    return { statusCode: 400, body: 'Missing order metadata' };
  }
  let orderPayload;
  try {
    orderPayload = JSON.parse(orderPayloadStr);
  } catch {
    return { statusCode: 400, body: 'Invalid order metadata JSON' };
  }
  const { li: line_items, a: address_to, s: shipping_method } = orderPayload;
  if (!line_items?.length || !address_to) {
    return { statusCode: 400, body: 'Invalid order payload' };
  }

  const is_printify_express = shipping_method === 5;

  const submitBody = {
    line_items: line_items.map((item) => ({
      product_id: item.product_id,
      variant_id: item.variant_id,
      quantity: item.quantity,
      external_id: item.external_id || undefined,
    })),
    address_to: address_to,
    ...(shipping_method != null && !is_printify_express && { shipping_method }),
    ...(is_printify_express && { is_printify_express: true }),
    external_id: session.id,
  };

  try {
    const result = await printify.submitOrder(submitBody);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ printifyOrderId: result?.id }) };
  } catch (err) {
    console.error('Printify submitOrder failed:', err);
    return { statusCode: 500, body: err.message || 'Failed to submit order to Printify' };
  }
};
