/**
 * Created by Shashank on 21/11/2017.
 */
require("../public/main.css")
import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createRoutes from './routes';
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router'
import App from './containers/App';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            { createRoutes(store) }
        </Router>
    </Provider>,
    document.getElementById('app')
);
