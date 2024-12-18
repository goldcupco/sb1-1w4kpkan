import React from 'react';
import { COMPANY_INFO } from '@/config/constants';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <div className="space-y-3">
              <p className="text-gray-700">We collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Contact information (name, email, phone number)</li>
                <li>Booking details (dates, locations, service type)</li>
                <li>Payment information (processed securely through our payment providers)</li>
                <li>Communications with our team</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <div className="space-y-3">
              <p className="text-gray-700">Your information is used for:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Processing your reservations</li>
                <li>Communicating about your booking</li>
                <li>Improving our services</li>
                <li>Legal compliance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information. Information may be shared with:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Service providers (payment processors, email services)</li>
              <li>Legal authorities when required by law</li>
              <li>Insurance providers when necessary</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Secure SSL encryption</li>
              <li>Regular security assessments</li>
              <li>Limited staff access to personal information</li>
              <li>Secure data storage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-700">
              Under Pennsylvania law and our policies, you have the right to:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              <li>Access your personal information</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-700">
              For privacy-related inquiries, please contact us at:
            </p>
            <div className="mt-2 text-gray-700">
              <p>{COMPANY_INFO.name}</p>
              <p>Email: {COMPANY_INFO.email}</p>
              <p>Phone: {COMPANY_INFO.phone}</p>
              <p>Address: {COMPANY_INFO.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}