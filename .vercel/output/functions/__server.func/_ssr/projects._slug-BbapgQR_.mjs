import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PRODUCTS } from "./lumere-data-CUlWfz6c.mjs";
import { t as Route } from "./projects._slug-BLWzIaRD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BbapgQR_.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailPage() {
	const { proj } = Route.useLoaderData();
	const ref = useReveal();
	const featured = PRODUCTS.filter((p) => proj.featuredProducts.includes(p.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[70vh] min-h-[520px] overflow-hidden bg-bone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: proj.img,
					alt: proj.title,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-16 max-w-[1600px] mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-foreground/80 mb-5",
						children: [
							proj.type,
							" · ",
							proj.location,
							" · ",
							proj.year
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-5xl md:text-6xl lg:text-8xl max-w-4xl leading-[1.02]",
						children: proj.title
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed mb-14 border-l-2 border-brass pl-8",
								children: proj.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-8",
								children: proj.body.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [block.heading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-2xl md:text-3xl mt-12 mb-5",
									children: block.heading
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base md:text-lg leading-[1.9] text-foreground/80",
									children: block.text
								})] }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									className: "eyebrow hover:text-foreground transition-colors",
									children: "← All Projects"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20saw%20your%20project%20work%20and%20would%20like%20to%20discuss%20a%20commission.",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors",
									children: "Discuss a commission →"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "lg:col-span-5 space-y-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-8",
							children: "Project Specifications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "space-y-0 border-t border-border",
							children: proj.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between py-4 border-b border-border gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground text-sm",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium text-sm text-right",
									children: s.value
								})]
							}, s.label))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-6",
							children: "Installation Images"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-3",
							children: proj.gallery.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-bone aspect-square",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img,
									alt: `${proj.title} — image ${i + 1}`,
									loading: "lazy",
									className: "h-full w-full object-cover hover:scale-[1.04] transition-transform duration-700"
								})
							}, i))
						})] })]
					})]
				})
			})
		}),
		featured.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bone py-24 md:py-32 border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-4",
						children: "Pieces used in this project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-3xl md:text-4xl mb-16",
						children: "From the collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections/$category/$product",
							params: {
								category: p.category,
								product: p.slug
							},
							className: "group block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-background aspect-[4/5]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "eyebrow mb-2",
										children: [
											p.collection,
											" · ",
											p.finish
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl md:text-2xl mb-1",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: p.price
									})
								]
							})]
						}, p.code))
					})
				]
			})
		})
	] });
}
//#endregion
export { ProjectDetailPage as component };
