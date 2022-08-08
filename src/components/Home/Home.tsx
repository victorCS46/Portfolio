import React from 'react';
import { Box, Link, Tooltip, useTheme } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './home.css';

interface IHomeInfo {
  text: string;
}

interface ISocialMedia {
  mediaName: string;
  iconComponent: JSX.Element;
  url: string;
}

const homeInfo: IHomeInfo[] = [
  {
    text: '🇩🇴 From Dominican Republic, Santo Domingo.',
  },
  {
    text: '💻 Software Developer at Viva Dominicana.',
  },
  {
    text: '⚾ Love for baseball.',
  },
  {
    text: '✉️ Contact me.',
  },
];

const socialMedia: ISocialMedia[] = [
  {
    mediaName: 'github',
    iconComponent: (<GitHub fontSize="large" />),
    url: 'https://github.com/victorCS46',
  },
  {
    mediaName: 'linkedin',
    iconComponent: (<LinkedIn fontSize="large" />),
    url: 'https://www.linkedin.com/in/victor-cruz-b245b5213/',
  },
];

const Home = (): JSX.Element => {

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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
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
            Hi, I'm <span style={{color: 'cyan'}}>Victor</span><span>🤚</span>
          </h1>
          <h2>I'm a front-end Developer</h2>
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
                >
                  {item.text}
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