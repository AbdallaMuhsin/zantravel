import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activities } from '../../data/activities';
import { motion } from 'framer-motion';
import Contact from '../Contact/Contact';
import RelatedActivities from './RelatedActivities';
import { Meta } from '../Meta/Meta';
import { getImageUrl } from '../../utils/images';
import TourSchema from "../SchemaMarkup/TourSchema";
import { BreadcrumbSchema } from "../SchemaMarkup/BreadcrumbSchema";

const ActivityDetail: React.FC = () => {
  const beachActivities = [
    'nungwi-beach',
    'kendwa-beach',
    'paje-beach'
  ];

  const noBookingActivities = [
    ...beachActivities,
    'the-rock-restaurant',
    'forodhani-market'
  ];

  const { id } = useParams();
  const navigate = useNavigate();
  
  const activity = activities.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Activity not found</h2>
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

  // Generate paths for the three additional detail images
  const additionalImages = [
    `/src/assets/activity-detail-image/${id}-1.jpg`,
    `/src/assets/activity-detail-image/${id}-2.jpg`,
    `/src/assets/activity-detail-image/${id}-3.jpg`
  ];

  const includes = activity.includes || [];

  const schedule = activity.schedule;

  return (
    <>
      <>
        <Meta 
          title={`${activity.title} | Activities in Zanzibar | Zantravel`}
          description={activity.description}
          image={getImageUrl(activity.image, { width: 1200, height: 630, quality: 85, format: 'webp' })}
        />
        <TourSchema activity={activity} />
      <BreadcrumbSchema title={activity.title} />
      </>
      <div className="min-h-screen bg-white pt-32 pb-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12">
          <img
            src={getImageUrl(activity.image, { width: 1920, height: 1080, quality: 85, format: 'webp' })}
            loading="lazy"
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{activity.title}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{activity.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>From {activity.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">




            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose max-w-none mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Activity</h2>
              <p className="text-gray-600">{activity.description}</p>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {additionalImages.map((img, index) => (
                <div key={index} className={index === 2 ? "col-span-2" : ""}>
                  <img
                    src={getImageUrl(img, { width: 800, quality: 85, format: 'webp' })}
                    loading="lazy"
                    alt={`${activity.title} gallery ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              ))}
            </motion.div>

            {/* Daily Schedule - Only show for bookable activities */}
            {!noBookingActivities.includes(id || '') && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Schedule</h3>
                <div className="space-y-4">
                  {schedule.activities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="min-w-[100px] text-[#0AB3B8] font-medium">{item.time}</div>
                      <div className="text-gray-700">{item.activity}</div>
                    </div>
                  ))}
                </div>

                {/* Important Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Note:</h3>
                  <p className="text-gray-700 mb-4">The Price and Itinerary are a general guide and may be subject to change based on:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Weather conditions (rain, extreme cold, or high winds may alter schedules).</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Group size & participant fitness levels (pace may be adjusted for safety).</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hotel/lodge availability (accommodations may vary based on booking confirmations).</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flight/travel delays (Zanzibar ↔ Main Land transfers depend on domestic airline schedules).</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-600">
                      <svg className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Guide & park authority recommendations (safety and acclimatization take priority).</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We will do our best to stick to the planned schedule/price, but flexibility ensures a safe and enjoyable experience for everyone. Any changes will be communicated promptly.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {id && (noBookingActivities.includes(id) ? (
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visitor Information</h3>
                
                {/* Best Time to Visit */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Time to Visit</h4>
                  <div className="text-gray-600">
                    <p>Early morning (6 AM - 9 AM) or</p>
                    <p>Late afternoon (4 PM - 6:30 PM)</p>
                  </div>
                </div>

                {/* Safety Tips and Getting There - Only show for beach activities */}
                {beachActivities.includes(id || '') && (
                  <>
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Stay hydrated and bring sunscreen
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Watch for warning flags and swim conditions
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Respect local customs and dress modestly
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Getting There</h4>
                      <p className="text-gray-600 mb-4">
                        You can reach this beach by:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Local taxi or ride-sharing service
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Public transportation
                        </li>
                        <li className="flex items-center gap-3 text-gray-600">
                          <svg className="w-5 h-5 text-[#0AB3B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Hotel shuttle service
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book This Activity</h3>
                
                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                  <ul className="space-y-3">
                    {includes.map((item, index) => (
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
                    {activity.price}
                  </span>
                  <span className="text-gray-600">per person</span>
                </div>

                {/* Book Button */}
                <button 
                  onClick={() => navigate(`/booking?title=${encodeURIComponent(activity.title)}`)} 
                  className="w-full bg-[#0AB3B8] text-white py-4 rounded-xl font-medium hover:bg-[#098f93] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Book Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Related Activities Section */}
      {activity && <RelatedActivities currentActivity={activity} allActivities={activities} />}

      {/* Contact Section */}
      <Contact />
    </div>
    </>
  );
};

export default ActivityDetail;
