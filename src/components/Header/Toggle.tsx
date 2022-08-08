import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

const style = {
  transition: 'all 250ms ease',
  "&:hover": {
    transition: 'all 250ms ease',
    transform: 'translateY(-3px)',
    // color: 'rgb(154, 101, 250)',
  }
};

const Toggle = ({ toggleTheme }: any) => {
  const { palette } = useTheme();
  return (
    <IconButton onClick={toggleTheme} sx={style}>
      {
        palette.mode === 'light'
        ? (<DarkMode  style={{color: palette.text.primary}} />)
        : (<LightMode style={{color: palette.text.primary}} />)
      }   
      {/* {
        palette.mode === 'light'
        ? '🌑'
        : '🌕'
      }    */}
    </IconButton>
  )
}

export default Toggle;