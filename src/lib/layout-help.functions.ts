import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  page: z.string().min(1).max(60),
  device: z.string().min(1).max(60),
  width: z.number().int().min(200).max(8000).nullable(),
  description: z.string().min(10).max(2000),
});

const SYSTEM = `You are a front-end responsive design expert helping a loan app (React + Tailwind CSS) support team.
A borrower describes a screen that looks wrong on their device. Reply in short plain-language Markdown with exactly these sections:
**Likely cause** – 1-3 bullet points naming the probable responsive layout issues (e.g. fixed widths, overflow, missing breakpoints, text wrapping, sticky/fixed bars overlapping).
**Suggested fix** – 2-4 concrete bullets, including Tailwind class suggestions where useful.
**Quick tip for the borrower** – one sentence they can try now (rotate, zoom, refresh, etc.).
Keep it under 200 words. Do not invent details beyond what is described.`;

export const diagnoseLayout = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) return { ok: false as const, error: "The AI helper isn't configured yet." };
    const { createOpenAI } = await import("@ai-sdk/openai");
    const { streamText } = await import("ai");
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });
    try {
      const result = streamText({
        model: provider.responses("openai/gpt-6-astra"),
        maxRetries: 0,
        messages: [
          { role: "system", content: SYSTEM },
          {
            role: "user",
            content: `Page: ${data.page}\nDevice: ${data.device}\nScreen width: ${data.width ?? "unknown"}px\nProblem: ${data.description}`,
          },
        ],
        providerOptions: {
          openai: {
            forceReasoning: true,
            reasoningEffort: "low",
            reasoningSummary: "auto",
            store: false,
            include: ["reasoning.encrypted_content"],
          },
        },
      });
      const text = await result.text;
      if (!text.trim()) return { ok: false as const, error: "The AI couldn't produce a suggestion. Please add more detail." };
      return { ok: true as const, text };
    } catch (e: unknown) {
      const status = (e as { statusCode?: number })?.statusCode;
      console.error("diagnoseLayout failed", e);
      if (status === 429) return { ok: false as const, error: "Too many requests right now. Please try again in a minute." };
      if (status === 402) return { ok: false as const, error: "AI credits have run out for this app." };
      if (status === 403) return { ok: false as const, error: "AI access is currently blocked for this app." };
      return { ok: false as const, error: "Something went wrong analysing your screen. Please try again." };
    }
  });
