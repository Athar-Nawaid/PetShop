import { create } from "zustand";


console.log("STORE LOADED");
const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (pet) =>
    set((state) => {
      const exists = state.cartItems.some(
        (item) => item.id === pet.id
      );

      if (exists) {
        console.log("Item already in cart");
        return state; 
      }

      return {
        cartItems: [...state.cartItems, pet], 
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

  getTotalPrice: () => {
    return useCartStore
      .getState()
      .cartItems.reduce((sum, item) => sum + Number(item.price), 0);
  },
}));

export default useCartStore;