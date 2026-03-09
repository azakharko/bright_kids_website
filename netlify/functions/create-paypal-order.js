/**
 * POST body: same as create-checkout-session (line_items, address_to, shipping_method, shipping_cost_cents, subtotal_cents, success_url, cancel_url).
 * Returns: { orderId, approvalUrl } for redirect.
 */
const PAYPAL_API = process.env.PAYPAL_API_BASE || 'https://api-m.paypal.com';

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error('Missing PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET');
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
    body: 'grant_type=client_credentials',
  });
  if (!res.ok) throw new Error('PayPal auth failed: ' + (await res.text()));
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

  try {
    const token = await getAccessToken();
    const value = (totalCents / 100).toFixed(2);
    const createRes = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: 'USD', value } }],
        application_context: {
          return_url: success_url,
          cancel_url: cancel_url,
        },
      }),
    });
    if (!createRes.ok) throw new Error('PayPal create order failed: ' + (await createRes.text()));
    const order = await createRes.json();
    const approvalLink = order.links?.find((l) => l.rel === 'approve');
    if (!approvalLink?.href) throw new Error('No approval link');
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId: order.id, approvalUrl: approvalLink.href }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Failed to create PayPal order' }),
    };
  }
};
