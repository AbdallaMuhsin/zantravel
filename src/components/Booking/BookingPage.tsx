import React from 'react';
import { motion } from 'framer-motion';
import BookingForm from './BookingForm';

const BookingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Book Your Zanzibar Adventure
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to start planning your perfect getaway. 
              Our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Booking Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
            <BookingForm />
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0AB3B8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+255 123 456 789</p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0AB3B8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@zanzibar-tours.com</p>
            </div>

            <div className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#0AB3B8]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Stone Town, Zanzibar</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;
