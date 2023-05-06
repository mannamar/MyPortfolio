import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import AboutMe from './components/AboutMe';
import Headbox from './components/Headshot';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <MyNavbar/>
        <AboutMe/>
        <Headbox/>
      </Row>
    </Container>
  );
}

export default App;
