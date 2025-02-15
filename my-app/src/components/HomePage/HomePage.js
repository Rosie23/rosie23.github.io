import React from 'react';
import './HomePage.css';
import BioImage from '../BioImage/BioImage';
import ProfileIntro from '../ProfileIntro/ProfileIntro';
import HomepageSection from '../HomepageSection/HomepageSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <BioImage />
          <ProfileIntro />
        </div>
      </div>
      <div className="mt-16">
        <HomepageSection />
        </div>
    </div>
  );
};

export default HomePage;