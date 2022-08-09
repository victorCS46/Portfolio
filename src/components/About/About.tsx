import React from 'react';
import { Box } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

const About = (): JSX.Element => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="1rem"
    >
      <Box width={{ xs: '80%', md: '50%' }}>
        <Box
          borderRadius="0.5rem 0.5rem 0 0"
          display="flex"
          alignItems="center"
          p="0.5rem"
          sx={{background: '#8c8c8c'}}
        >
          <FiberManualRecord sx={{color: '#ff6057'}} fontSize="small" />
          <FiberManualRecord sx={{color: '#ffbd2e'}} fontSize="small" />
          <FiberManualRecord sx={{color: '#27c93f'}} fontSize="small" />
        </Box>
        <Box
          borderRadius="0 0 0.5rem 0.5rem"
          p="1rem"
          fontFamily="Courier New, Courier, monospace"
          fontSize="1.5rem"
          color="#fff"
          sx={{background: '#27242f'}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nulla eget suscipit suscipit. Ut eu mi vel urna condimentum euismod a ut nisl. Praesent sagittis id leo sed tincidunt. Sed egestas augue eget dignissim tempor. Donec bibendum ornare ligula ut mattis. 
        </Box>
      </Box>
    </Box>
  );
}

export default About;