import React from 'react';

const TopOfferBar = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-sky-500 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          {/* Left Side - Main Offer */}
          <div className="flex items-center gap-3">
            <span className="bg-white text-amber-600 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🔥 LIMITED TIME
            </span>
            <span className="font-semibold text-lg">
              Get 50% OFF on Your First Booking! 
            </span>
          </div>

          {/* Right Side - Contact & Countdown */}
          <div className="flex items-center gap-6">
            {/* Countdown Timer */}
            <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-lg">
              <span className="text-sm">Offer ends in:</span>
              <span className="font-mono font-bold">23:59:59</span>
            </div>
            
            {/* Contact Number */}
            <div className="flex items-center gap-2">
              <span className="text-sm">Call Now:</span>
              <a href="tel:+8801234567890" className="font-bold text-lg hover:text-amber-200 transition-colors">
                +880 1234-567890
              </a>
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOfferBar;