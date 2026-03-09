/**
 * Printify API client. Used only in Netlify Functions.
 * Reads PRINTIFY_TOKEN and PRINTIFY_SHOP_ID from process.env.
 */

const PRINTIFY_BASE = 'https://api.printify.com/v1';

function getConfig() {
  const token = process.env.PRINTIFY_TOKEN;
  const shopId = process.env.PRINTIFY_SHOP_ID;
  if (!token || !shopId) {
    throw new Error('Missing PRINTIFY_TOKEN or PRINTIFY_SHOP_ID');
  }
  return { token, shopId };
}

const PRINTIFY_STATUS_MESSAGES = {
  400: 'Invalid request to Printify. Please check your cart and address.',
  401: 'Printify API credentials are invalid or expired.',
  403: 'Access to this Printify resource is not allowed.',
  404: 'Product or resource not found. It may have been removed or the link is incorrect.',
  422: 'Printify could not process the request. Check address and product details.',
  429: 'Too many requests. Please try again in a moment.',
  500: 'Printify is temporarily unavailable. Please try again later.',
  502: 'Printify is temporarily unavailable. Please try again later.',
  503: 'Printify is temporarily unavailable. Please try again later.',
};

function parsePrintifyError(status, text) {
  let message;
  try {
    const data = JSON.parse(text);
    if (data && typeof data.error === 'string') {
      message = data.error;
    }
  } catch (_) {}
  if (!message) {
    message = PRINTIFY_STATUS_MESSAGES[status] || `Request failed (${status}). Please try again.`;
  }
  const err = new Error(message);
  err.statusCode = status;
  err.printifyResponse = text;
  return err;
}

async function request(method, path, body = null) {
  const { token } = getConfig();
  const url = path.startsWith('http') ? path : `${PRINTIFY_BASE}${path}`;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  if (body && (method === 'POST' || method === 'PUT')) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  const text = await res.text();
  if (!res.ok) {
    throw parsePrintifyError(res.status, text);
  }
  return text ? JSON.parse(text) : null;
}

/**
 * @param {number} [limit=20]
 * @param {number} [page=1]
 */
async function listProducts(limit = 20, page = 1) {
  const { shopId } = getConfig();
  const path = `/shops/${shopId}/products.json?limit=${Math.min(limit, 50)}&page=${page}`;
  return request('GET', path);
}

/**
 * @param {string} productId
 */
async function getProduct(productId) {
  const { shopId } = getConfig();
  const path = `/shops/${shopId}/products/${productId}.json`;
  return request('GET', path);
}

/**
 * Calculate shipping. Body: { line_items, address_to }
 * @param {{ line_items: Array<{ product_id: string, variant_id: number, quantity: number }>, address_to: object }} body
 */
async function calculateShipping(body) {
  const { shopId } = getConfig();
  const path = `/shops/${shopId}/orders/shipping.json`;
  return request('POST', path, body);
}

/**
 * Submit order. Body: submitOrderRequest (line_items, address_to, shipping_method, etc.)
 * @param {object} body
 */
async function submitOrder(body) {
  const { shopId } = getConfig();
  const path = `/shops/${shopId}/orders.json`;
  return request('POST', path, body);
}

module.exports = {
  listProducts,
  getProduct,
  calculateShipping,
  submitOrder,
};
