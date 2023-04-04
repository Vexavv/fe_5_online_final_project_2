

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import productsReducer from './slices/productsSlice'
import isLoginReducer from './slices/loginSlice'
import messageReducer from './slices/messageSlice'
import passwordReducer from './slices/passwordSlice'
import cardReducer from "./cardSlice";
import customerReducer from "./slices/customerSlice"
import wishlistReducer from "./slices/wishlistSlice"

const persistConfig = {

  key: 'root',
  storage,

  whitelist: ['products',"card",'isLogged','wishlist']

}
const userPersistConfig = {
  key: 'isLogged',
  storage,
}


const rootReducer = combineReducers({
  products: productsReducer,
  isLogged: persistReducer(userPersistConfig, isLoginReducer),
  card: cardReducer,
  customer: customerReducer,
  message: messageReducer,
  wishlist: wishlistReducer,
  password: passwordReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
