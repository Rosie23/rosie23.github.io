import React from 'react';

const Shiny = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="page-header">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shiny Applications</h1>
          <p className="text-lg text-gray-600 mb-8">
            Interactive web applications built with R Shiny for data exploration and visualization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This section will showcase my Shiny applications for interactive data analysis and visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shiny;