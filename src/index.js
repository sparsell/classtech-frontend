import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import gradeReducer from './reducers/gradeReducer.js'

import App from './App';


// set up store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let myStore = createStore(gradeReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(

<Provider store={myStore}> 
    <App />
</Provider>
    ,
  document.getElementById('root')
);

reportWebVitals();
