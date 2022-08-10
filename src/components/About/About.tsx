import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Terminal from './Terminal';
import { GitHub } from '@mui/icons-material';

interface ISkills {
  skill: string;
  url?: string;
};

const skills: ISkills[] = [
  {
    skill: 'JavaScript',
    url: '../../assets/icons/javascript.png',
  },
  {
    skill: 'TypeScript',
    url: '../../assets/icons/typescript.png',
  },
  {
    skill: 'PHP',
    url: '../../assets/icons/php.png',
  },
  {
    skill: 'Laravel',
    url: '../../assets/icons/laravel.png',
  },
  {
    skill: 'React',
    url: '../../assets/icons/react.png',
  },
  {
    skill: 'React Native',
    url: '../../assets/icons/react.png',
  },
  {
    skill: 'Node',
    url: '../../assets/icons/node.png',
  },
  {
    skill: 'Git',
    url: '../../assets/icons/git.png',
  },
  {
    skill: 'Github',
  },
  {
    skill: 'Gitlab',
    url: '../../assets/icons/gitlab.png',
  },
  {
    skill: 'PostgreSQL',
    url: '../../assets/icons/postgre.png',
  },
  {
    skill: 'MySQL',
    url: '../../assets/icons/mysql.png',
  },
  {
    skill: 'OracleDB',
    url: '../../assets/icons/oracle.png',
  },
  {
    skill: 'AWS Lambda',
    url: '../../assets/icons/aws.png',
  },
];

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
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          
        >
          <Box
           display="flex"
           flexDirection="column"
          >   
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>PHP</span>
            <span>Laravel</span>
            <span>React</span>
            <span>React Native</span>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
          >
            <span>Node</span>
            <span>Git</span>
            <span>Github</span>
            <span>Gitlab</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
          >
            <span>OracleDB (PL/SQL)</span>   
            <span>AWS Lambda</span>
          </Box>
        </Box>
        <br/>
      </Terminal>
    </Box>
  );
}

export default About;