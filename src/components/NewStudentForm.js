import React from 'react'
// import Button from 'react-bootstrap/Button';

class NewStudentForm extends React.Component {

    constructor() {
        super()
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleNameSubmit.bind(this)
        this.handleSubmit = this.handleGradeSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleNameSubmit(event) {
        alert(`${this.state.value} was added`)
        event.preventDefault()
    }

    handleGradeSubmit(event) {
        alert("A new student was added")
        event.preventDefault()
    }

    render() {
        return (
         <div className="new-student" class="col-sm">
              <h3>Add a student</h3>
                <form onSubmit={this.handleNameSubmit}>
                    <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleNameChange}/>
                    </label>

                    <label>
                    Grade:
                    <input type="text" value={this.state.value} onChange={this.handleGradeSubmit} />
                    </label>
                      {/* <Button variant="secondary" type="submit" value="submit">
                        Add Product
                    </Button> */}
                </form>
        </div>
            )
        }
    }

    export default NewStudentForm