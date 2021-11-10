import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard'

const GradeCard = (props) => {

    const grade = props.grades.find(grade => grade.id === parseInt(props.match.params.id))

    return (
        <div className="grade-card">
            <h2>Students in {grade.grade_name} </h2> 
            <div className="ui container grid">
                <div className="ui row">
                    {/* <div className="column eight wide"> */}
            {/* <ul> */}
                {grade.students.map(student => {
                    return <StudentCard student={student} key={student.id} />
                })}
            {/* </ul> */}
                    {/* </div> */}
                </div>
            </div>

            <Link to="/" className="ui primary button"> Home </Link>
            <Link to="/grades" className="ui primary button"> View by Grade </Link>
            <Link to="/students/new" className="ui primary button"> Add a Student </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        grades: state.grades
    }
}

export default connect(mapStateToProps)(GradeCard)