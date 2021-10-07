import './App.css';
import './index.css'
import React from 'react'
import Greeting from './components/Greeting';
import SearchExisting from './components/SearchExisting'
import NewStudentForm from './components/NewStudentForm'

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <div className="wrapper">
                <Greeting />
            </div>
            <div>
                <SearchExisting />
            </div>
        <h2>--- OR ---</h2>
            <div>
                <NewStudentForm />
            </div>
    </div>
    
  )
    }
  ;
}

export default App;
