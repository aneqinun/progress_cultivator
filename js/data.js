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
    "Spirit Stone Miner": { name: "Spirit Stone Miner", maxXp: 400, income: 40, heroxp: 39 },
    "Blacksmith": { name: "Blacksmith", maxXp: 800, income: 80, heroxp: 40 },
    "Merchant": { name: "Merchant", maxXp: 1600, income: 150, heroxp: 41 },

    "Recruit": { name: "Recruit", maxXp: 42, income: 5, heroxp: 51 },
    "Militiaman": { name: "Militiaman", maxXp: 1000, income: 50, heroxp: 52 },
    "Soldier": { name: "Soldier", maxXp: 10000, income: 120, heroxp: 53 },
    "Squad Leader": { name: "Squad Leader", maxXp: 100000, income: 300, heroxp: 54 },
    "Vanguard Commander": { name: "Vanguard Commander", maxXp: 1000000, income: 1000, heroxp: 57 },
    "General of the West": { name: "General of the West", maxXp: 7500000, income: 3000, heroxp: 61 },
    "Grand General": { name: "Grand General", maxXp: 4e7, income: 5000, heroxp: 64 },
    "Imperial Legate": { name: "Imperial Legate", maxXp: 1.5e8, income: 50000, heroxp: 77 },

    "Qi condensation": { name: "Qi condensation", maxXp: 1e5, income: 100, heroxp: 79 },
    "Foundation establishment": { name: "Foundation establishment", maxXp: 1e6, income: 1000, heroxp: 82 },
    "Core Formation": { name: "Core Formation", maxXp: 1e8, income: 70000, heroxp: 95 },
    "Nascent Soul": { name: "Nascent Soul", maxXp: 1e10, income: 350000, heroxp: 95 },
    "Soul Severing": { name: "Soul Severing", maxXp: 2e12, income: 1000000, heroxp: 95 },
    "Spirit integration": { name: "Spirit integration", maxXp: 2e13, income: 10000000, heroxp: 106 },
    "Tribulation crossing": { name: "Tribulation crossing", maxXp: 9e15, income: 60000000, heroxp: 129 },

    "Intent Scholar": { name: "Intent Scholar", maxXp: 1e14, income: 2.5e7, heroxp: 131 },
    "Seeker of Law": { name: "Seeker of Law", maxXp: 1.8e16, income: 6e8, heroxp: 237 },
    "Dao Sage": { name: "Dao Sage", maxXp: 1.8e17, income: 5e9, heroxp: 238 },
    "A Mortal Daoist": { name: "A Mortal Daoist", maxXp: 2.8e19, income: 1e11, heroxp: 238 },
    "Dustless One": { name: "Dustless One", maxXp: 4e20, income: 1e12, heroxp: 250 },

    "Human Immortal": { name: "Human Immortal", maxXp: 5.5e19, income: 1e12, heroxp: 250 },
    "Earthly Immortal": { name: "Earthly Immortal", maxXp: 5.1e19, income: 3e12, heroxp: 250 },
    "Heavenly Immortal": { name: "Heavenly Immortal", maxXp: 5e20, income: 2.15e13, heroxp: 260 },
    "Sovereign Epyrean": { name: "Sovereign Epyrean", maxXp: 5e27, income: 2.5e16, heroxp: 265 },

    "Steward of the Realms": { name: "Steward of the Realms", maxXp: Infinity, income: 2.5e52, heroxp: 1015 },
    "Anchor of Causality": { name: "Anchor of Causality", maxXp: Infinity, income: 2.5e58, heroxp: 1358 },
    "The Heavens Itself": { name: "The Heavens Itself", maxXp: Infinity, income: 2.5e62, heroxp: 3120 },
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
     
    "Ragged Courtyard": { name: "Ragged Courtyard", expense: 0, effect: 1, heromult: 2, heroeffect: 2e6 },
    "Wanderer's Tent": { name: "Wanderer's Tent", expense: 15, effect: 1.4, heromult: 2, heroeffect: 2e7 },

    "Bamboo Hut": { name: "Bamboo Hut", expense: 100, effect: 2, heromult: 3, heroeffect: 2e8 },
    "Mountain Cottage": { name: "Mountain Cottage", expense: 750, effect: 3.5, heromult: 3, heroeffect: 2e9 },
    "Cultivator Residence": { name: "Cultivator Residence", expense: 3000, effect: 6, heromult: 4, heroeffect: 2e10 },
    "Manor Estate": { name: "Manor Estate", expense: 25000, effect: 12, heromult: 4, heroeffect: 2e11 },
    "Minor Immortal Palace": { name: "Minor Immortal Palace", expense: 300000, effect: 25, heromult: 5, heroeffect: 2e12 },
    "Grand Immortal Palace": { name: "Grand Immortal Palace", expense: 5000000, effect: 60, heromult: 5, heroeffect: 2e13 },
    "Town Lord": { name: "Town Lord", expense: 35000000, effect: 120, heromult: 6, heroeffect: 2e15 },
    "City Lord": { name: "City Lord", expense: 1.1e9, effect: 500, heromult: 7, heroeffect: 2e17 },
    "Dynasty Regent": { name: "Dynasty Regent", expense: 1.3e10, effect: 1200, heromult: 8, heroeffect: 2e19 },
    "Portable Blessed Land": { name: "Portable Blessed Land", expense: 4.9e10, effect: 5000, heromult: 9, heroeffect: 2e22 },
    "Void Blessed Land": { name: "Void Blessed Land", expense: 1.21e11, effect: 15000, heromult: 10, heroeffect: 2e25 },
    "Void Heaven": { name: "Void Heaven", expense: 2e12, effect: 30000, heromult: 11, heroeffect: 2e28 },
    "Astral Heaven": { name: "Astral Heaven", expense: 1.6e14, effect: 150000, heromult: 12, heroeffect: 2e31 },
    "Star Throne": { name: "Star Throne", expense: 5e15, effect: 300000, heromult: 13, heroeffect: 2e35 },
    "Void Ark": { name: "Void Ark", expense: 1e18, effect: 1500000, heromult: 15, heroeffect: 5e42 },
    "Spirit Planet": { name: "Spirit Planet", expense: 1e22, effect: 5000000, heromult: 16, heroeffect: 5e46 },
    "Heavenly Ring Domain": { name: "Heavenly Ring Domain", expense: 1e24, effect: 50000000, heromult: 17, heroeffect: 5e49 },

    // Heroic only
    "Stellar Prefecture": { name: "Stellar Prefecture", expense: 1e27, effect: 60000000, heromult: 17, heroeffect: 6e49,  },
    "Star River Dominion": { name: "Star River Dominion", expense: 1e30, effect: 75000000, heromult: 18, heroeffect: 7.5e49 },
    "Grand Star Region": { name: "Grand Star Region", expense: 1e33, effect: 100000000, heromult: 20, heroeffect: 1e50 },
    "Celestial Vein": { name: "Celestial Vein", expense: 1e36, effect: 1000000000, heromult: 25, heroeffect: 1e52 },
    "All-Seeing Cosmos": { name: "All-Seeing Cosmos", expense: 1e39, effect: 10000000000, heromult: 30, heroeffect: 1e54 },
    "Ten Thousand Realms": { name: "Ten Thousand Realms", expense: 1e42, effect: 100000000000, heromult: 35, heroeffect: 1e60 },
    "Microcosm World": { name: "Microcosm World", expense: 1e49, effect: 1000000000000, heromult: 40, heroeffect: 1e64 },
    "Void of Desolation": { name: "Void of Desolation", expense: 3e74, effect: 1000000000000, heromult: 40, heroeffect: 1e80 },

    // Misc
    "Cultivation Manual": { name: "Cultivation Manual", expense: 10, effect: 1.5, description: "Skill XP", heromult: 2, heroeffect: 10 },
    "Body Refinement Weights": { name: "Body Refinement Weights", expense: 50, effect: 1.5, description: "Strength XP", heromult: 2, heroeffect: 10 },
    "Personal Servant Disciple": { name: "Personal Servant Disciple", expense: 200, effect: 2, description: "Hero XP", heromult: 3, heroeffect: 10 },
    "Spirit Steel Sword": { name: "Spirit Steel Sword", expense: 1000, effect: 2, description: "Military XP", heromult: 3, heroeffect: 10 },
    "Steward Elder": { name: "Steward Elder", expense: 7500, effect: 1.5, description: "Happiness", heromult: 4, heroeffect: 10 },
    "Azure Jade Charm": { name: "Azure Jade Charm", expense: 50000, effect: 3, description: "Magic XP", heromult: 4, heroeffect: 10 },
    "Scripture Desk": { name: "Scripture Desk", expense: 1000000, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Scripture Pavilion": { name: "Scripture Pavilion", expense: 1e7, effect: 2, description: "Skill XP", heromult: 5, heroeffect: 10 },
    "Star Gazing Platform": { name: "Star Gazing Platform", expense: 1.4e8, effect: 5, description: "Magic XP", heromult: 6, heroeffect: 10 },
    "Heavenly Mind's Eye": { name: "Heavenly Mind's Eye", expense: 3.25e9, effect: 10, description: "Fundamentals XP", heromult: 8, heroeffect: 10 },
    "Void Jade Pendant": { name: "Void Jade Pendant", expense: 2.8e10, effect: 3, description: "The Void XP", heromult: 10, heroeffect: 10 },
    "Void Battle Armor": { name: "Void Battle Armor", expense: 1.97e11, effect: 3, description: "The Void XP", heromult: 10, heroeffect: 10 },
    "Void Slaying Blade": { name: "Void Slaying Blade", expense: 5e11, effect: 3, description: "Skill XP", heromult: 11, heroeffect: 10 },
    "Void Pearl": { name: "Void Pearl", expense: 1.2e12, effect: 3, description: "The Void XP", heromult: 11, heroeffect: 10 },
    "Void Sand": { name: "Void Sand", expense: 2.5e13, effect: 3, description: "The Void XP", heromult: 12, heroeffect: 10 },
    "Immortal Robe": { name: "Immortal Robe", expense: 3e14, effect: 5, description: "Galactic Council XP", heromult: 12, heroeffect: 10 },
    "Cosmos Fragment": { name: "Cosmos Fragment", expense: 1.85e16, effect: 3, description: "Skill XP", heromult: 13, heroeffect: 1000000 },
    "Realm Fragment": { name: "Realm Fragment", expense: 2e17, effect: 5, description: "Happiness", heromult: 15, heroeffect: 1000000 },
    "Stairway to Immortality": { name: "Stairway to Immortality", expense: 1e38, effect: 10, description: "Happiness", heromult: 30, heroeffect: 1000000 },
    "Road to Demon Domain": { name: "Road to Demon Domain", expense: 1e42, effect: 10, description: "Potential Gain", heromult: 30, heroeffect: 1000000 },
    "Fourfold Primordial Spark": { name: "Fourfold Primordial Spark", expense: 1e48, effect: 1, description: "Primordial Spark Gain", heromult: 30, heroeffect: 10 },
    "Annihilation Art": { name: "Annihilation Art", expense: 1e55, effect: 1, description: "Dark Matter Gain", heromult: 30, heroeffect: 100 },
    "Personal Star Domain": { name: "Personal Star Domain", expense: 1e64, effect: 1, description: "Skill XP", heromult: 30, heroeffect: 1e100 },
    "Grand Dao Sphere": { name: "Grand Dao Sphere", expense: 1e91, effect: 1, description: "Primordial Spark Gain", heromult: 30, heroeffect: 1e50 },
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
    "Spirit Stone Miner": new TaskRequirement([getQuerySelector("Spirit Stone Miner")], [{ task: "Strength", requirement: 10 }, { task: "Fisherman", requirement: 10 }]),
    "Blacksmith": new TaskRequirement([getQuerySelector("Blacksmith")], [{ task: "Strength", requirement: 30 }, { task: "Spirit Stone Miner", requirement: 10 }]),
    "Merchant": new TaskRequirement([getQuerySelector("Merchant")], [{ task: "Bargaining", requirement: 50 }, { task: "Blacksmith", requirement: 10 }]),

    // Military
    "Recruit": new TaskRequirement([getQuerySelector("Recruit")], [{ task: "Strength", requirement: 5 }]),
    "Militiaman": new TaskRequirement([getQuerySelector("Militiaman")], [{ task: "Strength", requirement: 20 }, { task: "Recruit", requirement: 10 }]),
    "Soldier": new TaskRequirement([getQuerySelector("Soldier")], [{ task: "Battle Tactics", requirement: 40 }, { task: "Militiaman", requirement: 10 }]),
    "Squad Leader": new TaskRequirement([getQuerySelector("Squad Leader")], [{ task: "Strength", requirement: 100 }, { task: "Soldier", requirement: 10 }]),
    "Vanguard Commander": new TaskRequirement([getQuerySelector("Vanguard Commander")], [{ task: "Battle Tactics", requirement: 150 }, { task: "Squad Leader", requirement: 10 }]),
    "General of the West": new TaskRequirement([getQuerySelector("General of the West")], [{ task: "Strength", requirement: 300 }, { task: "Vanguard Commander", requirement: 10 }]),
    "Grand General": new TaskRequirement([getQuerySelector("Grand General")], [{ task: "Mana Control", requirement: 500 }, { task: "General of the West", requirement: 10 }]),
    "Imperial Legate": new TaskRequirement([getQuerySelector("Imperial Legate")], [{ task: "Mana Control", requirement: 1000 }, { task: "Battle Tactics", requirement: 1000 }, { task: "Grand General", requirement: 10 }]),

    // The Arcane Association
    "Qi condensation": new TaskRequirement([getQuerySelector("Qi condensation")], [{ task: "Concentration", requirement: 200 }, { task: "Meditation", requirement: 200 }]),
    "Foundation establishment": new TaskRequirement([getQuerySelector("Foundation establishment")], [{ task: "Mana Control", requirement: 400 }, { task: "Qi condensation", requirement: 10 }]),
    "Core Formation": new TaskRequirement([getQuerySelector("Core Formation")], [{ task: "Mana Control", requirement: 1000 }, { task: "Foundation establishment", requirement: 20 }]),
    "Nascent Soul": new TaskRequirement([getQuerySelector("Nascent Soul")], [{ task: "Mana Control", requirement: 1200 }, { task: "Core Formation", requirement: 10 }]),
    "Soul Severing": new TaskRequirement([getQuerySelector("Soul Severing")], [{ task: "Mana Control", requirement: 1500 }, { task: "Meditation", requirement: 1500 }, { task: "Nascent Soul", requirement: 25 }]),
    "Spirit integration": new TaskRequirement([getQuerySelector("Spirit integration")], [{ task: "Mana Control", requirement: 2000 }, { task: "Productivity", requirement: 2000 }, { task: "Soul Severing", requirement: 50 }]),
    "Tribulation crossing": new TaskRequirement([getQuerySelector("Tribulation crossing")], [{ task: "Mana Control", requirement: 3200, herequirement: 650 }, { task: "Concentration", requirement: 3000 }, { task: "Spirit integration", requirement: 666 }]),

    // The Void
    "Intent Scholar": new AgeRequirement([getQuerySelector("Intent Scholar")], [{ requirement: 1000 }]),
    "Seeker of Law": new TaskRequirement([getQuerySelector("Seeker of Law")], [{ task: "Dark Knowledge", requirement: 3000 }, { task: "Intent Scholar", requirement: 250 }]),
    "Dao Sage": new TaskRequirement([getQuerySelector("Dao Sage")], [{ task: "Temporal Dimension", requirement: 3400 }, { task: "Seeker of Law", requirement: 350, herequirement: 180 }]),
    "A Mortal Daoist": new TaskRequirement([getQuerySelector("A Mortal Daoist")], [{ task: "Time Loop", requirement: 3800, herequirement: 200 }, { task: "Dao Sage", requirement: 300 }]),
    "Dustless One": new TaskRequirement([getQuerySelector("Dustless One")], [{ task: "Blood Meditation", requirement: 4700, herequirement: 300 }, { task: "A Mortal Daoist", requirement: 900, herequirement: 125 }]),

    // Galactic Council
    "Human Immortal": new AgeRequirement([getQuerySelector("Human Immortal")], [{ requirement: 10000 }]),
    "Earthly Immortal": new TaskRequirement([getQuerySelector("Earthly Immortal")], [{ task: "Human Immortal", requirement: 15 }, { task: "Cosmic Longevity", requirement: 4000, herequirement: 180 }]),
    "Heavenly Immortal": new TaskRequirement([getQuerySelector("Heavenly Immortal")], [{ task: "Earthly Immortal", requirement: 200 }, { task: "Cosmic Recollection", requirement: 4500, herequirement: 350 }]),
    "Sovereign Epyrean": new TaskRequirement([getQuerySelector("Sovereign Epyrean")], [{ task: "Meditation", requirement: 6300 }, { task: "Heavenly Immortal", requirement: 1800, herequirement: 500 }]),

    // Metaverse Guards
    "Steward of the Realms": new EssenceRequirement([getQuerySelector("Steward of the Realms")], [{ requirement: 1e90, herequirement: 1e120 }]),
    "Anchor of Causality": new TaskRequirement([getQuerySelector("Anchor of Causality")], [{ task: "Steward of the Realms", requirement: 3500, herequirement: 158000 }]),
    "The Heavens Itself": new TaskRequirement([getQuerySelector("The Heavens Itself")], [{ task: "Anchor of Causality", requirement: 25000, herequirement: 185000 }]),

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
    "Life Essence": new TaskRequirement([getQuerySelector("Life Essence")], [{ task: "Foundation establishment", requirement: 10 }]),
    "Time Warping": new TaskRequirement([getQuerySelector("Time Warping")], [{ task: "Core Formation", requirement: 10 }]),
    "Astral Body": new TaskRequirement([getQuerySelector("Astral Body")], [{ task: "Nascent Soul", requirement: 10 }]),
    "Temporal Dimension": new TaskRequirement([getQuerySelector("Temporal Dimension")], [{ task: "Soul Severing", requirement: 25 }]),

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
    "Cosmic Longevity": new TaskRequirement([getQuerySelector("Cosmic Longevity")], [{ task: "Human Immortal", requirement: 1 }]),
    "Cosmic Recollection": new TaskRequirement([getQuerySelector("Cosmic Recollection")], [{ task: "Earthly Immortal", requirement: 50 }, { task: "Meditation", requirement: 4200 }, { task: "Time Loop", requirement: 900 }]),
    "Essence Collector": new TaskRequirement([getQuerySelector("Essence Collector")], [{ task: "Heavenly Immortal", requirement: 500, herequirement: 360 }, { task: "Evil Control", requirement: 4900, herequirement: 2900 }, { task: "Dark Knowledge", requirement: 6300, herequirement: 3400 }]),
    "Galactic Command": new TaskRequirement([getQuerySelector("Galactic Command")], [{ task: "Essence Collector", requirement: 5000, herequirement: 210 }, { task: "Bargaining", requirement: 5000 }]),

    // Almightiness
    "Yin Yang": new EssenceRequirement([getQuerySelector("Yin Yang")], [{ requirement: 1 }]),
    "Parallel Universe": new EssenceRequirement([getQuerySelector("Parallel Universe")], [{ requirement: 1 }]),
    "Higher Dimensions": new EssenceRequirement([getQuerySelector("Higher Dimensions")], [{ requirement: 10000 }]),
    "Epiphany": new EssenceRequirement([getQuerySelector("Epiphany")], [{ requirement: 30000 }]),

    // Properties
    "Ragged Courtyard": new CoinRequirement([getQuerySelector("Ragged Courtyard")], [{ requirement: 0 }]),
    "Wanderer's Tent": new CoinRequirement([getQuerySelector("Wanderer's Tent")], [{ requirement: 0 }]),
    "Bamboo Hut": new CoinRequirement([getQuerySelector("Bamboo Hut")], [{ requirement: itemBaseData["Bamboo Hut"].expense * 100 }]),
    "Mountain Cottage": new CoinRequirement([getQuerySelector("Mountain Cottage")], [{ requirement: itemBaseData["Mountain Cottage"].expense * 100 }]),
    "Cultivator Residence": new CoinRequirement([getQuerySelector("Cultivator Residence")], [{ requirement: itemBaseData["Cultivator Residence"].expense * 100 }]),
    "Manor Estate": new CoinRequirement([getQuerySelector("Manor Estate")], [{ requirement: itemBaseData["Manor Estate"].expense * 100 }]),
    "Minor Immortal Palace": new CoinRequirement([getQuerySelector("Minor Immortal Palace")], [{ requirement: itemBaseData["Minor Immortal Palace"].expense * 100 }]),
    "Grand Immortal Palace": new CoinRequirement([getQuerySelector("Grand Immortal Palace")], [{ requirement: itemBaseData["Grand Immortal Palace"].expense * 100 }]),
    "Town Lord": new CoinRequirement([getQuerySelector("Town Lord")], [{ requirement: itemBaseData["Town Lord"].expense * 100 }]),
    "City Lord": new CoinRequirement([getQuerySelector("City Lord")], [{ requirement: itemBaseData["City Lord"].expense * 100 }]),
    "Dynasty Regent": new CoinRequirement([getQuerySelector("Dynasty Regent")], [{ requirement: itemBaseData["Dynasty Regent"].expense * 100 }]),
    "Portable Blessed Land": new CoinRequirement([getQuerySelector("Portable Blessed Land")], [{ requirement: itemBaseData["Portable Blessed Land"].expense * 100 }]),
    "Void Blessed Land": new CoinRequirement([getQuerySelector("Void Blessed Land")], [{ requirement: itemBaseData["Void Blessed Land"].expense * 100 }]),
    "Void Heaven": new CoinRequirement([getQuerySelector("Void Heaven")], [{ requirement: itemBaseData["Void Heaven"].expense * 100 }]),
    "Astral Heaven": new CoinRequirement([getQuerySelector("Astral Heaven")], [{ requirement: itemBaseData["Astral Heaven"].expense * 100 }]),
    "Star Throne": new CoinRequirement([getQuerySelector("Star Throne")], [{ requirement: itemBaseData["Star Throne"].expense * 100 }]),
    "Void Ark": new CoinRequirement([getQuerySelector("Void Ark")], [{ requirement: itemBaseData["Void Ark"].expense * 100 }]),
    "Spirit Planet": new CoinRequirement([getQuerySelector("Spirit Planet")], [{ requirement: itemBaseData["Spirit Planet"].expense * 100 }]),
    "Heavenly Ring Domain": new CoinRequirement([getQuerySelector("Heavenly Ring Domain")], [{ requirement: itemBaseData["Heavenly Ring Domain"].expense * 100 }]),

    // heroic only Properties
    "Stellar Prefecture": new CoinRequirement([getQuerySelector("Stellar Prefecture")], [{ requirement: 1e65 }]),
    "Star River Dominion": new CoinRequirement([getQuerySelector("Star River Dominion")], [{ requirement: 1e72 }]),
    "Grand Star Region": new CoinRequirement([getQuerySelector("Grand Star Region")], [{ requirement: 1e80 }]),
    "Celestial Vein": new CoinRequirement([getQuerySelector("Celestial Vein")], [{ requirement: 1e90 }]),
    "All-Seeing Cosmos": new CoinRequirement([getQuerySelector("All-Seeing Cosmos")], [{ requirement: 1e102 }]),
    "Ten Thousand Realms": new CoinRequirement([getQuerySelector("Ten Thousand Realms")], [{ requirement: 1e116 }]),
    "Microcosm World": new CoinRequirement([getQuerySelector("Microcosm World")], [{ requirement: 1e124 }]),
    "Void of Desolation": new CoinRequirement([getQuerySelector("Void of Desolation")], [{ requirement: 1e152 }]),

    // Misc
    "Cultivation Manual": new CoinRequirement([getQuerySelector("Cultivation Manual")], [{ requirement: 0 }]),
    "Body Refinement Weights": new CoinRequirement([getQuerySelector("Body Refinement Weights")], [{ requirement: itemBaseData["Body Refinement Weights"].expense * 100 }]),
    "Personal Servant Disciple": new CoinRequirement([getQuerySelector("Personal Servant Disciple")], [{ requirement: itemBaseData["Personal Servant Disciple"].expense * 100 }]),
    "Spirit Steel Sword": new CoinRequirement([getQuerySelector("Spirit Steel Sword")], [{ requirement: itemBaseData["Spirit Steel Sword"].expense * 100 }]),
    "Steward Elder": new CoinRequirement([getQuerySelector("Steward Elder")], [{ requirement: itemBaseData["Steward Elder"].expense * 100 }]),
    "Azure Jade Charm": new CoinRequirement([getQuerySelector("Azure Jade Charm")], [{ requirement: itemBaseData["Azure Jade Charm"].expense * 100 }]),
    "Scripture Desk": new CoinRequirement([getQuerySelector("Scripture Desk")], [{ requirement: itemBaseData["Scripture Desk"].expense * 100 }]),
    "Scripture Pavilion": new CoinRequirement([getQuerySelector("Scripture Pavilion")], [{ requirement: itemBaseData["Scripture Pavilion"].expense * 100 }]),
    "Star Gazing Platform": new CoinRequirement([getQuerySelector("Star Gazing Platform")], [{ requirement: itemBaseData["Star Gazing Platform"].expense * 100 }]),
    "Heavenly Mind's Eye": new CoinRequirement([getQuerySelector("Heavenly Mind's Eye")], [{ requirement: itemBaseData["Heavenly Mind's Eye"].expense * 100 }]),
    "Void Jade Pendant": new CoinRequirement([getQuerySelector("Void Jade Pendant")], [{ requirement: itemBaseData["Void Jade Pendant"].expense * 100 }]),
    "Void Battle Armor": new CoinRequirement([getQuerySelector("Void Battle Armor")], [{ requirement: itemBaseData["Void Battle Armor"].expense * 100 }]),
    "Void Slaying Blade": new CoinRequirement([getQuerySelector("Void Slaying Blade")], [{ requirement: itemBaseData["Void Slaying Blade"].expense * 100 }]),
    "Void Pearl": new CoinRequirement([getQuerySelector("Void Pearl")], [{ requirement: itemBaseData["Void Pearl"].expense * 100 }]),
    "Void Sand": new CoinRequirement([getQuerySelector("Void Sand")], [{ requirement: itemBaseData["Void Sand"].expense * 100 }]),
    "Immortal Robe": new CoinRequirement([getQuerySelector("Immortal Robe")], [{ requirement: itemBaseData["Immortal Robe"].expense * 100 }]),
    "Cosmos Fragment": new CoinRequirement([getQuerySelector("Cosmos Fragment")], [{ requirement: itemBaseData["Cosmos Fragment"].expense * 100 }]),
    "Realm Fragment": new CoinRequirement([getQuerySelector("Realm Fragment")], [{ requirement: itemBaseData["Realm Fragment"].expense * 100 }]),
    "Stairway to Immortality": new CoinRequirement([getQuerySelector("Stairway to Immortality")], [{ requirement: itemBaseData["Stairway to Immortality"].expense * 100 }]),
    "Road to Demon Domain": new CoinRequirement([getQuerySelector("Road to Demon Domain")], [{ requirement: itemBaseData["Road to Demon Domain"].expense * 100 }]),
    "Fourfold Primordial Spark": new CoinRequirement([getQuerySelector("Fourfold Primordial Spark")], [{ requirement: 1e112 }]),    
    "Annihilation Art": new CoinRequirement([getQuerySelector("Annihilation Art")], [{ requirement: 1e122 }]),
    "Personal Star Domain": new CoinRequirement([getQuerySelector("Personal Star Domain")], [{ requirement: 1e134 }]),
    "Grand Dao Sphere": new CoinRequirement([getQuerySelector("Grand Dao Sphere")], [{ requirement: 1e160 }]),
    

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
    // Mortal military - must have 8 jobs
    // Earthly cultivation - must have 7 jobs
    // Dao comprehension - could be changed to any number
    // Immortal cultivation - could be changed to 4 jobs
    // Dao embodiment - could be reduced to 3
    // Fundamentals
    // Combat -> Martial arts
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
    // 
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
    "The End": "Great Completion",}

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
    "Qi condensation": "Begin with breathing methods and qi theory. Small stipends sustain you while your meridians open.",
    "Nascent Soul": "A sage who bends natural laws through refined qi control. Kingdoms fear your techniques.",
    "Intent Scholar": "Qi deviation has begun. The abyss whispers constantly, and each step tests your will.",
    "Sovereign Epyrean": "You stand near the apex of all realms, shaping fate with a thought.",
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
    "Common work": ["Beggar", "Farmer", "Fisherman", "Spirit Stone Miner", "Blacksmith", "Merchant"],
    "Military": ["Recruit", "Militiaman", "Soldier", "Squad Leader", "Vanguard Commander", "General of the West", "Grand General", "Imperial Legate"],
    "The Arcane Association": ["Qi condensation", "Foundation establishment", "Core Formation", "Nascent Soul", "Soul Severing", "Spirit integration", "Tribulation crossing"],
    "The Void": ["Intent Scholar", "Seeker of Law", "Dao Sage", "A Mortal Daoist", "Dustless One"],
    "Galactic Council": ["Human Immortal", "Earthly Immortal", "Heavenly Immortal", "Sovereign Epyrean"],
    "Metaverse Guards": ["Steward of the Realms", "Anchor of Causality", "The Heavens Itself"]
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
    "Properties": ["Ragged Courtyard", "Wanderer's Tent", "Bamboo Hut", "Mountain Cottage", "Cultivator Residence", "Manor Estate", "Minor Immortal Palace", "Grand Immortal Palace", "Town Lord", "City Lord", "Dynasty Regent", "Portable Blessed Land", "Void Blessed Land", "Void Heaven", "Astral Heaven", "Star Throne", "Void Ark", "Spirit Planet", "Heavenly Ring Domain", "Stellar Prefecture", "Star River Dominion", "Grand Star Region", "Celestial Vein", "All-Seeing Cosmos", "Ten Thousand Realms", "Microcosm World", "Void of Desolation"],
    "Misc": ["Cultivation Manual", "Body Refinement Weights", "Personal Servant Disciple", "Spirit Steel Sword", "Steward Elder", "Azure Jade Charm", "Scripture Desk", "Scripture Pavilion", "Star Gazing Platform", "Heavenly Mind's Eye", "Void Jade Pendant", "Void Battle Armor", "Void Slaying Blade", "Void Pearl", "Void Sand", "Immortal Robe", "Cosmos Fragment", "Realm Fragment", "Stairway to Immortality", "Road to Demon Domain", "Fourfold Primordial Spark", "Annihilation Art", "Personal Star Domain", "Grand Dao Sphere"]
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