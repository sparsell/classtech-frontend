import React from 'react'
import { connect } from 'react-redux'

const GradeCard = (props) => {
// debugger
    const grade = props.grades.find(grade => grade.id === parseInt(props.match.params.id))
console.log(grade.students)

    return (
        <div>
            <h2>Students in Grade {grade.grade_name} </h2>
            
              {grade.students.map(student => <ul key={student.id}>{student.name}</ul>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
            grades: state.grades
        }
}

export default connect(mapStateToProps)(GradeCard)