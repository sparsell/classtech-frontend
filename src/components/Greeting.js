import React from 'react';
import { Container } from 'semantic-ui-react';

const Greeting = () => {
    return (
        <Container id="greeting-section">
            {/* <div className="ui center aligned"> */}
                <h1 className="app-logo">ClassTech</h1> 
                <h1 className="tagline"> Who has a phone in your grade?</h1>     
            {/* </div> */}
        </Container>
    )
}

export default Greeting

