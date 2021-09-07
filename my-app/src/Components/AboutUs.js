import React from 'react'
import '../CSS/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope'
import { Container, Row, Col } from 'react-grid-system';

const AboutUs = () => {
    return (
        <div id="outer-about">
            <center>
                <div id="outer-circle">
                    <div class="circletag" id="inner-circle"></div>
                </div>
                <div className="About-Content">
                    HI! I am <b>Akash Rupapara</b>.<br></br>
                    I am from India and currently pursuing MS in Software Engineering in USA. <br></br>My area of interests are MEAN, MERN, Full Stack Development. I am also intereseted in Data Science applications.<br></br>
                    Apart from curriculur, I like Hiking, Travelling and trying new delicious cusines.
                </div>
                <Row id="social-media-icon">
                    <Col>
                        <a href="https://github.com/AkashRupapara">
                            <FontAwesomeIcon icon={faGithub} size="3x"/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/akashrupapara/">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x" /> 
                        </a>
                    </Col>
                    <Col>
                        <a href="mailto:akash.rupapara@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" /> 
                        </a>
                    </Col>
                </Row>
            </center>
        </div>
    )
}

export default AboutUs