import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const BlogsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  
  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Not Found</h2>
          <button 
            onClick={() => navigate('/blogs')}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-cyan-600 transition-colors"
            >
              <span>←</span>
              Back to Blogs
            </button>
            <div className="text-sm text-gray-500">
              Travel Blog / {blog.category}
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {blog.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {blog.excerpt}
          </p>
          
          {/* Author Info */}
          <div className="flex items-center justify-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>👁️</span>
              <span>{blog.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❤️</span>
              <span>{blog.likes} likes</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {blog.content}
            </p>
            
            {/* Additional content based on blog category */}
            {blog.category === 'Wildlife' && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-3">🌿 Wildlife Tips</h3>
                <ul className="text-amber-700 space-y-2">
                  <li>• Always travel with a licensed guide</li>
                  <li>• Maintain safe distance from wildlife</li>
                  <li>• Avoid bright colored clothing</li>
                  <li>• Don't feed the animals</li>
                </ul>
              </div>
            )}

            {blog.category === 'Beach' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-3">🏖️ Beach Safety</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Swim only in designated areas</li>
                  <li>• Be aware of tide times</li>
                  <li>• Use sunscreen regularly</li>
                  <li>• Stay hydrated</li>
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {blog.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            ❤️ Like this Article
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
            📤 Share
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg">
            💬 Comment
          </button>
        </div>

        
      </article>
    </div>
  );
};

export default BlogsDetails;