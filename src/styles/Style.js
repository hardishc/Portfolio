import { createTheme, Paper } from '@mui/material/styles';
import defaultImage from './background.jpeg';

export const themeDefault = createTheme({
  palette: {
    primary: {
      main: 'rgba(29,100,45,0.72)',
    },
    secondary: {
      main: '#c35700',
    },
    style: {
      bgcolor: 'red'
      // backgroundImage: "url(" + "https://images.unsplash.com/photo-1637408990228-08f245ac4e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1702&q=80" + ")",
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat'
    },
  }
})

export const themeDark = createTheme({
  palette: {
    primary: {
      main: '#031926',
    },
    secondary: {
      main: '#ecede6',
    },
    background: {
      default: '#000000',
    },

    bgcolor: {
      main: 'blue'
      // backgroundImage: "url(" + "https://images.unsplash.com/photo-1650338524059-f0ae486cfa66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" + ")",
      // backgroundPosition: 'center',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat'
    },
  },
})