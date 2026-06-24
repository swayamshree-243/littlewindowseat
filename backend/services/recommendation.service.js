function calculateOverlap(arr1, arr2) {
    if (!arr1.length) {
        return 0;
    }

    const set1 = new Set(
        arr1.map(item => item.toLowerCase())
    );

    const set2 = new Set(
        arr2.map(item => item.toLowerCase())
    );

    let matches = 0;

    for (const item of set1) {
        if (set2.has(item)) {
            matches++;
        }
    }

    return matches / set1.size;
}

function calculateScore(imageData, recommendation) {
    let score = 0;

    score += calculateOverlap(
        imageData.setting,
        recommendation.setting
    ) * 0.30;

    score += calculateOverlap(
        imageData.weather,
        recommendation.weather
    ) * 0.20;

    score += calculateOverlap(
        imageData.aesthetic,
        recommendation.aesthetic
    ) * 0.20;

    score += calculateOverlap(
        imageData.lighting,
        recommendation.lighting
    ) * 0.15;

    score += calculateOverlap(
        imageData.mood,
        recommendation.mood
    ) * 0.08;

    score += calculateOverlap(
        imageData.colors,
        recommendation.colors
    ) * 0.05;

    score += calculateOverlap(
        imageData.objects,
        recommendation.objects
    ) * 0.02;

    return Math.round(score * 100);
}

module.exports = {
    calculateScore
};