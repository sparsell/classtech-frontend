import React from 'react'
import { Link } from 'react-router-dom'

const Grades = (props) => {
   
 console.log(props)
        return (
            <div>
                <h2>View By Grade</h2>
                    <div>
                        {/* {props.grades.students.map(grade => <ul key={grade.id}>{grade.grade_name}</ul>)} */}
                        {props.grades.map(grade => 
                        <Link to={`/grades/${grade.id}/students`}> <button className="ui primary button grades" key={grade.id}>{grade.grade_name}</button></Link>)}
                </div>
            </div>
        )
    }

export default Grades
           