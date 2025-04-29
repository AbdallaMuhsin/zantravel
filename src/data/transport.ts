import { getImageUrl } from "../utils/images";

export interface TransportOption {
  id: string;
  title: string;
  description: string;
  image: string;
  pricePerDay: string;
  requirements: string[];
  additionalCosts?: string[];
}

export const transportOptions: TransportOption[] = [
  {
    id: "bicycle",
    title: "Bicycle Rental",
    description: "Explore Zanzibar at your own pace with our comfortable bicycles. Perfect for short trips and scenic rides along the beach.",
    image: getImageUrl('/src/assets/Transpot/bike.jpg'),
    pricePerDay: "$10",
    requirements: [
      "Valid ID",
      "Security deposit"
    ]
  },
  {
    id: "scooter",
    title: "Scooter Rental",
    description: "Navigate through Zanzibar's streets easily with our reliable scooters. Ideal for both short and long-distance travel.",
    image: getImageUrl('/src/assets/Transpot/scooter.jpg'),
    pricePerDay: "$25",
    requirements: [
      "Valid driving license",
      "Zanzibar driving permit",
      "Security deposit"
    ],
    additionalCosts: [
      "Zanzibar driving permit: $10"
    ]
  },
  {
    id: "car",
    title: "Car Rental",
    description: "Enjoy the freedom to explore all of Zanzibar with our comfortable cars. Perfect for families and longer journeys.",
    image: getImageUrl('/src/assets/Transpot/car.jpeg'),
    pricePerDay: "$40",
    requirements: [
      "Valid driving license",
      "Zanzibar driving permit",
      "Security deposit",
      "Minimum age: 21 years"
    ],
    additionalCosts: [
      "Zanzibar driving permit: $10"
    ]
  }
];
