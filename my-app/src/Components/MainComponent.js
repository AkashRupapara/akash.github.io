import React from 'react'
import AboutUs from './AboutUs'
import Education from './Education'
import Footer from './Footer'
import Skills from './Skills'

function MainComponent() {
    return (
        <div id="main-div">
            <AboutUs />
            <Education />
            <Skills />
            <Footer />
        </div>
    )
}

export default MainComponent