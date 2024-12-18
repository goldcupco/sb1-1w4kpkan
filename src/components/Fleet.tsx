import React from 'react';
import { FLEET_DATA } from '@/features/fleet/constants';

export default function Fleet() {
  return (
    <section id="fleet" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Fleet</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FLEET_DATA.map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.type}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-2xl font-bold">{vehicle.type}</h3>
                  <p className="text-lg opacity-90">{vehicle.capacity}</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-4">Features:</h4>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Book Your Ride Now
          </a>
        </div>
      </div>
    </section>
  );
}