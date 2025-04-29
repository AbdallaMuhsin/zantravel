import React from 'react';
import { Activity } from '../../data/activities';
import { Clock, DollarSign } from 'lucide-react';
import ExternalLink from '../UI/ExternalLink';
import { getImageUrl } from '../../utils/images';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={getImageUrl(activity.image, { width: 600, height: 400, quality: 85, format: 'webp' })} 
          loading="lazy"
          alt={activity.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        {/* Permanent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>
        
        {/* Floating Price Tag */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
          <div className="flex items-center text-sm font-bold text-[#001D3D]">
            <DollarSign size={14} className="mr-1 text-[#FF8E5E]" />
            <span>{activity.price}</span>
          </div>
        </div>

        {/* Title and Content Container */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Title - Always Visible */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white px-3 pb-3 transform transition-all duration-300 group-hover:-translate-y-2">
              {activity.title}
            </h3>
          </div>

          {/* Additional Content - Hidden by Default */}
          <div className="overflow-hidden px-3">
            <div className="transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex items-center text-white/90 text-sm mb-3">
                <Clock size={14} className="mr-1" />
                <span>{activity.duration}</span>
              </div>
              <p className="text-white/80 text-sm line-clamp-2 mb-4">
                {activity.description}
              </p>
              
              {/* View Details Button */}
              <ExternalLink 
                to={`/activities/${activity.id}`}
                className="inline-flex items-center text-white text-sm font-medium hover:text-[#FF8E5E] transition-colors duration-300"
              >
                <span>View Details</span>
                <svg 
                  className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;