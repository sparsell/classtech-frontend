import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
    
    const student = props.student
    console.log(student)
    return (
        <div className="card-container"
        style={{
          width: "50%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto"
        }}
        >   <div>
                <p>{student.name}</p>
                <p>{student.school} School</p>
                <p>Has a phone? {student.has_phone.value}</p>
                <p>Has a different device?{student.has_other_device}</p>
                <p>{student.screen_time}</p>
            </div>

        

        </div>
    )
//    check if has_phone = true, x if has_phone = false
    
}

export default StudentCard