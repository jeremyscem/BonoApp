'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {

    h1: {
      fontWeight:900,
      fontSize: '34px',
      marginBottom: '5px',
    },
    h2: {
      fontWeight:500,
      fontSize: '18px',
      marginBottom: '15px',

    },
    h3: {
      fontWeight:700,
      fontSize: '18px',
      marginBottom: '5px',
    },

    body1:{
      color:"rgb(17, 17, 17)"
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(51, 51, 51)',
        },
      },
    },
    MuiLink:{
      styleOverrides: {
        root: {
        color: 'rgb(51, 51, 51)',
        ':visited': {
          color: 'rgb(51, 51, 51)',
          },
          textDecorationColor: 'rgb(51, 51, 51)',
        },
      
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: 'white',
          border: '2px solid rgb(51, 51, 51)',
        },
      },
    }
  }
});

export default theme;