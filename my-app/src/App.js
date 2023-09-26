import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Navigation from './Components/Navigation'
import AboutUs from './Components/AboutUs';
import './CSS/styles.css'
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import { Router, Route, Switch } from 'react-router';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <div>
      <Navigation />    
    </div>
  );
}

export default App;
