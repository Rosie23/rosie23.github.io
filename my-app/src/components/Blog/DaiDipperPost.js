import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import './Blog.css';

const DaiDipperPost = () => {
  const navigate = useNavigate();
  const postData = blogPosts.find(post => post.id === 'daidipper');

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
        <h1 className="page-title">{postData.title}</h1>
        <div className="blog-category">{postData.category}</div>
        <div className="blog-date">{postData.date}</div>
      </div>

      {/* First Pink Section: Hero Image and Motivation */}
      <section className="pink-section">
        <div className="section-container">
          <div className="section-content">
          <div className="image-container">
            <img 
            src={postData.image}
            alt={postData.title}
            className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
            <div className="w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">{postData.content.motivation.title}</h2>
              {postData.content.motivation.text.map((paragraph, index) => (
                <p key={index} className="text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Section: Properties and Images */}
      <section className="white-section">
        <div className="section-container">
          <div className="section-content">
            <div className="w-1/2 space-y-4">
              <h2 className="text-2xl font-bold mb-4">{postData.content.properties.title}</h2>
              {postData.content.properties.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="/api/placeholder/300/200" alt="DaiDipper 1" className="w-full rounded shadow-lg" />
                <img src="/api/placeholder/300/200" alt="DaiDipper 2" className="w-full rounded shadow-lg" />
                <img src="/api/placeholder/300/200" alt="DaiDipper 3" className="w-full rounded shadow-lg" />
                <img src="/api/placeholder/300/200" alt="DaiDipper 4" className="w-full rounded shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pink Section: Components */}
      <section className="pink-section">
        <div className="section-container">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">{postData.content.components.title}</h2>
            <p className="text-gray-700 mb-4">{postData.content.components.text}</p>
            
            <div className="overflow-x-auto bg-white rounded-lg shadow">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border p-2 text-left">Component</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Shop</th>
                  </tr>
                </thead>
                <tbody>
                  {postData.content.components.tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border p-2">{row.component}</td>
                      <td className="border p-2">{row.price}</td>
                      <td className="border p-2">{row.shop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-700 mt-4">
              For this beta type the total cost is only <strong>£45</strong>. 
              The case is 3D printed using a model on <strong>Thingiverse</strong>.
            </p>

            <button 
              onClick={() => navigate('/blog')}
              className="back-button mt-8"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaiDipperPost;