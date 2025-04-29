import React from 'react';
import { Package } from '../../data/packages';
import { Calendar, Check } from 'lucide-react';
import ExternalLink from '../UI/ExternalLink';
import { getImageUrl } from '../../utils/images';

interface PackageCardProps {
  packageItem: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ packageItem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transform transition duration-300 hover:translate-y-[-5px] hover:shadow-xl">
      <div className="relative h-64">
        <img 
          src={getImageUrl(packageItem.image, { width: 600, height: 400, quality: 85, format: 'webp' })} 
          loading="lazy"
          alt={packageItem.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#0AB3B8] text-white px-3 py-1 rounded-full font-semibold text-sm">
          {packageItem.days} Day
        </div>
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent w-full h-1/2"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{packageItem.title}</h3>
          <div className="flex items-center mt-1">
            <Calendar size={16} className="mr-1" />
            <span className="text-sm">{packageItem.days} Day</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          <div>
            <h4 className="font-semibold text-[#0AB3B8] mb-2">Highlights:</h4>
            <ul className="space-y-1">
              {packageItem.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check size={16} className="text-[#FF8E5E] mt-0.5 mr-1 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#0AB3B8] mb-2">Includes:</h4>
            <ul className="space-y-1">
              {packageItem.includes.slice(0, 5).map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check size={16} className="text-[#FF8E5E] mt-0.5 mr-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
              {packageItem.includes.length > 5 && (
                <li className="text-sm text-gray-500 ml-5">+ {packageItem.includes.length - 5} more</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <ExternalLink 
          to={`/packages/${packageItem.id}`}
          className="block text-center w-full bg-[#FF8E5E] text-white py-3 rounded-md hover:bg-[#001D3D] transition-colors duration-300 font-medium"
        >
          Learn More
          <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </ExternalLink>
      </div>
    </div>
  );
};

export default PackageCard;