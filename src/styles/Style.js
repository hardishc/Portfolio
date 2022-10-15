import {createTheme} from '@mui/material/styles';
import lightImage from './Light.jpg'
import darkImage from './Dark.jpg'

export const themeDefault = createTheme({
    palette: {
        primary: {
            main: 'rgba(29,100,45,0.72)',
            lightText: '#d0d8d0',
            darkText: 'rgba(29,100,45,0.72)'
        },
        secondary: {
            main: 'rgba(29,100,45,0.72)',
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
        theme: 'light'
    }
});

export const themeDark = createTheme({
    palette: {
        primary: {
            main: 'rgba(71,82,133,0.72)',
            darkText: '#d0d8d0',
            lightText: '#d0d8d0'
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
        theme: 'dark'
    },
});