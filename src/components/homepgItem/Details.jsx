import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { place } = location.state || {};

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">No Place Data Found</h2>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
        >
          ← Back to Places
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <img 
              src={place.image} 
              alt={place.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-4xl font-bold mb-2">{place.name}</h1>
              <div className="flex items-center">
                <span className="text-lg">📍</span>
                <span className="ml-2 text-xl">{place.location}</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-amber-500 font-bold text-lg">⭐ {place.rating}</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {place.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {place.detailedDescription}
              </p>

              {/* Detailed Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Trip Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{place.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Season:</span>
                      <span className="font-semibold">{place.season}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Difficulty:</span>
                      <span className="font-semibold">{place.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package Includes:</span>
                      <span className="font-semibold text-right">{place.includes?.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Main Attractions</h3>
                  <ul className="space-y-2">
                    {place.attractions?.map((attraction, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-cyan-500 mr-2">✓</span>
                        {attraction}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Activities */}
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">🚀 Activities You'll Love</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {place.activities?.map((activity, index) => (
                    <div key={index} className="text-center bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-cyan-600 text-lg mb-1">•</div>
                      <span className="text-sm text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-6 text-white sticky top-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Book Your Tour</h3>
                  <div className="text-3xl font-bold">{place.price}</div>
                  <div className="text-cyan-100">per person</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">{place.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Best Time:</span>
                    <span className="font-semibold">{place.bestTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="font-semibold">{place.difficulty}</span>
                  </div>
                </div>

                <button className="w-full bg-white text-cyan-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  🎯 Book Now
                </button>

                <div className="text-center mt-4 text-cyan-100 text-sm">
                  ✅ Free cancellation up to 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;