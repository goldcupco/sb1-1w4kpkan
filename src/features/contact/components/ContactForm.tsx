import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import { Input } from '@/components/ui';
import { COMPANY_INFO } from '@/config/constants';

export default function ContactForm() {
  const { formData, status, handleSubmit, handleInputChange } = useContactForm();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          There was an error sending your message. Please try again or contact us directly at {COMPANY_INFO.phone}.
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
        <Input
          label="Subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}