// store.js
import {configureStore} from '@reduxjs/toolkit';
import productReducer from '../reducers/productSlice';
import cartReducer from '../reducers/cartSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
