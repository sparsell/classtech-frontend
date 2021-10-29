Notes.md
Photo by <a href="https://unsplash.com/@punttim?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tim Gouw</a> on <a href="https://unsplash.com/s/photos/children-phone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

  import React from 'react'

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
         <div className="new-student" className="col-sm">
              <h3>Add a student</h3>
                <form onSubmit={this.handleNameSubmit}>
                    <label>
                    Name:
                    <input type="text" onChange={this.handleNameChange} value={this.state.value} />
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

 {/* <select>{
                 this.state.grades.map((grade) => {
                     return <option value={grade.id}>{grade.grade_name}</option>
                 })
              }</select> */}

               {/* <label>Does your child have a phone?   </label>
                    <input 
                        type="checkbox" 
                        name="has_phone"
                        value={this.state.has_phone} 
                        onChange={this.handleCheckbox}
                    /> */}