export type Page = 'home' | 'collections' | 'collection-detail' | 'error404' | 'product-overview' | 'wishlist' | 'faq' | 'cart';

export type ProductStyle = 'Modern' | 'Classic' | 'Minimalist' | 'Avant-Garde' | 'Industrial' | 'Natural';

export interface ProductVariant {
  id: number;
  label: string;
  price: number;
  imageUrl: string;
  altText: string;
  galleryImages: string[];
  specifications: { label: string; value: string; }[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  altText: string;
  style: ProductStyle;
  price: number;
  specifications: { label: string; value: string; }[];
  galleryImages: string[]; // Added for multiple product images
  variants?: ProductVariant[]; // Optional array of product variants
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  tagline: string;
  heroImageUrl: string;
  style: ProductStyle;
  products: Product[];
}