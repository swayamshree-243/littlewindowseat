const { analyzeImage } = require("../services/imageAnalysis.service");
const recommendations = require("../data/recommendations");
const {
    calculateScore
} = require("../services/recommendation.service");

const recommend = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        if (!req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({
                success: false,
                message: "Please upload only images."
            });
        }

        if (req.file.size > 5242880) {
            return res.status(400).json({
                success: false,
                message: "Image size must be less than 5MB"
            });
        }

        const result = await analyzeImage(req.file.buffer);

        const scoredRecommendations =
            recommendations.map(recommendation => ({
                title: recommendation.title,
                type: recommendation.type,
                score: calculateScore(
                    result,
                    recommendation
                )
            }));

        scoredRecommendations.sort(
            (a, b) => b.score - a.score
        );

        return res.json({
            success: true,
            analysis: result,
            recommendations:
                scoredRecommendations.slice(0, 5)
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = recommend;