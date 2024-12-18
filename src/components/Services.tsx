import React from 'react';
import { Car, Users, Briefcase, Music } from 'lucide-react';

const services = [
  {
    icon: <Car className="h-12 w-12" />,
    title: "Limousine Rentals",
    description: "Elegant limousines perfect for weddings, anniversaries, or special nights out."
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Party Bus Rentals",
    description: "State-of-the-art sound systems, LED lighting, and spacious seating for unforgettable celebrations."
  },
  {
    icon: <Briefcase className="h-12 w-12" />,
    title: "Corporate Transportation",
    description: "Professional and reliable transport for corporate events, meetings, and airport transfers."
  },
  {
    icon: <Music className="h-12 w-12" />,
    title: "Special Events",
    description: "From bachelor/bachelorette parties to concerts and sporting events, we've got you covered."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#booking"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}