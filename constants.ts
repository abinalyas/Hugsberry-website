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
    name: "Midnight Sprount",
    price: 1499,
    category: "Set",
    image: getImagePath("images/products/black-suspenders-set.jpg"),
    isNew: true
  },
  {
    id: 2,
    name: "Red Valley",
    price: 1199,
    category: "Dress",
    image: getImagePath("images/products/red-dress.jpg"),
  },
  {
    id: 3,
    name: "Snowdrop Blue",
    price: 1599,
    category: "Dress",
    image: getImagePath("images/products/blue-snowflake-dress.jpg"),
    isNew: true
  },
  {
    id: 4,
    name: "Crimson Whimsy",
    price: 1299,
    category: "Dress",
    image: getImagePath("images/products/plaid-bow-dress.jpg"),
  },
  {
    id: 5,
    name: "Berry Button",
    price: 989,
    category: "Romper",
    image: getImagePath("images/products/red-suspenders-romper.jpg"),
  },
  {
    id: 6,
    name: "Little Ember",
    price: 1499,
    category: "Set",
    image: getImagePath("images/products/red-suspenders-set.jpg"),
    isNew: true
  },
  {
    id: 7,
    name: "Evergreen Tale",
    price: 1799,
    category: "Suit",
    image: getImagePath("images/products/green-check-suit.jpg"),
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