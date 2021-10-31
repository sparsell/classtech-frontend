import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router'
// import NewStudentForm from './NewStudentForm'

const NewStudentButton = () => {
    return (
        <div>
            <Link to={'/students/new'}><button className="ui primary button"> Add a new Student</button></Link>
        </div>
    )
}

export default NewStudentButton