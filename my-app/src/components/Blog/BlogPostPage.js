import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import DaiDipperPost from './DaiDipperPost';
import NeuroShinyPost from './NeuroShinyPost';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  console.log('Current slug:', slug);
  console.log('Available blogPosts:', blogPosts);
  
  // Find the post data based on the slug
  const post = blogPosts.find(post => post.slug === slug);
  console.log('Found post:', post);

  if (!post) {
    console.log('No post found for slug:', slug);
    return (
      <div className="container mx-auto p-6 mt-24">
        <div className="blog-card">
          <div className="blog-content text-center">
            <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-4">Sorry, we couldn't find the blog post you're looking for.</p>
            <button 
              onClick={() => navigate('/')}
              className="back-button"
            >
              Return to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  console.log('Rendering post with ID:', post.id);
  
  if (post.id === 'neuroshiny') {
    return <NeuroShinyPost postData={post} />;
  }
  
  if (post.id === 'daidipper') {
    return <DaiDipperPost postData={post} />;
  }

  console.log('No matching component found for post ID:', post.id);
  return null;
};

export default BlogPostPage;