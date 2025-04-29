import React from 'react';
import { motion } from 'framer-motion';
import ExternalLink from '../UI/ExternalLink';

const TransportPreview: React.FC = () => {
  return (
    <section 
      id="transport" 
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
          alt="Zanzibar Road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Looking for the Perfect Ride<br />in Zanzibar?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              From bicycles to cars, we've got your transportation needs covered.
              Explore the island at your own pace.
            </p>
            <div className="pt-4">
              <ExternalLink
                to="/transport"
                className="inline-flex items-center gap-3 bg-[#0AB3B8] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#098f93] transition-all duration-300 hover:gap-4 group shadow-lg hover:shadow-xl hover:shadow-[#0AB3B8]/20"
              >
                Find Your Ride Now
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ExternalLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransportPreview;
