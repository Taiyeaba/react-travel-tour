import React from 'react';
import { useNavigate } from 'react-router';

const BestPlaces = () => {
  const navigate = useNavigate();

  const bestPlaces = [
    {
      id: 1,
      name: "Sundarbans",
      location: "Khulna, Bangladesh",
      image: "https://i.ibb.co.com/1Yj9vz9v/Sundarbans-natural-photography-1024x585.jpg",
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
      groupSize: "4-12 people"
    },
    {
      id: 2,
      name: "Cox's Bazar",
      location: "Chittagong, Bangladesh",
      image: "https://i.ibb.co.com/HpMg5YL4/373e58571d420b9b1162dc45a2cde9196b4f6df6-2-690x387.jpg",
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
      groupSize: "2-15 people"
    },
    {
      id: 3,
      name: "Sajek Valley",
      location: "Rangamati, Bangladesh",
      image: "https://i.ibb.co.com/6R6B8g0Z/1694143158960.jpg",
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
      groupSize: "4-10 people"
    },
    {
      id: 4,
      name: "Saint Martin",
      location: "Bay of Bengal",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&auto=format&fit=crop&q=60",
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
      groupSize: "2-8 people"
    },
    {
      id: 5,
      name: "Bandarban",
      location: "Chittagong Hill Tracts",
      image: "https://i.ibb.co.com/G4yYJHCy/204-36376273530-3c9a0335f5-b-copyjpg.jpg",
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
      groupSize: "4-12 people"
    },
    {
      id: 6,
      name: "Sylhet Tea Gardens",
      location: "Sylhet, Bangladesh",
      image: "https://i.ibb.co.com/RGpYKC3v/0feafa42b06d20ed21d1840a48d7cc9f.jpg",
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
      groupSize: "2-15 people"
    },
    {
      id: 7,
      name: "Kuakata Sea Beach",
      location: "Patuakhali, Bangladesh",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
      description: "Daughter of the Sea where you can see both sunrise & sunset",
      detailedDescription: "Kuakata is known as the 'Daughter of the Sea' and is one of the rare places where you can witness both sunrise and sunset from the beach. Located in the southern part of Bangladesh, it offers a unique coastal experience with fishing communities, red crabs, and Buddhist temples nearby.",
      rating: 4.5,
      price: "৳9,000",
      duration: "3 Days",
      season: "Oct - Mar",
      bestTime: "October to March",
      attractions: ["Sunrise & Sunset", "Gangamati Reserved Forest", "Lebur Char", "Fishing Harbor", "Buddhist Temple"],
      activities: ["Beach Walking", "Sunrise Viewing", "Fishing", "Forest Exploration", "Photography"],
      includes: ["Beach Hotel", "All Meals", "Local Transport", "Guide", "Boat Ride"],
      difficulty: "Easy",
      groupSize: "2-12 people"
    },
    {
      id: 8,
      name: "Rangamati",
      location: "Chittagong Hill Tracts",
      image: "https://i.ibb.co.com/pB5rZx3M/1525327366-1.jpg",
      description: "Lake city surrounded by hills and tribal villages",
      detailedDescription: "Rangamati is often called the 'Lake City' due to the beautiful Kaptai Lake that dominates the landscape. Surrounded by hills and indigenous villages, it offers a perfect blend of natural beauty and cultural diversity. The hanging bridge over the lake is one of the most iconic landmarks of Bangladesh.",
      rating: 4.7,
      price: "৳6,800",
      duration: "2 Days",
      season: "Sep - Apr",
      bestTime: "September to April",
      attractions: ["Kaptai Lake", "Hanging Bridge", "Rajban Vihara", "Shuvolong Waterfall", "Tribal Museum"],
      activities: ["Boat Cruise", "Swimming", "Cultural Visit", "Fishing", "Photography"],
      includes: ["Lake Resort", "Meals", "Boat Ride", "Local Guide", "Entry Fees"],
      difficulty: "Easy",
      groupSize: "3-10 people"
    },
    {
      id: 9,
      name: "Jaflong",
      location: "Sylhet, Bangladesh",
      image: "https://i.ibb.co.com/rKMY7VQM/faef82f5a15f1c4d896753e273e778fd1d13532c-2-666x500.jpg",
      description: "Famous for stone collection and beautiful landscapes",
      detailedDescription: "Jaflong is a natural tourist spot located in the Sylhet Division, known for its collection of stones and beautiful landscape along the Dauki River. The area is surrounded by tea gardens and offers stunning views of the Khasi mountains. It's a perfect destination for those interested in geology and natural beauty.",
      rating: 4.4,
      price: "৳4,500",
      duration: "1 Day",
      season: "Year Round",
      bestTime: "Year Round (Best: October to March)",
      attractions: ["Stone Collection", "Dauki River", "Tea Gardens", "Khasi Mountains", "Piyain River"],
      activities: ["Stone Hunting", "River Walking", "Photography", "Tea Garden Visit", "Local Market"],
      includes: ["Transport", "Guide", "Lunch", "Entry Fees", "Local Experiences"],
      difficulty: "Easy",
      groupSize: "2-8 people"
    }
  ];

  const handleReadMore = (place) => {
    navigate('/details', { state: { place } });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-4">
            🌟 Best Places to Visit
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the most breathtaking destinations in Bangladesh. From pristine beaches to lush hills, 
            experience the beauty of our motherland.
          </p>
        </div>

        {/* Places Grid */}
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
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-amber-500 font-bold">⭐ {place.rating}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {place.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
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

                {/* Details */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-cyan-600 font-bold text-sm">⏱️</div>
                    <div className="text-xs text-gray-600">{place.duration}</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-cyan-600 font-bold text-sm">🌤️</div>
                    <div className="text-xs text-gray-600">{place.season}</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-2">
                    <div className="text-cyan-600 font-bold text-sm">💰</div>
                    <div className="text-xs text-gray-600">From {place.price}</div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleReadMore(place)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Read More
                  </button>
                  <button className="px-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default BestPlaces;