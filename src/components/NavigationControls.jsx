
import React from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

const NavigationControls = ({ 
  onPrev, 
  onNext, 
  onPlayPause, 
  isPlaying,
  totalImages,
  currentIndex
}) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 z-10">
      <div className="flex items-center gap-4">
        <button 
          onClick={onPrev}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-white font-medium text-sm">
          {currentIndex + 1} / {totalImages}
        </div>
        <button 
          onClick={onPlayPause}
          className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
        <div 
          className="h-full bg-white transition-all"
          style={{ 
            width: `${((currentIndex + 1) / totalImages) * 100}%`,
            transition: 'width 0.3s ease-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default NavigationControls;
