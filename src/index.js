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

if (module.hot) {
    module.hot.accept()
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

if (module.hot) {
  module.hot.accept();
}

const rootReducer = combineReducers({
    students: studentReducer, 
    grades: gradeReducer
})
// console.log(rootReducer)
const store = createStore(
    rootReducer,
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

