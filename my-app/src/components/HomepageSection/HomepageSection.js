import React from 'react';
import { aboutMeContent } from '../../content/about-me';

const HomepageSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-start">
          <div className="w-full md:w-1/3 relative group">
            <div className="aspect-w-4 aspect-h-3 relative">
              <img
                src="/img/ai_me.jpg"
                alt="Section image"
                className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:blur-sm"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-sm">
                <h3 className="text-white text-xl font-bold mb-2">{aboutMeContent.imageTitle}</h3>
                <p className="text-white">{aboutMeContent.imageDescription}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{aboutMeContent.title}</h2>
            {aboutMeContent.mainText.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageSection;