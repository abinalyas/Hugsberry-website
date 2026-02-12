import { Product, Testimonial } from './types';

export const INSTAGRAM_URL = "https://www.instagram.com/hugs.berry?igsh=c2hpenh4bHNsNmE5&utm_source=qr";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Midnight Sprount",
    price: 1499,
    category: "Set",
    image: "/images/products/black-suspenders-set.jpg",
    isNew: true
  },
  {
    id: 2,
    name: "Red Valley",
    price: 1199,
    category: "Dress",
    image: "/images/products/red-dress.jpg",
  },
  {
    id: 3,
    name: "Snowdrop Blue",
    price: 1599,
    category: "Dress",
    image: "/images/products/blue-snowflake-dress.jpg",
    isNew: true
  },
  {
    id: 4,
    name: "Crimson Whimsy",
    price: 1299,
    category: "Dress",
    image: "/images/products/plaid-bow-dress.jpg",
  },
  {
    id: 5,
    name: "Berry Button",
    price: 989,
    category: "Romper",
    image: "/images/products/red-suspenders-romper.jpg",
  },
  {
    id: 6,
    name: "Little Ember",
    price: 1499,
    category: "Set",
    image: "/images/products/red-suspenders-set.jpg",
    isNew: true
  },
  {
    id: 7,
    name: "Evergreen Tale",
    price: 1799,
    category: "Suit",
    image: "/images/products/green-check-suit.jpg",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Anu Menon",
    role: "Mom in Kochi",
    content: "Finally, a brand that understands both tradition and comfort! The strawberry dress reminded me of my own childhood.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Radhika Iyer",
    role: "Mom in Mumbai",
    content: "I ordered the Lion set for my son. The organic cotton is so soft, he refuses to take it off! Highly recommend.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 3,
    name: "Neha Gupta",
    role: "New Mom, Delhi",
    content: "The plastic-free packaging was a lovely surprise. You can feel the quality of the fabric immediately.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  }
];