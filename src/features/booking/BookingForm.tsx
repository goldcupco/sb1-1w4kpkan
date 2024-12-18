import React from 'react';
import { useBookingForm } from './useBookingForm';
import { Input, Select } from '@/components/ui';
import { FORM_CONFIG } from '@/config/constants';

export default function BookingForm() {
  const { formData, status, handleSubmit, handleInputChange } = useBookingForm();

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Ride</h2>
        <div className="max-w-2xl mx-auto">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you for your booking request! We'll contact you shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              There was an error submitting your request. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <Input
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              <Input
                label="Date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>
            <Select
              label="Service Type"
              options={FORM_CONFIG.serviceTypes}
              required
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                onChange={(e) => handleInputChange('message', e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}