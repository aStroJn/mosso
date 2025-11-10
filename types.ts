export type Page = 'home' | 'collections' | 'error404' | 'product-overview' | 'wishlist' | 'faq' | 'cart';

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
}