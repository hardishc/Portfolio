import './App.css';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { themeDefault } from './styles/Style';
import { Box, Grid } from '@mui/material';
import SideBar from './components/SideBar';
import Languages from './components/Languages';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeDefault}>
        <NavBar />
        <SideBar />
        <div className="main">
          <Box style={{ width: '100vw', height: '100vh', }} >
            <Grid container spacing={4} alignItems="center" justifyContent="flex-start" sx={{ my: 12.5, mx: 10, height: '100vh' }} >
              <Grid item xs={1} align="left" sx={{ width: 300, height: 300, my: 10 }}>
              </Grid>
              <Grid item xs={5} align="left" sx={{ width: 300, height: 300, my: 10 }}>
                <h2>Hello! I am - </h2>
                <h1>Hardish</h1>
                <p>A self-taught developer with an
                  interest in Computer Science.
                </p>
              </Grid>
            </Grid>
          </Box>
        </div>
        <Box style={{ width: '100vw', height: '100vh' }} >
          <Grid container spacing={4} justifyContent="center" sx={{ my: 12.5 }} >
            <Grid item xs={4} sx={{ width: 300, height: 300, my: 10 }}>
              <h1>My name is</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id metus nec lectus tempor malesuada ut eu purus. Nullam in ullamcorper lectus. Donec cursus ipsum sed gravida sollicitudin. Nam mattis ipsum eu pulvinar euismod. Aliquam tincidunt sit amet enim sit amet malesuada. Aliquam vitae feugiat dolor. Donec fringilla aliquam varius. In congue, est sit amet dictum ultricies, quam est rutrum erat, sit amet semper magna dolor eget orci. Maecenas consectetur, massa feugiat fermentum dignissim, velit eros fermentum felis, id egestas justo felis non mi. Donec ac venenatis lacus, vitae facilisis quam. In interdum, nisl quis rutrum pretium, mauris neque rhoncus justo, ut consectetur erat magna id odio. Maecenas aliquam tempus mi vel laoreet. </p>
            </Grid>
            <Grid item xs={4} sx={{ width: 300, height: 300 }}>
              <img width="400px" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt='profile' />
            </Grid>
          </Grid>
        </Box>

        <Box style={{ width: '100vw', height: '100vh' }} >
          <Grid container spacing={4} justifyContent="center" >
            <Languages />
          </Grid>
        </Box>
        <Projects/>
      </ThemeProvider>

    </div>
  );
}

export default App;