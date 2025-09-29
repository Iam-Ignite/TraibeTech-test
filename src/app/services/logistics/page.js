'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LogisticsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logisticsData = {
    title: 'Premium Logistics',
    subtitle: 'Seamless Global Solutions',
    hero: '/images/logistic.jpeg',
    description: 'Our sophisticated logistics network ensures your valuable assets are handled with the utmost care and precision. From art collections to luxury goods, we provide white-glove service that exceeds expectations.',
    longDescription: 'With decades of experience in luxury logistics, we understand that your valuable items require more than standard shipping. Our comprehensive network of specialized facilities, expert handlers, and cutting-edge technology ensures secure, climate-controlled transportation anywhere in the world.',
    features: [
      'Climate-controlled transportation',
      'Real-time GPS tracking and monitoring',
      'Specialized handling for luxury items',
      'International customs clearance',
      'Insurance coverage up to $50M',
      'Dedicated account management',
      'White-glove delivery service',
      'Secure storage facilities',
      'Art and antique specialists',
      'High-value electronics handling',
      'Confidential document courier',
      'Emergency logistics support'
    ],
    services: [
      'Art & Antique Transportation',
      'Luxury Vehicle Shipping',
      'Wine Collection Logistics',
      'Jewelry & Precious Metals',
      'Electronics & Technology',
      'Fashion & Textiles',
      'Musical Instruments',
      'Medical Equipment',
      'Documents & Archives',
      'Exhibition & Event Logistics'
    ],
    capabilities: {
      'Global Coverage': '150+ countries',
      'Fleet Size': '500+ specialized vehicles',
      'Storage Facilities': '25 climate-controlled locations',
      'Insurance Coverage': 'Up to $50 million per shipment',
      'Temperature Range': '-20°C to +25°C',
      'Humidity Control': '45-55% RH maintained'
    },
    images: [
      '/images/logistic.jpeg',
      '/images/logistic-1.jpeg',
      '/images/logistic-2.jpeg'
    ]
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
          src={logisticsData.hero}
          alt={logisticsData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4">
              {logisticsData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
              {logisticsData.subtitle}
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
              Precision in Every Delivery
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {logisticsData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {logisticsData.longDescription}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Capabilities</h3>
            <div className="space-y-4">
              {Object.entries(logisticsData.capabilities).map(([capability, value]) => (
                <div key={capability} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium text-gray-700">{capability}:</span>
                  <span className="text-amber-600 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Logistics Infrastructure
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={logisticsData.images[selectedImage]}
                  alt={`Logistics ${selectedImage + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              {logisticsData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-full h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index ? 'ring-4 ring-amber-500 shadow-lg' : 'hover:shadow-md'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Logistics thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services and Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Specialized Services</h3>
            <div className="grid gap-3">
              {logisticsData.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Premium Features</h3>
            <div className="grid gap-3">
              {logisticsData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security and Tracking */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Security & Monitoring
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Security</h3>
              <p className="text-gray-600">Multi-layered security protocols and 24/7 monitoring systems</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">GPS monitoring and live updates throughout the entire journey</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Climate Control</h3>
              <p className="text-gray-600">Precision environmental controls for temperature and humidity sensitive items</p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white p-12 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Seamless Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">Assessment of your logistics requirements and custom solution design</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">Professional packing and documentation with specialized materials</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transport</h3>
              <p className="text-gray-600 text-sm">Secure transportation with real-time monitoring and updates</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm">White-glove delivery and installation at your specified location</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Trust Your Valuables to the Experts</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference of premium logistics services tailored to your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Get Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Track Shipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}