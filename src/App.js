import './App.css';
import './index.css'
import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import Footer from './components/Footer'
import Grades from './components/Grades'
import GradeCard from './components/GradeCard'
import NewStudentForm from './components/NewStudentForm'

class App extends React.Component {

        render() {
            return (
                <div>
                    <div className="App">
                         <Route exact path='/' render={() => <HomePage />} />
                         <Route exact path='/gradesearch' render={() => <Grades />} />
                         <Route exact path='/students/new' render={() => <NewStudentForm />} />
                         <Route exact path='/grades/:id/students' render={(routeProps) => <GradeCard {...routeProps}/>} />
                         <Footer />
                    </div>
                </div>
            ) 
    }
}

export default connect(null)(App);
