import React from 'react';
import { Box, Grid } from '@mui/material';
import Terminal from './Terminal';

const About = (): JSX.Element => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="1rem"
    >
      {/* terminal style based on ZSH steef theme */}
      <Terminal>
        {/* header */}
        <p>
          <span style={{color: '#af5fff'}}>victorcruz</span> at 
          <span style={{color: '#d75f00'}}> about</span> in 
          <span style={{color: '#87fd03'}}> ~/portfolio</span> 
          <span style={{color: '#56c2e6'}}> (main)</span><br/>
          $ cat aboutMe.txt
        </p>
        {/* body */}
        <p>
          I'm a software developer that is aiming to become a FullStack Developer
          by everyday trying to improve my skills and learnings in Web and Mobile development.
          <br/><br/>
          Actually I am focused in the Frontend area using libraries as React and React Native for work
          but also studying on how to use others frameworks for Frontend like Angular.
        </p>
      </Terminal>
      
      <Terminal>
        {/* header */}
        <p>
          <span style={{color: '#af5fff'}}>victorcruz</span> at 
          <span style={{color: '#d75f00'}}> about</span> in 
          <span style={{color: '#87fd03'}}> ~/portfolio</span> 
          <span style={{color: '#56c2e6'}}> (main)</span><br/>
          $ cd skills/ && ls
        </p>
        {/* body */}
        <Grid
          container
          component="ul"
          sx={{listStyleType: 'none'}}
          display="flex"
          // justifyContent="space-between"
        >
          <Grid item xs={6}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>React</li>
            <li>React Native</li>
            <li>AWS Lambda</li>
          </Grid>
          <Grid item xs={6}>
            <li>Node</li>
            <li>Git</li>
            <li>Github</li>
            <li>Gitlab</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>OracleDB</li>
          </Grid>
        </Grid>
        <br/>
      </Terminal>

      <Terminal>
        {/* header */}
        <p>
          <span style={{color: '#af5fff'}}>victorcruz</span> at 
          <span style={{color: '#d75f00'}}> about</span> in 
          <span style={{color: '#87fd03'}}> ~/portfolio</span> 
          <span style={{color: '#56c2e6'}}> (main)</span><br/>
          $ cd hobbies/ && ls
        </p>
        {/* body */}
        <Box component="ul">
          <li>🎮 Gaming</li>
          <li>⚾ Baseball</li>
        </Box>
      </Terminal>
    </Box>
  );
}

export default About;