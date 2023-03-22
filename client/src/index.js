import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store,{persistor} from "./store/index"
import { FavoritesProvider } from './pages/Favorites/FavoritesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesProvider>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
    </FavoritesProvider>

);


