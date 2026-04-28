var gameData = {
    taskData: {},
    itemData: {},

    coins: 0,
    days: 365 * 14,
    totalDays: 0,
    evil: 0,
    evil_perks_points: 0,
    evil_perks: {
        reduce_eye_requirement: 0,
        reduce_evil_requirement: 0,
        reduce_the_void_requirement: 0,
        reduce_celestial_requirement: 0,
        receive_essence: 0
    },
    evil_perks_keep: false,
    essence: 0,
    dark_matter: 0,
    dark_orbs: 0,
    hypercubes: 0,
    perks_points: 0,
    perks: {
        auto_dark_orb: 0,
        auto_dark_shop: 0,
        auto_boost: 0,
        instant_evil: 0,
        instant_essence: 0,
        hypercube_boost: 0,
        positive_dark_mater_skills: 0,
        save_challenges: 0,
        auto_sacrifice: 0,
        double_perk_points_gain: 0,
        instant_dark_matter: 0,
        keep_dark_mater_skills: 0,
        hyper_speed: 0,
        both_dark_mater_skills: 0,
        evil_booster: 0,
        more_perk_points : 0
    },


    paused: false,
    timeWarpingEnabled: true,

    rebirthOneCount: 0,
    rebirthOneTime: 0,
    rebirthTwoCount: 0,
    rebirthTwoTime: 0,
    rebirthThreeCount: 0,
    rebirthThreeTime: 0,
    rebirthFourCount: 0,
    rebirthFourTime: 0,
    rebirthFiveCount: 0,
    rebirthFiveTime: 0,

    currentJob: null,
    currentProperty: null,
    currentMisc: null,

    settings: {
        stickySidebar: true,
        theme: 1,
        currencyNotation: 0,
        numberNotation: 1,
        layout: 1,
        fontSize: 0,
        selectedTab: 'jobs',
        enableKeybinds: false,
    },
    stats: {
        startDate: new Date(),
        fastest1: null,
        fastest2: null,
        fastest3: null,
        fastest4: null,
        fastestGame: null,
        EvilPerSecond: 0,
        maxEvilPerSecond: 0,
        maxEvilPerSecondRt: 0,
        EssencePerSecond: 0,
        maxEssencePerSecond: 0,
        maxEssencePerSecondRt: 0,
        maxEssenceReached: 0,
    },
    active_challenge: "",
    challenges: {
        an_unhappy_life: 0,
        rich_and_the_poor: 0,
        time_does_not_fly: 0,
        dance_with_the_devil: 0,
        legends_never_die: 0,
        the_darkest_time: 0,
    },
    dark_matter_shop: {
        // Upgradables.
        dark_orb_generator: 0,
        a_deal_with_the_chairman: 0,
        a_gift_from_god: 0,
        life_coach: 0,
        gotta_be_fast: 0,

        // Permanent unlocks
        a_miracle: false,

        // SKill tree
        speed_is_life: 0,
        your_greatest_debt: 0,
        essence_collector: 0,
        explosion_of_the_universe: 0,
        multiverse_explorer: 0,
    },
    metaverse: {
        boost_cooldown_modifier: 1,
        boost_timer_modifier: 1,
        boost_warp_modifier: 100,
        hypercube_gain_modifier: 1,
        evil_tran_gain: 0,
        essence_gain_modifier: 0,
        challenge_altar: 0,
        dark_mater_gain_modifer: 0,
    },

    realtime: 0.0,
    realtimeRun: 0.0,

    // new 3.0 stuff    
    boost_cooldown: 0.0,
    boost_timer: 0.0,
    boost_active: false,

    save_date_time: 0
}

var tempData = {}

var autoBuyEnabled = true

const updateSpeed = 20
const baseLifespan = 365 * 70
const baseGameSpeed = 4
const heroIncomeMult = 2.5e18

const permanentUnlocks = ["Quick task display", "Potential points", "Rebirth tab", "Dark Matter", "Dark Matter Skills", "Dark Matter Skills2", "Metaverse", "Metaverse Perks", "Metaverse Perks Button", "Congratulations"]
const metaverseUnlocks = ["Reduce Boost Cooldown", "Increase Boost Duration", "Increase Primordial Spark Gain", "Gain evil at new transcension",
    "Essence gain multiplier", "Challenges are not reset", "Dark Matter gain multiplier"]

const jobBaseData = {
    "Beggar": { name: "Beggar", maxXp: 50, income: 5, heroxp: 36 },
    "Farmer": { name: "Farmer", maxXp: 100, income: 9, heroxp: 37 },
    "Fisherman": { name: "Fisherman", maxXp: 200, income: 15, heroxp: 38 },
    "Miner": { name: "Miner", maxXp: 400, income: 40, heroxp: 39 },
    "Blacksmith": { name: "Blacksmith", maxXp: 800, income: 80, heroxp: 40 },
    "Merchant": { name: "Merchant", maxXp: 1600, income: 150, heroxp: 41 },

    "Squire": { name: "Squire", maxXp: 42, income: 5, heroxp: 51 },
    "Footman": { name: "Footman", maxXp: 1000, income: 50, heroxp: 52 },
    "Veteran footman": { name: "Veteran footman", maxXp: 10000, income: 120, heroxp: 53 },
    "Centenary": { name: "Centenary", maxXp: 100000, income: 300, heroxp: 54 },
    "Knight": { name: "Knight", maxXp: 1000000, income: 1000, heroxp: 57 },
    "Veteran Knight": { name: "Veteran Knight", maxXp: 7500000, income: 3000, heroxp: 61 },
    "Holy Knight": { name: "Holy Knight", maxXp: 4e7, income: 5000, heroxp: 64 },
    "Lieutenant General": { name: "Lieutenant General", maxXp: 1.5e8, income: 50000, heroxp: 77 },

    "Student": { name: "Student", maxXp: 1e5, income: 100, heroxp: 79 },
    "Apprentice Mage": { name: "Apprentice Mage", maxXp: 1e6, income: 1000, heroxp: 82 },
    "Master Wizard": { name: "Master Wizard", maxXp: 1e8, income: 70000, heroxp: 95 },
    "Archmage": { name: "Archmage", maxXp: 1e10, income: 350000, heroxp: 95 },
    "Chronomancer": { name: "Chronomancer", maxXp: 2e12, income: 1000000, heroxp: 95 },
    "Chairman": { name: "Chairman", maxXp: 2e13, income: 10000000, heroxp: 106 },
    "Imperator": { name: "Imperator", maxXp: 9e15, income: 60000000, heroxp: 129 },

    "Corrupted": { name: "Corrupted", maxXp: 1e14, income: 2.5e7, heroxp: 131 },
    "Void Fiend": { name: "Void Fiend", maxXp: 1.8e16, income: 6e8, heroxp: 237 },
    "Void Wraith": { name: "Void Wraith", maxXp: 1.8e17, income: 5e9, heroxp: 238 },
    "Void Lord": { name: "Void Lord", maxXp: 2.8e19, income: 1e11, heroxp: 238 },
    "Abyss God": { name: "Abyss God", maxXp: 4e20, income: 1e12, heroxp: 250 },

    "Eternal Wanderer": { name: "Eternal Wanderer", maxXp: 5.5e19, income: 1e12, heroxp: 250 },
    "Nova": { name: "Nova", maxXp: 5.1e19, income: 3e12, heroxp: 250 },
    "Sigma Proioxis": { name: "Sigma Proioxis", maxXp: 5e20, income: 2.15e13, heroxp: 260 },
    "One Above All": { name: "One Above All", maxXp: 5e27, income: 2.5e16, heroxp: 265 },

    "Snow Crash": { name: "Snow Crash", maxXp: Infinity, income: 2.5e52, heroxp: 1015 },
    "Lost in the dark": { name: "Lost in the dark", maxXp: Infinity, income: 2.5e58, heroxp: 1358 },
    "Omega": { name: "Omega", maxXp: Infinity, income: 2.5e62, heroxp: 3120 },
}

