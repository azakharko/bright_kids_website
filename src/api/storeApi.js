const API = '/api';

export async function fetchProducts(limit = 20, page = 1) {
  const res = await fetch(`${API}/products?limit=${limit}&page=${page}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function fetchProduct(id) {
  const res = await fetch(`${API}/products/${id}`);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function calculateShipping(body) {
  const res = await fetch(`${API}/orders-shipping`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function createCheckoutSession(body) {
  const res = await fetch(`${API}/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function createPayPalOrder(body) {
  const res = await fetch(`${API}/create-paypal-order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function capturePayPalOrder(body) {
  const res = await fetch(`${API}/capture-paypal-order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
