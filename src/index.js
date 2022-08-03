import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, 
  composeEnhancers(applyMiddleware(thunk)));

  ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
  );

  //Compose lets you write deeply nested function transformations without the rightward drift of the code

  //Reducer (Function): A reducing function that returns the next state tree, given the current state tree and an action to handle.

  // strikethrough of the createStore isn't a real deprecation since its only purpose was to encourage the use of Redux ToolKit (which introduces configureStore) instead of using createStore directly
