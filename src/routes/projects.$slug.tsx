import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { PRODUCTS, whatsappHref } from "@/lib/lumere-data";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import prod1 from "@/assets/product-1.jpg";
import prod2 from "@/assets/product-2.jpg";
import prod3 from "@/assets/product-3.jpg";
import prod4 from "@/assets/product-4.jpg";

const PROJECTS: Record<
  string,
  {
    title: string;
    type: string;
    location: string;
    year: string;
    architect?: string;
    img: string;
    gallery: string[];
    headline: string;
    body: { heading?: string; text: string }[];
    specs: { label: string; value: string }[];
    featuredProducts: string[];
  }
> = {
  "maison-aurore": {
    title: "Maison Aurore",
    type: "Private Residence",
    location: "Paris, France",
    year: "2024",
    architect: "Atelier Chabrier",
    img: p1,
    gallery: [p1, prod1, prod3, p2],
    headline:
      "A six-bedroom Haussmann apartment relit across three floors — including a bespoke crystal cascade above the central stair.",
    body: [
      {
        text: "Maison Aurore is a 720 m² Haussmann apartment on the Boulevard de Courcelles in Paris's 8th arrondissement — a building dating from 1887, recently acquired and comprehensively restored. The lighting brief arrived through Atelier Chabrier, who were overseeing the full interior restoration. The existing electrical installation was a post-war retrofit, and the apartment was essentially being rewired from the slab.",
      },
      {
        heading: "The staircase",
        text: "The central feature is a stone stair — original limestone balustrades, three floors, a glazed cupola above. The brief was for a chandelier that descended through the void of the stair without competing with the architecture. We developed a bespoke crystal cascade: 340 hand-cut crystal pendants suspended from a brushed-brass armature at the third floor, the drop reaching 6.2 m to a small disc at the first-floor level. The pendant cluster is 80 cm in diameter at its widest point — narrow enough to clear the stair but present enough to read from the entrance.",
      },
      {
        heading: "The principal rooms",
        text: "The salon received the Aurelia Empire in its 120 cm diameter, hung at 2.1 m from finished floor. The dining room was given a custom linear pendant above the Calacatta dining table: three 90 cm brass tubes, joined end-to-end, with a continuous opal diffuser and a Lutron DALI driver allowing independent zone control. The bedrooms and studies were lit with the Arma Swing Sconce at each bedside, supplemented by recessed downlights at 2700K on a separate circuit.",
      },
      {
        heading: "The challenge",
        text: "Haussmann apartments have ceiling roses cast into the plasterwork — decorative elements that cannot be removed or modified. Every structural anchor had to be taken through the rose, concealed, and made to appear as if the chandelier had always hung there. We developed a bespoke concealed back plate for this project that has since been adapted for other Parisian commissions.",
      },
      {
        text: "Maison Aurore was completed in March 2024 and has since been featured in Architectural Digest France and AD Germany. Our collaboration with Atelier Chabrier continues — we are currently in specification for a second residence in Lyon.",
      },
    ],
    specs: [
      { label: "Project type", value: "Private Residence" },
      { label: "Location", value: "Paris, France" },
      { label: "Completed", value: "March 2024" },
      { label: "Architect / Interior designer", value: "Atelier Chabrier, Paris" },
      { label: "Floor area", value: "720 m²" },
      { label: "Floors lit", value: "3" },
      { label: "Fittings installed", value: "64" },
      { label: "Bespoke pieces", value: "3" },
    ],
    featuredProducts: ["aurelia-empire", "arma-swing-sconce", "velluto-chandelier"],
  },
  "the-adler-penthouse": {
    title: "The Adler Penthouse",
    type: "Penthouse",
    location: "Park Avenue, New York",
    year: "2023",
    architect: "Studio Carr & Fox",
    img: p2,
    gallery: [p2, prod2, prod4, p3],
    headline:
      "Architectural lighting study for a 6,400 sq ft penthouse on Park Avenue, with linear pendants drawn to the steel coffers.",
    body: [
      {
        text: "The Adler Penthouse occupies the top two floors of a 1960s building on Park Avenue — a post-war residential tower, recently purchased and stripped to the structure. The client, through Studio Carr & Fox, was rebuilding the interior from the concrete slab. The ceiling, rather than being concealed in plaster, was to be exposed: raw concrete coffers, steel I-beams painted black, existing HVAC buried in bespoke steel boxes. Our brief was to light this structure without softening it.",
      },
      {
        heading: "Linear pendants in the living volume",
        text: "The main living and dining floor is a single open volume of approximately 320 m². The ceiling height is 3.4 m — tight for a penthouse, but the structural beams give it presence. We specified four linear pendants in blackened steel, each 180 cm, hung 80 cm below the beam soffit and 65 cm above the dining table. The result is a ceiling plane defined by light rather than by surface.",
      },
      {
        heading: "Kitchen and study",
        text: "Above the kitchen island, two Linea Linear Pendants in brushed brass were specified, hung at a fixed height of 75 cm above the countertop. The study received the Arc Floor Lamp in polished brass — the client had seen our Atelier piece in a hotel in Geneva and requested it specifically. The floor lamp's sweeping arm, at 140 cm of reach, allows it to light a reading position from above without a table fitting.",
      },
      {
        heading: "The terrace",
        text: "A 120 m² south-facing terrace required weatherproof fittings. We specified the Pillar Post Light in aged brass along the parapet, the Exterior Arc Wall Light at the sliding doors, and a set of four Terrace Lanterns along the pergola structure. All fittings are IP65-rated and finished in a weathered brass that will develop a patina consistent with the interior pieces over time.",
      },
      {
        text: "The Adler Penthouse was completed in December 2023 and has been featured in Architectural Record and Wallpaper*. It represents our first major New York commission and the beginning of a significant expansion into the North American market.",
      },
    ],
    specs: [
      { label: "Project type", value: "Penthouse" },
      { label: "Location", value: "Park Avenue, New York, USA" },
      { label: "Completed", value: "December 2023" },
      { label: "Architect / Interior designer", value: "Studio Carr & Fox, New York" },
      { label: "Floor area", value: "6,400 sq ft (595 m²)" },
      { label: "Floors lit", value: "2 + terrace" },
      { label: "Fittings installed", value: "38" },
      { label: "Outdoor fittings", value: "12" },
    ],
    featuredProducts: ["linea-linear-pendant", "arc-floor-lamp", "pillar-post-light"],
  },
  "restaurant-sera": {
    title: "Restaurant Sera",
    type: "Hospitality",
    location: "Milan, Italy",
    year: "2024",
    architect: "Studio Marchand",
    img: p3,
    gallery: [p3, prod1, prod3, p4],
    headline:
      "Forty-two custom sconces, paired along stone-clad corridors and the chef's table — completed with Studio Marchand.",
    body: [
      {
        text: "Restaurant Sera opened in September 2025 in Milan's Brera district — a 110-cover fine-dining restaurant occupying the ground floor of a 19th-century palazzo. The client, with Studio Marchand, had stripped the former retail space back to its stone walls and poured-concrete floor, then built a new interior of limestone, Calacatta marble and dark-stained walnut. The existing electrical infrastructure was replaced entirely.",
      },
      {
        heading: "The sconce brief",
        text: "The brief required lighting that felt embedded in the architecture — not decorative, not supplemental, but integral. We specified forty-two Halo Sconces in antique brass with opal glass, positioned at 1.6 m from finished floor, one per 2.5 m of wall, on a Lutron Caséta circuit. At full output, each sconce delivers 280 lux — at the dimmed service level (approximately 35%), the tabletop reading is 80 lux, which is the level we aim for in fine dining: legible but intimate.",
      },
      {
        heading: "The chef's table",
        text: "The private room at the rear seats twelve and is centred on a 3.2 m slab of Calacatta marble. We designed a bespoke linear chandelier for this space: three 100 cm solid brass tubes, linked and hung at 140 cm above the marble. Inside each tube, an integrated LED module with a continuous opal diffuser produces a warm, even light along the full table length. The fitting is operated on a separate DALI circuit, allowing the chef's table to be lit independently of the main dining room.",
      },
      {
        heading: "Installation",
        text: "The forty-two sconces were installed over two days by a four-person electrical team, using a steel jig we fabricated to ensure identical positioning across all three walls. Back plates are M6 stainless bolts into the limestone, with neoprene gaskets to prevent cold bridging and damp transfer. The total installation was completed two weeks before the opening — allowing the team to live with the lighting and adjust dimmer levels before service.",
      },
      {
        text: "Four of the seven major Italian restaurant press reviews for Sera's opening made specific mention of the lighting. The project has since brought us four further hospitality commissions in Rome, Amsterdam, Lisbon and Dubai.",
      },
    ],
    specs: [
      { label: "Project type", value: "Fine Dining Restaurant" },
      { label: "Location", value: "Brera, Milan, Italy" },
      { label: "Completed", value: "September 2024 (opened September 2025)" },
      { label: "Architect / Interior designer", value: "Studio Marchand, Milan" },
      { label: "Covers", value: "110" },
      { label: "Sconces installed", value: "42" },
      { label: "Bespoke chef's table fitting", value: "1" },
      { label: "Dimmer system", value: "Lutron Caséta + DALI" },
    ],
    featuredProducts: ["halo-sconce", "arma-swing-sconce", "alabaster-disk"],
  },
  "villa-calanque": {
    title: "Villa Calanque",
    type: "Villa",
    location: "Côte d'Azur, France",
    year: "2022",
    architect: "Étude Ferrand",
    img: p4,
    gallery: [p4, prod2, prod4, p1],
    headline:
      "A coastal villa lit entirely in patinated brass and alabaster — including an outdoor lantern garden.",
    body: [
      {
        text: "Villa Calanque is a private residence on a pine-forested hillside above Cassis, on the Côte d'Azur. The architecture is new construction — raw concrete, glass and local stone — designed by Étude Ferrand to read from the sea as a natural extension of the calanque cliff face. Our brief was to light the interior and exterior without disrupting this reading: no visible fittings from the sea line, no warm glow that reads as domestic from the water.",
      },
      {
        heading: "The interior palette",
        text: "The client had specified patinated brass and alabaster as the only surface finishes allowed in the lighting — all other materials in the house were stone, concrete and raw linen. This constraint produced a remarkable coherence. The Stone Series Alabaster Disk was specified in three bedrooms and the library. The Couture Table Lamp, in natural linen and aged brass, furnished the sitting room and guest suites. The Velluto Chandelier lit the dining room — its patinated brass arms reading as an extension of the kitchen cabinetry.",
      },
      {
        heading: "The lantern garden",
        text: "The exterior brief was the most complex element of the project. The terraced garden steps down to a pool level through three stone-retained terraces. The client wanted a lantern garden — a series of ground-standing lanterns marking the path from terrace to pool — that would be invisible from the seaward side. We specified twelve Terrace Lanterns in weathered brass, on a low-voltage circuit with a dusk sensor, positioned below the parapet line of each terrace retaining wall.",
      },
      {
        heading: "The outdoor wall lights",
        text: "Every exterior door and shuttered window received an Exterior Arc Wall Light in patinated bronze — a finish we developed specifically for this commission, which has since been added to the standard Lumere palette. The finish is a forced patination using ammonia and salt air — an appropriate irony for a house above the Mediterranean.",
      },
      {
        text: "Villa Calanque was completed in autumn 2022 and has been extensively photographed by Romain Isabey for publication. The lantern garden has since become one of the pieces of our outdoor portfolio that clients most frequently cite when briefing us. The exterior bronze patination is now specified for seven other coastal commissions.",
      },
    ],
    specs: [
      { label: "Project type", value: "Private Villa" },
      { label: "Location", value: "Cassis, Côte d'Azur, France" },
      { label: "Completed", value: "Autumn 2022" },
      { label: "Architect / Interior designer", value: "Étude Ferrand, Marseille" },
      { label: "Plot area", value: "3,200 m²" },
      { label: "Interior fittings", value: "47" },
      { label: "Exterior fittings", value: "24" },
      { label: "Custom finish developed", value: "Ammonia-patinated bronze" },
    ],
    featuredProducts: ["terrace-lantern", "alabaster-disk", "velluto-chandelier"],
  },
};

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const proj = PROJECTS[params.slug];
    return {
      meta: proj
        ? [
            { title: `${proj.title} — Projects — House of Lumere` },
            { name: "description", content: proj.headline },
            { property: "og:title", content: proj.title },
            { property: "og:description", content: proj.headline },
            { property: "og:image", content: proj.img },
          ]
        : [{ title: "Project not found — House of Lumere" }],
    };
  },
  loader: ({ params }) => {
    const proj = PROJECTS[params.slug];
    if (!proj) throw notFound();
    return { proj, slug: params.slug };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { proj } = Route.useLoaderData();
  const ref = useReveal<HTMLDivElement>();

  const featured = PRODUCTS.filter((p) =>
    proj.featuredProducts.includes(p.slug),
  );

  return (
    <>
      {/* Full-bleed hero image */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden bg-bone">
        <img
          src={proj.img}
          alt={proj.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-16 max-w-[1600px] mx-auto">
          <p className="eyebrow text-foreground/80 mb-5">
            {proj.type} · {proj.location} · {proj.year}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl max-w-4xl leading-[1.02]">
            {proj.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="bg-background py-24 md:py-32">
        <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Body */}
            <div className="lg:col-span-7">
              <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 border-l-2 border-brass pl-8">
                {proj.headline}
              </p>
              <div className="space-y-8">
                {proj.body.map((block, i) => (
                  <div key={i}>
                    {block.heading && (
                      <h2 className="font-serif text-2xl md:text-3xl mt-12 mb-5">
                        {block.heading}
                      </h2>
                    )}
                    <p className="text-base md:text-lg leading-[1.9] text-foreground/80">
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
                <Link
                  to="/projects"
                  className="eyebrow hover:text-foreground transition-colors"
                >
                  ← All Projects
                </Link>
                <a
                  href="https://wa.me/000000000?text=Hello%2C%20I%20saw%20your%20project%20work%20and%20would%20like%20to%20discuss%20a%20commission."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors"
                >
                  Discuss a commission →
                </a>
              </div>
            </div>

            {/* Sidebar — specs + gallery */}
            <aside className="lg:col-span-5 space-y-16">
              {/* Project specs */}
              <div>
                <p className="eyebrow mb-8">Project Specifications</p>
                <dl className="space-y-0 border-t border-border">
                  {proj.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex justify-between py-4 border-b border-border gap-6"
                    >
                      <dt className="text-muted-foreground text-sm">{s.label}</dt>
                      <dd className="font-medium text-sm text-right">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Gallery strip */}
              <div>
                <p className="eyebrow mb-6">Installation Images</p>
                <div className="grid grid-cols-2 gap-3">
                  {proj.gallery.map((img, i) => (
                    <div key={i} className="overflow-hidden bg-bone aspect-square">
                      <img
                        src={img}
                        alt={`${proj.title} — image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-[1.04] transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Featured pieces used in this project */}
      {featured.length > 0 && (
        <section className="bg-bone py-24 md:py-32 border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
            <p className="eyebrow mb-4">Pieces used in this project</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-16">
              From the collection
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {featured.map((p) => (
                <Link
                  key={p.code}
                  to="/collections/$category/$product"
                  params={{ category: p.category, product: p.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden bg-background aspect-[4/5]">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="eyebrow mb-2">
                      {p.collection} · {p.finish}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl mb-1">
                      {p.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {p.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
