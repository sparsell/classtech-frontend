import React from 'react'
// import { connect } from 'react-redux'

class SeeResultsForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            school: '',
            grade_id: ''
        }
    }

        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        handleSubmit = (event) => {
            event.preventDefault()
            
        }

    render() {
        return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit} className="ui form" >

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
                        <input className="ui primary button" type="submit"/>

            </form>        
        </div>
        )
    }
}

export default SeeResultsForm