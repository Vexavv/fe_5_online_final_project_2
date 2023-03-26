
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";
import productsReducer from './productsSlice'
import isLoginReducer from './slices/loginSlice'
import messageReducer from './slices/messageSlice'
import cardReducer from "./cardSlice";
import customerReducer from "./slices/customerSlice"


const persistConfig = {
  key: 'root',
  storage,

  whitelist: ['products',]

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
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
