import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
    
    const student = props.student
    console.log(student)

    const phoneCheck = (student) => {
        debugger
    const hasPhone = student.has_phone;
        if (hasPhone) {
            return <a><Icon name='check' /></a>;
        }   
        return <a><Icon name='x' /></a>;
}

    return (
    <div className="ui card">
       <Card>
       <Card.Header>{student.phoneCheck}</Card.Header>
        <Card.Content>
            <Card.Header>{student.name}</Card.Header>
                <Card.Meta>{student.school} School</Card.Meta>
                <Card.Meta>{student.has_phone}</Card.Meta>
                <Card.Meta>{student.has_other_device}</Card.Meta>
                <Card.Description>{student.screen_time}</Card.Description>
        </Card.Content>
    </Card>
    </div>
    )
    
}

export default StudentCard