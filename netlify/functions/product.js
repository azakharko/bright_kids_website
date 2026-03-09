const printify = require('./_shared/printifyClient');

function getProductIdFromPath(path) {
  const match = path.match(/\/api\/products\/([^/]+)/) || path.match(/\/product\/([^/]+)/);
  return match ? match[1] : null;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  const productId = event.queryStringParameters?.id || getProductIdFromPath(event.path);
  if (!productId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Missing product id' }),
    };
  }
  try {
    const data = await printify.getProduct(productId);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    const status = err.statusCode >= 400 && err.statusCode < 600 ? err.statusCode : 500;
    const message = err.message || 'Failed to fetch product';
    return {
      statusCode: status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: message }),
    };
  }
};
