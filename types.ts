export type Page = 'home' | 'collections' | 'collection-detail' | 'error404' | 'product-overview' | 'wishlist' | 'faq' | 'cart';

export type ProductStyle = 'Modern' | 'Classic' | 'Minimalist' | 'Avant-Garde' | 'Industrial' | 'Natural';

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
  imagePositions?: Record<number, string>; // Maps index (0 for imageUrl, 1+ for galleryImages) to object-position or background-position
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