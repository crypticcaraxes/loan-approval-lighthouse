import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as LogOut } from "../_libs/lucide-react.mjs";
import { n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-BXaKTV-U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	["Personal Information", [
		["Full Legal Name", " Ann caribell"],
		["Date of Birth", "Mar 14, 1990"],
		["SSN", "•••-••-4417"],
		["Marital Status", "Single"],
		["Citizenship", "U.S. Citizen"]
	]],
	["Contact", [
		["Email", "ann.caribell748@email.com"],
		["Mobile", "(612) 555-0148"],
		["Home Address", "1820 Lakeview Ave, Apt 4B, Minneapolis, MN 55408"],
		["Time at Address", "3 years, 2 months"]
	]],
	["Employment", [
		["Employer", "Acme Inc."],
		["Job Title", "Senior Product Analyst"],
		["Employment Type", "Full-time"],
		["Time with Employer", "5 years"],
		["Work Phone", "(612) 555-0190"]
	]],
	["Financial", [
		["Annual Income", "$92,000.00"],
		["Housing", "Rent · $1,450/mo"],
		["Credit Score", "742 (Good)"],
		["Linked Bank", "Checking •••• 4948"]
	]],
	["Loan", [
		["Application ID", "APP-2026-118734"],
		["Approved Amount", "$80,000.00"],
		["Purpose", "Personal expenses"],
		["Status", "Approved · awaiting activation fee"]
	]]
];
function ProfilePage() {
	const nav = useNavigate();
	const isAuth = typeof window !== "undefined" && !!sessionStorage.getItem("lendora_auth");
	(0, import_react.useEffect)(() => {
		if (!isAuth) nav({ to: "/login" });
	}, [isAuth, nav]);
	if (!isAuth) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				back: true,
				title: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex items-center gap-4 bg-cream px-6 pb-8 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-primary-foreground",
					children: "AO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-extrabold",
					children: "Ann caribell"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Member since Oct 2026"
				})] })]
			}),
			groups.map(([title, rows]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 pt-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-base font-bold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 divide-y-2 divide-border md:grid md:grid-cols-2 md:gap-x-10 md:divide-y-0 md:[&>*]:border-b-2",
					children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 justify-between gap-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-right font-bold",
							children: v
						})]
					}, k))
				})]
			}, title)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 py-6 md:px-10 md:max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					onClick: () => sessionStorage.removeItem("lendora_auth"),
					className: "flex items-center justify-center gap-2 rounded-md border-2 border-brand py-3 font-bold text-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Log Out"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { ProfilePage as component };
