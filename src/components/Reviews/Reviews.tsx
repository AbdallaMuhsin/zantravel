import React, { useState, useEffect, useRef } from 'react';
import { reviews } from '../../data/reviews';
import ReviewCard from './ReviewCard';
import SectionTitle from '../UI/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const Reviews: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  const getDisplayCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [displayCount, setDisplayCount] = useState(getDisplayCount());

  // Create a duplicated array for infinite scroll effect
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        const newDisplayCount = getDisplayCount();
        setDisplayCount(newDisplayCount);
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth / 3); // Divide by 3 because we have 3 sets
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const snapToNearestItem = () => {
    const itemWidth = containerWidth / displayCount;
    const currentX = x.get();
    const targetX = Math.round(currentX / itemWidth) * itemWidth;

    // If we've scrolled past the first set, jump to the second set
    if (currentX < -contentWidth) {
      x.set(-contentWidth + itemWidth);
      controls.start({ x: -contentWidth + itemWidth, transition: { duration: 0.3 } });
    }
    // If we've scrolled before the second set, jump to the first set
    else if (currentX > 0) {
      x.set(-contentWidth + itemWidth);
      controls.start({ x: -contentWidth + itemWidth, transition: { duration: 0.3 } });
    } else {
      controls.start({ x: targetX, transition: { duration: 0.3 } });
    }
  };

  useEffect(() => {
    let timeoutId: number;

    if (!isDragging && !isHovered) {
      timeoutId = window.setInterval(() => {
        const currentX = x.get();
        const itemWidth = containerWidth / displayCount;
        controls.start({ 
          x: currentX - itemWidth,
          transition: { duration: 0.5, ease: "easeInOut" }
        }).then(() => {
          if (currentX <= -(contentWidth * 2)) {
            x.set(-contentWidth); // Jump back to the middle set
          }
        });
      }, 5000);
    }

    return () => clearInterval(timeoutId);
  }, [isDragging, isHovered, containerWidth, displayCount, contentWidth]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    snapToNearestItem();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Traveler Reviews"
          subtitle="What our customers say about their experiences"
        />
        
        <div className="relative mt-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <div 
              className="overflow-hidden" 
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div 
                className="flex gap-6"
                style={{ x }}
                animate={controls}
                drag="x"
                dragConstraints={{ 
                  left: -(contentWidth * 2), 
                  right: 0 
                }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                dragElastic={0.2}
                dragMomentum={true}
              >
                {extendedReviews.map((review, index) => (
                  <motion.div
                    key={`${review.id}-${index}`}
                    style={{ width: `${100/displayCount}%` }}
                    className="flex-shrink-0 px-2"
                  >
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <button
            onClick={() => {
              const itemWidth = containerWidth / displayCount;
              controls.start({ 
                x: x.get() + itemWidth,
                transition: { duration: 0.5, ease: "easeInOut" }
              }).then(snapToNearestItem);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              const itemWidth = containerWidth / displayCount;
              controls.start({ 
                x: x.get() - itemWidth,
                transition: { duration: 0.5, ease: "easeInOut" }
              }).then(snapToNearestItem);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium mb-6">
            Ready to create your own amazing memories?
          </p>
          <a 
            href="/booking" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF8E5E] text-white px-8 py-3 rounded-full hover:bg-[#001D3D] transition-colors duration-300 font-medium"
          >
            Start Planning Your Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;