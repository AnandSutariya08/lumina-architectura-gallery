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
];

export type Product = {
  code: string;
  name: string;
  collection: string;
  finish: string;
  price: string;
  img: string;
  category: string;
};

export const PRODUCTS: Product[] = [
  { code: "AUR-014", name: "Aurelia Empire", collection: "Crystal", finish: "Aged Brass", price: "On Request", img: p1, category: "chandeliers" },
  { code: "ORB-208", name: "Orbit Pendant", collection: "Modern", finish: "Brushed Brass · Opal", price: "$1,840", img: p2, category: "pendants" },
  { code: "COU-077", name: "Couture Table Lamp", collection: "Atelier", finish: "Linen · Brass", price: "$1,240", img: p3, category: "floor-table" },
  { code: "CAR-302", name: "Carrara Column", collection: "Stone Series", finish: "Carrara · Brass", price: "$2,180", img: p4, category: "floor-table" },
  { code: "HAL-119", name: "Halo Sconce", collection: "Architectural", finish: "Antique Brass", price: "$960", img: p2, category: "wall" },
  { code: "VEL-441", name: "Velluto Chandelier", collection: "Crystal", finish: "Patinated Brass", price: "On Request", img: p1, category: "chandeliers" },
  { code: "LIN-052", name: "Linea Linear Pendant", collection: "Modern", finish: "Blackened Steel", price: "$2,640", img: p2, category: "pendants" },
  { code: "ALA-088", name: "Alabaster Disk", collection: "Stone Series", finish: "Alabaster · Brass", price: "$1,420", img: p3, category: "ceiling" },
  { code: "NOC-211", name: "Notturno Object", collection: "Atelier", finish: "Bronze · Glass", price: "$1,980", img: p4, category: "decor" },
];

export function whatsappHref(p: Pick<Product, "name" | "code" | "price">, origin = "") {
  const text =
    `Hello,%0A%0AI'm interested in this lighting piece.%0A%0A` +
    `Product: ${encodeURIComponent(p.name)}%0A` +
    `Code: ${p.code}%0A` +
    `Price: ${encodeURIComponent(p.price)}` +
    (origin ? `%0AURL: ${encodeURIComponent(origin)}` : "") +
    `%0A%0APlease share more details.`;
  return `https://wa.me/000000000?text=${text}`;
}
