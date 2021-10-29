import React from 'react'

const Grades = (props) => {

 console.log(props)

        return (
            <div>
                Grades Component
                {props.grades.map(grade => <ul key={grade.id}>{grade.grade_name}</ul>)}
            </div>
        )
}

export default Grades
