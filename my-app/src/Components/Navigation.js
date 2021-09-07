import React from 'react'
import { Container, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '../CSS/styles.css';
import Resume from './Resume';
import Footer from './Footer';
import MainComponent from './MainComponent';

const Navigation = () => {

    return (
        <Router>
            <Container id='navbar-items'>
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Resume">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Switch>
                <Route exact path="/">
                    <MainComponent />
                </Route>
                <Route exact path="/Resume">
                    <Resume />
                    <Footer />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;