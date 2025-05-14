
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const ImageCaption = ({ title, description }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`absolute left-0 ${isMobile ? 'bottom-24' : 'bottom-36 md:bottom-48'} w-full px-4 md:px-8 z-10`}>
      <div className="max-w-3xl">
        <h2 className={`text-white ${isMobile ? 'text-2xl' : 'text-4xl md:text-6xl'} font-bold mb-2 md:mb-4 fade-in`}>
          {title}
        </h2>
        <p className={`text-white/90 ${isMobile ? 'text-sm' : 'text-lg md:text-xl'} max-w-xl fade-in`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ImageCaption;
