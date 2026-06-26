import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { P as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$11 } from "./blog._slug-DRg5fsRE.mjs";
import { t as CATEGORIES } from "./lumere-data-CUlWfz6c.mjs";
import { t as Route$12 } from "./collections._category._product-BmMAsyBE.mjs";
import { t as Route$13 } from "./collections._category.index-CVYW6ms8.mjs";
import { t as Route$14 } from "./projects._slug-BLWzIaRD.mjs";
import { t as hero_default } from "./hero-M2szhr3t.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-8K5Ihy-i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BrqvZpcY.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var image_1782473633448_default = "/assets/image_1782473633448-CvRArWMH.png";
var NAV = [
	{
		label: "Collections",
		to: "/collections",
		hasDropdown: true
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Journal",
		to: "/blog"
	},
	{
		label: "FAQ",
		to: "/faq"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Nav() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [dropdownOpen, setDropdownOpen] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!isHome) return;
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isHome]);
	(0, import_react.useEffect)(() => {
		setMobileOpen(false);
		setDropdownOpen(false);
	}, [pathname]);
	const solid = !isHome || scrolled || mobileOpen;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: ["fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out", solid ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"].join(" "),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center justify-between md:h-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center gap-3 shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: image_1782473633448_default,
							alt: "House of Lumere",
							className: "h-[47px] w-auto md:h-[55px]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-10",
						children: NAV.map((n) => n.hasDropdown ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: dropdownRef,
							className: "relative",
							onMouseEnter: () => setDropdownOpen(true),
							onMouseLeave: () => setDropdownOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: ["nav-link text-[12px] uppercase tracking-[0.28em] flex items-center gap-1.5 cursor-default", solid ? "text-foreground/85" : "text-white/90"].join(" "),
								children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: ["inline-block transition-transform duration-300 leading-none", dropdownOpen ? "rotate-180" : ""].join(" "),
									style: { fontSize: 9 },
									children: "▾"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: ["absolute top-full left-1/2 -translate-x-1/2 pt-5 transition-all duration-300 origin-top", dropdownOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"].join(" "),
								style: { minWidth: 220 },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-background border border-border shadow-sm py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collections",
										className: "block px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground transition-colors border-b border-border mb-2",
										children: "All Collections"
									}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/collections/$category",
										params: { category: c.slug },
										className: "block px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground/75 hover:text-foreground hover:bg-bone transition-colors",
										children: c.title
									}, c.slug))]
								})
							})]
						}, n.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							activeProps: { className: "!text-foreground" },
							className: ["nav-link text-[12px] uppercase tracking-[0.28em]", solid ? "text-foreground/85" : "text-white/90"].join(" "),
							children: n.label
						}, n.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Search",
								className: ["hidden lg:flex transition-colors duration-300", solid ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"].join(" "),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "17",
									height: "17",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "11",
										cy: "11",
										r: "8"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 21-4.35-4.35" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
								target: "_blank",
								rel: "noreferrer",
								className: ["hidden md:inline-flex items-center gap-3 border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] transition-colors duration-500", solid ? "border-foreground/80 text-foreground hover:bg-foreground hover:text-background" : "border-white/80 text-white hover:bg-white hover:text-foreground"].join(" "),
								children: "Inquire"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"aria-label": "Toggle menu",
								onClick: () => setMobileOpen((o) => !o),
								className: ["flex lg:hidden flex-col gap-[5px] p-1 transition-colors", solid ? "text-foreground" : "text-white"].join(" "),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: ["block h-px w-6 bg-current transition-all duration-300", mobileOpen ? "rotate-45 translate-y-[7px]" : ""].join(" ") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: ["block h-px w-6 bg-current transition-all duration-300", mobileOpen ? "opacity-0" : ""].join(" ") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: ["block h-px w-6 bg-current transition-all duration-300", mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""].join(" ") })
								]
							})
						]
					})
				]
			})
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background/98 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1600px] px-6 py-8 space-y-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections",
						className: "block py-3 text-[12px] uppercase tracking-[0.28em] text-foreground/80 hover:text-foreground transition-colors border-b border-border",
						children: "All Collections"
					}),
					CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/collections/$category",
						params: { category: c.slug },
						className: "block py-2 pl-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors",
						children: c.title
					}, c.slug)),
					NAV.filter((n) => !n.hasDropdown).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "block py-3 text-[12px] uppercase tracking-[0.28em] text-foreground/80 hover:text-foreground transition-colors border-t border-border",
						children: n.label
					}, n.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-6 border-t border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry.",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-[0.28em]",
							children: "WhatsApp Inquiry"
						})
					})
				]
			})
		})]
	});
}
var logo_default = "/assets/logo-DsPB_hV1.png";
var COLS = [
	{
		title: "Collections",
		links: [
			{
				label: "Chandeliers",
				to: "/collections/chandeliers"
			},
			{
				label: "Pendants",
				to: "/collections/pendants"
			},
			{
				label: "Wall Sconces",
				to: "/collections/wall"
			},
			{
				label: "Ceiling",
				to: "/collections/ceiling"
			},
			{
				label: "Floor & Table",
				to: "/collections/floor-table"
			},
			{
				label: "Decorative",
				to: "/collections/decor"
			}
		]
	},
	{
		title: "House",
		links: [
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Projects",
				to: "/projects"
			},
			{
				label: "Journal",
				to: "/blog"
			},
			{
				label: "FAQ",
				to: "/faq"
			}
		]
	},
	{
		title: "Trade",
		links: [
			{
				label: "Contact",
				to: "/contact"
			},
			{
				label: "For Designers",
				to: "/contact"
			},
			{
				label: "For Architects",
				to: "/contact"
			},
			{
				label: "Showrooms",
				to: "/contact"
			}
		]
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-foreground text-background pt-24 md:pt-32 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pb-20 border-b border-white/15",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "House of Lumere",
								className: "h-36 w-auto invert opacity-90"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-sm text-white/65 text-sm leading-relaxed",
								children: "House of Lumere — exclusive lighting and architectural fixtures, hand-assembled for residences, hotels and ateliers worldwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-10 flex items-center border-b border-white/30 max-w-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									placeholder: "Receive the journal",
									className: "flex-1 bg-transparent py-3 text-sm text-white placeholder:text-white/50 focus:outline-none"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "text-[11px] uppercase tracking-[0.28em] text-white/80 hover:text-white",
									children: "Subscribe →"
								})]
							})
						]
					}),
					COLS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-white/55 mb-6",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm text-white/85",
							children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "hover:text-white transition-colors",
								children: l.label
							}) }, l.label))
						})]
					}, c.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow !text-white/55 mb-6",
							children: "Follow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3 text-sm text-white/85",
							children: [
								{
									label: "Instagram",
									href: "#"
								},
								{
									label: "Pinterest",
									href: "#"
								},
								{
									label: "LinkedIn",
									href: "#"
								},
								{
									label: "WhatsApp",
									href: "https://wa.me/919377555555?text=Hello%20House%20of%20Lumere%2C%20I%20would%20like%20to%20make%20an%20enquiry."
								}
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								target: l.href !== "#" ? "_blank" : void 0,
								rel: "noreferrer",
								className: "hover:text-white transition-colors",
								children: l.label
							}) }, l.label))
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" House of Lumere. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Terms"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "hover:text-white",
							children: "Cookies"
						})
					]
				})]
			})]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "House of Lumere — Luxury Lighting & Bespoke Chandeliers" },
			{
				name: "description",
				content: "House of Lumere curates exclusive chandeliers, pendant lighting and architectural fixtures for residences, hotels and ateliers worldwide."
			},
			{
				name: "author",
				content: "House of Lumere"
			},
			{
				property: "og:title",
				content: "House of Lumere — Luxury Lighting"
			},
			{
				property: "og:description",
				content: "Curated collections of luxury lighting crafted for timeless interiors."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "bg-background text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$9 = () => import("./projects-DKqYy9A7.mjs");
var Route$9 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects — House of Lumere" },
		{
			name: "description",
			content: "Selected residential, hospitality and architectural projects lit by House of Lumere."
		},
		{
			property: "og:title",
			content: "Projects — House of Lumere"
		},
		{
			property: "og:description",
			content: "A portfolio of residences, penthouses, hotels and ateliers shaped by our lighting."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./faq-C98ZjYDF.mjs");
var Route$8 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ — House of Lumere" },
		{
			name: "description",
			content: "Frequently asked questions about House of Lumere — lead times, customisation, trade pricing, installation and shipping."
		},
		{
			property: "og:title",
			content: "FAQ — House of Lumere"
		},
		{
			property: "og:description",
			content: "Questions about lead times, customisation, trade pricing, installation and shipping."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-BHmJujrm.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — House of Lumere" },
		{
			name: "description",
			content: "Begin a conversation with House of Lumere — for private clients, designers and architects worldwide."
		},
		{
			property: "og:title",
			content: "Contact — House of Lumere"
		},
		{
			property: "og:description",
			content: "Tell us about the room you are lighting."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./collections-Cuuql4Kj.mjs");
var Route$6 = createFileRoute("/collections")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./blog-GHsbigBI.mjs");
var Route$5 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./about-CuMjAjiG.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — House of Lumere" },
		{
			name: "description",
			content: "A house devoted to light, material and silence — founded in 2014, working alongside architects and interior designers worldwide."
		},
		{
			property: "og:title",
			content: "About — House of Lumere"
		},
		{
			property: "og:description",
			content: "Founded on the idea that light is the first piece of furniture in any great room."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./routes-KmJ1XvoH.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "House of Lumere — Luxury Lighting & Bespoke Chandeliers" },
		{
			name: "description",
			content: "House of Lumere curates exclusive chandeliers, pendant lighting and architectural fixtures for residences, hotels and ateliers worldwide."
		},
		{
			property: "og:title",
			content: "House of Lumere — Luxury Lighting"
		},
		{
			property: "og:description",
			content: "Curated collections of luxury lighting crafted for timeless interiors."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./collections.index-DWqWhpoB.mjs");
var Route$2 = createFileRoute("/collections/")({
	head: () => ({ meta: [
		{ title: "Collections — House of Lumere" },
		{
			name: "description",
			content: "Editorial collections of luxury chandeliers, pendants, sconces, ceiling lights, floor & table lamps and decorative lighting."
		},
		{
			property: "og:title",
			content: "Collections — House of Lumere"
		},
		{
			property: "og:description",
			content: "Editorial collections of luxury lighting, drawn at architectural scale."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blog.index-Dp373M4F.mjs");
var Route$1 = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: "Journal — House of Lumere" },
		{
			name: "description",
			content: "Interior trends, lighting guides, designer interviews and project stories from the House of Lumere atelier."
		},
		{
			property: "og:title",
			content: "Journal — House of Lumere"
		},
		{
			property: "og:description",
			content: "Slow writing on light, material and architecture."
		},
		{
			property: "og:image",
			content: hero_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./collections._category-LojpYvOf.mjs");
var Route = createFileRoute("/collections/$category")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ProjectsRoute = Route$9.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$10
});
var FaqRoute = Route$8.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var CollectionsRoute = Route$6.update({
	id: "/collections",
	path: "/collections",
	getParentRoute: () => Route$10
});
var BlogRoute = Route$5.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var CollectionsIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => CollectionsRoute
});
var BlogIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var ProjectsSlugRoute = Route$14.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ProjectsRoute
});
var CollectionsCategoryRoute = Route.update({
	id: "/$category",
	path: "/$category",
	getParentRoute: () => CollectionsRoute
});
var BlogSlugRoute = Route$11.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var CollectionsCategoryIndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => CollectionsCategoryRoute
});
var CollectionsCategoryProductRoute = Route$12.update({
	id: "/$product",
	path: "/$product",
	getParentRoute: () => CollectionsCategoryRoute
});
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var CollectionsCategoryRouteChildren = {
	CollectionsCategoryProductRoute,
	CollectionsCategoryIndexRoute
};
var CollectionsRouteChildren = {
	CollectionsCategoryRoute: CollectionsCategoryRoute._addFileChildren(CollectionsCategoryRouteChildren),
	CollectionsIndexRoute
};
var CollectionsRouteWithChildren = CollectionsRoute._addFileChildren(CollectionsRouteChildren);
var ProjectsRouteChildren = { ProjectsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRouteWithChildren,
	CollectionsRoute: CollectionsRouteWithChildren,
	ContactRoute,
	FaqRoute,
	ProjectsRoute: ProjectsRoute._addFileChildren(ProjectsRouteChildren)
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
