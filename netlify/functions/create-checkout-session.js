const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-11-20.acacia' });

/**
 * POST body: {
 *   line_items: [{ product_id, variant_id, quantity }],
 *   address_to: { first_name, last_name, email, phone, country, region?, address1, address2?, city, zip },
 *   shipping_method: number,
 *   shipping_cost_cents: number,
 *   subtotal_cents: number,
 *   success_url: string,
 *   cancel_url: string
 * }
 * Metadata value max 500 chars - we store compact order payload for webhook.
 */
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }
  const { line_items, address_to, shipping_method, shipping_cost_cents = 0, subtotal_cents, success_url, cancel_url } = body;
  if (!line_items?.length || !address_to || subtotal_cents == null || !success_url || !cancel_url) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing line_items, address_to, subtotal_cents, success_url, or cancel_url' }),
    };
  }
  const totalCents = Number(subtotal_cents) + Number(shipping_cost_cents || 0);
  if (totalCents <= 0) {
    return { statusCode: 400, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Invalid total amount' }) };
  }

  const orderPayload = { li: line_items, a: address_to, s: shipping_method };
  const payloadStr = JSON.stringify(orderPayload);
  const metadata = {};
  if (payloadStr.length <= 500) {
    metadata.o = payloadStr;
  } else {
    for (let i = 0; i < payloadStr.length; i += 500) {
      metadata[`o_${i / 500}`] = payloadStr.slice(i, i + 500);
    }
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Order', description: `${line_items.length} item(s)` },
          unit_amount: totalCents,
        },
        quantity: 1,
      }],
      metadata,
      success_url,
      cancel_url,
    });
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url, sessionId: session.id }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Failed to create checkout session' }),
    };
  }
};
