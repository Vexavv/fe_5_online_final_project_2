import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";
import productsReducer from './productsSlice'
import productsFiltersReducer from './productsFiltersSlice'
import topProducts from './topProductsSlice'
const persistConfig = {
    key:'root',
    storage,
   blacklist:['products', 'productsFilters','topProducts']

}

const rootReducer = combineReducers({
    products: productsReducer,
    productsFilters: productsFiltersReducer,
    topProducts:topProducts
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
})
export const persistor = persistStore(store);
export default store;