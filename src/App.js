import './App.css';
import { React, useState } from 'react';
import { Box, ThemeProvider, Paper } from '@mui/material';
import { themeDark, themeDefault } from './styles/Style';
import HomePage from './pages/Portfolio/HomePage';
import AboutMe from './pages/Portfolio/AboutMe';
import Languages from './pages/Portfolio/Languages';
import Projects from './pages/Portfolio/Projects';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { Routes, Route, HashRouter } from 'react-router-dom';
import BlogPage from './pages/Blog/Blog';
import BlogPage1 from './pages/Blog/BlogPage1';
import LandingPage from './pages/Portfolio/LandingPage';

function App() {
  

  return (
 
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/blog1" element={<BlogPage1 />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;