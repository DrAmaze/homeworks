import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  // phase I
  // store.dispatch = addLoggingToDispatch(store);

  // phase II
  // store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// logging

// const addLoggingToDispatch = (store) => {
//   var disp = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     disp(action);
//     console.log(store.getState());
//   };
// };

// refactoring (no Middleware)

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// };

// refactoring with Middleware

// const applyMiddlewares = (store, ...middlewares) => {
//   var dispatch = store.dispatch;
//   middlewares.forEach((midware) => {
//     dispatch = midware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };
