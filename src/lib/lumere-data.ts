import chand from "@/assets/collection-chandeliers.jpg";
import pend from "@/assets/collection-pendants.jpg";
import wall from "@/assets/collection-wall.jpg";
import floor from "@/assets/collection-floor.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export type Category = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  count: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "chandeliers",
    title: "Luxury Chandeliers",
    short: "Crystal, brass, sculptural centrepieces.",
    intro:
      "Centrepiece fixtures drawn at architectural scale — for foyers, ballrooms and double-height living rooms.",
    count: "24 pieces",
    image: chand,
  },
  {
    slug: "pendants",
    title: "Pendant Lighting",
    short: "Single drops and grouped compositions.",
    intro:
      "Quiet pendants suspended over islands, dining tables and stairwells — drawn in single, uninterrupted gestures.",
    count: "36 pieces",
    image: pend,
  },
  {
    slug: "wall",
    title: "Wall Sconces",
    short: "Bracketed light, intimate and architectural.",
    intro:
      "Sconces are the punctuation of an interior — paired along corridors, bracketed beside beds, set against stone.",
    count: "18 pieces",
    image: wall,
  },
  {
    slug: "ceiling",
    title: "Ceiling Lights",
    short: "Flush, semi-flush and recessed.",
    intro:
      "For lower ceilings, hallways and rooms that prefer the ceiling to remain quiet — without losing presence.",
    count: "22 pieces",
    image: chand,
  },
  {
    slug: "floor-table",
    title: "Floor & Table Lamps",
    short: "Sculptural objects of light.",
    intro:
      "Portable architecture. Sculptural floor lamps and table lamps in linen, brass, alabaster and hand-cut crystal.",
    count: "29 pieces",
    image: floor,
  },
  {
    slug: "decor",
    title: "Decorative Lighting",
    short: "Objects, sculptures and lit accents.",
    intro:
      "Limited editions and decorative pieces — lit sculptures, table objects and architectural accents.",
    count: "14 pieces",
    image: wall,
  },
  {
    slug: "outdoor",
    title: "Outdoor Luxury Lighting",
    short: "Lanterns, pillars and architectural exteriors.",
    intro:
      "Weathered brass, marine-grade steel and hand-cast stone — lighting for terraces, gardens, entrance courts and pool surrounds.",
    count: "12 pieces",
    image: pend,
  },
];

export type Product = {
  code: string;
  slug: string;
  name: string;
  collection: string;
  finish: string;
  price: string;
  img: string;
  images: string[];
  category: string;
  badge?: "Featured" | "New" | "Limited";
  description: string;
  dimensions: string;
  materials: string;
  finishOptions: string[];
  bulbDetails: string;
  installationGuide: string;
};

export const PRODUCTS: Product[] = [
  {
    code: "AUR-014",
    slug: "aurelia-empire",
    name: "Aurelia Empire",
    collection: "Crystal",
    finish: "Aged Brass",
    price: "On Request",
    img: p1,
    images: [p1, p2, p3, p4],
    category: "chandeliers",
    badge: "Featured",
    description:
      "The Aurelia Empire is a grand crystal chandelier drawn at architectural scale. Each pendant is hand-cut and polished by master artisans, suspended from a solid-brass armature finished in aged brass. Designed for foyers, ballrooms and double-height living rooms where light must be both presence and architecture.",
    dimensions: "Ø 120 cm · H 160 cm · Drop adjustable to 400 cm",
    materials: "Solid brass · Hand-cut crystal · Hand-blown glass",
    finishOptions: ["Aged Brass", "Polished Brass", "Burnished Gold"],
    bulbDetails: "E14 × 24 · Max 40W per lamp · LED compatible · Dimmable",
    installationGuide:
      "Requires structural ceiling anchor rated to 80 kg minimum. Drop height customisable at order. Full installation drawings and technical specifications provided on purchase. On-site supervision available in select cities.",
  },
  {
    code: "ORB-208",
    slug: "orbit-pendant",
    name: "Orbit Pendant",
    collection: "Modern",
    finish: "Brushed Brass · Opal",
    price: "$1,840",
    img: p2,
    images: [p2, p1, p4, p3],
    category: "pendants",
    badge: "New",
    description:
      "The Orbit is a single-drop pendant in hand-blown opal glass, suspended from a brushed-brass disc. Designed for kitchen islands, dining tables and intimate reading corners. Available as single, pair or linear trio — the compositions are specified at order.",
    dimensions: "Ø 32 cm · H 28 cm · Drop adjustable to 300 cm",
    materials: "Hand-blown opal glass · Solid brass",
    finishOptions: ["Brushed Brass", "Polished Brass", "Blackened Steel"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide:
      "Single-point ceiling rose included. Drop length adjustable on site. Junction box required (not included). Wiring diagram enclosed.",
  },
  {
    code: "COU-077",
    slug: "couture-table-lamp",
    name: "Couture Table Lamp",
    collection: "Atelier",
    finish: "Linen · Brass",
    price: "$1,240",
    img: p3,
    images: [p3, p4, p1, p2],
    category: "floor-table",
    description:
      "A tall table lamp with a hand-turned brass stem and a hand-sewn linen shade. The Couture is part of the Atelier series — portable pieces designed to be moved through a room like furniture. The shade is made by a single atelier in Lyon that has sewn lampshades for three generations.",
    dimensions: "Base Ø 18 cm · H 72 cm · Shade Ø 40 cm",
    materials: "Solid brass · Hand-sewn linen shade · Marble base",
    finishOptions: ["Natural Linen · Aged Brass", "Ivory Linen · Polished Brass"],
    bulbDetails: "E27 · Max 40W · LED compatible",
    installationGuide:
      "Plug-in. Standard UK / EU / US plug supplied at dispatch. Dimmer switch compatible.",
  },
  {
    code: "CAR-302",
    slug: "carrara-column",
    name: "Carrara Column",
    collection: "Stone Series",
    finish: "Carrara · Brass",
    price: "$2,180",
    img: p4,
    images: [p4, p3, p2, p1],
    category: "floor-table",
    badge: "Limited",
    description:
      "A floor lamp carved from a single column of Carrara marble, capped in solid brass. The Carrara Column is a limited edition piece — twenty are produced each season, numbered and signed by the house. The marble is selected by hand from a single quarry in Tuscany.",
    dimensions: "Base Ø 24 cm · H 165 cm · Shade Ø 45 cm",
    materials: "Carrara marble · Solid brass · Hand-sewn linen shade",
    finishOptions: ["Carrara White · Aged Brass", "Nero Marquina · Blackened Steel"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide:
      "Plug-in. Weight 32 kg — positioning assistance recommended. Standard EU / UK / US plug supplied.",
  },
  {
    code: "HAL-119",
    slug: "halo-sconce",
    name: "Halo Sconce",
    collection: "Architectural",
    finish: "Antique Brass",
    price: "$960",
    img: p2,
    images: [p2, p3, p4, p1],
    category: "wall",
    description:
      "A paired wall sconce in solid brass with a circular shade of hand-blown glass. The Halo is designed to flank mirrors, beds and fireplace surrounds — equally at home in a bedroom or a grand hallway. The glass is mouth-blown in a workshop outside Murano.",
    dimensions: "W 22 cm · H 34 cm · Projection 18 cm",
    materials: "Solid brass · Hand-blown glass",
    finishOptions: ["Antique Brass", "Polished Brass", "Brushed Nickel"],
    bulbDetails: "E14 · Max 40W · LED compatible",
    installationGuide:
      "Hard-wired. Back plate Ø 10 cm. Installation template and fixings included. Electrician required.",
  },
  {
    code: "VEL-441",
    slug: "velluto-chandelier",
    name: "Velluto Chandelier",
    collection: "Crystal",
    finish: "Patinated Brass",
    price: "On Request",
    img: p1,
    images: [p1, p3, p4, p2],
    category: "chandeliers",
    badge: "Featured",
    description:
      "The Velluto is a six-arm chandelier in patinated brass with hand-cut crystal drops. Designed for dining rooms and entrance halls — a quieter, more intimate presence than the Aurelia Empire. Each arm is individually shaped and balanced by hand.",
    dimensions: "Ø 90 cm · H 80 cm · Drop adjustable to 300 cm",
    materials: "Solid brass · Hand-cut crystal",
    finishOptions: ["Patinated Brass", "Aged Gold", "Matte Black · Brass Detail"],
    bulbDetails: "E14 × 6 · Max 40W per lamp · LED compatible · Dimmable",
    installationGuide:
      "Requires structural ceiling anchor rated to 20 kg minimum. Drop height customisable at order. Full installation drawings provided.",
  },
  {
    code: "LIN-052",
    slug: "linea-linear-pendant",
    name: "Linea Linear Pendant",
    collection: "Modern",
    finish: "Blackened Steel",
    price: "$2,640",
    img: p2,
    images: [p2, p4, p1, p3],
    category: "pendants",
    description:
      "A 120 cm linear pendant in blackened steel with a continuous opal diffuser. Designed for long dining tables, kitchen islands and architectural corridors. Can be suspended as single or paired in a grid — compositions specified at order.",
    dimensions: "L 120 cm · W 8 cm · H 6 cm · Drop adjustable to 300 cm",
    materials: "Blackened steel · Opal glass diffuser · Solid brass fittings",
    finishOptions: ["Blackened Steel", "Brushed Brass", "Polished Chrome"],
    bulbDetails: "Integrated LED · 3000K warm white · 2400 lm · Dimmable",
    installationGuide:
      "Two-point ceiling rose. Electrical supply from centre. Full wiring diagram and fixing template enclosed.",
  },
  {
    code: "ALA-088",
    slug: "alabaster-disk",
    name: "Alabaster Disk",
    collection: "Stone Series",
    finish: "Alabaster · Brass",
    price: "$1,420",
    img: p3,
    images: [p3, p1, p2, p4],
    category: "ceiling",
    badge: "Featured",
    description:
      "A semi-flush ceiling light carved from a single disk of Spanish alabaster, edged in solid brass. The Alabaster Disk glows warm and milky when lit — a quiet, architectural presence for bedrooms, libraries and dining rooms with lower ceilings.",
    dimensions: "Ø 55 cm · H 14 cm",
    materials: "Spanish alabaster · Solid brass",
    finishOptions: ["Alabaster Natural · Aged Brass", "Alabaster Honey · Polished Brass"],
    bulbDetails: "E27 × 3 · Max 40W per lamp · LED compatible",
    installationGuide:
      "Semi-flush. Requires standard ceiling rose. Weight 12 kg — rated M10 fixing required. Template and fixings included.",
  },
  {
    code: "NOC-211",
    slug: "notturno-object",
    name: "Notturno Object",
    collection: "Atelier",
    finish: "Bronze · Glass",
    price: "$1,980",
    img: p4,
    images: [p4, p2, p3, p1],
    category: "decor",
    badge: "Limited",
    description:
      "The Notturno is a decorative lit sculpture in cast bronze and hand-blown smoked glass. Produced in editions of ten, each piece is hand-finished and individually numbered. Not a lamp — an object that happens to give light. A piece for shelves, consoles and low tables where the presence of the object matters as much as the illumination.",
    dimensions: "W 28 cm · D 18 cm · H 42 cm",
    materials: "Cast bronze · Hand-blown smoked glass",
    finishOptions: ["Dark Bronze · Smoked Glass", "Patinated Bronze · Clear Glass"],
    bulbDetails: "E14 · Max 25W · LED compatible",
    installationGuide:
      "Plug-in. Standard EU / UK / US plug supplied. No installation required.",
  },
];

export function whatsappHref(
  p: Pick<Product, "name" | "code" | "price">,
  origin = "",
) {
  const text =
    `Hello,%0A%0AI'm interested in this lighting piece.%0A%0A` +
    `Product: ${encodeURIComponent(p.name)}%0A` +
    `Code: ${p.code}%0A` +
    `Price: ${encodeURIComponent(p.price)}` +
    (origin ? `%0AURL: ${encodeURIComponent(origin)}` : "") +
    `%0A%0APlease share more details.`;
  return `https://wa.me/000000000?text=${text}`;
}
