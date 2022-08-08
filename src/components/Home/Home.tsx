import React from 'react';
import { Box, Typography } from '@mui/material';

const homeInfo = [
  {
    text: '🇩🇴 De Republica Dominicana, Santo Domingo.',
  },
  {
    text: '💻 Software Developer en Viva Dominicana.',
  },
  {
    text: '⚾ Amor por el baseball.',
  },
  {
    text: '✉️ Contactame.',
  },
];

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box width="100%"
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
            Hi, I'm <span style={{background: 'cyan', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Victor</span><span>🤚</span>
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
                >
                  {item.text}
                </Box>
              ))
            }
          </Box>
          <Box>
            
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Home;