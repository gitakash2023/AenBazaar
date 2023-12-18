// store.js
// import {configureStore} from '@reduxjs/toolkit';
// import productReducer from '../reducers/productSlice';
// import cartReducer from '../reducers/cartSlice';

// const store = configureStore({
//   reducer: {
//     product: productReducer,
//     cart: cartReducer,
//   },
// });

// export default store;
// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import productReducer from "../reducers/productSlice"; 
import cartReducer from '../reducers/cartSlice'; 

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  
});

const persistor = persistStore(store);

export { store, persistor };
