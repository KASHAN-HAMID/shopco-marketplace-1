import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  imageurl: string;
  title: string;
  size: string;
  color: string;
  price: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; action: "increase" | "decrease" }>) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.action === "increase" ? 1 : -1;
        if (item.quantity < 1) item.quantity = 1;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
