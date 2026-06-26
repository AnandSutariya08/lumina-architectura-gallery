import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import chand from "@/assets/collection-chandeliers.jpg";
import pend from "@/assets/collection-pendants.jpg";
import wall from "@/assets/collection-wall.jpg";
import crystal from "@/assets/signature-crystal.jpg";
import modern from "@/assets/signature-modern.jpg";
import aboutImg from "@/assets/about.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";

/* ─────────────────────────────────────────────
   1. MANIFESTO — brand voice, lives only here
───────────────────────────────────────────── */
export function HomeManifesto() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background overflow-hidden">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-28 md:py-40"
      >
        <div className="max-w-5xl">
          <p className="eyebrow !text-background/50 mb-10 tracking-[0.3em]">
            Surat · Est. 2014 · India
          </p>
          <h2 className="font-serif text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.03] text-background">
            Light is the first piece of furniture
            <em className="not-italic text-background/45"> in any great room.</em>
          </h2>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/15">
          {[
            {
              n: "01",
              title: "Handcrafted",
              body: "Every fixture is built to order in solid brass, hand-blown glass and hand-cut crystal — assembled by artisans whose families have shaped metal for four generations.",
            },
            {
              n: "02",
              title: "Bespoke",
              body: "We work to your ceiling heights, finish palette and installation drawings. No catalogue constraint — every commission begins with your brief.",
            },
            {
              n: "03",
              title: "Worldwide",
              body: "From Surat to projects across 38 countries. We ship with white-glove care and provide full installation documentation in your language.",
            },
          ].map((p) => (
            <div
              key={p.n}
              className="border-t md:border-t-0 md:border-l first:border-l-0 border-white/15 pt-10 md:pt-12 md:px-10 lg:px-14 first:pl-0"
            >
              <span className="font-serif text-5xl text-background/20 leading-none block mb-8">
                {p.n}
              </span>
              <h3 className="eyebrow !text-background/80 mb-4">{p.title}</h3>
              <p className="text-sm text-background/55 leading-relaxed max-w-xs">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. COLLECTIONS EDITORIAL — asymmetric spread
───────────────────────────────────────────── */
export function HomeCollectionsEditorial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal flex items-end justify-between gap-8 mb-14 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-sm leading-[1.05]">
            The Collections.
          </h2>
          <Link
            to="/collections"
            className="hidden md:inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em] shrink-0"
          >
            View All Collections →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4">
          <CollectionPanel
            img={chand}
            title="Chandeliers"
            count="24 pieces"
            slug="chandeliers"
            className="col-span-2 lg:col-span-5 aspect-[3/4] lg:aspect-auto lg:row-span-2"
            tall
          />
          <CollectionPanel
            img={pend}
            title="Pendant Lighting"
            count="36 pieces"
            slug="pendants"
            className="col-span-1 lg:col-span-4 aspect-[4/3]"
          />
          <CollectionPanel
            img={wall}
            title="Wall Sconces"
            count="18 pieces"
            slug="wall"
            className="col-span-1 lg:col-span-3 aspect-[4/3]"
          />
          <CollectionPanel
            img={modern}
            title="Linear & Modern"
            count="22 pieces"
            slug="ceiling"
            className="col-span-2 lg:col-span-7 aspect-[16/9]"
          />
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em]"
          >
            View All Collections →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CollectionPanel({
  img,
  title,
  count,
  slug,
  className = "",
  tall = false,
}: {
  img: string;
  title: string;
  count: string;
  slug: string;
  className?: string;
  tall?: boolean;
}) {
  return (
    <Link
      to="/collections/$category"
      params={{ category: slug }}
      className={`group relative overflow-hidden bg-bone block ${className}`}
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        className={[
          "absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]",
          tall ? "" : "",
        ].join(" ")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
        <p className="eyebrow !text-white/65 mb-2">{count}</p>
        <h3 className="font-serif text-white text-xl md:text-2xl lg:text-3xl leading-tight">
          {title}
        </h3>
        <span className="eyebrow !text-white/60 mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Explore →
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   3. ATELIER — craft & numbers, homepage-only
───────────────────────────────────────────── */
export function HomeAtelier() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone overflow-hidden">
      <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 min-h-[720px]">
        <div className="relative min-h-[480px] lg:min-h-0 order-2 lg:order-1">
          <img
            src={crystal}
            alt="Crystal chandelier detail — House of Lumere atelier"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bone/30 hidden lg:block" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-24 lg:py-32">
          <p className="eyebrow mb-8">The Atelier</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.04] mb-10 max-w-lg">
            Quiet objects,{" "}
            <em className="not-italic text-muted-foreground">
              made to outlast us.
            </em>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mb-14">
            We are a house of makers. Every piece leaves our hands only when
            it is ready — finished in solid brass, hand-blown glass, or
            hand-cut crystal by artisans who have shaped metal for four
            generations.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-border pt-12 mb-14">
            {[
              ["10+", "Years"],
              ["220", "Projects"],
              ["38", "Countries"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-serif text-4xl md:text-5xl mb-2">{n}</div>
                <div className="eyebrow text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="link-underline text-[11px] uppercase tracking-[0.28em] self-start"
          >
            About the House →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. SIGNATURE PIECE — one hero product, editorial
───────────────────────────────────────────── */
export function HomeSignaturePiece() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="lg:order-2">
            <p className="eyebrow mb-6">The Signature Piece</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.03] mb-8">
              Grand Palais<br />
              <em className="not-italic text-muted-foreground">Chandelier</em>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mb-6">
              Ref. LM-CH-001. Eighteen arms of solid burnished brass, dressed
              with 340 hand-cut Bohemian crystal drops. A piece conceived for
              double-height foyers and grand salon ceilings.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-12">
              Dimensions: Ø 120 cm × H 90 cm. Delivered with bespoke
              ceiling rose and full installation drawings.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                to="/collections/chandeliers/grand-palais-chandelier"
                className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
              >
                View This Piece →
              </Link>
              <a
                href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20am%20interested%20in%20the%20Grand%20Palais%20Chandelier%20(Ref%3A%20LM-CH-001).%20Please%20share%20availability%20and%20pricing."
                target="_blank"
                rel="noreferrer"
                className="link-underline text-[11px] uppercase tracking-[0.28em]"
              >
                Inquire on WhatsApp →
              </a>
            </div>
          </div>

          <div className="lg:order-1 relative">
            <div className="aspect-[3/4] overflow-hidden bg-bone">
              <img
                src={p1}
                alt="Grand Palais Chandelier — House of Lumere"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2000ms] ease-out hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:-right-8 bg-bone border border-border px-6 py-5 hidden md:block">
              <p className="eyebrow mb-1">Price on Request</p>
              <p className="font-serif text-2xl">From ₹ 4,20,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. EDITORIAL STRIP — full-bleed image + pull quote
───────────────────────────────────────────── */
export function HomeEditorialStrip() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-[#1a1814]">
      <img
        src={aboutImg}
        alt="House of Lumere atelier"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex items-end mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow !text-white/55 mb-6">Crafted in India · Loved Worldwide</p>
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15]">
            "We do not sell fixtures. We help you compose the atmosphere of a room."
          </blockquote>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 border border-white/50 text-white px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] hover:bg-white hover:text-foreground transition-colors duration-500"
          >
            Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. COMMISSION CTA — dark closing section
───────────────────────────────────────────── */
export function HomeCommissionCTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background py-28 md:py-40">
      <div
        ref={ref}
        className="reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="eyebrow !text-background/50 mb-8">Begin a Commission</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[76px] leading-[1.03] text-background">
            Every room deserves its{" "}
            <em className="not-italic text-background/45">defining light.</em>
          </h2>
        </div>

        <div className="lg:pl-16 lg:border-l border-white/15">
          <p className="text-background/65 text-base md:text-lg leading-relaxed mb-12 max-w-md">
            Share the room dimensions, ceiling height and your preferred finish.
            Our team responds within one working day with a full specification
            and pricing proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20begin%20a%20commission.%20Please%20get%20in%20touch."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-background/90 transition-colors duration-500"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/30 text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:border-white/60 transition-colors duration-500"
            >
              Contact Form →
            </Link>
          </div>

          <div className="mt-12 pt-10 border-t border-white/15 grid grid-cols-2 gap-6">
            {[
              ["1 working day", "Response time"],
              ["+91 93775 55555", "Direct line"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="font-serif text-xl text-background mb-1">{val}</div>
                <div className="eyebrow !text-background/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. FEATURED PRODUCTS — curated product grid
───────────────────────────────────────────── */
const FEATURED = [
  { slug: "aurelia-empire",        category: "chandeliers", name: "Aurelia Empire",     collection: "Crystal Collection",  badge: "Most Inquired", img: p1 },
  { slug: "velluto-chandelier",    category: "chandeliers", name: "Velluto Chandelier", collection: "Crystal Collection",  badge: "Featured",      img: crystal },
  { slug: "rotunda-grand",         category: "chandeliers", name: "Rotunda Grand",      collection: "Crystal Collection",  badge: "Limited",       img: p3 },
  { slug: "arc-pendant",           category: "pendants",    name: "Arc Pendant",        collection: "Linear Collection",   badge: "New Arrival",   img: modern },
];

export function HomeFeaturedProducts() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">Most Inquired</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
              Pieces that define rooms.
            </h2>
          </div>
          <Link to="/collections" className="hidden md:inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em] shrink-0">
            Browse All Pieces →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURED.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/collections" className="inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em]">
            Browse All Pieces →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p, index }: { product: typeof FEATURED[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal group" style={{ transitionDelay: `${index * 80}ms` }}>
      <Link to="/collections/$category/$product" params={{ category: p.category, product: p.slug }} className="block">
        <div className="relative overflow-hidden bg-background aspect-[3/4]">
          <img src={p.img} alt={p.name} loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]" />
          {p.badge && (
            <span className="absolute top-4 left-4 eyebrow !text-[10px] bg-background px-3 py-1.5">
              {p.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700" />
        </div>
        <div className="mt-4">
          <p className="eyebrow mb-2 text-muted-foreground">{p.collection}</p>
          <h3 className="font-serif text-xl md:text-2xl">{p.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">Price on Request</p>
        </div>
      </Link>
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <a
          href={`https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(p.name)}.%20Please%20share%20more%20details.`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-foreground px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background transition-colors duration-300"
        >
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   8. PROJECTS — 3 selected works
───────────────────────────────────────────── */
const HOME_PROJECTS = [
  { slug: "maison-aurore",       title: "Maison Aurore",       type: "Private Residence · Paris",    img: proj1 },
  { slug: "the-adler-penthouse", title: "The Adler Penthouse", type: "Penthouse · New York",         img: proj2 },
  { slug: "restaurant-sera",     title: "Restaurant Sera",     type: "Hospitality · Milan",          img: proj3 },
];

export function HomeProjects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-background py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-5">Selected Works</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
              In residence.
            </h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em] shrink-0">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {HOME_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-3 link-underline text-[11px] uppercase tracking-[0.28em]">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: typeof HOME_PROJECTS[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
        <div className={`overflow-hidden bg-bone ${index === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
          <img src={p.img} alt={p.title} loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
          <p className="eyebrow shrink-0 mt-1 text-right">{p.type}</p>
        </div>
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────
   9. TESTIMONIALS — client voices, dark bg
───────────────────────────────────────────── */
const QUOTES = [
  {
    q: "Lumere understood the room before we did. The light feels inevitable — as if it had always been there.",
    name: "Élise Marchand",
    role: "Marchand Studio · Paris",
  },
  {
    q: "A rare house. Quiet, exacting, and entirely without pretence. We specify them on every villa now.",
    name: "Raj Mehta",
    role: "Atelier Mehta · Mumbai",
  },
  {
    q: "The Aurelia Empire above our stair is the first thing every guest remarks upon. It is architecture, not decoration.",
    name: "Sophia Reinhardt",
    role: "Private Client · Zürich",
  },
];

export function HomeTestimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-foreground text-background py-28 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <p className="eyebrow !text-background/50 text-center mb-20 md:mb-28 tracking-[0.3em]">
          In Conversation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {QUOTES.map((t, i) => (
            <figure key={t.name} className="relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <span aria-hidden className="absolute -top-6 -left-2 font-serif text-[100px] leading-none text-white/10 select-none">"</span>
              <blockquote className="relative font-serif text-xl md:text-2xl leading-[1.45] text-background">
                {t.q}
              </blockquote>
              <figcaption className="mt-10 pt-8 border-t border-white/15">
                <div className="text-sm font-medium text-background">{t.name}</div>
                <div className="eyebrow mt-2 !text-background/50">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   10. PROCESS — how we work, 4 steps
───────────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    title: "Share Your Brief",
    body: "Send us the room dimensions, ceiling height, preferred finish and any reference images. WhatsApp or the contact form — either works.",
  },
  {
    n: "02",
    title: "Specification Proposal",
    body: "Within one working day, we return a full specification — fixture, drop height, finish options and a pricing proposal.",
  },
  {
    n: "03",
    title: "Built to Order",
    body: "Your fixture is hand-assembled in solid brass, crystal or glass by our master artisans. Lead time is 6–10 weeks.",
  },
  {
    n: "04",
    title: "White-Glove Delivery",
    body: "We ship worldwide with white-glove packaging, full installation drawings and direct after-sales support.",
  },
];

export function HomeProcess() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="bg-bone py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20 md:mb-28">
          <div>
            <p className="eyebrow mb-5">How We Work</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
              From brief to<br />
              <em className="not-italic text-muted-foreground">installation.</em>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg lg:pt-16">
            Every commission begins with a conversation. We work alongside
            architects, interior designers and private clients to specify
            lighting that is right for the room — not merely available.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
          {STEPS.map((s, i) => (
            <StepCard key={s.n} step={s} index={i} />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-5">
          <a
            href="https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20begin%20a%20commission."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500"
          >
            Start on WhatsApp →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-foreground px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors duration-500"
          >
            Contact Form →
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step: s, index }: { step: typeof STEPS[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal border-t-0 border-l border-border first:border-l-0 pt-10 pb-10 pr-10 pl-0 first:pl-0"
      style={{ transitionDelay: `${index * 100}ms`, paddingLeft: index === 0 ? 0 : undefined }}
    >
      <div
        className="pl-0"
        style={{ paddingLeft: index > 0 ? "2.5rem" : 0 }}
      >
        <span className="font-serif text-5xl text-muted-foreground/30 leading-none block mb-8">{s.n}</span>
        <h3 className="font-medium text-base mb-4">{s.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   12. GALLERY
───────────────────────────────────────────── */
const GALLERY = [
  { src: g1, alt: "Crystal burst chandelier" },
  { src: g2, alt: "Butterfly wing installation" },
  { src: g3, alt: "Gold crystal close-up" },
  { src: g4, alt: "Copper tulip pendants" },
  { src: g5, alt: "Glass feather sculpture" },
  { src: g6, alt: "Flame glass chandelier" },
  { src: g7, alt: "Blue glass wave fixture" },
  { src: g8, alt: "Crystal spike installation" },
];

export function HomeGallery() {
  const headingRef = useReveal<HTMLDivElement>();
  return (
    <section className="bg-[#0a0a0a] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headingRef} className="reveal text-center mb-16">
          <p className="text-[10px] tracking-[0.45em] text-white/35 uppercase mb-3">
            Our Work
          </p>
          <h2
            className="text-5xl md:text-6xl font-light text-white leading-none"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY.map((item, i) => (
            <GalleryCell key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCell({
  item,
  index,
}: {
  item: { src: string; alt: string };
  index: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal aspect-square overflow-hidden group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ transform: "rotate(-45deg) scale(1.44)" }}
      />
    </div>
  );
}
