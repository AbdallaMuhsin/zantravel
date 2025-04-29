import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Meta } from './components/Meta/Meta';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { scrollToSection } from './utils/scrollUtils';
import Activities from './components/Activities/Activities';
import Packages from './components/Packages/Packages';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import TransportPreview from './components/Transport/TransportPreview';
import TransportPage from './components/Transport/TransportPage';
import ActivityDetail from './components/Activities/ActivityDetail';
import PackageDetail from './components/Packages/PackageDetail';
import BookingPage from './components/Booking/BookingPage';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to a section
    if (location.state && location.state.scrollTo) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Meta 
        title="Zantravel | Unforgettable Adventures in Zanzibar"
        description="Experience the magic of Zanzibar with Zantravel. Discover pristine beaches, historic sites, thrilling activities, and luxurious accommodations. Plan your perfect getaway today!"
        image="https://res.cloudinary.com/your-cloud-name/image/upload/zanzibar-hero.jpg"
      />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <div id="activities">
        <Activities />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <TransportPreview />
      <div id="packages">
        <Packages />
      </div>
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/transport" element={<TransportPage />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;