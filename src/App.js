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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/Blog/Blog';
import LandingPage from './pages/Portfolio/LandingPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;