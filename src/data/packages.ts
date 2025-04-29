export interface Package {
  id: string;
  title: string;
  image: string;
  gallery: string[];  // Array of image paths for the package gallery
  days: number;
  duration: string;
  includes: string[];
  highlights: string[];
  price: string;
  description: string;
  itinerary: {
    day: string;
    title: string;
    activities: string[];
  }[];
}

export const packages: Package[] = [
  {
    id: "zanzibar-escape",
    title: "Safari Blue Zanzibar",
    image: "/src/assets/Package-image/safari blue.jpg",
    gallery: [
      "/src/assets/activity-detail-image/safari-blue-1.jpg",
      "/src/assets/activity-detail-image/safari-blue-2.jpg",
      "/src/assets/activity-detail-image/safari-blue-3.jpg"
    ],
    days: 1,
    duration: "1 Day",
    includes: [
      "Guided Tour",
      "Lunch",
      "transport",
      "Snorkeling Gear"
    ],
    highlights: [
      "Relaxation on Sandbank",
      "Snorkeling in crystal clear waters",
      "Explore Kwale Island",
      "Private Dhow Charter",
      "Swahili inspired seafood"
    ],
    price: "$30",
    description: "Safari Blue offers an exceptional opportunity to explore the remarkable wildlife and scenic areas of Zanzibar, both on land and in the water. Our boat takes you to a sandbank nestled in the middle of the ocean. Here, you can savor delicious fruits, take a refreshing swim, or simply bask in the warmth of the sun. While snorkeling, you can marvel at the beauty of the coral reefs, encounter a diverse array of fish, and observe other captivating marine creatures. The boat also transports you to a captivating blue lagoon, ensconced within a magical mangrove forest, offering an idyllic setting for a leisurely swim.",
    itinerary: [
      {
        day: "Morning",
        title: "Departure & Snorkeling",
        activities: [
          "07:30 - Pick up from your hotel",
          "08:30 - Departure from Fumba beach",
          "09:30 - First snorkeling stop at coral reef",
          "10:30 - Visit to natural lagoon"
        ]
      },
      {
        day: "Afternoon",
        title: "Island Experience & Return",
        activities: [
          "12:00 - Arrival at Kwale Island",
          "12:30 - Fresh seafood BBQ lunch",
          "14:00 - Free time for swimming and relaxation",
          "16:00 - Return journey with sunset views",
          "17:00 - Arrival back at Fumba beach"
        ]
      }
    ]
  },


  {
    id: "serengeti-safari",
    title: "Day Trip Game Park (Mikumi National Park)",
    image: "/src/assets/Package-image/wildebeests.jpg",
    gallery: [
      "/src/assets/activity-detail-image/mikumi-1.jpg",
      "/src/assets/activity-detail-image/mikumi-2.jpg",
      "/src/assets/activity-detail-image/mikumi-3.jpg",
    ],
    days: 1,
    duration: "1 Day",
    includes: [
      "Guided Tour",
      "transport",
      "All Meals",
      "Professional guide",
      "Park entrance fees"
    ],
    highlights: [
      "Wetness predator sightings (lions hunting)",
      "Close encounters with lions and elephants",
      "Stunning savannah landscapes",
      "Authentic safari camp experience"
    ],
    price: "$450",
    description: "Mikumi National Park, located in southern Tanzania, is a wildlife lover's dream and one of the country’s most accessible safari destinations. Known for its vast savannahs that resemble the Serengeti, the park is home to an incredible array of wildlife, including lions, elephants, giraffes, zebras, and hippos. Visitors can enjoy thrilling game drives, witness breathtaking landscapes, and spot over 400 bird species.",
    itinerary: [
      {
        day: "Early Morning",
        title: "Departure & Arrival",
        activities: [
          "05:00 - Pick up from your hotel",
          "05:30 - Departure to Mikumi",
          "09:30 - Arrival at Mikumi National Park",
          "10:00 - Morning game drive begins"
        ]
      },
      {
        day: "Afternoon",
        title: "Game Drive & Return",
        activities: [
          "12:30 - Lunch break at picnic site",
          "14:00 - Afternoon game drive",
          "16:00 - Begin return journey",
          "20:00 - Arrival back in Zanzibar"
        ]
      }
    ]
  },
  {
    id: "zanzibar-adventure",
    title: "Trekking Mount Kilimanjaro",
    image: "/src/assets/package-image/kilimanjaro.PNG",
    gallery: [
      "/src/assets/activity-detail-image/kilimanjaro-1.jpg",
      "/src/assets/activity-detail-image/kilimanjaro-2.jpg",
      "/src/assets/activity-detail-image/kilimanjaro-3.jpg",
    ],
    days: 7,
    duration: "7 Days / 6 Nights",
    includes: [
      "6 nights accommodation",
      "Daily meals",
      "Airport transfers",
      "Trekking equipment",
      "Professional guide",
      "Hiking permits",
      "Accommodation in a safari camp"
    ],
    highlights: [
      "Africa’s tallest mountain & the world’s highest free-standing volcano.",
      "UNESCO World Heritage Site",
      "Experience cultivation land, Rainforest, Moorland, Alpine Desert, and Arctic Summit",
    ],
    price: "$2,000",
    description: "Mount Kilimanjaro, located in Tanzania, is Africa’s highest peak and the world’s tallest free-standing mountain, rising to an impressive 5,895 meters (19,341 feet) above sea level. This iconic mountain is a dormant volcano with three cones: Kibo, Mawenzi, and Shira. Kilimanjaro is renowned for its unique ecological zones, which range from lush rainforests at the base to alpine meadows, rocky landscapes, and finally the glacial Arctic summit. The mountain is home to diverse flora and fauna, including elephants, buffaloes, colobus monkeys, and a variety of bird species in the lower zones, while the higher altitudes host hardy plants like giant lobelias and groundsels. Its snow-capped peak, though shrinking due to climate change, remains a symbol of natural beauty and adventure.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Preparation",
        activities: [
          "Airport pickup and transfer to hotel",
          "Equipment check and briefing",
          "Rest and acclimatization",
          "Overnight at Moshi hotel"
        ]
      },
      {
        day: "Day 2-3",
        title: "Beginning the Ascent",
        activities: [
          "Start trek through rainforest",
          "Reach Mandara Hut (2,720m)",
          "Continue to Horombo Hut (3,720m)",
          "Acclimatization day at Horombo"
        ]
      },
      {
        day: "Day 4-5",
        title: "High Altitude Trek",
        activities: [
          "Trek to Kibo Hut (4,700m)",
          "Final preparation for summit",
          "Midnight start for summit",
          "Reach Uhuru Peak (5,895m)"
        ]
      },
      {
        day: "Day 6-7",
        title: "Descent & Departure",
        activities: [
          "Descend to Horombo Hut",
          "Continue to Marangu Gate",
          "Transfer to hotel",
          "Departure day"
        ]
      }
    ]
  },
  {
    id: "tanzania-complete",
    title: "Spice Firm, Stone Town and Prison Island Tour",
    image: "/src/assets/package-image/stone town tour.jpeg",
    gallery: [
      "/src/assets/activity-detail-image/stone-town-1.jpg",
      "/src/assets/activity-detail-image/prison-island-2.jpg",
      "/src/assets/activity-detail-image/spice-tour-2.jpg",
    ],
    days: 1,
    duration: "1 Day",
    includes: [
      "Hotel transfers",
      "Refreshments",
      "Professional guide",
      "Fruit tasting",
      "Lunch"
    ],
    highlights: [
      "Enjoy a Local dishes with spices.",
      "Historic Stone Town with its unique architecture and rich culture.",
      "Wetness The giant tortoises and historic prison ruins.",
      "Walk through lush plantations, touch & smell fresh cinnamon, cloves, vanilla, and nutmeg straight from the trees.",
    ],
    price: "$3,499",
    description: "Embark on a flavorful adventure with a Spice Tour, where you’ll explore the lush plantations that have earned Zanzibar its reputation as the spice island. Next, venture into the heart of Stone Town, a UNESCO World Heritage Site steeped in history and culture. Finally, set sail to Prison Island, a small islet just off the coast of Stone Town, known for its historical significance and giant tortoise sanctuary.",
    itinerary: [
      {
        day: "Morning",
        title: "Spice Tour & Stone Town",
        activities: [
          "08:00 - Hotel pickup",
          "09:00 - Guided spice plantation tour",
          "11:00 - Spice tasting and local lunch",
          "13:00 - Stone Town walking tour"
        ]
      },
      {
        day: "Afternoon",
        title: "Prison Island & Return",
        activities: [
          "14:30 - Boat to Prison Island",
          "15:00 - Giant tortoise sanctuary visit",
          "16:00 - Swimming and snorkeling",
          "17:30 - Return to Stone Town",
          "18:00 - Hotel drop-off"
        ]
      }
    ]
  },
  {
    id: "safari-blue",
    title: "Snorkeling, Swimming with Turtles and Sunset Cruise",
    image: "/src/assets/Package-image/Snorkeling.jpg",
    gallery: [
      "/src/assets/activity-detail-image/snorkeling-1.jpg",
      "/src/assets/activity-detail-image/mnarani-aquarium-2.jpg",
      "/src/assets/activity-detail-image/sunset-cruise-1.jpg",
    ],
    days: 1,
    duration: "Full Day",
    includes: [
      "Traditional dhow sailing",
      "Snorkeling equipment",
      "Fresh seafood lunch (private trip)",
      "Zanzibar FreshFruit",
      "Refreshments",
      "Government Tax",
      "Professional guide"
    ],
    highlights: [
      "Sail on traditional dhow",
      "Snorkel in coral reefs with colorful fish",
      "Visit sandbank islands",
      "Fresh seafood BBQ lunch",
      "Swimming with turtles in the natural lagoon",
      "wetness the Sunset"
    ],
    price: "$129",
    description: "Start your adventure with an unforgettable snorkeling experience at Mnemba Island, where you’ll explore vibrant coral reefs teeming with tropical fish, colorful starfish, and, if you’re lucky, playful dolphins. After a morning of exploration, enjoy a refreshing break before moving on to swim with turtles in a safe and protected natural lagoon. End your day with a relaxing sunset cruise along the Zanzibar coast. ",
    itinerary: [
      {
        day: "Morning",
        title: "Ocean Adventure",
        activities: [
          "08:00 - Hotel pickup",
          "09:00 - Depart for turtle sanctuary",
          "10:00 - Swimming with turtles",
          "11:30 - Snorkeling at coral reef"
        ]
      },
      {
        day: "Afternoon",
        title: "Sunset & Return",
        activities: [
          "14:00 - Lunch break",
          "15:30 - Free time for swimming",
          "17:00 - Sunset dhow cruise",
          "18:30 - Return to hotel"
        ]
      }
    ]
  },
  {
    id: "mikumi-safari",
    title: "Bicycle/Quad Adventure, Village Tour and Culture Experience",
    image: "/src/assets/activity-detail-image/quad2.jpg",
    gallery: [
      "/src/assets/activity-detail-image/bicycle-adventure-1.jpg",
      "/src/assets/activity-detail-image/quad1.jpg",
      "/src/assets/activity-detail-image/quad2.jpg",
    ],
    days: 1,
    duration: "Full Day",
    includes: [
      "Bicycle/Quad drive",
      "Professional guide",
      "Picnic lunch (private trip)",
      "Hotel transfers",
      "water and Zanzibar FreshFruit",
      "Refreshments",
      "Government Tax"
    ],
    highlights: [
      "Experience the local culture and traditions",
      "Explore the private and quiet beaches",
      "Test the zanzibar fruits",
      "Bicycle/Quad Adventure",
      "Village Tour"
    ],
    price: "$199",
    description: "Explore the scenic countryside and traditional villages of Zanzibar on a guided bicycle adventure or quad bike tour. Ride through spice plantations, rural areas, find some private beaches, and meet local communities, and experience the island's authentic rural life. Choose between a bicycle for an eco-friendly exploration or a quad bike for a more thrilling adventure through the island's diverse landscapes.",
    itinerary: [
      {
        day: "Morning",
        title: "Village Experience",
        activities: [
          "08:00 - Hotel pickup",
          "09:00 - Bicycle/Quad briefing",
          "09:30 - Start village tour",
          "11:00 - Local fruit tasting"
        ]
      },
      {
        day: "Afternoon",
        title: "Beach & Culture",
        activities: [
          "12:30 - Traditional lunch",
          "14:00 - Beach exploration",
          "15:30 - Cultural performance",
          "17:00 - Return to hotel"
        ]
      }
    ]
  }
];