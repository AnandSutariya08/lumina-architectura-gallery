import { A as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PRODUCTS, t as CATEGORIES } from "./lumere-data-CUlWfz6c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections._category.index-CVYW6ms8.js
var $$splitComponentImporter = () => import("./collections._category.index-hY8z7o7Y.mjs");
var $$splitNotFoundComponentImporter = () => import("./collections._category.index-T8P9hsZT.mjs");
var Route = createFileRoute("/collections/$category/")({
	loader: ({ params }) => {
		const category = CATEGORIES.find((c) => c.slug === params.category);
		if (!category) throw notFound();
		return {
			category,
			products: PRODUCTS.filter((p) => p.category === params.category)
		};
	},
	head: ({ loaderData }) => {
		const c = loaderData?.category;
		const title = c ? `${c.title} — House of Lumere` : "Collection — House of Lumere";
		return { meta: [
			{ title },
			{
				name: "description",
				content: c?.intro ?? "A House of Lumere collection."
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: c?.intro ?? ""
			},
			{
				property: "og:image",
				content: c?.image ?? ""
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
