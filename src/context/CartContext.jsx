import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CART_KEY = 'bright_kids_store_cart';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD': return action.payload || [];
    case 'ADD': {
      const { product_id, variant_id, quantity = 1, title, price, image } = action.payload;
      const existing = state.find((i) => i.product_id === product_id && i.variant_id === variant_id);
      let next;
      if (existing) {
        next = state.map((i) =>
          i.product_id === product_id && i.variant_id === variant_id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        next = [...state, { product_id, variant_id, quantity, title, price, image }];
      }
      return next;
    }
    case 'UPDATE': {
      const { product_id, variant_id, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((i) => !(i.product_id === product_id && i.variant_id === variant_id));
      }
      return state.map((i) =>
        i.product_id === product_id && i.variant_id === variant_id ? { ...i, quantity } : i
      );
    }
    case 'REMOVE': {
      const { product_id, variant_id } = action.payload;
      return state.filter((i) => !(i.product_id === product_id && i.variant_id === variant_id));
    }
    case 'CLEAR': return [];
    default: return state;
  }
};

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) dispatch({ type: 'LOAD', payload: JSON.parse(raw) });
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (_) {}
  }, [items]);

  const addItem = (payload) => dispatch({ type: 'ADD', payload });
  const updateQuantity = (product_id, variant_id, quantity) =>
    dispatch({ type: 'UPDATE', payload: { product_id, variant_id, quantity } });
  const removeItem = (product_id, variant_id) =>
    dispatch({ type: 'REMOVE', payload: { product_id, variant_id } });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  const subtotalCents = items.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const value = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    subtotalCents,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