const skillBaseData = {
    // Fundamental / Fundamental
    "Concentration": { name: "Concentration", maxXp: 100, heroxp: 36, effect: 0.01, description: "Skill XP" },
    "Productivity": { name: "Productivity", maxXp: 100, heroxp: 37, effect: 0.01, description: "Hero XP" },
    "Bargaining": { name: "Bargaining", maxXp: 100, heroxp: 38, effect: -0.01, description: "Reduced Expenses" },
    "Meditation": { name: "Meditation", maxXp: 100, heroxp: 39, effect: 0.01, description: "Happiness" },

    // Combat / Martial arts 
    "Strength": { name: "Strength", maxXp: 100, heroxp: 40, effect: 0.01, description: "Military Pay" },
    "Battle Tactics": { name: "Battle Tactics", maxXp: 100, heroxp: 41, effect: 0.01, description: "Military XP" },
    "Muscle Memory": { name: "Muscle Memory", maxXp: 100, heroxp: 42, effect: 0.01, description: "Strength XP" },

    // / Spiritual techniques
    "Mana Control": { name: "Mana Control", maxXp: 100, heroxp: 46, effect: 0.01, description: "T.A.A. XP" },
    "Life Essence": { name: "Life Essence", maxXp: 100, heroxp: 82, effect: 0.01, description: "Longer Lifespan" },
    "Time Warping": { name: "Time Warping", maxXp: 100, heroxp: 82, effect: 0.01, description: "Gamespeed" },
    "Astral Body": { name: "Astral Body", maxXp: 100, heroxp: 100, effect: 0.0035, description: "Longer lifespan" },
    "Temporal Dimension": { name: "Temporal Dimension", maxXp: 100, heroxp: 115, effect: 0.006, description: "Gamespeed" },

    // Dark magic / Conceptual arts
    "Dark Influence": { name: "Dark Influence", maxXp: 100, heroxp: 155, effect: 0.01, description: "All XP" },
    "Evil Control": { name: "Evil Control", maxXp: 100, heroxp: 156, effect: 0.01, description: "Potential Gain" },
    "Intimidation": { name: "Intimidation", maxXp: 100, heroxp: 157, effect: -0.01, description: "Reduced Expenses" },
    "Blood Meditation": { name: "Blood Meditation", maxXp: 100, heroxp: 176, effect: 0.01, description: "Potential Gain" },
    "Demon's Wealth": { name: "Demon's Wealth", maxXp: 100, heroxp: 178, effect: 0.002, description: "Hero Pay" },
    "Dark Knowledge": { name: "Dark Knowledge", maxXp: 100, heroxp: 180, effect: 0.003, description: "Hero XP" },
    "Void Influence": { name: "Void Influence", maxXp: 100, heroxp: 206, effect: 0.0028, description: "All XP" },
    "Time Loop": { name: "Time Loop", maxXp: 100, heroxp: 207, effect: 0.001, description: "Gamespeed" },

    // ? / ?
    "Cosmic Longevity": { name: "Cosmic Longevity", maxXp: 100, heroxp: 266, effect: 0.0015, description: "Longer Lifespan" },
    "Cosmic Recollection": { name: "Cosmic Recollection", maxXp: 100, heroxp: 272, effect: 0.00065, description: "Max Lvl Multiplier" },
    "Essence Collector": { name: "Essence Collector", maxXp: 100, heroxp: 288, effect: 0.01, description: "Essence Gain" },
    "Galactic Command": { name: "Galactic Command", maxXp: 100, heroxp: 290, effect: -0.01, description: "Reduced Expenses" },

    // ? / ?
    "Yin Yang": { name: "Yin Yang", maxXp: 100, heroxp: 290, effect: 0.020, description: "Essence + Potential Gain" },
    "Parallel Universe": { name: "Parallel Universe", maxXp: 100, heroxp: 300, effect: 0.02, description: "All XP" },
    "Higher Dimensions": { name: "Higher Dimensions", maxXp: 100, heroxp: 300, effect: 0.001, description: "Longer Lifespan" },
    "Epiphany": { name: "Epiphany", maxXp: 100, heroxp: 280, effect: 0.012, description: "Galactic Council XP" },

}

const itemBaseData = {
     
    "Homeless": { name: "Homeless", expense: 0, effect: 1, heromult: 2, heroeffect: 2e6 },
    "Tent": { name: "Tent", expense: 15, effect: 1.4, heromult: 2, heroeffect: 2e7 },

    "Wooden Hut": { name: "Wooden Hut", expense: 100, effect: 2, heromult: 3, heroeffect: 2e8 },
    "Cottage": { name: "Cottage", expense: 750, effect: 3.5, heromult: 3, heroeffect: 2e9 },
    "House": { name: "House", expense: 3000, effect: 6, heromult: 4, heroeffect: 2e10 },
    "Large House": { name: "Large House", expense: 25000, effect: 12, heromult: 4, heroeffect: 2e11 },
    "Small Palace": { name: "Small Palace", expense: 300000, effect: 25, heromult: 5, heroeffect: 2e12 },
    "Grand Palace": { name: "Grand Palace", expense: 5000000, effect: 60, heromult: 5, heroeffect: 2e13 },
    "Town Ruler": { name: "Town Ruler", expense: 35000000, effect: 120, heromult: 6, heroeffect: 2e15 },
    "City Ruler": { name: "City Ruler", expense: 1.1e9, effect: 500, heromult: 7, heroeffect: 2e17 },
    "Nation Ruler": { name: "Nation Ruler", expense: 1.3e10, effect: 1200, heromult: 8, heroeffect: 2e19 },
    "Pocket Dimension": { name: "Pocket Dimension", expense: 4.9e10, effect: 5000, heromult: 9, heroeffect: 2e22 },
    "Void Realm": { name: "Void Realm", expense: 1.21e11, effect: 15000, heromult: 10, heroeffect: 2e25 },
    "Void Universe": { name: "Void Universe", expense: 2e12, effect: 30000, heromult: 11, heroeffect: 2e28 },
    "Astral Realm": { name: "Astral Realm", expense: 1.6e14, effect: 150000, heromult: 12, heroeffect: 2e31 },
    "Galactic Throne": { name: "Galactic Throne", expense: 5e15, effect: 300000, heromult: 13, heroeffect: 2e35 },
    "Spaceship": { name: "Spaceship", expense: 1e18, effect: 1500000, heromult: 15, heroeffect: 5e42 },
    "Planet": { name: "Planet", expense: 1e22, effect: 5000000, heromult: 16, heroeffect: 5e46 },
    "Ringworld": { name: "Ringworld", expense: 1e24, effect: 50000000, heromult: 17, heroeffect: 5e49 },

    // Heroic only
    "Stellar Neighborhood": { name: "Stellar Neighborhood", expense: 1e27, effect: 60000000, heromult: 17, heroeffect: 6e49,  },
    "Galaxy": { name: "Galaxy", expense: 1e30, effect: 75000000, heromult: 18, heroeffect: 7.5e49 },
    "Supercluster": { name: "Supercluster", expense: 1e33, effect: 100000000, heromult: 20, heroeffect: 1e50 },
    "Galaxy Filament": { name: "Galaxy Filament", expense: 1e36, effect: 1000000000, heromult: 25, heroeffect: 1e52 },
    "Observable Universe": { name: "Observable Universe", expense: 1e39, effect: 10000000000, heromult: 30, heroeffect: 1e54 },
    "Multiverse": { name: "Multiverse", expense: 1e42, effect: 100000000000, heromult: 35, heroeffect: 1e60 },
    "Quantum World": { name: "Quantum World", expense: 1e49, effect: 1000000000000, heromult: 40, heroeffect: 1e64 },
    "Boötes Void": { name: "Boötes Void", expense: 3e74, effect: 1000000000000, heromult: 40, heroeffect: 1e80 },

    // Misc
    "Book": { name: "Book", expense: 10, effect: 1.5, description: "Skill XP", heromult: 2, heroeffect: 10 },
    "Dumbbells": { name: "Dumbbells", expense: 50, effect: 1.5, description: "Strength XP", heromult: 2, heroeffect: 10 },
    "Personal Squire": { name: "Personal Squire", expense: 200, effect: 2, description: "Hero XP", heromult: 3, heroeffect: 10 },
    "Steel Longsword": { name: "Steel Longsword", expense: 1000, effect: 2, description: "Military XP", heromult: 3, heroeffect: 10 },
    "Butler": { name: "Butler", expense: 7500, effect: 1.5, description: "Happiness", heromult: 4, heroeffect: 10 },
    "Sapphire Charm": { name: "Sapphire Charm", expense: 50000, effect: 3, description: "Magic XP", heromult: 4, heroeffect: 10 },
    "Study Desk": { name: "Study Desk", expense: 1000000, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Library": { name: "Library", expense: 1e7, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Observatory": { name: "Observatory", expense: 1.4e8, effect: 5, description: "Magic XP", heromult: 6, heroeffect: 10 },
    "Mind's Eye": { name: "Mind's Eye", expense: 3.25e9, effect: 10, description: "Fundamentals XP", heromult: 8, heroeffect: 10 },
    "Void Necklace": { name: "Void Necklace", expense: 2.8e10, effect: 3, description: "Void Manipulation XP", heromult: 10, heroeffect: 10 },
    "Void Armor": { name: "Void Armor", expense: 1.97e11, effect: 3, description: "The Void XP", heromult: 10, heroeffect: 10 },
    "Void Blade": { name: "Void Blade", expense: 5e11, effect: 3, description: "Skill XP", heromult: 11, heroeffect: 10 },
    "Void Orb": { name: "Void Orb", expense: 1.2e12, effect: 3, description: "Void Manipulation XP", heromult: 11, heroeffect: 10 },
    "Void Dust": { name: "Void Dust", expense: 2.5e13, effect: 3, description: "The Void XP", heromult: 12, heroeffect: 10 },
    "Celestial Robe": { name: "Celestial Robe", expense: 3e14, effect: 5, description: "Galactic Council XP", heromult: 12, heroeffect: 10 },
    "Universe Fragment": { name: "Universe Fragment", expense: 1.85e16, effect: 3, description: "Skill XP", heromult: 13, heroeffect: 1000000 },
    "Multiverse Fragment": { name: "Multiverse Fragment", expense: 2e17, effect: 5, description: "Happiness", heromult: 15, heroeffect: 1000000 },
    "Stairway to heaven": { name: "Stairway to heaven", expense: 1e38, effect: 10, description: "Happiness", heromult: 30, heroeffect: 1000000 },
    "Highway to hell": { name: "Highway to hell", expense: 1e42, effect: 10, description: "Potential Gain", heromult: 30, heroeffect: 1000000 },
    "Tesseract": { name: "Tesseract", expense: 1e48, effect: 1, description: "Primordial Spark Gain", heromult: 30, heroeffect: 10 },
    "Desintegration": { name: "Desintegration", expense: 1e55, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 100 },
    "Custom Galaxy": { name: "Custom Galaxy", expense: 1e64, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 1e100 },
    "Hypersphere": { name: "Hypersphere", expense: 1e91, effect: 1, description: "Primordial Spark Gain", heromult: 30, heroeffect: 1e50 },
}

const requirementsBaseData = {
    // Categories
    "The Arcane Association": new TaskRequirement([removeSpaces(".The Arcane Association")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Galactic Council": new AgeRequirement([removeSpaces(".Galactic Council")], [{ requirement: 10000 }]),
    "The Void": new AgeRequirement([removeSpaces(".The Void")], [{ requirement: 1000 }]),
    "Celestial Powers": new AgeRequirement([removeSpaces(".Celestial Powers")], [{ requirement: 10000 }]),
    "Dark Magic": new EvilRequirement([removeSpaces(".Dark Magic")], [{ requirement: 1 }]),
    "Almightiness": new EssenceRequirement([".Almightiness"], [{ requirement: 1 }]),
    "Heroic Milestones": new EssenceRequirement([removeSpaces(".Heroic Milestones")], [{ requirement: 400000 }]),
    "Dark Milestones": new EssenceRequirement([removeSpaces(".Dark Milestones")], [{ requirement: 5e10 }]),
    "Metaverse Milestones": new EssenceRequirement([removeSpaces(".Metaverse Milestones")], [{ requirement: 1e60 }]),
    "Metaverse Guards": new EssenceRequirement([removeSpaces(".Metaverse Guards")], [{ requirement: 1e90 }]),
    
    // Rebirth items
    "Rebirth tab": new AgeRequirement(["#rebirthTabButton"], [{ requirement: 25 }]),
    "Rebirth note 0": new AgeRequirement(["#rebirthNote0"], [{ requirement: 25 }]),
    "Rebirth note 1": new AgeRequirement(["#rebirthNote1"], [{ requirement: 45 }]),
    "Rebirth note 2": new AgeRequirement(["#rebirthNote2"], [{ requirement: 65 }]),
    "Rebirth note 3": new AgeRequirement(["#rebirthNote3"], [{ requirement: 200 }]),
    "Rebirth note 4": new AgeRequirement(["#rebirthNote4"], [{ requirement: 1000 }]),
    "Rebirth note 5": new AgeRequirement(["#rebirthNote5"], [{ requirement: 10000 }]),
    "Rebirth note 6": new TaskRequirement(["#rebirthNote6"], [{ task: "Cosmic Recollection", requirement: 1 }]),
    "Rebirth note 7": new EssenceRequirement(["#rebirthNote7"], [{ requirement: 5e10 }]),
    "Rebirth note 8": new EssenceRequirement(["#rebirthNote8"], [{ requirement: 1e60 }]),

    "Rebirth button 1": new AgeRequirement(["#rebirthButton1"], [{ requirement: 65 }]),
    "Rebirth button 2": new AgeRequirement(["#rebirthButton2"], [{ requirement: 200 }]),
    "Rebirth button 3": new TaskRequirement(["#rebirthButton3"], [{ task: "Cosmic Recollection", requirement: 1 }]),
    "Rebirth button 4": new EssenceRequirement(["#rebirthButton4"], [{ requirement: 5e10 }]),
    "Rebirth button 5": new EssenceRequirement(["#rebirthButton5"], [{ requirement: 1e60 }]),

    "Rebirth stats evil": new AgeRequirement(["#statsEvilGain"], [{ requirement: 200 }]),
    "Rebirth stats essence": new TaskRequirement(["#statsEssenceGain"], [{ task: "Cosmic Recollection", requirement: 1 }]),

    // Sidebar items
    "Quick task display": new AgeRequirement(["#quickTaskDisplay"], [{ requirement: 20 }]),
    "Evil info": new EvilRequirement(["#evilInfo"], [{ requirement: 1 }]),
    "Essence info": new EssenceRequirement(["#essenceInfo"], [{ requirement: 1 }]),
    "Dark Matter info": new DarkMatterRequirement(["#darkMatterInfo"], [{ requirement: 1 }]),
    "Dark Orbs info": new DarkOrbsRequirement(["#darkOrbsInfo"], [{ requirement: 1 }]),
    "Hypercubes info": new HypercubeRequirement(["#hypercubesInfo"], [{ requirement: 1 }]),

    // Common work
    "Beggar": new TaskRequirement([getQuerySelector("Beggar")], []),
    "Farmer": new TaskRequirement([getQuerySelector("Farmer")], [{ task: "Beggar", requirement: 10 }]),
    "Fisherman": new TaskRequirement([getQuerySelector("Fisherman")], [{ task: "Farmer", requirement: 10 }]),
    "Miner": new TaskRequirement([getQuerySelector("Miner")], [{ task: "Strength", requirement: 10 }, { task: "Fisherman", requirement: 10 }]),
    "Blacksmith": new TaskRequirement([getQuerySelector("Blacksmith")], [{ task: "Strength", requirement: 30 }, { task: "Miner", requirement: 10 }]),
    "Merchant": new TaskRequirement([getQuerySelector("Merchant")], [{ task: "Bargaining", requirement: 50 }, { task: "Blacksmith", requirement: 10 }]),

    // Military
    "Squire": new TaskRequirement([getQuerySelector("Squire")], [{ task: "Strength", requirement: 5 }]),
    "Footman": new TaskRequirement([getQuerySelector("Footman")], [{ task: "Strength", requirement: 20 }, { task: "Squire", requirement: 10 }]),
    "Veteran footman": new TaskRequirement([getQuerySelector("Veteran footman")], [{ task: "Battle Tactics", requirement: 40 }, { task: "Footman", requirement: 10 }]),
    "Centenary": new TaskRequirement([getQuerySelector("Centenary")], [{ task: "Strength", requirement: 100 }, { task: "Veteran footman", requirement: 10 }]),
    "Knight": new TaskRequirement([getQuerySelector("Knight")], [{ task: "Battle Tactics", requirement: 150 }, { task: "Centenary", requirement: 10 }]),
    "Veteran Knight": new TaskRequirement([getQuerySelector("Veteran Knight")], [{ task: "Strength", requirement: 300 }, { task: "Knight", requirement: 10 }]),
    "Holy Knight": new TaskRequirement([getQuerySelector("Holy Knight")], [{ task: "Mana Control", requirement: 500 }, { task: "Veteran Knight", requirement: 10 }]),
    "Lieutenant General": new TaskRequirement([getQuerySelector("Lieutenant General")], [{ task: "Mana Control", requirement: 1000 }, { task: "Battle Tactics", requirement: 1000 }, { task: "Holy Knight", requirement: 10 }]),

    // The Arcane Association
    "Student": new TaskRequirement([getQuerySelector("Student")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Apprentice Mage": new TaskRequirement([getQuerySelector("Apprentice Mage")], [{ task: "Mana Control", requirement: 400 }, { task: "Student", requirement: 10 }]),
    "Master Wizard": new TaskRequirement([getQuerySelector("Master Wizard")], [{ task: "Mana Control", requirement: 1000 }, { task: "Apprentice Mage", requirement: 20 }]),
    "Archmage": new TaskRequirement([getQuerySelector("Archmage")], [{ task: "Mana Control", requirement: 1200 }, { task: "Master Wizard", requirement: 10 }]),
    "Chronomancer": new TaskRequirement([getQuerySelector("Chronomancer")], [{ task: "Mana Control", requirement: 1500 }, { task: "Meditation", requirement: 1500 }, { task: "Archmage", requirement: 25 }]),
    "Chairman": new TaskRequirement([getQuerySelector("Chairman")], [{ task: "Mana Control", requirement: 2000 }, { task: "Productivity", requirement: 2000 }, { task: "Chronomancer", requirement: 50 }]),
    "Imperator": new TaskRequirement([getQuerySelector("Imperator")], [{ task: "Mana Control", requirement: 3200, herequirement: 650 }, { task: "Concentration", requirement: 3000 }, { task: "Chairman", requirement: 666 }]),

    // The Void
    "Corrupted": new AgeRequirement([getQuerySelector("Corrupted")], [{ requirement: 1000 }]),
    "Void Fiend": new TaskRequirement([getQuerySelector("Void Fiend")], [{ task: "Dark Knowledge", requirement: 3000 }, { task: "Corrupted", requirement: 250 }]),
    "Void Wraith": new TaskRequirement([getQuerySelector("Void Wraith")], [{ task: "Temporal Dimension", requirement: 3400 }, { task: "Void Fiend", requirement: 350, herequirement: 180 }]),
    "Void Lord": new TaskRequirement([getQuerySelector("Void Lord")], [{ task: "Time Loop", requirement: 3800, herequirement: 200 }, { task: "Void Wraith", requirement: 300 }]),
    "Abyss God": new TaskRequirement([getQuerySelector("Abyss God")], [{ task: "Blood Meditation", requirement: 4700, herequirement: 300 }, { task: "Void Lord", requirement: 900, herequirement: 125 }]),

    // Galactic Council
    "Eternal Wanderer": new AgeRequirement([getQuerySelector("Eternal Wanderer")], [{ requirement: 10000 }]),
    "Nova": new TaskRequirement([getQuerySelector("Nova")], [{ task: "Eternal Wanderer", requirement: 15 }, { task: "Cosmic Longevity", requirement: 4000, herequirement: 180 }]),
    "Sigma Proioxis": new TaskRequirement([getQuerySelector("Sigma Proioxis")], [{ task: "Nova", requirement: 200 }, { task: "Cosmic Recollection", requirement: 4500, herequirement: 350 }]),
    "One Above All": new TaskRequirement([getQuerySelector("One Above All")], [{ task: "Meditation", requirement: 6300 }, { task: "Sigma Proioxis", requirement: 1800, herequirement: 500 }]),

    // Metaverse Guards
    "Snow Crash": new EssenceRequirement([getQuerySelector("Snow Crash")], [{ requirement: 1e90, herequirement: 1e120 }]),
    "Lost in the dark": new TaskRequirement([getQuerySelector("Lost in the dark")], [{ task: "Snow Crash", requirement: 3500, herequirement: 158000 }]),
    "Omega": new TaskRequirement([getQuerySelector("Omega")], [{ task: "Lost in the dark", requirement: 25000, herequirement: 185000 }]),

    // Fundamentals
    "Concentration": new TaskRequirement([getQuerySelector("Concentration")], []),
    "Productivity": new TaskRequirement([getQuerySelector("Productivity")], [{ task: "Concentration", requirement: 5 }]),
    "Bargaining": new TaskRequirement([getQuerySelector("Bargaining")], [{ task: "Concentration", requirement: 20 }]),
    "Meditation": new TaskRequirement([getQuerySelector("Meditation")], [{ task: "Concentration", requirement: 30 }, { task: "Productivity", requirement: 20 }]),

    // Combat
    "Strength": new TaskRequirement([getQuerySelector("Strength")], []),
    "Battle Tactics": new TaskRequirement([getQuerySelector("Battle Tactics")], [{ task: "Concentration", requirement: 20 }]),
    "Muscle Memory": new TaskRequirement([getQuerySelector("Muscle Memory")], [{ task: "Concentration", requirement: 30 }, { task: "Strength", requirement: 30 }]),

    // Magic
    "Mana Control": new TaskRequirement([getQuerySelector("Mana Control")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Life Essence": new TaskRequirement([getQuerySelector("Life Essence")], [{ task: "Apprentice Mage", requirement: 10 }]),
    "Time Warping": new TaskRequirement([getQuerySelector("Time Warping")], [{ task: "Master Wizard", requirement: 10 }]),
    "Astral Body": new TaskRequirement([getQuerySelector("Astral Body")], [{ task: "Archmage", requirement: 10 }]),
    "Temporal Dimension": new TaskRequirement([getQuerySelector("Temporal Dimension")], [{ task: "Chronomancer", requirement: 25 }]),

    // Dark Magic
    "Dark Influence": new EvilRequirement([getQuerySelector("Dark Influence")], [{ requirement: 1 }]),
    "Evil Control": new EvilRequirement([getQuerySelector("Evil Control")], [{ requirement: 1 }]),
    "Intimidation": new EvilRequirement([getQuerySelector("Intimidation")], [{ requirement: 1 }]),
    "Blood Meditation": new EvilRequirement([getQuerySelector("Blood Meditation")], [{ requirement: 50 }]),
    "Demon's Wealth": new EvilRequirement([getQuerySelector("Demon's Wealth")], [{ requirement: 500 }]),
    "Dark Knowledge": new EvilRequirement([getQuerySelector("Dark Knowledge")], [{ requirement: 5000 }]),
    "Void Influence": new EvilRequirement([getQuerySelector("Void Influence")], [{ requirement: 50000 }]),
    "Time Loop": new EvilRequirement([getQuerySelector("Time Loop")], [{ requirement: 2500000 }]),

    // Celestial Powers
    "Cosmic Longevity": new TaskRequirement([getQuerySelector("Cosmic Longevity")], [{ task: "Eternal Wanderer", requirement: 1 }]),
    "Cosmic Recollection": new TaskRequirement([getQuerySelector("Cosmic Recollection")], [{ task: "Nova", requirement: 50 }, { task: "Meditation", requirement: 4200 }, { task: "Time Loop", requirement: 900 }]),
    "Essence Collector": new TaskRequirement([getQuerySelector("Essence Collector")], [{ task: "Sigma Proioxis", requirement: 500, herequirement: 360 }, { task: "Evil Control", requirement: 4900, herequirement: 2900 }, { task: "Dark Knowledge", requirement: 6300, herequirement: 3400 }]),
    "Galactic Command": new TaskRequirement([getQuerySelector("Galactic Command")], [{ task: "Essence Collector", requirement: 5000, herequirement: 210 }, { task: "Bargaining", requirement: 5000 }]),

    // Almightiness
    "Yin Yang": new EssenceRequirement([getQuerySelector("Yin Yang")], [{ requirement: 1 }]),
    "Parallel Universe": new EssenceRequirement([getQuerySelector("Parallel Universe")], [{ requirement: 1 }]),
    "Higher Dimensions": new EssenceRequirement([getQuerySelector("Higher Dimensions")], [{ requirement: 10000 }]),
    "Epiphany": new EssenceRequirement([getQuerySelector("Epiphany")], [{ requirement: 30000 }]),

    // Properties
    "Homeless": new CoinRequirement([getQuerySelector("Homeless")], [{ requirement: 0 }]),
    "Tent": new CoinRequirement([getQuerySelector("Tent")], [{ requirement: 0 }]),
    "Wooden Hut": new CoinRequirement([getQuerySelector("Wooden Hut")], [{ requirement: itemBaseData["Wooden Hut"].expense * 100 }]),
    "Cottage": new CoinRequirement([getQuerySelector("Cottage")], [{ requirement: itemBaseData["Cottage"].expense * 100 }]),
    "House": new CoinRequirement([getQuerySelector("House")], [{ requirement: itemBaseData["House"].expense * 100 }]),
    "Large House": new CoinRequirement([getQuerySelector("Large House")], [{ requirement: itemBaseData["Large House"].expense * 100 }]),
    "Small Palace": new CoinRequirement([getQuerySelector("Small Palace")], [{ requirement: itemBaseData["Small Palace"].expense * 100 }]),
    "Grand Palace": new CoinRequirement([getQuerySelector("Grand Palace")], [{ requirement: itemBaseData["Grand Palace"].expense * 100 }]),
    "Town Ruler": new CoinRequirement([getQuerySelector("Town Ruler")], [{ requirement: itemBaseData["Town Ruler"].expense * 100 }]),
    "City Ruler": new CoinRequirement([getQuerySelector("City Ruler")], [{ requirement: itemBaseData["City Ruler"].expense * 100 }]),
    "Nation Ruler": new CoinRequirement([getQuerySelector("Nation Ruler")], [{ requirement: itemBaseData["Nation Ruler"].expense * 100 }]),
    "Pocket Dimension": new CoinRequirement([getQuerySelector("Pocket Dimension")], [{ requirement: itemBaseData["Pocket Dimension"].expense * 100 }]),
    "Void Realm": new CoinRequirement([getQuerySelector("Void Realm")], [{ requirement: itemBaseData["Void Realm"].expense * 100 }]),
    "Void Universe": new CoinRequirement([getQuerySelector("Void Universe")], [{ requirement: itemBaseData["Void Universe"].expense * 100 }]),
    "Astral Realm": new CoinRequirement([getQuerySelector("Astral Realm")], [{ requirement: itemBaseData["Astral Realm"].expense * 100 }]),
    "Galactic Throne": new CoinRequirement([getQuerySelector("Galactic Throne")], [{ requirement: itemBaseData["Galactic Throne"].expense * 100 }]),
    "Spaceship": new CoinRequirement([getQuerySelector("Spaceship")], [{ requirement: itemBaseData["Spaceship"].expense * 100 }]),
    "Planet": new CoinRequirement([getQuerySelector("Planet")], [{ requirement: itemBaseData["Planet"].expense * 100 }]),
    "Ringworld": new CoinRequirement([getQuerySelector("Ringworld")], [{ requirement: itemBaseData["Ringworld"].expense * 100 }]),

    // heroic only Properties
    "Stellar Neighborhood": new CoinRequirement([getQuerySelector("Stellar Neighborhood")], [{ requirement: 1e65 }]),
    "Galaxy": new CoinRequirement([getQuerySelector("Galaxy")], [{ requirement: 1e72 }]),
    "Supercluster": new CoinRequirement([getQuerySelector("Supercluster")], [{ requirement: 1e80 }]),
    "Galaxy Filament": new CoinRequirement([getQuerySelector("Galaxy Filament")], [{ requirement: 1e90 }]),
    "Observable Universe": new CoinRequirement([getQuerySelector("Observable Universe")], [{ requirement: 1e102 }]),
    "Multiverse": new CoinRequirement([getQuerySelector("Multiverse")], [{ requirement: 1e116 }]),
    "Quantum World": new CoinRequirement([getQuerySelector("Quantum World")], [{ requirement: 1e124 }]),
    "Boötes Void": new CoinRequirement([getQuerySelector("Boötes Void")], [{ requirement: 1e152 }]),

    // Misc
    "Book": new CoinRequirement([getQuerySelector("Book")], [{ requirement: 0 }]),
    "Dumbbells": new CoinRequirement([getQuerySelector("Dumbbells")], [{ requirement: itemBaseData["Dumbbells"].expense * 100 }]),
    "Personal Squire": new CoinRequirement([getQuerySelector("Personal Squire")], [{ requirement: itemBaseData["Personal Squire"].expense * 100 }]),
    "Steel Longsword": new CoinRequirement([getQuerySelector("Steel Longsword")], [{ requirement: itemBaseData["Steel Longsword"].expense * 100 }]),
    "Butler": new CoinRequirement([getQuerySelector("Butler")], [{ requirement: itemBaseData["Butler"].expense * 100 }]),
    "Sapphire Charm": new CoinRequirement([getQuerySelector("Sapphire Charm")], [{ requirement: itemBaseData["Sapphire Charm"].expense * 100 }]),
    "Study Desk": new CoinRequirement([getQuerySelector("Study Desk")], [{ requirement: itemBaseData["Study Desk"].expense * 100 }]),
    "Library": new CoinRequirement([getQuerySelector("Library")], [{ requirement: itemBaseData["Library"].expense * 100 }]),
    "Observatory": new CoinRequirement([getQuerySelector("Observatory")], [{ requirement: itemBaseData["Observatory"].expense * 100 }]),
    "Mind's Eye": new CoinRequirement([getQuerySelector("Mind's Eye")], [{ requirement: itemBaseData["Mind's Eye"].expense * 100 }]),
    "Void Necklace": new CoinRequirement([getQuerySelector("Void Necklace")], [{ requirement: itemBaseData["Void Necklace"].expense * 100 }]),
    "Void Armor": new CoinRequirement([getQuerySelector("Void Armor")], [{ requirement: itemBaseData["Void Armor"].expense * 100 }]),
    "Void Blade": new CoinRequirement([getQuerySelector("Void Blade")], [{ requirement: itemBaseData["Void Blade"].expense * 100 }]),
    "Void Orb": new CoinRequirement([getQuerySelector("Void Orb")], [{ requirement: itemBaseData["Void Orb"].expense * 100 }]),
    "Void Dust": new CoinRequirement([getQuerySelector("Void Dust")], [{ requirement: itemBaseData["Void Dust"].expense * 100 }]),
    "Celestial Robe": new CoinRequirement([getQuerySelector("Celestial Robe")], [{ requirement: itemBaseData["Celestial Robe"].expense * 100 }]),
    "Universe Fragment": new CoinRequirement([getQuerySelector("Universe Fragment")], [{ requirement: itemBaseData["Universe Fragment"].expense * 100 }]),
    "Multiverse Fragment": new CoinRequirement([getQuerySelector("Multiverse Fragment")], [{ requirement: itemBaseData["Multiverse Fragment"].expense * 100 }]),
    "Stairway to heaven": new CoinRequirement([getQuerySelector("Stairway to heaven")], [{ requirement: itemBaseData["Stairway to heaven"].expense * 100 }]),
    "Highway to hell": new CoinRequirement([getQuerySelector("Highway to hell")], [{ requirement: itemBaseData["Highway to hell"].expense * 100 }]),
    "Tesseract": new CoinRequirement([getQuerySelector("Tesseract")], [{ requirement: 1e112 }]),    
    "Desintegration": new CoinRequirement([getQuerySelector("Desintegration")], [{ requirement: 1e122 }]),
    "Custom Galaxy": new CoinRequirement([getQuerySelector("Custom Galaxy")], [{ requirement: 1e134 }]),
    "Hypersphere": new CoinRequirement([getQuerySelector("Hypersphere")], [{ requirement: 1e160 }]),
    

    // Milestones
    "Milestones": new EssenceRequirement(["#milestonesTabButton"], [{ requirement: 1 }]),

    // Dark Matter
    "Dark Matter": new DarkMatterRequirement(["#darkMatterTabButton"], [{ requirement: 1 }]),
    "Dark Matter Skills": new EssenceRequirement(["#skillTreeTabTabButton"], [{ requirement: 1e20 }]),
    "Dark Matter Skills2": new EssenceRequirement(["#skillTreePage"], [{ requirement: 1e20 }]),

    // Potential points
    "Potential points": new EvilRequirement(["#evilperksTabButton"], [{requirement : 1}]),

    // Challenges
    "Challenges": new EvilRequirement(["#challengesTabButton"], [{ requirement: 10000 }]),
    "Challenge_an_unhappy_life": new EvilRequirement(["#anUnhappyLifeChallenge"], [{ requirement: 10000 }]),
    "Challenge_rich_and_the_poor": new EvilRequirement(["#theRichAndThePoorChallenge"], [{ requirement: 1000000 }]),
    "Challenge_time_does_not_fly": new EssenceRequirement(["#timeDoesNotFlyChallenge"], [{ requirement: 10000 }]),
    "Challenge_dance_with_the_devil": new EssenceRequirement(["#danceWithTheDevilChallenge"], [{ requirement: 1e6 }]),
    "Challenge_legends_never_die": new EssenceRequirement(["#legendsNeverDieChallenge"], [{ requirement: 2.5e7 }]),
    "Challenge_the_darkest_time": new EssenceRequirement(["#theDarkestTimeChallenge"], [{ requirement: 1e47 }]),

    // Metaverse Altars
    "Metaverse": new MetaverseRequirement(["#metaverseTabButton"], [{ requirement: 1 }]),
    "Increase Primordial Spark Gain": new HypercubeRequirement(["#IncreaseHypercubeGainAltar"], [{ requirement: 1 }]),
    "Reduce Boost Cooldown": new HypercubeRequirement(["#ReduceBoostCooldownAltar"], [{ requirement: 500 }]),
    "Increase Boost Duration": new HypercubeRequirement(["#IncreaseBoostDurationAltar"], [{ requirement: 2500 }]),
    "Gain evil at new transcension": new HypercubeRequirement(["#EvilAltar"], [{ requirement: 50000000 }]),
    "Essence gain multiplier": new HypercubeRequirement(["#EssenceAltar"], [{ requirement: 500000000 }]),
    "Challenges are not reset": new HypercubeRequirement(["#ChallengeAltar"], [{ requirement: 1e12 }]),
    "Dark Matter gain multiplier": new HypercubeRequirement(["#DarkMaterAltar"], [{ requirement: 1e17 }]),

    // Metaverse Perks
    "Metaverse Perks": new PerkPointRequirement(["#metaversePage2"], [{ requirement: 1 }]),
    "Metaverse Perks Button": new PerkPointRequirement(["#metaverseTab2TabButton"], [{ requirement: 1 }]),

    // ShortKeyInfo
    "keyChallenge": new EvilRequirement(["#keyChallenge"], [{ requirement: 10000 }]),
    "key1": new AgeRequirement(["#key1"], [{ requirement: 65 }]),
    "key2": new AgeRequirement(["#key2"], [{ requirement: 200 }]),
    "key3": new TaskRequirement(["#key3"], [{ task: "Cosmic Recollection", requirement: 1 }]),
    "key4": new EssenceRequirement(["#key4"], [{ requirement: 5e10 }]),
    "key5": new EssenceRequirement(["#key5"], [{ requirement: 1e90 }]),

    // Potential points
    "Evil perk essence": new EssenceRequirement(["#evilperk5"], [{ requirement: 150000000 }]),

    "Congratulations": new EssenceRequirement(["#Congratulations"], [{ requirement: 1e300 }]),
}

const xianxiaDisplayNames = {
    // Mortal commoner - must have 6 jobs
    "Beggar": "Beggar",
    "Farmer": "Farmer",
    "Fisherman": "Fisherman",
    "Miner": "Spirit Stone Miner",
    "Blacksmith": "Blacksmith",
    "Merchant": "Merchant",
    // Mortal military - must have 8 jobs
    "Squire": "Recruit",
    "Footman": "Militiaman",
    "Veteran footman": "Soldier",
    "Centenary": "Squad Leader",
    "Knight": "Vanguard Commander",
    "Veteran Knight": "General of the West",
    "Holy Knight": "Grand General",
    "Lieutenant General": "Imperial Legate",
    // Earthly cultivation - must have 7 jobs
    "Student": "Qi condensation",
    "Apprentice Mage": "Foundation establishment",
    "Master Wizard": "Nascent soul",
    "Archmage": "Soul severing",
    "Chronomancer": "Dao seeking", // optional
    "Chairman": "Spirit integration",
    "Imperator": "Tribulation crossing",
    // Dao comprehension - could be changed to any number
    "Corrupted": "Intent Scholar",
    "Void Fiend": "Seeker of Law",
    "Void Wraith": "Dao Sage",
    "Void Lord": "A Mortal Daoist",
    "Abyss God": "Dustless One", 
    // Immortal cultivation - could be changed to 4 jobs
    "Eternal Wanderer": "Human Immortal",
    "Nova": "Earthly Immortal",
    "Sigma Proioxis": "Heavenly Immortal",
    "One Above All": "Sovereign Epyrean",
    // Dao embodiment - could be reduced to 3
    "Snow Crash": "Steward of the Realms",
    "Lost in the dark": "Anchor of Causality",
    "Omega": "The Heavens Itself",
    // Fundamentals
    "Concentration": "Concentration",
    "Productivity": "Productivity",
    "Bargaining": "Bargaining",
    "Meditation": "Meditation",
    // Combat -> Martial arts
    "Strength": "Strength",
    "Battle Tactics": "Battle Tactics",
    "Muscle Memory": "Muscle Memory",
    // Magic -> Spiritual techniques
    "Mana Control": "Qi Manipulation", // Increase Earthly cultivation XP
    "Life Essence": "Vital Essence Cultivation", // increase lifespan
    "Time Warping": "A Cultivator's Perspective", // Game speed
    "Astral Body": "Bodily Refinement", // increase Lifespan
    "Temporal Dimension": "Temporal Cultivation", // Game speed
    // Dark magic -> Dao Comprehension // todo
    "Dark Influence": "Inspiration from the Dao", // increase job and skill XP - You hear the whispers of the dao on the wind, hints on matters great and small. Increase job and skill XP gain.
    "Evil Control": "Domain of Authority", // increases potential gain - You develop your daoist domain; the natural energies of heaven and earth begin to respect your new claims. Increase Potential gain.
    "Intimidation": "Profound Recognition", // reduce item expenses - At a glance you begin to understand the natural energies and qualities of goods. Reduce item expenses.  
    "Blood Meditation": "Great Destiny", // potential gain - When you close your eyes you feel as though you have a golden path before you, growing ever brighter. Greatness is no longer a question for you. Increase Potential gain.   
    "Demon's Wealth": "Karmic Significance", // increase job wage - Your karmic weight grows by the day; significant events start naturally to seek you out. Increase job wage. 
    "Dark Knowledge": "Heavenly Talent", // increase job xp - They begin to call you 'blessed with talent', though you have never been before. Things start to come easier to you, as though your instincts already know the answers.
    "Void Influence": "Enlightened Tempo", // increase job and skill XP - Unconsciously, your every breath and movement becomes more in tune with the rhythm of the natural dao. Increase job and skill XP.
    "Time Loop": "Rarified Mind", // increase game speed - Your every thought starts to become tinged with the flavour of the natural Dao; smaller matters pass by all the easier. Increase game speed.
    // Celestial powers -> Immortal techniques -  // todo
    "Cosmic Longevity": "Epoch-Spanning Lifeline", // Your lifeline runs as deep as Mt. Tai and as wide as the Yellow River. Increases lifespan
    "Cosmic Recollection": "Wheel-Crossing Permanence", // Your powerful soul resists erosion by the Winds of Rebirth. Increases how much max level is preserved/scaled on rebirth and milestone auto-max logic.
    "Essence Collector": "Spiritual Nexus", // You are a nexus in reality; Essence flows upstream to you, evermore. Increase essence gain
    "Galactic Command": "Cessation of Excess", // What you need, naturally comes in its time. What you don't need, fades away by itself. Reduce item expenses.
    // Almightiness -> ? -  // todo
    "Yin Yang": "Taiji Equilibrium", // You join Yin and Yang, and begin your return to primordial origin. Increase potential gain and increase essence gain.
    "Parallel Universe": "Splitting the Illusion", // In one world you walk left, in another you walk right. The Maya splits in twain, but you can see still. Increase xp for jobs and skills.
    "Higher Dimensions": "World-Dreams", // When you sleep, your dreams spin worlds into being. When you wake the illusion fades away once more. Increase lifespan
    "Epiphany": "Meditations on the Heavenly", // What is Mortal, what is Heavenly? The more you learn, the less you know. Increase xp for immortal cultivation jobs.
    //
    "Homeless": "Ragged Courtyard",
    "Tent": "Wanderer's Tent",
    "Wooden Hut": "Bamboo Hut",
    "Cottage": "Mountain Cottage",
    "House": "Cultivator Residence",
    "Large House": "Manor Estate",
    "Small Palace": "Minor Immortal Palace",
    "Grand Palace": "Grand Immortal Palace",
    "Town Ruler": "Town Lord",
    "City Ruler": "City Lord",
    "Nation Ruler": "Dynasty Regent",
    "Pocket Dimension": "Portable Blessed Land",
    "Void Realm": "Void Blessed Land",
    "Void Universe": "Void Heaven",
    "Astral Realm": "Astral Heaven",
    "Galactic Throne": "Star Throne",
    "Spaceship": "Void Ark",
    "Planet": "Spirit Planet",
    "Ringworld": "Heavenly Ring Domain",
    "Stellar Neighborhood": "Stellar Prefecture",
    "Galaxy": "Star River Dominion",
    "Supercluster": "Grand Star Region",
    "Galaxy Filament": "Celestial Vein",
    "Observable Universe": "All-Seeing Cosmos",
    "Multiverse": "Ten Thousand Realms",
    "Quantum World": "Microcosm World",
    "Boötes Void": "Void of Desolation",
    // 
    "Book": "Cultivation Manual",
    "Dumbbells": "Body Refinement Weights",
    "Personal Squire": "Personal Servant Disciple",
    "Steel Longsword": "Spirit Steel Sword",
    "Butler": "Steward Elder",
    "Sapphire Charm": "Azure Jade Charm",
    "Study Desk": "Scripture Desk",
    "Library": "Scripture Pavilion",
    "Observatory": "Star Gazing Platform",
    "Mind's Eye": "Heavenly Mind's Eye",
    "Void Necklace": "Void Jade Pendant",
    "Void Armor": "Void Battle Armor",
    "Void Blade": "Void Slaying Blade",
    "Void Orb": "Void Pearl",
    "Void Dust": "Void Sand",
    "Celestial Robe": "Immortal Robe",
    "Universe Fragment": "Cosmos Fragment",
    "Multiverse Fragment": "Realm Fragment",
    "Stairway to heaven": "Stairway to Immortality",
    "Highway to hell": "Road to Demon Domain",
    "Tesseract": "Fourfold Primordial Spark",
    "Desintegration": "Annihilation Art",
    "Custom Galaxy": "Personal Star Domain",
    "Hypersphere": "Grand Dao Sphere",
    // 
    "Magic Eye": "Spirit Eye Awakening",
    "Almighty Eye": "Heavenly Eye Awakening",
    "Deal with the Devil": "Pact of the Demon Path",
    "Transcendent Master": "Realm Ascension",
    "Eternal Time": "Eternal Cycle",
    "Hell Portal": "Nether Gate",
    "Inferno": "Demon Flame Sea",
    "God's Blessings": "Heaven's Blessing",
    "Faint Hope": "Flicker of Dao",
    "New Beginning": "Reforged Origin",
    //
    "Rise of Great Heroes": "Rise of Ascendants",
    "Lazy Heroes": "Sleeping Ascendants",
    "Dirty Heroes": "Dust-Worn Ascendants",
    "Angry Heroes": "Wrathful Ascendants",
    "Tired Heroes": "Weary Ascendants",
    "Scared Heroes": "Cautious Ascendants",
    "Good Heroes": "Righteous Ascendants",
    "Funny Heroes": "Eccentric Ascendants",
    "Beautiful Heroes": "Radiant Ascendants",
    "Awesome Heroes": "Peerless Ascendants",
    "Furious Heroes": "Furious Ascendants",
    "Superb Heroes": "Exalted Ascendants",
    "A new beginning": "Second Reforged Origin",
    // 
    "Mind Control": "Soul Command",
    "Galactic Emperor": "Star Emperor",
    "Dark Matter Harvester": "Chaos Essence Harvester",
    "A Dark Era": "Age of Chaos Essence",
    "Dark Orbiter": "Dao Fragment Weaver",
    "Dark Matter Mining": "Chaos Essence Mining",
    "The new gold": "Spirit Essence Standard",
    "The Devil inside you": "Inner Heart Demon",
    "Strange Magic": "Forbidden Dao",
    "Speed speed speed": "Swift as Heavenly Lightning",
    "Life is valueable": "Life Is Precious",
    "Dark Matter Millionaire": "Chaos Essence Magnate",
    "The new Dark Matter": "Beyond Chaos Essence",
    // 
    "Strong Hope": "Steadfast Dao Heart",
    "Ruler of the Metaverse": "Lord of the Upper Realm",
    "A New Hope": "Dawn of the Dao",
    "Time is a flat circle": "Kalpa Cycle Without End",
    "The End is near": "Final Tribulation Nears",
    "The End": "Great Completion",
}

const xianxiaCategoryNames = {
    // Job categories
    "Common work": "Mortal Commoner",
    "Military": "Mortal Military",
    "The Arcane Association": "Earthly Cultivation",
    "The Void": "Dao Comprehension",
    "Galactic Council": "Immortal Cultivation",
    "Metaverse Guards": "Dao Embodiment",
    // Skill categories
    "Fundamentals": "Fundamentals",
    "Combat": "Martial Arts",
    "Magic": "Spiritual Techniques",
    "Dark Magic": "Conceptual Arts",
    "Celestial Powers": "Immortal Techniques",
    "Almightiness": "Manifestation",
    // Items
    "Properties": "Estates",
    "Misc": "Treasures",
    // Milestones
    "Essence Milestones": "Spirit Milestones",
    "Heroic Milestones": "Ascendant Milestones",
    "Dark Milestones": "Dao Milestones",
    "Metaverse Milestones": "Upper Realm Milestones",
}

const xianxiaTooltips = {
    "Beggar": "A wandering mortal surviving on scraps and fate. Every day is a struggle, but adversity tempers the Dao heart.",
    "Farmer": "Tend spirit fields and harvest herbs. Humble labor, but it builds steady foundations for cultivation.",
    "Squire": "Serve senior disciples and carry their gear through sect missions. Meager income, valuable experience.",
    "Knight": "A core disciple trusted in major sect conflicts. Prestige and spirit-stone income rise together.",
    "Student": "Begin with breathing methods and qi theory. Small stipends sustain you while your meridians open.",
    "Archmage": "A sage who bends natural laws through refined qi control. Kingdoms fear your techniques.",
    "Corrupted": "Qi deviation has begun. The abyss whispers constantly, and each step tests your will.",
    "One Above All": "You stand near the apex of all realms, shaping fate with a thought.",
    "Magic Eye": "The talisman's first seal opens and your perception of qi deepens.",
    "Almighty Eye": "The Heavenly Eye awakens fully and perfect recollection follows.",
    "Deal with the Devil": "You forge a dangerous pact with your inner demon for forbidden gains.",
    "Transcendent Master": "Your understanding of ascension refines spirit essence itself.",
    "Hell Portal": "A nether gate opens and demonic qi leaks endlessly into your path.",
    "God's Blessings": "Heavenly fortune shields your progress through rebirth.",
    "Faint Hope": "A tiny spark of Dao persists and grows with every cycle.",
    "Ruler of the Metaverse": "You stand as lord of the Upper Realm and command its offerings.",
    "The End": "At last, your cultivation reaches Great Completion."
}

function getDisplayName(name) {
    return xianxiaDisplayNames[name] || name
}

function getDisplayCategoryName(categoryName) {
    return xianxiaCategoryNames[categoryName] || categoryName
}

function getDisplayTooltip(name) {
    return xianxiaTooltips[name] || tooltips[name]
}

function getHeroTitlePrefix() {
    return "Ascendant "
}

const xianxiaChallengeTitles = {
    an_unhappy_life: "A Harsh Mortal Life",
    rich_and_the_poor: "Fortune and Poverty",
    time_does_not_fly: "Time Stagnates",
    dance_with_the_devil: "Dance with the Inner Demon",
    legends_never_die: "Legends Never Perish",
    the_darkest_time: "Era of Greatest Darkness",
}

function getDisplayResourceName(resourceName) {
    const map = {
        evil: "Potential",
        essence: "Spirit Essence",
        "Dark Matter": "Chaos Essence",
        hypercubes: "Primordial Sparks",
    }
    return map[resourceName] || resourceName
}

function getDisplayChallengeTitle(challengeName) {
    return xianxiaChallengeTitles[challengeName] || getFormattedTitle(challengeName)
}

const jobCategories = {
    "Common work": ["Beggar", "Farmer", "Fisherman", "Miner", "Blacksmith", "Merchant"],
    "Military": ["Squire", "Footman", "Veteran footman", "Centenary", "Knight", "Veteran Knight", "Holy Knight", "Lieutenant General"],
    "The Arcane Association": ["Student", "Apprentice Mage", "Master Wizard", "Archmage", "Chronomancer", "Chairman", "Imperator"],
    "The Void": ["Corrupted", "Void Fiend", "Void Wraith", "Void Lord", "Abyss God"],
    "Galactic Council": ["Eternal Wanderer", "Nova", "Sigma Proioxis", "One Above All"],
    "Metaverse Guards": ["Snow Crash", "Lost in the dark", "Omega"]
}

const skillCategories = {
    "Fundamentals": ["Concentration", "Productivity", "Bargaining", "Meditation"],
    "Combat": ["Strength", "Battle Tactics", "Muscle Memory"],
    "Magic": ["Mana Control", "Life Essence", "Time Warping", "Astral Body", "Temporal Dimension"],
    "Dark Magic": ["Dark Influence", "Evil Control", "Intimidation", "Blood Meditation", "Demon's Wealth", "Dark Knowledge", "Void Influence", "Time Loop"],
    "Celestial Powers": ["Cosmic Longevity", "Cosmic Recollection", "Essence Collector", "Galactic Command"],
    "Almightiness": ["Yin Yang", "Parallel Universe", "Higher Dimensions", "Epiphany"]
}

const itemCategories = {
    "Properties": ["Homeless", "Tent", "Wooden Hut", "Cottage", "House", "Large House", "Small Palace", "Grand Palace", "Town Ruler", "City Ruler", "Nation Ruler", "Pocket Dimension", "Void Realm", "Void Universe", "Astral Realm", "Galactic Throne", "Spaceship", "Planet", "Ringworld", "Stellar Neighborhood", "Galaxy", "Supercluster", "Galaxy Filament", "Observable Universe", "Multiverse", "Quantum World", "Boötes Void"],
    "Misc": ["Book", "Dumbbells", "Personal Squire", "Steel Longsword", "Butler", "Sapphire Charm", "Study Desk", "Library", "Observatory", "Mind's Eye", "Void Necklace", "Void Armor", "Void Blade", "Void Orb", "Void Dust", "Celestial Robe", "Universe Fragment", "Multiverse Fragment", "Stairway to heaven", "Highway to hell", "Tesseract", "Desintegration", "Custom Galaxy", "Hypersphere"]
}

const headerRowColors = {
    "Common work": "#55a630",
    "Military": "#e63946",
    "The Arcane Association": "#C71585",
    "The Void": "#762B91",
    "Galactic Council": "#D5C010",
    "Fundamentals": "#55a630",
    "Combat": "#e63946",
    "Magic": "#C71585",
    "Dark Magic": "#73000f",
    "Almightiness": "#18d2d9",
    "Celestial Powers": "#D5C010",
    "Properties_Auto": "#21cc5e",
    "Misc_Auto": "#f54546",
    "Properties": "#219ebc",
    "Misc": "#b56576",
    "Essence Milestones": "#0066ff",
    "Heroic Milestones": "#ff6600",
    "Dark Milestones": "#873160",
    "Metaverse Milestones": "#09a0e6",
    "Metaverse Guards": "rgb(9, 160, 230)"
}

const headerRowTextColors = {
    "Common work": "darkblue",
    "Military": "purple",
    "The Arcane Association": "magenta",
    "The Void": "white",
    "Galactic Council": "purple",
    "Fundamentals": "purple",
    "Combat": "pink",
    "Magic": "purple",
    "Dark Magic": "pink",
    "Almightiness": "purple",
    "Celestial Powers": "purple",
    "Properties_Auto": "purple",
    "Misc_Auto": "purple",
    "Properties": "purple",
    "Misc": "purple",
    "Essence Milestones": "purple",
    "Heroic Milestones": "purple",
    "Dark Milestones": "purple",
    "Metaverse Milestones": "purple",
    "Metaverse Guards": "purple",
}

function getPreviousTaskInCategory(task) {
    var prev = ""
    for (const category in jobCategories) {
        for (job of jobCategories[category]) {
            if (job == task)
                return prev
            prev = job
        }
    }

    prev = ""
    for (const category in skillCategories) {
        for (skill of skillCategories[category]) {
            if (skill == task)
                return prev
            prev = skill
        }
    }
    return prev
}

function getBindedTaskEffect(taskName) {
    const task = gameData.taskData[taskName]
    return task.getEffect.bind(task)
}

function getBindedItemEffect(itemName) {
    const item = gameData.itemData[itemName]
    return item.getEffect.bind(item)
}