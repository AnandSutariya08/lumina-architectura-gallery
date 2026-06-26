import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReveal } from "./use-reveal-Cazrll_v.mjs";
import { t as PageHero } from "./PageHero-FPKD9s-6.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as project_3_default, t as project_1_default } from "./project-3-DXQhNMV7.mjs";
import { t as project_2_default } from "./project-2-DdljYF8T.mjs";
import { t as project_4_default } from "./project-4-B_fwDHRH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DKqYy9A7.js
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [
	{
		slug: "maison-aurore",
		title: "Maison Aurore",
		type: "Private Residence · Paris",
		year: "2024",
		img: project_1_default,
		body: "A six-bedroom Haussmann apartment relit across three floors — including a bespoke crystal cascade above the central stair."
	},
	{
		slug: "the-adler-penthouse",
		title: "The Adler Penthouse",
		type: "Penthouse · New York",
		year: "2023",
		img: project_2_default,
		body: "Architectural lighting study for a 6,400 sq ft penthouse on Park Avenue, with linear pendants drawn to the steel coffers."
	},
	{
		slug: "restaurant-sera",
		title: "Restaurant Sera",
		type: "Hospitality · Milan",
		year: "2024",
		img: project_3_default,
		body: "Forty-two custom sconces, paired along stone-clad corridors and the chef's table — completed with Studio Marchand."
	},
	{
		slug: "villa-calanque",
		title: "Villa Calanque",
		type: "Villa · Côte d'Azur",
		year: "2022",
		img: project_4_default,
		body: "A coastal villa lit entirely in patinated brass and alabaster — including an outdoor lantern garden."
	}
];
function ProjectsPage() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Selected Projects",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"In residence —",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "not-italic text-muted-foreground",
				children: "from apartments to ateliers."
			})
		] }),
		intro: "From quiet apartments to grand hospitality interiors, a portfolio of spaces shaped by our lighting — built alongside architects and interior designers across four continents."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: "reveal mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 space-y-32 md:space-y-48",
			children: PROJECTS.map((p, i) => {
				const reverse = i % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects/$slug",
					params: { slug: p.slug },
					className: "group grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `md:col-span-8 ${reverse ? "md:order-2" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden bg-bone aspect-[4/3]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: p.title,
								loading: "lazy",
								width: 1600,
								height: 1200,
								className: "h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.03]"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `md:col-span-4 ${reverse ? "md:order-1 md:pr-10" : "md:pl-6"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow mb-6",
								children: [
									p.type,
									" · ",
									p.year
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-4xl md:text-5xl leading-[1.05] mb-8 group-hover:text-brass transition-colors duration-300",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base md:text-lg leading-relaxed mb-8",
								children: p.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "link-underline text-[11px] uppercase tracking-[0.28em]",
								children: "View case study →"
							})
						]
					})]
				}, p.slug);
			})
		})
	})] });
}
//#endregion
export { ProjectsPage as component };
