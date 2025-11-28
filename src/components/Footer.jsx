import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-cyan-900 to-teal-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex items-center mb-6">
              <img src={logo} className="h-12 w-auto" alt="TravelTour Logo" />
            </NavLink>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the beauty of Bangladesh with TravelTour. We offer unforgettable travel experiences, 
              from pristine beaches to lush hills, creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full ">
                📘
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full ">
                🐦
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full ">
                📷
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full ">
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">🏠</span> Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/best-places" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">⭐</span> Best Places
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blogs" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">📝</span> Travel Blogs
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">ℹ️</span> About Us
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">📞</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Top Destinations
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🌴</span> Cox's Bazar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🐅</span> Sundarbans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🏝️</span> Saint Martin
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">⛰️</span> Sajek Valley
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  <span className="mr-2">🌿</span> Bandarban
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-cyan-500 p-3 rounded-full mr-4">
                  📍
                </div>
                <div>
                  <p className="text-gray-300">123 Travel Street</p>
                  <p className="text-gray-300">sylhet, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-teal-500 p-3 rounded-full mr-4">
                  📞
                </div>
                <div>
                  <p className="text-gray-300">+880 1234-567890</p>
                  <p className="text-gray-300">+880 0987-654321</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-sky-500 p-3 rounded-full mr-4">
                  ✉️
                </div>
                <div>
                  <p className="text-gray-300">info@traveltour.com</p>
                  <p className="text-gray-300">book@traveltour.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">📧 Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-l-xl bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-r-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transition-all duration-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 TravelTour. All rights reserved. | Made with ❤️ for Bangladesh</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <a 
            href="https://wa.me/8801234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transform hover:scale-110 transition-all duration-300 flex items-center justify-center w-16 h-16"
          >
            <span className="text-2xl">💬</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;