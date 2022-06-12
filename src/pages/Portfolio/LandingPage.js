import '../../App.css';
import { React, useState } from 'react';
import { Box, ThemeProvider, Paper } from '@mui/material';
import { themeDark, themeDefault } from '../../styles/Style';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Languages from './Languages';
import Projects from './Projects';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

function LandingPage() {
    const [mode, setMode] = useState(themeDefault);
    return (
        <Paper sx={{ overflow: 'hidden' }}>
            <ThemeProvider theme={mode} >
                <Box sx={{ backgroundSize: 'cover' }} style={mode.palette.styles}>
                    <NavBar setMode={setMode} />
                    <SideBar />
                    <HomePage />
                </Box>
                <AboutMe />
                <Languages />
                <Projects />
            </ThemeProvider>
        </Paper>
    )
}

export default LandingPage