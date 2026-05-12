/**
 * Alchemy pills: boost XP for one cultivation job, reduce XP for all higher cultivation jobs in the chain.
 * Purchases reset on life restart (rebirthReset).
 */

const alchemyPills = [
    { id: "qiGatheringPill", name: "Qi gathering pill", job: "Qi Condensation", cost: 45_000 },
    { id: "foundationBuildingPill", name: "Foundation building pill", job: "Foundation Establishment", cost: 380_000 },
    { id: "coreNourishingPill", name: "Core nourishing pill", job: "Core Formation", cost: 2.8e7 },
    { id: "soulCondensationPill", name: "Soul condensation pill", job: "Nascent Soul", cost: 1.2e8 },
    { id: "mortalSplittingPill", name: "Mortal Splitting Pill", job: "Soul Severing", cost: 4.5e8 },
    { id: "harmoniousFusionPill", name: "Harmonious Fusion Pill", job: "Spirit Integration", cost: 2.8e9 },
    { id: "lightningQuenchingPill", name: "Lightning Quenching Pill", job: "Tribulation Crossing", cost: 1.6e10 },
    { id: "intentCondensingPill", name: "Intent Condensing Pill", job: "Intent Scholar", cost: 8.5e10 },
    { id: "clearMindPill", name: "Clear Mind Pill", job: "Seeker of Law", cost: 2.2e11 },
    { id: "lawTracingPill", name: "Law Tracing Pill", job: "Dao Sage", cost: 1.6e12 },
    { id: "ordinaryHeartPill", name: "Ordinary Heart Pill", job: "A Mortal Daoist", cost: 9e12 },
    { id: "karmicSeverancePill", name: "Karmic Severance Pill", job: "Dustless One", cost: 5.5e13 },
    { id: "immortalAscensionPill", name: "Immortal Ascension Pill", job: "Human Immortal", cost: 8.5e13 },
    { id: "transientClayPill", name: "Transient Clay Pill", job: "Earthly Immortal", cost: 1.3e14 },
    { id: "starPeerPill", name: "Star-Peer Pill", job: "Heavenly Immortal", cost: 8.5e14 },
    { id: "dominionForgingPill", name: "Dominion-Forging Pill", job: "Sovereign Empyrean", cost: 1.1e18 },
    { id: "axisMundiPill", name: "Axis-Mundi Pill", job: "Steward of the Realms", cost: 6e49 },
    { id: "fateWeaverPill", name: "Fate-Weaver Pill", job: "Anchor of Causality", cost: 2.5e55 },
    { id: "genesisDreamElixir", name: "Genesis-Dream Elixir", job: "The Heavens Itself", cost: 9e60 },
]

const alchemyJobOrder = alchemyPills.map(function (p) { return p.job })

const ALCHEMY_BOOST_PER_STACK = 1.25
const ALCHEMY_HIGHER_JOB_PENALTY_PER_STACK = 0.75

function alchemyJobIndex(jobName) {
    return alchemyJobOrder.indexOf(jobName)
}

function getAlchemyXpMultiplierForJob(jobName) {
    const j = alchemyJobIndex(jobName)
    if (j < 0)
        return 1

    let mult = 1
    for (let p = 0; p < alchemyPills.length; p++) {
        const pill = alchemyPills[p]
        const count = gameData.alchemy[pill.id] || 0
        if (count <= 0)
            continue
        const i = alchemyJobIndex(pill.job)
        if (i === j)
            mult *= Math.pow(ALCHEMY_BOOST_PER_STACK, count)
        else if (i < j)
            mult *= Math.pow(ALCHEMY_HIGHER_JOB_PENALTY_PER_STACK, count)
    }
    if (!isFinite(mult) || mult <= 0)
        return 1
    return mult
}

function ensureAlchemyState() {
    if (!gameData.alchemy)
        gameData.alchemy = {}
    for (let p = 0; p < alchemyPills.length; p++) {
        const id = alchemyPills[p].id
        if (gameData.alchemy[id] == null || isNaN(gameData.alchemy[id]))
            gameData.alchemy[id] = 0
    }
}

function resetAlchemyPurchases() {
    ensureAlchemyState()
    for (let p = 0; p < alchemyPills.length; p++)
        gameData.alchemy[alchemyPills[p].id] = 0
}

function buyAlchemyPill(id) {
    if (gameData.paused)
        return
    const pill = alchemyPills.find(function (x) { return x.id === id })
    if (!pill)
        return
    ensureAlchemyState()
    if (gameData.coins < pill.cost)
        return
    gameData.coins -= pill.cost
    gameData.alchemy[id] += 1
}
