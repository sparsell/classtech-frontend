import React from 'react'
import { Link } from 'react-router-dom'

const NewStudentButton = () => {
    
    return (
        <div>
            <Link to={'/students/new'}><button className="ui primary button"> Add a new Student</button></Link>
        </div>
    )
}

export default NewStudentButton