import React from 'react'
import { connect } from 'react-redux'
import Grades from '../components/Grades.js'
import fetchGrades from '../actions/fetchGrades.js'


class GradesContainer extends React.Component {

    componentDidMount() {
            this.props.fetchGrades()
            //  debugger
        }

    render() {
        // console.log("Grades Container data", this.props.grades)
        return (
           
            <div>
            <Grades grades={this.props.grades}/>
            </div>
        )
    }
}

 const mapStateToProps = state => {
        return {
            grades: state.grades
        }
    }

export default connect(mapStateToProps, {fetchGrades})(GradesContainer)
