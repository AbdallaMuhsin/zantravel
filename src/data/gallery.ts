export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'beach' | 'wildlife' | 'culture' | 'adventure';
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/src/assets/gallery-images/gallary (1).jpg",
    alt: "Pristine beach with turquoise water in Zanzibar",
    category: "beach"
  },
  {
    id: "2",
    src: "/src/assets/gallery-images/gallary (2).jpg",
    alt: "Elephants in the Serengeti",
    category: "wildlife"
  },
  {
    id: "3",
    src: "/src/assets/gallery-images/gallary (3).jpg",
    alt: "Historic architecture in Stone Town",
    category: "culture"
  },
  {
    id: "4",
    src: "/src/assets/gallery-images/gallary (4).jpg",
    alt: "Traditional dhow boat at sunset",
    category: "culture"
  },
  {
    id: "5",
    src: "/src/assets/gallery-images/gallary (5).jpg",
    alt: "Pride of lions resting in the shade",
    category: "wildlife"
  },
  {
    id: "6",
    src: "/src/assets/gallery-images/gallary (6).jpg",
    alt: "Fish market in Zanzibar",
    category: "culture"
  },
  {
    id: "7",
    src: "/src/assets/gallery-images/gallary (7).jpg",
    alt: "Zanzibar beach at sunset",
    category: "beach"
  },
  {
    id: "8",
    src: "/src/assets/gallery-images/gallary (8).jpg",
    alt: "Hot air balloon safari",
    category: "adventure"
  },
  {
    id: "9",
    src: "/src/assets/gallery-images/gallary (9).jpg",
    alt: "Masai warriors in traditional dress",
    category: "culture"
  },
  {
    id: "10",
    src: "/src/assets/gallery-images/gallary (10).jpg",
    alt: "Zebra herd on the savannah",
    category: "wildlife"
  },
  {
    id: "11",
    src: "/src/assets/gallery-images/gallary (1).jpg",
    alt: "Kitesurfing in Zanzibar",
    category: "adventure"
  },
  {
    id: "12",
    src: "/src/assets/gallery-images/gallary (2).jpg",
    alt: "Beach loungers on white sand",
    category: "beach"
  }

];