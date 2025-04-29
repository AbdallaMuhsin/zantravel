import React from 'react';
import SectionTitle from '../UI/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <SectionTitle
          title="About Zanzibar Tours"
          subtitle="Your Gateway to Paradise"
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-[#001D3D]">
              Discover the Magic of Zanzibar
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Zanzibar Tours, your premier destination for unforgettable experiences in the enchanting archipelago of Zanzibar. With over a decade of expertise, we specialize in crafting personalized adventures that capture the essence of this tropical paradise.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the historic streets of Stone Town to the pristine beaches of the coast, our expert guides will take you on a journey through time, culture, and natural beauty. We pride ourselves on providing authentic experiences that connect you with the heart and soul of Zanzibar.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF8E5E] bg-opacity-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#FF8E5E] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001D3D]">Expert Guides</h4>
                  <p className="text-sm text-gray-500">Local Knowledge</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF8E5E] bg-opacity-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#FF8E5E] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001D3D]">5-Star Service</h4>
                  <p className="text-sm text-gray-500">Premium Experience</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF8E5E] bg-opacity-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#FF8E5E] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001D3D]">Safe Travel</h4>
                  <p className="text-sm text-gray-500">Secure Adventures</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF8E5E] bg-opacity-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#FF8E5E] rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001D3D]">Personalized</h4>
                  <p className="text-sm text-gray-500">Custom Tours</p>
                </div>
              </div>
            </div>

          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-4.0.3" 
                alt="Zanzibar Beach Scene" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#FF8E5E]">1000+</h4>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-[#FF8E5E]">50+</h4>
                    <p className="text-sm text-gray-600">Tours & Activities</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-8 -right-8 w-full h-full bg-[#001D3D] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
