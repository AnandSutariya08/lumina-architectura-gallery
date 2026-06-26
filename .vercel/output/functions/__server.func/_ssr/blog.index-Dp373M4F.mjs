import { t as about_default } from "./about-DcnOvHKg.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as project_2_default } from "./project-2-DdljYF8T.mjs";
import { t as project_4_default } from "./project-4-B_fwDHRH.mjs";
import { n as signature_modern_default, t as signature_crystal_default } from "./signature-modern-VLKkuCEl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-Dp373M4F.js
var import_jsx_runtime = require_jsx_runtime();
var POSTS = [
	{
		slug: "lighting-a-double-height-foyer",
		title: "Lighting a double-height foyer",
		cat: "Lighting Guides",
		date: "March 2026",
		readTime: "8 min read",
		img: signature_crystal_default,
		excerpt: "Five rules we apply when drawing chandeliers for stairwells, foyers and atriums above five metres."
	},
	{
		slug: "the-return-of-alabaster",
		title: "The quiet return of alabaster",
		cat: "Interior Trends",
		date: "February 2026",
		readTime: "6 min read",
		img: signature_modern_default,
		excerpt: "Why alabaster — soft, milky, structural — is replacing frosted glass in the houses we light."
	},
	{
		slug: "in-the-atelier-jaipur",
		title: "In the atelier — Jaipur",
		cat: "Designer Interviews",
		date: "January 2026",
		readTime: "10 min read",
		img: about_default,
		excerpt: "A morning with the family of metal-spinners who finish every Lumere brass shade by hand."
	},
	{
		slug: "lighting-restaurant-sera",
		title: "Lighting Restaurant Sera, Milan",
		cat: "Project Stories",
		date: "December 2025",
		readTime: "9 min read",
		img: project_2_default,
		excerpt: "Forty-two sconces, three months, one chef's table — the case study behind Restaurant Sera."
	},
	{
		slug: "ceiling-installation-guide",
		title: "A short guide to ceiling installation",
		cat: "Installation",
		date: "November 2025",
		readTime: "7 min read",
		img: project_4_default,
		excerpt: "Boxing, plate sizes, dimming and load — the details we hand to every electrician before delivery."
	}
];
var CATEGORIES = [
	"All",
	"Lighting Guides",
	"Interior Trends",
	"Designer Interviews",
	"Project Stories",
	"Installation"
];
function BlogIndexPage() {
	const [feature, ...rest] = POSTS;
	const heroRef = useReveal();
	const gridRef = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-bone border-b border-border pt-36 pb-16 md:pt-48 md:pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-6",
						children: "The Journal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-6xl md:text-8xl lg:text-[100px] leading-[0.95] max-w-3xl",
						children: [
							"Slow writing",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-muted-foreground",
								children: "on light."
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-base leading-relaxed mb-6",
							children: "Lighting guides, interior trends, designer interviews and project stories — published monthly from the Lumere atelier."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 flex-wrap",
							children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow !text-[9px] border border-border px-3 py-1.5 hover:border-foreground hover:text-foreground transition-colors cursor-pointer",
								children: cat
							}, cat))
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: heroRef,
			className: "reveal bg-background border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-16 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: feature.slug },
					className: "group grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8 overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[560px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: feature.img,
							alt: feature.title,
							className: "h-full w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.04]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4 bg-bone flex flex-col justify-between p-8 md:p-12 lg:p-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block bg-foreground text-background eyebrow !text-[9px] px-3 py-1.5",
									children: "Featured Essay"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: feature.readTime
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-5 text-brass",
								children: [
									feature.cat,
									" · ",
									feature.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-4xl md:text-5xl lg:text-[52px] leading-[1.05] mb-8",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base md:text-lg leading-relaxed mb-10",
								children: feature.excerpt
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-t border-border pt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl italic text-muted-foreground",
								children: "House of Lumere"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] group-hover:gap-4 transition-all duration-300",
								children: "Read the essay →"
							})]
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-bone py-8 border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Further reading — Issue 04, 2025–26"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block h-px flex-1 bg-border mx-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "5 essays"
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: gridRef,
				className: "reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px",
						children: rest.slice(0, 2).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "group block bg-background p-8 md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden bg-bone aspect-[4/3] mb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-3 text-brass",
									children: p.cat
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-3xl md:text-4xl leading-[1.1] mb-4 group-hover:text-brass transition-colors duration-300",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed mb-6",
									children: p.excerpt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-t border-border pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "eyebrow text-muted-foreground",
										children: [
											p.date,
											" · ",
											p.readTime
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase tracking-[0.28em] group-hover:tracking-[0.34em] transition-all duration-300",
										children: "Read →"
									})]
								})
							]
						}, p.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border border-border border-t-0",
						children: rest.slice(2).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: `group flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 md:p-10 hover:bg-bone transition-colors duration-300 ${i < rest.slice(2).length - 1 ? "border-b border-border" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden bg-bone aspect-[16/9] sm:w-52 sm:flex-shrink-0 sm:aspect-[4/3]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-center flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "eyebrow mb-3 text-brass",
											children: [
												p.cat,
												" · ",
												p.date
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-2xl md:text-3xl leading-snug mb-3 group-hover:text-brass transition-colors duration-300",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground text-sm leading-relaxed max-w-xl",
											children: p.excerpt
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:flex sm:items-center sm:flex-shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] uppercase tracking-[0.28em] whitespace-nowrap group-hover:tracking-[0.34em] transition-all duration-300",
										children: "Read →"
									})
								})
							]
						}, p.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-24 bg-foreground text-background p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-background/60 mb-4",
							children: "The Lumere Letter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-serif text-3xl md:text-4xl",
							children: [
								"One essay, once a month.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-background/60",
									children: "Nothing else."
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-background/70 text-sm leading-relaxed mb-8",
							children: "We write one piece of long-form content each month — on materials, lighting technique, or a project we've just completed. No promotions. No product announcements."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919377555555?text=Please%20add%20me%20to%20the%20House%20of%20Lumere%20Journal%20mailing%20list.",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-3 border border-background/40 text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-background hover:text-foreground transition-colors duration-500",
							children: "Subscribe via WhatsApp →"
						})] })]
					})
				]
			})
		})
	] });
}
//#endregion
export { BlogIndexPage as component };
