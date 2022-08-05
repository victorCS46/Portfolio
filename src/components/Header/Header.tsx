import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid, IconButton, Typography, useTheme } from '@mui/material';
import '../../styles/header.css';
import { DarkMode } from '@mui/icons-material';

const Header = ({ toggleTheme }: any): JSX.Element => {

  const { pathname } = useLocation();
  const { palette } = useTheme();

  const selectedPath = (path: string): string|undefined => pathname === path 
    ? 'vcs-header-selected' 
    : undefined;

  return (
    <>
      <Grid
        container
        spacing={0}
        justifyContent="space-evenly"
      >
        <Grid
          item
          xs={0}
          className={ selectedPath('/')}
        >
          <Typography>
            <Link to="/" style={{ textDecoration: 'none', color: palette.text.primary }}>
                Home
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={0}
          className={ selectedPath('/about')}
        >
          <Typography>
            <Link to="/about" style={{ textDecoration: 'none', color: palette.text.primary }}>
                About me
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={0}
          className={ selectedPath('/projects')}
        >
          <Typography>
            <Link to="/projects" style={{ textDecoration: 'none', color: palette.text.primary }}>
                Portfolio
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          xs={0}
        >
          <IconButton onClick={toggleTheme}>
            <DarkMode style={{color: palette.text.primary}} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;