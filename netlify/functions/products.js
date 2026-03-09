const printify = require('./_shared/printifyClient');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }
  try {
    const limit = Math.min(parseInt(event.queryStringParameters?.limit || '20', 10) || 20, 50);
    const page = parseInt(event.queryStringParameters?.page || '1', 10) || 1;
    const data = await printify.listProducts(limit, page);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message || 'Failed to fetch products' }),
    };
  }
};
