import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import gradeReducer from './reducers/gradeReducer'
import studentReducer from './reducers/studentReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    studentReducer, 
    gradeReducer
})

const store = createStore(
    gradeReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

ReactDOM.render(

<Provider store={store}> 
    <Router>
        <App />
    </Router>
</Provider>
    ,
  document.getElementById('root')
);

