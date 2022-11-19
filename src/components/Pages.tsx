import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import About from './About/About';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import { lightTheme, darkTheme } from '../theme/theme';
import { getUser } from '../api/githubApi';

const Pages = (): JSX.Element => {

  const [isDark, setIsDark] = React.useState<boolean>(false);
  const [avatar, setAvatar] = useState('');

  const toggleTheme = (): void => setIsDark(!isDark);

  useEffect(() => {
    const user = async () => {
      try {
        const response = await getUser('victorcs46');
        const { data } = response;
        setAvatar(data.avatar_url);
      } catch (error) {
        console.log(error);
      }
    };
    user();
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={!isDark ? lightTheme : darkTheme}>
        <CssBaseline />
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <Grid item>
            <Header toggleTheme={toggleTheme} avatar={avatar} />
          </Grid>
          <Grid item flexGrow={1}>
            <Routes>
              <Route path="/" element={ <Home avatar={avatar} /> } />
              <Route path="about" element={ <About /> } />
              <Route path="projects" element={ <Projects /> } />
            </Routes>
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Pages;