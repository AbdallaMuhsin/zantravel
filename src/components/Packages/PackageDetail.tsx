import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../../data/packages';
import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';
import RelatedPackages from './RelatedPackages';
import { Meta } from '../Meta/Meta';
import { getImageUrl } from '../../utils/images';

const PackageDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const packageItem = packages.find(p => p.id === id);

  if (!packageItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Package not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#0AB3B8] hover:underline"
          >
            Return to homepage
          </button>
        </div>
      </div>
    );
  }




  return (
    <>
      <Meta 
        title={`${packageItem.title} | Travel Packages | zanTravel`}
        description={packageItem.description}
        keywords={`${packageItem.title.toLowerCase()}, zanzibar packages, ${packageItem.duration.toLowerCase()}, ${packageItem.includes.join(', ').toLowerCase()}`}
        image={packageItem.image}
        type="article"
      />
      <div className="min-h-screen bg-white pt-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Hero Section */}
        <div className="relative h-[70vh] rounded-3xl overflow-hidden mb-8">

          <img
            src={getImageUrl(packageItem.image, { width: 1920, quality: 85, format: 'webp' })}
            loading="lazy"
            alt={packageItem.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{packageItem.title}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{packageItem.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>From {packageItem.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

       
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Package Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {packageItem.description}
              </p>
            
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {packageItem.gallery.map((img, index) => (
                <div key={index} className={index === 2 ? "col-span-2" : ""}>
                  <img
                    src={getImageUrl(img, { width: 800, quality: 85, format: 'webp' })}
                    loading="lazy"
                    alt={`${packageItem.title} gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              ))}
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Itinerary</h3>
              <div className="space-y-8">
                {packageItem.itinerary.map((day, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#0AB3B8] rounded-full flex items-center justify-center text-white font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {day.day} - {day.title}
                        </h4>
                        <ul className="space-y-2">
                          {day.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-600">
                              <span className="w-1.5 h-1.5 bg-[#0AB3B8] rounded-full" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Package Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Package Highlights</h3>
              
              {/* Highlights */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {packageItem.includes.map((item: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {packageItem.price}
                </span>
                <span className="text-gray-600">per person</span>
              </div>

              {/* Book Button */}
              <button 
                onClick={() => navigate(`/booking?title=${encodeURIComponent(packageItem.title)}`)} 
                className="w-full bg-[#0AB3B8] text-white py-4 rounded-xl font-medium hover:bg-[#098f93] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Book This Package
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Packages Section */}
      {packageItem && <RelatedPackages currentPackage={packageItem} allPackages={packages} />}

      {/* Contact Section */}
      <Contact />
    </div>
    </>
  );
};

export default PackageDetail;
