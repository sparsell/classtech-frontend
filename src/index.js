import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux'
import gradeReducer from './reducers/gradeReducer'
import reportWebVitals from './reportWebVitals';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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

reportWebVitals();
