import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DataViz from './components/DataViz';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dataviz" element={<DataViz />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;