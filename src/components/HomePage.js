import React from 'react'
import GradeFilter from '../components/GradeFilter'
import SchoolFilter from '../components/SchoolFilter'
import NewStudentButton from '../components/NewStudentButton'
import ShowResultsButton from '../components/ShowResultsButton'
import SeeResultsForm from '../components/SeeResultsForm'

// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'



const HomePage = () => {
    return (
        <div>
            <h1 className="question">Who has a phone in <GradeFilter /> at <SchoolFilter /> ?</h1>
            <div>
                <ShowResultsButton  />
             </div>
            <div>
                <SeeResultsForm />
                <h3> -- OR -- </h3>
                <NewStudentButton />
            </div>
        </div>
    )
}

export default HomePage