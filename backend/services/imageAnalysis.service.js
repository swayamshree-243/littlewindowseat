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
- Be visually accurate.
- Return arrays for every field.
- Use standardized tags.
- Each array item must represent ONE concept only.
- Prefer 1 word per item.
- Maximum 2 words per item.
- Never use full sentences.
- Never combine multiple concepts into one item.

Examples:
"Sandy beach" -> "beach"
"Clear sky" -> "clear"
"Deep blue ocean" -> "ocean"
"Summertime" -> "summer"
"Youthful friendship" -> ["youthful", "friendship"]
"Vacation vibe" -> "vacation"

Field Guidelines:

Lighting:
- Examples: bright, warm, soft, natural, dark, neon

Mood:
- Examples: joyful, calm, energetic, romantic, nostalgic, peaceful

Colors:
- Dominant visible colors only.
- Examples: blue, white, pink, green, beige

Setting:
- Environment tags only.
- Examples: beach, ocean, school, classroom, park, street, mountain, city

Objects:
- Important visible objects only.
- Examples: people, bicycle, bag, book, water, tree

Weather:
- Examples: sunny, clear, cloudy, rainy, snowy

Aesthetic:
- Examples: youthful, summer, friendship, vacation, cozy, cinematic, romantic, nostalgic

Tags:
- 5-10 general keywords describing the image.

If multiple concepts exist, split them into separate array items.

Return ONLY valid JSON.
Do not include markdown.
Do not include explanations.
Output must be parseable by JSON.parse().
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