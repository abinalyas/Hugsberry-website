export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  originalPrice?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}