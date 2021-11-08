import './App.css';
import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer'
import GradeCard from './components/GradeCard'
import NewStudentForm from './components/NewStudentForm'
import GradesContainer from './containers/GradesContainer';
import StudentCard from './components/StudentCard'

class App extends React.Component {

        render() {
            return (
                <div>
                    <div className="App">
                         <Route exact path='/' render={() => <HomePage />} />
                         <Route exact path='/grades' render={(routeProps) => <GradesContainer {...routeProps}/>} />
                         <Route exact path='/students/new' render={(routeProps) => <NewStudentForm {...routeProps}/>} />
                         <Route exact path="/student/:id" render={(routeProps) => <StudentCard {...routeProps}/>} />
                         <Route exact path='/grades/:id/students' render={(routeProps) => <GradeCard {...routeProps}/>} />
                         <Footer />
                    </div>
                </div>
            ) 
    }
}

export default connect(null)(App);
