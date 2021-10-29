import './App.css';
import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router';
import GradesContainer from './containers/GradesContainer.js'
import Greeting from './components/Greeting.js'
import LandingPageImage from './components/LandingPageImage.js'
import HomePage from './components/HomePage.js'

class App extends React.Component {

        render() {
            return (
                <div>
                    <div className="App">
                        {/* <div className="logo" style={{backgroundImage: `url(${image}` }}></div> */}
                        <Greeting />
                         <LandingPageImage />
                        <div className="justify-content-md=center">
                            <GradesContainer />
                            <Route exact path='/' render={() => <HomePage />} />
                        </div>
                    </div>
                </div>
            ) 
    }
}

export default connect()(App);
