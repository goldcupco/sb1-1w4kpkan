import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/config/constants';

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium">Phone</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-red-600">
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium">Email</p>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-red-600">
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-gray-600">{COMPANY_INFO.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}