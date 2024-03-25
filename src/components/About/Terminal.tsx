import { Box, useTheme } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

import './terminal.css';

const Terminal = ({ children }: any): JSX.Element => {

  const { palette } = useTheme();

  return (
    <Box
      width={{ xs: '80%', md: '50%' }}
      className="terminal-shadow"
      my={5}
      sx={{ background: palette.background.default }}
    >
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
        // fontWeight="600"
        color="#fff"
        sx={{background: '#27242f'}}
      >
        { children }
      </Box>
    </Box>
  );
}

export default Terminal;