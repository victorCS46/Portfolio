import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="about" element={ <About /> } />
        <Route path="projects" element={ <Projects /> } />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default Index;