const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

async function analyzeImage(buffer) {
    try {
        const base64Image = buffer.toString("base64");

        const prompt = `
Analyze this image and return structured JSON only.

Schema:
{
  "lighting": [],
  "mood": [],
  "colors": [],
  "setting": [],
  "objects": [],
  "weather": [],
  "aesthetic": [],
  "tags": []
}

Rules:
- Be precise and visually grounded
- Lighting: brightness + tone
- Mood: emotional feel
- Colors: dominant visible colors only
- Setting: environment
- Objects: important visible items only
- Weather: infer only if clearly visible
- Aesthetic: overall vibe
- Tags: 5-10 short keywords
- Keep all string values short (1-4 words maximum)
- Do not write full sentences
- Use standardized labels whenever possible

Return ONLY valid JSON.
Do not include markdown, backticks, or explanations.
`;

            const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                {
                    parts: [
                        { text: prompt },
                        {
                            inlineData: {
                                mimeType: "image/jpeg",
                                data: base64Image
                            }
                        }
                    ]
                }
            ]
        }); 

        console.log(response.text);
        return JSON.parse(response.text);

    } catch (error) {
        console.error("AI ERROR:", error);
        throw new Error("Image analysis failed");
    }
}

module.exports = { analyzeImage };