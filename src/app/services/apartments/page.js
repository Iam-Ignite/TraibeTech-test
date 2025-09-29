'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ApartmentsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const apartmentData = {
    title: 'Luxury Apartments',
    subtitle: 'Sophisticated Urban Living',
    hero: '/images/appartmen.jpeg',
    description: 'Discover our collection of meticulously designed luxury apartments that redefine modern living. Each residence features premium finishes, state-of-the-art amenities, and breathtaking views that create an unparalleled living experience in the heart of the city.',
    longDescription: 'Our luxury apartments represent the pinnacle of urban sophistication, where every detail has been carefully considered to provide residents with an extraordinary lifestyle. From the moment you enter our grand lobbies to the private sanctuaries of each residence, you\'ll experience a level of luxury that sets new standards in metropolitan living.',
    features: [
      'Prime downtown locations with city skyline views',
      'Premium Italian marble and hardwood flooring',
      'Smart home automation systems',
      'Private balconies and terraces',
      'Concierge and valet services',
      'Rooftop pools and fitness centers',
      '24/7 security and surveillance',
      'Private wine cellars and storage',
      'In-unit washer/dryer systems',
      'High-end kitchen appliances',
      'Spa-like bathroom amenities',
      'Private parking spaces'
    ],
    amenities: [
      'Rooftop infinity pool with city views',
      'State-of-the-art fitness center',
      'Private dining rooms',
      'Business center and meeting rooms',
      'Concierge services',
      'Valet parking',
      'Pet spa and grooming services',
      'Private theater room',
      'Wine tasting room',
      'Landscaped gardens and terraces'
    ],
    images: [
      '/images/appartmen.jpeg',
      '/images/appartment-1.jpeg',
      '/images/appartment-3.jpeg',
      '/images/appartment-4.jpeg'
    ],
    specifications: {
      'Size Range': '1,200 - 4,500 sq ft',
      'Bedrooms': '1-4 bedrooms available',
      'Bathrooms': '1.5-4.5 bathrooms',
      'Ceiling Height': '10-12 feet',
      'Flooring': 'Italian marble, hardwood',
      'Kitchen': 'Gourmet with premium appliances'
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
          src={apartmentData.hero}
          alt={apartmentData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
              {apartmentData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
              {apartmentData.subtitle}
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
              Redefining Luxury Living
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {apartmentData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {apartmentData.longDescription}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(apartmentData.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-amber-600 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore Our Residences
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={apartmentData.images[selectedImage]}
                  alt={`Apartment ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {apartmentData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-4 ring-amber-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Apartment thumbnail ${index + 1}`}
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
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Residence Features</h3>
            <div className="grid gap-3">
              {apartmentData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Building Amenities</h3>
            <div className="grid gap-3">
              {apartmentData.amenities.map((amenity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Luxury Living?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a private tour of our luxury apartments and discover your new home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Schedule Tour
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-amber-600 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}