import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D3D] text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Zanzibar wave. All rights reserved. Developed by Dulla Muhsin
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="text-white hover:text-[#FF8E5E] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#FF8E5E] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#FF8E5E] transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;