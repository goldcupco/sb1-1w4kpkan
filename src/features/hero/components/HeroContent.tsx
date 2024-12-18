import React from 'react';

interface HeroContentProps {
  title: string;
  subtitle: string;
}

export default function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="relative container mx-auto px-4 h-full flex items-center">
      <div className="text-white max-w-2xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a
          href="#contact"
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}