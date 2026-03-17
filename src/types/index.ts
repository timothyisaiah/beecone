export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: ProductCategory;
  size: string;
  weight: string;
  benefits: string[];
  ingredients: string[];
  nutritionalInfo: NutritionalInfo;
  reviews: Review[];
  inStock: boolean;
  featured: boolean;
  tags: string[];
}

export type ProductCategory = "raw" | "infused" | "creamed" | "honeycomb" | "gift-set";

export interface NutritionalInfo {
  servingSize: string;
  calories: number;
  totalCarbs: string;
  sugars: string;
  protein: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export type BlogCategory = "benefits" | "recipes" | "sustainability" | "news";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customer: CustomerInfo;
  paymentMethod: "mobile-money" | "card";
  status: "pending" | "confirmed" | "shipped" | "delivered";
  createdAt: string;
}
