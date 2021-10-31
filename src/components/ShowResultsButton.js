import React from 'react'
import { Link } from 'react-router-dom';

const ShowResultsButton = () => {
    return (
        <Link to={'/grades'}><button className="ui primary button"> View by Grade</button></Link>
    )
}

export default ShowResultsButton