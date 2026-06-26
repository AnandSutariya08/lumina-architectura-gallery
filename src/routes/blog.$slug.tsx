import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import a from "@/assets/signature-crystal.jpg";
import b from "@/assets/signature-modern.jpg";
import c from "@/assets/about.jpg";
import d from "@/assets/project-2.jpg";
import e from "@/assets/project-4.jpg";

const POSTS: Record<
  string,
  {
    title: string;
    cat: string;
    date: string;
    img: string;
    excerpt: string;
    readTime: string;
    body: { heading?: string; text: string }[];
    related: string[];
  }
> = {
  "lighting-a-double-height-foyer": {
    title: "Lighting a double-height foyer",
    cat: "Lighting Guides",
    date: "March 2026",
    img: a,
    excerpt:
      "Five rules we apply when drawing chandeliers for stairwells, foyers and atriums above five metres.",
    readTime: "8 min read",
    related: ["the-return-of-alabaster", "ceiling-installation-guide"],
    body: [
      {
        text: "The foyer is the first impression, the first light. In a double-height space — anything above five metres — there are almost no forgiving choices. Get it wrong and the chandelier floats, dwarfed by the void above it. Get it right and the space pulls together: the ceiling comes down, the floor lifts, the proportions resolve themselves.",
      },
      {
        heading: "Rule one — scale to the volume, not the floor plate",
        text: "The instinct is to match the chandelier to the floor plan. In a 4 × 4 m entrance hall, a 100 cm chandelier feels appropriate. But in a double-height foyer, the volume is the governing dimension. Add the length and width of the room together in metres — that figure in centimetres is a reasonable starting diameter for the chandelier. A room 5 m × 4 m gives you a starting point of 90–100 cm at a standard ceiling. At 7 m height, scale up to 130–150 cm.",
      },
      {
        heading: "Rule two — hang it lower than you think",
        text: "The most common error in double-height foyers: the chandelier is hung at mid-height, exactly where the eye doesn't rest. Hang it so the base sits roughly two metres above the finished floor — low enough to be intimate, high enough for clearance. In stairwells, the base of the chandelier should clear the highest stair tread by at least 2.2 m. Drop-length adjustability is essential at order: request 100–200 cm of additional chain.",
      },
      {
        heading: "Rule three — layers above the centrepiece",
        text: "A single chandelier can't light a double-height foyer on its own without overdriving it. Recessed downlights or wall sconces above the landing create a secondary plane of light that makes the chandelier feel embedded rather than stranded. We typically specify one to two recessed sources per side at the upper level, set to 10–15% of the chandelier's output when dimmed.",
      },
      {
        heading: "Rule four — dimming is not optional",
        text: "A foyer receives guests at different hours, in different moods. Full brightness at midday is a different brief from the same space at 10 pm, with candles and a dinner party. All our chandeliers are LED-compatible and dimmable to 1%. We require a trailing-edge dimmer rated to at least 150% of the chandelier's total load. Phase-cut dimmers cause flicker at low levels — specify trailing-edge or DALI.",
      },
      {
        heading: "Rule five — the drop is a design element",
        text: "In a double-height foyer, the chandelier's rod, chain or cable is visible from two levels. Treat it as part of the design: brushed brass chain, tensioned cable, a continuous brass tube — each reads differently from the landing. We offer custom drop assemblies in polished brass, aged brass and blackened steel. For very tall drops (above 350 cm), a steel armature with a decorative brass sheath is structurally necessary.",
      },
      {
        text: "The foyer chandelier is one of the few pieces of lighting that earns its description as furniture. It furnishes the room before anything else enters it. Specify it with the same attention you'd give to the first choice of stone.",
      },
    ],
  },
  "the-return-of-alabaster": {
    title: "The quiet return of alabaster",
    cat: "Interior Trends",
    date: "February 2026",
    img: b,
    excerpt:
      "Why alabaster — soft, milky, structural — is replacing frosted glass in the houses we light.",
    readTime: "6 min read",
    related: ["lighting-a-double-height-foyer", "in-the-atelier-jaipur"],
    body: [
      {
        text: "Frosted glass reached a kind of perfection in the 1990s. It diffused light cleanly, it was neutral, it matched everything. And it became invisible — not in the desirable sense of quiet luxury, but in the sense of a material that has lost its presence. Alabaster is the answer to that exhaustion.",
      },
      {
        heading: "What alabaster does that glass cannot",
        text: "Alabaster is a mineral. It is soft, translucent and structurally consistent — meaning it can be carved thin without cracking. When light passes through a well-carved slab, it warms. The stone has inclusions, veining, depth. It is never quite uniform, which is exactly the point. Each piece of alabaster reads differently depending on the seam it was cut from — this variability is treated in our Stone Series as a feature, not a defect.",
      },
      {
        heading: "The provenance question",
        text: "Most of the alabaster entering the European market comes from Volterra in Tuscany or from Aragon in Spain. We work exclusively with a fourth-generation quarrier in Aragon who has been supplying our Alabaster Disk shade for the last four years. Spanish alabaster tends to be denser and more consistently translucent than Tuscan alabaster, which veers towards the opaque. Both are beautiful — they are simply different materials.",
      },
      {
        heading: "Practical considerations",
        text: "Alabaster is soft. It scratches with a fingernail. It is not a surface for the kitchen or bathroom — moisture will mottle it and direct sunlight will bleach it over time. In the interiors we specify it for — bedrooms, dressing rooms, studies, quiet dining rooms — it is essentially without limit. It requires no maintenance beyond dry-dusting. Its thermal mass means it holds warmth, physically and visually, in a way no glass or metal diffuser can.",
      },
      {
        heading: "Weight is the constraint",
        text: "A 55 cm alabaster disk weighs approximately 12 kg. Standard ceiling roses are not rated for this — a structural fixing is required, typically a M10 threaded rod into a concrete ceiling or a timber noggin rated to at least 40 kg. We specify this clearly at order and include a fixing drawing with every Stone Series delivery.",
      },
      {
        text: "The return of alabaster is, at its root, a return to patience. It takes longer to source, to carve, to finish. It cannot be replicated at scale. It is the right material for a moment when interiors are moving away from surfaces that look finished and towards surfaces that feel made.",
      },
    ],
  },
  "in-the-atelier-jaipur": {
    title: "In the atelier — Jaipur",
    cat: "Designer Interviews",
    date: "January 2026",
    img: c,
    excerpt:
      "A morning with the family of metal-spinners who finish every Lumere brass shade by hand.",
    readTime: "10 min read",
    related: ["the-return-of-alabaster", "lighting-restaurant-sera"],
    body: [
      {
        text: "The workshop is in the old city, past the jewellery quarter and down a lane that narrows until a car can no longer pass. Vikram Malhotra's family has worked here for sixty years. His grandfather made brasswork for the Maharaja's household. His father made lighting components for export. Vikram makes the brass shades for House of Lumere.",
      },
      {
        heading: "The process",
        text: "Every shade begins as a flat sheet of naval brass — 80% copper, 20% zinc — sourced from a single supplier in Jodhpur. The sheets arrive at 1.2 mm gauge. The first operation is spinning: a disc of brass is held against a rotating mandrel and worked by hand, with steel tools, over the course of twenty minutes. This produces a cone, a dome or a cylinder, depending on the form. No two spun shades are identical — the grain pattern of each sheet reads differently after spinning.",
      },
      {
        heading: "Finishing",
        text: "After spinning comes planishing — working the surface with a hammer and stake to smooth the tool marks and consolidate the grain. Then annealing: the shade is heated to approximately 400°C and quenched, which softens the metal and reveals its final colour. Patination is done by hand with liver of sulphur, in concentrations that Vikram adjusts by eye and season — the humidity in Jaipur changes the reaction time, and in the monsoon months the process must be accelerated.",
      },
      {
        heading: "What 'hand-finished' actually means",
        text: "We use the phrase hand-finished on every product description. In Vikram's workshop, it is not a marketing term. The final polishing is done with a cloth charged with jeweller's rouge. The inside of the shade — the surface that faces the lamp — is left at a different grit to the outside, to produce a different reflective quality. The boss (the fitting at the crown) is threaded by hand on a lathe that Vikram's grandfather imported from England in 1963.",
      },
      {
        heading: "Scale",
        text: "The workshop employs eleven people. Vikram is the only one who does the final finish. His son, who is nineteen, has been working alongside him for two years and is, Vikram says, about three years from being trusted with the aged brass process. There is no shortcut to that trust. It is exactly the knowledge we are buying.",
      },
      {
        text: "We leave at midday, with a small shade wrapped in cloth in a paper bag. Vikram refuses to use bubble wrap — he says it marks the brass. He is, as in most things, correct.",
      },
    ],
  },
  "lighting-restaurant-sera": {
    title: "Lighting Restaurant Sera, Milan",
    cat: "Project Stories",
    date: "December 2025",
    img: d,
    excerpt:
      "Forty-two sconces, three months, one chef's table — the case study behind Restaurant Sera.",
    readTime: "9 min read",
    related: ["lighting-a-double-height-foyer", "ceiling-installation-guide"],
    body: [
      {
        text: "The brief from Studio Marchand arrived on a Tuesday in June 2024. Restaurant Sera was a 110-cover fine-dining restaurant in Milan's Brera district, set in the ground floor of a 19th-century palazzo. The ceiling was 4.2 m. The walls were stone-clad limestone. The floor was poured concrete finished in a warm grey. The existing lighting was a grid of recessed downlights that turned the room into an office. We had three months to fix it.",
      },
      {
        heading: "The specification",
        text: "The design called for forty-two wall sconces — one per dining position, effectively — plus a bespoke fitting for the chef's table in the private room at the rear. The sconces needed to produce approximately 80 lux at tabletop level: bright enough to read a menu, dim enough that the stone walls held their warmth. We specified the Halo Sconce in antique brass with a hand-blown opal glass diffuser, wired to a central Lutron dimmer that Studio Marchand could program per service.",
      },
      {
        heading: "The problem with forty-two sconces",
        text: "Sconces multiply imperfections. A single sconce can be shimmed, adjusted, its cable concealed without difficulty. Forty-two sconces across three walls, in a room that would be seen from every angle simultaneously, required a fixing jig — a steel template cut to the exact spacing, which we fabricated and sent ahead of the installation team. The electrician's team of four installed all forty-two in two days. The back plates are M6 stainless bolts into the stone, with a neoprene gasket behind each back plate to prevent cold bridging.",
      },
      {
        heading: "The chef's table",
        text: "The private dining room seats twelve. The chef's table is a single slab of Calacatta marble, 3.2 m long, 1.1 m wide. For this space we designed a bespoke linear chandelier — three 100 cm brass tubes, linked and hung at 140 cm above the table surface, each with a continuous LED module behind an opal diffuser. The brief was that the fitting should read as furniture rather than lighting: the restaurant's identity was the food, not the room.",
      },
      {
        heading: "The result",
        text: "Restaurant Sera opened in September 2025 and has been reviewed with specific mention of the lighting in four of the seven major Italian press reviews. One reviewer described the room as 'lit like a painting, not a kitchen.' That is what forty-two sconces, correctly positioned and correctly dimmed, can do.",
      },
    ],
  },
  "ceiling-installation-guide": {
    title: "A short guide to ceiling installation",
    cat: "Installation",
    date: "November 2025",
    img: e,
    excerpt:
      "Boxing, plate sizes, dimming and load — the details we hand to every electrician before delivery.",
    readTime: "7 min read",
    related: ["lighting-a-double-height-foyer", "lighting-restaurant-sera"],
    body: [
      {
        text: "Every House of Lumere chandelier or ceiling fitting ships with a full installation drawing, a wiring diagram and a list of structural requirements. What follows is the condensed version — the briefing we give every electrician before a delivery.",
      },
      {
        heading: "Load ratings",
        text: "The ceiling structure must be rated to at least five times the static weight of the fitting. A chandelier weighing 20 kg requires a structural anchor rated to 100 kg. Standard plasterboard fixings are insufficient for anything above 5 kg. For heavier fittings, the anchor should be a M10 threaded rod secured into the structural slab, or a bespoke steel plate welded to the ceiling joist. If the ceiling is timber, the fitting should be suspended from a noggin directly over the joist, not between joists.",
      },
      {
        heading: "The back box",
        text: "A standard circular back box is 47 mm deep. Most of our ceiling roses require a 60–75 mm depth to accommodate the terminal block and loop-in wiring. A deep back box (60 mm) is specified as standard on all our ceiling roses over 50 cm diameter. If the back box is too shallow, the canopy will not sit flush and the fixing screws will be visible. This is the most common installation error we encounter.",
      },
      {
        heading: "Wiring",
        text: "All our fittings are supplied for a switched live, neutral and earth — standard 3-core wiring. For fittings with multiple circuits (e.g., a chandelier where the inner and outer rings are switched independently), 5-core cable is required. The maximum cable size entering our terminals is 2.5 mm². Do not use 4 mm² cable — it will not fit and field modification of terminals voids the warranty.",
      },
      {
        heading: "Dimming",
        text: "Phase-cut (leading-edge) dimmers are not suitable for LED loads. They cause flicker and buzzing, particularly at low levels. Specify trailing-edge (electronic low-voltage, or ELV) dimmers or DALI drivers. The dimmer must be rated to at least 150% of the total LED load. For circuits with multiple fittings on a single dimmer, calculate the total wattage and add 25% as a safety margin. We recommend Lutron Caséta or Rako for residential applications; DALI for commercial.",
      },
      {
        heading: "Drop height adjustment on site",
        text: "All our chandeliers and pendants ship with maximum drop length. On-site adjustment is by removing links from the chain or trimming the rod, depending on the fitting. Chain adjustment requires a pair of needle-nose pliers and should be done with the fitting suspended but not yet wired — the chain carries load before and after installation. Do not cut chain with bolt cutters — this deforms the links and the fitting will not hang level.",
      },
      {
        text: "If you have a question before installation, contact us. We would rather answer a question on a Tuesday morning than replace a ceiling fitting on a Thursday afternoon.",
      },
    ],
  },
};

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = POSTS[params.slug];
    return {
      meta: post
        ? [
            { title: `${post.title} — House of Lumere Journal` },
            { name: "description", content: post.excerpt },
            { property: "og:title", content: post.title },
            { property: "og:description", content: post.excerpt },
            { property: "og:image", content: post.img },
          ]
        : [{ title: "Article not found — House of Lumere" }],
    };
  },
  loader: ({ params }) => {
    const post = POSTS[params.slug];
    if (!post) throw notFound();
    return { post, slug: params.slug };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, slug } = Route.useLoaderData();
  const ref = useReveal<HTMLDivElement>();

  const relatedPosts = post.related
    .map((s) => ({ slug: s, ...POSTS[s] }))
    .filter(Boolean);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] bg-bone overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-16 px-6 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
          <p className="eyebrow text-foreground/80 mb-5">
            {post.cat} · {post.date} · {post.readTime}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.05]">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <section className="bg-background py-24 md:py-32">
        <div ref={ref} className="reveal mx-auto max-w-[780px] px-6 md:px-10">
          <p className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 border-l-2 border-brass pl-8">
            {post.excerpt}
          </p>

          <div className="space-y-10">
            {post.body.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="font-serif text-2xl md:text-3xl mb-5 mt-14">
                    {block.heading}
                  </h2>
                )}
                <p className="text-base md:text-lg leading-[1.9] text-foreground/80">
                  {block.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <Link
              to="/blog"
              className="eyebrow hover:text-foreground transition-colors"
            >
              ← Back to the Journal
            </Link>
            <a
              href="https://wa.me/000000000?text=Hello%2C%20I%20read%20your%20journal%20and%20would%20like%20to%20inquire%20about%20lighting%20for%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors"
            >
              Inquire via WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-bone py-24 md:py-32 border-t border-border">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
            <p className="eyebrow mb-10">Continue reading</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/blog/$slug"
                  params={{ slug: rel.slug }}
                  className="group block"
                >
                  <div className="overflow-hidden bg-background aspect-[16/9]">
                    <img
                      src={rel.img}
                      alt={rel.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="eyebrow mb-3">
                      {rel.cat} · {rel.date}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl mb-3 group-hover:text-brass transition-colors duration-300">
                      {rel.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {rel.excerpt}
                    </p>
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
