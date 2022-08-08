import React from 'react';
import { Box } from '@mui/material';

const date = new Date();

const Footer = (): JSX.Element => (
  <Box
    component="footer"
    display="flex"
    flexDirection="column"
    alignItems="center"
    py="1.5rem"
    sx={{opacity: 0.7}}
    width="100%"
  >
    <span>Creado por <a href="https://github.com/victorCS46">Victor Cruz</a></span>
    <span>&copy; {date.getFullYear()}</span>
  </Box>
)


export default Footer;