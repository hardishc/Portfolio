import './App.css';
import { React, useState } from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Languages from './components/Languages';
import Projects from './components/Projects';
import { Box, Grid, ThemeProvider, Switch, Button } from '@mui/material';
import { themeDark, themeDefault } from './styles/Style';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="App">
      <ThemeProvider theme={themeDefault}>
        <NavBar />        
        <SideBar />            
        <Switch sx={{mt:0}}/>
        <HomePage />        
        <AboutMe />
        <Box style={{ width: '100vw', height: '100vh' }} >
          <Grid container spacing={4} justifyContent="center" >
            <Languages />
          </Grid>
        </Box>
        <Projects />
      </ThemeProvider>
    </div>
  );
}

export default App;