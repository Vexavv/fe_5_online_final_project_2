import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import productsReducer from './productsSlice'
import productsFiltersReducer from './productsFiltersSlice'


const rootReducer = combineReducers({
    products: productsReducer,
    productsFilters: productsFiltersReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;