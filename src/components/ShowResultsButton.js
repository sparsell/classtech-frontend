import React from 'react'
import { Link } from 'react-router-dom';

// const ShowResultsButton = () => {
class ShowResultsButton extends React.Component {

    render() {
    return (
        <Link to={'/gradesearch'}><button onClick={this.handleClick} className="ui primary button"> View by Grade</button></Link>
        )
    }
}

export default ShowResultsButton