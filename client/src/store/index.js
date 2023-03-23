import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";
import productsReducer from './productsSlice'
import isLoginReducer from './slices/loginSlice'
import storageSlice from './slices/localStorageSlice'

const persistConfig = {
    key:'root',
    storage,
   blacklist:['products', 'productsFilters']

}

const rootReducer = combineReducers({
    products: productsReducer,
    isLogged :  isLoginReducer,
    token : storageSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})
export const persistor = persistStore(store);
export default store;