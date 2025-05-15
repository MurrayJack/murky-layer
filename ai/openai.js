import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function chatWithGpt4o(messages) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
  });
  return response.choices[0].message;
}
