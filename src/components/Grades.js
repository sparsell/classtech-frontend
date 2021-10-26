import React from 'react'

const Grades = (props) => {

 console.log(props)

        return (
            <div>
            
                Grades Component
                {props.grades.map(grade => <li key={grade.id}>{grade.grade_name}</li>)}
            </div>
        )
}

export default Grades
