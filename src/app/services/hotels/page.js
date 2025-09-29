'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HotelsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hotelData = {
    title: 'Boutique Hotels',
    subtitle: 'Extraordinary Hospitality',
    hero: '/images/hotel01.jpeg',
    description: 'Experience unparalleled luxury at our exclusive boutique hotels. Each property is carefully curated to offer unique architectural beauty, world-class service, and unforgettable experiences that create lasting memories.',
    longDescription: 'Our boutique hotels are more than just accommodations; they are destinations in themselves. Each property tells a unique story through its design, cuisine, and personalized service, offering guests an immersive experience that reflects the local culture while maintaining our signature luxury standards.',
    features: [
      'Award-winning architectural design',
      'Michelin-starred restaurant partnerships',
      'Personalized butler and concierge services',
      'Luxury spa and wellness facilities',
      'Private event spaces and meeting rooms',
      'Curated local cultural experiences',
      'Premium bedding and linens',
      'Marble bathrooms with designer fixtures',
      'Private terraces and balconies',
      'Fine art collections',
      'Wine cellars and sommelier services',
      'Helicopter landing pads'
    ],
    amenities: [
      'Rooftop infinity pools',
      'World-class spa and wellness center',
      'Multiple dining venues',
      'Private beach access',
      'Golf concierge services',
      'Yacht charter arrangements',
      'Personal shopping services',
      'Art gallery and cultural spaces',
      'Private cinema',
      'Library and reading rooms'
    ],
    images: [
      '/images/hotel01.jpeg',
      '/images/hotel-2.jpeg',
      '/images/hotel-3.jpeg',
      '/images/hotel-4.jpeg'
    ],
    suiteTypes: {
      'Deluxe Suites': '800-1,200 sq ft',
      'Presidential Suites': '1,500-2,000 sq ft',
      'Penthouse Suites': '2,500-4,000 sq ft',
      'Villa Accommodations': '3,000-6,000 sq ft'
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
          src={hotelData.hero}
          alt={hotelData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
              {hotelData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
              {hotelData.subtitle}
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
              Curated Luxury Experiences
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {hotelData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {hotelData.longDescription}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Accommodation Types</h3>
            <div className="space-y-4">
              {Object.entries(hotelData.suiteTypes).map(([type, size]) => (
                <div key={type} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">{type}:</span>
                  <span className="text-amber-600 font-medium">{size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Discover Our Properties
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={hotelData.images[selectedImage]}
                  alt={`Hotel ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {hotelData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-4 ring-amber-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Hotel thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Luxury Features</h3>
            <div className="grid gap-3">
              {hotelData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">World-Class Amenities</h3>
            <div className="grid gap-3">
              {hotelData.amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Signature Experiences
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Culinary Excellence</h3>
              <p className="text-gray-600">Michelin-starred dining experiences crafted by world-renowned chefs</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏖️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exclusive Access</h3>
              <p className="text-gray-600">Private beaches, golf courses, and cultural sites reserved for our guests</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Retreats</h3>
              <p className="text-gray-600">Rejuvenating spa treatments and wellness programs for mind and body</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Experience Boutique Luxury</h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve your stay at one of our exceptional boutique properties worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Book Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}