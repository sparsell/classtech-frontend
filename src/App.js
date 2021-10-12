import './App.css';
import './index.css'
import React from 'react'
import Greeting from './components/Greeting';
import Button from 'react-bootstrap/Button'


class App extends React.Component {

    

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/schools/5/grades/4/students')
            .then(res => res.json())
            .then(data => console.log(data))
        }

    render() {
        return (
            <div>
                <div className="App">
                    <br></br>
                    {/* <NavBar /> */}
                    <Greeting />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button variant="outline-secondary" size="lg">
                    Add your student
                    </Button>
                    <Button variant="outline-secondary" size="lg">
                    See the results
                    </Button>
                </div>
            </div>
        ) 
    }
}

export default App;
