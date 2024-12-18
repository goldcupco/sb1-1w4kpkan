import React from 'react';
import { useBookingForm } from '../hooks/useBookingForm';
import { Input, Select } from '@/components/ui';
import { FORM_CONFIG } from '@/config/constants';

export default function BookingForm() {
  const {
    formData,
    errors,
    status,
    handleSubmit,
    handleInputChange,
    handleBlur,
    touched
  } = useBookingForm();

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Book Your Ride</h2>
        <div className="max-w-2xl mx-auto">
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              <p className="font-medium">Thank you for your booking request!</p>
              <p className="text-sm mt-1">We'll contact you shortly to confirm your reservation.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              <p className="font-medium">Unable to submit your booking request</p>
              <p className="text-sm mt-1">
                Please try again or contact us directly at {FORM_CONFIG.contactPhone}.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                error={touched.includes('name') ? errors.name : undefined}
                placeholder="John Smith"
              />
              <Input
                label="Email Address"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                error={touched.includes('email') ? errors.email : undefined}
                placeholder="john@example.com"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                error={touched.includes('phone') ? errors.phone : undefined}
                placeholder="(412) 555-0123"
              />
              <Input
                label="Event Date"
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                onBlur={() => handleBlur('date')}
                error={touched.includes('date') ? errors.date : undefined}
              />
            </div>
            
            <Select
              label="Service Type"
              options={FORM_CONFIG.serviceTypes}
              required
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              onBlur={() => handleBlur('service')}
              error={touched.includes('service') ? errors.service : undefined}
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Requests or Notes
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onBlur={() => handleBlur('message')}
                className={`mt-1 block w-full rounded-md shadow-sm 
                  ${errors.message 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-red-500 focus:ring-red-500'
                  }`}
                placeholder="Any special requirements or additional information..."
              />
              {touched.includes('message') && errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 disabled:opacity-50"
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Booking Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}