import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import ExternalLink from '../UI/ExternalLink';
import { getOptimizedImageUrl } from '../../utils/cloudinary';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        const translateY = scrollPosition * 0.4;
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${getOptimizedImageUrl('website/zanzibar-hero', {
            width: 1920,
            height: 1080,
            quality: 90,
            format: 'auto'
          })})`, 
          zIndex: -1
        }}
      ></div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Discover the Magic of
          <span className="block text-5xl md:text-7xl mt-2 text-[#0AB3B8]">
            Zanzibar & Tanzania
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in-delay">
          Experience breathtaking beaches, exotic wildlife, and rich cultural heritage
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
          <a 
            href="#packages" 
            className="bg-[#0AB3B8] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#FF8E5E] transition-colors duration-300"
          >
            Explore Packages
          </a>
          <ExternalLink 
            to="/booking" 
            className="bg-[#FF8E5E] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#0AB3B8] transition-colors duration-300"
          >
            Book Now
          </ExternalLink>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#activities" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce z-10"
      >
        <span className="mb-2">Scroll Down</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;