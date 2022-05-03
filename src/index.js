import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import reducers from './main/reducers'
import AuthOrApp from "./main/authOrApp";

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
      <AuthOrApp></AuthOrApp>
    </Provider>,
    document.getElementById('app')
)

registerServiceWorker()
