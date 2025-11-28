import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: "Complete Sundarbans Travel Guide: The Kingdom of Royal Bengal Tiger",
      excerpt: "Everything you need to know before visiting the world's largest mangrove forest...",
      content: "Sundarbans is not just a forest, it's a living ecosystem. From the Royal Bengal Tiger to rare bird species - everything finds home in this mangrove forest. November to February is the best time to visit. The Sundarbans mangrove forest covers approximately 10,000 square kilometers of which about 6,000 are in Bangladesh. It became inscribed as a UNESCO world heritage site in 1997. The site is intersected by a complex network of tidal waterways, mudflats and small islands of salt-tolerant mangrove forests.",
      author: "Nature Lover",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=60",
      views: "2.5k",
      likes: "184",
      featured: true,
      tags: ["Wildlife", "Mangrove", "Tiger", "Adventure"]
    },
    {
      id: 2,
      title: "Cox's Bazar: Beyond the World's Longest Beach",
      excerpt: "Discover the hidden secrets of the world's longest natural sea beach...",
      content: "Along with the 120km long beach, there's Himchori Waterfall, the solitude of Sonadia Island. Fresh seafood from local markets and sunset from Laboni Point will make your trip unforgettable. Cox's Bazar is known for its wide sandy beach which is the world's longest natural sea beach. It is located 150 km south of Chittagong. Cox's Bazar is also known by the name Panowa, which means yellow flower.",
      author: "Beach Explorer",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Beach",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
      views: "3.2k",
      likes: "234",
      featured: false,
      tags: ["Beach", "Sunset", "Seafood", "Island"]
    },
    {
      id: 3,
      title: "Sajek Valley: The Kingdom of Clouds in Bangladesh",
      excerpt: "Complete travel guide to Sajek, known as the Queen of Hills & Valleys...",
      content: "Situated 1,800 feet above sea level, Sajek Valley offers the most spectacular cloud views in Bangladesh. Stay at resorts run by indigenous communities and wake up to sunrise over clouds. Sajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.",
      author: "Mountain Lover",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Hills",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60",
      views: "2.8k",
      likes: "198",
      featured: true,
      tags: ["Hills", "Clouds", "Sunrise", "Indigenous"]
    },
    {
      id: 4,
      title: "Saint Martin Island: The Coral Kingdom",
      excerpt: "The unseen beauty of Bangladesh's only coral island...",
      content: "Saint Martin is famous for its crystal clear waters and vibrant coral reefs. November to February is when the sea remains calm. Don't forget to go snorkeling to see the amazing underwater world. St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula.",
      author: "Island Explorer",
      date: "January 20, 2024",
      readTime: "9 min read",
      category: "Island",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60",
      views: "4.1k",
      likes: "312",
      featured: false,
      tags: ["Island", "Coral", "Snorkeling", "Beach"]
    },
    {
      id: 5,
      title: "Bandarban: Hills, Waterfalls & Tribal Culture",
      excerpt: "Comprehensive guide to the natural and cultural wonders of Bandarban...",
      content: "Bandarban offers a perfect blend of adventure and cultural experiences. From trekking to Nilgiri Hills to visiting indigenous communities - every moment here is memorable. Bandarban is a district in South-Eastern Bangladesh, and a part of the Chittagong Division. It is one of the three hill districts of Bangladesh and a part of the Chittagong Hill Tracts.",
      author: "Adventure Seeker",
      date: "February 12, 2024",
      readTime: "10 min read",
      category: "Adventure",
      image: "https://i.ibb.co.com/Hf1TLRWb/Nafakhum-waterfall-Bandarban-Bangladesh-Photo-by-Ashraful-Alam-Unsplash.webp",
      views: "3.5k",
      likes: "267",
      featured: false,
      tags: ["Adventure", "Waterfalls", "Tribal", "Trekking"]
    },
    {
      id: 6,
      title: "Bangladesh on Budget: Amazing Places Under ৳10,000",
      excerpt: "How to explore Bangladesh's beauty without breaking the bank...",
      content: "Traveling in Bangladesh can be incredibly affordable. From Srimangal's tea gardens to Kuakata's beach - numerous destinations offer unforgettable experiences within budget. Bangladesh offers numerous budget-friendly destinations that provide incredible experiences without costing a fortune.",
      author: "Budget Traveler",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Budget",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&auto=format&fit=crop&q=60",
      views: "2.9k",
      likes: "189",
      featured: false,
      tags: ["Budget", "Affordable", "Tips", "Travel"]
    }
  ];

  const categories = ["All", "Wildlife", "Beach", "Hills", "Island", "Adventure", "Budget"];

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  const handleReadMore = (blog) => {
    navigate('/blog-details', { state: { blog } });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">

            <span className="font-semibold">Travel Blog & Guides</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Amazing
            <span className="bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 bg-clip-text text-transparent"> Travel Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore comprehensive travel guides, insider tips, and inspiring stories from every corner of Bangladesh.
            Your perfect adventure starts here.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-cyan-300 hover:shadow-md'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Blogs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-cyan-600">⭐</span>
            Featured Stories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogs.filter(blog => blog.featured).map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors duration-300 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        👤 {blog.author}
                      </span>
                      <span>•</span>
                      <span>📅 {blog.date}</span>
                    </div>
                    <span className="text-sm text-gray-500">{blog.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>👁️ {blog.views}</span>
                      <span>❤️ {blog.likes}</span>
                    </div>
                    <button
                      onClick={() => handleReadMore(blog)}
                      className="bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Blogs Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-cyan-600">📚</span>
            All Travel Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-cyan-600 font-semibold text-sm">{blog.category}</span>
                  </div>
                  {blog.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      ⭐ Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300 mb-3 leading-tight">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <span>👤 {blog.author}</span>
                    </div>
                    <span>{blog.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>📅 {blog.date}</span>
                    <div className="flex items-center gap-3">
                      <span>👁️ {blog.views}</span>
                      <span>❤️ {blog.likes}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="w-full p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500">
                    <button
                      onClick={() => handleReadMore(blog)}
                      className="w-full text-gray-700 py-3 rounded-xl font-semibold bg-white"
                    >
                      Read Full Story →
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">📧 Never Miss an Update</h3>
            <p className="text-cyan-100 mb-8 text-lg max-w-2xl mx-auto">
              Get the latest travel guides, destination updates, and exclusive deals directly in your inbox.
              Join our community of 10,000+ travelers.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-4  bg-white rounded-xl text-gray-800 "
              />
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-bold shadow-lg">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;