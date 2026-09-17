// Placeholder AI integration point.
//
// This intentionally does NOT call any AI provider. Wire it up to whichever
// provider you choose (Anthropic, OpenAI, OpenRouter, a local model, etc.)
// using the AI_PROVIDER / AI_API_KEY values from your own .env.local.
//
// Until you do, every caller gets an explicit "not connected" result instead
// of a faked response — the UI should surface that state, not hide it.

export type AiResult =
  | { connected: true; text: string }
  | { connected: false; reason: string };

export async function askAi(_prompt: string): Promise<AiResult> {
  const provider = process.env.AI_PROVIDER;

  if (!provider || provider === "none") {
    return {
      connected: false,
      reason: "No AI provider configured. Set AI_PROVIDER and AI_API_KEY in .env.local.",
    };
  }

  // Add your provider's API call here, e.g.:
  //
  //   const res = await fetch("https://api.your-provider.com/v1/chat", {
  //     headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` },
  //     ...
  //   });
  //
  return {
    connected: false,
    reason: `AI_PROVIDER is set to "${provider}" but no implementation has been wired up yet in lib/ai.ts.`,
  };
}
