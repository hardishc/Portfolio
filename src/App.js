import './App.css';
import { React, useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Languages from './pages/Languages';
import Projects from './pages/Projects';
import { Box, Grid, ThemeProvider, Paper } from '@mui/material';
import { themeDark, themeDefault } from './styles/Style';


function App() {
  const [mode, setMode] = useState(themeDefault);

  return (
    <Paper sx={{overflow: 'hidden'}}>
      <ThemeProvider theme={mode} >
        <Box sx={{ backgroundSize: 'cover'}} style={mode.palette.styles}>
          <NavBar setMode={setMode} />
          <SideBar />
          <HomePage />
        </Box>
        <AboutMe />
        <Languages />
        <Projects />
      </ThemeProvider>
    </Paper>
  );
}

export default App;