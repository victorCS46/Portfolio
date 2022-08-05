import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import { lightTheme, darkTheme } from '../theme/theme';

const Pages = () => {

  const [isDark, setIsDark] = React.useState<boolean>(false);

  const toggleTheme = (): void => setIsDark(!isDark);

  return (
    <React.Fragment>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <CssBaseline />
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="projects" element={ <Projects /> } />
        </Routes>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Pages;