import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Banner = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({});

  const packages = {
    beach: {
      title: "Paradise Beach Package",
      price: "$899",
      originalPrice: "$1299",
      discount: "30% OFF",
      duration: "7 days & 6 nights",
      location: "Maldives Luxury Resort",
      includes: ["Luxury Beach Villa", "All Meals Included", "Spa & Massage", "Water Sports", "Airport Transfer"]
    },
    mountain: {
      title: "Mountain Expedition Package",
      price: "$599",
      originalPrice: "$799",
      discount: "25% OFF",
      duration: "5 days trekking",
      location: "Swiss Alps Adventure",
      includes: ["Expert Trekking Guide", "Luxury Camping", "All Equipment", "Meals Included", "Safety Gear"]
    },
    romantic: {
      title: "Romantic Sunset Package",
      price: "$1299",
      originalPrice: "$1699",
      discount: "20% OFF",
      duration: "4 days & 3 nights",
      location: "Private Beach Resort",
      includes: ["Private Beach Dinner", "Couple Spa", "Luxury Suite", "Candlelight Dinner", "Sunset Cruise"]
    },
    family: {
      title: "Family Fun Package",
      price: "$1499",
      originalPrice: "$1999",
      discount: "35% OFF",
      duration: "6 days & 5 nights",
      location: "Family Resort & Waterpark",
      includes: ["Family Suite", "Kids Activities", "All Meals", "Entertainment Shows", "Waterpark Access"]
    }
  };

  const handleBookNow = (packageType) => {
    setCurrentPackage(packages[packageType]);
    setOpenModal(true);
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setOpenModal(false);
    Swal.fire({
      title: "Booking Successful! 🎉",
      text: `Your ${currentPackage.title} has been confirmed!`,
      icon: "success",
      confirmButtonColor: "#06b6d4",
      confirmButtonText: "Great!",
      background: "#ffffff",
      color: "#1f2937"
    });
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="carousel w-full h-[800px] overflow-hidden">
        
        {/* Slide 1 - Tropical Beach */}
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover" 
            alt="Tropical Beach"
          />
          {/* Overlay Content - Centered */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center justify-center text-center">
            <div className="text-white max-w-2xl mx-auto px-4">
              <span className="bg-amber-500 text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">Summer Special</span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">Discover Paradise Beaches</h1>
              <p className="text-xl mb-8 max-w-lg mx-auto">Enjoy 7 days & 6 nights in Maldives with all inclusive luxury package</p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-4xl font-bold text-amber-300">$899</span>
                <span className="line-through text-gray-300 text-2xl">$1299</span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-lg font-bold">30% OFF</span>
              </div>
              <button 
                onClick={() => handleBookNow('beach')}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Book Now 🚀
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 - Mountain Adventure */}
        <div id="item2" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Mountain Adventure"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center justify-center text-center">
            <div className="text-white max-w-2xl mx-auto px-4">
              <span className="bg-emerald-500 text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">Adventure</span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">Mountain Expedition</h1>
              <p className="text-xl mb-8 max-w-lg mx-auto">5 days trekking experience with expert guides and luxury camping</p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-4xl font-bold text-amber-300">$599</span>
                <span className="line-through text-gray-300 text-2xl">$799</span>
                <span className="bg-red-500 text-white px-4 py-2 rounded-lg text-lg font-bold">25% OFF</span>
              </div>
              <button 
                onClick={() => handleBookNow('mountain')}
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Explore More 🏔️
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 - Romantic Sunset */}
        <div id="item3" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
            className="w-full h-full object-cover"
            alt="Romantic Sunset"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center justify-center text-center">
            <div className="text-white max-w-2xl mx-auto px-4">
              <span className="bg-rose-500 text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">Romantic</span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">Romantic Sunset Getaway</h1>
              <p className="text-xl mb-8 max-w-lg mx-auto">Perfect couple package with private beach dinner and luxury spa</p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-4xl font-bold text-amber-300">$1299</span>
                <span className="line-through text-gray-300 text-2xl">$1699</span>
                <span className="bg-purple-500 text-white px-4 py-2 rounded-lg text-lg font-bold">20% OFF</span>
              </div>
              <button 
                onClick={() => handleBookNow('romantic')}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Book Romantic Trip 💖
              </button>
            </div>
          </div>
        </div>

        {/* Slide 4 - Family Vacation */}
        <div id="item4" className="carousel-item w-full relative">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Family Vacation"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 flex items-center justify-center text-center">
            <div className="text-white max-w-2xl mx-auto px-4">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">Family Offer</span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">Family Fun Vacation</h1>
              <p className="text-xl mb-8 max-w-lg mx-auto">All-inclusive family package with kids activities and entertainment</p>
              <div className="flex items-center justify-center gap-6 mb-8">
                <span className="text-4xl font-bold text-amber-300">$1499</span>
                <span className="line-through text-gray-300 text-2xl">$1999</span>
                <span className="bg-amber-500 text-white px-4 py-2 rounded-lg text-lg font-bold">35% OFF</span>
              </div>
              <button 
                onClick={() => handleBookNow('family')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-2xl hover:scale-105"
              >
                Family Package 👨‍👩‍👧‍👦
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 py-6">
        <a href="#item1" className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-amber-600 transition-all shadow-lg hover:scale-110">1</a>
        <a href="#item2" className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-emerald-600 transition-all shadow-lg hover:scale-110">2</a>
        <a href="#item3" className="w-12 h-12 bg-rose-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-rose-600 transition-all shadow-lg hover:scale-110">3</a>
        <a href="#item4" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-blue-600 transition-all shadow-lg hover:scale-110">4</a>
      </div>

      {/* Booking Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl relative mx-4">
            
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setOpenModal(false)}
            >
              ✖
            </button>

            {/* Package Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2">
                {currentPackage.title}
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-cyan-600">{currentPackage.price}</span>
                <span className="line-through text-gray-400 text-2xl">{currentPackage.originalPrice}</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-lg font-bold">{currentPackage.discount}</span>
              </div>
              <p className="text-gray-600">{currentPackage.duration} • {currentPackage.location}</p>
            </div>

            {/* Package Includes */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📦 Package Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {currentPackage.includes?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
                <input
                  type="number"
                  placeholder="Number of Persons"
                  className="input input-bordered w-full rounded-xl"
                  required
                  min="1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="input input-bordered w-full rounded-xl"
                  required
                />
                <select className="select select-bordered w-full rounded-xl" required>
                  <option value="">Select Room Type</option>
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Luxury Suite</option>
                  <option>Presidential Suite</option>
                </select>
              </div>

              <textarea
                placeholder="Special Requirements (Optional)"
                className="textarea textarea-bordered w-full rounded-xl h-20"
              ></textarea>

              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-none rounded-2xl font-bold text-lg py-4 hover:from-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Confirm Booking 🎯
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;