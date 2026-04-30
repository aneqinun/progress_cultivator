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
    "Qi condensation": "Study the theory of mana and practice basic spells. There is minor pay to cover living costs; however, this is a necessary stage in becoming a mage.",
    "Foundation establishment": "Under the supervision of a skilled mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.",
    "Core Formation": "Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.",
    "Nascent Soul": "Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that an archmage has enough destructive power to wipe an empire off the map.",
    "Soul Severing": "Specialize in harnessing temporal energies that alter the flow of time with supernatural divinations and otherwordly expertise.",
    "Spirit integration": "Spend your days guiding the Earthly Cultivation sect and investigating the path to true immortality. The Chairman receives ludicrous amounts of pay daily.",
    "Tribulation crossing": "You wield near-limitless power. By ruling with an iron fist, every cultivator in the Earthly Cultivation sect bows to your command.",

    // Dao Comprehension
    "Intent Scholar": "Corrupted by Void, you are slowly turning into a slave with no free will, just to serve the Void for the rest of eternity... Can you resist it, or will it consume you forever?",
    "Seeker of Law": "You become an inquisitive yet putrid creature that siphons life from everything around you.",
    "Dao Sage": "Damned soul... a shadow of your former self, lingering between realms and consumed by void... Can you ever find peace?",
    "A Mortal Daoist": "You gazed into the dark heart of the Void long enough to become one of the most powerful and feared beings. All lesser void creatures are at your command.",
    "Dustless One": "Creator of the Void, a vast canvas of blackness and nothingness, in which the concept of its existence defies all logic. Nothing will escape you.",

    // Immortal Cultivation
    "Human Immortal": "With the powers bestowed upon you by an unknown entity, you wander around, visiting places revered and feared in search of answers.",
    "Earthly Immortal": "Extremely powerful being with tremedous telekinetic powers and the ability to rearrange the molecular structure of matter and energy, even up to cosmic scale.",
    "Heavenly Immortal": "A nigh-omnipotent cosmological entity, with vast matter and energy manipulation abilities that help you push the boundaries of the Universe itself.",
    "Sovereign Epyrean": "Creator of everything.",

    // Dao Embodiment
    "Steward of the Realms": "Snow Crash, 1992",
    "Anchor of Causality": "They both knew they would only go forward when next to each other. They vowed that they would always be together, earn a lot of money and move to a better place where they would be very happy.",
    "The Heavens Itself": "ω",

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
    "Time Warping": "Become uncaring of time's passing. Increase the game speed.", // The days pass faster before your eyes. Moments pass you by, like so many petals on the breeze...
    "Bodily Refinement": "Refine your body as a spiritual treasure. Increase your lifespan significantly.", // Bodily Refinement - Refine your body as a treasure. Lifespan grows as the red dust washes from your body and spirit.
    "Temporal Cultivation": "Cultivate and nurture time as you would a herb or flower. Increase game speed significantly.", // Temporal cultivation - "Like a herb or flower, time, too, may be nurtured and grown to abundance in its season."

    // Conceptual Techniques
    "Dark Influence": "You hear the whispers of the dao on the wind, hints on matters great and small. Increase job and skill XP gain.", // Inspiration from the Dao
    "Domain of Authority": "You develop your daoist domain; the natural energies of heaven and earth begin to respect your new claims. Increase Potential gain.", // Domain of Authority
    "Profound Recognition": " At a glance you begin to understand the natural energies and qualities of goods. Reduce item expenses.", // Profound Recognition
    "Great Destiny": "When you close your eyes you feel as though you have a golden path before you, growing ever brighter. Greatness is no longer a question for you. Increase Potential gain.", // Great Destiny
    "Karmic Significance": "Your karmic weight grows by the day; significant events start naturally to seek you out. Increase job wage.", // Karmic Significance
    "Heavenly Talent": "They begin to call you 'blessed with talent', though you have never been before. Things start to come easier to you, as though your instincts already know the answers.", // Heavenly Talent
    "Enlightened Tempo": "Unconsciously, your every breath and movement becomes more in tune with the rhythm of the natural dao. Increase job and skill XP.", // Enlightned Tempo
    "Time Loop": "Your every thought starts to become tinged with the flavour of the natural Dao; smaller matters pass by all the easier. Increase game speed.", // Rarified Mind

    // Immortal Cultivation
    "Cosmic Longevity": "Your lifeline runs as deep as Mt. Tai and as wide as the Yellow River. Increases lifespan.", // Epoch-Spanning Lifeline
    "Cosmic Recollection": "Your powerful soul resists erosion by the Winds of Rebirth. Increases how much max level is preserved for rebirth and milestone auto-max logic.", // Wheel-Crossing Permanence
    "Essence Collector": "You are a nexus in reality; Essence flows upstream to you, evermore. Increase essence gain.", // Spiritual Nexus
    "Galactic Command": "What you need, naturally comes in its time. What you don't need, fades away by itself. Reduce item expenses.", // Cessation of Excess

    // Manifestation
    "Yin Yang": "You join Yin and Yang, and begin your return to primordial origin. Increase potential gain and increase essence gain.", // Taiji Equilibrium
    "Parallel Universe": "In one world you walk left, in another you walk right. The Maya splits in twain, but you can see still. Increase xp for jobs and skills.", // Splitting the Illusion
    "Higher Dimensions": "When you sleep, your dreams spin worlds into being. When you wake the illusion fades away once more. Increase lifespan.", // World-Dreams
    "Epiphany": "What is Mortal, what is Heavenly? The more you learn, the less you know. Increase xp for immortal cultivation jobs .", // Meditations on the Heavenly

    // Properties
    "Ragged Courtyard": "Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.",
    "Wanderer's Tent": "A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.",
    "Bamboo Hut": "Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn't very pleasant.",
    "Mountain Cottage": "Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.",
    "Cultivator Residence": "A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.",
    "Manor Estate": "Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.",
    "Minor Immortal Palace": "A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.",
    "Grand Immortal Palace": "A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.",
    "Town Lord": "You rule your very own community in your small town, owning multiple establishments.",
    "City Lord": "As the highest ranking official, you manage and oversee everything that happens. While your pay is astronomical, so are your expenses.",
    "Dynasty Regent": "You reign the whole nation. While your riches may be corrupted, everything you see belongs to you.",
    "Portable Blessed Land": "A Dimension just for you that can be summoned at will. What happens there stays there.",
    "Void Blessed Land": "Unknown how or when the Void realm came into existence, containing elements which don’t exist outside of its dimensional plane are now all to your disposal",
    "Void Heaven": "Predating our own universe, the Void has an unlimited amount of space for your belongings, if you are willing to submit to it.",
    "Astral Heaven": "Beneath personality and ego lays the source of our deep character, our personhood. Here are the psychic senses, our deep mind and emotions, symbols and inner reality.",
    "Star Throne": "You sit on your throne, overseeing the existence itself.",
    "Void Ark": "Your own personal cosmic house, able to travel anywhere in the universe at 99.99% of the speed of light.",
    "Spirit Planet": "A planet with the sole purpose of housing you and your family.",
    "Heavenly Ring Domain": "A construct with the mass of Jupiter and a surface area millions of times that of Earth, capable of housing trillions of humans and other animals including alien species. The expenses are literally astronomical due to the maintenance involved in keeping the structure stable and the inside area habitable, but the massive living space is worth it.",
    "Stellar Prefecture": "A fully colonized network of stars and star systems spanning dozens of light years is ready for you to explore and call home.",
    "Star River Dominion": "You rule your very own galaxy the size of the Milky Way, with billions of planets organized into thousands of different states all under your control. While your power is astronomical, so are your responsibilities.",
    "Grand Star Region": "A cluster of galactic groups spanning hundreds of millions of light years across and containing thousands of galaxies is under your control.",
    "Celestial Vein": "One of the largest known structures of the universe, containing dozens of superclusters and millions of galaxies.",
    "All-Seeing Cosmos": "You did it! You finally rule the entire universe...or do you?",
    "Ten Thousand Realms": "Universe is too small for you?!",
    "Microcosm World": "You try to find at least some place that is still beyond your control, but all in vain.",
    "Void of Desolation": "The Great Nothing",

    // Misc
    "Cultivation Manual": "A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.",
    "Body Refinement Weights": "Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before.",
    "Personal Servant Disciple": "Assists you in completing day to day activities, giving you more time to be productive at work.",
    "Spirit Steel Sword": "A fine blade used to slay enemies even quicker in combat and therefore gain more experience.",
    "Steward Elder": "Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.",
    "Azure Jade Charm": "Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.",
    "Scripture Desk": "A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.",
    "Scripture Pavilion": "Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.",
    "Star Gazing Platform": "Used for observing terrestrial, marine and celestial events.",
    "Heavenly Mind's Eye": "Lets you see memories, remember images, and even see new pictures and ideas.",
    "Void Jade Pendant": "Helps you shape and manipulate void matter, refining your progress through the Void path.",
    "Void Battle Armor": "Generates an innate armor as a part of your body, which is resistant to attacks, harm or pain.",
    "Void Slaying Blade": "Forged from void dust and dark matter, this blade can slash through dimensional barriers. It's a weapon of choice for every Void Reaver.",
    "Void Pearl": "When the orb touches non-void entities, it disintegrates them by harnessing power from the Void Realm.",
    "Void Sand": "Purest version of void created material; a teaspoon of it is as heavy as a small planet.",
    "Immortal Robe": "The most powerful and essential equipment of any Celestial. Acts as a source of infinite power.",
    "Cosmos Fragment": "From the time the universe was born. Can create more small universes.",
    "Realm Fragment": "Came into existence long before our universe was created, this strange looking object with no shape radiates unlimited energy.",
    "Stairway to Immortality": "A staircase to the all mighty themselves.",
    "Road to Demon Domain": "The devil invites you to his palace of terror.",
    "Fourfold Primordial Spark": "This object is from a higher dimensional world.",
    "Annihilation Art": "Why do you need it?",
    "Personal Star Domain": "You know about the pocket dimension, right?",
    "Grand Dao Sphere": "You gain the limitless pow... ah, you're already omnipotent...",

    // Essence Milestones
    "Magic Eye": "The Eye in your Amulet starts to glow.",
    "Almighty Eye": "The Eye in your Amulet shines like a star.",
    "Deal with the Devil": "You made a deal with the Devil.",
    "Transcendent Master": "You've mastered Transcendence.",
    "Eternal Time": "Does time matter now?",
    "Hell Portal": "You've opened a portal to Hell.",
    "Inferno": "You are at the last level of Hell. What is next?",
    "God's Blessings": "God bless you!",
    "Faint Hope": "Maybe there is hope?",
    "New Beginning": "Try to upgrade One Above All to level 2000",

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

    "Strong Hope": "Another Faint Hope buff?!",
    "Ruler of the Metaverse": "Now you stand as a true ruler of the Upper Realm.",
    "A New Hope": "No more of this Faint Hope nonsense!!!",
    "Time is a flat circle": "This is a world where nothing is solved. Someone once told me, time is a flat circle. Everything we’ve ever done or will do, we’re gonna do over and over and over again.",
    "The End is near": "We don't try to live forever",
    "The End": "There is always an end",
}