import './App.css';
import { React } from 'react';
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