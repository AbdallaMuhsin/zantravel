import { getImageUrl } from "../utils/images";

export interface ActivityScheduleItem {
  time: string;
  activity: string;
}

export interface ActivitySchedule {
  days: string[];
  times: string[];
  activities: ActivityScheduleItem[];
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  includes?: string[];
  availableDays: string[];
  availableTimes: string[];
  schedule: ActivitySchedule;
}

export const activities: Activity[] = [
  {
    id: "nakupenda",
    title: "Nakupenda Sandbank",
    description: "Visit the stunning Nakupenda Sandbank, a pristine white sand strip emerging from crystal-clear turquoise waters. Perfect for swimming, snorkeling, and enjoying the sun in a unique natural setting.",
    image: '/src/assets/Activities-image/nakupenda sandbaank.jpg',
    duration: "Full Day",
    price: "$50",
    includes: [
      'Boat trip to sandbank',
      'Fresh fruits',
      'Snorkeling equipment',
      'Professional guide',
      'Lunch (seafood)',
      'Government tax'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['08:30', '09:30', '10:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['08:00', '08:30', '09:00', '09:30', '11:00', '12:30', '14:00', '15:30', '16:00'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '08:30', activity: 'Boat departure to Nakupenda' },
        { time: '09:00', activity: 'Arrive at Nakupenda Sandbank' },
        { time: '09:30', activity: 'Snorkeling session' },
        { time: '11:00', activity: 'Fresh fruits and refreshments' },
        { time: '12:30', activity: 'Seafood lunch' },
        { time: '14:00', activity: 'Free time for swimming and sunbathing' },
        { time: '15:30', activity: 'Return journey' },
        { time: '16:00', activity: 'Arrive back at hotel' }
      ]
    }
  },

  { 
    id: "snorkeling",
    title: "Snorkeling & Swimming with Dolphins",
    description: "Start your adventure with an unforgettable snorkeling experience at Mnemba Island, where you’ll explore vibrant coral reefs teeming with tropical fish, colorful starfish, and, if you’re lucky, playful dolphins. Swim through crystal-clear waters and discover the beauty of this underwater paradise, with a stop at a secluded sandbank for some relaxation.",
    image: '/src/assets/Activities-image/Snorkeling.jpg',
    duration: "Half Day",
    price: "$25",
    includes: [
      'Professional guide',
      'Boat trip',
      'Snorkeling equipment',
      'Life jackets',
      'Fresh fruits',
      'Drinking water'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['06:30', '07:30', '15:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['06:00', '06:30', '07:00', '07:30', '09:00', '10:30', '11:30', '12:00'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '08:30', activity: 'Boat departure to dolphin area' },
        { time: '09:00', activity: 'Dolphin watching and swimming' },
        { time: '10:00', activity: 'Snorkeling at coral reef' },
        { time: '11:00', activity: 'Fresh fruits and refreshments on sandbank' },
        { time: '12:30', activity: 'Arrive to starfish location' },
        { time: '13:00', activity: 'Arrive back at hotel' }
      ]
    }
  },
  {
    id: "paje-beach",
    title: "Paje Beach",
    description: "A paradise for kitesurfers and beach lovers, featuring powdery white sand and shallow turquoise waters. Known for its water sports activities and laid-back atmosphere.",
    image: '/src/assets/Activities-image/paje beach.jpg',
    duration: "Half/Full day",
    price: "Free",
    includes: [
      'Beach access',
      'Water sports rentals',
      'Sunset viewing',
      'Evening entertainment',
      'Sunbed'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
      activities: [
        { time: '10:00', activity: 'Water sports rentals open' },
        { time: '11:30', activity: 'Beach Restaurants open' },
        { time: '17:00', activity: 'Sunset viewing' }
      ]
    }
  },
  {
    id: "jozani",
    title: "Jozani Forest",
    description: "Explore this natural reserve, home to the rare Red Colobus monkeys and other exotic wildlife amid lush mangroves.",
    image: '/src/assets/Activities-image/jozani forest.jpg',
    duration: "2-6 hours",
    price: "$35",
    includes: [
      'Professional guide',
      'Park entrance fees',
      'Government tax'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableTimes: ['08:30', '11:30', '14:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['10:00', '10:30', '11:30', '12:30', '13:30', '14:30'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '10:00', activity: 'Arrive to Jozani Forest' },
        { time: '10:30', activity: 'Red Colobus Monkey viewing' },
        { time: '11:30', activity: 'Mangrove boardwalk' },
        { time: '12:30', activity: 'Butterfly garden visit' },
        { time: '13:30', activity: 'Local community visit' },
        { time: '14:30', activity: 'Return transfer' }
      ]
    }
  },
  {
    id: "stone-town",
    title: "Stone Town Tour",
    description: "Wander through the historic UNESCO World Heritage site with its maze-like alleys, ancient buildings, and vibrant markets.",
    image: '/src/assets/Activities-image/Stone town tour.jpeg',
    duration: "4 hours",
    price: "$35",
    includes: [
      'Professional guide',
      'Entrance fees',
      'Government tax',
    ],
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
    availableTimes: ['09:00', '11:00', '14:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['09:00', '09:30', '10:30', '11:30', '12:30', '13:30', '14:30'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup (Those who staying away)' },
        { time: '09:00', activity: 'Arrive to Stone Town' },
        { time: '09:30', activity: 'Palace Museum visit' },
        { time: '10:00', activity: 'Spice market tour' },
        { time: '10:30', activity: 'Historical sites visit' },
        { time: '11:30', activity: 'Local lunch' },
        { time: '12:30', activity: 'Shopping time' },
        { time: '13:00', activity: 'Return to hotel' }
      ]
    }
  },
  {
    id: "nungwi-village",
    title: "Nungwi Village Experience",
    description: "Visit the vibrant fishing village of Nungwi, known for its boat building, pristine beaches, and sunset views. Experience local crafts and traditional dhow making.",
    image: '/src/assets/Activities-image/nungwi village.jpg',
    duration: "4 hours",
    price: "$25",
    includes: [
      'Professional guide',
      'Transportation',
      'Cultural activities'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['09:30', '14:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['09:00', '09:30', '10:00', '11:00', '12:00', '13:30', '14:30'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '09:00', activity: 'Welcoming' },
        { time: '09:30', activity: 'Local dressing' },
        { time: '10:00', activity: 'Traditional crafts demonstration' },
        { time: '11:00', activity: 'Local cousin preparation' },
        { time: '12:00', activity: 'Village tour' },
        { time: '12:30', activity: 'Traditional lunch' },
        { time: '13:00', activity: 'Return to Hotel' }
      ]
    }
  },
  {
    id: "nungwi-beach",
    title: "Nungwi Beach",
    description: "Experience one of Zanzibar's most beautiful beaches with pristine white sand and crystal-clear turquoise waters. Perfect for swimming, sunbathing, water sports, and watching stunning sunsets.",
    image: '/src/assets/Activities-image/nungwi beach.jpg',
    duration: "Half/Full day",
    price: "Free",
    includes: [
      'Beach access',
      'Water sports rentals',
      'Sunset viewing',
      'Evening entertainment',
      'Sunbed'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
      activities: [
        { time: '10:00', activity: 'Water sports rentals open' },
        { time: '11:30', activity: 'Beach Restaurants open' },
        { time: '17:00', activity: 'Sunset viewing' }
      ]
    }
  },
  {
    id: "kendwa-beach",
    title: "Kendwa Beach",
    description: "Famous for its smooth white sand and minimal tidal variation, Kendwa offers excellent swimming conditions throughout the day and spectacular sunset views.",
    image: '/src/assets/Activities-image/kendwa-beach.jpg',
    duration: "Half/Full day",
    price: "Free",
    includes: [
      'Beach access',
      'Water sports rentals',
      'Sunset viewing',
      'Evening entertainment',
      'Sunbed'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['07:00', '08:30', '10:00', '11:30', '14:00', '15:30', '17:00'],
      activities: [
        { time: '10:00', activity: 'Water sports rentals open' },
        { time: '11:30', activity: 'Beach Restaurants open' },
        { time: '17:00', activity: 'Sunset viewing' }
      ]
    }
  },
  {
    id: "the-rock-restaurant",
    title: "The Rock Restaurant",
    description: "Dine at this iconic restaurant perched on a rock in the Indian Ocean. Enjoy fresh seafood and breathtaking views in this unique setting that's accessible by foot during low tide or by boat during high tide.",
    image: '/src/assets/Activities-image/the rock restaurant.jpg',
    duration: "2-3 hours",
    price: "Free",
    includes: [
      'Ocean view seating',
      'Reservation required',
      'Boat transfer (high tide)'
    ],
    availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['12:30', '13:30', '19:00', '20:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '12:00', activity: 'Restaurant opens' },
      { time: '21:00', activity: 'Restaurant closes' }
      ]
    }
  },
  {
    id: "forodhani-market",
    title: "Forodhani Night Market",
    description: "Experience Stone Town's famous waterfront food market, offering fresh seafood, Zanzibari pizza, and local delicacies. A must-visit destination for food lovers and cultural enthusiasts.",
    image: '/src/assets/Activities-image/forodhani night.jpg',
    duration: "2-3 hours",
    price: "Free",
    includes: [
      'Market access',
      'Cultural experience',
      'Food variety',
      'Evening entertainment'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['17:30', '18:30', '19:30', '20:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '17:00', activity: 'Market setup begins' },
      { time: '17:30', activity: 'Food stalls open' },
      { time: '18:30', activity: 'Live music starts' },
      { time: '19:30', activity: 'Peak dinner time' },
      { time: '20:30', activity: 'Market starts closing' },
      { time: '21:00', activity: 'Market closes' }
    ]
  },
  },
  {
    id: "spice-tour",
    title: "Spice Tour",
    description: "Discover why Zanzibar is known as the 'Spice Island' as you learn about and sample exotic spices such as cloves, cinnamon, cardamom, and tropical fruits.",
    image: '/src/assets/Activities-image/spice firm.jpg',
    duration: "3 hours",
    price: "$45",
    includes: [
      'Professional guide',
      'Firm entrance fees',
      'Testing, smell and touch',
      'Local spice cuisine Presentation',
      'Lunch'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    availableTimes: ['08:30', '11:30', '14:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '08:00', activity: 'Hotel pick up' },
      { time: '10:00', activity: 'Arrive to spice farm' },
      { time: '10:30', activity: 'Spice farm tour' },
      { time: '11:00', activity: 'Spice tasting and explanation' },
      { time: '12:00', activity: 'Lunch break' },
      { time: '12:30', activity: 'Visit to local market' },
      { time: '13:00', activity: 'Tour ends' },
      { time: '13:00', activity: 'Return to hotel' }
    ]
  },
  },
  {
    id: "mnarani-aquarium",
    title: "Swimming with Turtles",
    description: "Explore this conservation-focused aquarium that serves as a turtle sanctuary. Swim with sea turtles and learn about marine life conservation while observing sea turtles in their rehabilitation environment.",
    image: '/src/assets/Activities-image/mnarani aquarium.jpg',
    duration: "1-2 hours",
    price: "$10",
    includes: [
      'Professional guide',
      'Park entrance fees'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['10:00', '14:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['10:00', '14:00'],
      activities: [
        { time: '09:00 AM', activity: 'Aquarium opens' },
        { time: '06:30 PM', activity: 'Aquarium closes' }
      ]
    }
  },
  {
    id: "sunset-cruise",
    title: "Dhow Sunset Cruise",
    description: "Sail along Zanzibar's coast on a traditional dhow boat while enjoying refreshments and a spectacular sunset with local drums.",
    image: '/src/assets/Activities-image/sunset cruise.jpg',
    duration: "2 hours",
    price: "$15",
    includes: [
      'Fresh Fruits',
      'Entrance fees'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['16:30', '17:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '15:30', activity: 'Hotel pick up' },
      { time: '16:00', activity: 'Arrive to Nungwi beach' },
      { time: '16:30', activity: 'Board the dhow' },
      { time: '17:00', activity: 'Sail begins' },
      { time: '17:30', activity: 'Sunset viewing' },
      { time: '18:00', activity: 'Light refreshments served' },
      { time: '18:30', activity: 'Return to shore' }
    ]
  },
  },
  {
    id: "serengeti",
    title: "Serengeti National Park",
    description: "Experience the world-famous Great Migration and witness vast savannas teeming with wildlife in one of Africa's most iconic national parks.",
    image: '/src/assets/Activities-image/serengeti.jpg',
    duration: "2-5 days/4 night",
    price: "$500+",
    includes: [
      'Professional safari guide',
      'Park entrance fees',
      'Game drives',
      'Lunch',
      'Transportation'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['05:00', '06:00', '07:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '08:00 First day', activity: 'Hotel pickup' },
      { time: '10:30', activity: 'Arrive at Zanzibar Airport' },
      { time: '15:00', activity: 'Arrive at Serengeti National park'},
      { time: '16:00', activity: 'Coffee break, welcoming and rest' },
      { time: '07:00 second day - forth day', activity: '' },
      { time: '07:00', activity: 'Breakfast' },
      { time: '08:00', activity: 'Morning game drive begins' },
      { time: '12:00', activity: 'Lunch at designated picnic are and break'},

      { time: '14:00', activity: 'Afternoon game drive' },
      { time: '17:00', activity: 'Back to hotel/Tent' },

      { time: '08:30 Fifth day', activity: 'Exit park' },
      { time: '10:00', activity: 'Fly back to zanzibar'},
      { time: '14:00', activity: 'Return to hotel' }
    ]
  },
  },
  {
    id: "kilimanjaro",
    title: "Mount Kilimanjaro",
    description: "Climb Africa's highest peak and the world's tallest free-standing mountain, experiencing diverse ecosystems and breathtaking views. A perfect adventure for nature enthusiasts and experienced climbers.",
    image: '/src/assets/Activities-image/kilimanjaro.PNG',
    duration: "5-9 days",
    price: "$2500+",
    includes: [
      'Professional Trekking guide',
      'Ticket and Permit',
      'Meal',
      'Transportation',
      'Accommodation'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['05:00', '06:00', '07:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: 'First day', activity: 'Fly from Zanzibar to Kilimanjaro International Airport (JRO) (~1h flight)' },
      { time: '', activity: 'Drive to Moshi/Arusha'},
      { time: '', activity: 'Stay: Overnight at a hotel'},
      { time: '', activity: 'Gear check: Meet your guide, rent missing equipment'},

      { time: 'Second day', activity: 'Drive: 1.5 hours to Machame Gate or any other preferred gate (1,800m).' },
      { time: '', activity: 'Trek: 6-7 hours through rainforest (~11km)' },
      { time: '', activity: 'Overnight: Machame Camp (3,000m)'},

      { time: 'Third day', activity: 'Machame → Shira Camp (3,840m)' },
      { time: '', activity: 'Trek: 4-6 hours through moorland (~5km)' },
      { time: '', activity: 'Overnight: Shira Camp (3,840m).' },

      { time: 'Fourth day', activity: 'Shira → Lava Tower (4,630m) → Barranco Camp (3,960m)' },
      { time: '', activity: 'Trek: 6-7 hours (10km) with a steep climb to Lava Tower (great for acclimatization)' },
      { time: '', activity: 'Overnight: Barranco Camp (3,960m)' },

      { time: 'Fifth day', activity: 'Barranco → Karanga Camp (4,035m)' },
      { time: '', activity: 'Trek: 3-4 hours (~5km), scrambling the Barranco Wall' },
      { time: '', activity: 'Overnight: Karanga Camp (4,035m)' },

      { time: 'Sixth day', activity: 'Karanga → Barafu Camp (4,673m)' },
      { time: '', activity: 'Trek: 3-4 hours (~4km) to the base camp.' },

      { time: 'Seventh day', activity: 'Summit Day (Uhuru Peak – 5,895m) → Mweka Camp' },
      { time: '', activity: 'Start ascent (5-7 hours to Stella Point)' },
      { time: '', activity: 'Sunrise at Uhuru Peak (highest point in Africa!).' },
      { time: '', activity: 'Descend: To Barafu (2-3 hours), then Mweka Camp (3-4 hours)' },

      { time: 'Eighth day', activity: 'Mweka Camp → Mweka Gate → Zanzibar' },
      { time: '', activity: 'Trek: 3-4 hours descent to Mweka Gate (~10km)' },
      { time: '', activity: 'Transfer: Back to Moshi → JRO Airport' },
      { time: '', activity: 'Fly to Zanzibar' },
    ]
  },
  },
  {
    id: "ngorongoro",
    title: "Ngorongoro Conservation Area",
    description: "Explore the world's largest intact volcanic caldera, home to a dense population of African wildlife and stunning landscapes.",
    image: '/src/assets/Activities-image/ngorongoro.jpg',
    duration: "2-5 days",
    price: "$500+",
    includes: [
      'Professional safari guide',
      'Park entrance fees',
      'Game drives',
      'Accommodation',
      'Meal',
      'Transportation in 4x4 vehicle'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['05:00', '06:00', '07:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '08:00 First day', activity: 'Hotel pickup' },
      { time: '10:30', activity: 'Arrive at Zanzibar Airport' },
      { time: '15:00', activity: 'Arrive at Serengeti National park'},
      { time: '16:00', activity: 'Coffee break, welcoming and rest' },
      { time: '07:00 second day - forth day', activity: '' },
      { time: '07:00', activity: 'Breakfast' },
      { time: '08:00', activity: 'Morning game drive begins' },
      { time: '12:00', activity: 'Lunch at designated picnic are and break'},

      { time: '14:00', activity: 'Afternoon game drive' },
      { time: '17:00', activity: 'Back to hotel/Tent' },

      { time: '08:30 Fifth day', activity: 'Exit park' },
      { time: '10:00', activity: 'Fly back to zanzibar'},
      { time: '14:00', activity: 'Return to hotel' }
    ]
  },
  },
  {
    id: "mikumi",
    title: "Mikumi National Park",
    description: "Discover Tanzania's fourth-largest national park, known for its accessible wildlife viewing. Perfect for families and nature enthusiasts with different species of birds, mammals, and reptiles.",
    image: '/src/assets/Activities-image/mikumi national park.jpg',
    duration: "1-2+ days",
    price: "$400",
    includes: [
      'Professional safari guide',
      'Park entrance fees',
      'Game drives',
      'Accommodation',
      'Meal',
      'Transportation in 4x4 vehicle'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['05:00', '06:00', '07:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '08:00 First day', activity: 'Hotel pickup' },
      { time: '10:30', activity: 'Arrive at Zanzibar Airport' },
      { time: '15:00', activity: 'Arrive at Serengeti National park'},
      { time: '16:00', activity: 'Coffee break, welcoming and rest' },
      { time: '07:00 second day - forth day', activity: '' },
      { time: '07:00', activity: 'Breakfast' },
      { time: '08:00', activity: 'Morning game drive begins' },
      { time: '12:00', activity: 'Lunch at designated picnic are and break'},

      { time: '14:00', activity: 'Afternoon game drive' },
      { time: '17:00', activity: 'Back to hotel/Tent' },

      { time: '08:30 Fifth day', activity: 'Exit park' },
      { time: '10:00', activity: 'Fly back to zanzibar'},
      { time: '14:00', activity: 'Return to hotel' }
    ]
  },
  },
  {
    id: "fishing",
    title: "Game Fishing",
    description: "Try your hand at catching marlin, sailfish, tuna, and other big game fish in the deep waters in Nungwi village as known as the fishing village in Zanzibar.",
    image: '/src/assets/Activities-image/fishing.jpg',
    duration: "4-6 hours",
    price: "$120",
    includes: [
      'Professional fishing guide',
      'Fishing equipment',
      'Bait',
      'Refreshments',
      'Boat trip'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['05:00', '06:00', '07:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '08:00', activity: 'Hotel pickup' },
      { time: '09:00', activity: 'Arrive at Nungwi beach' },
      { time: '09:30', activity: 'Boat drive to deep sea' },
      { time: '10:00', activity: 'Fishing activity begins' },
      { time: '11:00', activity: 'Lunch at designated picnic area' },
      { time: '11:30', activity: 'Fishing activity ends' },
      { time: '12:00', activity: 'Return to hotel' }
    ]
  },
  },
 
  {
    id: "safari-blue",
    title: "Safari Blue",
    description: "Safari Blue is often a full-day excursion, primarily focused on the warm waters around the Menai Bay Conservation Area, a protected region on the southwest coast of Zanzibar near Fumba. The tour usually includes activities such as snorkeling, swimming, Sightings of dolphins, sandbank and dhow sailing on traditional wooden boats.",
    image: '/src/assets/Activities-image/safari blue.jpg',
    duration: "Full day",
    price: "$80",
    includes: [
      'Professional guide',
      'Entrance fees',
      'Snorkel gear',
      'Fresh tropical fruits',
      'Government tax',
      'Lunch',
      'Life jacket',
      'Towel'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['09:00', '11:00', '14:00'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['09:00', '11:00', '14:00'],
      activities: [
        { time: '08:00', activity: 'Hotel pick up' },
        { time: '09:00', activity: 'Arrive to Fumba village' },
        { time: '10:30', activity: 'Snorkeling at Coral Reefs' },
        { time: '11:30', activity: 'Sandbank Relaxation' },
        { time: '12:30', activity: 'Seafood BBQ Lunch on Kwale Island' },
        { time: '13:30', activity: 'Second Snorkeling Spot or Mangrove Lagoon' },
        { time: '14:00', activity: 'Sailing & Dolphin Spotting (If Lucky!)' },
        { time: '15:00', activity: 'Return to Fumba & Transfer Back' },
        { time: '16:00', activity: 'Hotel drop off' }
      ]
    }
  },
  
  {
    id: "fukuchani-village",
    title: "Fukuchani Cultural Tour",
    description: "Explore the historic Fukuchani village, with its ancient ruins, traditional Swahili architecture, and authentic local lifestyle. Meet friendly villagers and learn about their daily activities.",
    image: '/src/assets/Activities-image/fukuchani-village.jpg',
    duration: "3 hours",
    price: "$50",
    includes: [
      'Professional guide',
      'Transportation',
      'Cultural activities practice'
    ],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['09:30', '14:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['09:00', '09:30', '10:00', '11:00', '12:00', '13:30', '14:30'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '09:00', activity: 'Welcoming' },
        { time: '09:30', activity: 'Local dressing' },
        { time: '10:00', activity: 'Traditional crafts demonstration' },
        { time: '11:00', activity: 'Local cousin preparation' },
        { time: '12:00', activity: 'Village tour' },
        { time: '12:30', activity: 'Traditional lunch' },
        { time: '13:00', activity: 'Return to Hotel' }
      ]
    }
  },
  {
    id: "jet-ski",
    title: "Jet Ski Adventure",
    description: "Experience the thrill of riding the waves on a powerful jet ski along Zanzibar's pristine coastline. Perfect for both beginners and experienced riders.",
    image: '/src/assets/Activities-image/jetski.jpg',
    duration: "30 mins - 2 hours",
    price: "$50",
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    includes: [
      'Jet ski rental',
      'Safety equipment',
      'Basic training',
      'Instructor guidance',
      'Life jacket'
    ],
    schedule: {
      days: ['Tuesday', 'Thursday', 'Saturday', 'Sunday'],
      times: ['07:30', '15:30', '16:30'],
      activities: [
        { time: '09:00', activity: 'jet ski lessons begin' },
        { time: '10:00', activity: 'jet ski practice' },
        { time: '11:00', activity: 'jet ski practice end' }
      ]
    }
  },
  {
    id: "kite-surfing",
    title: "Kite Surfing",
    description: "Learn or practice kite surfing in Paje Beach's perfect conditions. Expert instructors available for beginners, and equipment rental for experienced surfers.",
    image: '/src/assets/Activities-image/kite surfing.jpg',
    duration: "2-3 hours",
    price: "$80",
    includes: [
      'Kite rental',
      'Safety equipment',
      'Basic training',
      'Instructor guidance',
      'Life jacket'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['10:30', '13:30', '15:30'],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      times: ['10:30', '13:30', '15:30'],
      activities: [
        { time: '10:30', activity: 'Kite surfing lessons begin' },
        { time: '12:00', activity: 'Kite surfing practice' },
        { time: '13:30', activity: 'Kite surfing lessons resume' },
        { time: '15:30', activity: 'Kite surfing practice' }
      ]
    }
  },
  {
    id: "parasailing",
    title: "Parasailing Experience",
    description: "Soar high above the turquoise waters of Zanzibar, enjoying breathtaking aerial views of the coastline and coral reefs in this exciting adventure.",
    image: '/src/assets/Activities-image/parasailing.jpg',
    duration: "4+ hours",
    price: "$70+",
    includes: [
      'Safety equipment',
      'Basic training',
      'Instructor guidance',
      'Life jacket'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['09:30', '13:30', '15:30'],
    schedule: {
      days: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '09:00', activity: 'Check-in at parasailing center' },
      { time: '09:30', activity: 'Safety briefing' },
      { time: '10:00', activity: 'Equipment fitting' },
      { time: '10:30', activity: 'Boat departure' },
      { time: '11:00', activity: 'Parasailing flight' },
      { time: '12:00', activity: 'Return to shore' },
      { time: '12:30', activity: 'Photo session' },
      { time: '13:00', activity: 'Session ends' }
      ]
    }
  },
  {
    id: "horse-riding",
    title: "Beach Horse Riding",
    description: "Enjoy a magical horseback ride along Zanzibar's pristine beaches during sunset or sunrise. Perfect for both beginners and experienced riders.",
    image: '/src/assets/Activities-image/horse.jpg',
    duration: "1 hours",
    price: "$60",
    includes: [
      'Horse rental',
      'Professional guide',
      'Basic training',
      'Safety equipment',
      'Beach route access'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['07:30', '15:30', '16:30'],
    schedule: {
      days: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
      times: ['12:00', '12:30', '13:00', '13:30', '14:30', '19:00', '20:00', '21:30'],
      activities: [
      { time: '07:00', activity: 'Meet at stables' },
      { time: '07:30', activity: 'Horse selection and safety briefing' },
      { time: '08:00', activity: 'Basic riding instruction' },
      { time: '08:30', activity: 'Beach ride begins' },
      { time: '09:30', activity: 'Photo stop at scenic point' },
      { time: '10:00', activity: 'Return ride' },
      { time: '10:30', activity: 'Cool down and horse care' },
      { time: '11:00', activity: 'Session ends' }
    ]
  },
  },
  {
    id: "prison-island",
    title: "Prison Island Tour",
    description: "Visit the historic Prison Island (Changuu), home to giant Aldabra tortoises and a former quarantine station. Enjoy swimming, snorkeling, and fascinating history.",
    image: '/src/assets/Activities-image/prison island.jpg',
    duration: "Half day",
    price: "$55",
    includes: [
      'Boat transfer',
      'Island entrance fee',
      'Tortoise sanctuary visit',
      'Snorkeling equipment',
      'Professional guide',
      'Drinking water'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['08:30', '13:30'],
    schedule: {
      days: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
      times: ['08:30', '09:00', '09:30', '10:30', '11:30', '12:30', '13:30'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '08:30', activity: 'Boat departure' },
        { time: '09:00', activity: 'Arrive at Prison Island' },
        { time: '09:30', activity: 'Historical prison tour' },
        { time: '10:30', activity: 'Giant tortoise sanctuary visit' },
        { time: '11:30', activity: 'Snorkeling session' },
        { time: '12:30', activity: 'Return journey' },
        { time: '13:00', activity: 'Arrive back at dock' }
      ]
    }
  },
  {
    id: "tumbatu-island",
    title: "Tumbatu Island Experience",
    description: "Discover the pristine underwater world around Tumbatu Island with an exciting snorkeling adventure. Explore vibrant coral reefs, swim among tropical fish, and experience the crystal-clear waters of this secluded location.",
    image: getImageUrl('/src/assets/Activities-image/tumbatu island.jpg'),
    duration: "Half day",
    price: "$20+",
    includes: [
      'Fresh fruits',
      'Snorkeling equipment',
      'Government tax'
    ],
    availableDays: ['Tuesday', 'Friday'],
    availableTimes: ['10:30', '15:30'],
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['06:00', '06:30', '07:00', '07:30', '09:00', '10:30', '11:30', '12:00'],
      activities: [
        { time: '08:00', activity: 'Hotel pickup' },
        { time: '08:30', activity: 'Boat departure to Tumbatu Island' },
        { time: '09:00', activity: 'Snorkeling at coral reef' },
        { time: '10:30', activity: 'Fresh fruits and refreshments' },
        { time: '11:30', activity: 'Arrive to starfish location' },
        { time: '12:30', activity: 'Arrive back at hotel' }
      ]
    }
  },
  {
    id: "bicycle-adventure",
    title: "Bicycle Adventure",
    description: "Explore the scenic countryside and traditional villages of Zanzibar on a guided bicycle adventure. Ride through spice plantations, meet local communities, and experience the island's authentic rural life.",
    image: getImageUrl('/src/assets/Activities-image/bicycle-adventure.jpg'),
    duration: "Half Day",
    price: "$30+",
    includes: [
      'Professional cycling guide',
      'Mountain bike rental',
      'Safety equipment',
      'Drinking water',
      'Fresh tropical fruits',
      'Local village visit'
    ],
    availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    availableTimes: ['07:30', '09:30', '15:30'],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      times: ['07:30', '08:00', '09:30', '10:30', '11:30', '12:30', '13:00'],
      activities: [
        { time: '07:30', activity: 'Meet at bike center' },
        { time: '08:00', activity: 'Safety briefing and bike fitting' },
        { time: '09:30', activity: 'Start ride alongside the village' },
        { time: '10:30', activity: 'Village visit' },
        { time: '11:30', activity: 'Village community interaction' },
        { time: '12:30', activity: 'Fresh fruit break' },
        { time: '13:00', activity: 'Return to bike center' }
      ]
    }
  },
  {
    id: "zanzibar-skydive",
    title: "Zanzibar Sky Dive",
    description: "Experience the ultimate adrenaline rush with a tandem skydive over the stunning Zanzibar archipelago. Enjoy breathtaking views of the turquoise waters, white sandy beaches, and coral reefs from 12,000 feet above.",
    image: '/src/assets/Activities-image/skydive.jpg',
    duration: "3-4 hours",
    price: "$500",
    includes: [
      'Professional tandem instructor',
      'All necessary equipment',
      'Safety briefing',
      'Ground training',
      'Certificate of completion',
      'HD video and photos'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['08:00', '10:00', '14:00'],
    schedule: {
      days: ['Tuesday', 'Thursday', 'Sunday'],
      times: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'],
      activities: [
        { time: '08:00', activity: 'Check-in and registration' },
        { time: '08:30', activity: 'Safety briefing and training' },
        { time: '09:00', activity: 'Equipment fitting' },
        { time: '09:30', activity: 'Board aircraft' },
        { time: '10:00', activity: 'Take off and climb to altitude' },
        { time: '10:30', activity: 'Skydive jump' },
        { time: '11:00', activity: 'Certificate ceremony' }
      ]
    }
  },
  {
    id: "scuba-diving",
    title: "Scuba Diving",
    description: "Discover the underwater wonders of Zanzibar with a guided scuba diving experience. Explore vibrant coral reefs, encounter exotic marine life, and dive into crystal-clear waters perfect for both beginners and experienced divers.",
    image: '/src/assets/Activities-image/scuba-diving.jpg',
    duration: "Full Day",
    price: "$50+",
    includes: [
      'PADI certified instructor',
      'Complete diving equipment',
      'Boat transfers',
      'Lunch and refreshments',
      'Safety briefing',
      'Two tank dives'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['07:00', '09:00', '14:00'],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
      times: ['07:00', '07:30', '08:00', '09:30', '11:00', '12:30', '14:00', '15:30'],
      activities: [
        { time: '07:00', activity: 'Check-in at dive center' },
        { time: '07:30', activity: 'Equipment fitting and briefing' },
        { time: '08:00', activity: 'Boat departure' },
        { time: '09:30', activity: 'First dive' },
        { time: '11:00', activity: 'Surface interval with refreshments' },
        { time: '12:30', activity: 'Second dive' },
        { time: '14:00', activity: 'Lunch' },
        { time: '15:30', activity: 'Return to dive center' }
      ]
    }
  },
  {
    id: "zanzibar-sea-walk",
    title: "Zanzibar Sea Walk",
    description: "Experience the magical underwater world of Zanzibar without swimming or diving skills. Walk on the ocean floor with a special helmet while surrounded by colorful fish, coral reefs, and marine life. Perfect for non-swimmers and adventure seekers alike.",
    image: '/src/assets/Activities-image/sea-walk.jpg',
    duration: "2-3 hours",
    price: "$60",
    includes: [
      'Professional guide',
      'Sea walking equipment',
      'Safety briefing',
      'Underwater photos',
      'Fresh fruits',
      'Boat transfer',
      'Life jacket'
    ],
    availableDays: ['Saturday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday'],
    availableTimes: ['09:00', '11:00', '14:00'],
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
      times: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'],
      activities: [
        { time: '09:00', activity: 'Check-in and registration' },
        { time: '09:30', activity: 'Safety briefing and equipment explanation' },
        { time: '10:00', activity: 'Boat ride to sea walk location' },
        { time: '10:30', activity: 'Begin sea walk experience' },
        { time: '11:00', activity: 'Underwater photo session' },
        { time: '11:30', activity: 'Return boat ride' },
        { time: '12:00', activity: 'Fresh fruits and activity completion' }
      ]
    }
  }
];