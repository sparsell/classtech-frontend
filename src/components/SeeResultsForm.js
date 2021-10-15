import React from 'react'
// import SchoolFilter from './components/SchoolFilter'
// import GradeFilter from './components/GradeFilter'

class SeeResultsForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            school: '',
            grade: ''
        }
    }
        handleSubmit(event) {
            event.preventDefault()
        }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>School:</label>
                    <input type="select" onChange={this.handleNameChange} value={this.state.value} />

                    <label>Grade:</label>
                    <input type="text" value={this.state.value} onChange={this.handleGradeSubmit} />
                    <input type="submit"></input>
            </form>        
        </div>
        )
    }
}

export default SeeResultsForm