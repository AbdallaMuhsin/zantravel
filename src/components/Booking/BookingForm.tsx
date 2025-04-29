import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  startDate: string;
  adults: number;
  children: number;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  startDate: '',
  adults: 1,
  children: 0,
  message: '',
};

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const title = searchParams.get('title');
    if (title) {
      setFormData(prev => ({
        ...prev,
        destination: title
      }));
    }
  }, [searchParams]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the data to a server here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData(initialFormData);
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  

  return (
    <section id="booking" className="py-20 bg-[#F2F7FA]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#001D3D] mb-4">Book Your Dream Vacation</h2>
            <p className="text-gray-600 mb-6">
              Complete the form below to start planning your perfect trip to Zanzibar or Tanzania. 
              Our travel experts will contact you within 24 hours to discuss your requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0AB3B8] p-3 rounded-full mr-4 text-white">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001D3D] text-lg">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Choose dates that work for you. We'll help you plan the perfect itinerary.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0AB3B8] p-3 rounded-full mr-4 text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001D3D] text-lg">Group & Private Tours</h3>
                  <p className="text-gray-600">
                    Travel with others or create a private experience just for your group.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#0AB3B8] p-3 rounded-full mr-4 text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#001D3D] text-lg">Custom Itineraries</h3>
                  <p className="text-gray-600">
                    Tell us your interests, and we'll craft a personalized experience for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Thank you for your inquiry!</h3>
                  <p>We've received your booking request and will contact you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#0AB3B8] text-white px-6 py-2 rounded hover:bg-[#FF8E5E] transition-colors duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold text-[#001D3D] mb-4">Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                  />
                </div>
                
                <div>
                  <label htmlFor="destination" className="block text-gray-700 mb-1">Activity Type*</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adults" className="block text-gray-700 mb-1">Adults*</label>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min="1"
                      value={formData.adults}
                      onChange={handleNumberChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="children" className="block text-gray-700 mb-1">Children</label>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min="0"
                      value={formData.children}
                      onChange={handleNumberChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="startDate" className="block text-gray-700 mb-1">Start Date*</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">Additional Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about any special requirements or questions you may have..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0AB3B8]"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#FF8E5E] text-white py-3 rounded-md hover:bg-[#001D3D] transition-colors duration-300 font-medium"
                >
                  Submit Booking Request
                </button>
                
                <p className="text-xs text-gray-500 mt-2">
                  Note: The price is subject to change based on number of adults and children.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;