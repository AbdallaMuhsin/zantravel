export interface Review {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "London, UK",
    rating: 5,
    date: "March 2025",
    text: "Our Zanzibar beach escape was absolutely perfect! The beaches were pristine, the people were friendly, and our guide was extremely knowledgeable. Swimming with dolphins was a highlight I'll never forget!"
  },
  {
    id: "2",
    name: "Mark Wilson",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Sydney, Australia",
    rating: 5,
    date: "February 2025",
    text: "The Serengeti safari exceeded all our expectations! We saw all of the Big Five within the first two days, and the accommodations were luxurious yet authentic. Our guide David was exceptional at tracking wildlife."
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Toronto, Canada",
    rating: 4,
    date: "January 2025",
    text: "The spice tour and Stone Town visit gave us a fascinating glimpse into Zanzibar's rich cultural history. I'd highly recommend the sunset cruise too - absolutely breathtaking views and great service."
  },
  {
    id: "4",
    name: "David Chen",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "San Francisco, USA",
    rating: 5,
    date: "December 2024",
    text: "The Complete Tanzania Experience was worth every penny. From the incredible wildlife sightings in the national parks to the relaxing days on Zanzibar's beaches, this trip had everything we wanted and more."
  },
  {
    id: "5",
    name: "Alice Bennett",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    location: "Berlin, Germany",
    rating: 5,
    date: "November 2024",
    text: "The Safari Blue excursion was the highlight of our trip! Snorkeling in crystal clear waters, visiting a beautiful lagoon, and the seafood lunch was absolutely delicious. Highly recommend this company!"
  },
];