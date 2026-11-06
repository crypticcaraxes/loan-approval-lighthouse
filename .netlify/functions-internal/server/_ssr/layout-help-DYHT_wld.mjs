import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { W as isRedirect, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Sparkles, s as LoaderCircle } from "../_libs/lucide-react.mjs";
import { i as PageIntro, n as BottomNav, t as AppHeader } from "./AppHeader-DywyPLR7.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Ch2j56mN.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as objectType, r as stringType, t as numberType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-help-DYHT_wld.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var Input = objectType({
	page: stringType().min(1).max(60),
	device: stringType().min(1).max(60),
	width: numberType().int().min(200).max(8e3).nullable(),
	description: stringType().min(10).max(2e3)
});
var diagnoseLayout = createServerFn({ method: "POST" }).inputValidator((d) => Input.parse(d)).handler(createSsrRpc("91f60f6e8da0765566e92cbbf8c39d709fde93787ba2daa6d837a1d262a1a321"));
var pages = [
	"Home",
	"Loans",
	"Payments",
	"Agreement",
	"Profile",
	"Log in"
];
var devices = [
	"Phone",
	"Tablet",
	"Laptop / desktop"
];
function render(md) {
	return md.split("\n").map((line, i) => {
		const t = line.trim();
		if (!t) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
		const html = t.replace(/^[-*]\s+/, "").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/`(.+?)`/g, "<code class='rounded bg-cream px-1'>$1</code>");
		const bullet = /^[-*]\s+/.test(t);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: bullet ? "ml-4 list-item" : "",
			dangerouslySetInnerHTML: { __html: html.replace(/<(?!\/?(b|code)\b)/g, "&lt;") }
		}, i);
	});
}
function LayoutHelpPage() {
	const diagnose = useServerFn(diagnoseLayout);
	const [page, setPage] = (0, import_react.useState)(pages[0]);
	const [device, setDevice] = (0, import_react.useState)(devices[0]);
	const [width, setWidth] = (0, import_react.useState)(null);
	const [description, setDescription] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [answer, setAnswer] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setWidth(window.innerWidth);
		setDevice(window.innerWidth < 768 ? devices[0] : window.innerWidth < 1024 ? devices[1] : devices[2]);
	}, []);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setAnswer(null);
		try {
			const r = await diagnose({ data: {
				page,
				device,
				width,
				description
			} });
			if (r.ok) setAnswer(r.text);
			else setError(r.error);
		} catch {
			setError("Please describe the problem in at least 10 characters and try again.");
		} finally {
			setLoading(false);
		}
	};
	const field = "mt-1 w-full rounded-md border-2 border-border bg-card px-3 py-2.5 text-sm outline-none focus:border-brand";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen w-full max-w-md md:max-w-3xl lg:max-w-5xl md:border-x bg-card pb-24 md:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {
				back: true,
				title: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				title: "Does something look wrong on your screen?",
				children: "Tell us which page looks off and what you see. Our AI assistant will point out the likely cause and suggest a fix."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 px-6 py-6 md:grid-cols-2 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-semibold",
							children: ["Page", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: field,
								value: page,
								onChange: (e) => setPage(e.target.value),
								children: pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-semibold",
							children: ["Device", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: field,
								value: device,
								onChange: (e) => setDevice(e.target.value),
								children: devices.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))
							})]
						}),
						width && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Your screen width: ",
								width,
								"px (sent with your report)"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-semibold",
							children: ["What looks wrong?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								className: `${field} min-h-32`,
								value: description,
								onChange: (e) => setDescription(e.target.value),
								placeholder: "e.g. The payment details are cut off on the right and I have to scroll sideways.",
								maxLength: 2e3,
								required: true,
								minLength: 10
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: loading,
							className: "flex w-full items-center justify-center gap-2 rounded-md bg-brand py-3.5 font-bold text-primary-foreground disabled:opacity-60",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), loading ? "Analysing…" : "Find the problem"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border-2 border-border p-5 text-sm leading-relaxed",
					children: [
						loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Looking at your description…"
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-destructive",
							children: error
						}),
						answer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: render(answer)
						}),
						!loading && !error && !answer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Your suggestion will appear here."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
//#endregion
export { LayoutHelpPage as component };
