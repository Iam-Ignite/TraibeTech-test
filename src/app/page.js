'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const services = [
    {
      id: 'apartments',
      title: 'Luxury Apartments',
      subtitle: 'Sophisticated Urban Living',
      description: 'Discover our collection of meticulously designed luxury apartments that redefine modern living. Each residence features premium finishes, state-of-the-art amenities, and breathtaking views.',
      features: [
        'Prime downtown locations with city skyline views',
        'Premium Italian marble and hardwood flooring',
        'Smart home automation systems',
        'Private balconies and terraces',
        'Concierge and valet services',
        'Rooftop pools and fitness centers'
      ],
      images: ['/images/appartmen.jpeg', '/images/appartment-1.jpeg', '/images/appartment-3.jpeg', '/images/appartment-4.jpeg']
    },
    {
      id: 'hotels',
      title: 'Boutique Hotels',
      subtitle: 'Extraordinary Hospitality',
      description: 'Experience unparalleled luxury at our exclusive boutique hotels. Each property is carefully curated to offer unique architectural beauty, world-class service, and unforgettable experiences.',
      features: [
        'Award-winning architectural design',
        'Michelin-starred restaurant partnerships',
        'Personalized butler and concierge services',
        'Luxury spa and wellness facilities',
        'Private event spaces and meeting rooms',
        'Curated local cultural experiences'
      ],
      images: ['/images/hotel01.jpeg', '/images/hotel-2.jpeg', '/images/hotel-3.jpeg', '/images/hotel-4.jpeg']
    },
    {
      id: 'cruises',
      title: 'Boat Cruises',
      subtitle: 'Maritime Excellence',
      description: 'Embark on extraordinary maritime journeys aboard our luxury yacht fleet. From intimate sunset cruises to extended ocean expeditions, we offer bespoke nautical experiences.',
      features: [
        'Private yacht charters with professional crew',
        'Gourmet dining with celebrity chefs',
        'Water sports and diving equipment',
        'Helicopter landing platforms',
        'Luxury suites with ocean views',
        'Custom itineraries to exotic destinations'
      ],
      images: ['/images/boat-crusise.jpeg', '/images/boat-crusise-1.jpeg']
    },
    {
      id: 'logistics',
      title: 'Premium Logistics',
      subtitle: 'Seamless Global Solutions',
      description: 'Our sophisticated logistics network ensures your valuable assets are handled with the utmost care and precision. From art collections to luxury goods, we provide white-glove service.',
      features: [
        'Climate-controlled transportation',
        'Real-time GPS tracking and monitoring',
        'Specialized handling for luxury items',
        'International customs clearance',
        'Insurance coverage up to $50M',
        'Dedicated account management'
      ],
      images: ['/images/logistic.jpeg', '/images/logistic-1.jpeg', '/images/logistic-2.jpeg']
    },
    {
      id: 'private-jets',
      title: 'Private Jets',
      subtitle: 'Ultimate Aviation Luxury',
      description: 'Experience the pinnacle of luxury travel with our exclusive private jet fleet. Enjoy unmatched comfort, privacy, and convenience as you travel to any destination worldwide.',
      features: [
        'Ultra-long-range aircraft with global reach',
        'Personalized cabin interiors and amenities',
        'Gourmet catering and premium beverages',
        '24/7 flight operations and support',
        'Expedited security and customs clearance',
        'Ground transportation coordination'
      ],
      images: ['/images/priate-jet.jpeg', '/images/pricvate-jet.jpeg']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold text-gray-800">
              GX Company Limited
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col space-y-1 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 pb-2 space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium rounded-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 opacity-20 md:opacity-20 p-4">
            <Image src="/images/hotel01.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg" />
            <Image src="/images/appartmen.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg mt-4 md:mt-8" />
            <Image src="/images/boat-crusise.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg hidden md:block" />
            <Image src="/images/logistic.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg mt-8 md:mt-16" />
            <Image src="/images/priate-jet.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg mt-2 md:mt-4" />
            <Image src="/images/hotel-2.jpeg" alt="" width={400} height={300} className="object-cover h-20 md:h-32 rounded-lg mt-6 md:mt-12 hidden md:block" />
          </div>
        </div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-gray-900">
            Luxury Redefined
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury across our premium services - from exquisite apartments and boutique hotels
            to exclusive yacht cruises, sophisticated logistics, and private jet travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">15+</div>
              <div className="text-gray-600 text-xs md:text-base">Years Experience</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">5K+</div>
              <div className="text-gray-600 text-xs md:text-base">Satisfied Clients</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">50+</div>
              <div className="text-gray-600 text-xs md:text-base">Global Locations</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-sm">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">24/7</div>
              <div className="text-gray-600 text-xs md:text-base">Premium Support</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('services')} className="text-gray-600 text-2xl md:text-3xl hover:text-gray-900 transition-colors">
            ↓
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Why Choose GX Company Limited
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We set the standard for luxury services through our unwavering commitment to excellence and attention to detail
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🏆</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Award-Winning Excellence</h3>
              <p className="text-sm md:text-base text-gray-600">Recognized globally for our exceptional service standards and luxury offerings</p>
            </div>
            <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🌍</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Global Presence</h3>
              <p className="text-sm md:text-base text-gray-600">Operating in over 50 countries with local expertise and international standards</p>
            </div>
            <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">👥</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Personalized Service</h3>
              <p className="text-sm md:text-base text-gray-600">Dedicated account managers and customized solutions for every client</p>
            </div>
            <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🔒</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">Absolute Privacy</h3>
              <p className="text-sm md:text-base text-gray-600">Confidentiality and discretion are paramount in all our service offerings</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our Premium Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our carefully curated collection of luxury services, each designed to exceed your expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{service.title}</h3>
                    <p className="text-gray-200 font-medium text-sm md:text-base">{service.subtitle}</p>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.description.substring(0, 120)}...</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <a
                      href={`/services/${service.id}`}
                      className="bg-gray-900 text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 inline-block text-center text-sm md:text-base"
                    >
                      Learn More
                    </a>
                    <span className="text-gray-600 text-xs md:text-sm font-medium text-center sm:text-right">
                      {service.images.length} Images
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Experience Our World
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A visual journey through our luxury services and exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="space-y-2 md:space-y-4">
              <Image src="/images/hotel01.jpeg" alt="Luxury Hotel" width={300} height={200} className="rounded-lg object-cover w-full h-32 md:h-48 shadow-lg" />
              <Image src="/images/appartment-1.jpeg" alt="Luxury Apartment" width={300} height={200} className="rounded-lg object-cover w-full h-24 md:h-32 shadow-lg" />
            </div>
            <div className="space-y-2 md:space-y-4 mt-4 md:mt-8">
              <Image src="/images/boat-crusise.jpeg" alt="Yacht Cruise" width={300} height={200} className="rounded-lg object-cover w-full h-24 md:h-32 shadow-lg" />
              <Image src="/images/logistic-1.jpeg" alt="Premium Logistics" width={300} height={200} className="rounded-lg object-cover w-full h-32 md:h-48 shadow-lg" />
            </div>
            <div className="space-y-2 md:space-y-4 hidden md:block">
              <Image src="/images/priate-jet.jpeg" alt="Private Jet" width={300} height={200} className="rounded-lg object-cover w-full h-40 shadow-lg" />
              <Image src="/images/hotel-3.jpeg" alt="Hotel Suite" width={300} height={200} className="rounded-lg object-cover w-full h-40 shadow-lg" />
            </div>
            <div className="space-y-2 md:space-y-4 mt-6 md:mt-12 hidden md:block">
              <Image src="/images/appartment-3.jpeg" alt="Modern Apartment" width={300} height={200} className="rounded-lg object-cover w-full h-36 shadow-lg" />
              <Image src="/images/boat-crusise-1.jpeg" alt="Ocean View" width={300} height={200} className="rounded-lg object-cover w-full h-44 shadow-lg" />
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gray-900 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm md:text-base">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced the GX Company Limited difference
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">James Davidson</h4>
                  <p className="text-gray-600 text-sm">CEO, Fortune 500 Company</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;The attention to detail and level of service provided by GX Company Limited is unmatched. From our corporate apartment needs to private jet travel, they consistently exceed expectations.&rdquo;</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
                  <p className="text-gray-600 text-sm">Art Collector & Philanthropist</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;Their logistics team handled my entire art collection move with such care and precision. Every piece arrived in perfect condition. Truly professional service.&rdquo;</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold">RK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Robert Klein</h4>
                  <p className="text-gray-600 text-sm">Investment Banking Executive</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;The yacht charter experience was absolutely phenomenal. The crew, the amenities, the destinations - everything was perfectly orchestrated. We&rsquo;ll definitely be back.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Excellence in Every Detail
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At GX Company Limited, we believe luxury is not just about premium products and services,
                but about creating extraordinary experiences that remain with you forever.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence spans across all our services - from the finest apartments
                and most exclusive hotels to unforgettable yacht cruises, seamless logistics solutions,
                and private aviation experiences that redefine luxury travel.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Legacy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2008, GX Company Limited has grown from a boutique luxury service provider
                  to a global leader in premium lifestyle management. We&rsquo;ve consistently delivered
                  exceptional experiences while maintaining the personalized touch that sets us apart.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5K+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/images/hotel01.jpeg"
                    alt="Luxury Hotel"
                    width={300}
                    height={200}
                    className="rounded-xl object-cover shadow-lg w-full h-48"
                  />
                  <Image
                    src="/images/logistic-2.jpeg"
                    alt="Premium Service"
                    width={300}
                    height={200}
                    className="rounded-xl object-cover shadow-lg w-full h-32"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/images/appartment-4.jpeg"
                    alt="Luxury Apartment"
                    width={300}
                    height={200}
                    className="rounded-xl object-cover shadow-lg w-full h-32"
                  />
                  <Image
                    src="/images/boat-crusise.jpeg"
                    alt="Yacht Service"
                    width={300}
                    height={200}
                    className="rounded-xl object-cover shadow-lg w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Luxury Lifestyle Awards</h3>
              <p className="text-gray-600 text-sm">Best Concierge Service 2023</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-gray-900 mb-2">Forbes Travel Guide</h3>
              <p className="text-gray-600 text-sm">Five-Star Service Provider</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-gray-900 mb-2">World Luxury Awards</h3>
              <p className="text-gray-600 text-sm">Global Luxury Service Excellence</p>
            </div>
            <div className="text-center bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="font-semibold text-gray-900 mb-2">UltraTravel Awards</h3>
              <p className="text-gray-600 text-sm">Best Luxury Travel Company</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Begin Your Luxury Journey
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Ready to experience the pinnacle of luxury? Contact us today and let us craft
              an extraordinary experience tailored just for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@gxcompany.com</p>
                    <p className="text-gray-600">concierge@gxcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+44 20 7123 4567 (UK)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                    <p className="text-gray-600">123 Luxury Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
                    <p className="text-gray-600">24/7 Concierge Service</p>
                    <p className="text-gray-600">Emergency Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900">
                  <option>Service of Interest</option>
                  <option>Luxury Apartments</option>
                  <option>Boutique Hotels</option>
                  <option>Boat Cruises</option>
                  <option>Premium Logistics</option>
                  <option>Private Jets</option>
                </select>
                <textarea
                  placeholder="Tell us about your requirements"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                ></textarea>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-4">
                GX Company Limited
              </div>
              <p className="text-gray-600 mb-4">
                Redefining luxury through exceptional service and unparalleled experiences worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📘</span>
                </div>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📸</span>
                </div>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🐦</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/services/apartments" className="hover:text-gray-900">Luxury Apartments</a></li>
                <li><a href="/services/hotels" className="hover:text-gray-900">Boutique Hotels</a></li>
                <li><a href="/services/cruises" className="hover:text-gray-900">Boat Cruises</a></li>
                <li><a href="/services/logistics" className="hover:text-gray-900">Premium Logistics</a></li>
                <li><a href="/services/private-jets" className="hover:text-gray-900">Private Jets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
                <li><a href="#" className="hover:text-gray-900">Awards</a></li>
                <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">24/7 Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              <p>&copy; 2024 GX Company Limited. All rights reserved.</p>
            </div>
            <div className="text-gray-600 text-center md:text-right">
              <p>Luxury • Excellence • Innovation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
