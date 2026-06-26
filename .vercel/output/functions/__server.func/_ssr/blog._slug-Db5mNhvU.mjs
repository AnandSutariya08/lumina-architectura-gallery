import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, t as POSTS } from "./blog._slug-DRg5fsRE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-Db5mNhvU.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { post, slug } = Route.useLoaderData();
	const bodyRef = useReveal();
	const relatedPosts = post.related.map((s) => POSTS[s] ? {
		slug: s,
		...POSTS[s]
	} : null).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[70vh] min-h-[540px] overflow-hidden bg-bone",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: post.img,
					alt: post.title,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-background/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-32 left-0 right-0 px-6 md:px-10 lg:px-14 max-w-[1400px] mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "hover:text-white transition-colors",
								children: "Journal"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/50",
								children: post.cat
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 right-0 px-6 md:px-10 lg:px-14 pb-16 max-w-[1400px] mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-brass text-background eyebrow !text-[9px] px-3 py-1.5",
								children: post.cat
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-white/70",
								children: post.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-white/50",
								children: post.readTime
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02] text-white",
						children: post.title
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-bone border-b border-border py-10 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-3xl pl-8 border-l-2 border-brass",
					children: post.excerpt
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: bodyRef,
						className: "reveal lg:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "prose-lumere space-y-0",
							children: post.body.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArticleBlock, { block }, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-20 pt-10 border-t border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "eyebrow hover:text-foreground transition-colors",
									children: "← Back to the Journal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20read%20your%20essay%20on%20%22${encodeURIComponent(post.title)}%22%20and%20would%20like%20to%20discuss%20a%20project.`,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-[0.28em] hover:bg-foreground/90 transition-colors",
									children: "Discuss your project →"
								})]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "lg:col-span-4 space-y-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border p-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mb-6",
									children: "About this essay"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "space-y-0",
									children: [
										{
											label: "Category",
											value: post.cat
										},
										{
											label: "Published",
											value: post.date
										},
										{
											label: "Read time",
											value: post.readTime
										},
										{
											label: "Publisher",
											value: "House of Lumere"
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between py-3 border-b border-border last:border-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground text-sm",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-sm font-medium",
											children: item.value
										})]
									}, item.label))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-foreground text-background p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow !text-background/60 mb-4",
										children: "Have a project?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-2xl mb-4",
										children: "We work with architects and designers worldwide."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-background/70 text-sm leading-relaxed mb-8",
										children: "Send us a brief — ceiling height, room type, preferred finish. We'll respond with a specification within 48 hours."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.",
										target: "_blank",
										rel: "noreferrer",
										className: "inline-flex items-center gap-2 border border-background/40 text-background text-[11px] uppercase tracking-[0.28em] px-6 py-3 hover:bg-background hover:text-foreground transition-colors duration-500 w-full justify-center",
										children: "Inquire via WhatsApp →"
									})
								]
							}),
							relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-6",
								children: "Related essays"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: relatedPosts.map((rel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/blog/$slug",
									params: { slug: rel.slug },
									className: "group flex gap-4 items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-20 h-20 flex-shrink-0 overflow-hidden bg-bone",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: rel.img,
											alt: rel.title,
											loading: "lazy",
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow mb-1 text-brass truncate",
												children: rel.cat
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-serif text-lg leading-snug group-hover:text-brass transition-colors duration-300 line-clamp-2",
												children: rel.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "eyebrow mt-1 text-muted-foreground",
												children: rel.readTime
											})
										]
									})]
								}, rel.slug))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow mb-4",
										children: "Explore the collection"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-sm leading-relaxed mb-6",
										children: "Every piece discussed in the Journal is available to order in multiple finishes and configurations."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collections",
										className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] hover:gap-4 transition-all duration-300",
										children: "Browse collections →"
									})
								]
							})
						]
					})]
				})
			})
		}),
		relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bone py-20 md:py-28 border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3",
						children: "Continue reading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-4xl md:text-5xl",
						children: "More from the Journal"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "hidden md:block link-underline text-[11px] uppercase tracking-[0.28em]",
						children: "All essays →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8",
					children: relatedPosts.map((rel) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: rel.slug },
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-background aspect-[16/9] mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: rel.img,
									alt: rel.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-3 text-brass",
								children: [
									rel.cat,
									" · ",
									rel.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl md:text-4xl leading-snug mb-3 group-hover:text-brass transition-colors duration-300",
								children: rel.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm leading-relaxed",
								children: rel.excerpt
							})
						]
					}, rel.slug))
				})]
			})
		})
	] });
}
function ArticleBlock({ block }) {
	switch (block.type) {
		case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base md:text-lg leading-[1.95] text-foreground/80 mb-8",
			children: block.text
		});
		case "heading": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-serif text-2xl md:text-3xl lg:text-4xl mt-16 mb-6 text-foreground",
			children: block.text
		});
		case "pullquote": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "my-14 pl-8 border-l-4 border-brass",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-foreground italic mb-4",
				children: [
					"\"",
					block.text,
					"\""
				]
			}), block.attribution && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("cite", {
				className: "eyebrow text-muted-foreground not-italic",
				children: block.attribution
			})]
		});
		case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "my-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden bg-bone aspect-[16/10]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: block.src,
					alt: block.alt ?? "",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-4 text-sm text-muted-foreground leading-relaxed italic pl-1",
				children: block.caption
			})]
		});
		case "image-pair": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "my-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden bg-bone aspect-square",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: block.left,
						alt: "",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden bg-bone aspect-square",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: block.right,
						alt: "",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-4 text-sm text-muted-foreground leading-relaxed italic pl-1",
				children: block.caption
			})]
		});
		case "rule-card": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "my-6 border border-border p-7 md:p-9 grid grid-cols-[auto_1fr] gap-6 md:gap-8 items-start hover:border-brass transition-colors duration-300",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-serif text-5xl text-brass/40 leading-none select-none",
				children: block.number
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-xl md:text-2xl mb-3",
				children: block.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm md:text-base leading-relaxed",
				children: block.body
			})] })]
		});
		default: return null;
	}
}
//#endregion
export { BlogPostPage as component };
