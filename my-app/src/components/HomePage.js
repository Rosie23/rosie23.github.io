import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
                <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                    <div className="flex flex-col items-center mb-8 md:mb-0">
                        <div className="portfolio-image-container">
                            <img 
                                src={process.env.PUBLIC_URL + '/img/bio-pic.jpg'}
                                alt="Rosie Griffiths" 
                                className="portfolio-image color"
                            />
                        </div>
                        <div className="mt-4 flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github fa-2x"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-[#2D336B]">Hi, I'm Rosie!</h1>
                        <p className="mt-4 text-lg leading-relaxed">
                            Data scientist with a PhD in Stem Cell Research, now a Senior Data Solutions Engineer at Atorus Research. Passionate about coding, R, and exploring new technologies.
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-start">
                            <a href="/dataviz" className="btn w-full sm:w-auto">Data Viz</a>
                            <a href="/shiny" className="btn w-full sm:w-auto">Shiny</a>
                            <a href="/robotics" className="btn w-full sm:w-auto">Robotics</a>
                            <a href="/blog" className="btn w-full sm:w-auto">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;