import React from 'react'
import { Image } from 'semantic-ui-react'
import myImage from '../images/kids_with_phone.jpg'

const LandingPageImage = () => { 
    return (
    <Image src={ myImage } className="homepage-image"/>
    )
}   

export default LandingPageImage
