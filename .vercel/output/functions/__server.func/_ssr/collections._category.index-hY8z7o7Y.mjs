import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as whatsappHref } from "./lumere-data-CUlWfz6c.mjs";
import { t as Route } from "./collections._category.index-CVYW6ms8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._category.index-hY8z7o7Y.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, products } = Route.useLoaderData();
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[55vh] min-h-[420px] overflow-hidden bg-bone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.image,
					alt: category.title,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-14 max-w-[1600px] mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-foreground/80 mb-4",
							children: category.count
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02]",
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed",
							children: category.intro
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-bone border-b border-border py-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections",
						className: "hover:text-foreground transition-colors",
						children: "Collections"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: category.title
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
				children: [
					products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow mb-3",
							children: [category.count, " available"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif text-3xl md:text-4xl",
							children: [
								"The full ",
								category.title,
								" collection"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted-foreground text-sm leading-relaxed",
							children: "Each piece is available to order in multiple finishes. All pricing on request — WhatsApp for immediate response."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16",
						children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative overflow-hidden bg-bone aspect-[4/5]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.name,
										loading: "lazy",
										width: 1e3,
										height: 1300,
										className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
									}),
									p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-4 left-4 eyebrow !text-[10px] bg-background px-3 py-1.5 text-foreground",
										children: p.badge
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-4 bottom-4 flex flex-col gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/collections/$category/$product",
											params: {
												category: p.category,
												product: p.slug
											},
											className: "inline-flex items-center justify-center bg-background/95 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-foreground opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-foreground hover:text-background",
											children: "View Details"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: whatsappHref(p),
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center justify-center bg-foreground px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-background opacity-0 translate-y-3 transition-all duration-500 delay-75 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-foreground/90",
											children: "Inquire on WhatsApp"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow mb-2",
										children: [
											p.collection,
											" · ",
											p.finish
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-xl md:text-2xl",
											children: p.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground whitespace-nowrap",
											children: p.price
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2",
										children: p.description
									})
								]
							})]
						}, p.code))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-32 border-t border-border pt-20 grid grid-cols-1 md:grid-cols-3 gap-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Materials"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl mb-4",
									children: "Solid brass. Hand-cut crystal. Alabaster."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: [
										"Every piece in the ",
										category.title,
										" collection is hand-finished in one of our ateliers before delivery. No cast zinc, no electroplating."
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Made to order"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl mb-4",
									children: "Built for your space."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "Drop height, finish and bulb configuration are customisable at order. Standard lead time 8–12 weeks. Expedited available on request."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Specification support"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl mb-4",
									children: "For architects and designers."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-sm leading-relaxed",
									children: "IES data, CAD blocks and finish samples available for trade clients. Contact us for your project brief."
								})
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 flex flex-col sm:flex-row items-center justify-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections",
							className: "link-underline text-[11px] uppercase tracking-[0.28em]",
							children: "← All collections"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/000000000?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20full%20catalogue.",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors",
							children: "Request full catalogue →"
						})]
					})
				]
			})
		})
	] });
}
function EmptyState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center py-24 max-w-xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-6",
				children: "Coming soon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-3xl md:text-4xl mb-8 leading-snug",
				children: "New pieces from this collection are being photographed for the journal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "link-underline text-[11px] uppercase tracking-[0.28em]",
				children: "Inquire for the full catalogue →"
			})
		]
	});
}
//#endregion
export { CategoryPage as component };
