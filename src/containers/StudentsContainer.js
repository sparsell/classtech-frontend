import React from 'react'
import { connect } from 'react-redux'
import NewStudent from '../components/NewStudent.js'
import SeeResults from '../components/SeeResults.js' 
import { fetchStudents } from '../actions/fetchStudents.js'
// import Students from '../components/Students.js'

class StudentsContainer extends React.Component {

     componentDidMount() {
            this.props.fetchStudents()
        }

    render() {
        // console.log("Students container data", this.props.students)
        return (
            <div>
                <NewStudent />
                <SeeResults />
                {/* <Students grades={this.props.students}/> */}
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
