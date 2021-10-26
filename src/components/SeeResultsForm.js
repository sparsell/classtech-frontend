import React from 'react'
// import SchoolFilter from './components/SchoolFilter'
import GradeFilter from './GradeFilter'

class SeeResultsForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            school: '',
            grade: ''
        }
    }
        handleGradeSubmit(event) {
            event.preventDefault()
        }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            
                {/* <label>School:</label>
                    <input type="select" onChange={this.handleNameChange} value={this.state.value} /> */}

                    <label>Grade:</label>
                    <GradeFilter />
                   c */}
                    <input type="submit"></input>
            </form>        
        </div>
        )
    }
}

export default SeeResultsForm