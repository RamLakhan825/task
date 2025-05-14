
import React, { useState, useEffect, useRef } from 'react';
import NavigationControls from './NavigationControls';
import ImageCaption from './ImageCaption';
import { useIsMobile } from '../hooks/use-mobile';

const ImageTransition = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef(null);
  const isMobile = useIsMobile();

  // Clear any existing timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Auto slideshow effect
  useEffect(() => {
    if (isPlaying && !isTransitioning) {
      timeoutRef.current = setTimeout(() => {
        goToNext();
      }, 5000); // Change image every 5 seconds
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPlaying, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setPrevIndex(null);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Reset transition after animation completes
    setTimeout(() => {
      handleTransitionEnd();
    }, 800);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setPrevIndex(currentIndex);
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    // Reset transition after animation completes
    setTimeout(() => {
      handleTransitionEnd();
    }, 800);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Current Image */}
      <div className="image-container">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className={`w-full h-full object-cover scale-image ${
            prevIndex !== null
              ? direction === 'next'
                ? 'slide-in-next'
                : 'slide-in-prev'
              : ''
          }`}
          style={{ objectPosition: isMobile ? 'center center' : 'center center' }}
        />
        <div className="image-overlay"></div>
      </div>

      {/* Previous Image (for transition) */}
      {prevIndex !== null && (
        <div className="image-container">
          <img
            src={images[prevIndex].url}
            alt={images[prevIndex].title}
            className={`w-full h-full object-cover ${
              direction === 'next' ? 'slide-out-current' : 'slide-out-next'
            }`}
            style={{ objectPosition: isMobile ? 'center center' : 'center center' }}
          />
          <div className="image-overlay"></div>
        </div>
      )}

      {/* Image caption */}
      <ImageCaption 
        title={images[currentIndex].title} 
        description={images[currentIndex].description} 
      />

      {/* Navigation controls */}
      <NavigationControls
        onPrev={goToPrev}
        onNext={goToNext}
        onPlayPause={togglePlay}
        isPlaying={isPlaying}
        totalImages={images.length}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default ImageTransition;
