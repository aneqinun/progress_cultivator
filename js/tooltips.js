const tooltips = {
    // Mortal Commoner
    "Beggar": "A pitiful mortal surviving on scraps and the charity of strangers. Every day is a struggle.",
    "Farmer": "Tend to your landlord's fields and grow mundane herbs. It is a humble and gruelling profession.",
    "Fisherman": "Fish in the nearby rivers and sell your catch. The wage is minimal, but you get some time to think.",
    "Miner": "Delve into dangerous caverns and search for spirit veins to mine. It is dangerous work, but you might hit the jackpot someday.",
    "Blacksmith": "Carefully forge weapons of war for the military. You are respected and make a decent living.",
    "Merchant": "Travel from town to town, bartering fine goods. The job pays well and you might save enough to elevate your family's class someday.",

    // Mortal Military
    "Recruit": "You are the smallest cog in the machine of imperial war. The pay is awful but you learn much while on the job.",
    "Militiaman": "Patrol and oversee order within your small village. You spend most of your time reprimanding the local drunks.",
    "Soldier": "Experienced enough to fight on the battlefield, but not valuable enough to keep safe. Your labour is cheaply spent, but you might make a small difference.",
    "Squad Leader": "As the strongest combatant within your unit, you are qualified to lead. You are paid well, and you have some control over your fate on the field of battle.",
    "Vanguard Commander": "You are skilled in combat and a scholar of tactics. Your name is known as one to lead the charge fearlessly against the enemy.",
    "General of the West": "The Emperor has appointed you as the Lord of the Cardinal West. Your army flourishes under your command, and your foes shudder to face the direction of the setting sun.",
    "Grand General": "The Imperial generals answer to you, and the war turns at your will. The rewards are plentiful and your bloodline's integrity is guaranteed.",
    "Imperial Legate": "All hail the Right Hand of the Imperial throne. You speak with the Emperor's voice, and all your enemies are long dead by your will.",

    // Earthly Cultivation
    "Qi Condensation": "You pull the world’s breath into your veins, marking your first step beyond the mortal coil.",
    "Foundation Establishment": "Liquid Qi builds a permanent pillar within you, granting flight and a doubled lifespan.",
    "Core Formation": "You condense your essence into a Golden Core, becoming a Master whom commoners worship as a god.",
    "Nascent Soul": "An immortal infant forms within your soul, allowing you to survive even if your body is destroyed.",
    "Soul Severing": "You cut away mortal obsessions to define your own Dao, gaining power over the fabric of reality.",
    "Spirit Integration": "Body and soul fuse into a perfect celestial vessel capable of walking through the void.",
    "Tribulation Crossing": "You stand against the wrath of the Heavens, braving lightning to shed your worldly shell.",

    // Dao Comprehension
    "Intent Scholar": "Your will is your weapon; a single thought can manifest as a lethal, conceptual strike.",
    "Seeker of Law": "You decode the universe’s hidden scripts, manipulating gravity and time as basic tools.",
    "Dao Sage": "You live in perfect harmony with the Great Dao, your words carrying the weight of natural law.",
    "A Mortal Daoist": "You have returned to a state of profound simplicity, hiding cosmic power behind a mundane face.",
    "Dustless One": "Purged of karma and filth, you are a being of pure spirit whom no worldly force can touch.",

    // Immortal Cultivation
    "Human Immortal": "You have stepped into godhood, shedding all physical needs for an eternal existence.",
    "Earthly Immortal": "Neither mortal nor yet heavenly, you tap at the door to grand celestial power. It will not hold you for long.",
    "Heavenly Immortal": "Your name is etched into the stars, making you a true peer to the celestial lords.",
    "Sovereign Empyrean": "You rule across galaxies, where your personal decree becomes the absolute law of the cosmos.",

    // Dao Embodiment
    "Steward of the Realms": "You are the architect of existence, maintaining the balance between all planes of reality.",
    "Anchor of Causality": "Standing outside of time, you hold the threads of fate and can rewrite history at will.",
    "The Heavens Itself": "You have become the All—the infinite consciousness that dreams the universe into being.",

    // Fundamentals
    "Concentration": "Focus the mind through disciplined practice. Increase skill learning speed.",
    "Productivity": "Refine your work rhythm and efficiency. Increase job experience gained.",
    "Bargaining": "Sharpen your persuasive skills. Reduce all expenses.",
    "Meditation": "Steady your breaths and calm the heart. Increase happiness.",

    // Martial Techniques
    "Strength": "Develop your bodily strength. Increase your wage in the military.",
    "Battle Tactics": "Create and study battlefield strategies. Increase job experience gained in the military.",
    "Muscle Memory": "Strengthen your body through habit and repetition. Improve strength gains.",

    // Spiritual Arts
    "Qi Manipulation": "Become more proficient in manipulating qi. Increase your job experience gained in earthly cultivation.", // Become more proficient in manipulating qi.  
    "Vital Essence Reinforcement": "Thicken your lifeline with refinement in qi. Increase your lifespan.", // Thicken your lifeline with refinement in qi. Is this the beginning of your immortal path?
    "A Cultivator's Perspective": "Become uncaring of time's passing. Increase the game speed.", // The days pass faster before your eyes. Moments pass you by, like so many petals on the breeze...
    "Bodily Refinement": "Refine your body as a spiritual treasure. Increase your lifespan significantly.", // Bodily Refinement - Refine your body as a treasure. Lifespan grows as the red dust washes from your body and spirit.
    "Temporal Cultivation": "Cultivate and nurture time as you would a herb or flower. Increase game speed significantly.", // Temporal cultivation - "Like a herb or flower, time, too, may be nurtured and grown to abundance in its season."

    // Conceptual Techniques
    "Inspiration from the Dao": "You hear the whispers of the dao on the wind, hints on matters great and small. Increase job and skill XP gain.", // Inspiration from the Dao
    "Domain of Authority": "You develop your daoist domain; the natural energies of heaven and earth begin to respect your new claims. Increase Potential gain.", // Domain of Authority
    "Profound Recognition": " At a glance you begin to understand the natural energies and qualities of goods. Reduce item expenses.", // Profound Recognition
    "Great Destiny": "When you close your eyes you feel as though you have a golden path before you, growing ever brighter. Greatness is no longer a question for you. Increase Potential gain.", // Great Destiny
    "Karmic Significance": "Your karmic weight grows by the day; significant events start naturally to seek you out. Increase job wage.", // Karmic Significance
    "Heavenly Talent": "They begin to call you 'blessed with talent', though you have never been before. Things start to come easier to you, as though your instincts already know the answers.", // Heavenly Talent
    "Enlightened Tempo": "Unconsciously, your every breath and movement becomes more in tune with the rhythm of the natural dao. Increase job and skill XP.", // Enlightned Tempo
    "Rarified Mind": "Your every thought starts to become tinged with the flavour of the natural Dao; smaller matters pass by all the easier. Increase game speed.", // Rarified Mind

    // Immortal Cultivation
    "Epoch-Spanning Lifeline": "Your lifeline runs as deep as Mt. Tai and as wide as the Yellow River. Increases lifespan.", // Epoch-Spanning Lifeline
    "Wheel-Crossing Permanence": "Your powerful soul resists erosion by the Winds of Rebirth. Increases how much max level is preserved for rebirth and milestone auto-max logic.", // Wheel-Crossing Permanence
    "Spiritual Nexus": "You are a nexus in reality; Essence flows upstream to you, evermore. Increase essence gain.", // Spiritual Nexus
    "Cessation of Excess": "What you need, naturally comes in its time. What you don't need, fades away by itself. Reduce item expenses.", // Cessation of Excess

    // Manifestation
    "Taiji Equilibrium": "You join Yin and Yang, and begin your return to primordial origin. Increase potential gain and increase essence gain.", // Taiji Equilibrium
    "Splitting the Illusion": "In one world you walk left, in another you walk right. The Maya splits in twain, but you can see still. Increase xp for jobs and skills.", // Splitting the Illusion
    "World-Dreams": "When you sleep, your dreams spin worlds into being. When you wake the illusion fades away once more. Increase lifespan.", // World-Dreams
    "Meditations on the Heavenly": "What is Mortal, what is Heavenly? The more you learn, the less you know. Increase xp for immortal cultivation jobs .", // Meditations on the Heavenly

    // Residences
    "Ragged Courtyard": "Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.",
    "Bamboo Hut": "A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.",
    "Mountain Cottage": "Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn't very pleasant.",
    "Respectable Home": "Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.",
    "Stately Manor": "A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.",
    "Noble Estate": "Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.",
    "Grand Palace": "A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.",
    "Blessed Imperial Dwelling": "A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.",
    "Auspicious Cultivator Dwelling": "You rule your very own community in your small town, owning multiple establishments.",
    "Dragon Vein Confluence Cavern": "As the highest ranking official, you manage and oversee everything that happens. While your pay is astronomical, so are your expenses.",
    "Starlight Converging Peak": "You reign the whole nation. While your riches may be corrupted, everything you see belongs to you.",
    "Century Refinement Holy Forest": "A Dimension just for you that can be summoned at will. What happens there stays there.",
    "Taiji Cycling Blessed Land": "Unknown how or when the Void realm came into existence, containing elements which don’t exist outside of its dimensional plane are now all to your disposal",
    "Earth Overturning Grotto Heaven": "Predating our own universe, the Void has an unlimited amount of space for your belongings, if you are willing to submit to it.",
    "Star-Plucking Tower": "Beneath personality and ego lays the source of our deep character, our personhood. Here are the psychic senses, our deep mind and emotions, symbols and inner reality.",
    "Star-Stepping Turtle Dwelling": "A palace placed atop a star-stepping turtle, able to move between the stars at your direction.",
    "Void Ark": "A rare immortal-grade realm-shifting vessel; this dwelling can shift to parallel realms at will, though be careful not to fall between the cracks.",
    "Spiritual Sun": "A Sun out in the cosmos, composed of pure spiritual energy, now yours to monopolise. There is plenty of space, and abundant resources to wield as you wish, though with a certain level of care.",
    "Rice-Grain Realm": "A solar system, collapsed into the size of a grain of rice. You will certainly not lack for space or mundane resources.",
    "Realm Prefecture": "A fully colonized network of stars and star systems spanning dozens of light years is ready for you to explore and call home.",
    "Yellow River Teahouse": "A quaint teahouse on the banks of the Yellow River, unique across the realms. As the souls of the dead pass, you collect your tithe of interesting knowledge.",
    "The Akashic Library": "A cluster of galactic groups spanning hundreds of millions of light years across and containing thousands of galaxies is under your control.",
    "The Karmic Pool": "One of the largest known structures of the universe, containing dozens of superclusters and millions of galaxies.",
    "All-Seeing Cosmos": "You did it! You finally rule the entire universe...or do you?",
    "Myriad Realms": "Universe is too small for you?!",
    "Microcosm World": "You try to find at least some place that is still beyond your control, but all in vain.",
    "Origin/Terminus": "The beginning, and the end. Where it all began, and where it will end. Where it has ended.",

    // Treasures
    "Journal": "A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.",
    "Body Refinement Weights": "Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before.",
    "Personal Servant": "Assists you in completing day to day activities, giving you more time to be productive at work.",
    "Spirit Steel Sword": "A fine blade used to slay enemies even quicker in combat and therefore gain more experience.",
    "Housekeeper": "Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.",
    "Azure Jade Charm": "Sculpted of auspicious jade, this charm stimulates your meridians and eases your efforts in manipulating qi.",
    "Scripture Desk": "A dedicated area housing fine stationary and equipment designed for furthering your progress in research.",
    "Scripture Pavilion": "Stores your collection of manuscripts, each containing vast amounts of information from basic martial arts to complex spiritual techniques.",
    "Star Gazing Platform": "Used for observing the skies for celestial events which may reveal a hint of profound happenings.",
    "Mortal-Scrying Orb": "Allows you to scry the world around you, displaying the trials and tribulations of everyday life.",
    "Fivefold Elements Ring": "Helps attune your thoughts to the natural flows of the primary qi forms.",
    "Golden Petal Robe": "Wearing this robe produces a sense calm in you, as though you are fading into the world, and it into you.",
    "Demon Slaying Blade": "With each enemy defeated by your sword, your expertise grows. A master can kill with a simple reed, but what more with a supreme blade?",
    "Abyssal Crushing Pearl": "For a mortal to touch this pearl would transform them instantly into a pillar of salt. Carefully handled, you glean details of esoteric dao.",
    "Dead Mountain's Sand": "An ancient immortal personage once crushed a vast spiritual mountain to sand with a single step. From it you can sense an echo of their profound cultivation.",
    "Essential Crown": "Some seniors wear their enlightenment on their brow. A single look at it may turn a mortal into a great power, or into dust.",
    "Primordial Memory Crystal": "A stray thought from a primordial entity has crystalised from the ether. Sensing the memory within can grant you knowledge of unbelievable things, but do so with extreme caution.", // Skill XP
    "Beneficient Nirvana Fruit": "The conceptual fruit from ten million lifetimes of saintly care and right-living. This treasure bears the faint mark of the Awakened One.",
    "The Cintamani Stone": "The wishes and hopes of humanity crystalised. The potential to do infinite good is within your palm.",
    "Yellow Springs Compass": "The Compass contains the way to the underworld courts. The bearer determines who finds their way, and who needn't make the journey.",
    "The Drifting Bottle": "Drifting on the winds of time and space, The Bottle seeds the beginning of universes, and returns in its time to collect the ashes at their ends.",
    "The Universe Painting": "The Myriad Realms were always just a painting on canvas, crafted lovingly by a creator unknown. Now, it falls to your careful stewardship.",
    "The Ordinance Stele": "The Law is transcribed here. What is written here, is; what is not written, is not.",
    "The Cosmic Egg": "It was there at the beginning. Holding it now, you realise that you were there, too. It has just taken you some time to return once more. What was then, now is again.",

    // Essence Milestones
    "Magic Eye": "The Eye in your Talisman starts to glow.",
    "Almighty Eye": "The Eye in your Talisman shines like a star.",
    "Pact with the Heavens": "You made a Pact with the Heavens.",
    "Ascendant Master": "You've mastered the mundane. Now to greater heights.",
    "Eternal Time": "Does time matter now?",
    "Celestial Conduit": "You've formed a direct link to the Celestial realms.",
    "Divine Meridians": "Your celestial link has infiltrated your spirit. You are now yourself divine.",
    "Heaven's Blessing": "The Heavens show you great favour.",
    "Cumulative Fortune": "The Dao persists beyond time itself.",
    "New Beginning": "Greater responsibilities wait for you under the auspices of supreme power.",

    // Heroic Milestones
    "Rise of Great Heroes": "Every active Great job or skill will increase Essence gain a bit.",
    "Lazy Heroes": "Total Hero XP multiplier is 5e20",
    "Dirty Heroes": "Total Hero XP multiplier is 5e35",
    "Angry Heroes": "Total Hero XP multiplier is 5e50",
    "Tired Heroes": "Total Hero XP multiplier is 5e65",
    "Scared Heroes": "Total Hero XP multiplier is 5e80",
    "Good Heroes": "Total Hero XP multiplier is 5e95",
    "Funny Heroes": "Total Hero XP multiplier is 5e120",
    "Beautiful Heroes": "Total Hero XP multiplier is 5e170",
    "Awesome Heroes": "Total Hero XP multiplier is 5e180",
    "Furious Heroes": "Total Hero XP multiplier is 5e198",
    "Superb Heroes": "Total Hero XP multiplier is 5e201",
    "A new beginning": "Unlocks the ability to reset for Chaos Essence.",

    // Dark Milestones
    "Mind Control": "Control the Devil by making him give you even more Potential per second",
    "Galactic Emperor": "Commander of the Immortal Cultivation grants you the privilege to automatically collect Spirit Essence from nearby worlds.",
    "Dark Matter Harvester": "Harvest the universe to extract even more Chaos Essence from it.",
    "A Dark Era": "Begin a new era of Chaos Essence.",
    "Dark Orbiter": "Using ancient arts, you can vastly improve your Dao Fragment generators.",
    "Dark Matter Mining": "Mine huge amounts of Chaos Essence from each world you visit.",
    "The new gold": "Spirit Essence may become the new standard of value.",
    "The Devil inside you": "Shady deals with the Devil grant you a huge Potential bonus.",
    "Strange Magic": "A strange wizard teaches a forbidden method that vastly amplifies all experience gain.",
    "Life is valueable": "Time is limited... Even as the ruler of the universe.",
    "Speed speed speed": "You can influence the pace of the universe with your massive stores of Chaos Essence.",
    "Dark Matter Millionaire": "This secret art drives your quest to become a true Chaos Essence magnate.",
    "The new Dark Matter": "Your talisman tears through space and time across countless realms. Welcome to the Upper Realm.",

    "Strong Hope": "Another Cumulative Fortune buff?!",
    "Ruler of the Metaverse": "Now you stand as a true ruler of the Upper Realm.",
    "A New Hope": "No more of this Cumulative Fortune nonsense!!!",
    "Time is a flat circle": "This is a world where nothing is solved. Someone once told me, time is a flat circle. Everything we’ve ever done or will do, we’re gonna do over and over and over again.",
    "The End is near": "We don't try to live forever",
    "The End": "There is always an end",

    // Alchemy pills (see Alchemy tab)
    "Qi gathering pill": "Draws ambient spiritual energy from the environment directly into the meridians to accelerate the initial accumulation of Qi.",
    "Foundation building pill": "Triggers a violent surge of energy to permanently compress and liquefy gaseous Qi into a solid spiritual bedrock.",
    "Core nourishing pill": "Feeds the spinning internal liquid sphere with pure essence to steadily solidify it into a flawless Golden Core.",
    "Soul condensation pill": "Shatters the Golden Core safely and coalesces its concentrated energy to hatch the cultivator's miniature immortal avatar.",
    "Mortal Splitting Pill": "Cuts away lingering emotional anchors and physical weaknesses to detach the divine soul from mortal limitations.",
    "Harmonious Fusion Pill": "Blends the physical flesh, internal energy, and divided soul avatars back together into a single indestructible entity.",
    "Lightning Quenching Pill": "Absorbs deadly heavenly lightning strikes and converts the volatile energy into pure, body-hardening strength.",
    "Intent Condensing Pill": "Sharpens mental focus to help the scholar manifest abstract insights into a tangible, physical pressure.",
    "Clear Mind Pill": "Silences all internal distractions, allowing the seeker to perceive the subtle, hidden principles governing the universe.",
    "Law Tracing Pill": "Makes the invisible threads of cosmic law visible to the naked eye, allowing the Sage to reshape reality within their domain.",
    "Ordinary Heart Pill": "Suppresses divine memories and powers to allow authentic, uninterrupted immersion into the struggles of a regular human life.",
    "Karmic Severance Pill": "Sears away the invisible webs of destiny, debts, and grudges to leave the soul entirely unblemished by the material world.",
    "Immortal Ascension Pill": "Facilitates the intense transformation of mortal spiritual energy into high-grade, permanent Immortal Qi.",
    "Transient Clay Pill": "Dissolves the final anchoring weight of the terrestrial form, preparing the cultivator to knock on the gates of the high heavens.",
    "Star-Peer Pill": "Elevates the soul's frequency to match the celestial lords, permanently etching the cultivator's true name into the starry cosmos.",
    "Dominion-Forging Pill": "Provides the vast cosmic energy required to tether entire galaxy clusters to the user's absolute, personal decree.",
    "Axis-Mundi Pill": "Roots the architect's consciousness at the exact intersection of all realities to monitor and maintain universal equilibrium.",
    "Fate-Weaver Pill": "Visualises the timeline as physical strands, granting the user the power to cut, tie, and rewrite history at will.",
    "Genesis-Dream Elixir": "Dissolves the individual ego into the infinite cosmic consciousness, allowing the user to manifest entirely new realities through pure imagination.",
}