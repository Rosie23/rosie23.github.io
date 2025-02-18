import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import './Blog.css';

const NeuroShinyPost = () => {
  const navigate = useNavigate();
  const postData = blogPosts.find(post => post.id === 'neuroshiny');

  if (!postData) {
    return (
      <div className="container mx-auto p-6 mt-24">
        <div className="blog-card">
          <div className="blog-content text-center">
            <h1 className="text-2xl font-bold mb-4">Loading...</h1>
            <button 
              onClick={() => navigate('/blog')}
              className="back-button"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24">
      {/* Header */}
      <div className="page-header">
        <h1 className="page-title">{postData.title} 🧠</h1>
        <div className="blog-date">{postData.date}</div>
      </div>

      {/* First Pink Section: Hero Image and Intro */}
      <section className="pink-section">
        <div className="section-container">
          <div className="section-content">
            <div className="w-1/2">
              <h2 className="text-2xl font-bold mb-4">Interactive Gene Expression Explorer</h2>
              <a 
                href="https://rosie-griffiths.shinyapps.io/NeuroShiny/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block transform hover:scale-[1.02] transition-transform duration-300"
              >
                <img 
                  src={postData.image}
                  alt="NeuroShiny application interface showing gene expression visualization" 
                  className="w-full rounded-lg shadow-xl"
                />
              </a>
              <p className="italic text-gray-600 text-center mt-4">
                The NeuroShiny interface: Visualize gene expression across brain regions and developmental stages ✨
              </p>
            </div>
            <div className="w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">From Lab Closure to Digital Innovation</h2>
              <p className="text-gray-700">{postData.content.intro}</p>
              <p className="text-gray-700">
                During my research, I was constantly downloading and analyzing datasets to track how 
                the 'gene of the week' was expressed at different brain regions and time points. But 
                with so many datasets—mouse or human, 2D cell cultures or 3D organoids, bulk RNA 
                sequencing or single-cell data—it quickly became overwhelming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* White Section: Data Challenge */}
      <section className="white-section">
        <div className="section-container">
          <div className="section-content">
            <div className="w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">The Data Challenge</h2>
              <p className="text-gray-700">
                And that's before even touching on epigenetics! Each dataset offered a unique view of brain development, 
                making it a fascinating but complex puzzle to piece together.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 mt-8">The Lightbulb Moment</h2>
              <p className="text-gray-700">
                The more I explored, the more I realized how overwhelming it was to navigate these 
                datasets. Wouldn't it be great, I thought, if there was a way to have all this data 
                in one place?
              </p>
            </div>
            <div className="w-1/2">
              <img 
                src="/img/neuroshiny/neuroshiny2.png"
                alt="Multiple brain gene expression datasets visualization" 
                className="w-full rounded-lg shadow-xl"
              />
              <p className="italic text-gray-600 text-center mt-4">
                Various data types and sources that NeuroShiny brings together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pink Section: Solution */}
      <section className="pink-section">
        <div className="section-container">
          <div className="section-content">
            <div className="w-1/2">
              <img 
                src="/img/neuroshiny/neuroshiny3.png"
                alt="NeuroShiny data visualization features" 
                className="w-full rounded-lg shadow-xl"
              />
              <p className="italic text-gray-600 text-center mt-4">
                Interactive visualizations make complex data exploration intuitive
              </p>
            </div>
            <div className="w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">A New Way to Explore Brain Data</h2>
              <p className="text-gray-700">
                With this platform, I wanted to make exploring brain gene expression as intuitive and 
                accessible as possible. Whether you're interested in a specific gene's expression across 
                different time points or comparing human versus mouse data, NeuroShiny brings everything 
                together in one user-friendly interface.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8">Impact and Future Directions</h2>
              <p className="text-gray-700">{postData.content.conclusion}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button Section */}
      <section className="white-section">
        <div className="section-container">
          <button 
            onClick={() => navigate('/blog')}
            className="back-button"
          >
            ← Back to Blog
          </button>
        </div>
      </section>
    </div>
  );
};

export default NeuroShinyPost;