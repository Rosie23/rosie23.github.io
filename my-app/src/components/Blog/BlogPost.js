import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogPost = ({ post }) => {
  console.log("BlogPost received:", post); // Debug log

  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <Link to={`/blog/${post.slug}`}>
          <img
            src={post.image}
            alt={post.title}
            className="blog-image"
          />
        </Link>
      </div>
      <div className="blog-content">
        <div className="blog-category">{post.category}</div>
        <h2 className="blog-title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="blog-date">{post.date}</div>
        <p className="blog-excerpt">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.slug}`} 
          className="blog-read-more"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;