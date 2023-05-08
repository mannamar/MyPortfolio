import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import AboutMe from './components/AboutMe';
import Headbox from './components/Headshot';
import MyNavbar from './components/MyNavbar';
import Skills from './components/Skills';
import ProjCard from './components/ProjCard';
import Tools from './components/Tools';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <MyNavbar/>
        <AboutMe/>
        <Headbox/>
      </Row>
      <Row className='mt-4'>
        <Skills/>
        <Tools/>
      </Row>
      <Row className='mt-4'>
        <ProjCard/>
        <ProjCard/>
        <ProjCard/>
      </Row>
    </Container>
  );
}

export default App;
