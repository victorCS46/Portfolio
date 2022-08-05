import { createTheme } from "@mui/material";
import { Theme } from "@mui/system";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
  }
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  }
});