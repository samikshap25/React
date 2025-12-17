import { createSlice } from "@reduxjs/toolkit";

/*
  This is the starting state of the cart.
  - items: list of products added to cart
  - totalAmount: total price of all items
*/
const initialState = {
  items: [],        // each item = { id, name, price, quantity }
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    /*
      This function runs when user clicks "Add" or "+".
      It receives the product details from the component.
    */
    addToCart: (state, action) => {
      const product = action.payload;

      // Check if this product is already present in the cart
      const existingItem = state.items.find(
        item => item.id === product.id
      );

      if (existingItem) {
        // If product already exists, just increase quantity
        existingItem.quantity += 1;
      } else {
        // If product is new, add it to cart with quantity = 1
        state.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      // Increase total price every time item is added
      state.totalAmount += product.price;
    },

    /*
      This function runs when user clicks "-" or "Remove".
      It receives only the product id.
    */
    removeFromCart: (state, action) => {
      const productId = action.payload;

      // Find the product in the cart
      const existingItem = state.items.find(
        item => item.id === productId
      );

      // If item doesn't exist, do nothing
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        // If quantity is 1, remove item completely
        state.items = state.items.filter(
          item => item.id !== productId
        );
      } else {
        // If quantity is more than 1, decrease it
        existingItem.quantity -= 1;
      }

      // Reduce total price when item is removed
      state.totalAmount -= existingItem.price;
    },
  },
});

// Export actions so components can use them
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer so store can use it
export default cartSlice.reducer;
