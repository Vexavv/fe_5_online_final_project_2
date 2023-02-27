import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import productsReducer from './productsSlice'


const rootReducer = combineReducers({
    products: productsReducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})

export default store;