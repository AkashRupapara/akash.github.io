import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode';
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython';
import { faAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faJava } from '@fortawesome/free-brands-svg-icons/faJava';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';


import { Container, Row, Col } from 'react-grid-system';

function Skills() {
    return (
        <div id="skills">
            <center>
                <h1 className="title"><i>Skills</i></h1>
                <div className="icons">
                    <Row>
                        <Col>
                            <img src="/Images/react.png" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faNode} size="4x" />
                        </Col>

                        <Col>
                            <FontAwesomeIcon icon={faPython} size="4x" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faAws} size="4x" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faJava} size="4x" />
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faDocker} size="4x" />
                        </Col>
                        <Col>
                            <img src="/Images/c++.png" />
                        </Col>
                    </Row>
                </div>
            </center>
        </div>
    )
}

export default Skills
