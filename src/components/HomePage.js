import React from 'react'
import Greeting from '../components/Greeting'
import Intro from '../components/Intro'
import NewStudentButton from '../components/NewStudentButton'
import ShowResultsButton from '../components/ShowResultsButton'
import LandingPageImage from '../components/LandingPageImage'
import SeeResultsForm from './SeeResultsForm'
import NewStudentForm from './NewStudentForm'
import GradesContainer from '../containers/GradesContainer'
// import StudentCard from '../components/StudentCard'


const HomePage = () => {
    return (
        <div>
            <div>
                <Greeting />
            </div>

             <h1> Who has a phone in your grade?</h1>

            <div>
                <LandingPageImage />
            </div>
             <div>
                <Intro />
            </div>

            <br></br>
            <br></br>

            <div>
            <GradesContainer />
                <ShowResultsButton />
                <SeeResultsForm />
                {/* <Grades /> */}
               
                <h3> -- OR -- </h3>
                <NewStudentButton />
                <NewStudentForm />
                {/* <StudentCard /> */}
                
            </div>

           
        </div>
    )
}

export default HomePage