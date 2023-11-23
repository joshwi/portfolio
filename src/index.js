//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import configureStore from './store/store';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/index.scss';

const store = configureStore();

// Render react app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);