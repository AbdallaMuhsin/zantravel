import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';
import { galleryImages } from '../../data/gallery';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoChange, setAutoChange] = useState(true);

  useEffect(() => {
    // Get image paths from gallery data
    const imagePaths = galleryImages.map(img => img.src);
    setImages(imagePaths);
    // Set a random initial image
    setCurrentIndex(Math.floor(Math.random() * imagePaths.length));
  }, []);

  const getRandomIndex = (exclude: number) => {
    if (images.length <= 1) return 0;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * images.length);
    } while (newIndex === exclude);
    return newIndex;
  };

  const nextSlide = () => {
    setAutoChange(false); // Stop auto-change when manually navigating
    setCurrentIndex(getRandomIndex(currentIndex));
  };

  const prevSlide = () => {
    setAutoChange(false); // Stop auto-change when manually navigating
    setCurrentIndex(getRandomIndex(currentIndex));
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoChange) {
      timer = setInterval(() => {
        setCurrentIndex(getRandomIndex(currentIndex));
      }, 5000); // Change every 5 seconds
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoChange]);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-[#F2F7FA]">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <SectionTitle
          title="Photo Gallery"
          subtitle="Stunning visuals from Zanzibar and Tanzania"
        />
        
        <div className="relative mt-6 overflow-hidden">
          {/* Carousel */}
          <div 
            className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg"
          >
            {images.map((imagePath, index) => (
              <div
                key={imagePath}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={imagePath}
                  alt={galleryImages[index].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
            
            {/* Controls */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              onClick={prevSlide}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-200"
              onClick={nextSlide}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Removed indicators since we're doing random navigation */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;