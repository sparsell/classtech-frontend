import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions/addStudent.js'
import { Link } from 'react-router-dom'

class NewStudentForm extends React.Component {
    
    state = {
            name: '',
            school: '',
            grade_id: '', 
            has_phone: false,
            has_other_device: false,
            screen_time: ''
        }
        
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            })
        }

        handleCheckbox = (event) => {
            const target = event.target
            const value = target.type === 'checkbox' ? target.checked : target.value
            const name = target.name
            this.setState({
                 [name]: value
            })
        }

        handleSubmit = (event) => {
            // debugger
            event.preventDefault()
            // this.props.addStudent(this.state)
            this.props.addStudent(this.state, this.props.history)
            this.setState({
                name: '',
                school: '', 
                grade_id: '', 
                has_phone: false,
                has_other_device: false,
                screen_time: ''
            })
        }

    render() {
        return (
         <div className="form-container">
            <h3>Add a Student</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" //has to match attribute name in state
                        value={this.state.name} 
                        onChange={this.handleChange}
                        placeholder="First name"
                    />

                    <br></br>
                    <br></br>

                    <label>Grade:</label>
                    <select 
                        name="grade_id"
                        value={this.state.grade_id}
                        onChange={this.handleChange}>
                            <option defaultValue="">Select Your Grade</option>
                            <option value="1">2nd Grade</option>
                            <option value="2">3rd Grade</option>
                            <option value="3">4th Grade</option>
                            <option value="4">5th Grade</option>
                            <option value="5">6th Grade</option>
                            <option value="6">7th Grade</option>
                            <option value="7">8th Grade</option>
                    </select>
                        
                    <br></br>
                    <br></br>

                    <label>School:</label>
                    <select 
                        name="school"
                        value={this.state.school} 
                        onChange={this.handleChange}> 
                            <option defaultValue="">Select Your School</option>
                            <option>North Street</option>
                            <option>Riverside</option>
                            <option>Parkway</option>
                            <option>Glenville</option>
                            <option>Western Middle</option>
                            <option>Central Middle</option>
                            <option>Eastern Middle</option>
                    </select>

                    <br></br>
                    <br></br>

                    <label>My child has a phone (check if "yes"):</label>
                    <input
                        type="checkbox"
                        name="has_phone"
                        value={this.state.has_phone}
                        onChange={this.handleCheckbox} 
                    />
        
                    <br></br>

                    <label>My child has another / a different electronic device (check box if "yes"):</label>
                    <input 
                        type="checkbox" 
                        name="has_other_device"
                        value={this.state.has_other_device} 
                        onChange={this.handleCheckbox}
                    />

                    <br></br>

                    <label>What screen time limits (if any) does your child have?    </label>
                    <input 
                        type="textarea" 
                        name="screen_time"
                        value={this.state.screen_time} 
                        onChange={this.handleChange}
                    />
                   
                   <br></br>
                   <br></br>

                    <input 
                        className="ui primary button" 
                        type="submit" value="Add Student"
                    />

                    <Link to="/" className="ui primary button">Home</Link>
                    <Link to="/grades" className="ui primary button">See Grades</Link>
                </form>  
        </div>
        )
    }
}

export default connect(null, {addStudent})(NewStudentForm)
