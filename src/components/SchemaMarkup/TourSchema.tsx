import React from 'react';
import { Activity } from '../../data/activities';

interface TourSchemaProps {
  activity: Activity;
}

const TourSchema: React.FC<TourSchemaProps> = ({ activity }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": activity.title,
    "description": activity.description,
    "touristType": ["Sightseeing", "Adventure", "Culture"],
    "price": activity.price,
    "offers": {
      "@type": "Offer",
      "price": activity.price.replace('$', ''),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "itinerary": activity.schedule.activities.map(item => ({
      "@type": "EventSchedule",
      "startTime": item.time,
      "description": item.activity
    })),
    "includes": activity.includes,
    "availabilityStarts": activity.availableDays[0],
    "availabilityEnds": activity.availableDays[activity.availableDays.length - 1],
    "provider": {
      "@type": "TravelAgency",
      "name": "Zantravel",
      "description": "Your trusted travel partner in Zanzibar",
      "areaServed": "Zanzibar, Tanzania"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default TourSchema;
