import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;