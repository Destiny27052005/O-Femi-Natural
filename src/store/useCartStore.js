// src/store/useCartStore.js
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      // Add a product or increase quantity if it already exists
      addItem: (product) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          });
        }
      },

      // Update quantity: if quantity falls to 0 or below, removes item automatically
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        });
      },

      // Remove single item completely by id
      removeItem: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      // Clear all items from the cart
      clearCart: () => set({ items: [] }),

      // Calculate total item count (for cart badges and counter headers)
      getTotalCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      // Calculate subtotal price in Rupees
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'freshbites-cart-storage', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);