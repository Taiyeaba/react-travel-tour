import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  Users, 
  Bus, 
  Map, 
  Star, 
  Target, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Heart,
  Handshake,
  Award,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const stats = [
    { number: "50,000+", label: "Happy Travelers", icon: <Users className="w-8 h-8" /> },
    { number: "500+", label: "Tours Conducted", icon: <Bus className="w-8 h-8" /> },
    { number: "25+", label: "Destinations Covered", icon: <Map className="w-8 h-8" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "6+", label: "Years of Excellence", icon: <Target className="w-8 h-8" /> },
    { number: "24/7", label: "Customer Support", icon: <Phone className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <RotateCcw className="w-12 h-12" />,
      title: "Sustainable Tourism",
      description: "We promote eco-friendly travel practices that protect Bangladesh's natural beauty and support local communities for generations to come."
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "Community First",
      description: "Direct partnerships with local communities ensure tourism benefits everyone while preserving authentic cultural experiences."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Authentic Experiences",
      description: "Go beyond typical tourist spots with genuine cultural exchanges and hidden gems known only to locals."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Excellence in Service",
      description: "From planning to execution, we deliver exceptional service that creates lifelong memories and lasting impressions."
    }
  ];

  const uniqueExperiences = [
    {
      title: "Sundarbans Tiger Tracking",
      description: "Expert-guided boat safaris to spot the majestic Royal Bengal Tiger in its natural habitat",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&auto=format&fit=crop&q=60",
      duration: "3 Days",
      difficulty: "Adventure"
    },
    {
      title: "Hill Tribe Homestay",
      description: "Live with indigenous communities in Bandarban and experience their traditional lifestyle",
      image: "https://i.ibb.co.com/nsQ1ch7x/Mountains-Best-Attractions-in-Chiang-Mai-Thailand-Northern-Inthanon-4-610x439.webp",
      duration: "2 Nights",
      difficulty: "Cultural"
    },
    {
      title: "Coral Island Exploration",
      description: "Snorkeling and diving adventures in Saint Martin's pristine coral reefs",
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&auto=format&fit=crop&q=60",
      duration: "Full Day",
      difficulty: "Marine"
    },
    {
      title: "Tea Garden Sunrise",
      description: "Morning walks through Sylhet's tea gardens with traditional breakfast",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&auto=format&fit=crop&q=60",
      duration: "Morning",
      difficulty: "Relaxing"
    }
  ];

  const awards = [
    { year: "2023", award: "Best Sustainable Tourism Company", organization: "Bangladesh Tourism Board" },
    { year: "2022", award: "Excellence in Cultural Tourism", organization: "South Asian Tourism Awards" },
    { year: "2021", award: "Community Impact Award", organization: "Travel & Hospitality Association" },
    { year: "2020", award: "Best Adventure Tour Operator", organization: "Bangladesh Adventure Council" }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+880 1234-567890",
      description: "Available 24/7 for emergency support"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "hello@BD.com",
      description: "We'll respond within 2 hours"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "Gulshan 1, Dhaka, Bangladesh",
      description: "Come meet us over coffee"
    }
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const handleContactFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      
      {/* Animated Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="animate-pulse-slow absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="animate-pulse-slower absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full opacity-30"></div>
            <div className="animate-pulse-fast absolute bottom-20 left-1/4 w-24 h-24 bg-red-400 rounded-full opacity-25"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-6 h-6" />
            <span className="font-semibold">Pioneers in Bangladeshi Tourism</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            We Don't Just <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Show Places</span>
            <br />
            We <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Create Stories</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-100">
            Where every journey becomes a chapter in your life's adventure book. Discover Bangladesh through experiences that touch your soul and change your perspective forever.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigate('/best-places')}
              className="group bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
            >
              <span>Start Your Adventure</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleContactClick}
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-500 flex items-center gap-3"
            >
              <span>Get Custom Plan</span>
              <Zap className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Story Section with Expandable Content */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full -translate-x-16 -translate-y-16 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-200 rounded-full translate-x-24 translate-y-24 opacity-60"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className={`transition-all duration-1000 ${isExpanded ? 'max-h-none' : 'max-h-96 overflow-hidden'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In 2018, a group of passionate Bangladeshi travelers returned home with a shared realization: while the world celebrated our neighboring countries' beauty, <span className="font-semibold text-blue-600">Bangladesh remained Asia's best-kept secret</span>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    We started with a simple mission: <span className="font-semibold text-green-600">to create travel experiences that don't just show places, but tell stories</span>. Stories of resilient communities, ancient traditions, and landscapes that defy imagination.
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&auto=format&fit=crop&q=60" 
                    alt="Bangladesh Landscape"
                    className="rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">2018</div>
                    <div className="text-amber-100 text-sm">Journey Began</div>
                  </div>
                </div>
              </div>

              {isExpanded && (
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Our first tours were humble - taking friends and family to discover the magic we knew existed. Word spread, and soon we were guiding international travelers who couldn't believe they'd never heard of Bangladesh's wonders.
                  </p>
                  <p>
                    We've grown, but our core remains unchanged: <span className="font-semibold text-purple-600">every traveler is a storyteller in the making</span>, and every journey should leave you with tales worth sharing for a lifetime.
                  </p>
                  <p>
                    Today, we're proud to be the bridge between Bangladesh's hidden treasures and curious souls seeking authentic adventures. We don't follow trends - we set them by creating experiences that are as unique as our country itself.
                  </p>
                </div>
              )}
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={toggleReadMore}
                className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
              >
                {isExpanded ? 'Read Less' : 'Continue Our Story'} 
                <ChevronDown className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Icons */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Experiences Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Beyond <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Ordinary</span> Tours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We craft experiences that transform tourists into storytellers and visitors into family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uniqueExperiences.map((experience, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative overflow-hidden">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {experience.duration}
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                        {experience.title}
                      </h3>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {experience.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center gap-2 group">
                      Explore Experience
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Promise</span> to You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars that define every experience we create and every journey we curate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Awards & <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Recognition</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 text-amber-700 p-3 rounded-xl text-sm font-bold">
                    {award.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{award.award}</h3>
                    <p className="text-gray-600 text-sm">{award.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your Bangladesh adventure? We're here to help you plan the perfect journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center group border border-gray-100"
                  >
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600">
                      {method.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{method.title}</h3>
                    <p className="font-semibold text-gray-700 mb-2">{method.details}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                ))}
              </div>

              {/* Quick Contact Info */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6" />
                  Quick Response Guaranteed
                </h3>
                <p className="text-blue-100 mb-6">
                  We understand that planning a trip can be exciting. That's why we guarantee to respond to all inquiries within 2 hours during business hours.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={toggleContactForm}
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Quick Message
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Full Contact Page
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h3>
              
              <form onSubmit={handleContactFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+880 XXX-XXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your travel plans, questions, or any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Send Message
                </button>
              </form>

              {/* Emergency Contact */}
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-semibold">Emergency Support:</span>
                  <span className="font-bold">+880 1711-223344</span>
                </div>
                <p className="text-red-600 text-sm mt-1">24/7 emergency helpline for travelers in Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden mb-3">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-pulse"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Bangladesh Story</span>?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Your adventure awaits. Let's create memories that will become the stories you'll tell for years to come.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => navigate('/best-places')}
              className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3 text-lg"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={handleContactClick}
              className="group border-2 border-white text-white px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center gap-3 text-lg"
            >
              <span>Plan With Experts</span>
              <Target className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>100% Customizable Tours</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>Local Expert Guides</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;