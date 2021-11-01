import './App.css';
import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer'

class App extends React.Component {

        render() {
            return (
                <div>
                    <div className="App">
                         <Route exact path='/' render={() => <HomePage />} />
                         <Footer />
                    </div>
                </div>
            ) 
    }
}

export default connect(null)(App);
