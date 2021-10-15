import './App.css';
import './index.css'
import React from 'react'

import Greeting from './components/Greeting';
import NewStudent from './components/NewStudent'
import SeeResults from './components/SeeResults'


class App extends React.Component {

    

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/schools/10/grades/6/students')
            .then(res => res.json())
            .then(data => console.log(data))
        }

    render() {
        return (
            <div>
                <div className="App">
                    <br></br>
                    <Greeting />
                   <div className="justify-content-md=center">
                        <NewStudent />
                        <SeeResults />
                    </div>
                </div>
            </div>
        ) 
    }
}

export default App;
