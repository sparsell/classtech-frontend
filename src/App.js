import './App.css';
import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import StudentsContainer from './containers/StudentsContainer.js'
import GradesContainer from './containers/GradesContainer.js'
import Greeting from './components/Greeting.js'
import LandingPageImage from './components/LandingPageImage.js'

class App extends React.Component {

    // componentDidMount() {
        
    //     }

        render() {
            return (
                <div>
                    <div className="App">
                        <Greeting />
                         <LandingPageImage />
                        <div className="justify-content-md=center">
                            <StudentsContainer />
                            <GradesContainer />
                        </div>
                    </div>
                </div>
            ) 
    }
}

export default connect()(App);
