import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import '../../styles/header.css';

const Header = (): JSX.Element => {

  const { pathname } = useLocation();

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
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
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
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
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
            <Link to="/projects" style={{ textDecoration: 'none', color: 'black' }}>
                Portfolio
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;