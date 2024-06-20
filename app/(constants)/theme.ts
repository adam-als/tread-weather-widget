'use client';
import { Poppins } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 900, //overriding here from 600
      md: 1000, //overriding here from 900
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 4,
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    common: {
      black: '#232b2b',
    },
    background: {
      default: '#f6d7b0',
      paper: '#f6d7b0',
    },
  },
  /*palette: {
    common: {
      black: '#232b2b',
    },
    primary: {
      main: '#232b2b',
    },
    background: {
      default: '#f6d7b0',
      paper: '#f6d7b0',
    },
  },*/
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },
});

export default theme;
