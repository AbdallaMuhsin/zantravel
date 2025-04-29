import React from 'react';
import { packages } from '../../data/packages';
import PackageCard from './PackageCard';
import SectionTitle from '../UI/SectionTitle';
import { Meta } from '../Meta/Meta';

const Packages: React.FC = () => {
  return (
    <>
      <Meta 
        title="Travel Packages & Tours | zanTravel"
        description="Discover our carefully curated travel packages in Zanzibar. From beach getaways to cultural experiences, find your perfect vacation package."
        keywords="zanzibar packages, travel packages, vacation packages, beach packages, safari packages, honeymoon packages, island tours, tanzania travel"
        type="website"
      />
      <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Our Travel Packages"
          subtitle="Expertly crafted tours for unforgettable experiences"
        />
        
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {packages.map(packageItem => (
              <PackageCard key={packageItem.id} packageItem={packageItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Packages;