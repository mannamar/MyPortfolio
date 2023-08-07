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
import rockImg from './assets/images/rock-paper.png';
import weathImg from './assets/images/weather.png';
import socmImg from './assets/images/socmed.png';
import taskImg from './assets/images/tasktracker.png';
import dealImg from './assets/images/deal.png';
import cyoaImg from './assets/images/cyoa.png';

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
      <Row id="projects" className='mb-4'>
        <ProjCard title="Pokepedia" text="Modern Pokemon Encyclopedia" img={pokeImg} url="https://pokepedia.vercel.app/"/>
        <ProjCard title="The Sign Shop" text="Local Business Redevelopment" img={signImg} url="https://signshop.vercel.app/"/>
        <ProjCard title="Gamewap (In Development)" text="Fullstack Second-Hand Marketplace" img={gameImg} url="https://github.com/mannamar/gameswap"/>
        <ProjCard title="Rock, Paper, Scissors..." text="Classic Game With A Twist" img={rockImg} url="https://mannamar.github.io/MannARockPaperSLS/"/>
        <ProjCard title="The.Weather" text="Rain or Shine It's Good Design" img={weathImg} url="https://theweatherrr.vercel.app/"/>
        <ProjCard title="Social Media Dashboard" text="Track Your Social Currency" img={socmImg} url="https://socmeddash.vercel.app/"/>
        <ProjCard title="Task Tracker" text="Showcasing Drag-and-Drop in React" img={taskImg} url="https://tasktrackerrr.vercel.app/Login"/>
        <ProjCard title="Deal or No Deal" text="Gameshow Based Unity Game" img={dealImg} url="https://i.simmer.io/@amarcs/deal"/>
        <ProjCard title="Super Coding Bro" text="Unity Made Text-Adventure Game" img={cyoaImg} url="https://i.simmer.io/@amarcs/cyoa"/>
      </Row>
    </Container>
  );
}

export default App;
