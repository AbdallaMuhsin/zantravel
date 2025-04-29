import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, CreditCard, Map, Compass, Sunrise, Umbrella } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SectionTitle from '../UI/SectionTitle';
import Contact from '../Contact/Contact';
import { scrollToSection } from '../../utils/scrollUtils';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What's included in a typical safari package?",
    answer: "A typical safari package includes accommodation in lodges or luxury tented camps, all meals, game drives with experienced guides, park entrance fees, and transportation. Some packages also include cultural visits to Maasai villages, sundowners, and bush meals. Additional services like hot air balloon safaris can be arranged at extra cost.",
    icon: <Compass className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "Can I combine a safari with a Zanzibar beach holiday?",
    answer: "Yes, many visitors combine a Tanzania safari with a Zanzibar beach holiday. This popular combination is known as a 'bush and beach' experience. After your safari adventure, you can relax on Zanzibar's pristine beaches, explore Stone Town, or enjoy water sports. We can help arrange seamless transfers between locations.",
    icon: <Umbrella className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What's the accommodation like in Zanzibar?",
    answer: "Zanzibar offers a wide range of accommodation options. From luxury beachfront resorts and boutique hotels in Stone Town to private villas and eco-friendly bungalows. Many properties feature traditional Swahili architecture, modern amenities, and stunning ocean views. We can recommend options based on your preferences and budget.",
    icon: <Map className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What wildlife can I see in Tanzania's national parks?",
    answer: "Tanzania's national parks offer incredible wildlife viewing opportunities. You can see the 'Big Five' (lion, leopard, elephant, rhino, and buffalo) in parks like Serengeti and Ngorongoro Crater. Other wildlife includes giraffes, zebras, various antelope species, hippos, and over 500 bird species. The Great Migration of wildebeest and zebras is also a spectacular sight in the Serengeti.",
    icon: <Compass className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What's the best time for a safari in Tanzania?",
    answer: "The best time for a safari in Tanzania depends on what you want to see. The dry seasons (June to October and January to February) are generally best for wildlife viewing as animals gather around water sources. If you want to witness the Great Migration, visit between July and October. The green season (November-December and March-May) offers lush landscapes and bird watching opportunities.",
    icon: <Calendar className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "How safe is Zanzibar for tourists?",
    answer: "Zanzibar is generally safe for tourists, with a well-established tourism infrastructure. However, like any travel destination, it's important to take basic precautions: keep valuables secure, be aware of your surroundings, and follow local customs and dress codes, especially in Stone Town and rural areas. Most tourists experience no problems during their visit.",
    icon: <Umbrella className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What are the best times to visit Zanzibar?",
    answer: "The best time to visit Zanzibar is during the dry seasons: June to October and December to February. These periods offer ideal conditions for beach activities and sightseeing with minimal rainfall and comfortable temperatures.",
    icon: <Calendar className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "Do I need a visa to visit Tanzania/Zanzibar?",
    answer: "Most visitors need a visa to enter Tanzania/Zanzibar. You can obtain a visa on arrival at major entry points or apply online through the Tanzania e-Visa portal before your trip. Requirements may vary based on your nationality.",
    icon: <Compass className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What currencies are accepted in Zanzibar?",
    answer: "The official currency is the Tanzanian Shilling (TZS). US Dollars are widely accepted in tourist areas, but it's recommended to carry some local currency for small purchases. Major hotels and restaurants accept credit cards.",
    icon: <CreditCard className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What activities are included in your packages?",
    answer: "Our packages include a variety of activities such as snorkeling, diving, spice tours, Stone Town cultural tours, sunset dhow cruises, and beach activities. Each package is customizable to suit your preferences.",
    icon: <Sunrise className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "How do I book a tour or activity?",
    answer: "You can book through our website by selecting your desired package or activity and following the booking process. Alternatively, you can contact our team directly for personalized assistance and custom itineraries.",
    icon: <Map className="w-6 h-6 text-[#0AB3B8]" />,

  },
  {
    question: "What should I pack for my trip?",
    answer: "We recommend packing light, breathable clothing, swimwear, sun protection (sunscreen, hat, sunglasses), insect repellent, and comfortable walking shoes. Don't forget your camera and any necessary medications.",
    icon: <Umbrella className="w-6 h-6 text-[#0AB3B8]" />,

  }
];



const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [id] // Only keep the newly opened item
    );
  };

  return (
    <>
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about traveling to Zanzibar"
          />
          
          <div className="mt-8 max-w-4xl mx-auto grid gap-6">
            {faqData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  className="w-full flex items-center p-6 text-left"
                  onClick={() => toggleItem(`${idx}`)}
                >
                  <div className="mr-4">{item.icon}</div>
                  <span className="flex-grow font-medium text-gray-900">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openItems.includes(`${idx}`) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="flex-shrink-0 ml-2 text-gray-400" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(`${idx}`) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                      <div className="mt-8 mb-8 text-center bg-gradient-to-r from-[#0AB3B8] to-[#001D3D] rounded-2xl p-6 shadow-xl max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
                        <p className="text-gray-100 mb-4 text-sm">
                          Our team is here to help you plan your perfect Zanzibar adventure
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                          <a 
                            href="#contact" 
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center bg-white text-[#001D3D] px-4 py-2 rounded-full hover:bg-[#FF8E5E] hover:text-white transition-all duration-300 font-medium text-sm"
                          >
                            Contact Us
                          </a>
                          <a 
                            href="#activities" 
                            onClick={(e) => {
                              e.preventDefault();
                              if (location.pathname !== '/') {
                                // If we're not on home page, first navigate to home
                                navigate('/', { state: { scrollTo: 'activities' } });
                              } else {
                                // If we're already on home page, just scroll
                                scrollToSection('activities');
                              }
                            }}
                            className="inline-flex items-center bg-[#FF8E5E] text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#001D3D] transition-all duration-300 font-medium text-sm"
                          >
                            Start Planning Your Trip
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default FAQ;
