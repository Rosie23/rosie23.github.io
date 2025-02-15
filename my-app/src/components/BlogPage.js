import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Data Science in R: Best Practices",
      date: "February 14, 2025",
      excerpt: "Exploring modern data science workflows in R, including tidyverse, data.table, and performance optimization techniques.",
      image: process.env.PUBLIC_URL + '/img/blog/r-datascience.jpg',
      category: "R Programming"
    },
    {
      id: 2,
      title: "From PhD to Data Science: My Journey",
      date: "February 10, 2025",
      excerpt: "Personal insights and lessons learned transitioning from academic research to industry data science.",
      image: process.env.PUBLIC_URL + '/img/blog/phd-journey.jpg',
      category: "Career"
    },
    {
      id: 3,
      title: "Building Interactive Dashboards with Shiny",
      date: "February 5, 2025",
      excerpt: "A comprehensive guide to creating powerful, interactive web applications using R Shiny.",
      image: process.env.PUBLIC_URL + '/img/blog/shiny-dashboard.jpg',
      category: "R Shiny"
    }
  ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts on data science, R programming, and technology</p>
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