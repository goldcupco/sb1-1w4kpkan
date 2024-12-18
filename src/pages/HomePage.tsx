import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Contact from '@/components/Contact';
import BookingForm from '@/features/booking/components/BookingForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <BookingForm />
      <Contact />
    </>
  );
}