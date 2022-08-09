import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Terminal from './Terminal';

const About = (): JSX.Element => {

  const { palette } = useTheme();

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
        {/* WIP */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
        >
          <Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/javascript.png')} />
              <span>JavaScript</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/typescript.png')}/>
              <span>TypeScript</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/php.png')}/>
              <span>PHP</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/laravel.png')} width={48} height={40}/>
              <span>Laravel</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/react.png')}/>
              <span>React</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/react.png')}/>
              <span>React Native</span>
            </Box>
          </Box>
          <Box>
          <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/node.png')} />
              <span>Node</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/git.png')}/>
              <span>Git</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/git.png')}/>
              <span>Github</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/gitlab.png')} />
              <span>Gitlab</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/postgre.png')}/>
              <span>PostgreSQL</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/mysql.png')}/>
              <span>MySQL</span>
            </Box>
          </Box>
          <Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/oracle.png')}/>
              <span>OracleDB (PL/SQL)</span>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <img src={require('../../assets/icons/aws.png')}/>
              <span>AWS Lambda</span>
            </Box>
          </Box>
        </Box>
        <br/>
      </Terminal>
    </Box>
  );
}

export default About;