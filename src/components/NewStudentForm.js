import React from 'react'
import GradeFilter from "./GradeFilter"

class NewStudentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            school: '',
            grade: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

        handleChange(event) {
            this.setState({name: event.target.value})
        }
        handleSubmit(event) {
            event.preventDefault()
        }

    render() {
        return (
         <div className="new-student">
         NewStudentForm
              <h3>Add a student</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" value={this.state.value} />

                    <label>School:</label>
                    <input type="select" />

                    <label>Grade:</label>
                    {/* <input type="select" /> */}
                    <GradeFilter />

                    <input type="submit"></input>
                </form>
        </div>
            )
        }
    }

export default NewStudentForm
