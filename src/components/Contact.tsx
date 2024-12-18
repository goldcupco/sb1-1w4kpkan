import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-red-600" />
              <div>
                <p className="text-lg font-medium">Phone</p>
                <a 
                  href="tel:(412) XXX-XXXX" 
                  className="text-xl text-gray-700 hover:text-red-600 transition-colors"
                >
                  (412) XXX-XXXX
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-red-600" />
              <div>
                <p className="text-lg font-medium">Email</p>
                <a 
                  href="mailto:booking@steelcityrollz.com" 
                  className="text-xl text-gray-700 hover:text-red-600 transition-colors"
                >
                  booking@steelcityrollz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}