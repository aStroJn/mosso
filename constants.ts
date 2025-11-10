

import { Product, ProductStyle } from './types';

export const PRODUCT_STYLES: ProductStyle[] = ['Modern', 'Classic', 'Minimalist', 'Avant-Garde', 'Natural', 'Industrial'];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Aura Series",
    description: "Where fluidity meets form.",
    imageUrl: "https://picsum.photos/seed/product1main/800/1000",
    altText: "A modern chrome faucet with a sleek, minimalist design against a dark tiled wall.",
    style: "Modern",
    price: 185.00,
    specifications: [
      { label: "Material", value: "Polished Chrome" },
      { label: "Dimensions", value: "10\" H x 2\" W" },
      { label: "Flow Rate", value: "1.2 GPM" },
      { label: "Installation", value: "Single-hole" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product1gallery1/800/1000",
      "https://picsum.photos/seed/product1gallery2/800/1000",
      "https://picsum.photos/seed/product1gallery3/800/1000",
      "https://picsum.photos/seed/product1gallery4/800/1000",
      "https://picsum.photos/seed/product1gallery5/800/1000",
    ],
  },
  {
    id: 2,
    name: "Metropolis Line",
    description: "Urban elegance redefined.",
    imageUrl: "https://picsum.photos/seed/product2main/800/1000",
    altText: "An elegant, gold-finished faucet in a luxurious marble bathroom setting.",
    style: "Classic",
    price: 240.00,
    specifications: [
      { label: "Material", value: "Brushed Gold" },
      { label: "Dimensions", value: "11\" H x 6\" W" },
      { label: "Flow Rate", value: "1.5 GPM" },
      { label: "Installation", value: "Three-hole" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product2gallery1/800/1000",
      "https://picsum.photos/seed/product2gallery2/800/1000",
    ],
  },
  {
    id: 3,
    name: "Zenith Collection",
    description: "The essence of simplicity.",
    imageUrl: "https://picsum.photos/seed/product3main/800/1000",
    altText: "A matte black faucet with clean lines, representing simplicity and zen-like design.",
    style: "Minimalist",
    price: 195.00,
    specifications: [
      { label: "Material", value: "Matte Black Finish" },
      { label: "Dimensions", value: "9.5\" H x 2.5\" W" },
      { label: "Flow Rate", value: "1.0 GPM" },
      { label: "Installation", value: "Single-hole" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product3gallery1/800/1000",
      "https://picsum.photos/seed/product3gallery2/800/1000",
    ],
  },
  {
    id: 4,
    name: "Terra Collection",
    description: "Inspired by natural earth tones.",
    imageUrl: "https://picsum.photos/seed/product4main/800/1000",
    altText: "A brushed bronze faucet set against earthy, natural stone tiles.",
    style: "Natural",
    price: 210.00,
    specifications: [
      { label: "Material", value: "Brushed Bronze" },
      { label: "Dimensions", value: "10.5\" H x 3\" W" },
      { label: "Flow Rate", value: "1.2 GPM" },
      { label: "Installation", value: "Single-hole" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product4gallery1/800/1000",
      "https://picsum.photos/seed/product4gallery2/800/1000",
    ],
  },
  {
    id: 5,
    name: "Aqua Line",
    description: "Purity in every drop.",
    imageUrl: "https://picsum.photos/seed/product5main/800/1000",
    altText: "A transparent acrylic and chrome faucet, evoking the clarity of pure water.",
    style: "Avant-Garde",
    price: 280.00,
    specifications: [
      { label: "Material", value: "Acrylic & Chrome" },
      { label: "Dimensions", value: "12\" H x 4\" W" },
      { label: "Flow Rate", value: "1.8 GPM" },
      { label: "Installation", value: "Deck-mounted" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product5gallery1/800/1000",
      "https://picsum.photos/seed/product5gallery2/800/1000",
    ],
  },
  {
    id: 6,
    name: "Etherea Series",
    description: "Lightweight and timeless design.",
    imageUrl: "https://picsum.photos/seed/product6main/800/1000",
    altText: "A faucet with a very thin, almost floating spout design in a bright, airy bathroom.",
    style: "Minimalist",
    price: 220.00,
    specifications: [
      { label: "Material", value: "Brushed Nickel" },
      { label: "Dimensions", value: "11.5\" H x 2\" W" },
      { label: "Flow Rate", value: "1.2 GPM" },
      { label: "Installation", value: "Wall-mounted" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product6gallery1/800/1000",
      "https://picsum.photos/seed/product6gallery2/800/1000",
    ],
  },
  {
    id: 7,
    name: "Heritage Range",
    description: "Timeless elegance, crafted for today.",
    imageUrl: "https://picsum.photos/seed/product7main/800/1000",
    altText: "A classically designed faucet with cross handles in polished nickel.",
    style: "Classic",
    price: 260.00,
    specifications: [
      { label: "Material", value: "Polished Nickel" },
      { label: "Dimensions", value: "9\" H x 7\" W" },
      { label: "Flow Rate", value: "1.5 GPM" },
      { label: "Installation", value: "Widespread" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product7gallery1/800/1000",
      "https://picsum.photos/seed/product7gallery2/800/1000",
    ],
  },
  {
    id: 8,
    name: "Forge Collection",
    description: "Bold, industrial, and unapologetic.",
    imageUrl: "https://picsum.photos/seed/product8main/800/1000",
    altText: "An industrial-style faucet with exposed pipework and a raw metal finish.",
    style: "Industrial",
    price: 200.00,
    specifications: [
      { label: "Material", value: "Raw Metal Finish" },
      { label: "Dimensions", value: "13\" H x 5\" W" },
      { label: "Flow Rate", value: "1.8 GPM" },
      { label: "Installation", value: "Deck-mounted" },
    ],
    galleryImages: [
      "https://picsum.photos/seed/product8gallery1/800/1000",
      "https://picsum.photos/seed/product8gallery2/800/1000",
    ],
  }
];