import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import ExternalLink from '../UI/ExternalLink';
import { scrollToSection } from '../../utils/scrollUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: 'hero', isAnchor: true },
    { name: 'Activities', href: 'activities', isAnchor: true },
    { name: 'Packages', href: 'packages', isAnchor: true },
    { name: 'Gallery', href: 'gallery', isAnchor: true },
    { name: 'Reviews', href: 'reviews', isAnchor: true },
    { name: 'FAQ', href: '/faq', isAnchor: false },
  ];

  const handleNavClick = (link: typeof navLinks[0], event: React.MouseEvent) => {
    event.preventDefault();
    
    if (link.isAnchor) {
      if (location.pathname !== '/') {
        // If we're not on home page, first navigate to home
        navigate('/', { state: { scrollTo: link.href } });
      } else {
        // If we're already on home page, just scroll
        scrollToSection(link.href);
      }
    } else {
      // For non-anchor links (like FAQ), just navigate
      navigate(link.href);
    }
    
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }} 
            className="flex items-center text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            <Compass 
              className={`mr-2 ${isScrolled ? 'text-[#0AB3B8]' : 'text-white'}`} 
              size={28} 
            />
            <span className={`${isScrolled ? 'text-[#001D3D]' : 'text-white'}`}>
              zanTravel
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.isAnchor ? `#${link.href}` : link.href}
                onClick={(e) => handleNavClick(link, e)}
                className={`font-medium transition-colors duration-200 hover:text-[#FF8E5E] ${
                  isScrolled ? 'text-[#001D3D]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <ExternalLink 
              to="/booking" 
              className="bg-[#FF8E5E] text-white px-6 py-2 rounded-full font-medium hover:bg-[#001D3D] transition-colors duration-300"
            >
              Book Now
            </ExternalLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-[#001D3D]' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-[#001D3D]' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.isAnchor ? `#${link.href}` : link.href}
                  className="text-[#001D3D] font-medium hover:text-[#FF8E5E]"
                  onClick={(e) => handleNavClick(link, e)}
                >
                  {link.name}
                </a>
              ))}
              <ExternalLink 
                to="/booking" 
                className="bg-[#FF8E5E] text-white px-4 py-2 rounded-full font-medium text-center hover:bg-[#001D3D] transition-colors duration-300"
              >
                Book Now
              </ExternalLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;