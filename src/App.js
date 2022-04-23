import './App.css';
import { React, useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Projects from './components/Projects';
import { Box, Grid, ThemeProvider, Paper,Switch } from '@mui/material';
import { themeDark, themeDefault } from './styles/Style';

function App() {
  const [mode, setMode] = useState(themeDefault);

  return (
    <div className="App">
      <ThemeProvider theme={mode}>
        <Paper className="home" sx={{backgroundSize: 'cover'}} style={mode.palette.styles}>
          <NavBar setMode={setMode} />
          <SideBar />
          <HomePage />
        </Paper>
        <Paper >
          <AboutMe />
        </Paper>
        <Paper style={mode.palette.primary}>
          <Box style={{ width: '100vw', height: '100vh' }} >
            <Grid container spacing={4} justifyContent="center" >
              <Languages />
            </Grid>
          </Box>
        </Paper>
        <Paper style={mode.palette.primary}>
          <Projects />
        </Paper>
      </ThemeProvider>
    </div >
  );
}

export default App;