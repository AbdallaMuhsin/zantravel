import React, { useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Activity } from '../../data/activities';
import { getImageUrl } from '../../utils/images';

interface RelatedActivitiesProps {
  currentActivity: Activity;
  allActivities: Activity[];
}

const RelatedActivities: React.FC<RelatedActivitiesProps> = ({ currentActivity, allActivities }) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (value) => Math.max(-2000, Math.min(0, value)));

  // Filter out current activity and get related ones
  const relatedActivities = allActivities
    .filter(activity => activity.id !== currentActivity.id)
    .slice(0, 8);

  useAnimationFrame((time) => {
    if (!isDragging && !isHovered) {
      const wrappedTime = time * 0.03 % 2000; // Slowed down the animation
      baseX.set(-wrappedTime);
    }
  });

  const handleDragStart = () => {
    setIsDragging(true);
    setDragStartX(baseX.get());
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const dragEndX = baseX.get();
    const dragDistance = Math.abs(dragEndX - dragStartX);
    
    // Only reset if the drag was very small (likely unintentional)
    if (dragDistance < 50) {
      baseX.set(dragStartX);
    }
  };



  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleActivityClick = (activityId: string) => {
    if (!isDragging) {
      navigate(`/activities/${activityId}`);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          You Might Also Like
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
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 px-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -2000, right: 0 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              dragElastic={0.05}
              dragMomentum={true}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            >
              {relatedActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  className="flex-shrink-0 w-[340px] cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleActivityClick(activity.id)}
                >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <div className="relative h-full transform group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={getImageUrl(activity.image)}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <span className="text-white font-semibold text-xl">
                          {activity.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#0AB3B8] transition-colors text-lg">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Duration: {activity.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
              {/* Duplicate activities for infinite scroll */}
              {relatedActivities.map((activity) => (
                <motion.div
                  key={`${activity.id}-duplicate`}
                  className="flex-shrink-0 w-[340px] cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleActivityClick(activity.id)}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-56">
                      <img
                        src={getImageUrl(activity.image)}
                        alt={activity.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <span className="text-white font-semibold text-xl">
                          {activity.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#0AB3B8] transition-colors text-lg">
                        {activity.title}
                      </h3>
                      <p className="text-gray-600 mt-2">
                        Duration: {activity.duration}
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

export default RelatedActivities;
