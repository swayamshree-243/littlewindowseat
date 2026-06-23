const { OpenAI } = require("openai");
require("dotenv").config();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function analyzeImage(buffer) {
    try {
        const base64Image = buffer.toString("base64");

        const response = await client.responses.create({
            model: "gpt-4.1-mini",
            input: [
                {
                    role: "user",
                    content: [
                        {
                            type: "input_text",
                            text: `
Analyze this image and return structured JSON only.

Schema:
{
  "lighting": "",
  "mood": "",
  "colors": [],
  "setting": "",
  "objects": [],
  "weather": "",
  "aesthetic": "",
  "tags": []
}

Rules:
- Be precise and visually grounded
- Lighting: brightness + tone (bright, warm, soft, dark, etc.)
- Mood: emotional feel (calm, energetic, nostalgic, tense, etc.)
- Colors: dominant visible colors only
- Setting: environment (indoor, street, school, nature, etc.)
- Objects: important visible items only
- Weather: infer only if clearly visible
- Aesthetic: overall vibe (cinematic, cozy, nostalgic youth, futuristic, etc.)
- Tags: 5–10 short keywords

Return ONLY valid JSON.
Do not include markdown, backticks, or explanations.
Ensure output is parseable by JSON.parse().
                            `.trim()
                        },
                        {
                            type: "input_image",
                            image_url: `data:image/jpeg;base64,${base64Image}`
                        }
                    ]
                }
            ]
        });

        return JSON.parse(response.output_text);

    } catch (error) {
        console.error("AI ERROR:", error);
        throw new Error("Image analysis failed");
    }
}

module.exports = { analyzeImage };