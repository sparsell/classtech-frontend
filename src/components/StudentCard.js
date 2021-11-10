import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import LikeButton from './LikeButton'

const StudentCard = (props) => {
    
    const student = props.student

    const phoneCheck = (student) => {
        const hasPhone = student.has_phone
            if (hasPhone) {
                return <p><Icon name='check' className="has-phone-true"/> has a phone</p>
            }   
                return <p><Icon name='x' className="has-phone-false"/> does not have a phone</p>;
    }

    const otherDeviceCheck = (student) => {
        const hasOtherDevice = student.has_other_device
            if (hasOtherDevice) {
                return <p><Icon name='check' className="has-phone-true"/> has another device</p>
            }
                return <p><Icon name='x' className="has-phone-false"/> doesn't have another device</p>
    }

    return (
        <div className="ui card">
            <Card>
                <Card.Content>
                    <Card.Header>{student.name}</Card.Header>
                        <Card.Meta>{student.school} School</Card.Meta>
                        <Card.Description>{phoneCheck(student)}</Card.Description>
                        <Card.Description>{otherDeviceCheck(student)}</Card.Description>
                        <Card.Description><p><Icon name='ban'/>{student.screen_time}</p></Card.Description>
                        <LikeButton studentId={student.id}/>
                </Card.Content>
            </Card>
        </div>
    ) 
}

export default StudentCard