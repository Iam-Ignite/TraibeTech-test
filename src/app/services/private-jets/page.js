'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PrivateJetsPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  const jetData = {
    title: 'Private Jets',
    subtitle: 'Ultimate Aviation Luxury',
    hero: '/images/priate-jet.jpeg',
    description: 'Experience the pinnacle of luxury travel with our exclusive private jet fleet. Enjoy unmatched comfort, privacy, and convenience as you travel to any destination worldwide with our world-class aviation services.',
    longDescription: 'Our private aviation division represents the ultimate in luxury travel, featuring a meticulously maintained fleet of the world\'s finest aircraft. From light jets for short regional trips to ultra-long-range aircraft for intercontinental journeys, we provide seamless, personalized travel experiences that redefine what it means to fly in comfort and style.',
    features: [
      'Ultra-long-range aircraft with global reach',
      'Personalized cabin interiors and amenities',
      'Gourmet catering and premium beverages',
      '24/7 flight operations and support',
      'Expedited security and customs clearance',
      'Ground transportation coordination',
      'Onboard Wi-Fi and entertainment systems',
      'Dedicated flight crew and concierge',
      'Flexible scheduling and routing',
      'Pet-friendly travel arrangements',
      'Medical equipment and support',
      'VIP terminal access worldwide'
    ],
    aircraftTypes: [
      'Light Jets (4-8 passengers)',
      'Mid-Size Jets (6-9 passengers)',
      'Super Mid-Size (8-12 passengers)',
      'Heavy Jets (10-16 passengers)',
      'Ultra-Long Range (12-19 passengers)',
      'VIP Airliners (20+ passengers)'
    ],
    destinations: [
      'North America',
      'Europe',
      'Asia-Pacific',
      'Middle East',
      'Africa',
      'South America',
      'Caribbean',
      'Remote Locations',
      'Private Airports',
      'Exclusive Resorts'
    ],
    images: [
      '/images/priate-jet.jpeg',
      '/images/pricvate-jet.jpeg'
    ],
    capabilities: {
      'Fleet Size': '50+ premium aircraft',
      'Global Range': '8,000+ nautical miles',
      'Service Availability': '24/7/365 operations',
      'Response Time': 'As little as 2 hours notice',
      'Safety Rating': 'ARGUS Platinum certified',
      'Cabin Altitude': 'Max 6,000 feet equivalent'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              GX Company Limited
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-amber-600 transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 mt-20 overflow-hidden rounded-b-3xl">
        <Image
          src={jetData.hero}
          alt={jetData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {jetData.title}
            </h1>
            <p className="text-2xl text-amber-300 font-medium">
              {jetData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Description Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Redefining Air Travel
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {jetData.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {jetData.longDescription}
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Capabilities</h3>
            <div className="space-y-4">
              {Object.entries(jetData.capabilities).map(([capability, value]) => (
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
            Our Premium Fleet
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {jetData.images.map((image, index) => (
              <div key={index} className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={image}
                  alt={`Private Jet ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft Types and Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Aircraft Categories</h3>
            <div className="space-y-3">
              {jetData.aircraftTypes.map((aircraft, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{aircraft}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Luxury Features</h3>
            <div className="space-y-3">
              {jetData.features.slice(0, 6).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Global Destinations</h3>
            <div className="space-y-3">
              {jetData.destinations.map((destination, index) => (
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
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Aviation Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {jetData.features.slice(6).map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Unmatched Aviation Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Demand Charter</h3>
              <p className="text-gray-600">Instant access to aircraft with as little as 2 hours notice anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety First</h3>
              <p className="text-gray-600">ARGUS Platinum safety rating with rigorous maintenance and crew training standards</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🥂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Luxury Service</h3>
              <p className="text-gray-600">Personalized catering, premium amenities, and white-glove service throughout your journey</p>
            </div>
          </div>
        </div>

        {/* Membership Programs */}
        <div className="bg-white p-12 rounded-3xl shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Membership Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">S</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Silver Membership</h3>
              <p className="text-gray-600 mb-4">25 flight hours annually with priority booking and preferred rates</p>
              <div className="text-2xl font-bold text-amber-600">$150K</div>
            </div>
            <div className="text-center p-6 border-2 border-amber-500 rounded-xl bg-amber-50">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">G</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gold Membership</h3>
              <p className="text-gray-600 mb-4">50 flight hours with guaranteed availability and premium amenities</p>
              <div className="text-2xl font-bold text-amber-600">$275K</div>
            </div>
            <div className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-amber-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">P</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Platinum Elite</h3>
              <p className="text-gray-600 mb-4">Unlimited access with exclusive aircraft and personalized service</p>
              <div className="text-2xl font-bold text-amber-600">$500K</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Elevate Your Travel Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the freedom and luxury of private aviation with our world-class fleet and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Book Flight
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-sky-600 transition-colors">
              Join Membership
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}