// Amardeep Mann
// Portfolio Website
// 5-14-23
// Made a portfolio website in React to showcase our skills

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

import pokeImg from './assets/images/pokepedia.png';
import signImg from './assets/images/signshop.png';
import gameImg from './assets/images/gameswap.png';

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
      <Row className='mt-4 mb-4'>
        <ProjCard title="Pokepedia" text="Modern Pokemon Encyclopedia" img={pokeImg} url="https://pokepedia.azurewebsites.net/"/>
        <ProjCard title="The Sign Shop" text="Local Business Redevelopment" img={signImg} url="https://thesignshop.azurewebsites.net/"/>
        <ProjCard title="Gamewap (In Development)" text="Fullstack Second-Hand Marketplace" img={gameImg} url="https://github.com/mannamar/gameswap"/>
      </Row>
    </Container>
  );
}

export default App;
