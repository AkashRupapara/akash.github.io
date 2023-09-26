import React from 'react';
import { Row, Col } from 'react-grid-system';
import { faMeta, faBrands } from '@fortawesome/free-brands-svg-icons/faDocker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from './SectionTitle';

function Experience() {
    return (
        <div id="section">
            <center>
                <SectionTitle title='Experience'/>
                <div className="icons">
                    <Row>
                        <Col>
                            <img src='/Images/lacework.png' alt='lacework' style={{height: '50px', width: '150px'}}/>
                        </Col>
                        <Col>
                            <img src='/Images/meta.png' alt='meta' style={{height: '50px', width: '150px'}}/>
                        </Col>
                        <Col>
                            <img src='/Images/ss8.png' alt='meta' style={{height: '50px', width: '150px'}}/>
                        </Col>
                    </Row>
                </div>
            </center>
        </div>
    )
}

export default Experience
