import React from 'react'
import Greeting from '../components/Greeting'
import Intro from '../components/Intro'
import LandingPageImage from '../components/LandingPageImage'
import NewStudentButton from '../components/NewStudentButton'
import ShowResultsButton from '../components/ShowResultsButton'

const HomePage = () => {
    return (
        <div>
            <div>
                <Greeting />
                </div>
                <h1> Who has a phone in your grade?</h1>
                <div>
                <LandingPageImage />
                <Intro />
            </div>

            <br></br>
            <br></br>

            <div>
                <ShowResultsButton />
                <h3> -- OR -- </h3>
                <NewStudentButton />   
            </div>
        </div>
    )
}

export default HomePage