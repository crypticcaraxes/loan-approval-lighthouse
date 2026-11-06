import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as CalendarClock, c as Landmark, l as House, n as User, u as FilePenLine, v as ChevronLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppHeader-DywyPLR7.js
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		to: "/",
		label: "Home",
		icon: House
	},
	{
		to: "/loans",
		label: "Loans",
		icon: Landmark
	},
	{
		to: "/payment",
		label: "Payments",
		icon: CalendarClock
	},
	{
		to: "/agreement",
		label: "Agreement",
		icon: FilePenLine
	},
	{
		to: "/profile",
		label: "Profile",
		icon: User
	}
];
function BottomNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md border-t bg-card md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-5",
			children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				activeOptions: { exact: true },
				className: "flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-muted-foreground",
				activeProps: { className: "text-brand" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" }), label]
			}) }, label))
		})
	});
}
function DesktopNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Main",
		className: "hidden md:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex items-center gap-1",
			children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				activeOptions: { exact: true },
				className: "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground",
				activeProps: { className: "bg-card text-brand shadow-card" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }), label]
			}) }, label))
		})
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-2xl font-extrabold italic tracking-tight text-brand",
		children: ["Lendora", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-0.5 align-top text-[9px] not-italic",
			children: "FINANCE"
		})]
	});
}
function AppHeader({ back, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky top-0 z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-strip" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-4 border-b bg-cream px-5 py-4 md:px-8 md:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [back && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						"aria-label": "Back",
						className: "flex items-center gap-1 text-sm font-semibold md:hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" }),
							" ",
							title ?? "Back"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: back ? "hidden md:inline" : "",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopNav, {}),
				back && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				})
			]
		})]
	});
}
function PageIntro({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-cream px-6 pb-8 pt-6 md:px-10 md:pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[28px] md:text-4xl font-extrabold leading-tight tracking-tight",
			children: title
		}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 text-[15px] leading-relaxed text-muted-foreground",
			children
		})]
	});
}
//#endregion
export { PageIntro as i, BottomNav as n, Logo as r, AppHeader as t };
