import './App.css';
import { React, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import BlogPage from './pages/Blog/Blog';
import BlogPage1 from './pages/Blog/BlogPage1';
import BlogPage2 from './pages/Blog/BlogPage2';
import LandingPage from './pages/Portfolio/LandingPage';

function App() {
  

  return (
 
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/blog/blog1" element={<BlogPage1 />}></Route>
        <Route path="/blog/blog2" element={<BlogPage2 />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;