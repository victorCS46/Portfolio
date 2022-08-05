import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Grid, IconButton, Typography, useTheme } from '@mui/material';
import '../../styles/header.css';
import { DarkMode, LightMode } from '@mui/icons-material';

interface ILink {
  name: string;
  to: string;
  url?: string;
}

const links: ILink[] = [
  {
    name: 'Home',
    to: '/'
  },
  {
    name: 'About me',
    to: '/about'
  },
  {
    name: 'Main',
    to: '/',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
  },
  {
    name: 'Portfolio',
    to: '/projects'
  },
];

const classes = {
  headerItem: {
    textDecoration: 'none',
    transition: 'all 250ms ease',
    "&:hover": {
      transition: 'all 250ms ease',
      transform: 'translateY(-3px)',
      color: 'rgb(154, 101, 250)',
    }
  },
  headerLi: {
    listStyleType: 'none',
  }
};

const Header = ({ toggleTheme }: any): JSX.Element => {

  const { pathname } = useLocation();
  const { palette } = useTheme();

  const selectedPath = (path: string): string|undefined => pathname === path 
    ? 'vcs-header-selected' 
    : undefined;

  return (
    <>
      <Grid container component={'nav'}>
        <Grid
          item
          component="ul"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={{xs: '2rem', md: '8rem'}}
          marginTop={2}
          width="100%"
        >
          {
            links.map((item) => (
              <Grid
                item
                component="li"
                style={classes.headerLi}
                key={ item.name }
              >
                <Link to={ item.to } style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={[classes.headerItem, {color: palette.text.primary}]}
                    className={ item.name !== 'Main' ? selectedPath(item.to) : '' }
                  >
                    {
                      !item.url 
                      ? item.name 
                      : <img src={item.url} alt="img?" height={50} width={60} />
                    }
                  </Typography>
                </Link>
              </Grid>
            ))
          }
          <Grid
            item
            component="li"
            style={classes.headerLi}
          >
            <IconButton onClick={toggleTheme} sx={classes.headerItem}>
              {
                palette.mode === 'light'
                ? (<DarkMode  style={{color: palette.text.primary}} />)
                : (<LightMode style={{color: palette.text.primary}} />)
              }    
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;