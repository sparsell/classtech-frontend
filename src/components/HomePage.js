import React from 'react';
import Greeting from '../components/Greeting';
import Intro from '../components/Intro';
import OptionView from '../components/OptionView';
import LandingPageImage from '../components/LandingPageImage';
import NewStudentButton from '../components/NewStudentButton';
import ShowResultsButton from '../components/ShowResultsButton';
import { Segment, Header, Image, Container } from 'semantic-ui-react';

const HomePage = () => {
    return (
        <Segment className="cover">
                    <Greeting />
                    <LandingPageImage />
                    <Intro />

            <div className="homepage-buttons">
                <ShowResultsButton />
                <h3> -- OR -- </h3>
                <NewStudentButton />   
             </div>
             <OptionView />
        </Segment>
      
    )
}

export default HomePage