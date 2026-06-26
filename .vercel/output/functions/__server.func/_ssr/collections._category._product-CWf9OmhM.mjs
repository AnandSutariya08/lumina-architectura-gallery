import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as whatsappHref } from "./lumere-data-CUlWfz6c.mjs";
import { t as Route } from "./collections._category._product-BmMAsyBE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._category._product-CWf9OmhM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { category, product: p, related } = Route.useLoaderData();
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	const [activeTab, setActiveTab] = (0, import_react.useState)("description");
	const waHref = whatsappHref(p, typeof window !== "undefined" ? window.location.href : "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-28 md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex items-center gap-3 eyebrow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections",
							className: "hover:text-foreground transition-colors",
							children: "Collections"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections/$category",
							params: { category: category.slug },
							className: "hover:text-foreground transition-colors",
							children: category.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: p.name
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden bg-bone aspect-[4/5] mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.images[activeImg] ?? p.img,
								alt: p.name,
								width: 1400,
								height: 1750,
								className: "h-full w-full object-cover transition-opacity duration-700"
							}, activeImg), p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-6 left-6 eyebrow !text-[10px] bg-background px-3 py-1.5 text-foreground",
								children: p.badge
							})]
						}), p.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-3",
							children: p.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveImg(i),
								className: ["overflow-hidden bg-bone aspect-square transition-all duration-300", activeImg === i ? "ring-1 ring-foreground" : "opacity-60 hover:opacity-100"].join(" "),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img,
									alt: `${p.name} view ${i + 1}`,
									className: "h-full w-full object-cover"
								})
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-4",
								children: [
									category.title,
									" · ",
									p.collection
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.04] mb-6",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-2",
								children: ["Ref. ", p.code]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-4 mb-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-2xl md:text-3xl",
									children: p.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: p.finish
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 mb-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: waHref,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center justify-center gap-3 w-full bg-foreground text-background py-4 px-8 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										width: "16",
										height: "16",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
									}), "Inquire on WhatsApp"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "flex items-center justify-center gap-3 w-full border border-foreground py-4 px-8 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground hover:text-background transition-colors duration-500",
									children: "Request Specification Sheet"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-8 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow w-28 shrink-0 pt-0.5",
											children: "Finish"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: p.finish
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow w-28 shrink-0 pt-0.5",
											children: "Dimensions"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: p.dimensions
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow w-28 shrink-0 pt-0.5",
											children: "Materials"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: p.materials
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow w-28 shrink-0 pt-0.5",
											children: "Bulb"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: p.bulbDetails
										})]
									})
								]
							}),
							p.finishOptions.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-8 mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-4",
									children: "Finish Options"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: p.finishOptions.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "border border-border px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:border-foreground hover:text-foreground transition-colors cursor-default",
										children: f
									}, f))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-10 border-b border-border",
						children: [
							["description", "Description"],
							["specifications", "Specifications"],
							["installation", "Installation"]
						].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveTab(key),
							className: ["py-6 text-[11px] uppercase tracking-[0.28em] border-b-2 -mb-px transition-colors duration-300", activeTab === key ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"].join(" "),
							children: label
						}, key))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-14 max-w-3xl",
						children: [
							activeTab === "description" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base md:text-lg text-muted-foreground leading-relaxed",
								children: p.description
							}),
							activeTab === "specifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "space-y-6",
								children: [
									["Product Name", p.name],
									["Reference", p.code],
									["Collection", p.collection],
									["Dimensions", p.dimensions],
									["Materials", p.materials],
									["Finish", p.finish],
									["Finish Options", p.finishOptions.join(" · ")],
									["Bulb Details", p.bulbDetails]
								].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-8 border-b border-border pb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "eyebrow",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm text-muted-foreground leading-relaxed",
										children: value
									})]
								}, label))
							}),
							activeTab === "installation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base md:text-lg text-muted-foreground leading-relaxed",
								children: p.installationGuide
							})
						]
					})]
				})
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bone border-t border-border py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "From the same collection"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-4xl md:text-5xl",
							children: "Related Pieces"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12",
						children: related.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections/$category/$product",
							params: {
								category: r.category,
								product: r.slug
							},
							className: "group block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden bg-background aspect-[4/5]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: r.img,
									alt: r.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-2",
									children: r.collection
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground whitespace-nowrap",
										children: r.price
									})]
								})]
							})]
						}, r.code))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/collections/$category",
						params: { category: category.slug },
						className: "link-underline text-[11px] uppercase tracking-[0.28em]",
						children: ["← Back to ", category.title]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waHref,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-4 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors duration-500",
						children: "Inquire About This Piece →"
					})]
				})
			})
		]
	}) });
}
//#endregion
export { ProductPage as component };
