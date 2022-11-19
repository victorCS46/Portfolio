import React from 'react';
import { Box, Link, Tooltip, useTheme } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './home.css';

interface IHomeInfo {
  text: string;
  url?: string;
}

interface ISocialMedia {
  mediaName: string;
  iconComponent: JSX.Element;
  url: string;
}

const homeInfo: IHomeInfo[] = [
  {
    text: '🇩🇴 From Dominican Republic, Santo Domingo.',
    url: 'https://www.godominicanrepublic.com/es/',
  },
  {
    text: '💻 Software Developer at Viva Dominicana.',
    url: 'https://viva.com.do/',
  },
  {
    text: '⚾ Love for baseball.',
    url: '#'
  },
  {
    text: '✉️ Contact me.',
    url: 'mailto:victorcruzsuero@gmail.com?subject=Contact%20Me',
  },
];

const socialMedia: ISocialMedia[] = [
  {
    mediaName: 'github',
    iconComponent: <GitHub sx={{fontSize: 46,}} />,
    url: 'https://github.com/victorCS46',
  },
  {
    mediaName: 'linkedin',
    iconComponent: <LinkedIn sx={{fontSize: 46,}} />,
    url: 'https://www.linkedin.com/in/victor-cruz-b245b5213/',
  },
];

const classes = {
  infoTextContainer: {
    transition: 'all 250ms ease',
    "&:hover": {
      transition: 'all 250ms ease',
      transform: 'translateY(-3px)',
    }
  },
  infoText: {
    textDecoration: 'none',
    transition: 'all 250ms ease',
    "&:hover": {
      transition: 'all 250ms ease',
      color: 'rgb(154, 101, 250)',
    }
  },
  mediaIcon: {
    transition: 'all 250ms ease',
    '&:hover': {
      color: 'rgb(154, 101, 250)',
      transition: 'all 250ms ease',
    },
  },
};

const Home = ({ avatar }: any): JSX.Element => {

  const { palette } = useTheme();

  return (
    <React.Fragment>
      <Box
        width="100%"
        display="flex"
        flexDirection={{xs: 'column', md: 'row'}}
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 175px)"
      >
        <Box
          component="img"
          src={avatar}
          width={{xs: '35vh', md: '40vh'}}
          height={{xs: '35vh', md: '40vh'}}
          p={'1rem'}
          mr={{xs: 0, md: '2rem'}}
          mb={{xs: '1rem', sm: 0}}
          style={{
            border: '3px solid',
            borderRadius: '50%',
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
        >
          <h1>
            Hi, I'm <span className="name">Victor</span><span>🤚</span>
          </h1>
          <h2>I'm a Software Developer</h2>
          <Box
            component="ul"
            p="1rem"
          >
            {
              homeInfo.map((item, index) => (
                <Box
                  key={index}
                  component="li"
                  mb={1}
                  sx={classes.infoTextContainer}
                >
                  <Link
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    sx={[classes.infoText, {color: palette.text.primary}]}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))
            }
          </Box>
          <Box
            display="flex"
            flexDirection="row"
          >
            {
              socialMedia.map((item, index) => (
                <Box key={index} mr={2}>
                  <Tooltip title={item.mediaName} arrow>
                    <Link
                      href={item.url}
                      color={palette.text.primary}
                      sx={classes.mediaIcon}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.iconComponent}
                    </Link>
                  </Tooltip>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;