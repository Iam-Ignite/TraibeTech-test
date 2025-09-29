'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CruisesPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cruiseData = {
    title: 'Boat Cruises',
    subtitle: 'Maritime Excellence',
    hero: '/images/boat-crusise.jpeg',
    description: 'Embark on extraordinary maritime journeys aboard our luxury yacht fleet. From intimate sunset cruises to extended ocean expeditions, we offer bespoke nautical experiences that combine adventure with uncompromising luxury.',
    longDescription: 'Our yacht charter services represent the ultimate in maritime luxury, featuring state-of-the-art vessels equipped with every conceivable amenity. Whether you\'re seeking a romantic evening cruise, a corporate retreat, or an extended exploration of pristine waters, our professional crew ensures every moment exceeds your expectations.',
    features: [
      'Private yacht charters with professional crew',
      'Gourmet dining with celebrity chefs',
      'Water sports and diving equipment',
      'Helicopter landing platforms',
      'Luxury suites with ocean views',
      'Custom itineraries to exotic destinations',
      'Premium bar and wine cellar',
      'Spa and wellness facilities onboard',
      'Entertainment systems and cinema',
      'Fishing and diving expeditions',
      'Beach club and water toys',
      'Tender boats for shore excursions'
    ],
    yachtTypes: [
      'Motor Yachts (80-200 feet)',
      'Super Yachts (200-300 feet)',
      'Mega Yachts (300+ feet)',
      'Sailing Yachts (60-150 feet)',
      'Expedition Yachts (120-250 feet)'
    ],
    destinations: [
      'Mediterranean Riviera',
      'Caribbean Islands',
      'Greek Isles',
      'French Polynesia',
      'Seychelles',
      'Maldives',
      'Monaco and Monte Carlo',
      'Amalfi Coast',
      'Bahamas',
      'Croatia and Adriatic'
    ],
    images: [
      '/images/boat-crusise.jpeg',
      '/images/boat-crusise-1.jpeg'
    ],
    experiences: {
      'Sunset Cruises': '2-4 hours',
      'Day Charters': '8-10 hours',
      'Weekend Getaways': '2-3 days',
      'Weekly Expeditions': '7-14 days',
      'Extended Voyages': '2-4 weeks'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
              GX Company Limited
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
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
              <Link
                href="/"
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-300 font-medium rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 mt-20 overflow-hidden rounded-b-3xl">
        <Image
          src={cruiseData.hero}
          alt={cruiseData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
              {cruiseData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
              {cruiseData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Description Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Luxury Yacht Experiences
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {cruiseData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {cruiseData.longDescription}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Charter Options</h3>
            <div className="space-y-4">
              {Object.entries(cruiseData.experiences).map(([experience, duration]) => (
                <div key={experience} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">{experience}:</span>
                  <span className="text-amber-600 font-medium">{duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Luxury Fleet
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {cruiseData.images.map((image, index) => (
              <div key={index} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={image}
                  alt={`Yacht ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet and Destinations */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Yacht Fleet</h3>
            <div className="space-y-3">
              {cruiseData.yachtTypes.map((yacht, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{yacht}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Luxury Features</h3>
            <div className="space-y-3">
              {cruiseData.features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Premier Destinations</h3>
            <div className="space-y-3">
              {cruiseData.destinations.slice(0, 6).map((destination, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{destination}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Yacht Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cruiseData.features.slice(6).map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Signature Maritime Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ocean Adventures</h3>
              <p className="text-gray-600">Deep-sea fishing, diving expeditions, and water sports with professional instruction</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍾</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gourmet Dining</h3>
              <p className="text-gray-600">World-class chefs creating culinary masterpieces with fresh local ingredients</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏝️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Island Exploration</h3>
              <p className="text-gray-600">Discover secluded beaches and hidden coves accessible only by private yacht</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Set Sail on Your Dream Voyage</h2>
          <p className="text-xl mb-8 opacity-90">
            Charter your private yacht and create unforgettable memories on the world&rsquo;s most beautiful waters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Charter Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Fleet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}