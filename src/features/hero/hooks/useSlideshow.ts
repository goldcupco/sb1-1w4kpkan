import { useState, useEffect, useCallback } from 'react';

export function useSlideshow(length: number, interval: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isPaused) {
      setCurrentIndex((prev) => (prev + 1) % length);
    }
  }, [length, isPaused]);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval]);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Resume automatic slideshow after manual interaction
    const timer = setTimeout(() => setIsPaused(false), interval);
    return () => clearTimeout(timer);
  };

  return {
    currentIndex,
    setCurrentIndex: handleManualChange
  };
}