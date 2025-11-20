import { Product, Testimonial } from './types';

export const INSTAGRAM_URL = "https://www.instagram.com/hugs.berry?igsh=c2hpenh4bHNsNmE5&utm_source=qr";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Strawberry Fields Smocked Dress",
    price: 1899,
    category: "Heritage",
    // PASTE YOUR STRAWBERRY DRESS IMAGE LINK HERE:
    image: "https://images.unsplash.com/photo-1519238263496-6362d7e3a1a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    isNew: true
  },
  {
    id: 2,
    name: "Little Lion Organic Lounge Set",
    price: 1499,
    category: "Everyday",
    // PASTE YOUR LION SET IMAGE LINK HERE:
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  },
  {
    id: 3,
    name: "Nordic Pine Festive Set",
    price: 1299,
    category: "Winter Edit",
    // PASTE YOUR PINE TREE SET IMAGE LINK HERE:
    image: "https://images.unsplash.com/photo-1544640804-3709149258a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
    isNew: true
  },
  {
    id: 4,
    name: "Polar Pals Zip Suit",
    price: 999,
    category: "Sleepwear",
    // PASTE YOUR ZIP SUIT IMAGE LINK HERE:
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  },
  {
    id: 5,
    name: "Signature Hugsberry Vest",
    price: 799,
    category: "Essentials",
    // PASTE YOUR VEST IMAGE LINK HERE:
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  },
  {
    id: 6,
    name: "Organic Mulmul Jhabla",
    price: 699,
    category: "Essentials",
    image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  },
  {
    id: 7,
    name: "Earthy Bamboo Romper",
    price: 1199,
    category: "Everyday",
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
  },
  {
    id: 8,
    name: "Classic Knit Cardigan",
    price: 1599,
    category: "Winter Edit",
    image: "https://images.unsplash.com/photo-1615233500963-84c847390e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
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