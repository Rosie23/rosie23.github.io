import React from 'react';

const ProfileIntro = () => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-3xl font-bold text-[#2D336B]">Hi, I'm Rosie!</h1>
      <p className="mt-4 text-lg leading-relaxed">
        Data scientist with a PhD in Stem Cell Research, now a Senior Data Solutions Engineer at Atorus Research. 
        Passionate about coding, R, and exploring new technologies.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-start">
        <a href="/dataviz" className="btn w-full sm:w-auto">Data Viz</a>
        <a href="/shiny" className="btn w-full sm:w-auto">Shiny</a>
        <a href="/robotics" className="btn w-full sm:w-auto">Robotics</a>
        <a href="/blog" className="btn w-full sm:w-auto">Blog</a>
      </div>
    </div>
  );
};

export default ProfileIntro;
