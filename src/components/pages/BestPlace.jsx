import React from 'react';
import { useNavigate } from 'react-router';

const BestPlace = () => {
  const navigate = useNavigate();

  const bestPlaces = [
    {
      id: 1,
      name: "Sundarbans",
      location: "Khulna, Bangladesh",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60",
      description: "Largest mangrove forest in the world, home to the Royal Bengal Tiger",
      detailedDescription: "The Sundarbans is the largest mangrove forest in the world, spanning Bangladesh and India. It's a UNESCO World Heritage Site known for its rich biodiversity, including the famous Royal Bengal Tiger. The forest is crisscrossed by numerous rivers and canals, creating a unique ecosystem that supports various wildlife species including deer, crocodiles, and numerous bird species. The area is also home to rare species like the Irrawaddy dolphin and horseshoe crab.",
      rating: 4.8,
      price: "৳12,000",
      duration: "3 Days",
      season: "Nov - Feb",
      bestTime: "Winter season (November to February)",
      attractions: ["Royal Bengal Tiger", "Mangrove Forests", "Wildlife Safari", "River Cruises", "Karamjal Wildlife Sanctuary"],
      activities: ["Boat Safari", "Bird Watching", "Forest Trekking", "Photography", "Fishing"],
      includes: ["Hotel Stay", "Expert Guide", "All Meals", "Transport", "Boat Rentals"],
      difficulty: "Moderate",
      groupSize: "4-12 people",
      highlights: ["UNESCO World Heritage", "Royal Bengal Tiger", "Mangrove Ecosystem", "River Safari"]
    },
    {
      id: 2,
      name: "Cox's Bazar",
      location: "Chittagong, Bangladesh",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
      description: "World's longest natural sea beach with golden sands",
      detailedDescription: "Cox's Bazar boasts the world's longest natural sea beach stretching 120 kilometers. With its golden sands, rolling waves, and stunning sunsets, it's a paradise for beach lovers. The beach is lined with hotels, resorts, and restaurants offering fresh seafood. Beyond the main beach, you can explore nearby islands, Buddhist temples, and the vibrant local markets.",
      rating: 4.9,
      price: "৳8,500",
      duration: "4 Days",
      season: "Oct - Mar",
      bestTime: "October to March",
      attractions: ["Marine Drive", "Himchori", "Inani Beach", "Sonadia Island", "Maheshkhali Island"],
      activities: ["Swimming", "Sunbathing", "Beach Sports", "Seafood Tasting", "Island Hopping"],
      includes: ["Beach Resort", "All Meals", "Local Transport", "Beach Activities", "Island Tour"],
      difficulty: "Easy",
      groupSize: "2-15 people",
      highlights: ["Longest Sea Beach", "Sunset Views", "Fresh Seafood", "Island Tours"]
    },
    {
      id: 3,
      name: "Sajek Valley",
      location: "Rangamati, Bangladesh",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=60",
      description: "Queen of Hills & Valley with amazing cloud views",
      detailedDescription: "Sajek Valley is located in the Rangamati district and is known as the 'Queen of Hills & Valley'. Situated 1800 feet above sea level, it offers breathtaking views of clouds and mountains. The valley is inhabited by various indigenous communities, providing a unique cultural experience along with natural beauty.",
      rating: 4.7,
      price: "৳6,500",
      duration: "2 Days",
      season: "Sep - Apr",
      bestTime: "September to April",
      attractions: ["Cloud Views", "Konglak Hill", "Ruilui Para", "Indigenous Villages", "Sunrise Point"],
      activities: ["Trekking", "Photography", "Cultural Exchange", "Camping", "Bonfire"],
      includes: ["Resort Stay", "Meals", "Local Guide", "Transport", "Trekking Equipment"],
      difficulty: "Moderate",
      groupSize: "4-10 people",
      highlights: ["Cloud Views", "Indigenous Culture", "Sunrise Points", "Trekking"]
    },
    {
      id: 4,
      name: "Saint Martin",
      location: "Bay of Bengal",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=60",
      description: "Only coral island of Bangladesh with crystal clear water",
      detailedDescription: "Saint Martin's Island is the only coral island in Bangladesh, located in the northeastern part of the Bay of Bengal. Known for its crystal clear blue water, live corals, and diverse marine life, it's a perfect destination for nature lovers and adventure seekers. The island is also famous for its coconut trees and peaceful environment.",
      rating: 4.9,
      price: "৳15,000",
      duration: "3 Days",
      season: "Nov - Feb",
      bestTime: "November to February",
      attractions: ["Coral Reefs", "Chera Dwip", "Coconut Garden", "Marine Life", "Sunset Views"],
      activities: ["Snorkeling", "Scuba Diving", "Beach Walking", "Coral Watching", "Island Exploration"],
      includes: ["Beach Resort", "All Meals", "Boat Transfer", "Snorkeling Gear", "Guide"],
      difficulty: "Easy",
      groupSize: "2-8 people",
      highlights: ["Coral Reefs", "Crystal Clear Water", "Marine Life", "Island Experience"]
    },
    {
      id: 5,
      name: "Bandarban",
      location: "Chittagong Hill Tracts",
      image: "https://images.unsplash.com/photo-1464822759849-e0e1003bcd6e?w=600&auto=format&fit=crop&q=60",
      description: "Land of hills, waterfalls and tribal culture",
      detailedDescription: "Bandarban is a hill district known for its natural beauty, indigenous culture, and adventure opportunities. It features numerous hills, waterfalls, and rivers. The area is home to several indigenous communities, each with unique traditions and lifestyles. Key attractions include Nilgiri, Boga Lake, and the Golden Temple.",
      rating: 4.8,
      price: "৳7,800",
      duration: "3 Days",
      season: "Oct - Mar",
      bestTime: "October to March",
      attractions: ["Nilgiri Hills", "Boga Lake", "Golden Temple", "Chimbuk Hill", "Sangu River"],
      activities: ["Hiking", "Waterfall Visit", "Cultural Tour", "River Boating", "Photography"],
      includes: ["Hotel Stay", "Meals", "Local Guide", "Transport", "Entry Fees"],
      difficulty: "Moderate",
      groupSize: "4-12 people",
      highlights: ["Hill Tracts", "Waterfalls", "Tribal Culture", "Adventure Sports"]
    },
    {
      id: 6,
      name: "Sylhet Tea Gardens",
      location: "Sylhet, Bangladesh",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60",
      description: "Beautiful tea gardens and rolling hills",
      detailedDescription: "Sylhet is famous for its lush tea gardens that stretch across rolling hills. The region produces some of the finest tea in the world. Beyond the tea estates, Sylhet offers beautiful natural attractions including Ratargul Swamp Forest, Jaflong, and numerous waterfalls. The area has a unique cultural blend influenced by tea garden workers from various backgrounds.",
      rating: 4.6,
      price: "৳5,500",
      duration: "2 Days",
      season: "Year Round",
      bestTime: "Year Round (Best: October to March)",
      attractions: ["Malnichara Tea Garden", "Ratargul Forest", "Lalakhal", "Bichnakandi", "Tea Processing"],
      activities: ["Tea Garden Tour", "Boat Riding", "Forest Walk", "Tea Tasting", "Photography"],
      includes: ["Resort Stay", "Meals", "Local Guide", "Transport", "Tea Garden Entry"],
      difficulty: "Easy",
      groupSize: "2-15 people",
      highlights: ["Tea Gardens", "Rolling Hills", "Tea Tasting", "Natural Beauty"]
    }
  ];

  const handleViewDetails = (place) => {
    navigate('/details', { state: { place } });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">Best Places Award 2024</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Bangladesh's
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-700 bg-clip-text text-transparent"> Most Beautiful Places</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the crown jewels of Bangladesh's tourism. From pristine beaches to mystical hills, 
            experience the diversity and beauty of our motherland.
          </p>
        </div>

        {/* Top 3 Featured Places */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-amber-500">⭐</span>
            Top Rated Destinations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bestPlaces.slice(0, 3).map((place, index) => (
              <div 
                key={place.id}
                className={`bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden group relative ${
                  index === 0 ? 'lg:scale-105 lg:-translate-y-4' : ''
                }`}
              >
                {/* Badge for Top Place */}
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                    🥇 Top Pick
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-400 to-gray-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                    🥈 Runner Up
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                    🥉 Third Place
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-amber-500 font-bold">⭐ {place.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {place.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="text-lg">📍</span>
                    <span className="ml-2">{place.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {place.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">✨ Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {place.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-2xl font-bold text-emerald-600">{place.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-800">{place.duration}</div>
                      <div className="text-sm text-gray-500">tour</div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button 
                    onClick={() => handleViewDetails(place)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 text-white py-4 rounded-xl font-bold hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Explore Destination →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Best Places Grid */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="text-emerald-600">🌍</span>
            All Best Places to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPlaces.map((place) => (
              <div 
                key={place.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-amber-500 font-bold">⭐ {place.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {place.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                      {place.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <span className="text-lg">📍</span>
                    <span className="ml-2 text-sm">{place.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {place.description}
                  </p>

                  {/* Quick Details */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-emerald-600 font-bold text-sm">⏱️</div>
                      <div className="text-xs text-gray-600">{place.duration}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-emerald-600 font-bold text-sm">🌤️</div>
                      <div className="text-xs text-gray-600">{place.season}</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-2">
                      <div className="text-emerald-600 font-bold text-sm">👥</div>
                      <div className="text-xs text-gray-600">{place.groupSize}</div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleViewDetails(place)}
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      View Details
                    </button>
                    <button className="px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300 hover:border-red-300 hover:text-red-500">
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8">📊 Why Choose These Places?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-emerald-100">Visitor Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-emerald-100">Happy Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.8⭐</div>
                <div className="text-emerald-100">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlace;