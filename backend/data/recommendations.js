const recommendations = [
    {
        id: "when-i-fly-towards-you",
        slug: "when-i-fly-towards-you",
        title: "When I Fly Towards You",
        type: "cdrama",
        poster: "",
        profiles: [
            {
                name: "summer-vacation",

                importance: 0.95,

                lighting: [
                    "bright",
                    "natural"
                ],

                mood: [
                    "joyful",
                    "free",
                    "energetic"
                ],

                colors: [
                    "blue",
                    "white",
                    "beige"
                ],

                setting: [
                    "beach",
                    "ocean",
                    "coast"
                ],

                objects: [
                    "friends",
                    "sand",
                    "water"
                ],

                weather: [
                    "sunny",
                    "clear"
                ],

                aesthetic: [
                    "summer",
                    "friendship",
                    "vacation",
                    "youthful"
                ]
            },
            {
                name: "school-life",
                importance: 1.0,
                lighting: ["bright", "natural"],
                mood: ["joyful", "carefree", "warm"],
                colors: ["blue", "white", "green"],
                setting: ["classroom", "campus", "hallway"],
                objects: ["schoolbag", "desk", "notebook"],
                weather: ["sunny"],
                aesthetic: ["youthful", "clean"]
            },
            {
                name: "friendship-group",
                importance: 0.9,
                lighting: ["soft", "natural"],
                mood: ["playful", "energetic", "heartwarming"],
                colors: ["yellow", "blue", "green"],
                setting: ["campus", "street", "cafe"],
                objects: ["bicycle", "backpack", "snacks"],
                weather: ["clear"],
                aesthetic: ["coming-of-age", "slice-of-life"]
            },
            {
                name: "summer-romance",
                importance: 0.85,
                lighting: ["golden-hour", "warm"],
                mood: ["romantic", "hopeful", "gentle"],
                colors: ["orange", "pink", "cream"],
                setting: ["park", "street", "campus"],
                objects: ["flowers", "bicycle", "letters"],
                weather: ["sunny"],
                aesthetic: ["first-love", "dreamy"]
            },
            {
                name: "study-session",
                importance: 0.75,
                lighting: ["bright", "indoor"],
                mood: ["focused", "calm", "motivated"],
                colors: ["white", "blue", "beige"],
                setting: ["library", "classroom"],
                objects: ["books", "notes", "pens"],
                weather: ["clear"],
                aesthetic: ["academic", "minimal"]
            }
        ]
    },

    {
        id: "hidden-love",
        slug: "hidden-love",
        title: "Hidden Love",
        type: "cdrama",
        poster: "",
        profiles: [
            {
                name: "first-love",
                importance: 1.0,
                lighting: ["soft", "warm"],
                mood: ["romantic", "shy", "hopeful"],
                colors: ["pink", "cream", "orange"],
                setting: ["home", "street", "cafe"],
                objects: ["phone", "flowers", "books"],
                weather: ["sunny"],
                aesthetic: ["dreamy", "soft"]
            },
            {
                name: "youth-memories",
                importance: 0.9,
                lighting: ["golden-hour"],
                mood: ["nostalgic", "warm", "gentle"],
                colors: ["gold", "blue", "cream"],
                setting: ["school", "street"],
                objects: ["schoolbag", "bicycle", "camera"],
                weather: ["clear"],
                aesthetic: ["coming-of-age", "memory-core"]
            },
            {
                name: "city-romance",
                importance: 0.85,
                lighting: ["night", "neon"],
                mood: ["romantic", "cozy", "peaceful"],
                colors: ["blue", "pink", "purple"],
                setting: ["city", "cafe", "apartment"],
                objects: ["umbrella", "coffee", "phone"],
                weather: ["rainy"],
                aesthetic: ["urban", "modern"]
            },
            {
                name: "college-life",
                importance: 0.8,
                lighting: ["bright"],
                mood: ["hopeful", "cheerful", "free"],
                colors: ["white", "blue", "green"],
                setting: ["campus", "library"],
                objects: ["books", "laptop", "notes"],
                weather: ["sunny"],
                aesthetic: ["academic", "clean"]
            }
        ]
    },

    {
        id: "twenty-five-twenty-one",
        slug: "twenty-five-twenty-one",
        title: "Twenty-Five Twenty-One",
        type: "kdrama",
        poster: "",
        profiles: [
            {
                name: "sports-training",
                importance: 1.0,
                lighting: ["bright"],
                mood: ["determined", "energetic", "competitive"],
                colors: ["blue", "white", "red"],
                setting: ["gym", "arena", "training-hall"],
                objects: ["sword", "uniform", "medal"],
                weather: ["indoor"],
                aesthetic: ["sports", "motivational"]
            },
            {
                name: "youth-friendship",
                importance: 0.95,
                lighting: ["natural"],
                mood: ["playful", "carefree", "warm"],
                colors: ["yellow", "blue", "green"],
                setting: ["street", "school", "arcade"],
                objects: ["bicycle", "helmet", "snacks"],
                weather: ["sunny"],
                aesthetic: ["coming-of-age", "retro"]
            },
            {
                name: "retro-romance",
                importance: 0.9,
                lighting: ["golden-hour"],
                mood: ["romantic", "nostalgic"],
                colors: ["orange", "teal", "cream"],
                setting: ["street", "beach"],
                objects: ["camera", "newspaper", "flowers"],
                weather: ["breeze"],
                aesthetic: ["90s", "memory-core"]
            },
            {
                name: "dream-chasing",
                importance: 0.8,
                lighting: ["bright"],
                mood: ["hopeful", "ambitious", "inspiring"],
                colors: ["white", "blue"],
                setting: ["city", "training-hall"],
                objects: ["trophy", "bag", "uniform"],
                weather: ["clear"],
                aesthetic: ["motivational", "youthful"]
            }
        ]
    },

    {
        id: "weathering-with-you",
        slug: "weathering-with-you",
        title: "Weathering with You",
        type: "anime",
        poster: "",
        profiles: [
            {
                name: "rainy-city",
                importance: 1.0,
                lighting: ["overcast"],
                mood: ["melancholic", "peaceful", "dreamy"],
                colors: ["blue", "gray", "teal"],
                setting: ["city", "street"],
                objects: ["umbrella", "train", "raindrops"],
                weather: ["rainy"],
                aesthetic: ["urban", "cinematic"]
            },
            {
                name: "sky-magic",
                importance: 0.95,
                lighting: ["sunlight", "dramatic"],
                mood: ["hopeful", "magical", "uplifting"],
                colors: ["blue", "white", "gold"],
                setting: ["sky", "rooftop"],
                objects: ["clouds", "sunlight"],
                weather: ["clear"],
                aesthetic: ["fantasy", "ethereal"]
            },
            {
                name: "city-romance",
                importance: 0.85,
                lighting: ["night", "neon"],
                mood: ["romantic", "quiet"],
                colors: ["blue", "purple", "pink"],
                setting: ["city", "rooftop"],
                objects: ["umbrella", "lights"],
                weather: ["rainy"],
                aesthetic: ["anime-core", "dreamy"]
            }
        ]
    },

    {
        id: "harry-potter-and-the-philosophers-stone",
        slug: "harry-potter-and-the-philosophers-stone",
        title: "Harry Potter and the Philosopher's Stone",
        type: "movie",
        poster: "",
        profiles: [
            {
                name: "wizard-school",
                importance: 1.0,
                lighting: ["warm", "candlelight"],
                mood: ["magical", "wonder"],
                colors: ["gold", "brown", "red"],
                setting: ["castle", "classroom"],
                objects: ["wand", "books", "owl"],
                weather: ["indoor"],
                aesthetic: ["fantasy", "dark-academia"]
            },
            {
                name: "great-hall",
                importance: 0.9,
                lighting: ["candlelight"],
                mood: ["grand", "festive"],
                colors: ["gold", "red"],
                setting: ["hall"],
                objects: ["candles", "banners", "tables"],
                weather: ["indoor"],
                aesthetic: ["magical", "medieval"]
            },
            {
                name: "castle-adventure",
                importance: 0.85,
                lighting: ["dim"],
                mood: ["mysterious", "curious"],
                colors: ["gray", "blue"],
                setting: ["corridor", "castle"],
                objects: ["keys", "door", "torch"],
                weather: ["stormy"],
                aesthetic: ["fantasy", "adventure"]
            }
        ]
    },

    {
        id: "our-secret",
        slug: "our-secret",
        title: "Our Secret",
        type: "cdrama",
        poster: "",
        profiles: [
            {
                name: "study-motivation",
                importance: 1.0,
                lighting: ["bright"],
                mood: ["focused", "determined"],
                colors: ["white", "blue"],
                setting: ["classroom", "library"],
                objects: ["books", "notes", "desk"],
                weather: ["clear"],
                aesthetic: ["academic", "clean"]
            },
            {
                name: "school-romance",
                importance: 0.95,
                lighting: ["soft"],
                mood: ["romantic", "gentle"],
                colors: ["cream", "blue"],
                setting: ["campus", "hallway"],
                objects: ["letters", "schoolbag"],
                weather: ["sunny"],
                aesthetic: ["first-love", "youthful"]
            }
        ]
    },

    {
        id: "exclusive-fairytale",
        slug: "exclusive-fairytale",
        title: "Exclusive Fairytale",
        type: "cdrama",
        poster: "",
        profiles: [
            {
                name: "childhood-friends",
                importance: 1.0,
                lighting: ["bright"],
                mood: ["playful", "warm"],
                colors: ["yellow", "blue"],
                setting: ["school", "street"],
                objects: ["bicycle", "backpack"],
                weather: ["sunny"],
                aesthetic: ["coming-of-age", "slice-of-life"]
            },
            {
                name: "cute-romance",
                importance: 0.95,
                lighting: ["soft"],
                mood: ["romantic", "sweet"],
                colors: ["pink", "cream"],
                setting: ["cafe", "campus"],
                objects: ["flowers", "dessert"],
                weather: ["clear"],
                aesthetic: ["dreamy", "soft"]
            }
        ]
    },

    {
        id: "ray-of-light",
        slug: "ray-of-light",
        title: "Ray of Light",
        type: "cdrama",
        poster: "",
        profiles: [
            {
                name: "intense-study",
                importance: 1.0,
                lighting: ["bright"],
                mood: ["focused", "determined", "serious"],
                colors: ["white", "blue", "gray"],
                setting: ["classroom", "library"],
                objects: ["books", "papers", "notes"],
                weather: ["clear"],
                aesthetic: ["academic", "realistic"]
            },
            {
                name: "exam-season",
                importance: 0.95,
                lighting: ["indoor"],
                mood: ["stressful", "ambitious"],
                colors: ["gray", "white"],
                setting: ["study-room", "classroom"],
                objects: ["clock", "notebooks", "pens"],
                weather: ["night"],
                aesthetic: ["study-core", "motivational"]
            },
            {
                name: "youth-growth",
                importance: 0.85,
                lighting: ["golden-hour"],
                mood: ["hopeful", "inspiring"],
                colors: ["gold", "blue"],
                setting: ["campus"],
                objects: ["uniform", "books"],
                weather: ["sunny"],
                aesthetic: ["coming-of-age", "motivational"]
            }
        ]
    },

    {
        id: "your-name",
        slug: "your-name",
        title: "Your Name",
        type: "anime",
        poster: "",
        profiles: [
            {
                name: "sky-romance",
                importance: 1.0,
                lighting: ["dramatic", "sunset"],
                mood: ["romantic", "emotional"],
                colors: ["orange", "blue", "pink"],
                setting: ["sky", "mountain"],
                objects: ["comet", "clouds"],
                weather: ["clear"],
                aesthetic: ["ethereal", "anime-core"]
            },
            {
                name: "small-town",
                importance: 0.9,
                lighting: ["natural"],
                mood: ["peaceful", "nostalgic"],
                colors: ["green", "blue"],
                setting: ["village", "lake"],
                objects: ["shrine", "mountains"],
                weather: ["sunny"],
                aesthetic: ["rural", "dreamy"]
            },
            {
                name: "city-lights",
                importance: 0.85,
                lighting: ["night", "neon"],
                mood: ["lonely", "hopeful"],
                colors: ["blue", "purple"],
                setting: ["city", "train"],
                objects: ["phone", "lights"],
                weather: ["clear"],
                aesthetic: ["urban", "cinematic"]
            }
        ]
    },

    {
        id: "a-silent-voice",
        slug: "a-silent-voice",
        title: "A Silent Voice",
        type: "anime",
        poster: "",
        profiles: [
            {
                name: "emotional-healing",
                importance: 1.0,
                lighting: ["soft"],
                mood: ["melancholic", "reflective"],
                colors: ["blue", "white"],
                setting: ["school", "river"],
                objects: ["notebook", "bridge"],
                weather: ["cloudy"],
                aesthetic: ["slice-of-life", "emotional"]
            },
            {
                name: "friendship-repair",
                importance: 0.9,
                lighting: ["natural"],
                mood: ["hopeful", "gentle"],
                colors: ["green", "blue"],
                setting: ["park", "school"],
                objects: ["camera", "bag"],
                weather: ["clear"],
                aesthetic: ["coming-of-age", "realistic"]
            }
        ]
    },

    {
        id: "interstellar",
        slug: "interstellar",
        title: "Interstellar",
        type: "movie",
        poster: "",
        profiles: [
            {
                name: "space-exploration",
                importance: 1.0,
                lighting: ["dark", "dramatic"],
                mood: ["awe", "mysterious"],
                colors: ["black", "blue", "white"],
                setting: ["space", "spaceship"],
                objects: ["planet", "helmet", "stars"],
                weather: ["void"],
                aesthetic: ["sci-fi", "cinematic"]
            },
            {
                name: "dust-bowl",
                importance: 0.9,
                lighting: ["harsh"],
                mood: ["survival", "somber"],
                colors: ["brown", "yellow"],
                setting: ["farm", "field"],
                objects: ["corn", "truck"],
                weather: ["dusty"],
                aesthetic: ["rural", "post-apocalyptic"]
            },
            {
                name: "cosmic-wonder",
                importance: 0.85,
                lighting: ["glowing"],
                mood: ["epic", "transcendent"],
                colors: ["blue", "white"],
                setting: ["space"],
                objects: ["wormhole", "stars"],
                weather: ["void"],
                aesthetic: ["sci-fi", "ethereal"]
            }
        ]
    },

    {
        id: "little-women",
        slug: "little-women",
        title: "Little Women",
        type: "kdrama",
        poster: "",
        profiles: [
            {
                name: "luxury-mystery",
                importance: 1.0,
                lighting: ["dim"],
                mood: ["tense", "elegant"],
                colors: ["black", "gold", "green"],
                setting: ["mansion", "office"],
                objects: ["money", "paintings", "documents"],
                weather: ["rainy"],
                aesthetic: ["dark-luxury", "thriller"]
            },
            {
                name: "sisters-bond",
                importance: 0.9,
                lighting: ["soft"],
                mood: ["emotional", "protective"],
                colors: ["cream", "green"],
                setting: ["home", "apartment"],
                objects: ["letters", "photos"],
                weather: ["cloudy"],
                aesthetic: ["realistic", "dramatic"]
            },
            {
                name: "high-society",
                importance: 0.85,
                lighting: ["warm"],
                mood: ["elegant", "suspenseful"],
                colors: ["gold", "black"],
                setting: ["gallery", "mansion"],
                objects: ["flowers", "wine", "art"],
                weather: ["clear"],
                aesthetic: ["luxury", "cinematic"]
            }
        ]
    }
];

module.exports = recommendations;