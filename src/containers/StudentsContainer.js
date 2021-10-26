import React from 'react'
import { connect } from 'react-redux'
import NewStudent from '../components/NewStudent.js'
import SeeResults from '../components/SeeResults.js' 
import Students from '../components/Students.js'
import { fetchStudents } from '../actions/fetchStudents.js'

class StudentsContainer extends React.Component {

     componentDidMount() {
            this.props.fetchStudents()
        }

    render() {
        return (
            <div>
            StudentsContainer Component
            <NewStudent />
            <SeeResults />
            <Students students={this.props.students}/>
            </div>
        )
    }

}

 const mapStateToProps = state => {
        return {
            students: state.students
        }
    }

export default connect(mapStateToProps, {fetchStudents})(StudentsContainer)
