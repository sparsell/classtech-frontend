import React from 'react'

const Students = props => {
    console.log(props)

    return (
        <div>
        {props.students.map(student => <li key={student.id}>{student.name}</li>)}
        </div>
    )
}

export default Students
