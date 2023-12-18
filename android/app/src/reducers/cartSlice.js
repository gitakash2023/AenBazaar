// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      } else {
    
        Alert.alert('Item already exists in the cart');
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload.id;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
