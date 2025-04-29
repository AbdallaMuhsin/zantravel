import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package } from '../../data/packages';
import { getImageUrl } from '../../utils/images';

interface RelatedPackagesProps {
  currentPackage: Package;
  allPackages: Package[];
}

const RelatedPackages: React.FC<RelatedPackagesProps> = ({ currentPackage, allPackages }) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Filter out current package and get related ones
  const relatedPackages = allPackages
    .filter(pkg => pkg.id !== currentPackage.id)
    .slice(0, 8);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  useEffect(() => {
    let animationId: number;
    if (!isDragging && !isHovered) {
      const animate = () => {
        const currentX = x.get();
        const newX = currentX - 1;
        x.set(newX <= -contentWidth / 2 ? 0 : newX);
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(animationId);
  }, [isDragging, isHovered, x, contentWidth]);

  const handleDragStart = () => {
    setIsDragging(true);
    controls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    const maxDrag = -(contentWidth - containerWidth);
    
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } });
    } else if (currentX < maxDrag) {
      controls.start({ x: maxDrag, transition: { type: 'spring', stiffness: 300, damping: 30 } });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePackageClick = (packageId: string) => {
    if (!isDragging) {
      navigate(`/packages/${packageId}`);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Similar Packages
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-10" />
          
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-6 px-4"
              style={{ x }}
              animate={controls}
              drag="x"
              dragConstraints={{ 
                left: -(contentWidth - containerWidth), 
                right: 0 
              }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragElastic={0}
              dragMomentum={false}
            >
              {relatedPackages.map((pkg) => (
                <motion.div
                  key={pkg.id}
                  className="flex-shrink-0 w-[340px] cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handlePackageClick(pkg.id)}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={getImageUrl(pkg.image, { width: 600, height: 400, quality: 85, format: 'webp' })}
                          alt={pkg.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <span className="text-white font-semibold text-xl">
                            From {pkg.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#0AB3B8] transition-colors text-lg">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Duration: {pkg.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate packages for infinite scroll */}
              {relatedPackages.map((pkg) => (
                <motion.div
                  key={`${pkg.id}-duplicate`}
                  className="flex-shrink-0 w-[340px] cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handlePackageClick(pkg.id)}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={getImageUrl(pkg.image, { width: 600, height: 400, quality: 85, format: 'webp' })}
                          alt={pkg.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <span className="text-white font-semibold text-xl">
                            From {pkg.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#0AB3B8] transition-colors text-lg">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Duration: {pkg.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPackages;
