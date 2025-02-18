import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from './blogData';
import './Blog.css';

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <div className="page-header">
        <h1 className="page-title">Blog</h1>
        <div className='page-description'>
          Thoughts on data science, R programming, and technology
        </div>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-grid">
          {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
            <button
              key={category}
              className="category-button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;