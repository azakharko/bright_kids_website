/**
 * POST body: { orderId, orderPayload } where orderPayload = { li: line_items, a: address_to, s: shipping_method }.
 * Captures the PayPal order, then submits to Printify.
 */
const printify = require('./_shared/printifyClient');
const PAYPAL_API = process.env.PAYPAL_API_BASE || 'https://api-m.paypal.com';

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('Missing PayPal credentials');
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) throw new Error('PayPal auth failed');
  const json = await res.json();
  return json.access_token;
}

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
  const { orderId, orderPayload } = body;
  if (!orderId || !orderPayload?.li?.length || !orderPayload?.a) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing orderId or orderPayload (li, a)' }) };
  }

  try {
    const token = await getAccessToken();
    const captureRes = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: '{}',
    });
    if (!captureRes.ok) {
      const text = await captureRes.text();
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'PayPal capture failed: ' + text }),
      };
    }

    const { li: line_items, a: address_to, s: shipping_method } = orderPayload;
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
      external_id: orderId,
    };
    const result = await printify.submitOrder(submitBody);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ printifyOrderId: result?.id }) };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Failed to capture or submit order' }),
    };
  }
};
