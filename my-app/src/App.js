import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import DataViz from './components/DataViz/DataViz';
import BlogPage from './components/BlogPage/BlogPage';
import NeuroShinyPage from './components/NeuroShinyPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dataviz" element={<DataViz />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/shiny" element={<NeuroShinyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;