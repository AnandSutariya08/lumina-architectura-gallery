import chand from "@/assets/collection-chandeliers.jpg";
import pend from "@/assets/collection-pendants.jpg";
import wall from "@/assets/collection-wall.jpg";
import floor from "@/assets/collection-floor.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";
import crystal from "@/assets/signature-crystal.jpg";
import modern from "@/assets/signature-modern.jpg";
import aboutImg from "@/assets/about.jpg";
import contactImg from "@/assets/contact.jpg";

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
  /* ── CHANDELIERS ─────────────────────────────────────────── */
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
      "Requires structural ceiling anchor rated to 80 kg minimum. Drop height customisable at order. Full installation drawings provided on purchase.",
  },
  {
    code: "VEL-441",
    slug: "velluto-chandelier",
    name: "Velluto Chandelier",
    collection: "Crystal",
    finish: "Patinated Brass",
    price: "On Request",
    img: crystal,
    images: [crystal, p1, p3, p4],
    category: "chandeliers",
    badge: "Featured",
    description:
      "The Velluto is a six-arm chandelier in patinated brass with hand-cut crystal drops. Designed for dining rooms and entrance halls — a quieter, more intimate presence than the Aurelia Empire.",
    dimensions: "Ø 90 cm · H 80 cm · Drop adjustable to 300 cm",
    materials: "Solid brass · Hand-cut crystal",
    finishOptions: ["Patinated Brass", "Aged Gold", "Matte Black · Brass Detail"],
    bulbDetails: "E14 × 6 · Max 40W per lamp · LED compatible · Dimmable",
    installationGuide:
      "Requires structural ceiling anchor rated to 20 kg minimum. Drop height customisable at order.",
  },
  {
    code: "ROT-033",
    slug: "rotunda-grand",
    name: "Rotunda Grand",
    collection: "Crystal",
    finish: "Polished Brass",
    price: "On Request",
    img: p3,
    images: [p3, p1, proj1, p4],
    category: "chandeliers",
    badge: "Limited",
    description:
      "A monumental chandelier of concentric brass rings, each set with hand-dropped crystal. The Rotunda Grand is designed for entrance courts, hotel lobbies and double-height residential spaces.",
    dimensions: "Ø 160 cm · H 200 cm · Drop adjustable to 500 cm",
    materials: "Solid brass · Hand-cut crystal · Steel armature",
    finishOptions: ["Polished Brass", "Aged Brass", "Satin Nickel"],
    bulbDetails: "E14 × 36 · Max 40W per lamp · LED compatible · Dimmable",
    installationGuide:
      "Requires structural anchor rated to 150 kg. On-site supervision available in select cities.",
  },
  {
    code: "SOL-097",
    slug: "soleil-branch",
    name: "Soleil Branch",
    collection: "Modern",
    finish: "Burnished Gold",
    price: "$4,200",
    img: proj1,
    images: [proj1, p2, modern, p4],
    category: "chandeliers",
    badge: "New",
    description:
      "Eighteen branching arms in burnished gold, each terminating in a hand-blown smoked globe. The Soleil is an organic counterpoint to rigid architectural ceilings — best set against plaster or stone.",
    dimensions: "Ø 110 cm · H 70 cm · Drop adjustable to 350 cm",
    materials: "Solid brass · Hand-blown smoked glass",
    finishOptions: ["Burnished Gold", "Blackened Steel · Brass Tips"],
    bulbDetails: "E14 × 18 · Max 25W per lamp · LED compatible",
    installationGuide:
      "Requires structural ceiling anchor rated to 45 kg. Drop height customisable at order.",
  },

  /* ── PENDANTS ─────────────────────────────────────────────── */
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
      "The Orbit is a single-drop pendant in hand-blown opal glass, suspended from a brushed-brass disc. Available as single, pair or linear trio.",
    dimensions: "Ø 32 cm · H 28 cm · Drop adjustable to 300 cm",
    materials: "Hand-blown opal glass · Solid brass",
    finishOptions: ["Brushed Brass", "Polished Brass", "Blackened Steel"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide:
      "Single-point ceiling rose included. Drop length adjustable on site.",
  },
  {
    code: "LIN-052",
    slug: "linea-linear-pendant",
    name: "Linea Linear Pendant",
    collection: "Modern",
    finish: "Blackened Steel",
    price: "$2,640",
    img: modern,
    images: [modern, p2, p4, p1],
    category: "pendants",
    description:
      "A 120 cm linear pendant in blackened steel with a continuous opal diffuser. Designed for long dining tables, kitchen islands and architectural corridors.",
    dimensions: "L 120 cm · W 8 cm · H 6 cm · Drop adjustable to 300 cm",
    materials: "Blackened steel · Opal glass diffuser · Solid brass fittings",
    finishOptions: ["Blackened Steel", "Brushed Brass", "Polished Chrome"],
    bulbDetails: "Integrated LED · 3000K warm white · 2400 lm · Dimmable",
    installationGuide:
      "Two-point ceiling rose. Electrical supply from centre. Full wiring diagram enclosed.",
  },
  {
    code: "MED-174",
    slug: "medusa-cluster",
    name: "Medusa Cluster",
    collection: "Atelier",
    finish: "Aged Brass · Smoked Glass",
    price: "$3,100",
    img: proj2,
    images: [proj2, p1, p3, modern],
    category: "pendants",
    badge: "Limited",
    description:
      "A cluster of twelve glass globes in smoked amber, suspended at varying heights from a solid brass canopy. The Medusa is specified as a single composition — each installation is unique.",
    dimensions: "Canopy Ø 40 cm · Cluster H 60–120 cm · Drop adjustable to 350 cm",
    materials: "Hand-blown smoked glass · Solid brass",
    finishOptions: ["Aged Brass · Smoked Amber", "Polished Brass · Clear Glass"],
    bulbDetails: "E14 × 12 · Max 25W per lamp · LED compatible",
    installationGuide:
      "Single canopy. Requires junction box. Globe arrangement pre-set at factory.",
  },
  {
    code: "CON-319",
    slug: "cone-drop",
    name: "Cone Drop",
    collection: "Architectural",
    finish: "Matte White · Brass",
    price: "$980",
    img: p4,
    images: [p4, p2, proj3, p1],
    category: "pendants",
    description:
      "A minimal cone pendant in powder-coated steel with a brass detail at the crown. Designed to be specified in multiples — over kitchen islands, dining tables or in stairwells.",
    dimensions: "Ø 24 cm · H 32 cm · Drop adjustable to 300 cm",
    materials: "Powder-coated steel · Solid brass detail",
    finishOptions: ["Matte White · Brass", "Matte Black · Brass", "Sage Green · Brass"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide: "Single-point ceiling rose. Drop adjustable on site.",
  },

  /* ── WALL SCONCES ─────────────────────────────────────────── */
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
      "A paired wall sconce in solid brass with a circular shade of hand-blown glass. Designed to flank mirrors, beds and fireplace surrounds.",
    dimensions: "W 22 cm · H 34 cm · Projection 18 cm",
    materials: "Solid brass · Hand-blown glass",
    finishOptions: ["Antique Brass", "Polished Brass", "Brushed Nickel"],
    bulbDetails: "E14 · Max 40W · LED compatible",
    installationGuide:
      "Hard-wired. Back plate Ø 10 cm. Installation template and fixings included.",
  },
  {
    code: "ARM-256",
    slug: "arma-swing-sconce",
    name: "Arma Swing Sconce",
    collection: "Atelier",
    finish: "Polished Brass · Linen",
    price: "$1,180",
    img: aboutImg,
    images: [aboutImg, p2, p3, p1],
    category: "wall",
    badge: "Featured",
    description:
      "An articulated swing-arm sconce in polished brass with a hand-sewn linen shade. The Arma pivots 120° — designed for bedside reading, study walls and the heads of staircases.",
    dimensions: "Arm L 55 cm · Shade Ø 22 cm · H 30 cm",
    materials: "Solid brass · Hand-sewn linen shade",
    finishOptions: ["Polished Brass · Linen", "Aged Brass · Ivory Linen"],
    bulbDetails: "E14 · Max 40W · LED compatible · Dimmable",
    installationGuide:
      "Hard-wired. Wall plate 14 × 10 cm. Electrician required.",
  },
  {
    code: "REC-088",
    slug: "recessed-arc-sconce",
    name: "Recessed Arc",
    collection: "Architectural",
    finish: "Brushed Nickel",
    price: "$740",
    img: proj3,
    images: [proj3, p4, p2, p3],
    category: "wall",
    description:
      "A minimal half-cylinder sconce recessed into the wall — casting an upward wash of light along the surface. Specified in pairs or continuous runs along corridors.",
    dimensions: "W 18 cm · H 10 cm · Depth 8 cm",
    materials: "Cast aluminium · Brushed nickel finish",
    finishOptions: ["Brushed Nickel", "Matte White", "Aged Brass"],
    bulbDetails: "Integrated LED · 3000K · 800 lm",
    installationGuide:
      "Flush-mounted. Requires in-wall junction box. Technical drawings included.",
  },

  /* ── CEILING LIGHTS ──────────────────────────────────────── */
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
      "A semi-flush ceiling light carved from a single disk of Spanish alabaster, edged in solid brass. Glows warm and milky when lit — a quiet, architectural presence for bedrooms and libraries.",
    dimensions: "Ø 55 cm · H 14 cm",
    materials: "Spanish alabaster · Solid brass",
    finishOptions: ["Alabaster Natural · Aged Brass", "Alabaster Honey · Polished Brass"],
    bulbDetails: "E27 × 3 · Max 40W per lamp · LED compatible",
    installationGuide:
      "Semi-flush. Requires standard ceiling rose. Weight 12 kg — rated fixing required.",
  },
  {
    code: "DOM-147",
    slug: "dome-flush",
    name: "Dome Flush",
    collection: "Modern",
    finish: "Opal · Brushed Brass",
    price: "$890",
    img: proj4,
    images: [proj4, p2, p3, p1],
    category: "ceiling",
    badge: "New",
    description:
      "A full-flush ceiling dome in hand-blown opal glass, fitted into a solid brass ring. The Dome Flush is designed for low-ceiling bedrooms, guest bathrooms and entrance halls.",
    dimensions: "Ø 42 cm · H 18 cm",
    materials: "Hand-blown opal glass · Solid brass",
    finishOptions: ["Opal · Brushed Brass", "Opal · Polished Chrome", "Smoked · Blackened Steel"],
    bulbDetails: "E27 × 2 · Max 40W per lamp · LED compatible",
    installationGuide:
      "Flush-mount. Standard ceiling rose. Weight 5 kg.",
  },
  {
    code: "ROS-221",
    slug: "rose-cluster-ceiling",
    name: "Rose Cluster",
    collection: "Crystal",
    finish: "Aged Brass · Crystal",
    price: "$2,280",
    img: crystal,
    images: [crystal, p1, p4, p3],
    category: "ceiling",
    description:
      "A flush-mounted ceiling centrepiece of sixteen crystal drops arranged in concentric circles, set in an aged brass disc. For bedrooms, dressing rooms and intimate dining spaces.",
    dimensions: "Ø 70 cm · H 12 cm",
    materials: "Solid brass · Hand-cut crystal",
    finishOptions: ["Aged Brass · Clear Crystal", "Polished Brass · Smoked Crystal"],
    bulbDetails: "E14 × 8 · Max 25W per lamp · LED compatible",
    installationGuide:
      "Flush-mount. Weight 18 kg — structural fixing required.",
  },

  /* ── FLOOR & TABLE LAMPS ─────────────────────────────────── */
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
      "A tall table lamp with a hand-turned brass stem and a hand-sewn linen shade, part of the Atelier series — portable pieces designed to be moved through a room like furniture.",
    dimensions: "Base Ø 18 cm · H 72 cm · Shade Ø 40 cm",
    materials: "Solid brass · Hand-sewn linen shade · Marble base",
    finishOptions: ["Natural Linen · Aged Brass", "Ivory Linen · Polished Brass"],
    bulbDetails: "E27 · Max 40W · LED compatible",
    installationGuide: "Plug-in. Standard UK / EU / US plug supplied.",
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
      "A floor lamp carved from a single column of Carrara marble, capped in solid brass. A limited edition — twenty are produced each season, numbered and signed.",
    dimensions: "Base Ø 24 cm · H 165 cm · Shade Ø 45 cm",
    materials: "Carrara marble · Solid brass · Hand-sewn linen shade",
    finishOptions: ["Carrara White · Aged Brass", "Nero Marquina · Blackened Steel"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide:
      "Plug-in. Weight 32 kg — positioning assistance recommended.",
  },
  {
    code: "ARC-055",
    slug: "arc-floor-lamp",
    name: "Arc Floor Lamp",
    collection: "Architectural",
    finish: "Polished Brass",
    price: "$1,680",
    img: proj2,
    images: [proj2, p3, modern, p2],
    category: "floor-table",
    badge: "Featured",
    description:
      "A sweeping arc floor lamp in polished brass with a hand-stitched linen shade. The arc extends 140 cm from base to shade — designed to illuminate a reading chair or sofa from above.",
    dimensions: "Base Ø 30 cm · H 185 cm · Arc reach 140 cm · Shade Ø 38 cm",
    materials: "Solid brass · Marble base · Hand-sewn linen shade",
    finishOptions: ["Polished Brass · Natural Linen", "Aged Brass · Ivory Linen"],
    bulbDetails: "E27 · Max 60W · LED compatible · Dimmable",
    installationGuide:
      "Plug-in. Base weight 12 kg. Standard EU / UK / US plug supplied.",
  },
  {
    code: "POR-188",
    slug: "porte-task-lamp",
    name: "Porte Task Lamp",
    collection: "Atelier",
    finish: "Blackened Steel · Brass",
    price: "$860",
    img: aboutImg,
    images: [aboutImg, p2, p4, p3],
    category: "floor-table",
    description:
      "A jointed task lamp in blackened steel with brass pivot details. Adjustable head and arm — designed for desks, consoles and library tables.",
    dimensions: "Base Ø 14 cm · H adjustable 40–65 cm",
    materials: "Blackened steel · Solid brass pivots",
    finishOptions: ["Blackened Steel · Brass", "Matte White · Brushed Brass"],
    bulbDetails: "E14 · Max 25W · LED compatible · Dimmable",
    installationGuide: "Plug-in. Standard EU / UK / US plug supplied.",
  },

  /* ── DECORATIVE LIGHTING ─────────────────────────────────── */
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
      "A decorative lit sculpture in cast bronze and hand-blown smoked glass. Produced in editions of ten, each piece is hand-finished and numbered. An object that happens to give light.",
    dimensions: "W 28 cm · D 18 cm · H 42 cm",
    materials: "Cast bronze · Hand-blown smoked glass",
    finishOptions: ["Dark Bronze · Smoked Glass", "Patinated Bronze · Clear Glass"],
    bulbDetails: "E14 · Max 25W · LED compatible",
    installationGuide: "Plug-in. Standard EU / UK / US plug supplied.",
  },
  {
    code: "LAN-049",
    slug: "lanterna-table",
    name: "Lanterna Table",
    collection: "Heritage",
    finish: "Antique Brass · Clear Glass",
    price: "$1,140",
    img: contactImg,
    images: [contactImg, p3, p1, p4],
    category: "decor",
    badge: "New",
    description:
      "A table lantern in antique brass with hand-cut clear glass panels. The Lanterna draws from Venetian lantern-making traditions — reimagined for contemporary interiors and outdoor terraces.",
    dimensions: "W 22 cm · D 22 cm · H 38 cm",
    materials: "Solid brass · Hand-cut glass",
    finishOptions: ["Antique Brass · Clear", "Aged Bronze · Smoked Glass"],
    bulbDetails: "E14 · Max 25W · LED compatible",
    installationGuide: "Plug-in. Suitable for indoor and sheltered outdoor use.",
  },
  {
    code: "FIL-300",
    slug: "filament-globe",
    name: "Filament Globe",
    collection: "Modern",
    finish: "Blackened Steel · Amber Glass",
    price: "$680",
    img: proj3,
    images: [proj3, p2, modern, p4],
    category: "decor",
    description:
      "An oversized globe pendant in mouth-blown amber glass with a blackened steel fitting. Designed as a decorative table or shelf object — lit or unlit, it holds the room.",
    dimensions: "Ø 28 cm · H 32 cm with fitting",
    materials: "Mouth-blown amber glass · Blackened steel",
    finishOptions: ["Blackened Steel · Amber", "Brass · Clear", "Brass · Smoked"],
    bulbDetails: "E27 · Max 40W · Edison-style LED recommended",
    installationGuide: "Plug-in. Cord length 180 cm.",
  },

  /* ── OUTDOOR LIGHTING ────────────────────────────────────── */
  {
    code: "TER-001",
    slug: "terrace-lantern",
    name: "Terrace Lantern",
    collection: "Outdoor",
    finish: "Weathered Brass",
    price: "$1,380",
    img: proj1,
    images: [proj1, proj4, p3, p2],
    category: "outdoor",
    badge: "Featured",
    description:
      "A ground-standing lantern in weathered brass and marine-grade glass. The Terrace Lantern is designed for entrance courts, pool surrounds and garden pathways — resistant to salt air and standing water.",
    dimensions: "W 28 cm · D 28 cm · H 90 cm",
    materials: "Marine-grade brass · Tempered glass · Cast iron base",
    finishOptions: ["Weathered Brass", "Patinated Bronze", "Powder-Coated Black"],
    bulbDetails: "E27 · Max 60W · LED compatible · IP65 rated",
    installationGuide:
      "Ground stake or base plate. Electrical connection by licensed electrician required.",
  },
  {
    code: "WAL-OUT-022",
    slug: "outdoor-wall-light",
    name: "Exterior Arc Wall Light",
    collection: "Outdoor",
    finish: "Dark Bronze",
    price: "$860",
    img: proj4,
    images: [proj4, proj2, p4, p2],
    category: "outdoor",
    description:
      "A wall-mounted exterior light in dark bronze with a glass diffuser. Designed for entrance facades, garden walls and covered terraces. Pairs with the Terrace Lantern.",
    dimensions: "W 18 cm · H 28 cm · Projection 16 cm",
    materials: "Die-cast bronze · Tempered glass",
    finishOptions: ["Dark Bronze", "Polished Brass", "Matte Black"],
    bulbDetails: "E27 · Max 60W · LED compatible · IP44 rated",
    installationGuide:
      "Hard-wired. Back plate included. Electrician required.",
  },
  {
    code: "PIL-044",
    slug: "pillar-post-light",
    name: "Pillar Post Light",
    collection: "Outdoor",
    finish: "Polished Brass",
    price: "$1,640",
    img: proj2,
    images: [proj2, proj1, p3, p4],
    category: "outdoor",
    badge: "New",
    description:
      "A freestanding post light in polished brass — designed to line driveways, mark garden paths and define the perimeter of a terrace. Available in 100 cm and 140 cm heights.",
    dimensions: "Base Ø 20 cm · H 100 cm or 140 cm",
    materials: "Solid brass · Tempered glass · Stainless steel anchor",
    finishOptions: ["Polished Brass", "Aged Brass", "Powder-Coated Black"],
    bulbDetails: "E27 · Max 60W · LED compatible · IP65 rated",
    installationGuide:
      "Requires concrete anchor. Electrical connection below ground. Full anchor drawings included.",
  },
  {
    code: "PEN-OUT-077",
    slug: "outdoor-pendant-lantern",
    name: "Covered Terrace Pendant",
    collection: "Outdoor",
    finish: "Antique Brass · Seeded Glass",
    price: "$1,080",
    img: proj3,
    images: [proj3, proj1, p1, p3],
    category: "outdoor",
    description:
      "A pendant lantern for covered terraces, pergolas and entrance porticos — in antique brass with hand-blown seeded glass. Rated for protected outdoor use.",
    dimensions: "Ø 26 cm · H 38 cm · Drop adjustable to 200 cm",
    materials: "Solid brass · Hand-blown seeded glass",
    finishOptions: ["Antique Brass · Seeded Clear", "Dark Bronze · Smoked Glass"],
    bulbDetails: "E27 · Max 60W · LED compatible · IP44 rated",
    installationGuide:
      "Hard-wired. Ceiling rose included. Protected outdoor environments only.",
  },
];

export function whatsappHref(
  p: Pick<Product, "name" | "code" | "price" | "img">,
  origin = "",
) {
  const text =
    `Hello House of Lumere,%0A%0AI am interested in the following piece and would love to know more:%0A%0A` +
    `*Product:* ${encodeURIComponent(p.name)}%0A` +
    `*Code:* ${p.code}%0A` +
    `*Price:* ${encodeURIComponent(p.price)}` +
    (origin ? `%0A*Page:* ${encodeURIComponent(origin)}` : "") +
    (p.img ? `%0A*Image:* ${encodeURIComponent(p.img)}` : "") +
    `%0A%0AKindly share availability, finish options, and lead time. Thank you.`;
  return `https://wa.me/919377555555?text=${text}`;
}
