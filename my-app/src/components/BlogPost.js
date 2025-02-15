import React from 'react';
import './Blog.css';

const BlogPost = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img
          src={post.image}
          alt={post.title}
          className="blog-image"
        />
      </div>
      <div className="blog-content">
        <div className="blog-category">{post.category}</div>
        <h2 className="blog-title">{post.title}</h2>
        <div className="blog-date">{post.date}</div>
        <p className="blog-excerpt">{post.excerpt}</p>
        <button className="blog-read-more">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogPost;