import React from 'react';

const NeuroShinyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-20">  {/* Added mt-20 for navbar space */}
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-bold text-center p-6">
          From Lockdown Blues to Brain Data Breakthroughs 🧠
        </h1>
        
        {/* Featured Image Section */}
        <div className="mb-8 p-4 flex justify-center">
          <a 
            href="https://rosie-griffiths.shinyapps.io/NeuroShiny/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform hover:scale-[1.02] transition-transform duration-300"
          >
            <img 
              src="/img/neuroshiny.png" 
              alt="NeuroShiny application interface" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </a>
        </div>

        <div className="px-6 pb-8 prose prose-slate max-w-none space-y-6 text-lg">
          <p className="italic text-gray-600 text-center mb-8">
            Click the image above to explore NeuroShiny! ✨
          </p>

          <p>
            During lockdown, like many researchers, I found myself with a lot of time on my hands. 
            With no cells to look after in the lab (they were probably missing me too! 🔬), I had 
            to find something else to keep me busy. And what better way to do that than by drowning 
            myself in vast amounts of gene expression data?
          </p>

          <p>
            During my research, I was constantly downloading and analyzing datasets to track how 
            the 'gene of the week' was expressed at different brain regions and time points. But 
            with so many datasets—mouse or human, 2D cell cultures or 3D organoids, bulk RNA 
            sequencing or single-cell data—it quickly became overwhelming. And that's before even 
            touching on epigenetics! Each dataset offered a unique view of brain development, 
            making it a fascinating but complex puzzle to piece together.
          </p>

          <p>
            The more I explored, the more I realized how overwhelming it was to navigate these 
            datasets. Wouldn't it be great, I thought, if there was a way to have all this data 
            in one place? A tool where you could easily select the gene or model you're interested 
            in and visualize how it changes across different brain regions and developmental stages.
          </p>

          <p className="text-center font-semibold text-xl my-8">
            And so, <span className="var(--dark-purple)">NeuroShiny</span> was born! ✨
          </p>

          <p>
            With this platform, I wanted to make exploring brain gene expression as intuitive and 
            accessible as possible. Whether you're interested in a specific gene's expression across 
            different time points or comparing human versus mouse data, NeuroShiny brings everything 
            together in one user-friendly interface.
          </p>

          <p>
            What started as a lockdown project quickly became a powerful tool that I hope will help 
            other researchers save time, explore data more efficiently, and maybe even spark new 
            discoveries. Because if there's one thing lockdown taught me, it's that a little boredom 
            and a lot of data can lead to some pretty cool ideas! 🚀
          </p>
        </div>
      </article>
    </div>
  );
};

export default NeuroShinyPage;