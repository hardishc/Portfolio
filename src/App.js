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
    <div className='App' >
      <ThemeProvider theme={mode} >
        <Paper className="home" id="/" sx={{ backgroundSize: 'cover' }} style={mode.palette.styles}>
          <NavBar setMode={setMode} />
          <SideBar />
          <HomePage />
        </Paper>
        <AboutMe />
        <Languages />
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;