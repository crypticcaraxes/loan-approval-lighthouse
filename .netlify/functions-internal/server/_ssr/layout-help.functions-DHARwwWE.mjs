import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as objectType, r as stringType, t as numberType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/layout-help.functions-DHARwwWE.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var SYSTEM = `You are a front-end responsive design expert helping a loan app (React + Tailwind CSS) support team.
A borrower describes a screen that looks wrong on their device. Reply in short plain-language Markdown with exactly these sections:
**Likely cause** – 1-3 bullet points naming the probable responsive layout issues (e.g. fixed widths, overflow, missing breakpoints, text wrapping, sticky/fixed bars overlapping).
**Suggested fix** – 2-4 concrete bullets, including Tailwind class suggestions where useful.
**Quick tip for the borrower** – one sentence they can try now (rotate, zoom, refresh, etc.).
Keep it under 200 words. Do not invent details beyond what is described.`;
var diagnoseLayout_createServerFn_handler = createServerRpc({
	id: "91f60f6e8da0765566e92cbbf8c39d709fde93787ba2daa6d837a1d262a1a321",
	name: "diagnoseLayout",
	filename: "src/lib/layout-help.functions.ts"
}, (opts) => diagnoseLayout.__executeServer(opts));
var diagnoseLayout = createServerFn({ method: "POST" }).inputValidator((d) => Input.parse(d)).handler(diagnoseLayout_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env["LOVABLE_API_KEY"];
	if (!apiKey) return {
		ok: false,
		error: "The AI helper isn't configured yet."
	};
	const { createOpenAI } = await import("../_libs/ai-sdk__openai+zod.mjs").then((n) => n.t);
	const { streamText } = await import("../_libs/ai.mjs").then((n) => n.t);
	const provider = createOpenAI({
		baseURL: "https://ai.gateway.lovable.dev/v1",
		apiKey,
		headers: {
			"Lovable-API-Key": apiKey,
			"X-Lovable-AIG-SDK": "vercel-ai-sdk"
		}
	});
	let streamError;
	try {
		const text = await streamText({
			model: provider.responses("openai/gpt-6-astra"),
			maxRetries: 0,
			instructions: SYSTEM,
			onError: ({ error }) => {
				streamError = error;
			},
			messages: [{
				role: "user",
				content: `Page: ${data.page}\nDevice: ${data.device}\nScreen width: ${data.width ?? "unknown"}px\nProblem: ${data.description}`
			}],
			providerOptions: { openai: {
				forceReasoning: true,
				reasoningEffort: "low",
				reasoningSummary: "auto",
				store: false,
				include: ["reasoning.encrypted_content"]
			} }
		}).text;
		if (!text.trim()) return {
			ok: false,
			error: "The AI couldn't produce a suggestion. Please add more detail."
		};
		return {
			ok: true,
			text
		};
	} catch (e0) {
		const e = streamError ?? e0;
		const status = e?.statusCode;
		console.error("diagnoseLayout failed", e);
		if (status === 429) return {
			ok: false,
			error: "Too many requests right now. Please try again in a minute."
		};
		if (status === 402) return {
			ok: false,
			error: "AI credits have run out for this app."
		};
		if (status === 403) return {
			ok: false,
			error: "AI access is currently blocked for this app."
		};
		return {
			ok: false,
			error: "Something went wrong analysing your screen. Please try again."
		};
	}
});
//#endregion
export { diagnoseLayout_createServerFn_handler };
