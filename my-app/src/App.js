import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import DataViz from './components/DataViz/DataViz';
import BlogPage from './components/Blog/BlogPage';
import BlogPostPage from './components/Blog/BlogPostPage';
import DaiDipperPost from './components/Blog/DaiDipperPost';
import NeuroShinyPost from './components/Blog/NeuroShinyPost';
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
          <Route path="/blog/daidipper" element={<DaiDipperPost />} />
          <Route path="/blog/neuroshiny" element={<NeuroShinyPost />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;