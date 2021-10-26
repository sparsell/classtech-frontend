import React from 'react'
// import { connect } from 'react-redux'
import NewStudentForm from './NewStudentForm'
import Students from './Students'
// import { fetchStudents } from '../actions/fetchStudents'

    class NewStudent extends React.Component {

        render() {
        return (
            
         <div className="action-container">
         NewStudent Component
            <NewStudentForm />
            <Students />
        </div>
            )
    }
}

    // const mapStateToProps = state => {
    //     return {
    //         students: state.students
    //     }
    // }

    // export default connect(mapStateToProps, {fetchStudents})(NewStudent)

    export default NewStudent