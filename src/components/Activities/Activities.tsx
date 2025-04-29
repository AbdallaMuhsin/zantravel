import React, { useState } from 'react';
import { activities } from '../../data/activities';
import { Meta } from '../Meta/Meta';
import ActivityCard from './ActivityCard';
import SectionTitle from '../UI/SectionTitle';

const Activities: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [showScrollTop, setShowScrollTop] = useState(false);
  type CategoryId = 'all' | 'beach-water' | 'wildlife-nature' | 'culture-historical' | 'adventure-sport' | 'top-destinations';
  
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const categories: Array<{ id: CategoryId; name: string }> = [
    { id: 'all', name: 'All' },
    { id: 'beach-water', name: 'Beach' },
    { id: 'wildlife-nature', name: 'Wildlife' },
    { id: 'culture-historical', name: 'Culture'},
    { id: 'adventure-sport', name: 'Adventure'},
    { id: 'top-destinations', name: 'Destinations' }
  ];

  const categoryMap: Record<Exclude<CategoryId, 'all'>, string[]> = {
    'beach-water': ['nungwi-beach', 'paje-beach', 'kendwa-beach', 'snorkeling', 'sunset-cruise', 'fishing', 'nakupenda-sandbank', 'safari-blue', 'jet-ski', 'kite-surfing', 'parasailing', 'tumbatu-island'],
    'wildlife-nature': ['kilimanjaro', 'serengeti', 'mikumi', 'ngorongoro', 'jozani'],
    'culture-historical': ['nungwi-village', 'fukuchani-village', 'spice-tour', 'stone-town', 'prison-island'],
    'adventure-sport': ['baraka-aquarium', 'mnarani-aquarium', 'maalum-cave', 'kilimanjaro', 'prison-island', 'horse-riding'],
    'top-destinations': ['the-rock-restaurant', 'forodhani-market', 'nungwi-beach']
  };

  const filteredActivities = activeCategory === 'all'
    ? activities
    : activities.filter(activity => categoryMap[activeCategory]?.includes(activity.id));
  
  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => 
      prevVisibleItems + 6 > activities.length 
        ? activities.length 
        : prevVisibleItems + 6
    );
  };

  // Handle scroll to top button visibility
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Meta 
        title="Activities & Tours in Zanzibar | zanTravel"
        description="Explore exciting activities and tours in Zanzibar. From snorkeling with dolphins to spice tours, discover unforgettable experiences with zanTravel."
        keywords="Zanzibar activities, Zanzibar tours, snorkeling, dolphin watching, spice tour, Stone Town tour, beach activities, water sports"
        type="website"
      />
      <section id="activities" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <SectionTitle
            title="Popular Activities"
            subtitle="Explore the best experiences Zanzibar and Tanzania have to offer"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id as CategoryId);
                setVisibleItems(6); // Reset visible items when changing category
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#0AB3B8] text-white transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
              } shadow-md`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {filteredActivities.slice(0, visibleItems).map((activity, index) => (
            <div 
              key={activity.id}
              className="opacity-0 animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
        
        {visibleItems < filteredActivities.length && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2 text-[#001D3D] hover:text-[#FF8E5E] transition-colors duration-300"
            >
              <span className="text-sm font-medium">Show More Activities</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <svg 
          className="w-6 h-6 text-[#001D3D]" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </button>
    </section>
    </>
  );
};

export default Activities;