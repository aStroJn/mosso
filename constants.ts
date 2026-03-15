

import { Product, ProductStyle, Collection } from './types';

export const PRODUCT_STYLES: ProductStyle[] = ['Modern', 'Classic', 'Natural', 'Minimalist', 'Avant-Garde', 'Industrial'];

export const COLLECTIONS: Collection[] = [
  {
    id: 1,
    name: "Arya Series",
    description: "Where fluidity meets form. The Arya Series embodies the philosophy of water as an art form, with designs that flow seamlessly from aesthetic beauty to functional precision.",
    tagline: "Where fluidity meets form.",
    heroImageUrl: "products/arya/arya-piller-cock-three.webp",
    style: "Minimalist",
    products: [
      {
        id: 101,
        name: "Arya Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Arya chrome finish.",
        imageUrl: "https://picsum.photos/seed/arya101/800/1000",
        altText: "Arya Bib Cock - polished chrome utility faucet",
        style: "Minimalist",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya101g1/800/1000",
          "https://picsum.photos/seed/arya101g2/800/1000"
        ]
      },
      {
        id: 102,
        name: "Arya Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/arya102/800/1000",
        altText: "Arya Longbody Bib Cock - chrome faucet with extended body",
        style: "Minimalist",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya102g1/800/1000",
          "https://picsum.photos/seed/arya102g2/800/1000"
        ]
      },
      {
        id: 103,
        name: "Arya Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/arya103/800/1000",
        altText: "Arya Angle Cock - polished chrome angle valve",
        style: "Minimalist",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya103g1/800/1000",
          "https://picsum.photos/seed/arya103g2/800/1000"
        ]
      },
      {
        id: 104,
        name: "Arya Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "products/arya/arya-piller-cock-four.webp",
        altText: "Arya Pillar Cock - standard chrome basin faucet",
        style: "Minimalist",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "products/arya/arya-piller-cock-three.webp",
          "products/arya/arya-piller-cock-two.webp",
          "products/arya/arya-piller-cock-one.webp"
        ]
      },
      {
        id: 105,
        name: "Arya Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/arya105/800/1000",
        altText: "Arya Washing Cock - chrome washing machine valve with connector",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya105g1/800/1000",
          "https://picsum.photos/seed/arya105g2/800/1000"
        ]
      },
      {
        id: 106,
        name: "Arya Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/arya106/800/1000",
        altText: "Arya Nozzle Cock - swivel spout chrome faucet",
        style: "Minimalist",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya106g1/800/1000",
          "https://picsum.photos/seed/arya106g2/800/1000"
        ]
      },
      {
        id: 107,
        name: "Arya Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/arya107/800/1000",
        altText: "Arya Pillar Cock - chrome faucet without nickel base",
        style: "Minimalist",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya107g1/800/1000",
          "https://picsum.photos/seed/arya107g2/800/1000"
        ]
      },
      {
        id: 108,
        name: "Arya Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/arya108/800/1000",
        altText: "Arya Concealed 1/2 inch stop cock for plumbing",
        style: "Minimalist",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya108g1/800/1000",
          "https://picsum.photos/seed/arya108g2/800/1000"
        ]
      },
      {
        id: 109,
        name: "Arya Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/arya109/800/1000",
        altText: "Arya Concealed 3/4 inch stop cock for main water lines",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya109g1/800/1000",
          "https://picsum.photos/seed/arya109g2/800/1000"
        ]
      },
      {
        id: 110,
        name: "Arya Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/arya110/800/1000",
        altText: "Arya Sink Cock - high-arc chrome kitchen faucet",
        style: "Minimalist",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya110g1/800/1000",
          "https://picsum.photos/seed/arya110g2/800/1000"
        ]
      },
      {
        id: 111,
        name: "Arya Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/arya111/800/1000",
        altText: "Arya Swan Neck - elegant high-arc chrome basin faucet",
        style: "Minimalist",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya111g1/800/1000",
          "https://picsum.photos/seed/arya111g2/800/1000"
        ]
      },
      {
        id: 112,
        name: "Arya 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/arya112/800/1000",
        altText: "Arya 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Minimalist",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya112g1/800/1000",
          "https://picsum.photos/seed/arya112g2/800/1000"
        ]
      },
      {
        id: 113,
        name: "Arya 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/arya113/800/1000",
        altText: "Arya 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Minimalist",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya113g1/800/1000",
          "https://picsum.photos/seed/arya113g2/800/1000"
        ]
      },
      {
        id: 114,
        name: "Arya Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/arya114/800/1000",
        altText: "Arya Centre Hole - single-hole polished chrome basin mixer",
        style: "Minimalist",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya114g1/800/1000",
          "https://picsum.photos/seed/arya114g2/800/1000",
          "https://picsum.photos/seed/arya114g3/800/1000"
        ]
      },
      {
        id: 115,
        name: "Arya Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for Minimalist kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/arya115/800/1000",
        altText: "Arya Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Minimalist",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya115g1/800/1000",
          "https://picsum.photos/seed/arya115g2/800/1000"
        ]
      },
      {
        id: 116,
        name: "Arya Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/arya116/800/1000",
        altText: "Arya Wall Mixer without Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya116g1/800/1000",
          "https://picsum.photos/seed/arya116g2/800/1000"
        ]
      },
      {
        id: 117,
        name: "Arya Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/arya117/800/1000",
        altText: "Arya Wall Mixer with Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/arya117g1/800/1000",
          "https://picsum.photos/seed/arya117g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Flora Collection",
    description: "Inspired by the elegance of nature, the Flora Collection brings organic curves and timeless beauty to your home. Each piece is crafted to evoke the gentle flow of water, blending seamlessly with modern and traditional spaces alike.",
    tagline: "Where nature meets design.",
    heroImageUrl: "https://picsum.photos/seed/flora201/800/1000",
    style: "Natural",
    products: [
      {
        id: 201,
        name: "Flora Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Flora chrome finish.",
        imageUrl: "https://picsum.photos/seed/flora201/800/1000",
        altText: "Flora Bib Cock - polished chrome utility faucet",
        style: "Natural",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora201g1/800/1000",
          "https://picsum.photos/seed/flora201g2/800/1000"
        ]
      },
      {
        id: 202,
        name: "Flora Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/flora202/800/1000",
        altText: "Flora Longbody Bib Cock - chrome faucet with extended body",
        style: "Natural",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora202g1/800/1000",
          "https://picsum.photos/seed/flora202g2/800/1000"
        ]
      },
      {
        id: 203,
        name: "Flora Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/flora203/800/1000",
        altText: "Flora Angle Cock - polished chrome angle valve",
        style: "Natural",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora203g1/800/1000",
          "https://picsum.photos/seed/flora203g2/800/1000"
        ]
      },
      {
        id: 204,
        name: "Flora Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/flora204/800/1000",
        altText: "Flora Pillar Cock - standard chrome basin faucet",
        style: "Natural",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora204g1/800/1000",
          "https://picsum.photos/seed/flora204g2/800/1000"
        ]
      },
      {
        id: 205,
        name: "Flora Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/flora205/800/1000",
        altText: "Flora Washing Cock - chrome washing machine valve with connector",
        style: "Natural",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora205g1/800/1000",
          "https://picsum.photos/seed/flora205g2/800/1000"
        ]
      },
      {
        id: 206,
        name: "Flora Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/flora206/800/1000",
        altText: "Flora Nozzle Cock - swivel spout chrome faucet",
        style: "Natural",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora206g1/800/1000",
          "https://picsum.photos/seed/flora206g2/800/1000"
        ]
      },
      {
        id: 207,
        name: "Flora Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/flora207/800/1000",
        altText: "Flora Pillar Cock - chrome faucet without nickel base",
        style: "Natural",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora207g1/800/1000",
          "https://picsum.photos/seed/flora207g2/800/1000"
        ]
      },
      {
        id: 208,
        name: "Flora Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/flora208/800/1000",
        altText: "Flora Concealed 1/2 inch stop cock for plumbing",
        style: "Natural",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora208g1/800/1000",
          "https://picsum.photos/seed/flora208g2/800/1000"
        ]
      },
      {
        id: 209,
        name: "Flora Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/flora209/800/1000",
        altText: "Flora Concealed 3/4 inch stop cock for main water lines",
        style: "Natural",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora209g1/800/1000",
          "https://picsum.photos/seed/flora209g2/800/1000"
        ]
      },
      {
        id: 210,
        name: "Flora Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/flora210/800/1000",
        altText: "Flora Sink Cock - high-arc chrome kitchen faucet",
        style: "Natural",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora210g1/800/1000",
          "https://picsum.photos/seed/flora210g2/800/1000"
        ]
      },
      {
        id: 211,
        name: "Flora Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/flora211/800/1000",
        altText: "Flora Swan Neck - elegant high-arc chrome basin faucet",
        style: "Natural",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora211g1/800/1000",
          "https://picsum.photos/seed/flora211g2/800/1000"
        ]
      },
      {
        id: 212,
        name: "Flora 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/flora212/800/1000",
        altText: "Flora 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Natural",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora212g1/800/1000",
          "https://picsum.photos/seed/flora212g2/800/1000"
        ]
      },
      {
        id: 213,
        name: "Flora 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/flora213/800/1000",
        altText: "Flora 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Natural",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora213g1/800/1000",
          "https://picsum.photos/seed/flora213g2/800/1000"
        ]
      },
      {
        id: 214,
        name: "Flora Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/flora214/800/1000",
        altText: "Flora Centre Hole - single-hole polished chrome basin mixer",
        style: "Natural",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora214g1/800/1000",
          "https://picsum.photos/seed/flora214g2/800/1000",
          "https://picsum.photos/seed/flora214g3/800/1000"
        ]
      },
      {
        id: 215,
        name: "Flora Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/flora215/800/1000",
        altText: "Flora Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Natural",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora215g1/800/1000",
          "https://picsum.photos/seed/flora215g2/800/1000"
        ]
      },
      {
        id: 216,
        name: "Flora Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/flora216/800/1000",
        altText: "Flora Wall Mixer without Band - concealed chrome shower mixer",
        style: "Natural",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora216g1/800/1000",
          "https://picsum.photos/seed/flora216g2/800/1000"
        ]
      },
      {
        id: 217,
        name: "Flora Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/flora217/800/1000",
        altText: "Flora Wall Mixer with Band - concealed chrome shower mixer",
        style: "Natural",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/flora217g1/800/1000",
          "https://picsum.photos/seed/flora217g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Fusion Line",
    description: "Where contemporary design meets industrial precision. The Fusion Line combines bold geometric forms with exceptional functionality, creating fixtures that make a statement while delivering reliable performance for modern living.",
    tagline: "Bold design. Pure function.",
    heroImageUrl: "https://picsum.photos/seed/fusion301/800/1000",
    style: "Modern",
    products: [
      {
        id: 301,
        name: "Fusion Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Fusion chrome finish.",
        imageUrl: "https://picsum.photos/seed/fusion301/800/1000",
        altText: "Fusion Bib Cock - polished chrome utility faucet",
        style: "Modern",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion301g1/800/1000",
          "https://picsum.photos/seed/fusion301g2/800/1000"
        ]
      },
      {
        id: 302,
        name: "Fusion Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/fusion302/800/1000",
        altText: "Fusion Longbody Bib Cock - chrome faucet with extended body",
        style: "Modern",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion302g1/800/1000",
          "https://picsum.photos/seed/fusion302g2/800/1000"
        ]
      },
      {
        id: 303,
        name: "Fusion Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/fusion303/800/1000",
        altText: "Fusion Angle Cock - polished chrome angle valve",
        style: "Modern",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion303g1/800/1000",
          "https://picsum.photos/seed/fusion303g2/800/1000"
        ]
      },
      {
        id: 304,
        name: "Fusion Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/fusion304/800/1000",
        altText: "Fusion Pillar Cock - standard chrome basin faucet",
        style: "Modern",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion304g1/800/1000",
          "https://picsum.photos/seed/fusion304g2/800/1000"
        ]
      },
      {
        id: 305,
        name: "Fusion Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/fusion305/800/1000",
        altText: "Fusion Washing Cock - chrome washing machine valve with connector",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion305g1/800/1000",
          "https://picsum.photos/seed/fusion305g2/800/1000"
        ]
      },
      {
        id: 306,
        name: "Fusion Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/fusion306/800/1000",
        altText: "Fusion Nozzle Cock - swivel spout chrome faucet",
        style: "Modern",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion306g1/800/1000",
          "https://picsum.photos/seed/fusion306g2/800/1000"
        ]
      },
      {
        id: 307,
        name: "Fusion Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/fusion307/800/1000",
        altText: "Fusion Pillar Cock - chrome faucet without nickel base",
        style: "Modern",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion307g1/800/1000",
          "https://picsum.photos/seed/fusion307g2/800/1000"
        ]
      },
      {
        id: 308,
        name: "Fusion Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/fusion308/800/1000",
        altText: "Fusion Concealed 1/2 inch stop cock for plumbing",
        style: "Modern",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion308g1/800/1000",
          "https://picsum.photos/seed/fusion308g2/800/1000"
        ]
      },
      {
        id: 309,
        name: "Fusion Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/fusion309/800/1000",
        altText: "Fusion Concealed 3/4 inch stop cock for main water lines",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion309g1/800/1000",
          "https://picsum.photos/seed/fusion309g2/800/1000"
        ]
      },
      {
        id: 310,
        name: "Fusion Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/fusion310/800/1000",
        altText: "Fusion Sink Cock - high-arc chrome kitchen faucet",
        style: "Modern",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion310g1/800/1000",
          "https://picsum.photos/seed/fusion310g2/800/1000"
        ]
      },
      {
        id: 311,
        name: "Fusion Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/fusion311/800/1000",
        altText: "Fusion Swan Neck - elegant high-arc chrome basin faucet",
        style: "Modern",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion311g1/800/1000",
          "https://picsum.photos/seed/fusion311g2/800/1000"
        ]
      },
      {
        id: 312,
        name: "Fusion 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/fusion312/800/1000",
        altText: "Fusion 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Modern",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion312g1/800/1000",
          "https://picsum.photos/seed/fusion312g2/800/1000"
        ]
      },
      {
        id: 313,
        name: "Fusion 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/fusion313/800/1000",
        altText: "Fusion 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Modern",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion313g1/800/1000",
          "https://picsum.photos/seed/fusion313g2/800/1000"
        ]
      },
      {
        id: 314,
        name: "Fusion Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/fusion314/800/1000",
        altText: "Fusion Centre Hole - single-hole polished chrome basin mixer",
        style: "Modern",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion314g1/800/1000",
          "https://picsum.photos/seed/fusion314g2/800/1000",
          "https://picsum.photos/seed/fusion314g3/800/1000"
        ]
      },
      {
        id: 315,
        name: "Fusion Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/fusion315/800/1000",
        altText: "Fusion Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Modern",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion315g1/800/1000",
          "https://picsum.photos/seed/fusion315g2/800/1000"
        ]
      },
      {
        id: 316,
        name: "Fusion Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/fusion316/800/1000",
        altText: "Fusion Wall Mixer without Band - concealed chrome shower mixer",
        style: "Modern",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion316g1/800/1000",
          "https://picsum.photos/seed/fusion316g2/800/1000"
        ]
      },
      {
        id: 317,
        name: "Fusion Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/fusion317/800/1000",
        altText: "Fusion Wall Mixer with Band - concealed chrome shower mixer",
        style: "Modern",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/fusion317g1/800/1000",
          "https://picsum.photos/seed/fusion317g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Rozzer Series",
    description: "Timeless elegance meets everyday durability. The Rozzer Series combines classic design principles with modern manufacturing precision, offering fixtures that bring understated sophistication to any bathroom or kitchen space.",
    tagline: "Classic elegance. Modern reliability.",
    heroImageUrl: "https://picsum.photos/seed/rozzer401/800/1000",
    style: "Industrial",
    products: [
      {
        id: 401,
        name: "Rozzer Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Rozzer chrome finish.",
        imageUrl: "https://picsum.photos/seed/rozzer401/800/1000",
        altText: "Rozzer Bib Cock - polished chrome utility faucet",
        style: "Industrial",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer401g1/800/1000",
          "https://picsum.photos/seed/rozzer401g2/800/1000"
        ]
      },
      {
        id: 402,
        name: "Rozzer Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/rozzer402/800/1000",
        altText: "Rozzer Longbody Bib Cock - chrome faucet with extended body",
        style: "Industrial",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer402g1/800/1000",
          "https://picsum.photos/seed/rozzer402g2/800/1000"
        ]
      },
      {
        id: 403,
        name: "Rozzer Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/rozzer403/800/1000",
        altText: "Rozzer Angle Cock - polished chrome angle valve",
        style: "Industrial",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer403g1/800/1000",
          "https://picsum.photos/seed/rozzer403g2/800/1000"
        ]
      },
      {
        id: 404,
        name: "Rozzer Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/rozzer404/800/1000",
        altText: "Rozzer Pillar Cock - standard chrome basin faucet",
        style: "Industrial",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer404g1/800/1000",
          "https://picsum.photos/seed/rozzer404g2/800/1000"
        ]
      },
      {
        id: 405,
        name: "Rozzer Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/rozzer405/800/1000",
        altText: "Rozzer Washing Cock - chrome washing machine valve with connector",
        style: "Industrial",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer405g1/800/1000",
          "https://picsum.photos/seed/rozzer405g2/800/1000"
        ]
      },
      {
        id: 406,
        name: "Rozzer Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/rozzer406/800/1000",
        altText: "Rozzer Nozzle Cock - swivel spout chrome faucet",
        style: "Industrial",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer406g1/800/1000",
          "https://picsum.photos/seed/rozzer406g2/800/1000"
        ]
      },
      {
        id: 407,
        name: "Rozzer Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/rozzer407/800/1000",
        altText: "Rozzer Pillar Cock - chrome faucet without nickel base",
        style: "Industrial",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer407g1/800/1000",
          "https://picsum.photos/seed/rozzer407g2/800/1000"
        ]
      },
      {
        id: 408,
        name: "Rozzer Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/rozzer408/800/1000",
        altText: "Rozzer Concealed 1/2 inch stop cock for plumbing",
        style: "Industrial",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer408g1/800/1000",
          "https://picsum.photos/seed/rozzer408g2/800/1000"
        ]
      },
      {
        id: 409,
        name: "Rozzer Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/rozzer409/800/1000",
        altText: "Rozzer Concealed 3/4 inch stop cock for main water lines",
        style: "Industrial",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer409g1/800/1000",
          "https://picsum.photos/seed/rozzer409g2/800/1000"
        ]
      },
      {
        id: 410,
        name: "Rozzer Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/rozzer410/800/1000",
        altText: "Rozzer Sink Cock - high-arc chrome kitchen faucet",
        style: "Industrial",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer410g1/800/1000",
          "https://picsum.photos/seed/rozzer410g2/800/1000"
        ]
      },
      {
        id: 411,
        name: "Rozzer Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/rozzer411/800/1000",
        altText: "Rozzer Swan Neck - elegant high-arc chrome basin faucet",
        style: "Industrial",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer411g1/800/1000",
          "https://picsum.photos/seed/rozzer411g2/800/1000"
        ]
      },
      {
        id: 412,
        name: "Rozzer 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/rozzer412/800/1000",
        altText: "Rozzer 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Industrial",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer412g1/800/1000",
          "https://picsum.photos/seed/rozzer412g2/800/1000"
        ]
      },
      {
        id: 413,
        name: "Rozzer 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/rozzer413/800/1000",
        altText: "Rozzer 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Industrial",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer413g1/800/1000",
          "https://picsum.photos/seed/rozzer413g2/800/1000"
        ]
      },
      {
        id: 414,
        name: "Rozzer Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/rozzer414/800/1000",
        altText: "Rozzer Centre Hole - single-hole polished chrome basin mixer",
        style: "Industrial",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer414g1/800/1000",
          "https://picsum.photos/seed/rozzer414g2/800/1000",
          "https://picsum.photos/seed/rozzer414g3/800/1000"
        ]
      },
      {
        id: 415,
        name: "Rozzer Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/rozzer415/800/1000",
        altText: "Rozzer Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Industrial",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer415g1/800/1000",
          "https://picsum.photos/seed/rozzer415g2/800/1000"
        ]
      },
      {
        id: 416,
        name: "Rozzer Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/rozzer416/800/1000",
        altText: "Rozzer Wall Mixer without Band - concealed chrome shower mixer",
        style: "Industrial",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer416g1/800/1000",
          "https://picsum.photos/seed/rozzer416g2/800/1000"
        ]
      },
      {
        id: 417,
        name: "Rozzer Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/rozzer417/800/1000",
        altText: "Rozzer Wall Mixer with Band - concealed chrome shower mixer",
        style: "Industrial",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/rozzer417g1/800/1000",
          "https://picsum.photos/seed/rozzer417g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Prime Collection",
    description: "Elevate your space with the Prime Collection, where luxury meets everyday functionality. Crafted with precision and finished to perfection, these fixtures offer a premium experience with timeless design and enduring quality.",
    tagline: "Premium craftsmanship for everyday luxury.",
    heroImageUrl: "https://picsum.photos/seed/prime501/800/1000",
    style: "Minimalist",
    products: [
      {
        id: 501,
        name: "Prime Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Prime chrome finish.",
        imageUrl: "https://picsum.photos/seed/prime501/800/1000",
        altText: "Prime Bib Cock - polished chrome utility faucet",
        style: "Minimalist",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime501g1/800/1000",
          "https://picsum.photos/seed/prime501g2/800/1000"
        ]
      },
      {
        id: 502,
        name: "Prime Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/prime502/800/1000",
        altText: "Prime Longbody Bib Cock - chrome faucet with extended body",
        style: "Minimalist",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime502g1/800/1000",
          "https://picsum.photos/seed/prime502g2/800/1000"
        ]
      },
      {
        id: 503,
        name: "Prime Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/prime503/800/1000",
        altText: "Prime Angle Cock - polished chrome angle valve",
        style: "Minimalist",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime503g1/800/1000",
          "https://picsum.photos/seed/prime503g2/800/1000"
        ]
      },
      {
        id: 504,
        name: "Prime Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/prime504/800/1000",
        altText: "Prime Pillar Cock - standard chrome basin faucet",
        style: "Minimalist",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime504g1/800/1000",
          "https://picsum.photos/seed/prime504g2/800/1000"
        ]
      },
      {
        id: 505,
        name: "Prime Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/prime505/800/1000",
        altText: "Prime Washing Cock - chrome washing machine valve with connector",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime505g1/800/1000",
          "https://picsum.photos/seed/prime505g2/800/1000"
        ]
      },
      {
        id: 506,
        name: "Prime Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/prime506/800/1000",
        altText: "Prime Nozzle Cock - swivel spout chrome faucet",
        style: "Minimalist",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime506g1/800/1000",
          "https://picsum.photos/seed/prime506g2/800/1000"
        ]
      },
      {
        id: 507,
        name: "Prime Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/prime507/800/1000",
        altText: "Prime Pillar Cock - chrome faucet without nickel base",
        style: "Minimalist",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime507g1/800/1000",
          "https://picsum.photos/seed/prime507g2/800/1000"
        ]
      },
      {
        id: 508,
        name: "Prime Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/prime508/800/1000",
        altText: "Prime Concealed 1/2 inch stop cock for plumbing",
        style: "Minimalist",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime508g1/800/1000",
          "https://picsum.photos/seed/prime508g2/800/1000"
        ]
      },
      {
        id: 509,
        name: "Prime Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/prime509/800/1000",
        altText: "Prime Concealed 3/4 inch stop cock for main water lines",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime509g1/800/1000",
          "https://picsum.photos/seed/prime509g2/800/1000"
        ]
      },
      {
        id: 510,
        name: "Prime Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/prime510/800/1000",
        altText: "Prime Sink Cock - high-arc chrome kitchen faucet",
        style: "Minimalist",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime510g1/800/1000",
          "https://picsum.photos/seed/prime510g2/800/1000"
        ]
      },
      {
        id: 511,
        name: "Prime Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/prime511/800/1000",
        altText: "Prime Swan Neck - elegant high-arc chrome basin faucet",
        style: "Minimalist",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime511g1/800/1000",
          "https://picsum.photos/seed/prime511g2/800/1000"
        ]
      },
      {
        id: 512,
        name: "Prime 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/prime512/800/1000",
        altText: "Prime 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Minimalist",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime512g1/800/1000",
          "https://picsum.photos/seed/prime512g2/800/1000"
        ]
      },
      {
        id: 513,
        name: "Prime 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/prime513/800/1000",
        altText: "Prime 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Minimalist",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime513g1/800/1000",
          "https://picsum.photos/seed/prime513g2/800/1000"
        ]
      },
      {
        id: 514,
        name: "Prime Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/prime514/800/1000",
        altText: "Prime Centre Hole - single-hole polished chrome basin mixer",
        style: "Minimalist",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime514g1/800/1000",
          "https://picsum.photos/seed/prime514g2/800/1000",
          "https://picsum.photos/seed/prime514g3/800/1000"
        ]
      },
      {
        id: 515,
        name: "Prime Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/prime515/800/1000",
        altText: "Prime Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Minimalist",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime515g1/800/1000",
          "https://picsum.photos/seed/prime515g2/800/1000"
        ]
      },
      {
        id: 516,
        name: "Prime Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/prime516/800/1000",
        altText: "Prime Wall Mixer without Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime516g1/800/1000",
          "https://picsum.photos/seed/prime516g2/800/1000"
        ]
      },
      {
        id: 517,
        name: "Prime Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/prime517/800/1000",
        altText: "Prime Wall Mixer with Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/prime517g1/800/1000",
          "https://picsum.photos/seed/prime517g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Solo Range",
    description: "Designed for those who appreciate simplicity and elegance, the Solo Range offers minimalist fixtures that blend seamlessly into any space. Clean lines, reliable performance, and a focus on essential functionality define this collection.",
    tagline: "Simplicity in every drop.",
    heroImageUrl: "https://picsum.photos/seed/solo601/800/1000",
    style: "Minimalist",
    products: [
      {
        id: 601,
        name: "Solo Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Solo chrome finish.",
        imageUrl: "https://picsum.photos/seed/solo601/800/1000",
        altText: "Solo Bib Cock - polished chrome utility faucet",
        style: "Minimalist",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo601g1/800/1000",
          "https://picsum.photos/seed/solo601g2/800/1000"
        ]
      },
      {
        id: 602,
        name: "Solo Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/solo602/800/1000",
        altText: "Solo Longbody Bib Cock - chrome faucet with extended body",
        style: "Minimalist",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo602g1/800/1000",
          "https://picsum.photos/seed/solo602g2/800/1000"
        ]
      },
      {
        id: 603,
        name: "Solo Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/solo603/800/1000",
        altText: "Solo Angle Cock - polished chrome angle valve",
        style: "Minimalist",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo603g1/800/1000",
          "https://picsum.photos/seed/solo603g2/800/1000"
        ]
      },
      {
        id: 604,
        name: "Solo Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/solo604/800/1000",
        altText: "Solo Pillar Cock - standard chrome basin faucet",
        style: "Minimalist",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo604g1/800/1000",
          "https://picsum.photos/seed/solo604g2/800/1000"
        ]
      },
      {
        id: 605,
        name: "Solo Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/solo605/800/1000",
        altText: "Solo Washing Cock - chrome washing machine valve with connector",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo605g1/800/1000",
          "https://picsum.photos/seed/solo605g2/800/1000"
        ]
      },
      {
        id: 606,
        name: "Solo Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/solo606/800/1000",
        altText: "Solo Nozzle Cock - swivel spout chrome faucet",
        style: "Minimalist",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo606g1/800/1000",
          "https://picsum.photos/seed/solo606g2/800/1000"
        ]
      },
      {
        id: 607,
        name: "Solo Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/solo607/800/1000",
        altText: "Solo Pillar Cock - chrome faucet without nickel base",
        style: "Minimalist",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo607g1/800/1000",
          "https://picsum.photos/seed/solo607g2/800/1000"
        ]
      },
      {
        id: 608,
        name: "Solo Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/solo608/800/1000",
        altText: "Solo Concealed 1/2 inch stop cock for plumbing",
        style: "Minimalist",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo608g1/800/1000",
          "https://picsum.photos/seed/solo608g2/800/1000"
        ]
      },
      {
        id: 609,
        name: "Solo Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/solo609/800/1000",
        altText: "Solo Concealed 3/4 inch stop cock for main water lines",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo609g1/800/1000",
          "https://picsum.photos/seed/solo609g2/800/1000"
        ]
      },
      {
        id: 610,
        name: "Solo Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/solo610/800/1000",
        altText: "Solo Sink Cock - high-arc chrome kitchen faucet",
        style: "Minimalist",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo610g1/800/1000",
          "https://picsum.photos/seed/solo610g2/800/1000"
        ]
      },
      {
        id: 611,
        name: "Solo Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/solo611/800/1000",
        altText: "Solo Swan Neck - elegant high-arc chrome basin faucet",
        style: "Minimalist",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo611g1/800/1000",
          "https://picsum.photos/seed/solo611g2/800/1000"
        ]
      },
      {
        id: 612,
        name: "Solo 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/solo612/800/1000",
        altText: "Solo 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Minimalist",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo612g1/800/1000",
          "https://picsum.photos/seed/solo612g2/800/1000"
        ]
      },
      {
        id: 613,
        name: "Solo 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/solo613/800/1000",
        altText: "Solo 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Minimalist",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo613g1/800/1000",
          "https://picsum.photos/seed/solo613g2/800/1000"
        ]
      },
      {
        id: 614,
        name: "Solo Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/solo614/800/1000",
        altText: "Solo Centre Hole - single-hole polished chrome basin mixer",
        style: "Minimalist",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo614g1/800/1000",
          "https://picsum.photos/seed/solo614g2/800/1000",
          "https://picsum.photos/seed/solo614g3/800/1000"
        ]
      },
      {
        id: 615,
        name: "Solo Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/solo615/800/1000",
        altText: "Solo Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Minimalist",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo615g1/800/1000",
          "https://picsum.photos/seed/solo615g2/800/1000"
        ]
      },
      {
        id: 616,
        name: "Solo Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/solo616/800/1000",
        altText: "Solo Wall Mixer without Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo616g1/800/1000",
          "https://picsum.photos/seed/solo616g2/800/1000"
        ]
      },
      {
        id: 617,
        name: "Solo Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/solo617/800/1000",
        altText: "Solo Wall Mixer with Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/solo617g1/800/1000",
          "https://picsum.photos/seed/solo617g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Soft Series",
    description: "Embrace the gentle touch of the Soft Series, where curved forms and smooth transitions create a sense of calm in your everyday spaces. Designed for those who appreciate understated elegance, these fixtures bring a soft aesthetic to modern living.",
    tagline: "Gentle on the eyes. Smooth to the touch.",
    heroImageUrl: "https://picsum.photos/seed/soft701/800/1000",
    style: "Minimalist",
    products: [
      {
        id: 701,
        name: "Soft Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Soft chrome finish.",
        imageUrl: "https://picsum.photos/seed/soft701/800/1000",
        altText: "Soft Bib Cock - polished chrome utility faucet",
        style: "Minimalist",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft701g1/800/1000",
          "https://picsum.photos/seed/soft701g2/800/1000"
        ]
      },
      {
        id: 702,
        name: "Soft Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/soft702/800/1000",
        altText: "Soft Longbody Bib Cock - chrome faucet with extended body",
        style: "Minimalist",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft702g1/800/1000",
          "https://picsum.photos/seed/soft702g2/800/1000"
        ]
      },
      {
        id: 703,
        name: "Soft Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/soft703/800/1000",
        altText: "Soft Angle Cock - polished chrome angle valve",
        style: "Minimalist",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft703g1/800/1000",
          "https://picsum.photos/seed/soft703g2/800/1000"
        ]
      },
      {
        id: 704,
        name: "Soft Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/soft704/800/1000",
        altText: "Soft Pillar Cock - standard chrome basin faucet",
        style: "Minimalist",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft704g1/800/1000",
          "https://picsum.photos/seed/soft704g2/800/1000"
        ]
      },
      {
        id: 705,
        name: "Soft Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/soft705/800/1000",
        altText: "Soft Washing Cock - chrome washing machine valve with connector",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft705g1/800/1000",
          "https://picsum.photos/seed/soft705g2/800/1000"
        ]
      },
      {
        id: 706,
        name: "Soft Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/soft706/800/1000",
        altText: "Soft Nozzle Cock - swivel spout chrome faucet",
        style: "Minimalist",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft706g1/800/1000",
          "https://picsum.photos/seed/soft706g2/800/1000"
        ]
      },
      {
        id: 707,
        name: "Soft Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/soft707/800/1000",
        altText: "Soft Pillar Cock - chrome faucet without nickel base",
        style: "Minimalist",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft707g1/800/1000",
          "https://picsum.photos/seed/soft707g2/800/1000"
        ]
      },
      {
        id: 708,
        name: "Soft Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/soft708/800/1000",
        altText: "Soft Concealed 1/2 inch stop cock for plumbing",
        style: "Minimalist",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft708g1/800/1000",
          "https://picsum.photos/seed/soft708g2/800/1000"
        ]
      },
      {
        id: 709,
        name: "Soft Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/soft709/800/1000",
        altText: "Soft Concealed 3/4 inch stop cock for main water lines",
        style: "Minimalist",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft709g1/800/1000",
          "https://picsum.photos/seed/soft709g2/800/1000"
        ]
      },
      {
        id: 710,
        name: "Soft Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/soft710/800/1000",
        altText: "Soft Sink Cock - high-arc chrome kitchen faucet",
        style: "Minimalist",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft710g1/800/1000",
          "https://picsum.photos/seed/soft710g2/800/1000"
        ]
      },
      {
        id: 711,
        name: "Soft Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/soft711/800/1000",
        altText: "Soft Swan Neck - elegant high-arc chrome basin faucet",
        style: "Minimalist",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft711g1/800/1000",
          "https://picsum.photos/seed/soft711g2/800/1000"
        ]
      },
      {
        id: 712,
        name: "Soft 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/soft712/800/1000",
        altText: "Soft 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Minimalist",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft712g1/800/1000",
          "https://picsum.photos/seed/soft712g2/800/1000"
        ]
      },
      {
        id: 713,
        name: "Soft 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/soft713/800/1000",
        altText: "Soft 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Minimalist",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft713g1/800/1000",
          "https://picsum.photos/seed/soft713g2/800/1000"
        ]
      },
      {
        id: 714,
        name: "Soft Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/soft714/800/1000",
        altText: "Soft Centre Hole - single-hole polished chrome basin mixer",
        style: "Minimalist",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft714g1/800/1000",
          "https://picsum.photos/seed/soft714g2/800/1000",
          "https://picsum.photos/seed/soft714g3/800/1000"
        ]
      },
      {
        id: 715,
        name: "Soft Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/soft715/800/1000",
        altText: "Soft Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Minimalist",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft715g1/800/1000",
          "https://picsum.photos/seed/soft715g2/800/1000"
        ]
      },
      {
        id: 716,
        name: "Soft Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/soft716/800/1000",
        altText: "Soft Wall Mixer without Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft716g1/800/1000",
          "https://picsum.photos/seed/soft716g2/800/1000"
        ]
      },
      {
        id: 717,
        name: "Soft Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/soft717/800/1000",
        altText: "Soft Wall Mixer with Band - concealed chrome shower mixer",
        style: "Minimalist",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/soft717g1/800/1000",
          "https://picsum.photos/seed/soft717g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Donald Collection",
    description: "Timeless sophistication meets modern reliability. The Donald Collection draws inspiration from classic design principles while incorporating contemporary manufacturing precision, offering fixtures that bring enduring elegance to any bathroom or kitchen space.",
    tagline: "Classic elegance. Modern heart.",
    heroImageUrl: "https://picsum.photos/seed/donald801/800/1000",
    style: "Industrial",
    products: [
      {
        id: 801,
        name: "Donald Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Donald chrome finish.",
        imageUrl: "https://picsum.photos/seed/donald801/800/1000",
        altText: "Donald Bib Cock - polished chrome utility faucet",
        style: "Industrial",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald801g1/800/1000",
          "https://picsum.photos/seed/donald801g2/800/1000"
        ]
      },
      {
        id: 802,
        name: "Donald Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/donald802/800/1000",
        altText: "Donald Longbody Bib Cock - chrome faucet with extended body",
        style: "Industrial",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald802g1/800/1000",
          "https://picsum.photos/seed/donald802g2/800/1000"
        ]
      },
      {
        id: 803,
        name: "Donald Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/donald803/800/1000",
        altText: "Donald Angle Cock - polished chrome angle valve",
        style: "Industrial",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald803g1/800/1000",
          "https://picsum.photos/seed/donald803g2/800/1000"
        ]
      },
      {
        id: 804,
        name: "Donald Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/donald804/800/1000",
        altText: "Donald Pillar Cock - standard chrome basin faucet",
        style: "Industrial",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald804g1/800/1000",
          "https://picsum.photos/seed/donald804g2/800/1000"
        ]
      },
      {
        id: 805,
        name: "Donald Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/donald805/800/1000",
        altText: "Donald Washing Cock - chrome washing machine valve with connector",
        style: "Industrial",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald805g1/800/1000",
          "https://picsum.photos/seed/donald805g2/800/1000"
        ]
      },
      {
        id: 806,
        name: "Donald Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/donald806/800/1000",
        altText: "Donald Nozzle Cock - swivel spout chrome faucet",
        style: "Industrial",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald806g1/800/1000",
          "https://picsum.photos/seed/donald806g2/800/1000"
        ]
      },
      {
        id: 807,
        name: "Donald Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/donald807/800/1000",
        altText: "Donald Pillar Cock - chrome faucet without nickel base",
        style: "Industrial",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald807g1/800/1000",
          "https://picsum.photos/seed/donald807g2/800/1000"
        ]
      },
      {
        id: 808,
        name: "Donald Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/donald808/800/1000",
        altText: "Donald Concealed 1/2 inch stop cock for plumbing",
        style: "Industrial",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald808g1/800/1000",
          "https://picsum.photos/seed/donald808g2/800/1000"
        ]
      },
      {
        id: 809,
        name: "Donald Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/donald809/800/1000",
        altText: "Donald Concealed 3/4 inch stop cock for main water lines",
        style: "Industrial",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald809g1/800/1000",
          "https://picsum.photos/seed/donald809g2/800/1000"
        ]
      },
      {
        id: 810,
        name: "Donald Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/donald810/800/1000",
        altText: "Donald Sink Cock - high-arc chrome kitchen faucet",
        style: "Industrial",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald810g1/800/1000",
          "https://picsum.photos/seed/donald810g2/800/1000"
        ]
      },
      {
        id: 811,
        name: "Donald Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/donald811/800/1000",
        altText: "Donald Swan Neck - elegant high-arc chrome basin faucet",
        style: "Industrial",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald811g1/800/1000",
          "https://picsum.photos/seed/donald811g2/800/1000"
        ]
      },
      {
        id: 812,
        name: "Donald 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/donald812/800/1000",
        altText: "Donald 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Industrial",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald812g1/800/1000",
          "https://picsum.photos/seed/donald812g2/800/1000"
        ]
      },
      {
        id: 813,
        name: "Donald 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/donald813/800/1000",
        altText: "Donald 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Industrial",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald813g1/800/1000",
          "https://picsum.photos/seed/donald813g2/800/1000"
        ]
      },
      {
        id: 814,
        name: "Donald Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/donald814/800/1000",
        altText: "Donald Centre Hole - single-hole polished chrome basin mixer",
        style: "Industrial",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald814g1/800/1000",
          "https://picsum.photos/seed/donald814g2/800/1000",
          "https://picsum.photos/seed/donald814g3/800/1000"
        ]
      },
      {
        id: 815,
        name: "Donald Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/donald815/800/1000",
        altText: "Donald Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Industrial",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald815g1/800/1000",
          "https://picsum.photos/seed/donald815g2/800/1000"
        ]
      },
      {
        id: 816,
        name: "Donald Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/donald816/800/1000",
        altText: "Donald Wall Mixer without Band - concealed chrome shower mixer",
        style: "Industrial",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald816g1/800/1000",
          "https://picsum.photos/seed/donald816g2/800/1000"
        ]
      },
      {
        id: 817,
        name: "Donald Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/donald817/800/1000",
        altText: "Donald Wall Mixer with Band - concealed chrome shower mixer",
        style: "Industrial",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/donald817g1/800/1000",
          "https://picsum.photos/seed/donald817g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Spark Line",
    description: "Ignite your space with the Spark Line, where contemporary design meets vibrant energy. These fixtures add a touch of brilliance to everyday routines, combining sleek aesthetics with reliable performance for the modern home.",
    tagline: "Ignite your everyday.",
    heroImageUrl: "https://picsum.photos/seed/spark901/800/1000",
    style: "Modern",
    products: [
      {
        id: 901,
        name: "Spark Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Spark chrome finish.",
        imageUrl: "https://picsum.photos/seed/spark901/800/1000",
        altText: "Spark Bib Cock - polished chrome utility faucet",
        style: "Modern",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark901g1/800/1000",
          "https://picsum.photos/seed/spark901g2/800/1000"
        ]
      },
      {
        id: 902,
        name: "Spark Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/spark902/800/1000",
        altText: "Spark Longbody Bib Cock - chrome faucet with extended body",
        style: "Modern",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark902g1/800/1000",
          "https://picsum.photos/seed/spark902g2/800/1000"
        ]
      },
      {
        id: 903,
        name: "Spark Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/spark903/800/1000",
        altText: "Spark Angle Cock - polished chrome angle valve",
        style: "Modern",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark903g1/800/1000",
          "https://picsum.photos/seed/spark903g2/800/1000"
        ]
      },
      {
        id: 904,
        name: "Spark Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/spark904/800/1000",
        altText: "Spark Pillar Cock - standard chrome basin faucet",
        style: "Modern",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark904g1/800/1000",
          "https://picsum.photos/seed/spark904g2/800/1000"
        ]
      },
      {
        id: 905,
        name: "Spark Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/spark905/800/1000",
        altText: "Spark Washing Cock - chrome washing machine valve with connector",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark905g1/800/1000",
          "https://picsum.photos/seed/spark905g2/800/1000"
        ]
      },
      {
        id: 906,
        name: "Spark Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/spark906/800/1000",
        altText: "Spark Nozzle Cock - swivel spout chrome faucet",
        style: "Modern",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark906g1/800/1000",
          "https://picsum.photos/seed/spark906g2/800/1000"
        ]
      },
      {
        id: 907,
        name: "Spark Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/spark907/800/1000",
        altText: "Spark Pillar Cock - chrome faucet without nickel base",
        style: "Modern",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark907g1/800/1000",
          "https://picsum.photos/seed/spark907g2/800/1000"
        ]
      },
      {
        id: 908,
        name: "Spark Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/spark908/800/1000",
        altText: "Spark Concealed 1/2 inch stop cock for plumbing",
        style: "Modern",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark908g1/800/1000",
          "https://picsum.photos/seed/spark908g2/800/1000"
        ]
      },
      {
        id: 909,
        name: "Spark Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/spark909/800/1000",
        altText: "Spark Concealed 3/4 inch stop cock for main water lines",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark909g1/800/1000",
          "https://picsum.photos/seed/spark909g2/800/1000"
        ]
      },
      {
        id: 910,
        name: "Spark Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/spark910/800/1000",
        altText: "Spark Sink Cock - high-arc chrome kitchen faucet",
        style: "Modern",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark910g1/800/1000",
          "https://picsum.photos/seed/spark910g2/800/1000"
        ]
      },
      {
        id: 911,
        name: "Spark Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/spark911/800/1000",
        altText: "Spark Swan Neck - elegant high-arc chrome basin faucet",
        style: "Modern",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark911g1/800/1000",
          "https://picsum.photos/seed/spark911g2/800/1000"
        ]
      },
      {
        id: 912,
        name: "Spark 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/spark912/800/1000",
        altText: "Spark 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Modern",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark912g1/800/1000",
          "https://picsum.photos/seed/spark912g2/800/1000"
        ]
      },
      {
        id: 913,
        name: "Spark 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/spark913/800/1000",
        altText: "Spark 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Modern",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark913g1/800/1000",
          "https://picsum.photos/seed/spark913g2/800/1000"
        ]
      },
      {
        id: 914,
        name: "Spark Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/spark914/800/1000",
        altText: "Spark Centre Hole - single-hole polished chrome basin mixer",
        style: "Modern",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark914g1/800/1000",
          "https://picsum.photos/seed/spark914g2/800/1000",
          "https://picsum.photos/seed/spark914g3/800/1000"
        ]
      },
      {
        id: 915,
        name: "Spark Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/spark915/800/1000",
        altText: "Spark Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Modern",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark915g1/800/1000",
          "https://picsum.photos/seed/spark915g2/800/1000"
        ]
      },
      {
        id: 916,
        name: "Spark Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/spark916/800/1000",
        altText: "Spark Wall Mixer without Band - concealed chrome shower mixer",
        style: "Modern",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark916g1/800/1000",
          "https://picsum.photos/seed/spark916g2/800/1000"
        ]
      },
      {
        id: 917,
        name: "Spark Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/spark917/800/1000",
        altText: "Spark Wall Mixer with Band - concealed chrome shower mixer",
        style: "Modern",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/spark917g1/800/1000",
          "https://picsum.photos/seed/spark917g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Euro Series",
    description: "European-inspired design meets precision engineering. The Euro Series brings sophisticated continental styling to your space, with clean lines, elegant curves, and impeccable finishing that elevate everyday routines into moments of luxury.",
    tagline: "Continental sophistication for modern living.",
    heroImageUrl: "https://picsum.photos/seed/euro1001/800/1000",
    style: "Modern",
    products: [
      {
        id: 1001,
        name: "Euro Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Euro chrome finish.",
        imageUrl: "https://picsum.photos/seed/euro1001/800/1000",
        altText: "Euro Bib Cock - polished chrome utility faucet",
        style: "Modern",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1001g1/800/1000",
          "https://picsum.photos/seed/euro1001g2/800/1000"
        ]
      },
      {
        id: 1002,
        name: "Euro Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/euro1002/800/1000",
        altText: "Euro Longbody Bib Cock - chrome faucet with extended body",
        style: "Modern",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1002g1/800/1000",
          "https://picsum.photos/seed/euro1002g2/800/1000"
        ]
      },
      {
        id: 1003,
        name: "Euro Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/euro1003/800/1000",
        altText: "Euro Angle Cock - polished chrome angle valve",
        style: "Modern",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1003g1/800/1000",
          "https://picsum.photos/seed/euro1003g2/800/1000"
        ]
      },
      {
        id: 1004,
        name: "Euro Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/euro1004/800/1000",
        altText: "Euro Pillar Cock - standard chrome basin faucet",
        style: "Modern",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1004g1/800/1000",
          "https://picsum.photos/seed/euro1004g2/800/1000"
        ]
      },
      {
        id: 1005,
        name: "Euro Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/euro1005/800/1000",
        altText: "Euro Washing Cock - chrome washing machine valve with connector",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1005g1/800/1000",
          "https://picsum.photos/seed/euro1005g2/800/1000"
        ]
      },
      {
        id: 1006,
        name: "Euro Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/euro1006/800/1000",
        altText: "Euro Nozzle Cock - swivel spout chrome faucet",
        style: "Modern",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1006g1/800/1000",
          "https://picsum.photos/seed/euro1006g2/800/1000"
        ]
      },
      {
        id: 1007,
        name: "Euro Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/euro1007/800/1000",
        altText: "Euro Pillar Cock - chrome faucet without nickel base",
        style: "Modern",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1007g1/800/1000",
          "https://picsum.photos/seed/euro1007g2/800/1000"
        ]
      },
      {
        id: 1008,
        name: "Euro Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/euro1008/800/1000",
        altText: "Euro Concealed 1/2 inch stop cock for plumbing",
        style: "Modern",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1008g1/800/1000",
          "https://picsum.photos/seed/euro1008g2/800/1000"
        ]
      },
      {
        id: 1009,
        name: "Euro Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/euro1009/800/1000",
        altText: "Euro Concealed 3/4 inch stop cock for main water lines",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1009g1/800/1000",
          "https://picsum.photos/seed/euro1009g2/800/1000"
        ]
      },
      {
        id: 1010,
        name: "Euro Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/euro1010/800/1000",
        altText: "Euro Sink Cock - high-arc chrome kitchen faucet",
        style: "Modern",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1010g1/800/1000",
          "https://picsum.photos/seed/euro1010g2/800/1000"
        ]
      },
      {
        id: 1011,
        name: "Euro Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/euro1011/800/1000",
        altText: "Euro Swan Neck - elegant high-arc chrome basin faucet",
        style: "Modern",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1011g1/800/1000",
          "https://picsum.photos/seed/euro1011g2/800/1000"
        ]
      },
      {
        id: 1012,
        name: "Euro 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/euro1012/800/1000",
        altText: "Euro 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Modern",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1012g1/800/1000",
          "https://picsum.photos/seed/euro1012g2/800/1000"
        ]
      },
      {
        id: 1013,
        name: "Euro 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/euro1013/800/1000",
        altText: "Euro 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Modern",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1013g1/800/1000",
          "https://picsum.photos/seed/euro1013g2/800/1000"
        ]
      },
      {
        id: 1014,
        name: "Euro Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/euro1014/800/1000",
        altText: "Euro Centre Hole - single-hole polished chrome basin mixer",
        style: "Modern",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1014g1/800/1000",
          "https://picsum.photos/seed/euro1014g2/800/1000",
          "https://picsum.photos/seed/euro1014g3/800/1000"
        ]
      },
      {
        id: 1015,
        name: "Euro Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/euro1015/800/1000",
        altText: "Euro Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Modern",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1015g1/800/1000",
          "https://picsum.photos/seed/euro1015g2/800/1000"
        ]
      },
      {
        id: 1016,
        name: "Euro Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/euro1016/800/1000",
        altText: "Euro Wall Mixer without Band - concealed chrome shower mixer",
        style: "Modern",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1016g1/800/1000",
          "https://picsum.photos/seed/euro1016g2/800/1000"
        ]
      },
      {
        id: 1017,
        name: "Euro Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/euro1017/800/1000",
        altText: "Euro Wall Mixer with Band - concealed chrome shower mixer",
        style: "Modern",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/euro1017g1/800/1000",
          "https://picsum.photos/seed/euro1017g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 11,
    name: "Ornamix Collection",
    description: "Celebrate the art of detail with the Ornamix Collection. Each piece is meticulously crafted with ornate touches and refined finishes, bringing a sense of timeless elegance and artistic flair to your bathroom and kitchen spaces.",
    tagline: "Artistry in every detail.",
    heroImageUrl: "https://picsum.photos/seed/ornamix1101/800/1000",
    style: "Classic",
    products: [
      {
        id: 1101,
        name: "Ornamix Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Ornamix chrome finish.",
        imageUrl: "https://picsum.photos/seed/ornamix1101/800/1000",
        altText: "Ornamix Bib Cock - polished chrome utility faucet",
        style: "Classic",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1101g1/800/1000",
          "https://picsum.photos/seed/ornamix1101g2/800/1000"
        ]
      },
      {
        id: 1102,
        name: "Ornamix Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/ornamix1102/800/1000",
        altText: "Ornamix Longbody Bib Cock - chrome faucet with extended body",
        style: "Classic",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1102g1/800/1000",
          "https://picsum.photos/seed/ornamix1102g2/800/1000"
        ]
      },
      {
        id: 1103,
        name: "Ornamix Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/ornamix1103/800/1000",
        altText: "Ornamix Angle Cock - polished chrome angle valve",
        style: "Classic",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1103g1/800/1000",
          "https://picsum.photos/seed/ornamix1103g2/800/1000"
        ]
      },
      {
        id: 1104,
        name: "Ornamix Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/ornamix1104/800/1000",
        altText: "Ornamix Pillar Cock - standard chrome basin faucet",
        style: "Classic",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1104g1/800/1000",
          "https://picsum.photos/seed/ornamix1104g2/800/1000"
        ]
      },
      {
        id: 1105,
        name: "Ornamix Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/ornamix1105/800/1000",
        altText: "Ornamix Washing Cock - chrome washing machine valve with connector",
        style: "Classic",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1105g1/800/1000",
          "https://picsum.photos/seed/ornamix1105g2/800/1000"
        ]
      },
      {
        id: 1106,
        name: "Ornamix Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/ornamix1106/800/1000",
        altText: "Ornamix Nozzle Cock - swivel spout chrome faucet",
        style: "Classic",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1106g1/800/1000",
          "https://picsum.photos/seed/ornamix1106g2/800/1000"
        ]
      },
      {
        id: 1107,
        name: "Ornamix Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/ornamix1107/800/1000",
        altText: "Ornamix Pillar Cock - chrome faucet without nickel base",
        style: "Classic",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1107g1/800/1000",
          "https://picsum.photos/seed/ornamix1107g2/800/1000"
        ]
      },
      {
        id: 1108,
        name: "Ornamix Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/ornamix1108/800/1000",
        altText: "Ornamix Concealed 1/2 inch stop cock for plumbing",
        style: "Classic",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1108g1/800/1000",
          "https://picsum.photos/seed/ornamix1108g2/800/1000"
        ]
      },
      {
        id: 1109,
        name: "Ornamix Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/ornamix1109/800/1000",
        altText: "Ornamix Concealed 3/4 inch stop cock for main water lines",
        style: "Classic",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1109g1/800/1000",
          "https://picsum.photos/seed/ornamix1109g2/800/1000"
        ]
      },
      {
        id: 1110,
        name: "Ornamix Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/ornamix1110/800/1000",
        altText: "Ornamix Sink Cock - high-arc chrome kitchen faucet",
        style: "Classic",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1110g1/800/1000",
          "https://picsum.photos/seed/ornamix1110g2/800/1000"
        ]
      },
      {
        id: 1111,
        name: "Ornamix Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/ornamix1111/800/1000",
        altText: "Ornamix Swan Neck - elegant high-arc chrome basin faucet",
        style: "Classic",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1111g1/800/1000",
          "https://picsum.photos/seed/ornamix1111g2/800/1000"
        ]
      },
      {
        id: 1112,
        name: "Ornamix 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/ornamix1112/800/1000",
        altText: "Ornamix 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Classic",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1112g1/800/1000",
          "https://picsum.photos/seed/ornamix1112g2/800/1000"
        ]
      },
      {
        id: 1113,
        name: "Ornamix 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/ornamix1113/800/1000",
        altText: "Ornamix 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Classic",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1113g1/800/1000",
          "https://picsum.photos/seed/ornamix1113g2/800/1000"
        ]
      },
      {
        id: 1114,
        name: "Ornamix Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/ornamix1114/800/1000",
        altText: "Ornamix Centre Hole - single-hole polished chrome basin mixer",
        style: "Classic",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1114g1/800/1000",
          "https://picsum.photos/seed/ornamix1114g2/800/1000",
          "https://picsum.photos/seed/ornamix1114g3/800/1000"
        ]
      },
      {
        id: 1115,
        name: "Ornamix Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/ornamix1115/800/1000",
        altText: "Ornamix Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Classic",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1115g1/800/1000",
          "https://picsum.photos/seed/ornamix1115g2/800/1000"
        ]
      },
      {
        id: 1116,
        name: "Ornamix Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/ornamix1116/800/1000",
        altText: "Ornamix Wall Mixer without Band - concealed chrome shower mixer",
        style: "Classic",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1116g1/800/1000",
          "https://picsum.photos/seed/ornamix1116g2/800/1000"
        ]
      },
      {
        id: 1117,
        name: "Ornamix Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/ornamix1117/800/1000",
        altText: "Ornamix Wall Mixer with Band - concealed chrome shower mixer",
        style: "Classic",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/ornamix1117g1/800/1000",
          "https://picsum.photos/seed/ornamix1117g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 12,
    name: "M-Flora Series",
    description: "A modern interpretation of botanical beauty, the M-Flora Series combines organic inspiration with contemporary design. Each piece features flowing lines and nature-inspired curves, bringing a fresh and elegant aesthetic to your bathroom and kitchen spaces.",
    tagline: "Where nature inspires modern design.",
    heroImageUrl: "https://picsum.photos/seed/mflora1201/800/1000",
    style: "Natural",
    products: [
      {
        id: 1201,
        name: "M-Flora Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature M-Flora chrome finish.",
        imageUrl: "https://picsum.photos/seed/mflora1201/800/1000",
        altText: "M-Flora Bib Cock - polished chrome utility faucet",
        style: "Natural",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1201g1/800/1000",
          "https://picsum.photos/seed/mflora1201g2/800/1000"
        ]
      },
      {
        id: 1202,
        name: "M-Flora Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/mflora1202/800/1000",
        altText: "M-Flora Longbody Bib Cock - chrome faucet with extended body",
        style: "Natural",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1202g1/800/1000",
          "https://picsum.photos/seed/mflora1202g2/800/1000"
        ]
      },
      {
        id: 1203,
        name: "M-Flora Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/mflora1203/800/1000",
        altText: "M-Flora Angle Cock - polished chrome angle valve",
        style: "Natural",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1203g1/800/1000",
          "https://picsum.photos/seed/mflora1203g2/800/1000"
        ]
      },
      {
        id: 1204,
        name: "M-Flora Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/mflora1204/800/1000",
        altText: "M-Flora Pillar Cock - standard chrome basin faucet",
        style: "Natural",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1204g1/800/1000",
          "https://picsum.photos/seed/mflora1204g2/800/1000"
        ]
      },
      {
        id: 1205,
        name: "M-Flora Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/mflora1205/800/1000",
        altText: "M-Flora Washing Cock - chrome washing machine valve with connector",
        style: "Natural",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1205g1/800/1000",
          "https://picsum.photos/seed/mflora1205g2/800/1000"
        ]
      },
      {
        id: 1206,
        name: "M-Flora Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/mflora1206/800/1000",
        altText: "M-Flora Nozzle Cock - swivel spout chrome faucet",
        style: "Natural",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1206g1/800/1000",
          "https://picsum.photos/seed/mflora1206g2/800/1000"
        ]
      },
      {
        id: 1207,
        name: "M-Flora Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/mflora1207/800/1000",
        altText: "M-Flora Pillar Cock - chrome faucet without nickel base",
        style: "Natural",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1207g1/800/1000",
          "https://picsum.photos/seed/mflora1207g2/800/1000"
        ]
      },
      {
        id: 1208,
        name: "M-Flora Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/mflora1208/800/1000",
        altText: "M-Flora Concealed 1/2 inch stop cock for plumbing",
        style: "Natural",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1208g1/800/1000",
          "https://picsum.photos/seed/mflora1208g2/800/1000"
        ]
      },
      {
        id: 1209,
        name: "M-Flora Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/mflora1209/800/1000",
        altText: "M-Flora Concealed 3/4 inch stop cock for main water lines",
        style: "Natural",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1209g1/800/1000",
          "https://picsum.photos/seed/mflora1209g2/800/1000"
        ]
      },
      {
        id: 1210,
        name: "M-Flora Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/mflora1210/800/1000",
        altText: "M-Flora Sink Cock - high-arc chrome kitchen faucet",
        style: "Natural",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1210g1/800/1000",
          "https://picsum.photos/seed/mflora1210g2/800/1000"
        ]
      },
      {
        id: 1211,
        name: "M-Flora Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/mflora1211/800/1000",
        altText: "M-Flora Swan Neck - elegant high-arc chrome basin faucet",
        style: "Natural",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1211g1/800/1000",
          "https://picsum.photos/seed/mflora1211g2/800/1000"
        ]
      },
      {
        id: 1212,
        name: "M-Flora 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/mflora1212/800/1000",
        altText: "M-Flora 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Natural",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1212g1/800/1000",
          "https://picsum.photos/seed/mflora1212g2/800/1000"
        ]
      },
      {
        id: 1213,
        name: "M-Flora 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/mflora1213/800/1000",
        altText: "M-Flora 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Natural",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1213g1/800/1000",
          "https://picsum.photos/seed/mflora1213g2/800/1000"
        ]
      },
      {
        id: 1214,
        name: "M-Flora Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/mflora1214/800/1000",
        altText: "M-Flora Centre Hole - single-hole polished chrome basin mixer",
        style: "Natural",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1214g1/800/1000",
          "https://picsum.photos/seed/mflora1214g2/800/1000",
          "https://picsum.photos/seed/mflora1214g3/800/1000"
        ]
      },
      {
        id: 1215,
        name: "M-Flora Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/mflora1215/800/1000",
        altText: "M-Flora Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Natural",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1215g1/800/1000",
          "https://picsum.photos/seed/mflora1215g2/800/1000"
        ]
      },
      {
        id: 1216,
        name: "M-Flora Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/mflora1216/800/1000",
        altText: "M-Flora Wall Mixer without Band - concealed chrome shower mixer",
        style: "Natural",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1216g1/800/1000",
          "https://picsum.photos/seed/mflora1216g2/800/1000"
        ]
      },
      {
        id: 1217,
        name: "M-Flora Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/mflora1217/800/1000",
        altText: "M-Flora Wall Mixer with Band - concealed chrome shower mixer",
        style: "Natural",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/mflora1217g1/800/1000",
          "https://picsum.photos/seed/mflora1217g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 13,
    name: "Vignette Line",
    description: "The Vignette Line captures the essence of artistic expression in everyday fixtures. Each piece is designed as a focal point, blending subtle detailing with modern functionality to create a lasting impression in your home.",
    tagline: "Where art meets everyday life.",
    heroImageUrl: "https://picsum.photos/seed/vignette1301/800/1000",
    style: "Classic",
    products: [
      {
        id: 1301,
        name: "Vignette Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Vignette chrome finish.",
        imageUrl: "https://picsum.photos/seed/vignette1301/800/1000",
        altText: "Vignette Bib Cock - polished chrome utility faucet",
        style: "Classic",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1301g1/800/1000",
          "https://picsum.photos/seed/vignette1301g2/800/1000"
        ]
      },
      {
        id: 1302,
        name: "Vignette Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/vignette1302/800/1000",
        altText: "Vignette Longbody Bib Cock - chrome faucet with extended body",
        style: "Classic",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1302g1/800/1000",
          "https://picsum.photos/seed/vignette1302g2/800/1000"
        ]
      },
      {
        id: 1303,
        name: "Vignette Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/vignette1303/800/1000",
        altText: "Vignette Angle Cock - polished chrome angle valve",
        style: "Classic",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1303g1/800/1000",
          "https://picsum.photos/seed/vignette1303g2/800/1000"
        ]
      },
      {
        id: 1304,
        name: "Vignette Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/vignette1304/800/1000",
        altText: "Vignette Pillar Cock - standard chrome basin faucet",
        style: "Classic",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1304g1/800/1000",
          "https://picsum.photos/seed/vignette1304g2/800/1000"
        ]
      },
      {
        id: 1305,
        name: "Vignette Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/vignette1305/800/1000",
        altText: "Vignette Washing Cock - chrome washing machine valve with connector",
        style: "Classic",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1305g1/800/1000",
          "https://picsum.photos/seed/vignette1305g2/800/1000"
        ]
      },
      {
        id: 1306,
        name: "Vignette Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/vignette1306/800/1000",
        altText: "Vignette Nozzle Cock - swivel spout chrome faucet",
        style: "Classic",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1306g1/800/1000",
          "https://picsum.photos/seed/vignette1306g2/800/1000"
        ]
      },
      {
        id: 1307,
        name: "Vignette Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/vignette1307/800/1000",
        altText: "Vignette Pillar Cock - chrome faucet without nickel base",
        style: "Classic",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1307g1/800/1000",
          "https://picsum.photos/seed/vignette1307g2/800/1000"
        ]
      },
      {
        id: 1308,
        name: "Vignette Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/vignette1308/800/1000",
        altText: "Vignette Concealed 1/2 inch stop cock for plumbing",
        style: "Classic",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1308g1/800/1000",
          "https://picsum.photos/seed/vignette1308g2/800/1000"
        ]
      },
      {
        id: 1309,
        name: "Vignette Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/vignette1309/800/1000",
        altText: "Vignette Concealed 3/4 inch stop cock for main water lines",
        style: "Classic",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1309g1/800/1000",
          "https://picsum.photos/seed/vignette1309g2/800/1000"
        ]
      },
      {
        id: 1310,
        name: "Vignette Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/vignette1310/800/1000",
        altText: "Vignette Sink Cock - high-arc chrome kitchen faucet",
        style: "Classic",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1310g1/800/1000",
          "https://picsum.photos/seed/vignette1310g2/800/1000"
        ]
      },
      {
        id: 1311,
        name: "Vignette Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/vignette1311/800/1000",
        altText: "Vignette Swan Neck - elegant high-arc chrome basin faucet",
        style: "Classic",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1311g1/800/1000",
          "https://picsum.photos/seed/vignette1311g2/800/1000"
        ]
      },
      {
        id: 1312,
        name: "Vignette 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/vignette1312/800/1000",
        altText: "Vignette 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Classic",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1312g1/800/1000",
          "https://picsum.photos/seed/vignette1312g2/800/1000"
        ]
      },
      {
        id: 1313,
        name: "Vignette 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/vignette1313/800/1000",
        altText: "Vignette 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Classic",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1313g1/800/1000",
          "https://picsum.photos/seed/vignette1313g2/800/1000"
        ]
      },
      {
        id: 1314,
        name: "Vignette Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/vignette1314/800/1000",
        altText: "Vignette Centre Hole - single-hole polished chrome basin mixer",
        style: "Classic",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1314g1/800/1000",
          "https://picsum.photos/seed/vignette1314g2/800/1000",
          "https://picsum.photos/seed/vignette1314g3/800/1000"
        ]
      },
      {
        id: 1315,
        name: "Vignette Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/vignette1315/800/1000",
        altText: "Vignette Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Classic",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1315g1/800/1000",
          "https://picsum.photos/seed/vignette1315g2/800/1000"
        ]
      },
      {
        id: 1316,
        name: "Vignette Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/vignette1316/800/1000",
        altText: "Vignette Wall Mixer without Band - concealed chrome shower mixer",
        style: "Classic",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1316g1/800/1000",
          "https://picsum.photos/seed/vignette1316g2/800/1000"
        ]
      },
      {
        id: 1317,
        name: "Vignette Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/vignette1317/800/1000",
        altText: "Vignette Wall Mixer with Band - concealed chrome shower mixer",
        style: "Classic",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/vignette1317g1/800/1000",
          "https://picsum.photos/seed/vignette1317g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 14,
    name: "Opel Series",
    description: "Sleek, sophisticated, and effortlessly modern. The Opel Series embodies minimalist design principles with its clean lines and refined silhouette, bringing a sense of calm order and understated elegance to contemporary bathrooms and kitchens.",
    tagline: "Refined simplicity. Enduring appeal.",
    heroImageUrl: "https://picsum.photos/seed/opel1401/800/1000",
    style: "Avant-Garde",
    products: [
      {
        id: 1401,
        name: "Opel Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Opel chrome finish.",
        imageUrl: "https://picsum.photos/seed/opel1401/800/1000",
        altText: "Opel Bib Cock - polished chrome utility faucet",
        style: "Avant-Garde",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1401g1/800/1000",
          "https://picsum.photos/seed/opel1401g2/800/1000"
        ]
      },
      {
        id: 1402,
        name: "Opel Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/opel1402/800/1000",
        altText: "Opel Longbody Bib Cock - chrome faucet with extended body",
        style: "Avant-Garde",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1402g1/800/1000",
          "https://picsum.photos/seed/opel1402g2/800/1000"
        ]
      },
      {
        id: 1403,
        name: "Opel Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/opel1403/800/1000",
        altText: "Opel Angle Cock - polished chrome angle valve",
        style: "Avant-Garde",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1403g1/800/1000",
          "https://picsum.photos/seed/opel1403g2/800/1000"
        ]
      },
      {
        id: 1404,
        name: "Opel Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/opel1404/800/1000",
        altText: "Opel Pillar Cock - standard chrome basin faucet",
        style: "Avant-Garde",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1404g1/800/1000",
          "https://picsum.photos/seed/opel1404g2/800/1000"
        ]
      },
      {
        id: 1405,
        name: "Opel Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/opel1405/800/1000",
        altText: "Opel Washing Cock - chrome washing machine valve with connector",
        style: "Avant-Garde",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1405g1/800/1000",
          "https://picsum.photos/seed/opel1405g2/800/1000"
        ]
      },
      {
        id: 1406,
        name: "Opel Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/opel1406/800/1000",
        altText: "Opel Nozzle Cock - swivel spout chrome faucet",
        style: "Avant-Garde",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1406g1/800/1000",
          "https://picsum.photos/seed/opel1406g2/800/1000"
        ]
      },
      {
        id: 1407,
        name: "Opel Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/opel1407/800/1000",
        altText: "Opel Pillar Cock - chrome faucet without nickel base",
        style: "Avant-Garde",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1407g1/800/1000",
          "https://picsum.photos/seed/opel1407g2/800/1000"
        ]
      },
      {
        id: 1408,
        name: "Opel Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/opel1408/800/1000",
        altText: "Opel Concealed 1/2 inch stop cock for plumbing",
        style: "Avant-Garde",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1408g1/800/1000",
          "https://picsum.photos/seed/opel1408g2/800/1000"
        ]
      },
      {
        id: 1409,
        name: "Opel Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/opel1409/800/1000",
        altText: "Opel Concealed 3/4 inch stop cock for main water lines",
        style: "Avant-Garde",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1409g1/800/1000",
          "https://picsum.photos/seed/opel1409g2/800/1000"
        ]
      },
      {
        id: 1410,
        name: "Opel Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/opel1410/800/1000",
        altText: "Opel Sink Cock - high-arc chrome kitchen faucet",
        style: "Avant-Garde",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1410g1/800/1000",
          "https://picsum.photos/seed/opel1410g2/800/1000"
        ]
      },
      {
        id: 1411,
        name: "Opel Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/opel1411/800/1000",
        altText: "Opel Swan Neck - elegant high-arc chrome basin faucet",
        style: "Avant-Garde",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1411g1/800/1000",
          "https://picsum.photos/seed/opel1411g2/800/1000"
        ]
      },
      {
        id: 1412,
        name: "Opel 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/opel1412/800/1000",
        altText: "Opel 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Avant-Garde",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1412g1/800/1000",
          "https://picsum.photos/seed/opel1412g2/800/1000"
        ]
      },
      {
        id: 1413,
        name: "Opel 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/opel1413/800/1000",
        altText: "Opel 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Avant-Garde",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1413g1/800/1000",
          "https://picsum.photos/seed/opel1413g2/800/1000"
        ]
      },
      {
        id: 1414,
        name: "Opel Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/opel1414/800/1000",
        altText: "Opel Centre Hole - single-hole polished chrome basin mixer",
        style: "Avant-Garde",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1414g1/800/1000",
          "https://picsum.photos/seed/opel1414g2/800/1000",
          "https://picsum.photos/seed/opel1414g3/800/1000"
        ]
      },
      {
        id: 1415,
        name: "Opel Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/opel1415/800/1000",
        altText: "Opel Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Avant-Garde",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1415g1/800/1000",
          "https://picsum.photos/seed/opel1415g2/800/1000"
        ]
      },
      {
        id: 1416,
        name: "Opel Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/opel1416/800/1000",
        altText: "Opel Wall Mixer without Band - concealed chrome shower mixer",
        style: "Avant-Garde",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1416g1/800/1000",
          "https://picsum.photos/seed/opel1416g2/800/1000"
        ]
      },
      {
        id: 1417,
        name: "Opel Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/opel1417/800/1000",
        altText: "Opel Wall Mixer with Band - concealed chrome shower mixer",
        style: "Avant-Garde",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/opel1417g1/800/1000",
          "https://picsum.photos/seed/opel1417g2/800/1000"
        ]
      }
    ]
  },
  {
    id: 15,
    name: "Croma Collection",
    description: "Vibrant, expressive, and full of character. The Croma Collection celebrates color and chrome in perfect harmony, offering fixtures that add a distinctive pop of personality to contemporary bathrooms and kitchens while maintaining exceptional functionality.",
    tagline: "Express yourself. Everyday.",
    heroImageUrl: "https://picsum.photos/seed/croma1501/800/1000",
    style: "Modern",
    products: [
      {
        id: 1501,
        name: "Croma Bib Cock",
        description: "A durable and functional bib cock for utility areas, featuring a smooth quarter-turn operation and the signature Croma chrome finish.",
        imageUrl: "https://picsum.photos/seed/croma1501/800/1000",
        altText: "Croma Bib Cock - polished chrome utility faucet",
        style: "Modern",
        price: 75.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1501g1/800/1000",
          "https://picsum.photos/seed/croma1501g2/800/1000"
        ]
      },
      {
        id: 1502,
        name: "Croma Longbody",
        description: "An extended body bib cock designed for installations where additional reach is required, maintaining a clean and functional design.",
        imageUrl: "https://picsum.photos/seed/croma1502/800/1000",
        altText: "Croma Longbody Bib Cock - chrome faucet with extended body",
        style: "Modern",
        price: 95.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 5.5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1502g1/800/1000",
          "https://picsum.photos/seed/croma1502g2/800/1000"
        ]
      },
      {
        id: 1503,
        name: "Croma Angle Cock",
        description: "A precision-engineered angle cock for controlling water flow to fixtures, featuring a durable ceramic disc for drip-free performance.",
        imageUrl: "https://picsum.photos/seed/croma1503/800/1000",
        altText: "Croma Angle Cock - polished chrome angle valve",
        style: "Modern",
        price: 60.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 2.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1503g1/800/1000",
          "https://picsum.photos/seed/croma1503g2/800/1000"
        ]
      },
      {
        id: 1504,
        name: "Croma Piller Cock",
        description: "A classic and elegant pillar cock for washbasins, offering reliable performance with a sleek, low-profile design.",
        imageUrl: "https://picsum.photos/seed/croma1504/800/1000",
        altText: "Croma Pillar Cock - standard chrome basin faucet",
        style: "Modern",
        price: 115.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1504g1/800/1000",
          "https://picsum.photos/seed/croma1504g2/800/1000"
        ]
      },
      {
        id: 1505,
        name: "Croma Washing Cock",
        description: "A practical washing machine cock with a snap-on connector, designed for easy installation and reliable water shut-off.",
        imageUrl: "https://picsum.photos/seed/croma1505/800/1000",
        altText: "Croma Washing Cock - chrome washing machine valve with connector",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1505g1/800/1000",
          "https://picsum.photos/seed/croma1505g2/800/1000"
        ]
      },
      {
        id: 1506,
        name: "Croma Nozzle Cock",
        description: "A versatile nozzle cock with a swivel spout, ideal for kitchen or utility sinks where directed flow is needed.",
        imageUrl: "https://picsum.photos/seed/croma1506/800/1000",
        altText: "Croma Nozzle Cock - swivel spout chrome faucet",
        style: "Modern",
        price: 130.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 4\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1506g1/800/1000",
          "https://picsum.photos/seed/croma1506g2/800/1000"
        ]
      },
      {
        id: 1507,
        name: "Croma Piller Cock HO NICK",
        description: "An elegant pillar cock featuring a chrome finish without a nickel base, offering a distinct pure-chrome aesthetic for washbasins.",
        imageUrl: "https://picsum.photos/seed/croma1507/800/1000",
        altText: "Croma Pillar Cock - chrome faucet without nickel base",
        style: "Modern",
        price: 120.00,
        specifications: [
          { label: "Material", value: "Polished Chrome (No Nickel)" },
          { label: "Dimensions", value: "5\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, two-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1507g1/800/1000",
          "https://picsum.photos/seed/croma1507g2/800/1000"
        ]
      },
      {
        id: 1508,
        name: "Croma Concealed 1/2",
        description: "A 1/2-inch concealed body stop cock for under-sink installation, providing reliable water control while remaining hidden from view.",
        imageUrl: "https://picsum.photos/seed/croma1508/800/1000",
        altText: "Croma Concealed 1/2 inch stop cock for plumbing",
        style: "Modern",
        price: 50.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "2.5\" H x 2.5\" W" },
          { label: "Connection Size", value: "1/2 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1508g1/800/1000",
          "https://picsum.photos/seed/croma1508g2/800/1000"
        ]
      },
      {
        id: 1509,
        name: "Croma Concealed 3/4",
        description: "A heavy-duty 3/4-inch concealed stop cock designed for higher flow applications, ensuring durable and hidden water line control.",
        imageUrl: "https://picsum.photos/seed/croma1509/800/1000",
        altText: "Croma Concealed 3/4 inch stop cock for main water lines",
        style: "Modern",
        price: 70.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "3\" H x 3\" W" },
          { label: "Connection Size", value: "3/4 inch" },
          { label: "Installation", value: "In-line, Concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1509g1/800/1000",
          "https://picsum.photos/seed/croma1509g2/800/1000"
        ]
      },
      {
        id: 1510,
        name: "Croma Sink Cock",
        description: "A functional and sturdy sink cock for kitchen areas, featuring a high-arc design to accommodate large pots and pans.",
        imageUrl: "https://picsum.photos/seed/croma1510/800/1000",
        altText: "Croma Sink Cock - high-arc chrome kitchen faucet",
        style: "Modern",
        price: 150.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "8\" H x 5\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1510g1/800/1000",
          "https://picsum.photos/seed/croma1510g2/800/1000"
        ]
      },
      {
        id: 1511,
        name: "Croma Swan Neck",
        description: "An elegant swan neck faucet that adds a touch of sophistication to any bathroom. Its graceful curve and polished finish make it a timeless choice.",
        imageUrl: "https://picsum.photos/seed/croma1511/800/1000",
        altText: "Croma Swan Neck - elegant high-arc chrome basin faucet",
        style: "Modern",
        price: 210.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 4\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Deck-mounted, single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1511g1/800/1000",
          "https://picsum.photos/seed/croma1511g2/800/1000"
        ]
      },
      {
        id: 1512,
        name: "Croma 2IN1 BIB COCK",
        description: "An innovative bib cock with an integrated outlet for a washing machine or hose, combining two functions in one sleek unit.",
        imageUrl: "https://picsum.photos/seed/croma1512/800/1000",
        altText: "Croma 2in1 Bib Cock - utility faucet with washing machine outlet",
        style: "Modern",
        price: 110.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 5\" W" },
          { label: "Flow Rate", value: "1.5 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1512g1/800/1000",
          "https://picsum.photos/seed/croma1512g2/800/1000"
        ]
      },
      {
        id: 1513,
        name: "Croma 2IN1 ANGLE COCK",
        description: "A space-saving angle cock with a secondary outlet, perfect for connecting a washing machine or dishwasher directly.",
        imageUrl: "https://picsum.photos/seed/croma1513/800/1000",
        altText: "Croma 2in1 Angle Cock - angle valve with washing machine outlet",
        style: "Modern",
        price: 90.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "4\" H x 3.5\" W" },
          { label: "Flow Rate", value: "1.0 GPM" },
          { label: "Installation", value: "Wall-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1513g1/800/1000",
          "https://picsum.photos/seed/croma1513g2/800/1000"
        ]
      },
      {
        id: 1514,
        name: "Croma Centre Hole",
        description: "A single-hole basin mixer that brings clean lines and minimalist beauty to your bathroom countertop.",
        imageUrl: "https://picsum.photos/seed/croma1514/800/1000",
        altText: "Croma Centre Hole - single-hole polished chrome basin mixer",
        style: "Modern",
        price: 185.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "10\" H x 2\" W" },
          { label: "Flow Rate", value: "1.2 GPM" },
          { label: "Installation", value: "Single-hole" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1514g1/800/1000",
          "https://picsum.photos/seed/croma1514g2/800/1000",
          "https://picsum.photos/seed/croma1514g3/800/1000"
        ]
      },
      {
        id: 1515,
        name: "Croma Sink Mixer",
        description: "A versatile single-lever sink mixer with a swivel spout, designed for modern kitchens to handle multiple tasks with ease.",
        imageUrl: "https://picsum.photos/seed/croma1515/800/1000",
        altText: "Croma Sink Mixer - polished chrome single-lever kitchen faucet",
        style: "Modern",
        price: 225.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "12\" H x 8\" W" },
          { label: "Flow Rate", value: "1.8 GPM" },
          { label: "Installation", value: "Single-hole or deck-mounted" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1515g1/800/1000",
          "https://picsum.photos/seed/croma1515g2/800/1000"
        ]
      },
      {
        id: 1516,
        name: "Croma Wall Mixer W/O BAND",
        description: "A concealed wall mixer that brings clean lines and minimalist beauty to your shower space, featuring a handle without a band.",
        imageUrl: "https://picsum.photos/seed/croma1516/800/1000",
        altText: "Croma Wall Mixer without Band - concealed chrome shower mixer",
        style: "Modern",
        price: 165.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1516g1/800/1000",
          "https://picsum.photos/seed/croma1516g2/800/1000"
        ]
      },
      {
        id: 1517,
        name: "Croma Wall Mixer W/ BAND",
        description: "A concealed wall mixer with a decorative band, offering the same minimalist functionality with an added design detail.",
        imageUrl: "https://picsum.photos/seed/croma1517/800/1000",
        altText: "Croma Wall Mixer with Band - concealed chrome shower mixer",
        style: "Modern",
        price: 175.00,
        specifications: [
          { label: "Material", value: "Polished Chrome" },
          { label: "Dimensions", value: "6\" H x 6.5\" W" },
          { label: "Flow Rate", value: "2.0 GPM" },
          { label: "Installation", value: "Wall-mounted, concealed" }
        ],
        galleryImages: [
          "https://picsum.photos/seed/croma1517g1/800/1000",
          "https://picsum.photos/seed/croma1517g2/800/1000"
        ]
      }
    ]
  },
];

// Flat list of all products across all collections (for backward compatibility and search)
export const PRODUCTS: Product[] = COLLECTIONS.flatMap(c => c.products);