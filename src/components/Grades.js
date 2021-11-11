import React from 'react'
import { Link } from 'react-router-dom'

const Grades = (props) => {

    return (
        <div>
            <h2>View By Grade</h2>
            <div>
                {props.grades.map(grade => 
                <Link to={`/grades/${grade.id}/students`} key={grade.id}> <button className="primary ui button" key={grade.id}>{grade.grade_name}</button></Link>)}
            </div>
        </div>
    )
}

export default Grades
           