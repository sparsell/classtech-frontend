import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../actions/addStudent.js'
import { Link } from 'react-router-dom'

class NewStudentForm extends React.Component {
    
    state = {
            name: '',
            school: '',
            // grade_name: '', 
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
            event.preventDefault()
            this.props.addStudent(this.state, this.props.history)
            this.setState({
                name: '',
            school: '',
            // grade_name: '', 
            grade_id: '', 
            has_phone: false,
            has_other_device: false,
            screen_time: ''
            })
            // this.props.router.push('/student/show')
        }

    render() {
        return (
         <div className="form-container">
         <h3>Add a Student</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        name="name" //has to match attribute name in state
                        value={this.state.name} 
                        onChange={this.handleChange}
                    />
                    <br></br>
                    <br></br>

                    <label>Grade:</label>
                    <select 
                    // value={this.state.grade_name}
                    // name="grade_name"
                    value={this.state.grade_id}
                    name="grade_id"
                    onChange={this.handleChange}>
                    <option value="" disabled selected>Select Your Grade</option>
                        <option value="2">2nd Grade</option>
                        <option value="3">3rd Grade</option>
                        <option value="4">4th Grade</option>
                        <option value="5">5th Grade</option>
                        <option value="6">6th Grade</option>
                        <option value="7">7th Grade</option>
                        <option value="8">8th Grade</option>
                    </select>
                        
                    <br></br>
                    <br></br>

                    <label>School:</label>
                    <select 
                        value={this.state.school} 
                        name="school"
                        onChange={this.handleChange}> 
                            <option value="" disabled selected>Select Your School</option>
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
                        name="has_phone"
                        type="checkbox"
                        // checked={this.state.has_phone} 
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
                    <div>
                        <label>What screen time limits (if any) does your child have?    </label>
                        <input 
                        type="textarea" 
                            name="screen_time"
                            value={this.state.screen_time} 
                            onChange={this.handleChange}
                        />
                    </div>
                   <br></br>
                   <br></br>

                    <input 
                        className="ui primary button" 
                        type="submit" value="Add Student"
                    />
                    <Link to="/" className="ui primary button">Home</Link>
                </form>
                
        </div>
            )
        }
    }

export default connect(null, {addStudent})(NewStudentForm)
//alternative to mapDispatchToProps
