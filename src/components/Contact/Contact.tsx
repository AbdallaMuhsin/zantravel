import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from '../UI/SectionTitle';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-[#0AB3B8]" />,
      title: "Phone",
      content: "+255 123 456 789",
      link: "tel:+255123456789"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#0AB3B8]" />,
      title: "Email",
      content: "info@zanzibarsafari.com",
      link: "mailto:info@zanzibarsafari.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#0AB3B8]" />,
      title: "Location",
      content: "Stone Town, Zanzibar",
      link: "https://maps.google.com/?q=Stone+Town+Zanzibar"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Get in Touch"
          subtitle="Have questions? We'd love to hear from you"
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.title === "Location" ? "_blank" : undefined}
                rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">{info.icon}</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="mt-1 text-gray-600">{info.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0AB3B8] focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0AB3B8] focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0AB3B8] focus:border-transparent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0AB3B8] focus:border-transparent transition-colors"
                    placeholder="What is this about?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0AB3B8] focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0AB3B8] hover:bg-[#FF8E5E]'}`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
