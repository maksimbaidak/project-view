import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider,ReactReduxContext}  from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import App from './App';
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';



const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export const history = createBrowserHistory();

export const store = createStore(
  rootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk)
  )
)

const app = (
  <Provider store={store} context={ReactReduxContext}>
    <ConnectedRouter history={history} context={ReactReduxContext}>
      <App />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
