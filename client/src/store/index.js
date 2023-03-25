
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";
import productsReducer from './productsSlice'
import isLoginReducer from './slices/loginSlice'
import cardReducer from "./cardSlice";

const persistConfig = {
    key:'root',
    storage,
   whitelist:['products', 'isLogged']

}

const rootReducer = combineReducers({
    products: productsReducer,
    isLogged : isLoginReducer,
  card: cardReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
