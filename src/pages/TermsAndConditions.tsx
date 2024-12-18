import React from 'react';
import { COMPANY_INFO } from '@/config/constants';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using the services of {COMPANY_INFO.name}, you agree to be bound by these Terms and Conditions, which are governed by the laws of the Commonwealth of Pennsylvania.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Reservations and Payments</h2>
            <div className="space-y-3">
              <p className="text-gray-700">2.1. All reservations require a 50% non-refundable deposit to secure the booking.</p>
              <p className="text-gray-700">2.2. Final payment is due 7 days prior to the service date.</p>
              <p className="text-gray-700">2.3. We accept major credit cards, cash, and business checks (with prior approval).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <div className="space-y-3">
              <p className="text-gray-700">3.1. Cancellations made 14 days or more before the service date: 50% of deposit refunded.</p>
              <p className="text-gray-700">3.2. Cancellations within 14 days of service: No refund of deposit.</p>
              <p className="text-gray-700">3.3. Date changes subject to availability and may incur additional fees.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Vehicle Rules and Regulations</h2>
            <div className="space-y-3">
              <p className="text-gray-700">4.1. No smoking in any vehicle (PA Clean Indoor Air Act).</p>
              <p className="text-gray-700">4.2. No illegal substances or weapons permitted.</p>
              <p className="text-gray-700">4.3. Clients are responsible for any damage caused by their party.</p>
              <p className="text-gray-700">4.4. We reserve the right to terminate service without refund for unruly behavior.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Insurance and Liability</h2>
            <div className="space-y-3">
              <p className="text-gray-700">5.1. We maintain comprehensive commercial vehicle insurance as required by Pennsylvania law.</p>
              <p className="text-gray-700">5.2. Clients agree to indemnify {COMPANY_INFO.name} against any claims arising from their use of our services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Service Area and Hours</h2>
            <div className="space-y-3">
              <p className="text-gray-700">6.1. Primary service area: Greater Pittsburgh Metropolitan Area.</p>
              <p className="text-gray-700">6.2. Additional fees apply for service outside primary area.</p>
              <p className="text-gray-700">6.3. Overtime charges apply beyond contracted time.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}