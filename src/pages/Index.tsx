import React from 'react';
import ImageTransition from '../components/ImageTransition';

// Import images
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';

const images = [
  {
    url: img1,
    title: "Mountain Landscape",
    description: "Breathtaking mountain landscape with sunlight passing through the clouds creating dramatic rays."
  },
  {
    url: img2,
    title: "Vibrant Flora",
    description: "Beautiful orange flowers in bloom, capturing nature's vibrant palette in perfect light."
  },
  {
    url: img3,
    title: "Serene Valley",
    description: "Peaceful river flowing through a valley with majestic mountains under pristine white clouds."
  },
  {
    url: img4,
    title: "Ancient Forest",
    description: "Looking up through the canopy of an ancient forest, sunlight filtering through the branches."
  },
  {
    url: img5,
    title: "Foggy Summit",
    description: "Mysterious mountain summit shrouded in fog, creating an ethereal landscape at dawn."
  },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <ImageTransition images={images} />
    </div>
  );
};

export default Index;