import React from 'react';

interface HeroSlideProps {
  url: string;
  isActive: boolean;
}

export default function HeroSlide({ url, isActive }: HeroSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className="absolute inset-0 bg-center bg-cover transition-transform duration-700"
        style={{
          backgroundImage: `url("${url}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          transform: isActive ? 'scale(1.02)' : 'scale(1)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
    </div>
  );
}