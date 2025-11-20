import { Product, Testimonial } from './types';

export const INSTAGRAM_URL = "https://www.instagram.com/hugs.berry?igsh=c2hpenh4bHNsNmE5&utm_source=qr";

// Helper to get image path with base URL
const getImagePath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  return `${baseWithSlash}${cleanPath}`;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Winter Glow Smocked Dress",
    price: 1899,
    category: "Heritage",
    image: getImagePath("images/IMG_3101.jpg"), 
    isNew: true
  },
  {
    id: 2,
    name: "Berry Bloom Knit Set",
    price: 1499,
    category: "Everyday",
    image: getImagePath("images/IMG_3103.jpg"), 
  },
  {
    id: 3,
    name: "Whispering Pines Holiday Set",
    price: 1299,
    category: "Winter Edit",
    image: getImagePath("images/IMG_3104.jpg"), 
    isNew: true
  },
  {
    id: 4,
    name: "Forest Friends Sleep Suit",
    price: 999,
    category: "Sleepwear",
    image: getImagePath("images/IMG_3102.jpg"), 
  },
  {
    id: 5,
    name: "Snuggle Nest Organic Vest",
    price: 799,
    category: "Essentials",
    image: getImagePath("images/IMG_3105.jpg"), 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Anu Menon",
    role: "Mom in Kochi",
    content: "Finally, a brand that understands both tradition and comfort! The strawberry dress reminded me of my own childhood.",
    avatar: getImagePath("images/Review/IMG_0199.JPG")
  },
  {
    id: 2,
    name: "Radhika Iyer",
    role: "Mom in Mumbai",
    content: "I ordered the Lion set for my son. The organic cotton is so soft, he refuses to take it off! Highly recommend.",
    avatar: getImagePath("images/Review/IMG_5560.jpg")
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "New Mom, Delhi",
    content: "The plastic-free packaging was a lovely surprise. You can feel the quality of the fabric immediately.",
    avatar: getImagePath("images/Review/IMG_6003.JPG")
  }
];