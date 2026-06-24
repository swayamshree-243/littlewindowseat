const synonyms = {
    beach: ["coast", "shore", "seaside"],
    coast: ["beach", "shore", "seaside"],

    ocean: ["sea"],
    sea: ["ocean"],

    sunny: ["clear"],
    clear: ["sunny"],

    school: ["campus"],
    campus: ["school"],

    classroom: ["school"],
    schoolbag: ["backpack"],
    backpack: ["schoolbag"],

    youthful: ["youth"],
    youth: ["youthful"],

    friendship: ["friends"],
    friends: ["friendship"]
};

function calculateOverlap(arr1, arr2) {

    if (!arr1.length) {
        return 0;
    }

    const normalized1 =
        arr1.map(item => item.toLowerCase());

    const normalized2 =
        arr2.map(item => item.toLowerCase());

    let matches = 0;

    for (const item of normalized1) {

        if (normalized2.includes(item)) {
            matches++;
            continue;
        }

        const itemSynonyms =
            synonyms[item] || [];

        const synonymMatch =
            itemSynonyms.some(
                synonym =>
                    normalized2.includes(synonym)
            );

        if (synonymMatch) {
            matches++;
        }
    }

    return matches / normalized1.length;
}

function calculateProfileScore(imageData, profile) {
    let score = 0;

    const settingMatch =
        calculateOverlap(
            imageData.setting,
            profile.setting
        );

    if (settingMatch === 0) {
        return 0;
    }

    score += calculateOverlap(
        imageData.setting,
        profile.setting
    ) * 0.40;

    score += calculateOverlap(
        imageData.weather,
        profile.weather
    ) * 0.25;

    score += calculateOverlap(
        imageData.aesthetic,
        profile.aesthetic
    ) * 0.20;

    score += calculateOverlap(
        imageData.lighting,
        profile.lighting
    ) * 0.05;

    score += calculateOverlap(
        imageData.mood,
        profile.mood
    ) * 0.05;

    score += calculateOverlap(
        imageData.colors,
        profile.colors
    ) * 0.03;

    score += calculateOverlap(
        imageData.objects,
        profile.objects
    ) * 0.02;
    return Math.round(
        score * profile.importance * 100
    );
}

function calculateRecommendationScore(
    imageData,
    recommendation
) {
    let bestScore = 0;
    let bestProfile = null;

    for (const profile of recommendation.profiles) {

        const score =
            calculateProfileScore(
                imageData,
                profile
            );

        if (score > bestScore) {
            bestScore = score;
            bestProfile = profile.name;
        }
    }

    return {
        score: bestScore,
        matchedProfile: bestProfile
    };
}

module.exports = {
    calculateRecommendationScore
};