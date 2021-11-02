import React from 'react'

const Students = props => {
    console.log(props)

    return (
        <div>
        {props.students.map(student => <ul key={student.id}>{student.name}</ul>)}
        </div>
    )
}

export default Students

