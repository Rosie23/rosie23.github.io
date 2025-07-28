import React from 'react';

const BioImage = () => {
  return (
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
        <a href="https://www.linkedin.com/in/rosie-griffiths" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default BioImage;