import React from 'react';
import { transportOptions } from '../../data/transport';
import SectionTitle from '../UI/SectionTitle';
import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils/images';

const Transport: React.FC = () => {
  return (
    <section 
      id="transport" 
      className="py-20 relative before:absolute before:inset-0 before:bg-black/50"
      style={{
        backgroundImage: `url(${getImageUrl('/src/assets/bg-image/transport-bg.jpg', { width: 1920, height: 1080, quality: 85, format: 'webp' })})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle
          title="Transport & Rentals"
          subtitle="Explore Zanzibar with our convenient transportation options"
          className="text-white"
        />

        <div className="mt-16 max-w-6xl mx-auto">
          {transportOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-center gap-8 mb-16 last:mb-0 backdrop-blur-sm`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 md:p-8 bg-white/95 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {option.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-[#0AB3B8]/10 text-[#0AB3B8] px-4 py-2 rounded-full">
                    <span className="text-lg font-bold">{option.pricePerDay}</span>
                    <span className="text-sm">/day</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {option.description}
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {option.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 bg-[#0AB3B8] rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.additionalCosts && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Additional Costs
                      </h4>
                      <ul className="space-y-2">
                        {option.additionalCosts.map((cost, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#0AB3B8] rounded-full" />
                            {cost}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button className="mt-8 w-full bg-[#0AB3B8] text-white py-3 px-6 rounded-xl hover:bg-[#098f93] transition-colors duration-300 flex items-center justify-center gap-3 group">
                  <span className="text-lg font-medium">Book Now</span>
                  <svg
                    className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-[#0AB3B8] px-8 py-6">
              <h3 className="text-2xl font-bold text-white">
                Important Information
              </h3>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#0AB3B8]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Rental Process
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Valid identification required for all rentals',
                          'Security deposit required (refundable)',
                          '24-hour rental period',
                          'Fuel not included in rental price'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#0AB3B8] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#0AB3B8]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Driving in Zanzibar
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Drive on the left side of the road',
                          'Zanzibar driving permit required for motor vehicles',
                          'Follow local traffic rules and regulations',
                          'Parking available in designated areas'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 bg-[#0AB3B8] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Transport;
