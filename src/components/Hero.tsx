import React, { useEffect, useState, useRef } from 'react';

const HERO_IMAGES = [
  {
    url: "https://imgs.search.brave.com/PwyWr4HCU0H5zwhTbV7TvfVh279uXiU4Evj69pu6ttc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzliLzk4LTAyX0xp/bmNvbG5fVG93bl9D/YXJfbGltb3VzaW5l/LmpwZw",
    title: "Luxury Limousine Service",
    subtitle: "Experience elegance and sophistication in our premium fleet"
  },
  {
    url: "https://www.partybus.com/vehimgs2/30-40-passenger-party-buses-white-plains.jpg",
    title: "Premium Party Buses",
    subtitle: "Make your celebration unforgettable with our state-of-the-art party buses"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Preload images
  useEffect(() => {
    const imagePromises = HERO_IMAGES.map(image => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(error => console.error('Error loading images:', error));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const startTransition = () => {
      setIsTransitioning(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
        setIsTransitioning(false);
      }, 1000); // Duration matches CSS transition
    };

    const interval = setInterval(startTransition, 5000); // 5 seconds between transitions

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [imagesLoaded]);

  if (!imagesLoaded) {
    return (
      <div className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image.url})`,
              transform: isTransitioning && index === currentIndex ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">{image.title}</h1>
              <p className="text-xl mb-8">{image.subtitle}</p>
              <a 
                href="#contact" 
                className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-red-600 w-6' : 'bg-white'
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}