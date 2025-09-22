import { GoogleGenAI } from "@google/genai";

export class GeminiClient {
  private ai: GoogleGenAI;

  constructor(apiKey: string) {
    this.ai = new GoogleGenAI({ apiKey });
  }

  async generateContent(prompt: string, temperature = 0.7): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: { temperature }
    });
    return response.text || "";
  }
}