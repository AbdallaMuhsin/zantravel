import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../data/reviews';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={review.avatar} 
          alt={`${review.name}'s avatar`} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-[#001D3D]">{review.name}</h4>
          <p className="text-gray-500 text-sm">{review.location}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
          />
        ))}
        <span className="ml-2 text-sm text-gray-500">{review.date}</span>
      </div>
      
      <p className="text-gray-600 flex-grow">{review.text}</p>
    </div>
  );
};

export default ReviewCard;