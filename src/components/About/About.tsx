import { Box } from '@mui/material';
import React from 'react';

const About = (): JSX.Element => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="1rem"
      border={'1px solid black'}
    >
      <Box
        width={{ xs: '80%', md: '50%' }}
        borderRadius="1rem 1rem 0 0"
        border={'1px solid black'}
      >
        header
      </Box>
      <Box>
        body
      </Box>
    </Box>
  );
}

export default About;