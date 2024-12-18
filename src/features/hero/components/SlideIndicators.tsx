import React from 'react';

interface SlideIndicatorsProps {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function SlideIndicators({ count, currentIndex, onSelect }: SlideIndicatorsProps) {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? 'bg-red-600 w-6' : 'bg-white'
          }`}
          aria-label={`Show slide ${index + 1}`}
        />
      ))}
    </div>
  );
}