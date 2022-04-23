import { createTheme } from '@mui/material/styles';
import lightImage from './1.jpg'
import darkImage from './2.jpg'

export const themeDefault = createTheme({
  palette: {
    primary: {
      main: 'rgba(29,100,45,0.72)',
      dark: 'rgba(35,45,201,0.76)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(106,135,218,0.72)',
    },
    background: {
      default: '#efefef',
      paper: '#fbfbfb',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
    },
    styles: {
      backgroundImage: "url(" + lightImage + ")",      
    },
  }
})

export const themeDark = createTheme({
  palette: {
    primary: {
      main: 'rgba(71,82,133,0.72)',
      contrastText: '#b7b4b4',
    },
    secondary: {
      main: '#c9b6c0',
    },
    background: {
      default: '#223322',
      paper: '#323337',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
    },
    styles: {
      backgroundImage: "url(" + darkImage + ")",
    },
  },
})