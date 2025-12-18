import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: "chatgpt-4o",
        name: "ChatGPT-4o",
        version: "v1.2",
        provider: "OpenAI",
        logo: "/chatgpt.png",
        best_for: "Best for less complex tasks, like writing.",
      },
      {
        id: "claude-3-5-sonnet",
        name: "Claude 3.5 Sonnet",
        version: "v3.5",
        provider: "Anthropic",
        logo: "/claude.png",
        best_for: "Coding and software development tasks",
      },
      {
        id: "gemini-3-pro",
        name: "Gemini 3 Pro",
        version: "v3",
        provider: "Google",
        logo: "/gemini.png",
        best_for: "Image generation and coding",
      },
      {
        id: "deepseek",
        name: "DeepSeek",
        version: "v3.2",
        provider: "DeepSeek",
        logo: "/deepseek.png",
        best_for:
          "Excels at technical and logic-intensive tasks such as coding and mathematics",
      },
      {
        id: "llama-3",
        name: "Llama 3",
        version: "v3",
        provider: "Meta",
        logo: "/llama.png",
        best_for: "General language understanding, creative content generation",
      },
    ],
    pagination: {
      page: 1,
      page_size: 5,
      total_items: 5,
      total_pages: 1,
      has_next: false,
      has_previous: false,
    },
  });
}
