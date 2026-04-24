var app = (function () {
  var artist = "Zelda";
  var twitter = "layzeli";
  var currentIndex = 0;
  var zipUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //the infinite heardle template doesn't work unless there's a valid url here. if you choose to click this it's on you.

  var musicNameList = [
    // A LINK BETWEEN WORLDS
    "Boss Theme (Hyrule) - A Link Between Worlds",
    "Death Mountain - A Link Between Worlds",
    "Deeper into the Lost Woods - A Link Between Worlds",
    "Desert Palace - A Link Between Worlds",
    "Fortune Teller - A Link Between Worlds",
    "Hyrule at Peace - A Link Between Worlds",
    "Hyrule Hotfoot - A Link Between Worlds",
    "Irene - A Link Between Worlds",
    "Lorule Castle - A Link Between Worlds",
    "Meeting Princess Zelda - A Link Between Worlds",
    "Milk Bar - A Link Between Worlds",
    "Mother Maimai - A Link Between Worlds",
    "Overworld (Hyrule) - A Link Between Worlds",
    "Overworld (Lorule) - A Link Between Worlds",
    "Queen Oren - A Link Between Worlds",
    "Ravio's Shop - A Link Between Worlds",
    "Ravio's Theme - A Link Between Worlds",
    "Skull Woods - A Link Between Worlds",
    "Sneaking into the Dark Palace - A Link Between Worlds",
    "Staff Roll Credits - A Link Between Worlds",
    "The Dark Palace - A Link Between Worlds",
    "Thieves Hideout - A Link Between Worlds",
    "Title Screen - A Link Between Worlds",
    "Treacherous Tower - A Link Between Worlds",
    "Turtle Rock - A Link Between Worlds",
    "Yuga Battle - A Link Between Worlds",
    "Yuga's Ballad - A Link Between Worlds",



    // A LINK TO THE PAST
    "Battle with Ganon - A Link to the Past",
    "Dank Dungeons - A Link to the Past",
    "Dark World - A Link to the Past",
    "Death Mountain - A Link to the Past",
    "Epilogue ~ Beautiful Hyrule - A Link to the Past",
    "File Select - A Link to the Past",
    "Hyrule Castle - A Link to the Past",
    "Princess Zelda's Rescue - A Link to the Past",
    "Sanctuary Dungeon - A Link to the Past",
    "Seal of the Seven Maidens - A Link to the Past",



    // BREATH OF THE WILD
    "A King's Request - Breath of the Wild",
    "Abandoned North Mine - Breath of the Wild",
    "Akkala Ancient Tech Lab - Breath of the Wild",
    "Attack on Vah Medoh - Breath of the Wild",
    "Attack on Vah Naboris - Breath of the Wild",
    "Attack on Vah Rudania - Breath of the Wild",
    "Attack on Vah Ruta - Breath of the Wild",
    "Beast Ganon (Phase 1) - Breath of the Wild",
    "Beast Ganon (Phase 2) - Breath of the Wild",
    "Beast Ganon (Phase 3) - Breath of the Wild",
    "Blight Ganon - Breath of the Wild",
    "Boss Defeated (Cutscene) - Breath of the Wild",
    "Calamity Ganon (Phase 1) - Breath of the Wild",
    "Calamity Ganon (Phase 2) - Breath of the Wild",
    "Cave - Breath of the Wild",
    "Death Mountain - Breath of the Wild",
    "Divine Beast Vah Medoh - Breath of the Wild",
    "Divine Beast Vah Naboris - Breath of the Wild",
    "Divine Beast Vah Rudania - Breath of the Wild",
    "Divine Beast Vah Ruta - Breath of the Wild",
    "Dragon - Breath of the Wild",
    "Dungeon Battle - Breath of the Wild",
    "Field Battle - Breath of the Wild",
    "Flight Spot Trial - Breath of the Wild",
    "Gerudo Canyon - Breath of the Wild",
    "Gerudo Champion Urbosa's Theme - Breath of the Wild",
    "Gerudo Town (Day) - Breath of the Wild",
    "Gerudo Town (Night) - Breath of the Wild",
    "Get Master Sword - Breath of the Wild",
    "Goron Champion Daruk's Theme - Breath of the Wild",
    "Goron City (Day) - Breath of the Wild",
    "Goron City (Night) - Breath of the Wild",
    "Great Fairy Fountain - Breath of the Wild",
    "Guardian Battle - Breath of the Wild",
    "Hateno Ancient Tech Lab - Breath of the Wild",
    "Hateno Village (Day) - Breath of the Wild",
    "Hateno Village (Night) - Breath of the Wild",
    "Heat Test Minigame - Breath of the Wild",
    "Hinox Battle - Breath of the Wild",
    "Horse God Malanya's Theme - Breath of the Wild",
    "House - Breath of the Wild",
    "Hunting Minigame - Breath of the Wild",
    "Hyrule Castle - Breath of the Wild",
    "Hyrule Castle Town - Breath of the Wild",
    "Hyrule Field (Day) - Breath of the Wild",
    "Hyrule Field (Night) - Breath of the Wild",
    "Impa's Theme - Breath of the Wild",
    "Kakariko Village (Day) - Breath of the Wild",
    "Kakariko Village (Night) - Breath of the Wild",
    "Kara Kara Bazaar - Breath of the Wild",
    "Kass's Theme - Breath of the Wild",
    "Kilton's Monster Shop - Breath of the Wild",
    "Korok Forest (Day) - Breath of the Wild",
    "Korok Forest (Night) - Breath of the Wild",
    "Lurelin Village (Day) - Breath of the Wild",
    "Lurelin Village (Night) - Breath of the Wild",
    "Lynel / Yiga Battle - Breath of the Wild",
    "Main Theme - Breath of the Wild",
    "Master Kohga Battle - Breath of the Wild",
    "Master Kohga's Theme - Breath of the Wild",
    "Maze Forest (Lost Woods) - Breath of the Wild",
    "Molduga Battle (Phase 1) - Breath of the Wild",
    "Molduga Battle (Phase 2) - Breath of the Wild",
    "Mountain - Breath of the Wild",
    "Omen of the Bloody Moon - Breath of the Wild",
    "Parasailing Minigame - Breath of the Wild",
    "Prince Sidon's Theme - Breath of the Wild",
    "Riding Horse (Day) - Breath of the Wild",
    "Riding Horse (Night) - Breath of the Wild",
    "Rito Champion Revali's Theme - Breath of the Wild",
    "Rito Village (Day) - Breath of the Wild",
    "Rito Village (Night) - Breath of the Wild",
    "Sheikah Tower - Breath of the Wild",
    "Shieldsurfing Minigame - Breath of the Wild",
    "Shrine Battle - Breath of the Wild",
    "Shrine Theme - Breath of the Wild",
    "Snow - Breath of the Wild",
    "Stables - Breath of the Wild",
    "Stationary Guardian Battle - Breath of the Wild",
    "Talus Battle - Breath of the Wild",
    "Tarrey Town - Breath of the Wild",
    "Temple of Time - Breath of the Wild",
    "The Divine Beasts Strike - Breath of the Wild",
    "Volcano - Breath of the Wild",
    "Water Side - Breath of the Wild",
    "Yiga Assassin Base - Breath of the Wild",
    "Zora Champion Mipha's Theme - Breath of the Wild",
    "Zora's Domain (Day) - Breath of the Wild",
    "Zora's Domain (Night) - Breath of the Wild",



    // FOUR SWORDS
    "Boss Battle - Four Swords",
    "Chamber of Insight - Four Swords",
    "Monster Battle - Four Swords",
    "Prologue - Four Swords",
    "Sea of Trees - Four Swords",
    "Talus Cave - Four Swords",
    "Title Theme - Four Swords",
    "Vaati's Palace - Four Swords",



    // FOUR SWORDS ADVENTURES
    "Boss Battle - Four Swords Adventures",
    "Field - Four Swords Adventures",
    "Frozen Hyrule - Four Swords Adventures",
    "Ganon - Four Swords Adventures",
    "House (Dark) - Four Swords Adventures",
    "Inside a House - Four Swords Adventures",
    "Map - Four Swords Adventures",
    "Minor Battle - Four Swords Adventures",
    "Plains - Four Swords Adventures",
    "Staff Roll Credits - Four Swords Adventures",
    "The Swamp - Four Swords Adventures",
    "Tingle's Theme - Four Swords Adventures",
    "Title Theme - Four Swords Adventures",
    "Tower of Flames - Four Swords Adventures",
    "Village of the Blue Maiden - Four Swords Adventures",



    // LINK'S AWAKENING (2019)
    "Animal Village - Link's Awakening (2019)",
    "Ballad of the Wind Fish (Commercial) - Link's Awakening (2019)",
    "Ballad of the Wind Fish (Instruments) - Link's Awakening (2019)",
    "Ballad of the Wind Fish (Marin) - Link's Awakening (2019)",
    "Ballad of the Wind Fish (Shore) - Link's Awakening (2019)",
    "Boss Battle - Link's Awakening (2019)",
    "Cave - Link's Awakening (2019)",
    "Chamber Dungeon (Edit Mode) - Link's Awakening (2019)",
    "Christine's House - Link's Awakening (2019)",
    "Color Dungeon - Link's Awakening (2019)",
    "Cucco House - Link's Awakening (2019)",
    "Dampe's House - Link's Awakening (2019)",
    "Dream Shrine - Link's Awakening (2019)",
    "Fairy Fountain - Link's Awakening (2019)",
    "Field - Link's Awakening (2019)",
    "File Select - Link's Awakening (2019)",
    "Fishing Game - Link's Awakening (2019)",
    "Frog's Song of Soul - Link's Awakening (2019)",
    "Game Over - Link's Awakening (2019)",
    "Guardian Acorn - Link's Awakening (2019)",
    "House by the Cove - Link's Awakening (2019)",
    "Inside a House - Link's Awakening (2019)",
    "Kanalet Castle - Link's Awakening (2019)",
    "Level 1: Tail Cave - Link's Awakening (2019)",
    "Level 2: Bottle Grotto - Link's Awakening (2019)",
    "Level 3: Key Cavern - Link's Awakening (2019)",
    "Level 4: Angler's Tunnel - Link's Awakening (2019)",
    "Level 5: Catfish's Maw - Link's Awakening (2019)",
    "Level 6: Face Shrine - Link's Awakening (2019)",
    "Level 7: Eagle's Tower - Link's Awakening (2019)",
    "Level 8: Turtle Rock - Link's Awakening (2019)",
    "Mabe Village - Link's Awakening (2019)",
    "Manbo's Mambo - Link's Awakening (2019)",
    "Mini Boss Battle - Link's Awakening (2019)",
    "Mr. Write's House - Link's Awakening (2019)",
    "Mysterious Forest - Link's Awakening (2019)",
    "Owl - Link's Awakening (2019)",
    "Passage - Link's Awakening (2019)",
    "Rapids Ride - Link's Awakening (2019)",
    "Rapids Ride (Time Attack): Link's Awakening (2019)",
    "Rescue BowWow - Link's Awakening (2019)",
    "Richard's Villa - Link's Awakening (2019)",
    "Seashell Mansion - Link's Awakening (2019)",
    "Shadow Battle - Link's Awakening (2019)",
    "Shop - Link's Awakening (2019)",
    "Southern Face Shrine - Link's Awakening (2019)",
    "Tal Tal Heights - Link's Awakening (2019)",
    "Telephone Booth - Link's Awakening (2019)",
    "Title - Link's Awakening (2019)",
    "Trendy Game - Link's Awakening (2019)",
    "Turtle Rock Battle - Link's Awakening (2019)",
    "Waking Up At Tarin's House - Link's Awakening (2019)",
    "Wind Fish's Egg - Link's Awakening (2019)",



    // LINK'S AWAKENING DX
    "Animal Village - Link's Awakening DX",
    "Ballad of the Wind Fish (Instruments) - Link's Awakening DX",
    "Ballad of the Wind Fish (Shore) - Link's Awakening DX",
    "Boss Battle - Link's Awakening DX",
    "Cave - Link's Awakening DX",
    "Christine's House - Link's Awakening DX",
    "Color Dungeon - Link's Awakening DX",
    "Cucco House - Link's Awakening DX",
    "Dream Shrine - Link's Awakening DX",
    "Fairy Fountain - Link's Awakening DX",
    "Field - Link's Awakening DX",
    "File Select - Link's Awakening DX",
    "Frog's Song of Soul - Link's Awakening DX",
    "Game Over - Link's Awakening DX",
    "Guardian Acorn - Link's Awakening DX",
    "House by the Cove - Link's Awakening DX",
    "Inside a House - Link's Awakening DX",
    "Kanalet Castle - Link's Awakening DX",
    "Level 1: Tail Cave - Link's Awakening DX",
    "Level 2: Bottle Grotto - Link's Awakening DX",
    "Level 3: Key Cavern - Link's Awakening DX",
    "Level 4: Angler's Tunnel - Link's Awakening DX",
    "Level 5: Catfish's Maw - Link's Awakening DX",
    "Level 6: Face Shrine - Link's Awakening DX",
    "Level 7: Eagle's Tower - Link's Awakening DX",
    "Level 8: Turtle Rock - Link's Awakening DX",
    "Mabe Village - Link's Awakening DX",
    "Manbo's Mambo - Link's Awakening DX",
    "Mini Boss Battle - Link's Awakening DX",
    "Mr. Write's House - Link's Awakening DX",
    "Mysterious Forest - Link's Awakening DX",
    "Owl - Link's Awakening DX",
    "Passage - Link's Awakening DX",
    "Rapids Ride - Link's Awakening DX",
    "Rescue BowWow - Link's Awakening DX",
    "Richard's Villa - Link's Awakening DX",
    "Shadow Battle - Link's Awakening DX",
    "Shipwreck - Link's Awakening DX",
    "Shop - Link's Awakening DX",
    "Southern Face Shrine - Link's Awakening DX",
    "Tal Tal Heights - Link's Awakening DX",
    "Telephone Booth - Link's Awakening DX",
    "Title - Link's Awakening DX",
    "Trendy Game - Link's Awakening DX",
    "Turtle Rock Battle - Link's Awakening DX",
    "Waking Up At Tarin's House - Link's Awakening DX",
    "Wind Fish's Egg - Link's Awakening DX",



    // MAJORA'S MASK
    "Astral Observatory - Majora's Mask",
    "Battle - Majora's Mask",
    "Boat Cruise - Majora's Mask",
    "Boss Battle - Majora's Mask",
    "Chase - Majora's Mask",
    "Clock Tower - Majora's Mask",
    "Clock Town, First Day - Majora's Mask",
    "Clock Town, Second Day - Majora's Mask",
    "Clock Town, Third Day - Majora's Mask",
    "Cremia's Wagon - Majora's Mask",
    "Deku Palace - Majora's Mask",
    "Elegy of Emptiness - Majora's Mask",
    "Final Hours - Majora's Mask",
    "Giants' Theme - Majora's Mask",
    "Goron Race - Majora's Mask",
    "Great Bay Coast - Majora's Mask",
    "Great Bay Temple - Majora's Mask",
    "Happy Mask Salesman's Theme - Majora's Mask",
    "Kamaro's Dance - Majora's Mask",
    "Keaton's Quiz - Majora's Mask",
    "Majora's Incarnation Battle - Majora's Mask",
    "Majora's Mask Battle - Majora's Mask",
    "Majora's Theme - Majora's Mask",
    "Majora's Wrath Battle - Majora's Mask",
    "Mayor's Meeting - Majora's Mask",
    "Milk Bar - Majora's Mask",
    "Music Box House - Majora's Mask",
    "New Wave Bossa Nova - Majora's Mask",
    "Oath To Order - Majora's Mask",
    "Pirate Fortress - Majora's Mask",
    "Sonata Of Awakening - Majora's Mask",
    "Song Of Healing - Majora's Mask",
    "Southern Swamp - Majora's Mask",
    "Staff Roll Credits - Majora's Mask",
    "Stone Tower Temple - Majora's Mask",
    "Swordsman's School - Majora's Mask",
    "Title Theme - Majora's Mask",



    // OCARINA OF TIME
    "Battle - Ocarina of Time",
    "Bolero of fire - Ocarina of Time",
    "Boss Battle - Ocarina of Time",
    "Deku Tree - Ocarina of Time",
    "Dodongo Battle - Ocarina of Time",
    "Dodongo's Cavern - Ocarina of Time",
    "Escape From Ganon's Castle - Ocarina of Time",
    "Final Battle - Ocarina of Time",
    "Forest Temple - Ocarina of Time",
    "Ganon's Castle Bridge - Ocarina of Time",
    "Ganon's Tower - Ocarina of Time",
    "Ganondorf - Ocarina of Time",
    "Ganondorf Battle - Ocarina of Time",
    "Gerudo Valley - Ocarina of Time",
    "Goron City - Ocarina of Time",
    "Great Fairy's Fountain - Ocarina of Time",
    "Horse race - Ocarina of Time",
    "Hyrule Castle Courtyard - Ocarina of Time",
    "Hyrule Field - Ocarina of Time",
    "Ice Cavern - Ocarina of Time",
    "Ingo - Ocarina of Time",
    "Inside a House - Ocarina of Time",
    "Inside Lord Jabu Jabu - Ocarina of Time",
    "Inside the Great Deku Tree - Ocarina of Time",
    "Kaepora Gaebora - Ocarina of Time",
    "Kakariko Village - Ocarina of Time",
    "Kokiri Forest - Ocarina of Time",
    "Koume and Kotake - Ocarina of Time",
    "Legend of Hyrule - Ocarina of Time",
    "Lon Lon Ranch - Ocarina of Time",
    "Lost Woods - Ocarina of Time",
    "Market - Ocarina of Time",
    "Middle Boss Battle - Ocarina of Time",
    "Mini Game - Ocarina of Time",
    "Minuet of the Forest - Ocarina of Time",
    "Navi the fairy - Ocarina of Time",
    "Nocturne of Shadow - Ocarina of Time",
    "Potion Shop - Ocarina of Time",
    "Prelude of Light - Ocarina of Time",
    "Princess Zelda - Ocarina of Time",
    "Requiem of Spirit - Ocarina of Time",
    "Serenade of Water - Ocarina of Time",
    "Shadow Temple - Ocarina of Time",
    "Sheik - Ocarina of Time",
    "Shooting Gallery - Ocarina of Time",
    "Shop - Ocarina of Time",
    "Spirit Temple - Ocarina of Time",
    "Staff Roll Credits - Ocarina of Time",
    "Temple of Time - Ocarina of Time",
    "Water Temple - Ocarina of Time",
    "Windmill Hut - Ocarina of Time",
    "You Got a Spirtual Stone ! - Ocarina of Time",
    "Zelda - Ocarina of Time",
    "Zora's Domain - Ocarina of Time",



    // PHANTOM HOURGLASS
    "Astrid's Theme - Phantom Hourglass",
    "Bellum Battle - Phantom Hourglass",
    "Dark King Ganon - Phantom Hourglass",
    "Goron House - Phantom Hourglass",
    "Linebeck's Theme - Phantom Hourglass",
    "Phantom in Pursuit - Phantom Hourglass",
    "Phantom Linebeck Battle - Phantom Hourglass",
    "Prologue: Tetra and Her Handsome Pirates - Phantom Hourglass",
    "The King of the Oceans - Phantom Hourglass",
    "Time Stopped - Phantom Hourglass",


      
    // SKYWARD SWORD
    "Demon Lord, Ghirahim First Battle - Skyward Sword",
    "A Sudden Crashlanding - Skyward Sword",
    "Ancient Cistern - Skyward Sword",
    "Ballad of the Goddess - Skyward Sword",
    "Ballad of the Goddess ~ Zelda Solo - Skyward Sword",
    "Bamboo Island - Skyward Sword",
    "Batreaux's Theme - Skyward Sword",
    "Battle - Skyward Sword",
    "Bazzar - Skyward Sword",
    "Bilocyte Battle - Skyward Sword",
    "Bucha's Theme - Skyward Sword",
    "Channel Intro - Skyward Sword",
    "Chasing Fi - Skyward Sword",
    "Crimson Loftwing - Skyward Sword",
    "Dance of the Goddess - Skyward Sword",
    "Din's Power - Skyward Sword",
    "Din's Silent Realm - Skyward Sword",
    "Eldin Volcano - Skyward Sword",
    "Eternal Gratitude/ Fi's Theme - Skyward Sword",
    "Exploring the Skies - Skyward Sword",
    "Faron Woods - Skyward Sword",
    "Farore's Courage - Skyward Sword",
    "Farore's Silent Realm - Skyward Sword",
    "File Select - Skyward Sword",
    "Fire Sanctuary - Skyward Sword",
    "Floating Island - Skyward Sword",
    "Flooded Faron Woods - Skyward Sword",
    "Gaepora's Lament - Skyward Sword",
    "Ghirahim's Theme - Skyward Sword",
    "Goddess' Silent Realm - Skyward Sword",
    "Great Spirit Of The Skies, Levias - Skyward Sword",
    "Groose's Insolence - Skyward Sword",
    "Groose's Theme - Skyward Sword",
    "Grooseland - Skyward Sword",
    "Guardian Pursuit - Skyward Sword",
    "Inside a House - Skyward Sword",
    "Inside the Great Tree - Skyward Sword",
    "Knight Academy - Skyward Sword",
    "Koloktos ~ Moldarach Battle - Skyward Sword",
    "Lady Of The Sealed Grounds - Skyward Sword",
    "Lake Floria - Skyward Sword",
    "Lanayru Desert - Skyward Sword",
    "Lanayru Mining Facility - Skyward Sword",
    "Lanayru Sand Sea - Skyward Sword",
    "Leaping From The Clouds - Skyward Sword",
    "Link's Nightmare - Skyward Sword",
    "Loftwing Race - Skyward Sword",
    "Loftwing Training - Skyward Sword",
    "Magmanos - Skyward Sword",
    "Mogma Theme - Skyward Sword",
    "Nayru's Silent Realml - Skyward Sword",
    "Nayru's Wisdom - Skyward Sword",
    "Overture ~ Ballad of the Goddess - Skyward Sword",
    "Pirate Stronghold - Skyward Sword",
    "Pumpkin Harvest - Skyward Sword",
    "Romance in the Air - Skyward Sword",
    "Sandship (Exterior) - Skyward Sword",
    "Sandship (Interior) - Skyward Sword",
    "Sandship ~ Past - Skyward Sword",
    "Scaldera ~ Tentalus Battle - Skyward Sword",
    "Scervo ~ Dreadfuse Battle - Skyward Sword",
    "Scrapper's Theme - Skyward Sword",
    "Sealed Grounds - Skyward Sword",
    "Sealed Temple - Skyward Sword",
    "Sealing The Imprisoned - Skyward Sword",
    "Shipyard Minecart Ride - Skyward Sword",
    "Sky Keep - Skyward Sword",
    "Skyloft - Skyward Sword",
    "Skyview Temple - Skyward Sword",
    "Staff Roll Credits - Skyward Sword",
    "Stalfos ~ Stalmaster Battle - Skyward Sword",
    "Stealth (Eldin Volcano) - Skyward Sword",
    "Tadtone Hunt - Skyward Sword",
    "Temple of Hylia - Skyward Sword",
    "Temple Spring - Skyward Sword",
    "Tension - Skyward Sword",
    "The Demon King, Demise Battle ~Rising~ - Skyward Sword",
    "The Enchanted Earth Below - Skyward Sword",
    "The Hordes of Darkness - Skyward Sword",
    "The Isle of Songs - Skyward Sword",
    "The Lumpy Pumpkin - Skyward Sword",
    "The Pumpkin Song - Skyward Sword",
    "Theme of the Kikwis - Skyward Sword",
    "Volcano Summit - Skyward Sword",
    "Zelda's Lullaby - Skyward Sword",
    "Zelda's Theme - Skyward Sword",



    // SPIRIT TRACKS
    "Aboda Village - Spirit Tracks",
    "Anouki Village - Spirit Tracks",
    "Byrne - Spirit Tracks",
    "Byrne Awakes - Spirit Tracks",
    "Byrne Comes to the Rescue - Spirit Tracks",
    "Cragma, Lava Lord - Spirit Tracks",
    "Credits - Spirit Tracks",
    "Cursed Overworld - Spirit Tracks",
    "Dark Trains Appear - Spirit Tracks",
    "Dungeon Gauntlet - Spirit Tracks",
    "Facing The Demon Train - Spirit Tracks",
    "Fight Against Byrne - Spirit Tracks",
    "Fighting Cole and Malladus - Spirit Tracks",
    "Final Battle ~ Malladus - Spirit Tracks",
    "Final Battle ~ Protecting Zelda - Spirit Tracks",
    "Fire and Sand Temple - Spirit Tracks",
    "Fleeing by Demon Train - Spirit Tracks",
    "Forest, Snow and Ocean Temple - Spirit Tracks",
    "Fraaz, Master Of Icy Fire - Spirit Tracks",
    "Goron Village - Spirit Tracks",
    "Lost Woods - Spirit Tracks",
    "Mini Boss - Spirit Tracks",
    "Papuchia Village - Spirit Tracks",
    "Phytops, Barbed Menace - Spirit Tracks",
    "Sanctuary - Spirit Tracks",
    "Stagnox, Armored Colossus - Spirit Tracks",
    "Tank And Bomb Ship Attack - Spirit Tracks",
    "The Dark Realm - Spirit Tracks",
    "The Force Gem Awakens - Spirit Tracks",
    "Underwater - Spirit Tracks",



    // TEARS OF THE KINGDOM
    "3rd Trailer - Tears of the Kingdom",
    "Ancient Zora Waterworks - Tears of the Kingdom",
    "Battle: Field (Boss Bokoblin) - Tears of the Kingdom",
    "Battle: Temple - Tears of the Kingdom",
    "Colgera Battle - Tears of the Kingdom",
    "Construct Factory - Tears of the Kingdom",
    "Demon Dragon Battle - Tears of the Kingdom",
    "Demon King Ganondorf Battle - Tears of the Kingdom",
    "Demon King Ganondorf Battle (Second Form) - Tears of the Kingdom",
    "Depths - Tears of the Kingdom",
    "Depths Abandoned Mine - Tears of the Kingdom",
    "Diving - Tears of the Kingdom",
    "Diving (Depths) - Tears of the Kingdom",
    "Dragonhead Island - Tears of the Kingdom",
    "Encounter with Rauru, Source of the Right Arm - Tears of the Kingdom",
    "Encounter with Yona - Tears of the Kingdom",
    "Field (High Sky) - Tears of the Kingdom",
    "Fire Temple - Tears of the Kingdom",
    "Flux Construct Battle - Tears of the Kingdom",
    "Forgotten Foundation: Battle - Tears of the Kingdom",
    "Frox Battle - Tears of the Kingdom",
    "Gerudo Shelter - Tears of the Kingdom",
    "Gerudo Town (During the Phenomenon) - Tears of the Kingdom",
    "Gleeok Battle - Tears of the Kingdom",
    "Gloom Spawn Battle - Tears of the Kingdom",
    "Gloom's Lair - Tears of the Kingdom",
    "Goron City (During the Phenomenon) - Tears of the Kingdom",
    "Hateno Ancient Tech Lab - Tears of the Kingdom",
    "Hateno School - Tears of the Kingdom",
    "Hudson Construction Site (Day) - Tears of the Kingdom",
    "Hudson Construction Site (Night) - Tears of the Kingdom",
    "Investigation to the Clouds - Tears of the Kingdom",
    "Koltin - Tears of the Kingdom",
    "Korok Forest (During the Phenomenon) - Tears of the Kingdom",
    "Light Dragon - Tears of the Kingdom",
    "Lightning Temple - Tears of the Kingdom",
    "Lightroot - Tears of the Kingdom",
    "Link's House - Tears of the Kingdom",
    "Lomei Labyrinth (Depths Labyrinth) - Tears of the Kingdom",
    "Lomei Labyrinth (Top Floor) - Tears of the Kingdom",
    "Lookout Landing - Tears of the Kingdom",
    "Lookout Landing Shrouded in Dark Clouds - Tears of the Kingdom",
    "Lucky Clover Gazette - Tears of the Kingdom",
    "Lurelin Village Restoration Feast - Tears of the Kingdom",
    "Marbled Gohma Battle - Tears of the Kingdom",
    "Mineru, Sage of Spirit - Tears of the Kingdom",
    "Mini-Game (Ball Toss) - Tears of the Kingdom",
    "Mini-Game (Dive Ceremony) - Tears of the Kingdom",
    "Mini-Game (Mine-Cart Land) - Tears of the Kingdom",
    "Mini-Game (Yiga Clan Training) - Tears of the Kingdom",
    "Mipha Court - Tears of the Kingdom",
    "Moragia Battle - Tears of the Kingdom",
    "Mucktorok Battle - Tears of the Kingdom",
    "Oh, Link... I'm Home! - Tears of the Kingdom",
    "Opening - Tears of the Kingdom",
    "Phantom Ganon Battle - Tears of the Kingdom",
    "Prologue (First Half) - Tears of the Kingdom",
    "Purify the Sludge-Covered Statue - Tears of the Kingdom",
    "Queen Gibdo Battle - Tears of the Kingdom",
    "Rauru's Guidance - Tears of the Kingdom",
    "Reunion with Riju - Tears of the Kingdom",
    "Reunion with Sidon - Tears of the Kingdom",
    "Reunion with Tulin - Tears of the Kingdom",
    "Riju, Sage of Lightning - Tears of the Kingdom",
    "Rito Village (During the Phenomenon) - Tears of the Kingdom",
    "Rocky Area - Tears of the Kingdom",
    "Seized Construct Batte - Tears of the Kingdom",
    "Serenade to a Great Fairy - Tears of the Kingdom",
    "Shrine of Light - Tears of the Kingdom",
    "Shrine of Light: Battle - Tears of the Kingdom",
    "Shrine of Light: Before the Trial - Tears of the Kingdom",
    "Shrine of Light: Blessing - Tears of the Kingdom",
    "Sidon, Sage of Water - Tears of the Kingdom",
    "Sky Island - Tears of the Kingdom",
    "Sludge Like Battle - Tears of the Kingdom",
    "Spirit Temple - Tears of the Kingdom",
    "Tarrey Town (Night) - Tears of the Kingdom",
    "Temple of Time - Tears of the Kingdom",
    "The Cece Hat - Tears of the Kingdom",
    "The Demon King's Army - Tears of the Kingdom",
    "The Mayoral Election - Tears of the Kingdom",
    "The Return of Master Kohga: Battle - Tears of the Kingdom",
    "The World-Renowned Cece - Tears of the Kingdom",
    "Thunderhead Isles - Tears of the Kingdom",
    "To Her Hand - Tears of the Kingdom",
    "Tulin, Sage of Wind - Tears of the Kingdom",
    "Tulin's Bow Taken - Tears of the Kingdom",
    "Water Temple - Tears of the Kingdom",
    "Wind Temple - Tears of the Kingdom",
    "Yiga Clan Hideout - Tears of the Kingdom",
    "You Must Find Me - Tears of the Kingdom",
    "Yunobo (Clearly Not Himself) Battle - Tears of the Kingdom",
    "Yunobo, Sage of Fire - Tears of the Kingdom",
    "YunoboCo HQ - Tears of the Kingdom",
    "Zora's Domain (During the Phenomenon) - Tears of the Kingdom",



    // THE ADVENTURE OF LINK
    "Battle - The Adventure of Link",
    "Boss - The Adventure of Link",
    "Dark Link - The Adventure of Link",
    "Ending - The Adventure of Link",
    "Great Palace - The Adventure of Link",
    "Indoors - The Adventure of Link",
    "Overworld - The Adventure of Link",
    "Temple - The Adventure of Link",
    "Title - The Adventure of Link",
    "Village - The Adventure of Link",



    // THE LEGEND OF ZELDA
    "Death Mountain - The Legend of Zelda",
    "Dungeon - The Legend of Zelda",
    "Intro - The Legend of Zelda",
    "Overworld - The Legend of Zelda",



    // THE MINISH CAP
    "Boss - The Minish Cap",
    "Castor Wilds - The Minish Cap",
    "Cave - The Minish Cap",
    "Cave of Flames - The Minish Cap",
    "Cloud Tops - The Minish Cap",
    "Elemental Sanctuary - The Minish Cap",
    "Fairy Fountain - The Minish Cap",
    "File Select - The Minish Cap",
    "Hyrule Castle - The Minish Cap",
    "Hyrule Field - The Minish Cap",
    "Hyrule Town - The Minish Cap",
    "Inside a House - The Minish Cap",
    "Into the Skies - The Minish Cap",
    "Introduction - The Minish Cap",
    "Mini Boss - The Minish Cap",
    "Minish Village - The Minish Cap",
    "Minish Woods - The Minish Cap",
    "Mt. Crenel - The Minish Cap",
    "Palace of Winds - The Minish Cap",
    "Picori Festival - The Minish Cap",
    "Royal Crypt - The Minish Cap",
    "Royal Valley - The Minish Cap",
    "Temple of Droplets - The Minish Cap",
    "The Minish Cap - The Minish Cap",
    "Vaati Attacks - The Minish Cap",
    "Vaati Battle - The Minish Cap",
    "Vaati's Theme - The Minish Cap",
    "Vaati's Wrath - The Minish Cap",
    "Wind Ruins - The Minish Cap",



    // THE WIND WAKER
    "Aryll's Theme - The Wind Waker",
    "Battle - The Wind Waker",
    "Beedle's Shop - The Wind Waker",
    "Departure - The Wind Waker",
    "Dragon Roost Island - The Wind Waker",
    "Earth Temple - The Wind Waker",
    "Farewell Hyrule King - The Wind Waker",
    "Forest Haven - The Wind Waker",
    "Forsaken Fortress - The Wind Waker",
    "Ganon's Castle - The Wind Waker",
    "Ganondorf Battle - The Wind Waker",
    "Gohdan - The Wind Waker",
    "Gohma Battle First Half - The Wind Waker",
    "Gohma Battle Second Half - The Wind Waker",
    "Grandma's Theme - The Wind Waker",
    "Helmaroc King - The Wind Waker",
    "Hyrule Castle - The Wind Waker",
    "Jabun - The Wind Waker",
    "Jalhalla - The Wind Waker",
    "Kalle Demos - The Wind Waker",
    "Makar's Prayer ~ Wind God's Aria - The Wind Waker",
    "Maritime Battle - The Wind Waker",
    "Medli's Prayer ~ Earth God's Lyric - The Wind Waker",
    "Mini Boss - The Wind Waker",
    "Molgera Battle - The Wind Waker",
    "Outset Island - The Wind Waker",
    "Phantom Ganon - The Wind Waker",
    "Pirates - The Wind Waker",
    "Potion Shop - The Wind Waker",
    "Puppet Ganon - The Wind Waker",
    "Puppet Ganon (Snake) - The Wind Waker",
    "Puppet Ganon (Spider) - The Wind Waker",
    "The Deku Tree and Koroks - The Wind Waker",
    "The Fairy Queen - The Wind Waker",
    "The Great Sea - The Wind Waker",
    "The Great Sea is Cursed - The Wind Waker",
    "The Legendary Hero - The Wind Waker",
    "The Second Maritime Battle - The Wind Waker",
    "Title Theme - The Wind Waker",
    "To Hyrule - The Wind Waker",
    "Tower of the Gods - The Wind Waker",
    "Wind Temple - The Wind Waker",
    "Windfall Island - The Wind Waker",



    // THE WIND WAKER HD
    "File Select - The Wind Waker HD",
    "Forsaken Fortress - The Wind Waker HD",
    "Gohma Battle - The Wind Waker HD",
    "Grandma's Theme - The Wind Waker HD",
    "Molgera - The Wind Waker HD",
    "Outset Island - The Wind Waker HD",
    "Pirates - The Wind Waker HD",
    "Puppet Ganon - The Wind Waker HD",
    "Puppet Ganon (Snake) - The Wind Waker HD",
    "Puppet Ganon (Spider) - The Wind Waker HD",
    "Windfall Island - The Wind Waker HD",



    // TRI FORCE HEROES
    "Boss - Tri Force Heroes",
    "Coliseum - Tri Force Heroes",
    "Combat - Tri Force Heroes",
    "Combat Results - Tri Force Heroes",
    "Curse - Tri Force Heroes",
    "Daily Riches - Tri Force Heroes",
    "Dark Links Battle - Tri Force Heroes",
    "Den of Trials - Tri Force Heroes",
    "Dunes - Tri Force Heroes",
    "Fortress - Tri Force Heroes",
    "History of Hytopia - Tri Force Heroes",
    "Hytopia Castle - Tri Force Heroes",
    "Ice Cavern - Tri Force Heroes",
    "King Tuft - Tri Force Heroes",
    "Lady Maud's Theme - Tri Force Heroes",
    "Lady Maud Battle - Tri Force Heroes",
    "Mini Boss - Tri Force Heroes",
    "Miniboss: Hinox - Tri Force Heroes",
    "Riverside - Tri Force Heroes",
    "Ruins - Tri Force Heroes",
    "Sir Combsly - Tri Force Heroes",
    "Sky Realm - Tri Force Heroes",
    "Sky Temple - Tri Force Heroes",
    "Staff Roll Credits - Tri Force Heroes",
    "Stage Selection - Tri Force Heroes",
    "Tailor - Tri Force Heroes",
    "Title Screen - Tri Force Heroes",
    "Treasure Room - Tri Force Heroes",
    "Village - Tri Force Heroes",
    "Volcano - Tri Force Heroes",



    // TWILIGHT PRINCESS
    "Aeralfos - Twilight Princess",
    "Agitha's Castle - Twilight Princess",
    "Arbiter's Grounds - Twilight Princess",
    "Argorok Battle - Twilight Princess",
    "Armogohma Battle - Twilight Princess",
    "Battle - Twilight Princess",
    "Beast Ganon Battle - Twilight Princess",
    "Beast in the Village - Twilight Princess",
    "Blizzeta Battle - Twilight Princess",
    "Boss Defeated - Twilight Princess",
    "Canon Repair - Twilight Princess",
    "Cave - Twilight Princess",
    "City in the Sky - Twilight Princess",
    "Courage - Twilight Princess",
    "Dangoro Battle - Twilight Princess",
    "Darknut Battle - Twilight Princess",
    "Death Mountain - Twilight Princess",
    "Death Sword - Twilight Princess",
    "Diababa - Twilight Princess",
    "Enter the Darkness - Twilight Princess",
    "Falbi's House - Twilight Princess",
    "Faron Woods - Twilight Princess",
    "Fishing Hit! - Twilight Princess",
    "Forest Temple - Twilight Princess",
    "Fyer's Cannon - Twilight Princess",
    "Fyrus Battle - Twilight Princess",
    "Ganondorf Battle - Twilight Princess",
    "Gerudo Desert - Twilight Princess",
    "Goron Mines - Twilight Princess",
    "Graveyard - Twilight Princess",
    "Herd Game - Twilight Princess",
    "Hidden Skill Training - Twilight Princess",
    "Hidden Village - Twilight Princess",
    "Horse Battle - Twilight Princess",
    "Horseback Ganondorf Battle - Twilight Princess",
    "Hyrule Castle - Twilight Princess",
    "Hyrule Castle Tower - Twilight Princess",
    "Hyrule Castle Town - Twilight Princess",
    "Hyrule Field - Twilight Princess",
    "Illia's Theme - Twilight Princess",
    "Inside a House - Twilight Princess",
    "Kakariko is Saved - Twilight Princess",
    "Kakariko Village - Twilight Princess",
    "King Bulblin - Twilight Princess",
    "Lake Hylia - Twilight Princess",
    "Lamentation of the Spirits - Twilight Princess",
    "Light and Darkness - Twilight Princess",
    "Malo Mart - Twilight Princess",
    "Meet Illia - Twilight Princess",
    "Midna's Lament - Twilight Princess",
    "Midna's Theme - Twilight Princess",
    "Morpheel Battle - Twilight Princess",
    "Ooccoo's Theme - Twilight Princess",
    "Ook - Twilight Princess",
    "Opening - Twilight Princess",
    "Orchestra Piece #1 - Twilight Princess",
    "Orchestra Piece #2 - Twilight Princess",
    "Ordon Ranch - Twilight Princess",
    "Ordon Village - Twilight Princess",
    "Palace of Twilight - Twilight Princess",
    "Postman's Theme - Twilight Princess",
    "Prince Ralis is Saved - Twilight Princess",
    "Puppet Zelda - Twilight Princess",
    "Queen Rutela - Twilight Princess",
    "Rodeo Game - Twilight Princess",
    "Rollgoal - Twilight Princess",
    "Sacred Grove - Twilight Princess",
    "Sacrifice - Twilight Princess",
    "Sanctuary - Twilight Princess",
    "Shadow Insect - Twilight Princess",
    "Shop - Twilight Princess",
    "Sled Game - Twilight Princess",
    "Snowpeak - Twilight Princess",
    "Snowpeak Ruins - Twilight Princess",
    "Spirit's Lament - Twilight Princess",
    "Staff Credits - Twilight Princess",
    "Stallord Battle - Twilight Princess",
    "STAR Game - Twilight Princess",
    "Statue Game - Twilight Princess",
    "Sumo Game - Twilight Princess",
    "Temple of Time - Twilight Princess",
    "The Demon Thief - Twilight Princess",
    "The Sages - Twilight Princess",
    "Title Theme - Twilight Princess",
    "Twilight - Twilight Princess",
    "Twilight Realm - Twilight Princess",
    "Twilit Battle - Twilight Princess",
    "Twilit Cargo Game - Twilight Princess",
    "Ways of the Sword - Twilight Princess",
    "Zant Battle - Twilight Princess",
    "Zelda's Theme - Twilight Princess",
    "Zora's Domain - Twilight Princess",



    // EXTRA
    "Dale Zelda Dale - Extra"

  ];

    // Bug : Sometimes musics stops appearing in suggestions, it seems that musics dissapears at the end of the array
    // Adding empty string makes them unfindable and prevent this bug
  musicNameList = musicNameList.concat(
    new Array(musicNameList.length).fill("")
  );

  var musicListWithLinks = [
    // A LINK BETWEEN WORLDS
    { url: "https://soundcloud.com/vgmdr/the-bosses-of-hyrule", answer: "Boss Theme (Hyrule) - A Link Between Worlds" },
    { url: "https://soundcloud.com/badtomx3/death-mountain-the-legend-of-zelda-a-link-between-worlds-maka", answer: "Death Mountain - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/deeper-into-the-lost-woods-the-legend-of-zelda-a-link-between-worlds", answer: "Deeper into the Lost Woods - A Link Between Worlds" },
    { url: "https://soundcloud.com/potionxshop/desert-palace-the-legend-of", answer: "Desert Palace - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/fortune-teller", answer: "Fortune Teller - A Link Between Worlds" },
    { url: "https://soundcloud.com/kingslizz/hyrule-at-peace-the-legend-of-zelda-a-link-between-worlds", answer: "Hyrule at Peace - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/hyrule-hotfoot", answer: "Hyrule Hotfoot - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/irene-the-apprentice-witch-the-legend-of-zelda-a-link-between-worlds", answer: "Irene - A Link Between Worlds" },
    { url: "https://soundcloud.com/flavio514/lorule-castle", answer: "Lorule Castle - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-dr/meeting-princess-zelda", answer: "Meeting Princess Zelda - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/at-the-milk-bar-the-legend-of-zelda-a-link-between-worlds", answer: "Milk Bar - A Link Between Worlds" },
    { url: "https://soundcloud.com/nypt/mother-maiamai-a-link-between-world", answer: "Mother Maimai - A Link Between Worlds" },
    { url: "https://soundcloud.com/fellipe-camarossi/the-legend-of-zelda-a-link", answer: "Overworld (Hyrule) - A Link Between Worlds" },
    { url: "https://soundcloud.com/grumproast/lorule-field-the-legend-of-zelda-a-link-between-worlds", answer: "Overworld (Lorule) - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/restoring-queen-oren-the-legend-of-zelda-a-link-between-worlds", answer: "Queen Oren - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/ravios-shop", answer: "Ravio's Shop - A Link Between Worlds" },
    { url: "https://soundcloud.com/anderouspi/ravios-theme-the-legend-of", answer: "Ravio's Theme - A Link Between Worlds" },
    { url: "https://soundcloud.com/doktor-vgm/skull-woods-the-legend-of-zelda-a-link-between-worlds", answer: "Skull Woods - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/sneaking-into-the-dark-palace", answer: "Sneaking into the Dark Palace - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/credits-the-legend-of-zelda-a-link-between-worlds", answer: "Staff Roll Credits - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/the-dark-palace", answer: "The Dark Palace - A Link Between Worlds" },
    { url: "https://soundcloud.com/nypt/theives-hideout", answer: "Thieves Hideout - A Link Between Worlds" },
    { url: "https://soundcloud.com/doktor-vgm/title-screen-the-legend-of-zelda-a-link-between-worlds", answer: "Title Screen - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/treacherous-tower-the-legend-of-zelda-a-link-between-worlds", answer: "Treacherous Tower - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/a-trip-to-turtle-rock", answer: "Turtle Rock - A Link Between Worlds" },
    { url: "https://soundcloud.com/user-169938188/yuga-battle-the-legend-of-zelda-a-link-between-worlds", answer: "Yuga Battle - A Link Between Worlds" },
    { url: "https://soundcloud.com/vgm-research/yugas-ballad-sanctuary-drama-yugas-theme-in-eastern-palace", answer: "Yuga's Ballad - A Link Between Worlds" },



    //A LINK TO THE PAST
    { url: "https://soundcloud.com/zelda-soundtracks/gba-a-link-to-the-past-battle-with-ganon", answer: "Battle with Ganon - A Link to the Past" },
    { url: "https://soundcloud.com/anderouspi/dank-dungeons-the-legend-of", answer: "Dank Dungeons - A Link to the Past" },
    { url: "https://soundcloud.com/ost-for-your-soul-tumblr/the-legend-of-zelda-a-link-to-the-past-dark-world", answer: "Dark World - A Link to the Past" },
    { url: "https://soundcloud.com/zhtotk2/black-mist", answer: "Death Mountain - A Link to the Past" },
    { url: "https://soundcloud.com/bonniedabunny-19719156/beautiful-hyrule-epilogue-the", answer: "Epilogue ~ Beautiful Hyrule - A Link to the Past" },
    { url: "https://soundcloud.com/zhtotk2/beginning-of-the-journey", answer: "File Select - A Link to the Past" },
    { url: "https://soundcloud.com/anderouspi/hyrule-castle-the-legend-of-1", answer: "Hyrule Castle - A Link to the Past" },
    { url: "https://soundcloud.com/anderouspi/princess-zeldas-rescue-the", answer: "Princess Zelda's Rescue - A Link to the Past" },
    { url: "https://soundcloud.com/user-319531457/the-legend-of-zelda-a-link-to?si=0b0c9b0d1150448e9b468b2a3b9d76ca&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Sanctuary Dungeon - A Link to the Past" },
    { url: "https://soundcloud.com/zelda-soundtracks/gba-a-link-to-the-past-seal-of-seven-maidens", answer: "Seal of the Seven Maidens - A Link to the Past" },



    //BREATH OF THE WILD
    { url: "https://soundcloud.com/infiniteshadow-nintendo/a-kings-request", answer: "A King's Request - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/abandoned-north-mine", answer: "Abandoned North Mine - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/akkala-ancient-tech-lab", answer: "Akkala Ancient Tech Lab - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/vah-medoh-battle", answer: "Attack on Vah Medoh - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/vah-naboris-battle", answer: "Attack on Vah Naboris - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/vah-rudania-battle", answer: "Attack on Vah Rudania - Breath of the Wild" },
    { url: "https://soundcloud.com/user-736704402/attack-on-vah-ruta-zelda-breath-of-the-wild-soundtrack", answer: "Attack on Vah Ruta - Breath of the Wild" },
    { url: "https://soundcloud.com/user-460195848/beast-ganon-battle-phase-1-the-legend-of-zelda-breath-of-the-wild-ost", answer: "Beast Ganon (Phase 1) - Breath of the Wild" },
    { url: "https://soundcloud.com/user-460195848/beast-ganon-battle-phase-2-the-legend-of-zelda-breath-of-the-wild-ost", answer: "Beast Ganon (Phase 2) - Breath of the Wild" },
    { url: "https://soundcloud.com/user-460195848/beast-ganon-battle-phase-3-the-legend-of-zelda-breath-of-the-wild-ost", answer: "Beast Ganon (Phase 3) - Breath of the Wild" },
    { url: "https://soundcloud.com/jazzinso/all-blight-ganon-themes", answer: "Blight Ganon - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/heart-container-appearance", answer: "Boss Defeated (Cutscene) - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/calamity-ganon-battle-phase-1", answer: "Calamity Ganon (Phase 1) - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/calamity-ganon-battle-phase-2", answer: "Calamity Ganon (Phase 2) - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/cave", answer: "Cave - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/death-mountain", answer: "Death Mountain - Breath of the Wild" },
    { url: "https://soundcloud.com/divine-beast-vah-medoh/aboard-divine-beast-vah-1", answer: "Divine Beast Vah Medoh - Breath of the Wild" },
    { url: "https://soundcloud.com/divine-beast-vah-naboris/aboard-divine-beast-vah-1", answer: "Divine Beast Vah Naboris - Breath of the Wild" },
    { url: "https://soundcloud.com/divine-beast-vah-rudania/aboard-divine-beast-vah-1", answer: "Divine Beast Vah Rudania - Breath of the Wild" },
    { url: "https://soundcloud.com/vah-ruta-posting/aboard-divine-beast-vah-ruta-11", answer: "Divine Beast Vah Ruta - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/the-dragons-of-hyrule", answer: "Dragon - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/battle-divine-beast", answer: "Dungeon Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/battle-field-original", answer: "Field Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/flight-spot-trial", answer: "Flight Spot Trial - Breath of the Wild" },
    { url: "https://soundcloud.com/lavenderclub/gerudo-canyon", answer: "Gerudo Canyon - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendo-infinite3/champion-urbosas-song", answer: "Gerudo Champion Urbosa's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/che3erios/22-gerudo-town-day", answer: "Gerudo Town (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/che3erios/23-gerudo-town-night", answer: "Gerudo Town (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/master-sword", answer: "Get Master Sword - Breath of the Wild" },
    { url: "https://soundcloud.com/robert-dg/daruks-theme-the-legend-of", answer: "Goron Champion Daruk's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/goron-city-day", answer: "Goron City (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/che3erios/19-goron-city-night", answer: "Goron City (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/great-fairy-fountain", answer: "Great Fairy Fountain - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/guardian-battle", answer: "Guardian Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/hateno-ancient-tech-lab", answer: "Hateno Ancient Tech Lab - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/hateno-village-day", answer: "Hateno Village (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/hateno-village-night", answer: "Hateno Village (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/goron-challenge-minigame", answer: "Heat Test Minigame - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/hinox-battle", answer: "Hinox Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/horse-god-malanyas-theme", answer: "Horse God Malanya's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/house", answer: "House - Breath of the Wild" },
    { url: "https://soundcloud.com/agent_m12/hunting-minigame-breath-of-the-wild-zelda", answer: "Hunting Minigame - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/hyrule-castle", answer: "Hyrule Castle - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/hyrule-castle-town-ruins", answer: "Hyrule Castle Town - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/hyrule-field-day", answer: "Hyrule Field (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/hyrule-field-night", answer: "Hyrule Field (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/impas-theme", answer: "Impa's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/kakariko-village-day", answer: "Kakariko Village (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/che3erios/15-kakariko-village-night", answer: "Kakariko Village (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/kara-kara-bazaar", answer: "Kara Kara Bazaar - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/kasss-theme", answer: "Kass's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/alvaro-iradi-de-andres/kiltons-shop-zelda-breath-of-the-wild", answer: "Kilton's Monster Shop - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/korok-forest-day", answer: "Korok Forest (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadowx99998/korok-forest-night", answer: "Korok Forest (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/zelda-soundtracks/switch-breath-of-the-wild", answer: "Lurelin Village (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/lurelin-village-night", answer: "Lurelin Village (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/vgm-vaccine/battle-lynelyiga-3-variations-the-legend-of-zelda-breath-of-the-wild", answer: "Lynel / Yiga Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/unofficialkernal/the-legend-of-zelda-breath-of-the-wild-ost-main-theme-e3-2016-trailer-no-sound-effects", answer: "Main Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/fish-leggington/master-kohga-battle-the-legend-of-zelda-breath-of-the-wild-ost", answer: "Master Kohga Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/kohgas-theme", answer: "Master Kohga's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/maze-forest-lost-woods", answer: "Maze Forest (Lost Woods) - Breath of the Wild" },
    { url: "https://soundcloud.com/hiraganamusic/sandworm-battle-phase-1-breath", answer: "Molduga Battle (Phase 1) - Breath of the Wild" },
    { url: "https://soundcloud.com/hiraganamusic/molduga-phase-2-breath-of-the-wild-zelda", answer: "Molduga Battle (Phase 2) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/mountain", answer: "Mountain - Breath of the Wild" },
    { url: "https://soundcloud.com/user-239475365/omen-of-the-bloody-moon-the", answer: "Omen of the Bloody Moon - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendo-infinite3/parasail-minigame", answer: "Parasailing Minigame - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/sidons-theme", answer: "Prince Sidon's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/riding-day", answer: "Riding Horse (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/riding-horse-night", answer: "Riding Horse (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendo-infinite3/champion-revalis-song", answer: "Rito Champion Revali's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/luigi52002/rito-village-day", answer: "Rito Village (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/mega-diglett/rito-village-night-the-legend", answer: "Rito Village (Night) - Breath of the Wild" },
    { url: "https://soundcloud.com/user-86382627/sheikah-tower-the-legend-of-zelda-breath-of-the-wild-soundtrack", answer: "Sheikah Tower - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/race-minigame", answer: "Shieldsurfing Minigame - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/battle-shrine-original", answer: "Shrine Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/shrine", answer: "Shrine Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/infiniteshadow-nintendo/field-snow", answer: "Snow - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/stables", answer: "Stables - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/stationary-guardian-battle", answer: "Stationary Guardian Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/talus-battle", answer: "Talus Battle - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/tarrey-town-beginning", answer: "Tarrey Town - Breath of the Wild" },
    { url: "https://soundcloud.com/creide13/temple-of-time", answer: "Temple of Time - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/the-divine-beasts-strike", answer: "The Divine Beasts Strike - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendomusic-infinite/field-volcano", answer: "Volcano - Breath of the Wild" },
    { url: "https://soundcloud.com/agent_m12/water-side-breath-of-the-wild-zelda", answer: "Water Side - Breath of the Wild" },
    { url: "https://soundcloud.com/kaiandzero/assassins-base-breath-of-the", answer: "Yiga Assassin Base - Breath of the Wild" },
    { url: "https://soundcloud.com/nintendo-infinite3/champion-miphas-song", answer: "Zora Champion Mipha's Theme - Breath of the Wild" },
    { url: "https://soundcloud.com/che3erios/20-zoras-domain-day", answer: "Zora's Domain (Day) - Breath of the Wild" },
    { url: "https://soundcloud.com/silver565/the-legend-of-zelda-breath-of-the-wild-zoras-domain-night", answer: "Zora's Domain (Night) - Breath of the Wild" },



    //FOUR SWORDS
    { url: "https://soundcloud.com/quack-vgm/the-legend-of-zelda-four-swords-anniversary-edition", answer: "Boss Battle - Four Swords" },
    { url: "https://soundcloud.com/quack-vgm/four-swords-mashup-chamber-of-insight-the-legend-of-zelda", answer: "Chamber of Insight - Four Swords" },
    { url: "https://soundcloud.com/quack-vgm/the-legend-of-zelda-four-swords-anniversary-edition-1", answer: "Monster Battle - Four Swords" },
    { url: "https://soundcloud.com/doktor-vgm/prologue-the-legend-of-zelda-four-swords-anniversary-edition", answer: "Prologue - Four Swords" },
    { url: "https://soundcloud.com/user-750893959/zelda-four-swords-gba-ost-sea", answer: "Sea of Trees - Four Swords" },
    { url: "https://soundcloud.com/doktor-vgm/talus-cave-the-legend-of-zelda-four-swords-anniversary-edition", answer: "Talus Cave - Four Swords" },
    { url: "https://soundcloud.com/ct-356374179/the-legend-of-zelda-four-swords-anniversary-edition-title-theme", answer: "Title Theme - Four Swords" },
    { url: "https://soundcloud.com/doktor-vgm/talus-cave-the-legend-of-zelda", answer: "Vaati's Palace - Four Swords" },



    //FOUR SWORDS ADVENTURES
    { url: "https://soundcloud.com/doktor-vgm/boss-battle-bgm", answer: "Boss Battle - Four Swords Adventures" },
    { url: "https://soundcloud.com/medical-vgm/58-the-four-swords-ngc-field", answer: "Field - Four Swords Adventures" },
    { url: "https://soundcloud.com/leon-videla-roth/frozen-field-the-legend-of?si=a4269b24f0df46348cd43c551be6ce85&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Frozen Hyrule - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgmdoc/ganon-battle-bgm", answer: "Ganon - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgmdr/dampes-cabin-the-legend-of-zelda-four-swords-adventures", answer: "House (Dark) - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgmdr/inside-a-house-the-legend-of-zelda-four-swords-adventures", answer: "Inside a House - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgmdr/map-the-legend-of-zelda-four-swords-adventures", answer: "Map - Four Swords Adventures" },
    { url: "https://soundcloud.com/doktor-vgm/mini-boss-battle-bgm-the-legend-of-zelda-four-swords-adventures", answer: "Minor Battle - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgmdr/plain-time-of-falling-rain-the-legend-of-zelda-four-swords-adventures", answer: "Plains - Four Swords Adventures" },
    { url: "https://soundcloud.com/medical-vgm/staff-roll-the-legend-of-zelda-four-swords-adventures?si=64f78ae1a07f427abe6c70cf47c02b4b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Staff Roll Credits - Four Swords Adventures" },
    { url: "https://soundcloud.com/grant-william-hanna/26-the-swamp-the-legend-of-zelda-four-swords-adventures-ost?si=ffef59e39b9a40489bbe08d51e2d41af&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "The Swamp - Four Swords Adventures" },
    { url: "https://soundcloud.com/doktor-vgm/tingles-tower-bgm-the-legend-of-zelda-four-swords-adventures?si=36cdb2d98497401ea1ae7f1c851fb891&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Tingle's Theme - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgm-dr/title-the-legend-of-zelda-four-swords-adventures", answer: "Title Theme - Four Swords Adventures" },
    { url: "https://soundcloud.com/vgm-research/tower-of-flames-bgm", answer: "Tower of Flames - Four Swords Adventures" },
    { url: "https://soundcloud.com/doktor-vgm/village-of-blue-maiden-before-the-puzzle-solving-the-legend-of-zelda-four-swords-adventures?si=3cc975abf7f14e949890fe9e9dfd205c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Village of the Blue Maiden - Four Swords Adventures" },



    // LINK'S AWAKENING (2019)
    { url: "https://soundcloud.com/kevhann/animal-village", answer: "Animal Village - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-tv", answer: "Ballad of the Wind Fish (Commercial) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-1", answer: "Ballad of the Wind Fish (Instruments) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-marins", answer: "Ballad of the Wind Fish (Marin) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-shore", answer: "Ballad of the Wind Fish (Shore) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/boss-battle", answer: "Boss Battle - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/cave", answer: "Cave - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/chamber-dungeon-edit-mode", answer: "Chamber Dungeon (Edit Mode) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/christines-house", answer: "Christine's House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/color-dungeon", answer: "Color Dungeon - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/cucco-house", answer: "Cucco House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/damp-s-house", answer: "Dampe's House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/dream-shrine", answer: "Dream Shrine - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/fairy-fountain", answer: "Fairy Fountain - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/field-normal", answer: "Field - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/name-entry", answer: "File Select - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/fishing-game", answer: "Fishing Game - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/the-frogs-song-of-soul", answer: "Frog's Song of Soul - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/game-over", answer: "Game Over - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/guardian-acorn", answer: "Guardian Acorn - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/house-by-the-cove", answer: "House by the Cove - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/inside-a-house", answer: "Inside a House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/dungeon-kanalet-castle", answer: "Kanalet Castle - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-1-tail-cave-1", answer: "Level 1: Tail Cave - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-2-bottle-grotto-2", answer: "Level 2: Bottle Grotto - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-3-key-cavern-3", answer: "Level 3: Key Cavern - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-4-anglers-tunnel-4", answer: "Level 4: Angler's Tunnel - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-5-catfishs-maw-5", answer: "Level 5: Catfish's Maw - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-6-face-shrine-6", answer: "Level 6: Face Shrine - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-7-eagles-tower-7", answer: "Level 7: Eagle's Tower - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/level-8-turtle-rock-8", answer: "Level 8: Turtle Rock - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/mabe-village", answer: "Mabe Village - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/manbos-mambo", answer: "Manbo's Mambo - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/mini-boss-battle", answer: "Mini Boss Battle - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/mr-writes-house-dr", answer: "Mr. Write's House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/mysterious-forest", answer: "Mysterious Forest - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/owl", answer: "Owl - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/passage", answer: "Passage - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/rapids-ride", answer: "Rapids Ride - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/rapids-ride-time-attack", answer: "Rapids Ride (Time Attack) - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/rescue-bowwow-mission", answer: "Rescue BowWow - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/richards-villa", answer: "Richard's Villa - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/seashell-mansion", answer: "Seashell Mansion - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/shadow-battle-final-form", answer: "Shadow Battle - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/shop-items-witch", answer: "Shop - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/southern-face-shrine", answer: "Southern Face Shrine - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/noah-foreman-926095843/tal-tal-heights-the-legend-of-zelda-links-awakening", answer: "Tal Tal Heights - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/telephone-booth", answer: "Telephone Booth - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/title-opening-version-opening", answer: "Title - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/trendy-game", answer: "Trendy Game - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/turtle-rock-battle", answer: "Turtle Rock Battle - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/waking-up-at-tarins-house", answer: "Waking Up At Tarin's House - Link's Awakening (2019)" },
    { url: "https://soundcloud.com/kevhann/wind-fishs-egg", answer: "Wind Fish's Egg - Link's Awakening (2019)" },



    // LINK'S AWAKENING DX
    { url: "https://soundcloud.com/kevhann/animal-village-2", answer: "Animal Village - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-5", answer: "Ballad of the Wind Fish (Instruments) - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/ballad-of-the-wind-fish-7", answer: "Ballad of the Wind Fish (Shore) - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/boss-battle-4", answer: "Boss Battle - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/cave-2", answer: "Cave - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/christines-house-2", answer: "Christine's House - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/color-dungeon-1", answer: "Color Dungeon - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/cucco-house-1", answer: "Cucco House - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/dream-shrine-2", answer: "Dream Shrine - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/fairy-spring-1", answer: "Fairy Fountain - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/field-normal-2", answer: "Field - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/name-entry-2", answer: "File Select - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/the-frogs-song-of-soul-2", answer: "Frog's Song of Soul - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/game-over-1", answer: "Game Over - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/guardian-acorn-2", answer: "Guardian Acorn - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/house-by-the-cove-2", answer: "House by the Cove - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/inside-a-house-2", answer: "Inside a House - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/dungeon-kanalet-castle-2", answer: "Kanalet Castle - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-1-tail-cave-1-2", answer: "Level 1: Tail Cave - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-2-bottle-grotto-2-2", answer: "Level 2: Bottle Grotto - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-3-key-cave-3-1", answer: "Level 3: Key Cavern - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-4-anglers-tunnel-4-2", answer: "Level 4: Angler's Tunnel - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-5-catfishs-maw-5-2", answer: "Level 5: Catfish's Maw - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-6-face-shrine-6-1", answer: "Level 6: Face Shrine - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-7-eagles-tower-7-1", answer: "Level 7: Eagle's Tower - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/level-8-turtle-rock-8-1", answer: "Level 8: Turtle Rock - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/mabe-village-2", answer: "Mabe Village - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/manbos-mambo-2", answer: "Manbo's Mambo - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/mini-boss-battle-2", answer: "Mini Boss Battle - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/mr-writes-house-dr-2", answer: "Mr. Write's House - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/mysterious-forest-2", answer: "Mysterious Forest - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/owl-2", answer: "Owl - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/passage-2", answer: "Passage - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/rapids-ride-1", answer: "Rapids Ride - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/rescue-bow-wow-mission", answer: "Rescue BowWow - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/richards-villa-2", answer: "Richard's Villa - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/shadows-appear-battle-1", answer: "Shadow Battle - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/shipwreck-1", answer: "Shipwreck - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/shop-items-witch-2", answer: "Shop - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/southern-face-shrine-1", answer: "Southern Face Shrine - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/tal-tal-heights-3", answer: "Tal Tal Heights - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/telephone-booth-2", answer: "Telephone Booth - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/title-opening-version-2", answer: "Title - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/game-shop-1", answer: "Trendy Game - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/turtle-rock-battle-1", answer: "Turtle Rock Battle - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/waking-up-at-talins-house", answer: "Waking Up At Tarin's House - Link's Awakening DX" },
    { url: "https://soundcloud.com/kevhann/wind-fishs-egg-1", answer: "Wind Fish's Egg - Link's Awakening DX" },


    
    // MAJORA'S MASK
    { url: "https://soundcloud.com/code-masterv/25-astral-observatory", answer: "Astral Observatory - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/36-battle", answer: "Battle - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/44-boat-cruise", answer: "Boat Cruise - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/boss-battle-1", answer: "Boss Battle - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/03-chase", answer: "Chase - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/06-clock-tower", answer: "Clock Tower - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/08-clock-town-first-day", answer: "Clock Town, First Day - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/13-clock-town-second-day", answer: "Clock Town, Second Day - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/19-clock-town-third-day", answer: "Clock Town, Third Day - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/cremias-wagon", answer: "Cremia's Wagon - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/45-deku-palace", answer: "Deku Palace - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/get-elegy-of-emptiness", answer: "Elegy of Emptiness - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/final-hours", answer: "Final Hours - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/54-giants-theme", answer: "Giants' Theme - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/goron-race", answer: "Goron Race - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/great-bay-coast", answer: "Great Bay Coast - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/great-bay-temple", answer: "Great Bay Temple - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/07-happy-mask-salesmans-theme", answer: "Happy Mask Salesman's Theme - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/15-kamaros-dance", answer: "Kamaro's Dance - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/20-keatons-quiz", answer: "Keaton's Quiz - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/majoras-incarnation-battle", answer: "Majora's Incarnation Battle - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/majoras-mask-battle", answer: "Majora's Mask Battle - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/05-majoras-theme", answer: "Majora's Theme - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/majoras-wrath-battle", answer: "Majora's Wrath Battle - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/10-mayors-meeting", answer: "Mayor's Meeting - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/11-milk-bar", answer: "Milk Bar - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/music-box-house", answer: "Music Box House - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/new-wave-bossa-nova-with-lulu", answer: "New Wave Bossa Nova - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/56-oath-to-order", answer: "Oath To Order - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/pirate-fortress", answer: "Pirate Fortress - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/47-sonata-of-awakening", answer: "Sonata Of Awakening - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/29-song-of-healing", answer: "Song Of Healing - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/41-southern-swamp", answer: "Southern Swamp - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/staff-roll-1", answer: "Staff Roll Credits - Majora's Mask" },
    { url: "https://soundcloud.com/tas-runs/stone-tower-temple-reality", answer: "Stone Tower Temple - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/17-swordsmans-school", answer: "Swordsman's School - Majora's Mask" },
    { url: "https://soundcloud.com/code-masterv/01-title-theme", answer: "Title Theme - Majora's Mask" },



    // OCARINA OF TIME
    { url: "https://soundcloud.com/moi666007/battle", answer: "Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/bolero-of-fire", answer: "Bolero of fire - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/boss-battle", answer: "Boss Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/deku-tree", answer: "Deku Tree - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/dodongo-battle", answer: "Dodongo Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/dodongos-cavern", answer: "Dodongo's Cavern - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/escape-from-ganons-castle", answer: "Escape From Ganon's Castle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/final-battle", answer: "Final Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/forest-temple", answer: "Forest Temple - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ganons-castle-bridge", answer: "Ganon's Castle Bridge - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ganons-tower", answer: "Ganon's Tower - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ganondorf", answer: "Ganondorf - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ganondorf-battle", answer: "Ganondorf Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/gerudo-valley", answer: "Gerudo Valley - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/goron-city", answer: "Goron City - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/great-fairys-fountain", answer: "Great Fairy's Fountain - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/horse-race", answer: "Horse race - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/hyrule-castle-courtyard", answer: "Hyrule Castle Courtyard - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/hyrule-field", answer: "Hyrule Field - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ice-cavern", answer: "Ice Cavern - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/ingo", answer: "Ingo - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/inside-a-house", answer: "Inside a House - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/inside-lord-jabu-jabu", answer: "Inside Lord Jabu Jabu - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/inside-the-great-deku-tree", answer: "Inside the Great Deku Tree - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/kaepora-gaebora", answer: "Kaepora Gaebora - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/kakariko-village", answer: "Kakariko Village - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/kokiri-forest", answer: "Kokiri Forest - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/koume-and-kotake", answer: "Koume and Kotake - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/legend-of-hyrule", answer: "Legend of Hyrule - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/lon-lon-ranch", answer: "Lon Lon Ranch - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/lost-woods", answer: "Lost Woods - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/market", answer: "Market - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/middle-boss-battle", answer: "Middle Boss Battle - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/mini-game", answer: "Mini Game - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/minuet-of-the-forest", answer: "Minuet of the Forest - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/navi-the-fairy", answer: "Navi the fairy - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/nocturne-of-shadow", answer: "Nocturne of Shadow - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/potion-shop", answer: "Potion Shop - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/prelude-of-light", answer: "Prelude of Light - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/princess-zelda", answer: "Princess Zelda - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/requiem-of-spirit", answer: "Requiem of Spirit - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/serenade-of-water", answer: "Serenade of Water - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/shadow-temple", answer: "Shadow Temple - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/sheik", answer: "Sheik - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/shooting-gallery", answer: "Shooting Gallery - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/shop", answer: "Shop - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/spirit-temple", answer: "Spirit Temple - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/staff-roll-credits", answer: "Staff Roll Credits - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/temple-of-time", answer: "Temple of Time - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/water-temple", answer: "Water Temple - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/windmill-hut", answer: "Windmill Hut - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/you-got-a-spirtual-stone", answer: "You Got a Spirtual Stone ! - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/zelda", answer: "Zelda - Ocarina of Time" },
    { url: "https://soundcloud.com/moi666007/zoras-domain", answer: "Zora's Domain - Ocarina of Time" },



    // PHANTOM HOURGLASS
    { url: "https://soundcloud.com/vgm-dr/astras-theme", answer: "Astrid's Theme - Phantom Hourglass" },
    { url: "https://soundcloud.com/user-51173154/bellum-battle", answer: "Bellum Battle - Phantom Hourglass" },
    { url: "https://soundcloud.com/vgmdr/dark-king-ganon-the-storytellers-memories-the-legend-of-zelda-phantom-hourglass", answer: "Dark King Ganon - Phantom Hourglass" },
    { url: "https://soundcloud.com/vgmdr/goron-house", answer: "Goron House - Phantom Hourglass" },
    { url: "https://soundcloud.com/vgmb/phantom-hourglass-linebecks-theme", answer: "Linebeck's Theme - Phantom Hourglass" },
    { url: "https://soundcloud.com/zhtotk2/phantoms-in-pursuit", answer: "Phantom in Pursuit - Phantom Hourglass" },
    { url: "https://soundcloud.com/zhtotk2/phantom-linebeck-battle", answer: "Phantom Linebeck Battle - Phantom Hourglass" },
    { url: "https://soundcloud.com/vgm-dr/introduction-the-storytellers-memories", answer: "Prologue: Tetra and Her Handsome Pirates - Phantom Hourglass" },
    { url: "https://soundcloud.com/vgm-dr/the-king-of-the-oceans-the-legend-of-zelda-phantom-hourglass", answer: "The King of the Oceans - Phantom Hourglass" },
    { url: "https://soundcloud.com/zhtotk2/time-stopped", answer: "Time Stopped - Phantom Hourglass" },



    // SKYWARD SWORD
    { url: "https://soundcloud.com/sunniea-416990841/demon-lord-ghirahim-first-battle", answer: "Demon Lord, Ghirahim First Battle - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/a-sudden-crashlanding", answer: "A Sudden Crashlanding - Skyward Sword" },
    { url: "https://soundcloud.com/jorge-guerra-55/ancient-cistern", answer: "Ancient Cistern - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/theme-of-skyward-sword-ballad-of-the-goddess", answer: "Ballad of the Goddess - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/ballad-of-the-goddess-zelda-solo", answer: "Ballad of the Goddess ~ Zelda Solo - Skyward Sword" },
    { url: "https://soundcloud.com/narenfda/bamboo-island", answer: "Bamboo Island - Skyward Sword" },
    { url: "https://soundcloud.com/doktor-vgm/batreauxs-theme-good-the-legend-of-zelda-skyward-sword", answer: "Batreaux's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/battle", answer: "Battle - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/skyloft-bazaar-medley", answer: "Bazzar - Skyward Sword" },
    { url: "https://soundcloud.com/nypt/bilocyte-skyward-sword", answer: "Bilocyte Battle - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/buchas-theme-theme-of-the-kikwis", answer: "Bucha's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/channel-intro", answer: "Channel Intro - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/chasing-fi", answer: "Chasing Fi - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/crimson-loftwing", answer: "Crimson Loftwing - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/dance-of-the-goddess", answer: "Dance of the Goddess - Skyward Sword" },
    { url: "https://soundcloud.com/sapphirehrt/dins-power", answer: "Din's Power - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/loz-skyward-sword-din", answer: "Din's Silent Realm - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/eldin-volcano", answer: "Eldin Volcano - Skyward Sword" },
    { url: "https://soundcloud.com/atalli/eternal-gratitude-fis-theme", answer: "Eternal Gratitude/ Fi's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/exploring-the-skies-overworld", answer: "Exploring the Skies - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/faron-woods", answer: "Faron Woods - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/farores-courage", answer: "Farore's Courage - Skyward Sword" },
    { url: "https://soundcloud.com/dreadlock-cat/farores-silent-realm-skyward-sword", answer: "Farore's Silent Realm - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/file-select-great-fairys-fountain", answer: "File Select - Skyward Sword" },
    { url: "https://soundcloud.com/saverzavis/fire-sanctuary-the-legend-of-zelda-skyward-sword-ost", answer: "Fire Sanctuary - Skyward Sword" },
    { url: "https://soundcloud.com/zolverein-adler/island-in-the-sky-the-legend", answer: "Floating Island - Skyward Sword" },
    { url: "https://soundcloud.com/lucas-granberg-electrikestudios/faron-woods-flooded", answer: "Flooded Faron Woods - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/links-nightmare-voice-of-fi", answer: "Gaepora's Lament - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/ghirahims-theme", answer: "Ghirahim's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/goddesss-silent-realm", answer: "Goddess' Silent Realm - Skyward Sword" },
    { url: "https://soundcloud.com/therealwhiteranger1/great-spirit-of-the-skies-levias-battle", answer: "Great Spirit Of The Skies, Levias - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/grooses-insolence", answer: "Groose's Insolence - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/grooses-theme", answer: "Groose's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/grooseland-grosses-daze", answer: "Grooseland - Skyward Sword" },
    { url: "https://soundcloud.com/oscar-caccavallo/guardian-pursuit", answer: "Guardian Pursuit - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/inside-a-house", answer: "Inside a House - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/inside-the-great-tree", answer: "Inside the Great Tree - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/knights-academy", answer: "Knight Academy - Skyward Sword" },
    { url: "https://soundcloud.com/hhill505/zelda-skyward-sword-music-3", answer: "Koloktos ~ Moldarach Battle - Skyward Sword" },
    { url: "https://soundcloud.com/vgm-research/lady-of-the-sealed-grounds", answer: "Lady Of The Sealed Grounds - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/lake-floria", answer: "Lake Floria - Skyward Sword" },
    { url: "https://soundcloud.com/snowpeak/lanayru-desert-skyward-sword", answer: "Lanayru Desert - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/lanayru-mining-facility", answer: "Lanayru Mining Facility - Skyward Sword" },
    { url: "https://soundcloud.com/heytherejc/zelda-skyward-sword-music", answer: "Lanayru Sand Sea - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/leaping-from-the-clouds", answer: "Leaping From The Clouds - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/links-nightmare-premonition", answer: "Link's Nightmare - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/loftwing-race", answer: "Loftwing Race - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/loftwing-training", answer: "Loftwing Training - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/mini-boss-battle-2-lizalfos-magmanos-moldorm", answer: "Magmanos - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/ledd-cobals-theme-theme-of-the-mogmas", answer: "Mogma Theme - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/loz-skyward-sword-nayrus-silent-realm", answer: "Nayru's Silent Realml - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/loz-skyward-sword-nayrus-wisdom", answer: "Nayru's Wisdom - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/overture-ballad-of-the-goddess", answer: "Overture ~ Ballad of the Goddess - Skyward Sword" },
    { url: "https://soundcloud.com/therealwhiteranger1/pirate-stronghold", answer: "Pirate Stronghold - Skyward Sword" },
    { url: "https://soundcloud.com/morgan-fleisch/pumpkin-harvest", answer: "Pumpkin Harvest - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/zeldas-theme-romance", answer: "Romance in the Air - Skyward Sword" },
    { url: "https://soundcloud.com/zhtotk2/sandship-exterior", answer: "Sandship (Exterior) - Skyward Sword" },
    { url: "https://soundcloud.com/gvalidd/inside-the-sandship", answer: "Sandship (Interior) - Skyward Sword" },
    { url: "https://soundcloud.com/gvalidd/sandship", answer: "Sandship ~ Past - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/pyroclastic-fiend-scaldera-abyss-leviathan-tentalus-battle", answer: "Scaldera ~ Tentalus Battle - Skyward Sword" },
    { url: "https://soundcloud.com/extrapolation/ld-002g-scervo-the-legend-of-zelda-skyward-sword", answer: "Scervo ~ Dreadfuse Battle - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/scrappers-theme", answer: "Scrapper's Theme - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/sealed-grounds", answer: "Sealed Grounds - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/sealed-temple", answer: "Sealed Temple - Skyward Sword" },
    { url: "https://soundcloud.com/extrapolation/sealing-spike-the-legend-of-zelda-skyward-sword", answer: "Sealing The Imprisoned - Skyward Sword" },
    { url: "https://soundcloud.com/jorge-guerra-55/minecart-ride", answer: "Shipyard Minecart Ride - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/the-legend-of-zelda-skyward-sword-uncovering-sky-keep", answer: "Sky Keep - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/skyloft", answer: "Skyloft - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/skyview-temple", answer: "Skyview Temple - Skyward Sword" },
    { url: "https://soundcloud.com/tyler-walter-440543274/the-legend-of-zelda-skyward-sword-hd-sound-selection-staff-roll", answer: "Staff Roll Credits - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/mini-boss-battle-1-stalfos-stalmaster", answer: "Stalfos ~ Stalmaster Battle - Skyward Sword" },
    { url: "https://soundcloud.com/therealwhiteranger1/stealth-eldin-volcano", answer: "Stealth (Eldin Volcano) - Skyward Sword" },
    { url: "https://soundcloud.com/medical-vgm/tadtone-hunt", answer: "Tadtone Hunt - Skyward Sword" },
    { url: "https://soundcloud.com/copticwalad/zelda-skyward-sword-temple-of", answer: "Temple of Hylia - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/temple-spring", answer: "Temple Spring - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/tension", answer: "Tension - Skyward Sword" },
    { url: "https://soundcloud.com/derkmakes/the-demon-king-demise-battle-rising", answer: "The Demon King, Demise Battle ~Rising~ - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/the-enchanted-earth-below-grooses-theme", answer: "The Enchanted Earth Below - Skyward Sword" },
    { url: "https://soundcloud.com/vgm-research/6-02-the-hordes-of-darkness", answer: "The Hordes of Darkness - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/the-isle-of-songs", answer: "The Isle of Songs - Skyward Sword" },
    { url: "https://soundcloud.com/user-169432879/3-34-the-lumpy-pumpkin-mp3", answer: "The Lumpy Pumpkin - Skyward Sword" },
    { url: "https://soundcloud.com/medical-vgm/3-35-the-pumpkin-song", answer: "The Pumpkin Song - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/theme-of-the-kikwis", answer: "Theme of the Kikwis - Skyward Sword" },
    { url: "https://soundcloud.com/chillkj/the-legend-of-zelda-skyward-sword-volcano-summit-interior", answer: "Volcano Summit - Skyward Sword" },
    { url: "https://soundcloud.com/aaron-jeshua-martinez-cepeda/zeldas-lullaby-the-legend-of", answer: "Zelda's Lullaby - Skyward Sword" },
    { url: "https://soundcloud.com/sunniea-416990841/zeldas-theme", answer: "Zelda's Theme - Skyward Sword" },



    // SPIRIT TRACKS
    { url: "https://soundcloud.com/user-767636085/the-legend-of-zelda-spirit-tracks-music-aboda-village", answer: "Aboda Village - Spirit Tracks" },
    { url: "https://soundcloud.com/rufhles/anouki-village", answer: "Anouki Village - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/byrne", answer: "Byrne - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/byrne-awakes", answer: "Byrne Awakes - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/byrne-comes-to-the-rescue", answer: "Byrne Comes to the Rescue - Spirit Tracks" },
    { url: "https://soundcloud.com/user-789006187/cragma-lava-lord", answer: "Cragma, Lava Lord - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/credits", answer: "Credits - Spirit Tracks" },
    { url: "https://soundcloud.com/cole-h-942086636/the-legend-of-zelda-spirit-tracks-ost-troubled-realm", answer: "Cursed Overworld - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/dark-trains-approaching", answer: "Dark Trains Appear - Spirit Tracks" },
    { url: "https://soundcloud.com/user-583014318/spirit-tracks-dungeon-gauntlet", answer: "Dungeon Gauntlet - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/facing-the-demon-train", answer: "Facing The Demon Train - Spirit Tracks" },
    { url: "https://soundcloud.com/samueltheadept/fight-against-byrne-vs-staven", answer: "Fight Against Byrne - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/fighting-cole-and-malladus", answer: "Fighting Cole and Malladus - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/final-battle-malladus", answer: "Final Battle ~ Malladus - Spirit Tracks" },
    { url: "https://soundcloud.com/technosheep/final-battle-protecting-zelda", answer: "Final Battle ~ Protecting Zelda - Spirit Tracks" },
    { url: "https://soundcloud.com/user-51173154/fire-temple-spirit-tracks", answer: "Fire and Sand Temple - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/fleeing-by-demon-train", answer: "Fleeing by Demon Train - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/forest-snow-and-ocean-temple", answer: "Forest, Snow and Ocean Temple - Spirit Tracks" },
    { url: "https://soundcloud.com/dialgan/fraaz-master-of-icy-fire", answer: "Fraaz, Master Of Icy Fire - Spirit Tracks" },
    { url: "https://soundcloud.com/vgmdr/129-goron-village-in-lava-spouts", answer: "Goron Village - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/the-lost-woods", answer: "Lost Woods - Spirit Tracks" },
    { url: "https://soundcloud.com/user-547113900/the-legend-of-zelda-spirit-tracks-mini-boss", answer: "Mini Boss - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/papuchia-village", answer: "Papuchia Village - Spirit Tracks" },
    { url: "https://soundcloud.com/user-789006187/phytops-barbed-menace", answer: "Phytops, Barbed Menace - Spirit Tracks" },
    { url: "https://soundcloud.com/procrastinating-reality/sanctuary-the-legend-of-zelda-spirit-tracks", answer: "Sanctuary - Spirit Tracks" },
    { url: "https://soundcloud.com/user-789006187/stagnox-the-armored-colossus", answer: "Stagnox, Armored Colossus - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/tank-and-bomb-ship-attack", answer: "Tank And Bomb Ship Attack - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/the-dark-realm", answer: "The Dark Realm - Spirit Tracks" },
    { url: "https://soundcloud.com/zhtotk2/the-force-gem-awakens", answer: "The Force Gem Awakens - Spirit Tracks" },
    { url: "https://soundcloud.com/cow-ravine/underwater", answer: "Underwater - Spirit Tracks" },



    // TEARS OF THE KINGDOM
    { url: "https://soundcloud.com/zhtotk2/3rd-trailer-bgm-bonus-track", answer: "3rd Trailer - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/ancient-zora-waterworks", answer: "Ancient Zora Waterworks - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/battle-field-boss-bokoblin", answer: "Battle: Field (Boss Bokoblin) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/battle-temple", answer: "Battle: Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/colgera-battle-first-half", answer: "Colgera Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/construct-factory-5th-stage", answer: "Construct Factory - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/demon-dragon-battle", answer: "Demon Dragon Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/demon-king-ganondorf-battle", answer: "Demon King Ganondorf Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/demon-king-ganondorf-battle-second-form-first-half", answer: "Demon King Ganondorf Battle (Second Form) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/field-depths", answer: "Depths - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/depths-abandoned-mine", answer: "Depths Abandoned Mine - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/diving", answer: "Diving - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/diving-depths", answer: "Diving (Depths) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/dragonhead-island", answer: "Dragonhead Island - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/encounter-with-rauru-source-of-the-right-arm", answer: "Encounter with Rauru, Source of the Right Arm - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/encounter-with-yona", answer: "Encounter with Yona - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/field-high-sky", answer: "Field (High Sky) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/fire-temple-5th-stage", answer: "Fire Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/flux-construct-battle", answer: "Flux Construct Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/forgotten-foundation-battle", answer: "Forgotten Foundation: Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/frox-battle", answer: "Frox Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/gerudo-shelter", answer: "Gerudo Shelter - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/gerudo-town-during-the-phenomenon", answer: "Gerudo Town (During the Phenomenon) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/gleeok-battle", answer: "Gleeok Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/gloom-spawn-battle", answer: "Gloom Spawn Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/glooms-lair", answer: "Gloom's Lair - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/goron-city-during-the-phenomenon", answer: "Goron City (During the Phenomenon) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/hateno-ancient-tech-lab", answer: "Hateno Ancient Tech Lab - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/hateno-school", answer: "Hateno School - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/hudson-construction-site-day", answer: "Hudson Construction Site (Day) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/hudson-construction-site-night", answer: "Hudson Construction Site (Night) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/investigation-to-the-clouds", answer: "Investigation to the Clouds - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/koltin", answer: "Koltin - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/korok-forest-during-the-phenomenon", answer: "Korok Forest (During the Phenomenon) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/light-dragon", answer: "Light Dragon - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/lightning-temple-4th-stage", answer: "Lightning Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/lightroot", answer: "Lightroot - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/links-house", answer: "Link's House - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/lomei-labyrinth-depths-labyrinth", answer: "Lomei Labyrinth (Depths Labyrinth) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/lomei-labyrinth-top-floor", answer: "Lomei Labyrinth (Top Floor) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/lookout-landing", answer: "Lookout Landing - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/lookout-landing-shrouded-in-dark-clouds", answer: "Lookout Landing Shrouded in Dark Clouds - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/lucky-clover-gazette", answer: "Lucky Clover Gazette - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/lurelin-village-restoration-feast", answer: "Lurelin Village Restoration Feast - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/marbled-gohma-battle-first-half", answer: "Marbled Gohma Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/mineru-sage-of-spirit", answer: "Mineru, Sage of Spirit - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/mini-game-ball-toss", answer: "Mini-Game (Ball Toss) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/mini-game-dive-ceremony", answer: "Mini-Game (Dive Ceremony) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/mini-game-mine-cart-land", answer: "Mini-Game (Mine-Cart Land) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/mini-game-yiga-clan-training", answer: "Mini-Game (Yiga Clan Training) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/mipha-court", answer: "Mipha Court - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/moragia-battle", answer: "Moragia Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/mucktorok-battle-first-half", answer: "Mucktorok Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/oh-link-im-home", answer: "Oh, Link... I'm Home! - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/opening", answer: "Opening - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/phantom-ganon-battle-first-half", answer: "Phantom Ganon Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/prologue-first-half-1", answer: "Prologue (First Half) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/purify-the-sludge-covered-statue", answer: "Purify the Sludge-Covered Statue - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/queen-gibdo-battle-first-half", answer: "Queen Gibdo Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/raurus-guidance", answer: "Rauru's Guidance - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/reunion-with-riju", answer: "Reunion with Riju - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/reunion-with-sidon", answer: "Reunion with Sidon - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/reunion-with-tulin", answer: "Reunion with Tulin - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/riju-sage-of-lightning", answer: "Riju, Sage of Lightning - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/rito-village-during-the-phenomenon", answer: "Rito Village (During the Phenomenon) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/rocky-area", answer: "Rocky Area - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/seized-construct-battle-first-half", answer: "Seized Construct Batte - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/serenade-to-a-great-fairy", answer: "Serenade to a Great Fairy - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/shrine-of-light", answer: "Shrine of Light - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/shrine-of-light-battle", answer: "Shrine of Light: Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/shrine-of-light-before-the-trial", answer: "Shrine of Light: Before the Trial - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/shrine-of-light-blessing", answer: "Shrine of Light: Blessing - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/sidon-sage-of-water", answer: "Sidon, Sage of Water - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/sky-island", answer: "Sky Island - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/sludge-like-battle", answer: "Sludge Like Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/spirit-temple", answer: "Spirit Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/tarrey-town-night", answer: "Tarrey Town (Night) - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/temple-of-time", answer: "Temple of Time - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/the-cece-hat", answer: "The Cece Hat - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/the-demon-kings-army", answer: "The Demon King's Army - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/the-mayoral-election", answer: "The Mayoral Election - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/the-return-of-master-kohga-battle", answer: "The Return of Master Kohga: Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/the-world-renowned-cece", answer: "The World-Renowned Cece - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/thunderhead-isles", answer: "Thunderhead Isles - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/to-her-hand", answer: "To Her Hand - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/tulin-sage-of-wind", answer: "Tulin, Sage of Wind - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/tulins-bow-taken", answer: "Tulin's Bow Taken - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/water-temple-4th-stage", answer: "Water Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/wind-temple-5th-stage", answer: "Wind Temple - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk2/yiga-clan-hideout", answer: "Yiga Clan Hideout - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/you-must-find-me", answer: "You Must Find Me - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/yunobo-clearly-not-himself-battle", answer: "Yunobo (Clearly Not Himself) Battle - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/yunobo-sage-of-fire", answer: "Yunobo, Sage of Fire - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/yunoboco-hq", answer: "YunoboCo HQ - Tears of the Kingdom" },
    { url: "https://soundcloud.com/zhtotk1/zoras-domain-during-the-phenomenon", answer: "Zora's Domain (During the Phenomenon) - Tears of the Kingdom" },



    // THE ADVENTURE OF LINK
    { url: "https://soundcloud.com/zhtotk2/battle-theme", answer: "Battle - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/boss-battle", answer: "Boss - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/dark-link-battle", answer: "Dark Link - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/ending", answer: "Ending - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/great-palace-theme", answer: "Great Palace - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/indoors-theme", answer: "Indoors - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/overworld", answer: "Overworld - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/palace-theme", answer: "Temple - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/title-screen-prologue", answer: "Title - The Adventure of Link" },
    { url: "https://soundcloud.com/zhtotk2/village", answer: "Village - The Adventure of Link" },



    // THE LEGEND OF ZELDA
    { url: "https://soundcloud.com/zelda-soundtracks/nes-legend-of-zelda-death", answer: "Death Mountain - The Legend of Zelda" },
    { url: "https://soundcloud.com/zelda-soundtracks/nes-legend-of-zelda-dungeon", answer: "Dungeon - The Legend of Zelda" },
    { url: "https://soundcloud.com/zelda-soundtracks/nes-legend-of-zelda-intro", answer: "Intro - The Legend of Zelda" },
    { url: "https://soundcloud.com/zelda-soundtracks/legend-of-zelda-nes-overworld", answer: "Overworld - The Legend of Zelda" },



    // THE MINISH CAP
    { url: "https://soundcloud.com/user616095954/the-legend-of-zelda-the-minish-cap-boss-battle?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=df34a36427f4424aacb9398345a2dde9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Boss - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdr/castor-wilds-wind-ruins?si=436f6639e0b14135bad14ae7380af340&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Castor Wilds - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdoc/cave-the-legend-of-zelda-the-minish-cap-ost-enhanced?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=fed972049733467399a38bfc28c4a11d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Cave - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/cave-of-flames?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=99aaff47ad9b4b2ea68597d762b6d7ad&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Cave of Flames - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdoc/cloud-tops-the-legend-of-zelda-the-minish-cap-ost-enhanced?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=bb55a0f4dde742ea90ec49a4695c64e7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Cloud Tops - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/elemental-sanctuary?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=8f20ed47857047d6b2f50f662ad0af55&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Elemental Sanctuary - The Minish Cap" },
    { url: "https://soundcloud.com/mushroomguy/the-legend-of-zelda-the-minish?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=66460102d7a3455e847f71d97eb41f7b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Fairy Fountain - The Minish Cap" },
    { url: "https://soundcloud.com/user-937373904/file-select-tloz-the-minish?si=76eef9272ab24ed7adb877faea1de210&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "File Select - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdoc/hyrule-castle-the-quest-begins-the-legend-of-zelda-the-minish-cap-ost-enhanced?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=7b46dcfe820746b08f9fc4c1cf50642f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Hyrule Castle - The Minish Cap" },
    { url: "https://soundcloud.com/paradox_phoenix/the-legend-of-zelda-the-minish?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=c912758e762f4ade8aa5059ca69b28a4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Hyrule Field - The Minish Cap" },
    { url: "https://soundcloud.com/lanbobyonson/hyrule-town-the-legend-of-zelda-the-minish-cap-ost?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=91b81363c3104777a5802fcde66ac2d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Hyrule Town - The Minish Cap" },
    { url: "https://soundcloud.com/link-throughtime/inside-a-house-minish-cap?si=34420d5fa67e4574afcd6f9920606eba&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Inside a House - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/into-the-skies?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=42e0a981909f4b67832ffbf502723392&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Into the Skies - The Minish Cap" },
    { url: "https://soundcloud.com/klon-basters/the-legend-of-zelda-the-minish-cap-story", answer: "Introduction - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdoc/danger-the-legend-of-zelda-the-minish-cap-ost-enhanced?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=3c37e01f282040e5b45a8c694e229d67&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Mini Boss - The Minish Cap" },
    { url: "https://soundcloud.com/user-86382627/18-minish-village-the-legend-of-zelda-the-minish-cap-ost?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=7de352cffac9488287520092f66f5359&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Minish Village - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/minish-woods?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=d3132fa800a049c1952f9dd2aa0f5808&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Minish Woods - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/mt-crenel?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=cb61f8823fd943169156378673281fcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Mt. Crenel - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/palace-of-winds?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=e8dbb73b9ea4479da3f445fa640369a1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Palace of Winds - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/picori-festival?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=f50336c726304ce980710fd5e22e8e76&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Picori Festival - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/royal-crypt?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=2e865451edb04445b6f17e75f846fc07&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Royal Crypt - The Minish Cap" },
    { url: "https://soundcloud.com/vgmdr/royal-valley-original-the-legend-of-zelda-the-minish-cap?si=ad72bc838bf84e0faa44fc2a3764f1ef&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Royal Valley - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/temple-of-droplets?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=91e8df1ac49c4429bac2cc2c609e2fd6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Temple of Droplets - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/the-minish-cap?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=fcc48dc388f84574a48f7e64eb1d5a2d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "The Minish Cap - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/vaati-attacks?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=4be6e04751ae455fb22a600b24b141b7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Vaati Attacks - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/vaati-battle?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=403bc3b757e44b36b36d85aabd648d93&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Vaati Battle - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/vaatis-theme?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=320ab08b9e884d528e54df6c175ba4e9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Vaati's Theme - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/vaatis-wrath?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=819e063e49ce4f528105cddbe4a83703&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Vaati's Wrath - The Minish Cap" },
    { url: "https://soundcloud.com/cow-ravine/wind-ruins?in=user-411498138/sets/the-legend-of-zelda-the-minish&si=7eb4417a36844c119eaa8a4e4a573515&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Wind Ruins - The Minish Cap" },
    


    // THE WIND WAKER
    { url: "https://soundcloud.com/nypt/arylls-theme-wind-waker", answer: "Aryll's Theme - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/battle-the-legend-of-zelda-the", answer: "Battle - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/beedles-shop-the-legend-of-zelda-the-wind-waker", answer: "Beedle's Shop - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/departure-the-legend-of-zelda-the-wind-waker", answer: "Departure - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/dragon-roost-island-the-legend", answer: "Dragon Roost Island - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/earth-temple-the-legend-of-zelda-the-wind-waker", answer: "Earth Temple - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/farewell-hyrule-king-the-legend-of-zelda-the-wind-waker", answer: "Farewell Hyrule King - The Wind Waker" },
    { url: "https://soundcloud.com/filippojogos/forest-haven-the-legend-of-1", answer: "Forest Haven - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/forsaken-fortress-the-legend-of-zelda-the-wind-waker", answer: "Forsaken Fortress - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/ganons-castle-the-legend-of-zelda-the-wind-waker", answer: "Ganon's Castle - The Wind Waker" },
    { url: "https://soundcloud.com/christopher-madrigal-1/ganondorf-battle-the-legend-of", answer: "Ganondorf Battle - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/gohdan-the-legend-of-zelda-the-wind-waker", answer: "Gohdan - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/gohma-battle-first-half-the-legend-of-zelda-the-wind-waker", answer: "Gohma Battle First Half - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/gohma-battle-second-half-the-legend-of-zelda-the-wind-waker", answer: "Gohma Battle Second Half - The Wind Waker" },
    { url: "https://soundcloud.com/kirk_of_time/zelda-wind-waker-grannys-song", answer: "Grandma's Theme - The Wind Waker" },
    { url: "https://soundcloud.com/michael-vasquez-33/helmaroc-king-the-legend-of-zelda-the-wind-waker-hd", answer: "Helmaroc King - The Wind Waker" },
    { url: "https://soundcloud.com/yourmaineventer/legend-of-zelda-wind-waker", answer: "Hyrule Castle - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/jabun-the-legend-of-zelda-the-wind-waker", answer: "Jabun - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/jalhalla-the-legend-of-zelda-the-wind-waker", answer: "Jalhalla - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/kalle-demos-the-legend-of-zelda-the-wind-waker", answer: "Kalle Demos - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/makars-prayer-the-legend-of-zelda-the-wind-waker", answer: "Makar's Prayer ~ Wind God's Aria - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/maritime-battle-the-legend-of-zelda-the-wind-waker", answer: "Maritime Battle - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/medlis-prayer-the-legend-of-zelda-the-wind-waker", answer: "Medli's Prayer ~ Earth God's Lyric - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/mini-boss-the-legend-of-zelda", answer: "Mini Boss - The Wind Waker" },
    { url: "https://soundcloud.com/night-lord-nyx/legend-of-zelda-wind-waker-molgera-battle-theme", answer: "Molgera Battle - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/outset-island-the-legend-of", answer: "Outset Island - The Wind Waker" },
    { url: "https://soundcloud.com/nypt/phantom-ganon-wind-waker", answer: "Phantom Ganon - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/pirates-the-legend-of-zelda-the-wind-waker", answer: "Pirates - The Wind Waker" },
    { url: "https://soundcloud.com/grumproast/potion-shop-the-legend-of-zelda-the-wind-waker", answer: "Potion Shop - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/puppet-ganon-the-legend-of-zelda-the-wind-waker", answer: "Puppet Ganon - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/puppet-ganon-snake-the-legend-of-zelda-the-wind-waker", answer: "Puppet Ganon (Snake) - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/puppet-ganon-spider-the-legend-of-zelda-the-wind-waker", answer: "Puppet Ganon (Spider) - The Wind Waker" },
    { url: "https://soundcloud.com/djinnseng/the-deku-tree-and-koroks-the-legend-of-zelda-the-wind-waker", answer: "The Deku Tree and Koroks - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/the-fairy-queen-the-legend-of-zelda-the-wind-waker", answer: "The Fairy Queen - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/the-great-sea-the-legend-of", answer: "The Great Sea - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/the-great-sea-is-cursed-the-legend-of-zelda-the-wind-waker", answer: "The Great Sea is Cursed - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/the-legendary-hero-the-legend", answer: "The Legendary Hero - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/the-second-maritime-battle-the-legend-of-zelda-the-wind-waker", answer: "The Second Maritime Battle - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/title-theme-the-legend-of-1", answer: "Title Theme - The Wind Waker" },
    { url: "https://soundcloud.com/user-405995293/to-hyrule-the-legend-of-zelda-the-wind-waker", answer: "To Hyrule - The Wind Waker" },
    { url: "https://soundcloud.com/nypt/tower-of-the-gods-wind-waker", answer: "Tower of the Gods - The Wind Waker" },
    { url: "https://soundcloud.com/spaceman_jose/zelda-wind-waker-wind-temple", answer: "Wind Temple - The Wind Waker" },
    { url: "https://soundcloud.com/anderouspi/windfall-island-the-legend-of", answer: "Windfall Island - The Wind Waker" },



    // THE WIND WAKER HD
    { url: "https://soundcloud.com/user-724848415/file-select-the-legend-of-zelda-the-wind-waker-hd", answer: "File Select - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/forsaken-fortress-the-legend-of-zelda-the-wind-waker-hd", answer: "Forsaken Fortress - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/gohma-battle-first-half-the-legend-of-zelda-the-wind-waker-hd", answer: "Gohma Battle - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/grandmas-theme-the-legend-of-zelda-the-wind-waker-hd", answer: "Grandma's Theme - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/molgera-the-legend-of-zelda-the-wind-waker-hd", answer: "Molgera - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/outset-island-the-legend-of-zelda-the-wind-waker-hd", answer: "Outset Island - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/pirates-the-legend-of-zelda-the-wind-waker-hd", answer: "Pirates - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/puppet-ganon-puppet-mode-the-legend-of-zelda-the-wind-waker-hd", answer: "Puppet Ganon - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/puppet-ganon-snake-mode-the-legend-of-zelda-the-wind-waker-hd", answer: "Puppet Ganon (Snake) - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/puppet-ganon-spider-mode-the-legend-of-zelda-the-wind-waker-hd", answer: "Puppet Ganon (Spider) - The Wind Waker HD" },
    { url: "https://soundcloud.com/user-724848415/windfall-island-the-legend-of-zelda-the-wind-waker-hd", answer: "Windfall Island - The Wind Waker HD" },



    // TRI FORCE HEROES
    { url: "https://soundcloud.com/trilliby-510875556/boss-battle-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=51003611cd8641afb2794f354244905e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Boss - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/coliseum-the-legend-of-zelda-tri-force-heroes", answer: "Coliseum - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/enemy-battle-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=2393e67304414b59aec591859978f7c4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Combat - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/coliseum-results-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=097e9117088d47b583595ead3bf21415&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Combat Results - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/curse-the-legend-of-zelda-tri-force-heroes", answer: "Curse - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/daily-riches-the-legend-of-zelda-tri-force-heroes", answer: "Daily Riches - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/boss-battle-shadow-links-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=2e429cb3fb0f41beb9d4536536140622&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Dark Links Battle - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/den-of-trials-the-legend-of-zelda-tri-force-heroes", answer: "Den of Trials - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/dunes-the-legend-of-zelda-tri-force-heroes", answer: "Dunes - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/fortress-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=d304e82295ce415f83aa1efbb1dba27a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Fortress - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/history-of-hytopia-the-legend-of-zelda-tri-force-heroes", answer: "History of Hytopia - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/hytopia-castle-the-legend-of-zelda-tri-force-heroes", answer: "Hytopia Castle - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/ice-cavern-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=8aea34b8a69a4d87912a436cf953c7dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Ice Cavern - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/king-tuft-the-legend-of-zelda-tri-force-heroes", answer: "King Tuft - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/lady-mauds-theme-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=1ecb4c195f1642c584e86a8b1aff292f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Lady Maud's Theme - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/boss-battle-the-lady-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=85aa77baf9f54526a09fd6753c86aacb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Lady Maud Battle - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/mini-boss-the-legend-of-zelda-tri-force-heroes", answer: "Mini Boss - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/hinox-bros-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=ca6fb234b8d4425a9c3b512104ec6bb5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Miniboss: Hinox - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/riverside-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=87784b0f25ca4113b367b2bc27e067ba&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Riverside - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/ruins-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=8685a702868546cd9e090bb393542740&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Ruins - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/sir-combsly-the-legend-of-zelda-tri-force-heroes", answer: "Sir Combsly - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/sky-realm-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=c9be6efacca04616abec1385fa4e9330&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Sky Realm - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/sky-temple-the-legend-of-zelda-tri-force-heroes", answer: "Sky Temple - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/staff-roll-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=8e07fde45f884291893feb06c5bb3b2a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Staff Roll Credits - Tri Force Heroes" },
    { url: "https://soundcloud.com/vgmdr/stage-selection-the-legend-of-zelda-tri-force-heroes", answer: "Stage Selection - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/madame-coutures-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=93001775b6944eb1b348e15baa15e41f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Tailor - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/title-theme-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=3c56b8381c73430e97368315be4de533&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Title Screen - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/treasure-room-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=86b38b4a351042baa99c3017ab799c15&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Treasure Room - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/hytopia-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=2eea511d62284fd8a6b5ff33713ab2a3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Village - Tri Force Heroes" },
    { url: "https://soundcloud.com/trilliby-510875556/volcano-the-legend-of-zelda-tri-force-heroes-ost?in=trilliby-510875556/sets/the-legend-of-zelda-tri-force&si=a6d66843f6624af7831a51472ea77fcb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", answer: "Volcano - Tri Force Heroes" },



    // TWILIGHT PRINCESS
    { url: "https://soundcloud.com/formidable-782415076/aeralfos-the-legend-of-zelda", answer: "Aeralfos - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/agithas-castle-the-legend-of", answer: "Agitha's Castle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/arbiters-grounds-the-legend-of", answer: "Arbiter's Grounds - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/argorok-battle-second-half", answer: "Argorok Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/armogohma-battle-first-half", answer: "Armogohma Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/battle-second-half-the-legend", answer: "Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/beast-ganon-battle-the-legend-of-zelda-twilight-princess", answer: "Beast Ganon Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/beast-in-the-village-the", answer: "Beast in the Village - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/blizzeta-battle-second-half", answer: "Blizzeta Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/boss-defeated-the-legend-of", answer: "Boss Defeated - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/cannon-repair-the-legend-of", answer: "Canon Repair - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/cave-the-legend-of-zelda", answer: "Cave - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/city-in-the-sky-the-legend-of", answer: "City in the Sky - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/courage-the-legend-of-zelda", answer: "Courage - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/dangoro-the-legend-of-zelda", answer: "Dangoro Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/darknut-the-legend-of-zelda", answer: "Darknut Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/death-mountain-the-legend-of", answer: "Death Mountain - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/death-sword-the-legend-of", answer: "Death Sword - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/diababa-battle-second-half-the", answer: "Diababa - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/enter-the-darkness-the-legend", answer: "Enter the Darkness - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/falbis-house-the-legend-of", answer: "Falbi's House - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/faron-woods-the-legend-of", answer: "Faron Woods - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/fishing-hit-the-legend-of", answer: "Fishing Hit! - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/forest-temple-the-legend-of", answer: "Forest Temple - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/fyers-cannon-the-legend-of", answer: "Fyer's Cannon - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/fyrus-the-legend-of-zelda", answer: "Fyrus Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ganondorf-the-legend-of-zelda-twilight-princess", answer: "Ganondorf Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/gerudo-desert-the-legend-of", answer: "Gerudo Desert - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/goron-mines-the-legend-of", answer: "Goron Mines - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/graveyard-the-legend-of-zelda", answer: "Graveyard - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/herd-game-the-legend-of-zelda", answer: "Herd Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hidden-skill-training-the", answer: "Hidden Skill Training - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hidden-village-the-legend-of", answer: "Hidden Village - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/horse-battle-the-legend-of", answer: "Horse Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/horseback-ganondorf-fight-the-legend-of-zelda-twilight-princess", answer: "Horseback Ganondorf Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hyrule-castle-the-legend-of", answer: "Hyrule Castle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hyrule-castle-tower-the-legend-of-zelda-twilight-princess", answer: "Hyrule Castle Tower - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hyrule-castle-town-the-legend", answer: "Hyrule Castle Town - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/hyrule-field-the-legend-of", answer: "Hyrule Field - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ilias-theme-the-legend-of", answer: "Illia's Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/inside-a-house-the-legend-of", answer: "Inside a House - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/kakariko-is-saved-the-legend", answer: "Kakariko is Saved - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/kakariko-village-the-legend-of-zelda-twilight-princess", answer: "Kakariko Village - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/king-bulblin-the-legend-of", answer: "King Bulblin - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/lake-hylia-the-legend-of-zelda", answer: "Lake Hylia - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/lamentation-of-the-spirits-the", answer: "Lamentation of the Spirits - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/light-and-darkness-the-legend", answer: "Light and Darkness - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/malo-mart-the-legend-of-zelda", answer: "Malo Mart - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/meet-ilia-the-legend-of-zelda", answer: "Meet Illia - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/midnas-lament-the-legend-of", answer: "Midna's Lament - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/midnas-theme-the-legend-of", answer: "Midna's Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/morpheel-battle-second-half", answer: "Morpheel Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ooccoos-theme-the-legend-of", answer: "Ooccoo's Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ook-the-legend-of-zelda", answer: "Ook - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/opening-the-legend-of-zelda", answer: "Opening - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/orchestra-piece-1-the-legend", answer: "Orchestra Piece #1 - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/orchestra-piece-2-the-legend", answer: "Orchestra Piece #2 - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ordon-ranch-the-legend-of", answer: "Ordon Ranch - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ordon-village-the-legend-of", answer: "Ordon Village - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/palace-of-twilight-the-legend", answer: "Palace of Twilight - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/postmans-theme-the-legend-of", answer: "Postman's Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/prince-ralis-is-saved-the", answer: "Prince Ralis is Saved - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/puppet-zelda-the-legend-of-zelda-twilight-princess", answer: "Puppet Zelda - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/queen-rutela-the-legend-of", answer: "Queen Rutela - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/rodeo-game-the-legend-of-zelda", answer: "Rodeo Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/rollgoal-the-legend-of-zelda", answer: "Rollgoal - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/sacred-grove-the-legend-of", answer: "Sacred Grove - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/sacrifice-the-legend-of-zelda", answer: "Sacrifice - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/sanctuary-the-legend-of-zelda", answer: "Sanctuary - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/shadow-insect-the-legend-of", answer: "Shadow Insect - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/shop-the-legend-of-zelda", answer: "Shop - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/sled-game-the-legend-of-zelda", answer: "Sled Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/snowpeak-the-legend-of-zelda", answer: "Snowpeak - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/snowpeak-ruins-the-legend-of", answer: "Snowpeak Ruins - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/spirits-lament-the-legend-of", answer: "Spirit's Lament - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/staff-credits-the-legend-of-zelda-twilight-princess", answer: "Staff Credits - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/stallord-the-legend-of-zelda", answer: "Stallord Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/star-game-the-legend-of-zelda", answer: "STAR Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/statue-game-the-legend-of", answer: "Statue Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/sumo-game-the-legend-of-zelda", answer: "Sumo Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/temple-of-time-the-legend-of", answer: "Temple of Time - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/the-demon-thief-the-legend-of", answer: "The Demon Thief - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/the-sages-the-legend-of-zelda", answer: "The Sages - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/title-theme-the-legend-of", answer: "Title Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/twilight-the-legend-of-zelda", answer: "Twilight - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/twilight-realm-the-legend-of", answer: "Twilight Realm - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/twilit-battle-the-legend-of", answer: "Twilit Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/twilit-cargo-game-the-legend", answer: "Twilit Cargo Game - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/ways-of-the-sword-the-legend", answer: "Ways of the Sword - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/zant-battle-the-legend-of-zelda-twilight-princess-1", answer: "Zant Battle - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/princess-zeldas-theme-the-legend-of-zelda-twilight-princess", answer: "Zelda's Theme - Twilight Princess" },
    { url: "https://soundcloud.com/formidable-782415076/zoras-domain-the-legend-of", answer: "Zora's Domain - Twilight Princess" },



    // EXTRA
    { url: "https://soundcloud.com/unai-zabala-787017891/ganon-rosario-dale-zelda-dale", answer: "Dale Zelda Dale - Extra" }

  ];

  shuffleMusic();
  var firstLoad = true;

  fetch(zipUrl).then((r) => {
    if (r.ok == false) {
      zipUrl = "";
    }
  });

  const Cn = ue(musicNameList),
    On = {
      subscribe: ue(musicListWithLinks, Pn).subscribe,
    };

  ("use strict");

  function e() {}

  function shuffleMusic() {
    for (let i = musicListWithLinks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [musicListWithLinks[i], musicListWithLinks[j]] = [
        musicListWithLinks[j],
        musicListWithLinks[i],
      ];
    }
  }

  function nextMusic() {
    currentIndex += 1;
    if (currentIndex >= musicListWithLinks.length) {
      currentIndex = 0;
      shuffleMusic();
      firstLoad = true; // Problem: reset userStats
    }
    document.body.innerHTML = "";
    new (class extends se {
      constructor(e) {
        super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
      }
    })({
      target: document.body,
      props: {},
    });
  }

  function t(e) {
    return e();
  }

  function n() {
    return Object.create(null);
  }

  function r(e) {
    e.forEach(t);
  }

  function s(e) {
    return "function" == typeof e;
  }

  function i(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && "object" == typeof e) || "function" == typeof e;
  }
  let o, a;

  function l(e, t) {
    return o || (o = document.createElement("a")), (o.href = t), e === o.href;
  }

  function u(t, n, r) {
    t.$$.on_destroy.push(
      (function (t, ...n) {
        if (null == t) return e;
        const r = t.subscribe(...n);
        return r.unsubscribe ? () => r.unsubscribe() : r;
      })(n, r)
    );
  }

  function c(e, t, n, r) {
    if (e) {
      const s = d(e, t, n, r);
      return e[0](s);
    }
  }

  function d(e, t, n, r) {
    return e[1] && r
      ? (function (e, t) {
          for (const n in t) e[n] = t[n];
          return e;
        })(n.ctx.slice(), e[1](r(t)))
      : n.ctx;
  }

  function h(e, t, n, r) {
    if (e[2] && r) {
      const s = e[2](r(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | s[r];
        return e;
      }
      return t.dirty | s;
    }
    return t.dirty;
  }

  function f(e, t, n, r, s, i) {
    if (s) {
      const o = d(t, n, r, i);
      e.p(o, s);
    }
  }

  function m(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t;
    }
    return -1;
  }

  function p(e, t) {
    e.appendChild(t);
  }

  function g(e, t, n) {
    e.insertBefore(t, n || null);
  }

  function y(e) {
    e.parentNode.removeChild(e);
  }

  function v(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }

  function w(e) {
    return document.createElement(e);
  }

  function k(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }

  function _(e) {
    return document.createTextNode(e);
  }

  function x() {
    return _(" ");
  }

  function b() {
    return _("");
  }

  function S(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }

  function M(e, t, n) {
    null == n
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }

  function $(e, t) {
    (t = "" + t), e.wholeText !== t && (e.data = t);
  }

  function D(e, t) {
    e.value = null == t ? "" : t;
  }

  function T(e, t, n, r) {
    null === n
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, r ? "important" : "");
  }

  function Y(e, t, n) {
    e.classList[n ? "add" : "remove"](t);
  }

  function C(e) {
    a = e;
  }

  function O() {
    if (!a) throw new Error("Function called outside component initialization");
    return a;
  }

  function P(e) {
    O().$$.on_mount.push(e);
  }

  function A() {
    const e = O();
    return (t, n) => {
      const r = e.$$.callbacks[t];
      if (r) {
        const s = (function (e, t, n = !1) {
          const r = document.createEvent("CustomEvent");
          return r.initCustomEvent(e, n, !1, t), r;
        })(t, n);
        r.slice().forEach((t) => {
          t.call(e, s);
        });
      }
    };
  }

  function L(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((e) => e.call(this, t));
  }
  const N = [],
    H = [],
    I = [],
    W = [],
    R = Promise.resolve();
  let F = !1;

  function G(e) {
    I.push(e);
  }
  const E = new Set();
  let j = 0;

  function B() {
    const e = a;
    do {
      for (; j < N.length; ) {
        const e = N[j];
        j++, C(e), z(e.$$);
      }
      for (C(null), N.length = 0, j = 0; H.length; ) H.pop()();
      for (let e = 0; e < I.length; e += 1) {
        const t = I[e];
        E.has(t) || (E.add(t), t());
      }
      I.length = 0;
    } while (N.length);
    for (; W.length; ) W.pop()();
    (F = !1), E.clear(), C(e);
  }

  function z(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(G);
    }
  }
  const U = new Set();
  let V;

  function J() {
    V = {
      r: 0,
      c: [],
      p: V,
    };
  }

  function K() {
    V.r || r(V.c), (V = V.p);
  }

  function Z(e, t) {
    e && e.i && (U.delete(e), e.i(t));
  }

  function q(e, t, n, r) {
    if (e && e.o) {
      if (U.has(e)) return;
      U.add(e),
        V.c.push(() => {
          U.delete(e), r && (n && e.d(1), r());
        }),
        e.o(t);
    }
  }
  const X =
    "undefined" != typeof window
      ? window
      : "undefined" != typeof globalThis
      ? globalThis
      : global;

  function Q(e) {
    e && e.c();
  }

  function ee(e, n, i, o) {
    const { fragment: a, on_mount: l, on_destroy: u, after_update: c } = e.$$;
    a && a.m(n, i),
      o ||
        G(() => {
          const n = l.map(t).filter(s);
          u ? u.push(...n) : r(n), (e.$$.on_mount = []);
        }),
      c.forEach(G);
  }

  function te(e, t) {
    const n = e.$$;
    null !== n.fragment &&
      (r(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }

  function ne(e, t) {
    -1 === e.$$.dirty[0] &&
      (N.push(e), F || ((F = !0), R.then(B)), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }

  function re(t, s, i, o, l, u, c, d = [-1]) {
    const h = a;
    C(t);
    const f = (t.$$ = {
      fragment: null,
      ctx: null,
      props: u,
      update: e,
      not_equal: l,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(s.context || (h ? h.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: s.target || h.$$.root,
    });
    c && c(f.root);
    let m = !1;
    if (
      ((f.ctx = i
        ? i(t, s.props || {}, (e, n, ...r) => {
            const s = r.length ? r[0] : n;
            return (
              f.ctx &&
                l(f.ctx[e], (f.ctx[e] = s)) &&
                (!f.skip_bound && f.bound[e] && f.bound[e](s), m && ne(t, e)),
              n
            );
          })
        : []),
      f.update(),
      (m = !0),
      r(f.before_update),
      (f.fragment = !!o && o(f.ctx)),
      s.target)
    ) {
      if (s.hydrate) {
        const e = (function (e) {
          return Array.from(e.childNodes);
        })(s.target);
        f.fragment && f.fragment.l(e), e.forEach(y);
      } else f.fragment && f.fragment.c();
      s.intro && Z(t.$$.fragment),
        ee(t, s.target, s.anchor, s.customElement),
        B();
    }
    C(h);
  }
  class se {
    $destroy() {
      te(this, 1), (this.$destroy = e);
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        n.push(t),
        () => {
          const e = n.indexOf(t);
          -1 !== e && n.splice(e, 1);
        }
      );
    }
    $set(e) {
      var t;
      this.$$set &&
        ((t = e), 0 !== Object.keys(t).length) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  }

  function ie(e) {
    let t, n, r, s;
    const i = e[3].default,
      o = c(i, e, e[2], null);
    return {
      c() {
        (t = w("button")),
          o && o.c(),
          M(
            t,
            "class",
            "px-2 py-2 uppercase tracking-widest bg-custom-mg border-none flex items-center font-semibold text-sm svelte-1r54uzk"
          ),
          Y(t, "bg-custom-positive", e[0]),
          Y(t, "bg-custom-mg", e[1]);
      },
      m(i, a) {
        g(i, t, a),
          o && o.m(t, null),
          (n = !0),
          r || ((s = S(t, "click", e[4])), (r = !0));
      },
      p(e, [r]) {
        o &&
          o.p &&
          (!n || 4 & r) &&
          f(o, i, e, e[2], n ? h(i, e[2], r, null) : m(e[2]), null),
          1 & r && Y(t, "bg-custom-positive", e[0]),
          2 & r && Y(t, "bg-custom-mg", e[1]);
      },
      i(e) {
        n || (Z(o, e), (n = !0));
      },
      o(e) {
        q(o, e), (n = !1);
      },
      d(e) {
        e && y(t), o && o.d(e), (r = !1), s();
      },
    };
  }

  function oe(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t,
      { primary: i = !1 } = t,
      { secondary: o = !1 } = t;
    return (
      (e.$$set = (e) => {
        "primary" in e && n(0, (i = e.primary)),
          "secondary" in e && n(1, (o = e.secondary)),
          "$$scope" in e && n(2, (s = e.$$scope));
      }),
      [
        i,
        o,
        s,
        r,
        function (t) {
          L.call(this, e, t);
        },
      ]
    );
  }
  class ae extends se {
    constructor(e) {
      super(),
        re(this, e, oe, ie, i, {
          primary: 0,
          secondary: 1,
        });
    }
  }
  const le = [];

  function ue(t, n = e) {
    let r;
    const s = new Set();

    function o(e) {
      if (i(t, e) && ((t = e), r)) {
        const e = !le.length;
        for (const e of s) e[1](), le.push(e, t);
        if (e) {
          for (let e = 0; e < le.length; e += 2) le[e][0](le[e + 1]);
          le.length = 0;
        }
      }
    }
    return {
      set: o,
      update: function (e) {
        o(e(t));
      },
      subscribe: function (i, a = e) {
        const l = [i, a];
        return (
          s.add(l),
          1 === s.size && (r = n(o) || e),
          i(t),
          () => {
            s.delete(l), 0 === s.size && (r(), (r = null));
          }
        );
      },
    };
  }
  const ce = ue([]);

  function de() {
    return (
      Boolean(window.dataLayer).valueOf() && Array.isArray(window.dataLayer)
    );
  }

  function he() {
    window.dataLayer.push(arguments);
  }

  function fe(e, t, n) {
    let { properties: r } = t,
      { configurations: s = {} } = t,
      { enabled: i = !0 } = t;

    function o() {
      !(function (e, t, n) {
        let r = e.length;

        function s() {
          (r = --r), r < 1 && n();
        }
        t()
          ? n()
          : e.forEach(
              ({
                type: e,
                url: t,
                options: n = {
                  async: !0,
                  defer: !0,
                },
              }) => {
                const r = "script" === e,
                  i = document.createElement(r ? "script" : "link");
                r
                  ? ((i.src = t), (i.async = n.async), (i.defer = n.defer))
                  : ((i.rel = "stylesheet"), (i.href = t)),
                  (i.onload = s),
                  document.body.appendChild(i);
              }
            );
      })(
        [
          {
            type: "script",
            url: `//www.googletagmanager.com/gtag/js?id=${r[0]}`,
          },
        ],
        de,
        a
      );
    }

    function a() {
      return (
        (window.dataLayer = window.dataLayer || []),
        he("js", new Date()),
        r.forEach((e) => {
          he("config", e, s[e] || {});
        }),
        ce.subscribe((e) => {
          let t = e.length && e.shift();
          for (; t; ) {
            const { event: n, data: r } = t;
            he("event", n, r), (t = e.shift());
          }
        })
      );
    }
    return (
      P(() => {
        i && o();
      }),
      (e.$$set = (e) => {
        "properties" in e && n(0, (r = e.properties)),
          "configurations" in e && n(1, (s = e.configurations)),
          "enabled" in e && n(2, (i = e.enabled));
      }),
      [r, s, i, o]
    );
  }
  class me extends se {
    constructor(e) {
      super(),
        re(this, e, fe, null, i, {
          properties: 0,
          configurations: 1,
          enabled: 2,
          init: 3,
        });
    }
    get init() {
      return this.$$.ctx[3];
    }
  }

  function pe(e, t) {
    t.send_to || delete t.send_to,
      ce.update((n) => [
        ...n,
        {
          event: e,
          data: t,
        },
      ]);
  }

  function ge(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("line")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "x1", "12"),
          M(r, "y1", "16"),
          M(r, "x2", "12"),
          M(r, "y2", "12"),
          M(s, "x1", "12"),
          M(s, "y1", "8"),
          M(s, "x2", "12.01"),
          M(s, "y2", "8"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ye(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ve(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(
            n,
            "d",
            "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function we(e) {
    let t, n, r, s;
    return {
      c() {
        (t = k("svg")),
          (n = k("circle")),
          (r = k("path")),
          (s = k("line")),
          M(n, "cx", "12"),
          M(n, "cy", "12"),
          M(n, "r", "10"),
          M(r, "d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"),
          M(s, "x1", "12"),
          M(s, "y1", "17"),
          M(s, "x2", "12.01"),
          M(s, "y2", "17"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(t, s);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function mListIco(e) {
    let t, r;
    return {
      c() {
        (t = k("svg")),
          (r = k("path")),
          M(
            r,
            "d",
            "M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "
          ),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "white");
      },
      m(e, i) {
        g(e, t, i), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ke(e) {
    let t, n, r, s, i, o, a, l, u, c, d, h, f, m, b, ml, v;
    return (
      (i = new ae({
        props: {
          $$slots: {
            default: [ge],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      i.$on("click", e[1]),
      (a = new ae({
        props: {
          $$slots: {
            default: [ye],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      a.$on("click", e[2]),
      (h = new ae({
        props: {
          $$slots: {
            default: [ve],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      h.$on("click", e[3]),
      (m = new ae({
        props: {
          $$slots: {
            default: [we],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      m.$on("click", e[4]),
      (ml = new ae({
        props: {
          $$slots: {
            default: [mListIco],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      ml.$on("click", e[5]),
      {
        c() {
          (t = w("header")),
            (n = w("div")),
            (r = w("div")),
            (s = w("div")),
            Q(i.$$.fragment),
            (o = x()),
            Q(a.$$.fragment),
            (l = x()),
            (u = w("h1")),
            (u.textContent = artist + " Heardle Infinite"),
            (c = x()),
            (d = w("div")),
            Q(h.$$.fragment),
            (f = x()),
            Q(m.$$.fragment),
            (b = x()),
            Q(ml.$$.fragment),
            M(s, "class", "flex flex-1"),
            M(
              u,
              "class",
              "font-serif text-3xl font-bold flex-grow text-center flex-1"
            ),
            M(d, "class", "flex flex-1 justify-end"),
            M(
              r,
              "class",
              "flex justify-evenly text-custom-fgcolor p-3 items-center"
            ),
            M(n, "class", "max-w-screen-md mx-auto "),
            M(t, "class", "border-b border-custom-line");
        },
        m(e, y) {
          g(e, t, y),
            p(t, n),
            p(n, r),
            p(r, s),
            ee(i, s, null),
            p(s, o),
            ee(a, s, null),
            p(r, l),
            p(r, u),
            p(r, c),
            p(r, d),
            ee(h, d, null),
            p(d, f),
            ee(m, d, null),
            p(d, b),
            ee(ml, d, null),
            (v = !0);
        },
        p(e, [t]) {
          const n = {};
          64 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            i.$set(n);
          const r = {};
          64 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            a.$set(r);
          const s = {};
          64 & t &&
            (s.$$scope = {
              dirty: t,
              ctx: e,
            }),
            h.$set(s);
          const o = {};
          64 & t &&
            (o.$$scope = {
              dirty: t,
              ctx: e,
            }),
            m.$set(o);
          const z = {};
          64 & t &&
            (z.$$scope = {
              dirty: t,
              ctx: e,
            }),
            ml.$set(z);
        },
        i(e) {
          v ||
            (Z(i.$$.fragment, e),
            Z(a.$$.fragment, e),
            Z(h.$$.fragment, e),
            Z(m.$$.fragment, e),
            Z(ml.$$.fragment, e),
            (v = !0));
        },
        o(e) {
          q(i.$$.fragment, e),
            q(a.$$.fragment, e),
            q(h.$$.fragment, e),
            q(m.$$.fragment, e),
            q(ml.$$.fragment, e),
            (v = !1);
        },
        d(e) {
          e && y(t), te(i), te(a), te(h), te(m), te(ml);
        },
      }
    );
  }

  function _e(e) {
    const t = A();

    function n(e, n, r) {
      t("modal", {
        name: e,
        title: n,
        hasFrame: r,
      });
    }
    return [
      n,
      () => {
        n("info", "about"),
          pe("clickInfo", {
            name: "clickInfo",
          });
      },
      () => {
        n("donate", "support"),
          pe("clickDonate", {
            name: "clickDonate",
          });
      },
      () => {
        n("results", "stats"),
          pe("clickStats", {
            name: "clickStats",
          });
      },
      () => {
        n("help", "how to play"),
          pe("clickHelp", {
            name: "clickHelp",
          });
      },
      () => {
        n("music-list", "song list"),
          pe("clickMusicList", {
            name: "clickMusicList",
          });
      },
    ];
  }
  class xe extends se {
    constructor(e) {
      super(), re(this, e, _e, ke, i, {});
    }
  }

  function be(e, t, n) {
    const r = e.slice();
    return (r[5] = t[n]), (r[7] = n), r;
  }

  function Se(e) {
    let t,
      n = Array(e[3]),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = Pe(be(e, n, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < r.length; e += 1) r[e].c();
        M(t, "class", "p-3 flex-col items-evenly");
      },
      m(e, n) {
        g(e, t, n);
        for (let e = 0; e < r.length; e += 1) r[e].m(t, null);
      },
      p(e, s) {
        if (9 & s) {
          let i;
          for (n = Array(e[3]), i = 0; i < n.length; i += 1) {
            const o = be(e, n, i);
            r[i] ? r[i].p(o, s) : ((r[i] = Pe(o)), r[i].c(), r[i].m(t, null));
          }
          for (; i < r.length; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        e && y(t), v(r, e);
      },
    };
  }

  function Me(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h = e[1].img && Ae(e),
      f = e[1].artist && Le(e);
    return {
      c() {
        (t = w("div")),
          (n = w("a")),
          (r = w("div")),
          h && h.c(),
          (s = x()),
          (i = w("div")),
          f && f.c(),
          (o = x()),
          (a = w("div")),
          (a.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="14"><defs><linearGradient id="logo_hover_20" x1="0%" y1="0%" x2="0%" y2="100%" spreadMethod="pad"><stop offset="0%" stop-color="#ff7700" stop-opacity="1"></stop><stop offset="100%" stop-color="#ff3300" stop-opacity="1"></stop></linearGradient></defs><path class="text-custom-fg" fill="currentColor" d="M10.517 3.742c-.323 0-.49.363-.49.582 0 0-.244 3.591-.244 4.641 0 1.602.15 2.621.15 2.621 0 .222.261.401.584.401.321 0 .519-.179.519-.401 0 0 .398-1.038.398-2.639 0-1.837-.153-4.127-.284-4.592-.112-.395-.313-.613-.633-.613zm-1.996.268c-.323 0-.49.363-.49.582 0 0-.244 3.322-.244 4.372 0 1.602.119 2.621.119 2.621 0 .222.26.401.584.401.321 0 .581-.179.581-.401 0 0 .081-1.007.081-2.608 0-1.837-.206-4.386-.206-4.386 0-.218-.104-.581-.425-.581zm-2.021 1.729c-.324 0-.49.362-.49.582 0 0-.272 1.594-.272 2.644 0 1.602.179 2.559.179 2.559 0 .222.229.463.552.463.321 0 .519-.241.519-.463 0 0 .19-.944.19-2.546 0-1.837-.253-2.657-.253-2.657 0-.22-.104-.582-.425-.582zm-2.046-.358c-.323 0-.49.363-.49.582 0 0-.162 1.92-.162 2.97 0 1.602.069 2.496.069 2.496 0 .222.26.557.584.557.321 0 .581-.304.581-.526 0 0 .143-.936.143-2.538 0-1.837-.206-2.96-.206-2.96 0-.218-.198-.581-.519-.581zm-2.169 1.482c-.272 0-.232.218-.232.218v3.982s-.04.335.232.335c.351 0 .716-.832.716-2.348 0-1.245-.436-2.187-.716-2.187zm18.715-.976c-.289 0-.567.042-.832.116-.417-2.266-2.806-3.989-5.263-3.989-1.127 0-2.095.705-2.931 1.316v8.16s0 .484.5.484h8.526c1.655 0 3-1.55 3-3.155 0-1.607-1.346-2.932-3-2.932zm10.17.857c-1.077-.253-1.368-.389-1.368-.815 0-.3.242-.611.97-.611.621 0 1.106.253 1.542.699l.981-.951c-.641-.669-1.417-1.067-2.474-1.067-1.339 0-2.425.757-2.425 1.99 0 1.338.873 1.736 2.124 2.026 1.281.291 1.513.486 1.513.923 0 .514-.379.738-1.184.738-.65 0-1.26-.223-1.736-.777l-.98.873c.514.757 1.504 1.232 2.639 1.232 1.853 0 2.668-.873 2.668-2.163 0-1.477-1.193-1.845-2.27-2.097zm6.803-2.745c-1.853 0-2.949 1.435-2.949 3.502s1.096 3.501 2.949 3.501c1.852 0 2.949-1.434 2.949-3.501s-1.096-3.502-2.949-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.096 0 1.551.94 1.551 2.153.001 1.213-.454 2.153-1.551 2.153zm8.939-1.736c0 1.086-.533 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.897h-1.358v3.916c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.754-1.136 2.754-3.103v-3.897h-1.358v3.916zm8.142-.89l.019 1.485c-.087-.174-.31-.515-.475-.768l-2.703-3.692h-1.362v6.894h1.401v-2.988l-.02-1.484c.088.175.311.514.475.767l2.79 3.705h1.213v-6.894h-1.339v2.975zm5.895-2.923h-2.124v6.791h2.027c1.746 0 3.474-1.01 3.474-3.395 0-2.484-1.437-3.396-3.377-3.396zm-.097 5.472h-.67v-4.152h.719c1.436 0 2.028.688 2.028 2.076 0 1.242-.651 2.076-2.077 2.076zm7.909-4.229c.611 0 1 .271 1.242.737l1.26-.582c-.426-.883-1.202-1.503-2.483-1.503-1.775 0-3.016 1.435-3.016 3.502 0 2.143 1.191 3.501 2.968 3.501 1.232 0 2.047-.572 2.513-1.533l-1.145-.68c-.358.602-.718.864-1.329.864-1.019 0-1.611-.932-1.611-2.153-.001-1.261.583-2.153 1.601-2.153zm5.17-1.192h-1.359v6.791h4.083v-1.338h-2.724v-5.453zm6.396-.157c-1.854 0-2.949 1.435-2.949 3.502s1.095 3.501 2.949 3.501c1.853 0 2.95-1.434 2.95-3.501s-1.097-3.502-2.95-3.502zm0 5.655c-1.097 0-1.553-.941-1.553-2.153 0-1.213.456-2.153 1.553-2.153 1.095 0 1.55.94 1.55 2.153.001 1.213-.454 2.153-1.55 2.153zm8.557-1.736c0 1.086-.532 1.756-1.396 1.756-.864 0-1.388-.689-1.388-1.775v-3.794h-1.358v3.813c0 1.978 1.106 3.084 2.746 3.084 1.726 0 2.755-1.136 2.755-3.103v-3.794h-1.36v3.813zm5.449-3.907h-2.318v6.978h2.211c1.908 0 3.789-1.037 3.789-3.489 0-2.552-1.565-3.489-3.682-3.489zm-.108 5.623h-.729v-4.266h.783c1.565 0 2.21.706 2.21 2.133.001 1.276-.707 2.133-2.264 2.133z"></path></svg>'),
          (l = x()),
          (u = w("div")),
          (u.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>'),
          M(i, "class", "flex-1 mx-3 text-white"),
          M(a, "class", "text-center flex justify-center"),
          M(r, "class", "p-2 flex items-center rounded-sm"),
          Y(r, "bg-custom-positive", e[2].gotCorrect),
          Y(r, "bg-custom-mg", !e[2].gotCorrect),
          M(n, "href", (c = e[1].url)),
          M(
            n,
            "title",
            (d =
              "Listen to " +
              e[1].artist +
              " - " +
              e[1].title +
              " on SoundCloud")
          ),
          M(n, "class", "no-underline"),
          M(t, "class", "p-3 pb-0 flex-col items-evenly");
      },
      m(e, c) {
        g(e, t, c),
          p(t, n),
          p(n, r),
          h && h.m(r, null),
          p(r, s),
          p(r, i),
          f && f.m(i, null),
          p(r, o),
          p(r, a),
          p(r, l),
          p(r, u);
      },
      p(e, t) {
        e[1].img
          ? h
            ? h.p(e, t)
            : ((h = Ae(e)), h.c(), h.m(r, s))
          : h && (h.d(1), (h = null)),
          e[1].artist
            ? f
              ? f.p(e, t)
              : ((f = Le(e)), f.c(), f.m(i, null))
            : f && (f.d(1), (f = null)),
          4 & t && Y(r, "bg-custom-positive", e[2].gotCorrect),
          4 & t && Y(r, "bg-custom-mg", !e[2].gotCorrect),
          2 & t && c !== (c = e[1].url) && M(n, "href", c),
          2 & t &&
            d !==
              (d =
                "Listen to " +
                e[1].artist +
                " - " +
                e[1].title +
                " on SoundCloud") &&
            M(n, "title", d);
      },
      d(e) {
        e && y(t), h && h.d(), f && f.d();
      },
    };
  }

  function $e(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-5 h-5");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function De(e) {
    let t, n, r;

    function s(e, t) {
      return e[0][e[7]].isCorrect || e[0][e[7]].isSkipped
        ? e[0][e[7]].isSkipped
          ? Te
          : void 0
        : Ye;
    }
    let i = s(e),
      o = i && i(e);

    function a(e, t) {
      return e[0][e[7]].isSkipped ? Oe : Ce;
    }
    let l = a(e),
      u = l(e);
    return {
      c() {
        (t = w("div")),
          o && o.c(),
          (n = x()),
          (r = w("div")),
          u.c(),
          M(t, "class", "mr-2"),
          M(r, "class", "flex flex-1 justify-between items-center");
      },
      m(e, s) {
        g(e, t, s), o && o.m(t, null), g(e, n, s), g(e, r, s), u.m(r, null);
      },
      p(e, n) {
        i !== (i = s(e)) &&
          (o && o.d(1), (o = i && i(e)), o && (o.c(), o.m(t, null))),
          l === (l = a(e)) && u
            ? u.p(e, n)
            : (u.d(1), (u = l(e)), u && (u.c(), u.m(r, null)));
      },
      d(e) {
        e && y(t), o && o.d(), e && y(n), e && y(r), u.d();
      },
    };
  }

  function Te(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("rect")),
          M(n, "x", "3"),
          M(n, "y", "3"),
          M(n, "width", "18"),
          M(n, "height", "18"),
          M(n, "rx", "2"),
          M(n, "ry", "2"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "class", "text-custom-mg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ye(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "text-custom-negative"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Ce(e) {
    let t,
      n,
      r = e[0][e[7]].answer + "";
    return {
      c() {
        (t = w("div")), (n = _(r)), M(t, "class", "text-white text-sm");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      p(e, t) {
        1 & t && r !== (r = e[0][e[7]].answer + "") && $(n, r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Oe(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "SKIPPED"),
          M(n, "class", "text-custom-mg tracking-widest font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Pe(e) {
    let t, n;

    function r(e, t) {
      return e[7] < e[0].length ? De : $e;
    }
    let s = r(e),
      i = s(e);
    return {
      c() {
        (t = w("div")),
          i.c(),
          (n = x()),
          M(
            t,
            "class",
            "p-2 mb-2 border border-custom-mg flex items-center last:mb-0"
          ),
          Y(t, "border-custom-line", e[7] == e[0].length);
      },
      m(e, r) {
        g(e, t, r), i.m(t, null), p(t, n);
      },
      p(e, o) {
        s === (s = r(e)) && i
          ? i.p(e, o)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(t, n))),
          1 & o && Y(t, "border-custom-line", e[7] == e[0].length);
      },
      d(e) {
        e && y(t), i.d();
      },
    };
  }

  function Ae(e) {
    let t, n, r;
    return {
      c() {
        (t = w("img")),
          l(t.src, (n = e[1].img)) || M(t, "src", n),
          M(t, "class", "h-14 w-14 "),
          M(t, "alt", (r = e[1].artist + " - " + e[1].title));
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, s) {
        2 & s && !l(t.src, (n = e[1].img)) && M(t, "src", n),
          2 & s &&
            r !== (r = e[1].artist + " - " + e[1].title) &&
            M(t, "alt", r);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Le(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].artist + "",
      a = e[1].title + "";
    return {
      c() {
        (t = w("p")),
          (n = _(o)),
          (r = x()),
          (s = w("p")),
          (i = _(a)),
          M(t, "class", ""),
          M(s, "class", "text-sm ");
      },
      m(e, o) {
        g(e, t, o), p(t, n), g(e, r, o), g(e, s, o), p(s, i);
      },
      p(e, t) {
        2 & t && o !== (o = e[1].artist + "") && $(n, o),
          2 & t && a !== (a = e[1].title + "") && $(i, a);
      },
      d(e) {
        e && y(t), e && y(r), e && y(s);
      },
    };
  }

  function Ne(t) {
    let n;

    function r(e, t) {
      return e[2].hasFinished ? Me : Se;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function He(e, t, n) {
    let r,
      { userGuesses: s } = t,
      { maxAttempts: i } = t,
      { currentHeardle: o } = t,
      { todaysGame: a } = t;
    return (
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (s = e.userGuesses)),
          "maxAttempts" in e && n(4, (i = e.maxAttempts)),
          "currentHeardle" in e && n(1, (o = e.currentHeardle)),
          "todaysGame" in e && n(2, (a = e.todaysGame));
      }),
      (e.$$.update = () => {
        21 & e.$$.dirty &&
          n(3, (r = a.hasFinished && a.gotCorrect ? s.length : i));
      }),
      [s, o, a, r, i]
    );
  }
  class Ie extends se {
    constructor(e) {
      super(),
        re(this, e, He, Ne, i, {
          userGuesses: 0,
          maxAttempts: 4,
          currentHeardle: 1,
          todaysGame: 2,
        });
    }
  }

  function We(t) {
    let n, r;
    return {
      c() {
        (n = w("div")),
          (r = w("i")),
          M(r, "class", "gg-loadbar-sound svelte-15swa4o"),
          Y(r, "musicIsPlaying", t[0]),
          M(n, "class", "scale-150 transform relative");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && Y(r, "musicIsPlaying", e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Re(e, t, n) {
    let { musicIsPlaying: r } = t;
    return (
      (e.$$set = (e) => {
        "musicIsPlaying" in e && n(0, (r = e.musicIsPlaying));
      }),
      [r]
    );
  }
  class Fe extends se {
    constructor(e) {
      super(),
        re(this, e, Re, We, i, {
          musicIsPlaying: 0,
        });
    }
  }

  function Ge(t) {
    let n;
    return {
      c() {
        n = w("div");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ee extends se {
    constructor(e) {
      super(), re(this, e, null, Ge, i, {});
    }
  }
  const { document: je } = X;

  function Be(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function ze(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ue(e, t, n) {
    const r = e.slice();
    return (r[33] = t[n]), (r[35] = n), r;
  }

  function Ve(e) {
    let t, n, r, s;
    const i = [Ze, Ke],
      o = [];

    function a(e, t) {
      return e[13] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(t, "class", "text-sm text-center text-custom-line p-6");
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function Je(e) {
    let t, n, r, s;
    const i = [Qe, Xe],
      o = [];

    function a(e, t) {
      return e[9] ? 1 : 0;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Ke(t) {
    let n, r, s, i;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment),
            (r = x()),
            (s = w("p")),
            (s.textContent = "loading player");
        },
        m(e, t) {
          ee(n, e, t), g(e, r, t), g(e, s, t), (i = !0);
        },
        p: e,
        i(e) {
          i || (Z(n.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (i = !1);
        },
        d(e) {
          te(n, e), e && y(r), e && y(s);
        },
      }
    );
  }

  function Ze(e) {
    let t, n, r, s, i;
    return (
      (s = new ae({
        props: {
          $$slots: {
            default: [qe],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      s.$on("click", e[22]),
      {
        c() {
          (t = w("p")),
            (t.textContent =
              "Ugh! There was an error loading the player. Please reload and try again."),
            (n = x()),
            (r = w("div")),
            Q(s.$$.fragment),
            M(t, "class", "mb-3"),
            M(r, "class", "flex justify-center");
        },
        m(e, o) {
          g(e, t, o), g(e, n, o), g(e, r, o), ee(s, r, null), (i = !0);
        },
        p(e, t) {
          const n = {};
          128 & t[1] &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            s.$set(n);
        },
        i(e) {
          i || (Z(s.$$.fragment, e), (i = !0));
        },
        o(e) {
          q(s.$$.fragment, e), (i = !1);
        },
        d(e) {
          e && y(t), e && y(n), e && y(r), te(s);
        },
      }
    );
  }

  function qe(e) {
    let t, n;
    return {
      c() {
        (t = k("svg")),
          (n = k("path")),
          M(n, "d", "M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "24"),
          M(t, "height", "24"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round");
      },
      m(e, r) {
        g(e, t, r), p(t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Xe(t) {
    let n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c = t[4].gameIsActive && et(t);
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"></path></svg>'),
          (o = x()),
          (a = w("div")),
          (l = w("p")),
          (l.textContent =
            "Oh no! Seems like today's track is unavailable on\n                            SoundCloud in your location"),
          (u = x()),
          c && c.c(),
          M(i, "class", "mr-3"),
          M(l, "class", "text-sm "),
          M(s, "class", "flex items-center"),
          M(r, "class", "p-3 mb-3 bg-custom-mg rounded-sm"),
          M(n, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(r, s),
          p(s, i),
          p(s, o),
          p(s, a),
          p(a, l),
          p(a, u),
          c && c.m(a, null);
      },
      p(e, t) {
        e[4].gameIsActive
          ? c
            ? c.p(e, t)
            : ((c = et(e)), c.c(), c.m(a, null))
          : c && (c.d(1), (c = null));
      },
      i: e,
      o: e,
      d(e) {
        e && y(n), c && c.d();
      },
    };
  }

  function Qe(e) {
    let t,
      n,
      r,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      v,
      k,
      b,
      volumeControl,
      S,
      D,
      Y,
      C,
      O,
      P,
      A = mt(e[11]) + "",
      L =
        mt(
          e[15]
            ? e[4].isPrime
              ? e[8].slice(-1)[0]
              : e[2].maxAttempts * e[2].attemptInterval
            : e[3]
        ) + "",
      N = !e[12] && 1 == e[0] && tt();
    function H(e, t) {
      return e[4].isPrime ? rt : nt;
    }
    let I = H(e),
      W = I(e);
    return (
      (D = new ae({
        props: {
          $$slots: {
            default: [ht],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      D.$on("click", function () {
        s(e[18] ? e[6] : e[5]) && (e[18] ? e[6] : e[5]).apply(this, arguments);
      }),
      {
        c() {
          N && N.c(),
            (t = x()),
            (n = w("div")),
            (r = w("div")),
            (i = w("div")),
            (o = w("div")),
            (a = w("div")),
            (l = x()),
            W.c(),
            (u = x()),
            (c = w("div")),
            (d = w("div")),
            (h = w("div")),
            (f = w("div")),
            (m = w("div")),
            (v = w("div")),
            (k = _(A)),
            (b = x()),
            (volumeDiv = w("div")),
            (volumeIcon = w("button")),
            M(volumeIcon, "style", "margin-right: 15px; border: none;"),
            (volumeSvg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            )),
            M(volumeSvg, "viewBox", "0 0 24 24"),
            M(volumeSvg, "width", "24"),
            M(volumeSvg, "height", "24"),
            (volumeSvg.innerHTML =
              "<path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' style='fill: white;'></path>"),
            M(volumeSvg, "class", "volume-icon"),
            M(volumeDiv, "class", "item2"),
            M(volumeDiv, "style", "display: flex; align-items: center;"),
            (volumeControl = w("div")),
            M(volumeControl, "class", "volume-control"),
            (S = w("div")),
            Q(D.$$.fragment),
            (Y = x()),
            (C = w("div")),
            (O = _(L)),
            M(a, "class", "h-full absolute bg-custom-positive"),
            T(a, "width", e[10] + "%"),
            M(o, "class", "h-full absolute bg-custom-mg overflow-hidden"),
            T(o, "width", (e[15] ? e[16] : "100") + "%"),
            M(i, "class", "h-3 w-full relative overflow-hidden "),
            M(r, "class", "max-w-screen-sm w-full mx-auto px-3 flex-col"),
            M(n, "class", "border-t border-custom-line"),
            M(m, "class", "flex items-center item1"),
            M(S, "class", "flex justify-center items-center p-1 item3"),
            M(f, "class", "container"),
            M(C, "class", "item4 "),
            M(h, "class", "px-3 "),
            M(d, "class", "max-w-screen-sm w-full mx-auto flex-col"),
            M(c, "class", "border-t border-custom-line");
        },
        m(e, s) {
          N && N.m(e, s),
            g(e, t, s),
            g(e, n, s),
            p(n, r),
            p(r, i),
            p(i, o),
            p(o, a),
            p(i, l),
            W.m(i, null),
            g(e, u, s),
            g(e, c, s),
            p(c, d),
            p(d, h),
            p(h, f),
            p(f, m),
            p(m, v);
          
            f.classList.add("with-volume");
            p(f, volumeDiv), p(volumeDiv, volumeIcon), p(volumeIcon, volumeSvg);

            // Create the slider container
            const sliderContainer = document.createElement("div");
            sliderContainer.className = "volume-control";
            p(volumeDiv, sliderContainer);

            // Create the slider
            const slider = document.createElement("div");
            slider.className = "slider";
            slider.setAttribute("role", "slider");
            slider.setAttribute("aria-label", "Volume");
            slider.setAttribute("aria-valuemin", "0");
            slider.setAttribute("aria-valuemax", "100");
            slider.setAttribute("aria-valuenow", "50");
            slider.setAttribute("tabindex", "0");
            p(sliderContainer, slider);

            // Create the slider fill
            const sliderFill = document.createElement("div");
            sliderFill.className = "slider-fill";
            p(slider, sliderFill);

            // Create the slider thumb
            const sliderThumb = document.createElement("div");
            sliderThumb.className = "slider-thumb";
            p(slider, sliderThumb);

            let isDragging = false;

            const startDragging = () => {
              isDragging = true;
              volumeIcon.style.pointerEvents = "none";
            };

            const stopDragging = () => {
              isDragging = false;
              volumeIcon.style.pointerEvents = "auto";
            };

            const updateSlider = (clientX) => {
              const rect = slider.getBoundingClientRect();
              let value = Math.max(
                0,
                Math.min(100, ((clientX - rect.left) / rect.width) * 100)
              );
              value = Math.round(value);
              sliderFill.style.width = `${value}%`;
              sliderThumb.style.left = `${value}%`;
              slider.setAttribute("aria-valuenow", value);

              // Update volume for SoundCloud widget
              if (window.SC && window.SC.Widget) {
                const widget = SC.Widget(document.querySelector("iframe"));
                widget.setVolume(value);
              }

              // Update mute icon
              updateMuteIcon(value);
            };

            const updateMuteIcon = (value) => {
              const path = volumeSvg.querySelector("path");
              let line = volumeSvg.querySelector("line");

              if (value === 0) {
                if (!line) {
                  line = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                  );
                  line.setAttribute("x1", "1");
                  line.setAttribute("y1", "1");
                  line.setAttribute("x2", "23");
                  line.setAttribute("y2", "23");
                  line.setAttribute("style", "stroke: white; stroke-width: 2");
                  volumeSvg.appendChild(line);
                }
              } else {
                if (line) {
                  volumeSvg.removeChild(line);
                }
              }

              // Update the path (if needed)
              path.setAttribute(
                "d",
                "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
              );
              path.setAttribute("style", "fill: white");
            };

            slider.addEventListener("mousedown", (e) => {
              if (isDragging) {
                e.preventDefault();
                e.stopPropagation();
              }
              isDragging = true;
              updateSlider(e.clientX);
              e.preventDefault(); // Prevent text selection
            });

            document.addEventListener("mousemove", (e) => {
              if (isDragging) {
                updateSlider(e.clientX);
                e.preventDefault(); // Prevent text selection
              }
            });

            document.addEventListener("mouseup", () => {
              isDragging = false;
            });

            slider.addEventListener("click", (e) => {
              updateSlider(e.clientX);
            });

            slider.addEventListener("keydown", (e) => {
              let value = parseInt(slider.getAttribute("aria-valuenow"));
              switch (e.key) {
                case "ArrowRight":
                case "ArrowUp":
                  value = Math.min(100, value + 5);
                  break;
                case "ArrowLeft":
                case "ArrowDown":
                  value = Math.max(0, value - 5);
                  break;
                case "Home":
                  value = 0;
                  break;
                case "End":
                  value = 100;
                  break;
                default:
                  return;
              }
              updateSlider(
                slider.getBoundingClientRect().left +
                  (value / 100) * slider.offsetWidth
              );
              e.preventDefault();
            });

            volumeIcon.addEventListener("click", () => {
              const currentValue = parseInt(
                slider.getAttribute("aria-valuenow")
              );
              updateSlider(
                slider.getBoundingClientRect().left +
                  ((currentValue === 0 ? 50 : 0) / 100) * slider.offsetWidth
              );
            });

            // === TOUCH EVENTS (para móvil) ===

            slider.addEventListener("touchstart", (e) => {
              isDragging = true;
              const touch = e.touches[0];
              updateSlider(touch.clientX);
              e.preventDefault();
            });

            slider.addEventListener("touchmove", (e) => {
              if (!isDragging) return;
              const touch = e.touches[0];
              updateSlider(touch.clientX);
              e.preventDefault();
            });

            slider.addEventListener("touchend", () => {
              isDragging = false;
            });


            // Initialize slider
            updateSlider(
              slider.getBoundingClientRect().left +
                (50 / 100) * slider.offsetWidth
            );

          p(v, k),
            p(f, b),
            p(f, S),
            ee(D, S, null),
            p(f, Y),
            p(f, C),
            p(C, O),
            (P = !0);
        },
        p(n, r) {
          (e = n)[12] || 1 != e[0]
            ? N && (N.d(1), (N = null))
            : N || ((N = tt()), N.c(), N.m(t.parentNode, t)),
            (!P || 1024 & r[0]) && T(a, "width", e[10] + "%"),
            (!P || 98304 & r[0]) &&
              T(o, "width", (e[15] ? e[16] : "100") + "%"),
            I === (I = H(e)) && W
              ? W.p(e, r)
              : (W.d(1), (W = I(e)), W && (W.c(), W.m(i, null))),
            (!P || 2048 & r[0]) && A !== (A = mt(e[11]) + "") && $(k, A);
          const s = {};
          (262144 & r[0]) | (128 & r[1]) &&
            (s.$$scope = {
              dirty: r,
              ctx: e,
            }),
            D.$set(s),
            (!P || 33052 & r[0]) &&
              L !==
                (L =
                  mt(
                    e[15]
                      ? e[4].isPrime
                        ? e[8].slice(-1)[0]
                        : e[2].maxAttempts * e[2].attemptInterval
                      : e[3]
                  ) + "") &&
              $(O, L);
        },
        i(e) {
          P || (Z(D.$$.fragment, e), (P = !0));
        },
        o(e) {
          q(D.$$.fragment, e), (P = !1);
        },
        d(e) {
          N && N.d(e), e && y(t), e && y(n), W.d(), e && y(u), e && y(c), te(D);
        },
      }
    );
  }

  function et(e) {
    let t, n, r, s, i, o;
    return {
      c() {
        (t = w("p")),
          (n = _("We're really sorry. The answer is ")),
          (r = w("a")),
          (s = _("here")),
          (o = _(
            ", though, if you want to maintain your streak.\n                                We won't tell..."
          )),
          M(r, "href", (i = e[1].url)),
          M(t, "class", "text-xs text-custom-line pt-1");
      },
      m(e, i) {
        g(e, t, i), p(t, n), p(t, r), p(r, s), p(t, o);
      },
      p(e, t) {
        2 & t[0] && i !== (i = e[1].url) && M(r, "href", i);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function tt(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.innerHTML =
            '<p><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxUJim5qdg2uv3-cYTT2T13R5k7VUfmvJ3V0wjD_aLedvTZwj70GBsCrBOSrimiEhgFfCxiU4n6UFY/pubhtml">Click Here or on the top right for the full list of Zelda Heardle songs.</p> \n\n <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>'),
          M(
            t,
            "class",
            "text-center p-3 flex flex-col items-center text-sm text-custom-line"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function nt(e) {
    let t;

    function n(e, t) {
      return e[15] ? st : it;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        (t = w("div")),
          s.c(),
          M(t, "class", "flex w-full h-full absolute justify-between");
      },
      m(e, n) {
        g(e, t, n), s.m(t, null);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t, null)));
      },
      d(e) {
        e && y(t), s.d();
      },
    };
  }

  function rt(e) {
    let t,
      n = e[15] && lt(e);
    return {
      c() {
        (t = w("div")), n && n.c(), M(t, "class", "w-full h-full absolute");
      },
      m(e, r) {
        g(e, t, r), n && n.m(t, null);
      },
      p(e, r) {
        e[15]
          ? n
            ? n.p(e, r)
            : ((n = lt(e)), n.c(), n.m(t, null))
          : n && (n.d(1), (n = null));
      },
      d(e) {
        e && y(t), n && n.d();
      },
    };
  }

  function st(e) {
    let t,
      n = Array(e[2].maxAttempts + 1),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = ot(Be(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (4 & s[0]) {
          const s = n.length;
          let i;
          for (n = Array(e[2].maxAttempts + 1), i = s; i < n.length; i += 1)
            Be(e, n, i),
              r[i] || ((r[i] = ot()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function it(e) {
    let t,
      n = Array(Math.floor(e[3] / e[2].attemptInterval)),
      r = [];
    for (let t = 0; t < n.length; t += 1) r[t] = at(ze(e, n, t));
    return {
      c() {
        for (let e = 0; e < r.length; e += 1) r[e].c();
        t = b();
      },
      m(e, n) {
        for (let t = 0; t < r.length; t += 1) r[t].m(e, n);
        g(e, t, n);
      },
      p(e, s) {
        if (12 & s[0]) {
          const s = n.length;
          let i;
          for (
            n = Array(Math.floor(e[3] / e[2].attemptInterval)), i = s;
            i < n.length;
            i += 1
          )
            ze(e, n, i),
              r[i] || ((r[i] = at()), r[i].c(), r[i].m(t.parentNode, t));
          for (i = n.length; i < s; i += 1) r[i].d(1);
          r.length = n.length;
        }
      },
      d(e) {
        v(r, e), e && y(t);
      },
    };
  }

  function ot(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function at(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "bg-custom-bg w-px h-full");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function lt(e) {
    let t,
      n,
      r,
      s,
      i = e[8],
      o = [];
    for (let t = 0; t < i.length; t += 1) o[t] = ut(Ue(e, i, t));
    return {
      c() {
        (t = w("div")), (n = x());
        for (let e = 0; e < o.length; e += 1) o[e].c();
        (r = x()),
          (s = w("div")),
          M(t, "class", "bg-custom-line w-px h-full absolute right-0"),
          M(s, "class", "bg-custom-mg w-px h-full absolute right-0");
      },
      m(e, i) {
        g(e, t, i), g(e, n, i);
        for (let t = 0; t < o.length; t += 1) o[t].m(e, i);
        g(e, r, i), g(e, s, i);
      },
      p(e, t) {
        if (384 & t[0]) {
          let n;
          for (i = e[8], n = 0; n < i.length; n += 1) {
            const s = Ue(e, i, n);
            o[n]
              ? o[n].p(s, t)
              : ((o[n] = ut(s)), o[n].c(), o[n].m(r.parentNode, r));
          }
          for (; n < o.length; n += 1) o[n].d(1);
          o.length = i.length;
        }
      },
      d(e) {
        e && y(t), e && y(n), v(o, e), e && y(r), e && y(s);
      },
    };
  }

  function ut(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          M(t, "class", "w-px h-full absolute"),
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      m(e, n) {
        g(e, t, n);
      },
      p(e, n) {
        256 & n[0] &&
          T(t, "left", (e[8][e[35]] / e[8].slice(-1)[0]) * 100 + "%"),
          128 & n[0] && Y(t, "bg-custom-bg", e[35] < e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-mg", e[35] > e[7] - 1),
          128 & n[0] && Y(t, "bg-custom-line", e[35] == e[7] - 1);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function ct(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'),
          M(n, "class", "ml-1 relative z-10");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function dt(e) {
    let t, n, r;
    return (
      (n = new Fe({
        props: {
          musicIsPlaying: e[18],
        },
      })),
      {
        c() {
          (t = w("div")), Q(n.$$.fragment), M(t, "class", "relative z-10");
        },
        m(e, s) {
          g(e, t, s), ee(n, t, null), (r = !0);
        },
        p(e, t) {
          const r = {};
          262144 & t[0] && (r.musicIsPlaying = e[18]), n.$set(r);
        },
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          e && y(t), te(n);
        },
      }
    );
  }

  function ht(e) {
    let t, n, r, s;
    const i = [dt, ct],
      o = [];

    function a(e, t) {
      return e[18] ? 0 : 1;
    }
    return (
      (n = a(e)),
      (r = o[n] = i[n](e)),
      {
        c() {
          (t = w("div")),
            r.c(),
            M(
              t,
              "class",
              "flex justify-center items-center text-custom-fg h-14 w-14 border-2 rounded-full relative overflow-hidden"
            );
        },
        m(e, r) {
          g(e, t, r), o[n].m(t, null), (s = !0);
        },
        p(e, s) {
          let l = n;
          (n = a(e)),
            n === l
              ? o[n].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (r = o[n]),
                r ? r.p(e, s) : ((r = o[n] = i[n](e)), r.c()),
                Z(r, 1),
                r.m(t, null));
        },
        i(e) {
          s || (Z(r), (s = !0));
        },
        o(e) {
          q(r), (s = !1);
        },
        d(e) {
          e && y(t), o[n].d();
        },
      }
    );
  }

  function ft(e) {
    let t, n, r, s, i, o, a, u, c, d, h;
    const f = [Je, Ve],
      m = [];

    function v(e, t) {
      return e[17] ? 0 : 1;
    }
    return (
      (s = v(e)),
      (i = m[s] = f[s](e)),
      {
        c() {
          (t = w("script")),
            (r = x()),
            i.c(),
            (o = x()),
            (a = w("div")),
            (u = w("div")),
            l(t.src, (n = "https://w.soundcloud.com/player/api.js")) ||
              M(t, "src", "https://w.soundcloud.com/player/api.js"),
            M(a, "class", "hidden");
        },
        m(n, i) {
          p(je.head, t),
            g(n, r, i),
            m[s].m(n, i),
            g(n, o, i),
            g(n, a, i),
            p(a, u),
            e[23](u),
            (c = !0),
            d || ((h = S(t, "load", e[19])), (d = !0));
        },
        p(e, t) {
          let n = s;
          (s = v(e)),
            s === n
              ? m[s].p(e, t)
              : (J(),
                q(m[n], 1, 1, () => {
                  m[n] = null;
                }),
                K(),
                (i = m[s]),
                i ? i.p(e, t) : ((i = m[s] = f[s](e)), i.c()),
                Z(i, 1),
                i.m(o.parentNode, o));
        },
        i(e) {
          c || (Z(i), (c = !0));
        },
        o(e) {
          q(i), (c = !1);
        },
        d(n) {
          y(t),
            n && y(r),
            m[s].d(n),
            n && y(o),
            n && y(a),
            e[23](null),
            (d = !1),
            h();
        },
      }
    );
  }

  function mt(e) {
    var t = Math.floor(e / 6e4),
      n = ((e % 6e4) / 1e3).toFixed(0);
    return t + ":" + (n < 10 ? "0" : "") + n;
  }

  function pt(e, t, n) {
    let r, s, i, o, a, l, u;
    const c = A();
    let { currentAttempt: d } = t,
      { currentHeardle: h } = t,
      { config: f } = t,
      { trackDuration: m = 0 } = t,
      { gameState: p } = t,
      g = !1;
    var y;
    let v = 0,
      w = 0,
      k = !1,
      _ = !1,
      x = !1,
      b = !1,
      S = !1;
    const M = () => {
      y.seekTo(0), y.pause();
    };

    function $(e) {
      c("updatePlayerState", {
        musicIsPlaying: e,
      });
    }
    let D;

    function T() {
      (y = SC.Widget("soundcloud" + h.id)).bind(
        SC.Widget.Events.READY,
        function () {
          y.getCurrentSound(function (e) {
            "BLOCK" === e.policy && n(9, (g = !0)),
              c("updateSong", {
                currentSong: e,
              });
          }),
            y.bind(SC.Widget.Events.PAUSE, function () {
              $(!1);
            }),
            y.bind(SC.Widget.Events.PLAY, function () {
              b ||
                (pe("startGame", {
                  name: "startGame",
                }),
                pe("startGame#" + h.id, {
                  name: "startGame",
                }),
                (b = !0)),
                $(!0),
                n(12, (x = !0));
            }),
            y.bind(SC.Widget.Events.PLAY_PROGRESS, function (e) {
              n(11, (w = e.currentPosition)),
                1 == s
                  ? p.isPrime
                    ? (n(10, (v = (w / u) * 100)), w > u && M())
                    : (n(10, (v = (w / (d * f.attemptInterval)) * 100)),
                      w > d * f.attemptInterval && M())
                  : (n(10, (v = (w / m) * 100)), w > m && M());
            });
        }
      );
    }
    P(() => {
      const e = document.createElement("iframe");
      (e.name = h.id),
        (e.id = "soundcloud" + h.id),
        (e.allow = "autoplay"),
        (e.height = 0),
        (e.src =
          "https://w.soundcloud.com/player/?url=" + h.url + "&cache=" + h.id),
        D.appendChild(e),
        (_ = !0),
        k &&
          (setTimeout(() => {
            n(13, (S = !0));
          }, 6e3),
          T());
    });
    return (
      (e.$$set = (e) => {
        "currentAttempt" in e && n(0, (d = e.currentAttempt)),
          "currentHeardle" in e && n(1, (h = e.currentHeardle)),
          "config" in e && n(2, (f = e.config)),
          "trackDuration" in e && n(3, (m = e.trackDuration)),
          "gameState" in e && n(4, (p = e.gameState));
      }),
      (e.$$.update = () => {
        16 & e.$$.dirty[0] && n(18, (r = p.musicIsPlaying)),
          16 & e.$$.dirty[0] && n(15, (s = p.gameIsActive)),
          16 & e.$$.dirty[0] && n(17, (i = p.playerIsReady)),
          1 & e.$$.dirty[0] && n(7, (o = d)),
          4 & e.$$.dirty[0] && n(8, (a = f.attemptIntervalAlt)),
          405 & e.$$.dirty[0] &&
            n(
              16,
              (l = p.isPrime
                ? (a[o - 1] / a.slice(-1)[0]) * 100
                : (d / f.maxAttempts) * 100)
            ),
          384 & e.$$.dirty[0] && (u = a[o - 1]);
      }),
      [
        d,
        h,
        f,
        m,
        p,
        () => {
          y.seekTo(0), y.play();
        },
        M,
        o,
        a,
        g,
        v,
        w,
        x,
        S,
        D,
        s,
        l,
        i,
        r,
        function () {
          (k = !0),
            _ &&
              (setTimeout(() => {
                n(13, (S = !0));
              }, 6e3),
              T());
        },
        () => {
          y.toggle();
        },
        () => {
          y.seekTo(0), y.play();
        },
        () => {
          window.location.reload();
        },
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (D = e), n(14, D);
          });
        },
      ]
    );
  }
  class gt extends se {
    constructor(e) {
      super(),
        re(
          this,
          e,
          pt,
          ft,
          i,
          {
            currentAttempt: 0,
            currentHeardle: 1,
            config: 2,
            trackDuration: 3,
            gameState: 4,
            togglePlayState: 20,
            scPlay: 5,
            scPause: 6,
            resetAndPlay: 21,
          },
          null,
          [-1, -1]
        );
    }
    get togglePlayState() {
      return this.$$.ctx[20];
    }
    get scPlay() {
      return this.$$.ctx[5];
    }
    get scPause() {
      return this.$$.ctx[6];
    }
    get resetAndPlay() {
      return this.$$.ctx[21];
    }
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;

  function yt(e) {
    var t = {
      exports: {},
    };
    return e(t, t.exports), t.exports;
  }

  function vt(e) {
    throw new Error(
      'Could not dynamically require "' +
        e +
        '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
    );
  }
  var wt = yt(function (e, t) {
      var n;
      (n = function () {
        function e(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }

        function t(t) {
          for (var n = 1; n < arguments.length; n++) {
            var s = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? e(Object(s), !0).forEach(function (e) {
                  r(t, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
              : e(Object(s)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(s, e)
                  );
                });
          }
          return t;
        }

        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }

        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }

        function s(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return o(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            i(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }

        function i(e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? o(e, t)
                : void 0
            );
          }
        }

        function o(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var a = function (e) {
            return "string" == typeof e ? document.querySelector(e) : e();
          },
          l = function (e, t) {
            var n = "string" == typeof e ? document.createElement(e) : e;
            for (var r in t) {
              var s = t[r];
              if ("inside" === r) s.append(n);
              else if ("dest" === r) a(s[0]).insertAdjacentElement(s[1], n);
              else if ("around" === r) {
                var i = s;
                i.parentNode.insertBefore(n, i),
                  n.append(i),
                  null != i.getAttribute("autofocus") && i.focus();
              } else r in n ? (n[r] = s) : n.setAttribute(r, s);
            }
            return n;
          },
          u = function (e, t) {
            return (
              (e = e.toString().toLowerCase()),
              t
                ? e
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .normalize("NFC")
                : e
            );
          },
          c = function (e, n) {
            return l(
              "mark",
              t(
                {
                  innerHTML: e,
                },
                "string" == typeof n && {
                  class: n,
                }
              )
            ).outerHTML;
          },
          d = function (e, t) {
            t.input.dispatchEvent(
              new CustomEvent(e, {
                bubbles: !0,
                detail: t.feedback,
                cancelable: !0,
              })
            );
          },
          h = function (e, t, n) {
            var r = n || {},
              s = r.mode,
              i = r.diacritics,
              o = r.highlight,
              a = u(t, i);
            if (((t = t.toString()), (e = u(e, i)), "loose" === s)) {
              var l = (e = e.replace(/ /g, "")).length,
                d = 0,
                h = Array.from(t)
                  .map(function (t, n) {
                    return (
                      d < l && a[n] === e[d] && ((t = o ? c(t, o) : t), d++), t
                    );
                  })
                  .join("");
              if (d === l) return h;
            } else {
              var f = a.indexOf(e);
              if (~f)
                return (
                  (e = t.substring(f, f + e.length)),
                  o ? t.replace(e, c(e, o)) : t
                );
            }
          },
          f = function (e, t) {
            return new Promise(function (n, r) {
              var s;
              return (s = e.data).cache && s.store
                ? n()
                : new Promise(function (e, n) {
                    return "function" == typeof s.src
                      ? s.src(t).then(e, n)
                      : e(s.src);
                  }).then(function (t) {
                    try {
                      return (e.feedback = s.store = t), d("response", e), n();
                    } catch (e) {
                      return r(e);
                    }
                  }, r);
            });
          },
          m = function (e, t) {
            var n = t.data,
              r = t.searchEngine,
              s = [];
            n.store.forEach(function (o, a) {
              var l = function (n) {
                var i = n ? o[n] : o,
                  a =
                    "function" == typeof r
                      ? r(e, i)
                      : h(e, i, {
                          mode: r,
                          diacritics: t.diacritics,
                          highlight: t.resultItem.highlight,
                        });
                if (a) {
                  var l = {
                    match: a,
                    value: o,
                  };
                  n && (l.key = n), s.push(l);
                }
              };
              if (n.keys) {
                var u,
                  c = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (Array.isArray(e) || (n = i(e))) {
                        n && (e = n);
                        var r = 0,
                          s = function () {};
                        return {
                          s: s,
                          n: function () {
                            return r >= e.length
                              ? {
                                  done: !0,
                                }
                              : {
                                  done: !1,
                                  value: e[r++],
                                };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: s,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var o,
                      a = !0,
                      l = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (a = e.done), e;
                      },
                      e: function (e) {
                        (l = !0), (o = e);
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return();
                        } finally {
                          if (l) throw o;
                        }
                      },
                    };
                  })(n.keys);
                try {
                  for (c.s(); !(u = c.n()).done; ) l(u.value);
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              } else l();
            }),
              n.filter && (s = n.filter(s));
            var o = s.slice(0, t.resultsList.maxResults);
            (t.feedback = {
              query: e,
              matches: s,
              results: o,
            }),
              d("results", t);
          },
          p = "aria-expanded",
          g = "aria-activedescendant",
          y = "aria-selected",
          v = function (e, n) {
            e.feedback.selection = t(
              {
                index: n,
              },
              e.feedback.results[n]
            );
          },
          w = function (e) {
            e.isOpen ||
              ((e.wrapper || e.input).setAttribute(p, !0),
              e.list.removeAttribute("hidden"),
              (e.isOpen = !0),
              d("open", e));
          },
          k = function (e) {
            e.isOpen &&
              ((e.wrapper || e.input).setAttribute(p, !1),
              e.input.setAttribute(g, ""),
              e.list.setAttribute("hidden", ""),
              (e.isOpen = !1),
              d("close", e));
          },
          _ = function (e, t) {
            var n = t.resultItem,
              r = t.list.getElementsByTagName(n.tag),
              i = !!n.selected && n.selected.split(" ");
            if (t.isOpen && r.length) {
              var o,
                a,
                l = t.cursor;
              e >= r.length && (e = 0),
                e < 0 && (e = r.length - 1),
                (t.cursor = e),
                l > -1 &&
                  (r[l].removeAttribute(y),
                  i && (a = r[l].classList).remove.apply(a, s(i))),
                r[e].setAttribute(y, !0),
                i && (o = r[e].classList).add.apply(o, s(i)),
                t.input.setAttribute(g, r[t.cursor].id),
                (t.list.scrollTop =
                  r[e].offsetTop - t.list.clientHeight + r[e].clientHeight + 5),
                (t.feedback.cursor = t.cursor),
                v(t, e),
                d("navigate", t);
            }
          },
          x = function (e) {
            _(e.cursor + 1, e);
          },
          b = function (e) {
            _(e.cursor - 1, e);
          },
          S = function (e, t, n) {
            (n = n >= 0 ? n : e.cursor) < 0 ||
              ((e.feedback.event = t), v(e, n), d("selection", e), k(e));
          };

        function M(e, n) {
          var r = this;
          return new Promise(function (s, i) {
            var o, a;
            return (
              (o =
                n ||
                ((a = e.input) instanceof HTMLInputElement ||
                a instanceof HTMLTextAreaElement
                  ? a.value
                  : a.innerHTML)),
              (function (e, t, n) {
                return t ? t(e) : e.length >= n;
              })((o = e.query ? e.query(o) : o), e.trigger, e.threshold)
                ? f(e, o).then(function (n) {
                    try {
                      return e.feedback instanceof Error
                        ? s()
                        : (m(o, e),
                          e.resultsList &&
                            (function (e) {
                              var n = e.resultsList,
                                r = e.list,
                                s = e.resultItem,
                                i = e.feedback,
                                o = i.matches,
                                a = i.results;
                              if (
                                ((e.cursor = -1),
                                (r.innerHTML = ""),
                                o.length || n.noResults)
                              ) {
                                var u = new DocumentFragment();
                                a.forEach(function (e, n) {
                                  var r = l(
                                    s.tag,
                                    t(
                                      {
                                        id: "".concat(s.id, "_").concat(n),
                                        role: "option",
                                        innerHTML: e.match,
                                        inside: u,
                                      },
                                      s.class && {
                                        class: s.class,
                                      }
                                    )
                                  );
                                  s.element && s.element(r, e);
                                }),
                                  r.append(u),
                                  n.element && n.element(r, i),
                                  w(e);
                              } else k(e);
                            })(e),
                          u.call(r));
                    } catch (e) {
                      return i(e);
                    }
                  }, i)
                : (k(e), u.call(r))
            );

            function u() {
              return s();
            }
          });
        }
        var $ = function (e, t) {
          for (var n in e) for (var r in e[n]) t(n, r);
        };

        function D(e) {
          var n = this;
          return new Promise(function (r, s) {
            var i, o, a;
            if (
              ((i = e.placeHolder),
              (a = {
                role: "combobox",
                "aria-owns": (o = e.resultsList).id,
                "aria-haspopup": !0,
                "aria-expanded": !1,
              }),
              l(
                e.input,
                t(
                  t(
                    {
                      "aria-controls": o.id,
                      "aria-autocomplete": "both",
                    },
                    i && {
                      placeholder: i,
                    }
                  ),
                  !e.wrapper && t({}, a)
                )
              ),
              e.wrapper &&
                (e.wrapper = l(
                  "div",
                  t(
                    {
                      around: e.input,
                      class: e.name + "_wrapper",
                    },
                    a
                  )
                )),
              o &&
                (e.list = l(
                  o.tag,
                  t(
                    {
                      dest: [o.destination, o.position],
                      id: o.id,
                      role: "listbox",
                      hidden: "hidden",
                    },
                    o.class && {
                      class: o.class,
                    }
                  )
                )),
              (function (e) {
                var n,
                  r,
                  s,
                  i = e.events,
                  o =
                    ((n = function () {
                      return M(e);
                    }),
                    (r = e.debounce),
                    function () {
                      clearTimeout(s),
                        (s = setTimeout(function () {
                          return n();
                        }, r));
                    }),
                  a = (e.events = t(
                    {
                      input: t({}, i && i.input),
                    },
                    e.resultsList && {
                      list: i ? t({}, i.list) : {},
                    }
                  )),
                  l = {
                    input: {
                      input: function () {
                        o();
                      },
                      keydown: function (t) {
                        !(function (e, t) {
                          switch (e.keyCode) {
                            case 40:
                            case 38:
                              e.preventDefault(),
                                40 === e.keyCode ? x(t) : b(t);
                              break;
                            case 13:
                              t.submit || e.preventDefault(),
                                t.cursor >= 0 && S(t, e);
                              break;
                            case 9:
                              t.resultsList.tabSelect &&
                                t.cursor >= 0 &&
                                S(t, e);
                              break;
                            case 27:
                              (t.input.value = ""), k(t);
                          }
                        })(t, e);
                      },
                      blur: function () {
                        k(e);
                      },
                    },
                    list: {
                      mousedown: function (e) {
                        e.preventDefault();
                      },
                      click: function (t) {
                        !(function (e, t) {
                          var n = t.resultItem.tag.toUpperCase(),
                            r = Array.from(t.list.querySelectorAll(n)),
                            s = e.target.closest(n);
                          s && s.nodeName === n && S(t, e, r.indexOf(s));
                        })(t, e);
                      },
                    },
                  };
                $(l, function (t, n) {
                  (e.resultsList || "input" === n) &&
                    (a[t][n] || (a[t][n] = l[t][n]));
                }),
                  $(a, function (t, n) {
                    e[t].addEventListener(n, a[t][n]);
                  });
              })(e),
              e.data.cache)
            )
              return f(e).then(function (e) {
                try {
                  return u.call(n);
                } catch (e) {
                  return s(e);
                }
              }, s);

            function u() {
              return d("init", e), r();
            }
            return u.call(n);
          });
        }

        function T(e) {
          var t = e.prototype;
          (t.init = function () {
            D(this);
          }),
            (t.start = function (e) {
              M(this, e);
            }),
            (t.unInit = function () {
              if (this.wrapper) {
                var e = this.wrapper.parentNode;
                e.insertBefore(this.input, this.wrapper),
                  e.removeChild(this.wrapper);
              }
              var t;
              $((t = this).events, function (e, n) {
                t[e].removeEventListener(n, t.events[e][n]);
              });
            }),
            (t.open = function () {
              w(this);
            }),
            (t.close = function () {
              k(this);
            }),
            (t.goTo = function (e) {
              _(e, this);
            }),
            (t.next = function () {
              x(this);
            }),
            (t.previous = function () {
              b(this);
            }),
            (t.select = function (e) {
              S(this, null, e);
            }),
            (t.search = function (e, t, n) {
              return h(e, t, n);
            });
        }
        return function e(t) {
          (this.options = t),
            (this.id = e.instances = (e.instances || 0) + 1),
            (this.name = "autoComplete"),
            (this.wrapper = 1),
            (this.threshold = 1),
            (this.debounce = 0),
            (this.resultsList = {
              position: "afterend",
              tag: "ul",
              maxResults: 5,
            }),
            (this.resultItem = {
              tag: "li",
            }),
            (function (e) {
              var t = e.name,
                r = e.options,
                s = e.resultsList,
                i = e.resultItem;
              for (var o in r)
                if ("object" === n(r[o]))
                  for (var l in (e[o] || (e[o] = {}), r[o])) e[o][l] = r[o][l];
                else e[o] = r[o];
              (e.selector = e.selector || "#" + t),
                (s.destination = s.destination || e.selector),
                (s.id = s.id || t + "_list_" + e.id),
                (i.id = i.id || t + "_result"),
                (e.input = a(e.selector));
            })(this),
            T.call(this, e),
            D(this);
        };
      }),
        (e.exports = n());
    }),
    kt = _t(2);

  function _t(e) {
    if (
      "number" != typeof e ||
      Number.isNaN(e) ||
      e < 1 ||
      e === Number.POSITIVE_INFINITY
    )
      throw new Error("`" + e + "` is not a valid argument for `n-gram`");
    return function (t) {
      var n,
        r,
        s = [];
      if (null == t) return s;
      if (((r = t.slice ? t : String(t)), (n = r.length - e + 1) < 1)) return s;
      for (; n--; ) s[n] = r.slice(n, n + e);
      return s;
    };
  }

  function xt(e, t) {
    let n, r, s, i;
    Array.isArray(e)
      ? (s = e.map((e) => String(e).toLowerCase()))
      : ((n = String(e).toLowerCase()), (s = 1 === n.length ? [n] : kt(n))),
      Array.isArray(t)
        ? (i = t.map((e) => String(e).toLowerCase()))
        : ((r = String(t).toLowerCase()), (i = 1 === r.length ? [r] : kt(r)));
    let o,
      a,
      l,
      u = -1,
      c = 0;
    for (; ++u < s.length; )
      for (o = s[u], l = -1; ++l < i.length; )
        if (((a = i[l]), o === a)) {
          c++, (i[l] = "");
          break;
        }
    return (2 * c) / (s.length + i.length);
  }

  function bt(t) {
    let n, r;
    return {
      c() {
        (n = _("Skip ")), (r = w("span")), (r.textContent = "(+1.5s)");
      },
      m(e, t) {
        g(e, n, t), g(e, r, t);
      },
      p: e,
      d(e) {
        e && y(n), e && y(r);
      },
    };
  }

  function St(e) {
    let t, n, r, s, i;
    return {
      c() {
        (t = _("Skip ")),
          (n = w("span")),
          (r = _("(+")),
          (s = _(e[0])),
          (i = _("s)")),
          M(n, "class", "tracking-normal lowercase"),
          Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), p(n, r), p(n, s), p(n, i);
      },
      p(e, t) {
        1 & t && $(s, e[0]), 3 & t && Y(n, "hidden", e[0] >= e[1].maxAttempts);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function Mt(e) {
    let t;

    function n(e, t) {
      return e[2] ? St : bt;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function $t(e) {
    let t;
    return {
      c() {
        t = _("Submit");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Dt(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, _, b, $, T, Y;
    return (
      (v = new ae({
        props: {
          secondary: !0,
          $$slots: {
            default: [Mt],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      v.$on("click", e[10]),
      (b = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [$t],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      b.$on("click", (ev) => {
        _onSubmit();
        e[5]();
      }),
      b.$on("click", e[5]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (s = w("div")),
            (i = w("div")),
            (o = k("svg")),
            (a = k("circle")),
            (l = k("line")),
            (u = x()),
            (c = w("input")),
            (d = x()),
            (h = w("div")),
            (h.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
            (f = x()),
            (m = w("div")),
            Q(v.$$.fragment),
            (_ = x()),
            Q(b.$$.fragment),
            M(a, "cx", "11"),
            M(a, "cy", "11"),
            M(a, "r", "8"),
            M(l, "x1", "21"),
            M(l, "y1", "21"),
            M(l, "x2", "16.65"),
            M(l, "y2", "16.65"),
            M(o, "class", "absolute top-4 left-3"),
            M(o, "xmlns", "http://www.w3.org/2000/svg"),
            M(o, "width", "18"),
            M(o, "height", "18"),
            M(o, "viewBox", "0 0 24 24"),
            M(o, "fill", "none"),
            M(o, "stroke", "currentColor"),
            M(o, "stroke-width", "2"),
            M(o, "stroke-linecap", "round"),
            M(o, "stroke-linejoin", "round"),
            M(
              c,
              "class",
              "focus:outline-none focus:border-custom-positive w-full p-3 pl-9 placeholder:text-custom-line bg-custom-bg text-custom-fg border-custom-mg"
            ),
            M(c, "id", "autoComplete"),
            M(c, "type", "search"),
            M(c, "dir", "ltr"),
            M(c, "spellcheck", "false"),
            M(c, "autocorrect", "off"),
            M(c, "autocomplete", "off"),
            M(c, "autocapitalize", "off"),
            M(h, "class", "absolute right-3 top-4"),
            M(i, "class", "autoComplete_wrapper relative"),
            M(m, "class", "flex justify-between pt-3"),
            M(n, "class", "m-3 mt-0"),
            M(t, "class", "max-w-screen-sm w-full mx-auto flex-col");
        },
        m(r, y) {
          g(r, t, y),
            p(t, n),
            p(n, s),
            p(s, i),
            p(i, o),
            p(o, a),
            p(o, l),
            p(i, u),
            p(i, c),
            D(c, e[4]),
            p(i, d),
            p(i, h),
            p(s, f),
            p(s, m),
            ee(v, m, null),
            p(m, _),
            ee(b, m, null),
            ($ = !0),
            T || ((Y = [S(c, "input", e[8]), S(h, "click", e[9])]), (T = !0));
        },
        p(e, [t]) {
          16 & t && D(c, e[4]);
          const n = {};
          32775 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            v.$set(n);
          const r = {};
          32768 & t &&
            (r.$$scope = {
              dirty: t,
              ctx: e,
            }),
            b.$set(r);
        },
        i(e) {
          $ || (Z(v.$$.fragment, e), Z(b.$$.fragment, e), ($ = !0));
        },
        o(e) {
          q(v.$$.fragment, e), q(b.$$.fragment, e), ($ = !1);
        },
        d(e) {
          e && y(t), te(v), te(b), (T = !1), r(Y);
        },
      }
    );
  }

  function Tt(e, t, n) {
    let r,
      { allOptions: s } = t,
      { currentAttempt: i } = t,
      { config: o } = t,
      { isPrime: a } = t;
    const l = {
        focus() {
          document.getElementById("autoComplete").focus();
        },
        clear() {
          (document.getElementById("autoComplete").value = ""), n(4, (r = ""));
        },
      },
      u = A();

    function c(e) {
      "skipped" == e
        ? (u("guess", {
            guess: r,
            isSkipped: !0,
          }),
          n(4, (r = "")))
        : void 0 !== r && "" !== r.trim()
        ? (u("guess", {
            guess: r,
            isSkipped: !1,
          }),
          n(4, (r = "")))
        : l.focus();
    }
    P(() => {
      !(function () {
        const e = new wt({
          placeHolder: "Know it? Search for the game / title",
          threshold: 1,
          wrapper: !1,
          resultsList: {
            maxResults: 100,
          },
          diacritics: !0,
          noresults: !0,
          searchEngine: "loose",
          data: {
            src: s,
            cache: !1,
            filter: (e) => {
              if (e.length < 6) return e;
              const t = document
                .getElementById("autoComplete")
                .value.toLowerCase();
              return (e = e.sort((e, n) => {
                let r = xt(t, e.value.toLowerCase()),
                  s = xt(t, n.value.toLowerCase());
                return r === s ? (e.value > n.value ? -1 : 1) : s > r ? 1 : -1;
              }));
            },
          },
          resultItem: {
            highlight: !0,
          },
          events: {
            focus: {
              focus: (e) => {},
            },
            input: {
              selection: (t) => {
                let s = t.detail.selection.value;
                (e.input.value = s), n(4, (r = s));
              },
            },
          },
        });
      })();
    });
    return (
      (e.$$set = (e) => {
        s.pop();
        // console.log('all', s)
        "allOptions" in e && n(6, (s = e.allOptions)),
          "currentAttempt" in e && n(0, (i = e.currentAttempt)),
          "config" in e && n(1, (o = e.config)),
          "isPrime" in e && n(2, (a = e.isPrime));
      }),
      [
        i,
        o,
        a,
        l,
        r,
        c,
        s,
        () => {
          soundcloudWidget.toggle();
        },
        function () {
          (r = this.value), n(4, r);
        },
        () => l.clear(),
        () => c("skipped"),
      ]
    );
  }
  _t(3);
  class Yt extends se {
    constructor(e) {
      super(),
        re(this, e, Tt, Dt, i, {
          allOptions: 6,
          currentAttempt: 0,
          config: 1,
          isPrime: 2,
          guessInput: 3,
          togglePlayState: 7,
        });
    }
    get guessInput() {
      return this.$$.ctx[3];
    }
    get togglePlayState() {
      return this.$$.ctx[7];
    }
  }

  function Ct(e) {
    let t, n, r, s, i, o, a, l, u, d, v, k;
    const b = e[6].default,
      D = c(b, e, e[5], null);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("h2")),
          (i = _(e[0])),
          (o = x()),
          (a = w("div")),
          (l = w("button")),
          (l.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (u = x()),
          D && D.c(),
          M(
            s,
            "class",
            "text-sm text-center uppercase text-custom-line font-semibold tracking-widest"
          ),
          M(r, "class", "flex-1 pl-7"),
          (l.autofocus = !0),
          M(l, "class", "border-none text-custom-mg"),
          M(a, "class", "justify-self-end flex"),
          M(n, "class", "flex items-center justify-center mb-6"),
          M(t, "class", "bg-custom-bg border border-custom-mg p-6 songlist-modal");
      },
      m(c, h) {
        g(c, t, h),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(n, o),
          p(n, a),
          p(a, l),
          p(t, u),
          D && D.m(t, null),
          (d = !0),
          l.focus(),
          v || ((k = S(l, "click", e[3])), (v = !0));
      },
      p(e, t) {
        (!d || 1 & t) && $(i, e[0]),
          D &&
            D.p &&
            (!d || 32 & t) &&
            f(D, b, e, e[5], d ? h(b, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        d || (Z(D, e), (d = !0));
      },
      o(e) {
        q(D, e), (d = !1);
      },
      d(e) {
        e && y(t), D && D.d(e), (v = !1), k();
      },
    };
  }

  function Ot(e) {
    let t, n, r, s, i;
    const o = e[6].default,
      a = c(o, e, e[5], null);
    return {
      c() {
        (t = w("button")),
          (t.innerHTML =
            '<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'),
          (n = x()),
          a && a.c(),
          (t.autofocus = !0),
          M(t, "class", "border-none text-custom-mg absolute right-3 top-3");
      },
      m(o, l) {
        g(o, t, l),
          g(o, n, l),
          a && a.m(o, l),
          (r = !0),
          t.focus(),
          s || ((i = S(t, "click", e[3])), (s = !0));
      },
      p(e, t) {
        a &&
          a.p &&
          (!r || 32 & t) &&
          f(a, o, e, e[5], r ? h(o, e[5], t, null) : m(e[5]), null);
      },
      i(e) {
        r || (Z(a, e), (r = !0));
      },
      o(e) {
        q(a, e), (r = !1);
      },
      d(e) {
        e && y(t), e && y(n), a && a.d(e), (s = !1), i();
      },
    };
  }

  function Pt(e) {
    let t, n, s, i, o, a, l, u, c;
    const d = [Ot, Ct],
      h = [];

    function f(e, t) {
      return 0 == e[1] ? 0 : 1;
    }
    return (
      (o = f(e)),
      (a = h[o] = d[o](e)),
      {
        c() {
          (t = w("div")),
            (n = x()),
            (s = w("div")),
            (i = w("div")),
            a.c(),
            M(
              t,
              "class",
              "modal-background p-3 flex justify-center svelte-1nyqrwd"
            ),
            M(
              i,
              "class",
              "pointer-events-auto modal w-full mx-auto top-20 relative rounded-sm "
            ),
            e[0] == "song list"
              ? M(
                  i,
                  "style",
                  "width: fit-content; height: calc(100% - 80px); overflow-y: scroll;"
                )
              : M(
                  i,
                  "class",
                  "pointer-events-auto modal max-w-screen-xs w-full mx-auto top-20 relative rounded-sm "
                ),
            M(i, "role", "dialog"),
            M(i, "aria-modal", "true"),
            M(
              s,
              "class",
              "modal-background p-3 pointer-events-none svelte-1nyqrwd"
            );
        },
        m(r, a) {
          g(r, t, a),
            g(r, n, a),
            g(r, s, a),
            p(s, i),
            h[o].m(i, null),
            e[7](i),
            (l = !0),
            u ||
              ((c = [S(window, "keydown", e[4]), S(t, "click", e[3])]),
              (u = !0));
        },
        p(e, [t]) {
          let n = o;
          (o = f(e)),
            o === n
              ? h[o].p(e, t)
              : (J(),
                q(h[n], 1, 1, () => {
                  h[n] = null;
                }),
                K(),
                (a = h[o]),
                a ? a.p(e, t) : ((a = h[o] = d[o](e)), a.c()),
                Z(a, 1),
                a.m(i, null));
        },
        i(e) {
          l || (Z(a), (l = !0));
        },
        o(e) {
          q(a), (l = !1);
        },
        d(i) {
          i && y(t), i && y(n), i && y(s), h[o].d(), e[7](null), (u = !1), r(c);
        },
      }
    );
  }

  function At(e, t, n) {
    let { $$slots: r = {}, $$scope: s } = t;
    const i = A(),
      o = () => i("close");
    let a,
      { title: l } = t,
      { hasFrame: u } = t;
    const c = "undefined" != typeof document && document.activeElement;
    var d;
    return (
      c &&
        ((d = () => {
          c.focus();
        }),
        O().$$.on_destroy.push(d)),
      (e.$$set = (e) => {
        "title" in e && n(0, (l = e.title)),
          "hasFrame" in e && n(1, (u = e.hasFrame)),
          "$$scope" in e && n(5, (s = e.$$scope));
      }),
      [
        l,
        u,
        a,
        o,
        (e) => {
          if ("Escape" !== e.key) {
            if ("Tab" === e.key) {
              const t = a.querySelectorAll("*"),
                n = Array.from(t).filter((e) => e.tabIndex >= 0);
              let r = n.indexOf(document.activeElement);
              -1 === r && e.shiftKey && (r = 0),
                (r += n.length + (e.shiftKey ? -1 : 1)),
                (r %= n.length),
                n[r].focus(),
                e.preventDefault();
            }
          } else o();
        },
        s,
        r,
        function (e) {
          H[e ? "unshift" : "push"](() => {
            (a = e), n(2, a);
          });
        },
      ]
    );
  }
  class Lt extends se {
    constructor(e) {
      super(),
        re(this, e, At, Pt, i, {
          title: 0,
          hasFrame: 1,
        });
    }
  }

  function Nt(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.innerHTML =
            '<p class="mb-3">This Zelda Heardle Infinite is my version of Zelda Heardle that has no daily limit and selects songs randomly so you can play as long as you want.</p>\n\n<p class="mb-3">Original code provided by <a href="https://ninjigalaxy.github.io/mario-heardle/">Mario Heardle</a>. Volume Slider and Scroll Bar code by <a href="https://github.com/morgvanny">morgvanny</a>. Song links from <a href="https://zeldaheardle.com/">original Zelda Heardle</a>.</p>\n\n<p class="mb-3">The full list of songs is available <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxUJim5qdg2uv3-cYTT2T13R5k7VUfmvJ3V0wjD_aLedvTZwj70GBsCrBOSrimiEhgFfCxiU4n6UFY/pubhtml">here.</a> </p> \n\n<p class="mb-3"> If you have any technical issues, you can contact me @layzeli on Discord, or by commenting on the previously linked Google Sheet. </p>'),
          M(n, "class", "text");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }
  class Ht extends se {
    constructor(e) {
      super(), re(this, e, null, Nt, i, {});
    }
  }

  function getGameOrArtistFromMusicName(musicNameList) {
    return musicNameList.map((a) => {
      const splited = a.split("-");
      return splited[splited.length - 1].trim();
    });
  }

  function MLt(t) {
  let n;
  const mapUrl = new Map();
  musicListWithLinks.forEach((m) => mapUrl.set(m.answer, m.url));

  const musicNameListFiltered = musicNameList.filter(
    (s) => s != "" && mapUrl.has(s)
  );

  const artistOrGame = getGameOrArtistFromMusicName(musicNameListFiltered);
  const diffArtist = artistOrGame.map((a, i) =>
    i > 0 ? artistOrGame[i - 1] !== a : false
  );

  return {
    c() {
      n = w("div");

      n.innerHTML =
        '<ul style="list-style-type:none; margin-left:0; padding-left:0; font-size:12px; display:block;">' +
        musicNameListFiltered
          .map((s, i) => {
            const [songName, gameName] = s.split(" - ");
            const url = mapUrl.get(s);

            const separator = diffArtist[i]
              ? `<li class="song-separator"></li>`
              : "";

            return `
              ${separator}
              <li>
                <div class="song-row">
                  <a target="_blank" href="${url}" class="song-link">${songName}</a>
                  <span class="song-game">${gameName}</span>
                </div>
              </li>
            `;
          })
          .join("") +
        "</ul>";

      M(n, "class", "text");
      n.style.overflow = "visible";
      n.style.whiteSpace = "normal";
    },
    m(e, t) {
      g(e, n, t);
    },
    p: e,
    i: e,
    o: e,
    d(e) {
      e && y(n);
    },
  };
}


  class MLCt extends se {
    constructor(e) {
      super(), re(this, e, null, MLt, i, {});
    }
  }

  function It(t) {
    let n, r, s, i;
    return {
      c() {
        (n = w("div")),
          (r = w("a")),
          // (r.innerHTML =
          //   '<span class="kofitext svelte-1d3p4dy"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg mr-2 mb-1 svelte-1d3p4dy"/>Support the Heardle devs on Ko-Fi</span><svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>'),
          // M(
          //   r,
          //   "class",
          //   "kofi-button py-2 px-3 rounded-lg items-center flex  svelte-1d3p4dy"
          // ),
          // M(r, "href", "https://ko-fi.com/heardle"),
          // M(r, "title", "Support the Heardle devs on Ko-Fi"),
          M(
            n,
            "class",
            "text-center flex justify-center items-center flex-col "
          );
      },
      m(e, o) {
        g(e, n, o), p(n, r), s || ((i = S(r, "click", t[0])), (s = !0));
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && y(n), (s = !1), i();
      },
    };
  }

  function Wt(e) {
    return [
      () => {
        pe("clickKofi", {
          name: "clickKofi",
        });
      },
    ];
  }
  class Rt extends se {
    constructor(e) {
      super(), re(this, e, Wt, It, i, {});
    }
  }

  function Ft(t) {
    let n, r;
    return (
      (n = new Ee({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Gt(t) {
    let n, r, s, i, o, a, l, u, c, d;
    return {
      c() {
        (n = w("div")),
          (r = w("div")),
          (s = x()),
          (i = w("div")),
          (o = w("p")),
          (a = w("span")),
          (l = x()),
          (u = _(t[0])),
          (c = x()),
          (d = w("div")),
          M(r, "class", "flex justify-center items-center mt-6 mb-1"),
          M(a, "class", "text-custom-negative"),
          M(o, "class", "pb-6"),
          M(i, "class", "text-custom-mg text-xs h-32 overflow-scroll relative"),
          M(d, "class", "absolute h-6 bottom-0 w-full border-custom-fg "),
          T(
            d,
            "background",
            "linear-gradient(to bottom, rgba(18,18,18,0), rgba(18,18,18,1)) no-repeat bottom"
          ),
          T(d, "background-size", "100% 100%"),
          M(n, "class", "relative");
      },
      m(e, t) {
        g(e, n, t),
          p(n, r),
          p(n, s),
          p(n, i),
          p(i, o),
          p(o, a),
          p(o, l),
          p(o, u),
          p(n, c),
          p(n, d);
      },
      p(e, t) {
        1 & t && $(u, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Et(e) {
    let t, n, r, s;
    const i = [Gt, Ft],
      o = [];

    function a(e, t) {
      return e[0] ? 0 : 1;
    }
    return (
      (t = a(e)),
      (n = o[t] = i[t](e)),
      {
        c() {
          n.c(), (r = b());
        },
        m(e, n) {
          o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, [s]) {
          let l = t;
          (t = a(e)),
            t === l
              ? o[t].p(e, s)
              : (J(),
                q(o[l], 1, 1, () => {
                  o[l] = null;
                }),
                K(),
                (n = o[t]),
                n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                Z(n, 1),
                n.m(r.parentNode, r));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          o[t].d(e), e && y(r);
        },
      }
    );
  }

  function jt(e, t, n) {
    let r;
    return (
      P(async function () {
        (async function () {
          const e = await fetch(
            "https://wjsn-heardle.glitch.me/supporters.json"
          );
          return await e.json();
        })().then((e) => {
          n(0, (r = e.supporters));
        });
      }),
      [r]
    );
  }
  class Bt extends se {
    constructor(e) {
      super(), re(this, e, jt, Et, i, {});
    }
  }

  function zt(t) {
    let n, r, s, i, o, a, l, u, c;
    return (
      (a = new Rt({})),
      (u = new Bt({})),
      {
        c() {
          (n = w("p")),
            (s = w("p")),
            (n.innerHTML =
              "Have questions/run into bugs? DM me @" +
              twitter +
              " on Discord or comment on the song list Google Sheet (link available through the top left button)."),
            (r = x()),
            (s = w("p")),
            (i = x()),
            (o = w("div")),
            Q(a.$$.fragment),
            (l = x()),
            Q(u.$$.fragment),
            M(n, "class", "mb-3"),
            M(s, "class", "mb-3"),
            M(o, "class", "pt-6");
        },
        m(e, t) {
          g(e, n, t),
            g(e, r, t),
            g(e, s, t),
            g(e, i, t),
            g(e, o, t),
            ee(a, o, null),
            g(e, l, t),
            ee(u, e, t),
            (c = !0);
        },
        p: e,
        i(e) {
          c || (Z(a.$$.fragment, e), Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(a.$$.fragment, e), q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(n),
            e && y(r),
            e && y(s),
            e && y(i),
            e && y(o),
            te(a),
            e && y(l),
            te(u, e);
        },
      }
    );
  }
  class Ut extends se {
    constructor(e) {
      super(), re(this, e, null, zt, i, {});
    }
  }
  const Vt = {
      attemptInterval: 2e3,
      attemptIntervalAlt: [2e3, 4e3, 7e3, 11e3, 16e3, 25e3, 40e3],
      maxAttempts: 7,
      //   date: date,
    },
    Jt = ["0", "1", "2", "3", "4", "5", "6"];

  function Kt(t) {
    let n, r;
    return {
      c() {
        (n = w("div")), (r = _(t[0])), M(n, "style", "display:none");
      },
      m(e, t) {
        g(e, n, t), p(n, r);
      },
      p(e, [t]) {
        1 & t && $(r, e[0]);
      },
      i: e,
      o: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function Zt(e, t, n) {
    let r = "",
      s = new Date(),
      i =
        3600 * (23 - s.getHours()) +
        60 * (59 - s.getMinutes()) +
        (59 - s.getSeconds());

    function o() {
      let e = Math.floor(i / 3600),
        t = Math.floor((i - 3600 * e) / 60),
        s = Math.floor(i % 60);
      n(
        0,
        (r =
          ("00" + e).slice(-2) +
          ":" +
          ("00" + t).slice(-2) +
          ":" +
          ("00" + s).slice(-2))
      ),
        i--,
        0 == e && 0 == t && 0 == s; // && location.reload(!0) (Reload at midnight)
    }
    return o(), setInterval(o, 1e3), [r];
  }
  class qt extends se {
    constructor(e) {
      super(), re(this, e, Zt, Kt, i, {});
    }
  }

  function Xt(e, t, n) {
    const r = e.slice();
    return (r[10] = t[n]), (r[12] = n), r;
  }

  function Qt(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A = Jt[e[3]] + "",
      L = Array(e[1].maxAttempts),
      N = [];
    for (let t = 0; t < L.length; t += 1) N[t] = on(Xt(e, L, t));

    function H(e, t) {
      return 0 == e[3] ? un : e[4] ? ln : an;
    }
    let I = H(e),
      W = I(e),
      R = e[5] && cn();
    return (
      (d = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [dn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      d.$on("click", e[6]),
      (S = new qt({})),
      (O = new Rt({})),
      {
        c() {
          (t = w("div")), (n = w("p")), (r = _(A)), (s = x()), (i = w("div"));
          for (let e = 0; e < N.length; e += 1) N[e].c();
          (o = x()),
            (a = w("p")),
            W.c(),
            (l = x()),
            R && R.c(),
            (u = x()),
            (c = w("div")),
            Q(d.$$.fragment),
            (h = x()),
            (f = w("div")),
            (m = w("div")),
            (k = w("button")),
            (k.textContent = "Next"), // Bind on click ?
            (b = x()),
            Q(S.$$.fragment),
            (D = x()),
            (T = w("div")),
            (Y = w("div")),
            (C = x()),
            Q(O.$$.fragment),
            M(n, "class", "text-lg text-custom-line"),
            M(i, "class", "flex justify-center my-2"),
            M(a, "class", "py-1"),
            M(c, "style", "display:none"),
            M(t, "class", "text-center px-3"),
            M(
              k,
              "class",
              "px-2 py-2 uppercase tracking-widest border-none flex items-center font-semibold text-sm svelte-1r54uzk bg-custom-positive"
            ),
            k.addEventListener("click", function () {
              nextMusic();
            });
          M(m, "class", "flex flex-col justify-center items-center mb-6 mx-3"),
            M(Y, "class", "flex justify-center items-center mb-3"),
            M(T, "class", "bg-custom-highlight py-3 pb-5 mx-3 rounded-t-md");
        },
        m(e, y) {
          g(e, t, y), p(t, n), p(n, r), p(t, s), p(t, i);
          for (let e = 0; e < N.length; e += 1) N[e].m(i, null);
          p(t, o),
            p(t, a),
            W.m(a, null),
            p(t, l),
            R && R.m(t, null),
            p(t, u),
            p(t, c),
            ee(d, c, null),
            g(e, h, y),
            g(e, f, y),
            p(f, m),
            p(m, k),
            p(m, b),
            ee(S, m, null),
            p(f, D),
            p(f, T),
            p(T, Y),
            p(T, C),
            ee(O, T, null),
            (P = !0);
        },
        p(e, n) {
          if (((!P || 8 & n) && A !== (A = Jt[e[3]] + "") && $(r, A), 3 & n)) {
            let t;
            for (L = Array(e[1].maxAttempts), t = 0; t < L.length; t += 1) {
              const r = Xt(e, L, t);
              N[t] ? N[t].p(r, n) : ((N[t] = on(r)), N[t].c(), N[t].m(i, null));
            }
            for (; t < N.length; t += 1) N[t].d(1);
            N.length = L.length;
          }
          I === (I = H(e)) && W
            ? W.p(e, n)
            : (W.d(1), (W = I(e)), W && (W.c(), W.m(a, null))),
            e[5]
              ? R || ((R = cn()), R.c(), R.m(t, u))
              : R && (R.d(1), (R = null));
          const s = {};
          8192 & n &&
            (s.$$scope = {
              dirty: n,
              ctx: e,
            }),
            d.$set(s);
        },
        i(e) {
          P ||
            (Z(d.$$.fragment, e),
            Z(S.$$.fragment, e),
            Z(O.$$.fragment, e),
            (P = !0));
        },
        o(e) {
          q(d.$$.fragment, e),
            q(S.$$.fragment, e),
            q(O.$$.fragment, e),
            (P = !1);
        },
        d(e) {
          e && y(t),
            v(N, e),
            W.d(),
            R && R.d(),
            te(d),
            e && y(h),
            e && y(f),
            te(S),
            te(O);
        },
      }
    );
  }

  function en(t) {
    let n;
    return {
      c() {
        (n = w("div")), M(n, "class", "w-4 h-1 m-0.5 bg-custom-fg");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function tn(e) {
    let t;

    function n(e, t) {
      return e[0][e[12]].isSkipped
        ? sn
        : e[0][e[12]].isCorrect || e[0][e[12]].isSkipped
        ? e[0][e[12]].isCorrect
          ? nn
          : void 0
        : rn;
    }
    let r = n(e),
      s = r && r(e);
    return {
      c() {
        s && s.c(), (t = b());
      },
      m(e, n) {
        s && s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r !== (r = n(e)) &&
          (s && s.d(1), (s = r && r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s && s.d(e), e && y(t);
      },
    };
  }

  function nn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-positive");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function rn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-negative");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function sn(e) {
    let t;
    return {
      c() {
        (t = w("div")), M(t, "class", "w-4 h-1 m-0.5 bg-custom-mg");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function on(e) {
    let t;

    function n(e, t) {
      return e[12] <= e[0].length - 1 ? tn : en;
    }
    let r = n(e),
      s = r(e);
    return {
      c() {
        s.c(), (t = b());
      },
      m(e, n) {
        s.m(e, n), g(e, t, n);
      },
      p(e, i) {
        r === (r = n(e)) && s
          ? s.p(e, i)
          : (s.d(1), (s = r(e)), s && (s.c(), s.m(t.parentNode, t)));
      },
      d(e) {
        s.d(e), e && y(t);
      },
    };
  }

  function an(e) {
    let t,
      n,
      r,
      s = (e[0].length * e[1].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("You got today's " + artist + " Heardle within the first ")),
          (n = _(s)),
          (r = _(" seconds."));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        3 & t &&
          s !== (s = (e[0].length * e[1].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function ln(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "",
      a = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1 ? "s" : "";
    return {
      c() {
        (t = _("Hyaaa! You got the song right within ")),
          (n = _(o)),
          (r = _("\n                second")),
          (s = _(a)),
          (i = _("."));
      },
      m(e, o) {
        g(e, t, o), g(e, n, o), g(e, r, o), g(e, s, o), g(e, i, o);
      },
      p(e, t) {
        3 & t &&
          o !== (o = e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 + "") &&
          $(n, o),
          3 & t &&
            a !==
              (a =
                e[1].attemptIntervalAlt[e[0].length - 1] / 1e3 > 1
                  ? "s"
                  : "") &&
            $(s, a);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r), e && y(s), e && y(i);
      },
    };
  }

  function un(t) {
    let n;
    return {
      c() {
        n = _("Maybe you'll get it next time!");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function cn(e) {
    let t;
    return {
      c() {
        (t = w("div")),
          (t.textContent = "Copied to clipboard!"),
          M(
            t,
            "class",
            "tracking-widest uppercase text-xs text-custom-line p-3 pb-0 text-center"
          );
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function dn(e) {
    let t, n, r, s, i, o, a;
    return {
      c() {
        (t = _("Share\n                ")),
          (n = k("svg")),
          (r = k("circle")),
          (s = k("circle")),
          (i = k("circle")),
          (o = k("line")),
          (a = k("line"));
      },
      m(e, l) {
        g(e, t, l), g(e, n, l), p(n, r), p(n, s), p(n, i), p(n, o), p(n, a);
      },
      d(e) {
        e && y(t), e && y(n);
      },
    };
  }

  function hn(e) {
    let t,
      n,
      r = e[2] && Qt(e);
    return {
      c() {
        r && r.c(), (t = b());
      },
      m(e, s) {
        r && r.m(e, s), g(e, t, s), (n = !0);
      },
      p(e, [n]) {
        e[2]
          ? r
            ? (r.p(e, n), 4 & n && Z(r, 1))
            : ((r = Qt(e)), r.c(), Z(r, 1), r.m(t.parentNode, t))
          : r &&
            (J(),
            q(r, 1, 1, () => {
              r = null;
            }),
            K());
      },
      i(e) {
        n || (Z(r), (n = !0));
      },
      o(e) {
        q(r), (n = !1);
      },
      d(e) {
        r && r.d(e), e && y(t);
      },
    };
  }

  function fn(e, t, n) {
    // console.log("current", t);
    let { userGuesses: r } = t,
      { currentHeardle: s } = t,
      { config: i } = t,
      { hasFinished: o } = t,
      { gotCorrect: a } = t,
      { guessRef: l } = t,
      { isPrime: u } = t,
      c = !1;
    return (
      A(),
      (e.$$set = (e) => {
        "userGuesses" in e && n(0, (r = e.userGuesses)),
          "currentHeardle" in e && n(7, (s = e.currentHeardle)),
          "config" in e && n(1, (i = e.config)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "gotCorrect" in e && n(8, (a = e.gotCorrect)),
          "guessRef" in e && n(3, (l = e.guessRef)),
          "isPrime" in e && n(4, (u = e.isPrime));
      }),
      [
        r,
        i,
        o,
        l,
        u,
        c,
        () => {
          let e = artist + " Heardle #" + (s.id + 1),
            t = "";
          a
            ? r.length < i.maxAttempts / 3
              ? (t += "🔊")
              : r.length < (i.maxAttempts / 3) * 2
              ? (t += "🔉")
              : r.length <= i.maxAttempts && (t += "🔈")
            : (t += "🔇");
          for (let e = 0; e < i.maxAttempts; e++)
            r.length > e
              ? 1 == r[e].isCorrect
                ? (t += "🟩")
                : 1 == r[e].isSkipped
                ? (t += "⬛️")
                : (t += "🟥")
              : (t += "⬜️");
          let seconds = i.attemptIntervalAlt[r.length - 1] / 1e3;
          let o =
            e +
            "\n\n" +
            (a
              ? "Got this " +
                artist +
                " Heardle within " +
                seconds +
                " second" +
                (seconds > 1 ? "s" : "")
              : "Failed this " + artist + " Heardle") +
            "\n\n" +
            t +
            "\n\n";
          // + "https://joywave-heardle.glitch.me/"
          if (
            !navigator.share ||
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ) ||
            /Firefox/i.test(navigator.userAgent)
          )
            return navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
              ? (pe("clickShareClipboard", {
                  name: "clickShareClipboard",
                }),
                n(5, (c = !0)),
                setTimeout(() => {
                  n(5, (c = !1));
                }, 2e3),
                navigator.clipboard.writeText(o))
              : Promise.reject(
                  "There was a problem copying your result to the clipboard"
                );
          navigator
            .share({
              text: o,
            })
            .then(() => {
              pe("clickSharePanel", {
                name: "clickSharePanel",
              });
            })
            .catch(console.error);
        },
        s,
        a,
      ]
    );
  }
  class mn extends se {
    constructor(e) {
      super(),
        re(this, e, fn, hn, i, {
          userGuesses: 0,
          currentHeardle: 0,
          config: 1,
          hasFinished: 2,
          gotCorrect: 8,
          guessRef: 3,
          isPrime: 4,
        });
    }
  }

  function pn(e) {
    let t;
    return {
      c() {
        t = _("Play");
      },
      m(e, n) {
        g(e, t, n);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function gn(e) {
    let t, n, r, s, i, o, a, l, u, c, z, v;
    return (
      (u = new ae({
        props: {
          primary: !0,
          $$slots: {
            default: [pn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      u.$on("click", e[0]),
      {
        c() {
          (t = w("div")),
            (n = w("div")),
            (n.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><circle cx="5.5" cy="17.5" r="2.5"></circle><circle cx="17.5" cy="15.5" r="2.5"></circle><path d="M8 17V5l12-2v12"></path></svg></div> \n        <div><p>Listen to the intro, then find the correct ' +
              artist +
              " song in the list.</p></div>"),
            (r = x()),
            (s = w("div")),
            (s.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div> \n        <div><p>Skipped or incorrect attempts unlock more of the intro</p></div>'),
            (i = x()),
            (o = w("div")),
            (o.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-7"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div> \n  <div><p>Answer in as few tries as possible.</p></div>'),
            (a = x()),
            (z = w("div")),
            (z.innerHTML =
              '<div class="mr-4 w-8 text-custom-line"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M 2.324219 3.484375 C 1.039062 3.484375 0 4.523438 0 5.804688 C 0 7.089844 1.039062 8.128906 2.324219 8.128906 C 3.605469 8.128906 4.644531 7.089844 4.644531 5.804688 C 4.644531 4.523438 3.605469 3.484375 2.324219 3.484375 Z M 2.324219 9.675781 C 1.039062 9.675781 0 10.71875 0 12 C 0 13.28125 1.039062 14.324219 2.324219 14.324219 C 3.605469 14.324219 4.644531 13.28125 4.644531 12 C 4.644531 10.71875 3.605469 9.675781 2.324219 9.675781 Z M 2.324219 15.871094 C 1.039062 15.871094 0 16.910156 0 18.195312 C 0 19.476562 1.039062 20.515625 2.324219 20.515625 C 3.605469 20.515625 4.644531 19.476562 4.644531 18.195312 C 4.644531 16.910156 3.605469 15.871094 2.324219 15.871094 Z M 7.742188 7.355469 L 22.453125 7.355469 C 23.308594 7.355469 24 6.660156 24 5.804688 C 24 4.949219 23.308594 4.257812 22.453125 4.257812 L 7.742188 4.257812 C 6.886719 4.257812 6.195312 4.949219 6.195312 5.804688 C 6.195312 6.660156 6.886719 7.355469 7.742188 7.355469 Z M 22.453125 10.453125 L 7.742188 10.453125 C 6.886719 10.453125 6.195312 11.144531 6.195312 12 C 6.195312 12.855469 6.886719 13.546875 7.742188 13.546875 L 22.453125 13.546875 C 23.308594 13.546875 24 12.855469 24 12 C 24 11.144531 23.308594 10.453125 22.453125 10.453125 Z M 22.453125 16.644531 L 7.742188 16.644531 C 6.886719 16.644531 6.195312 17.339844 6.195312 18.195312 C 6.195312 19.050781 6.886719 19.742188 7.742188 19.742188 L 22.453125 19.742188 C 23.308594 19.742188 24 19.050781 24 18.195312 C 24 17.339844 23.308594 16.644531 22.453125 16.644531 Z M 22.453125 16.644531 "></path></svg></div> \n        <div><p>You can use the top right button to see the list of tracks</p></div>'),
            (v = x()),
            (l = w("div")),
            Q(u.$$.fragment),
            M(n, "class", "flex items-center mb-6"),
            M(s, "class", "flex items-center mb-6"),
            M(o, "class", "flex items-center mb-6"),
            M(z, "class", "flex items-center mb-6"),
            M(l, "class", "justify-center flex py-2 mt-2");
        },
        m(e, d) {
          g(e, t, d),
            p(t, n),
            p(t, r),
            p(t, s),
            p(t, i),
            p(t, o),
            p(t, a),
            p(t, z),
            p(t, v),
            p(t, l),
            ee(u, l, null),
            (c = !0);
        },
        p(e, [t]) {
          const n = {};
          4 & t &&
            (n.$$scope = {
              dirty: t,
              ctx: e,
            }),
            u.$set(n);
        },
        i(e) {
          c || (Z(u.$$.fragment, e), (c = !0));
        },
        o(e) {
          q(u.$$.fragment, e), (c = !1);
        },
        d(e) {
          e && y(t), te(u);
        },
      }
    );
  }

  function yn(e) {
    const t = A();
    return [() => t("close")];
  }
  class vn extends se {
    constructor(e) {
      super(), re(this, e, yn, gn, i, {});
    }
  }

  function wn(e, t, n) {
    const r = e.slice();
    return (r[15] = t[n]), (r[17] = n), r;
  }

  function kn(t) {
    let n;
    return {
      c() {
        (n = w("div")),
          (n.textContent = "Play daily to see your stats"),
          M(n, "class", "text-center py-3 text-custom-line font-semibold");
      },
      m(e, t) {
        g(e, n, t);
      },
      p: e,
      d(e) {
        e && y(n);
      },
    };
  }

  function _n(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u,
      c,
      d,
      h,
      f,
      m,
      k,
      b,
      S,
      D,
      T,
      Y,
      C,
      O,
      P,
      A,
      L,
      N,
      H,
      I,
      W,
      R,
      F,
      G,
      E,
      j,
      B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "",
      z =
        e[11].slice(-1)[0].hasFinished || e[7].length < 2
          ? e[7].slice(-1)[0] + ""
          : e[7].slice(-2)[0] + "",
      U = Math.max(...e[7]) + "",
      V = e[9],
      J = [];
    for (let t = 0; t < V.length; t += 1) J[t] = Mn(wn(e, V, t));
    return {
      c() {
        t = w("div");
        for (let e = 0; e < J.length; e += 1) J[e].c();
        (n = x()),
          (r = w("div")),
          (s = w("div")),
          (i = w("div")),
          (o = _(e[6])),
          (a = x()),
          (l = w("div")),
          (l.textContent = "Played"),
          (u = x()),
          (c = w("div")),
          (d = w("div")),
          (h = _(e[8])),
          (f = x()),
          (m = w("div")),
          (m.textContent = "Won"),
          (k = x()),
          (b = w("div")),
          (S = w("div")),
          (D = _(B)),
          (T = _("%")),
          (Y = x()),
          (C = w("div")),
          (C.textContent = "Win rate"),
          (O = x()),
          (P = w("div")),
          (A = w("div")),
          (L = w("div")),
          (N = _(z)),
          (H = x()),
          (I = w("div")),
          (I.textContent = "Current Streak"),
          (W = x()),
          (R = w("div")),
          (F = w("div")),
          (G = _(U)),
          (E = x()),
          (j = w("div")),
          (j.textContent = "Max Streak"),
          M(t, "class", "flex justify-between py-3"),
          M(i, "class", "text-xl font-semibold"),
          M(l, "class", "text-custom-line text-sm "),
          M(s, "class", "flex-1"),
          M(d, "class", "text-xl font-semibold"),
          M(m, "class", "text-custom-line text-sm "),
          M(c, "class", "flex-1"),
          M(S, "class", "text-xl font-semibold"),
          M(C, "class", "text-custom-line text-sm"),
          M(b, "class", "flex-1"),
          M(r, "class", "flex justify-between text-center w-full py-3"),
          M(L, "class", "text-xl font-semibold"),
          M(I, "class", "text-custom-line text-sm"),
          M(A, "class", "flex-1"),
          M(F, "class", "text-xl font-semibold"),
          M(j, "class", "text-custom-line text-sm"),
          M(R, "class", "flex-1"),
          M(P, "class", "flex justify-between text-center w-full py-3 pt-0");
      },
      m(e, y) {
        g(e, t, y);
        for (let e = 0; e < J.length; e += 1) J[e].m(t, null);
        g(e, n, y),
          g(e, r, y),
          p(r, s),
          p(s, i),
          p(i, o),
          p(s, a),
          p(s, l),
          p(r, u),
          p(r, c),
          p(c, d),
          p(d, h),
          p(c, f),
          p(c, m),
          p(r, k),
          p(r, b),
          p(b, S),
          p(S, D),
          p(S, T),
          p(b, Y),
          p(b, C),
          g(e, O, y),
          g(e, P, y),
          p(P, A),
          p(A, L),
          p(L, N),
          p(A, H),
          p(A, I),
          p(P, W),
          p(P, R),
          p(R, F),
          p(F, G),
          p(R, E),
          p(R, j);
      },
      p(e, n) {
        if (1567 & n) {
          let r;
          for (V = e[9], r = 0; r < V.length; r += 1) {
            const s = wn(e, V, r);
            J[r] ? J[r].p(s, n) : ((J[r] = Mn(s)), J[r].c(), J[r].m(t, null));
          }
          for (; r < J.length; r += 1) J[r].d(1);
          J.length = V.length;
        }
        64 & n && $(o, e[6]),
          256 & n && $(h, e[8]),
          320 & n &&
            B !==
              (B = (e[6] > 0 ? ((e[8] / e[6]) * 100).toFixed(1) : 0) + "") &&
            $(D, B),
          128 & n && z !== (z = e[7].slice(-1)[0] + "") && $(N, z),
          128 & n && U !== (U = Math.max(...e[7]) + "") && $(G, U);
      },
      d(e) {
        e && y(t), v(J, e), e && y(n), e && y(r), e && y(O), e && y(P);
      },
    };
  }

  function xn(e) {
    let t,
      n,
      r,
      s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "";
    return {
      c() {
        (t = _("< ")), (n = _(s)), (r = _("s"));
      },
      m(e, s) {
        g(e, t, s), g(e, n, s), g(e, r, s);
      },
      p(e, t) {
        1 & t &&
          s !== (s = ((e[17] + 1) * e[0].attemptInterval) / 1e3 + "") &&
          $(n, s);
      },
      d(e) {
        e && y(t), e && y(n), e && y(r);
      },
    };
  }

  function bn(e) {
    let t,
      n,
      r,
      s,
      i,
      o = e[17] + 1 + "";
    return {
      c() {
        (t = w("span")),
          (n = _(o)),
          (r = _("°")),
          (s = x()),
          (i = w("span")),
          Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          Y(t, "text-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(i, "class", "text-custom-positive");
      },
      m(e, o) {
        g(e, t, o), p(t, n), p(t, r), g(e, s, o), g(e, i, o);
      },
      p(e, n) {
        6 & n && Y(t, "font-semibold", e[17] == e[1] - 1 && e[2]),
          22 & n &&
            Y(
              t,
              "text-custom-positive",
              e[17] == e[1] - 1 && 0 != e[4] && e[2]
            ),
          22 & n &&
            Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t), e && y(s), e && y(i);
      },
    };
  }

  function Sn(e) {
    let t, n, r;
    return {
      c() {
        (t = k("svg")),
          (n = k("line")),
          (r = k("line")),
          M(n, "x1", "18"),
          M(n, "y1", "6"),
          M(n, "x2", "6"),
          M(n, "y2", "18"),
          M(r, "x1", "6"),
          M(r, "y1", "6"),
          M(r, "x2", "18"),
          M(r, "y2", "18"),
          M(t, "class", "mx-auto"),
          M(t, "xmlns", "http://www.w3.org/2000/svg"),
          M(t, "width", "16"),
          M(t, "height", "16"),
          M(t, "viewBox", "0 0 24 24"),
          M(t, "fill", "none"),
          M(t, "stroke", "currentColor"),
          M(t, "stroke-width", "2"),
          M(t, "stroke-linecap", "round"),
          M(t, "stroke-linejoin", "round"),
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      m(e, s) {
        g(e, t, s), p(t, n), p(t, r);
      },
      p(e, n) {
        22 & n &&
          Y(t, "text-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]);
      },
      d(e) {
        e && y(t);
      },
    };
  }

  function Mn(e) {
    let t,
      n,
      r,
      s,
      i,
      o,
      a,
      l,
      u = (e[15] > 0 ? e[15] : " ") + "";

    function c(e, t) {
      return e[17] === e[9].length - 1 ? Sn : e[3] ? bn : xn;
    }
    let d = c(e),
      h = d(e);
    return {
      c() {
        (t = w("div")),
          (n = w("div")),
          (r = w("div")),
          (s = w("div")),
          (i = _(u)),
          (o = x()),
          (a = w("div")),
          h.c(),
          (l = x()),
          M(s, "class", "h-full absolute text-center w-full py-1 text-xs "),
          Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          M(r, "class", "absolute bg-custom-mg w-6"),
          T(r, "height", (e[15] / e[10]) * 100 + "%"),
          M(n, "class", "h-32 relative w-9 flex justify-center items-end"),
          M(
            a,
            "class",
            "text-center border-right text-xs pt-1 text-custom-line"
          ),
          M(t, "class", "flex flex-col items-stretch ");
      },
      m(e, u) {
        g(e, t, u),
          p(t, n),
          p(n, r),
          p(r, s),
          p(s, i),
          p(t, o),
          p(t, a),
          h.m(a, null),
          p(t, l);
      },
      p(e, t) {
        512 & t && u !== (u = (e[15] > 0 ? e[15] : " ") + "") && $(i, u),
          22 & t &&
            Y(s, "bg-custom-positive", e[17] == e[1] - 1 && 0 != e[4] && e[2]),
          22 & t &&
            Y(s, "bg-custom-negative", e[17] == e[1] && 0 == e[4] && e[2]),
          1536 & t && T(r, "height", (e[15] / e[10]) * 100 + "%"),
          d === (d = c(e)) && h
            ? h.p(e, t)
            : (h.d(1), (h = d(e)), h && (h.c(), h.m(a, null)));
      },
      d(e) {
        e && y(t), h.d();
      },
    };
  }

  function $n(t) {
    let n;

    function r(e, t) {
      return e[5] ? _n : kn;
    }
    let s = r(t),
      i = s(t);
    return {
      c() {
        i.c(), (n = b());
      },
      m(e, t) {
        i.m(e, t), g(e, n, t);
      },
      p(e, [t]) {
        s === (s = r(e)) && i
          ? i.p(e, t)
          : (i.d(1), (i = s(e)), i && (i.c(), i.m(n.parentNode, n)));
      },
      i: e,
      o: e,
      d(e) {
        i.d(e), e && y(n);
      },
    };
  }

  function Dn(e, t, n) {
    let { userStats: r } = t,
      { config: s } = t,
      { todaysScore: i } = t,
      { hasFinished: o } = t,
      { daysSince: a } = t,
      l = !1,
      u = 0,
      c = [],
      d = [],
      h = 0,
      { isPrime: f } = t,
      { guessRef: m } = t,
      p = [];
    for (let e = 0; e < s.maxAttempts + 1; e++) p[e] = 0;
    let g = 0;
    if (r.length > 0) {
      l = !0;
      for (let e = 0; e < a + 1; e++) d.push(0);
      for (let e in r)
        !0 === r[e].hasFinished &&
          (++u,
          !0 === r[e].gotCorrect
            ? ((d[r[e].id] = 1),
              ++h,
              ++p[r[e].score - 1],
              p[r[e].score - 1] > g && (g = p[r[e].score - 1]))
            : (++p[s.maxAttempts],
              p[s.maxAttempts] > g && (g = p[s.maxAttempts])));
      c = d.reduce((e, t) => (t ? e[e.length - 1]++ : e.push(0), e), [0]);
    }
    return (
      (e.$$set = (e) => {
        "userStats" in e && n(11, (r = e.userStats)),
          "config" in e && n(0, (s = e.config)),
          "todaysScore" in e && n(1, (i = e.todaysScore)),
          "hasFinished" in e && n(2, (o = e.hasFinished)),
          "daysSince" in e && n(12, (a = e.daysSince)),
          "isPrime" in e && n(3, (f = e.isPrime)),
          "guessRef" in e && n(4, (m = e.guessRef));
      }),
      [s, i, o, f, m, l, u, c, h, p, g, r, a]
    );
  }
  class Tn extends se {
    constructor(e) {
      super(),
        re(this, e, Dn, $n, i, {
          userStats: 11,
          config: 0,
          todaysScore: 1,
          hasFinished: 2,
          daysSince: 12,
          isPrime: 3,
          guessRef: 4,
        });
    }
  }
  var Yn = yt(function (e, t) {
    e.exports = (function () {
      var t, n;

      function r() {
        return t.apply(null, arguments);
      }

      function s(e) {
        t = e;
      }

      function i(e) {
        return (
          e instanceof Array ||
          "[object Array]" === Object.prototype.toString.call(e)
        );
      }

      function o(e) {
        return (
          null != e && "[object Object]" === Object.prototype.toString.call(e)
        );
      }

      function a(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function l(e) {
        if (Object.getOwnPropertyNames)
          return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (a(e, t)) return !1;
        return !0;
      }

      function u(e) {
        return void 0 === e;
      }

      function c(e) {
        return (
          "number" == typeof e ||
          "[object Number]" === Object.prototype.toString.call(e)
        );
      }

      function d(e) {
        return (
          e instanceof Date ||
          "[object Date]" === Object.prototype.toString.call(e)
        );
      }

      function h(e, t) {
        var n,
          r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r;
      }

      function f(e, t) {
        for (var n in t) a(t, n) && (e[n] = t[n]);
        return (
          a(t, "toString") && (e.toString = t.toString),
          a(t, "valueOf") && (e.valueOf = t.valueOf),
          e
        );
      }

      function m(e, t, n, r) {
        return Jn(e, t, n, r, !0).utc();
      }

      function p() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        };
      }

      function g(e) {
        return null == e._pf && (e._pf = p()), e._pf;
      }

      function y(e) {
        if (null == e._isValid) {
          var t = g(e),
            r = n.call(t.parsedDateParts, function (e) {
              return null != e;
            }),
            s =
              !isNaN(e._d.getTime()) &&
              t.overflow < 0 &&
              !t.empty &&
              !t.invalidEra &&
              !t.invalidMonth &&
              !t.invalidWeekday &&
              !t.weekdayMismatch &&
              !t.nullInput &&
              !t.invalidFormat &&
              !t.userInvalidated &&
              (!t.meridiem || (t.meridiem && r));
          if (
            (e._strict &&
              (s =
                s &&
                0 === t.charsLeftOver &&
                0 === t.unusedTokens.length &&
                void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
          )
            return s;
          e._isValid = s;
        }
        return e._isValid;
      }

      function v(e) {
        var t = m(NaN);
        return null != e ? f(g(t), e) : (g(t).userInvalidated = !0), t;
      }
      n = Array.prototype.some
        ? Array.prototype.some
        : function (e) {
            var t,
              n = Object(this),
              r = n.length >>> 0;
            for (t = 0; t < r; t++)
              if (t in n && e.call(this, n[t], t, n)) return !0;
            return !1;
          };
      var w = (r.momentProperties = []),
        k = !1;

      function _(e, t) {
        var n, r, s;
        if (
          (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
          u(t._i) || (e._i = t._i),
          u(t._f) || (e._f = t._f),
          u(t._l) || (e._l = t._l),
          u(t._strict) || (e._strict = t._strict),
          u(t._tzm) || (e._tzm = t._tzm),
          u(t._isUTC) || (e._isUTC = t._isUTC),
          u(t._offset) || (e._offset = t._offset),
          u(t._pf) || (e._pf = g(t)),
          u(t._locale) || (e._locale = t._locale),
          w.length > 0)
        )
          for (n = 0; n < w.length; n++) u((s = t[(r = w[n])])) || (e[r] = s);
        return e;
      }

      function x(e) {
        _(this, e),
          (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
          this.isValid() || (this._d = new Date(NaN)),
          !1 === k && ((k = !0), r.updateOffset(this), (k = !1));
      }

      function b(e) {
        return e instanceof x || (null != e && null != e._isAMomentObject);
      }

      function S(e) {
        !1 === r.suppressDeprecationWarnings &&
          "undefined" != typeof console &&
          console.warn &&
          console.warn("Deprecation warning: " + e);
      }

      function M(e, t) {
        var n = !0;
        return f(function () {
          if (
            (null != r.deprecationHandler && r.deprecationHandler(null, e), n)
          ) {
            var s,
              i,
              o,
              l = [];
            for (i = 0; i < arguments.length; i++) {
              if (((s = ""), "object" == typeof arguments[i])) {
                for (o in ((s += "\n[" + i + "] "), arguments[0]))
                  a(arguments[0], o) &&
                    (s += o + ": " + arguments[0][o] + ", ");
                s = s.slice(0, -2);
              } else s = arguments[i];
              l.push(s);
            }
            S(
              e +
                "\nArguments: " +
                Array.prototype.slice.call(l).join("") +
                "\n" +
                new Error().stack
            ),
              (n = !1);
          }
          return t.apply(this, arguments);
        }, t);
      }
      var $,
        D = {};

      function T(e, t) {
        null != r.deprecationHandler && r.deprecationHandler(e, t),
          D[e] || (S(t), (D[e] = !0));
      }

      function Y(e) {
        return (
          ("undefined" != typeof Function && e instanceof Function) ||
          "[object Function]" === Object.prototype.toString.call(e)
        );
      }

      function C(e) {
        var t, n;
        for (n in e)
          a(e, n) && (Y((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
        (this._config = e),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }

      function O(e, t) {
        var n,
          r = f({}, e);
        for (n in t)
          a(t, n) &&
            (o(e[n]) && o(t[n])
              ? ((r[n] = {}), f(r[n], e[n]), f(r[n], t[n]))
              : null != t[n]
              ? (r[n] = t[n])
              : delete r[n]);
        for (n in e) a(e, n) && !a(t, n) && o(e[n]) && (r[n] = f({}, r[n]));
        return r;
      }

      function P(e) {
        null != e && this.set(e);
      }
      (r.suppressDeprecationWarnings = !1),
        (r.deprecationHandler = null),
        ($ = Object.keys
          ? Object.keys
          : function (e) {
              var t,
                n = [];
              for (t in e) a(e, t) && n.push(t);
              return n;
            });
      var A = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      };

      function L(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return Y(r) ? r.call(t, n) : r;
      }

      function N(e, t, n) {
        var r = "" + Math.abs(e),
          s = t - r.length;
        return (
          (e >= 0 ? (n ? "+" : "") : "-") +
          Math.pow(10, Math.max(0, s)).toString().substr(1) +
          r
        );
      }
      var H =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        W = {},
        R = {};

      function F(e, t, n, r) {
        var s = r;
        "string" == typeof r &&
          (s = function () {
            return this[r]();
          }),
          e && (R[e] = s),
          t &&
            (R[t[0]] = function () {
              return N(s.apply(this, arguments), t[1], t[2]);
            }),
          n &&
            (R[n] = function () {
              return this.localeData().ordinal(s.apply(this, arguments), e);
            });
      }

      function G(e) {
        return e.match(/\[[\s\S]/)
          ? e.replace(/^\[|\]$/g, "")
          : e.replace(/\\/g, "");
      }

      function E(e) {
        var t,
          n,
          r = e.match(H);
        for (t = 0, n = r.length; t < n; t++)
          R[r[t]] ? (r[t] = R[r[t]]) : (r[t] = G(r[t]));
        return function (t) {
          var s,
            i = "";
          for (s = 0; s < n; s++) i += Y(r[s]) ? r[s].call(t, e) : r[s];
          return i;
        };
      }

      function j(e, t) {
        return e.isValid()
          ? ((t = B(t, e.localeData())), (W[t] = W[t] || E(t)), W[t](e))
          : e.localeData().invalidDate();
      }

      function B(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e;
        }
        for (I.lastIndex = 0; n >= 0 && I.test(e); )
          (e = e.replace(I, r)), (I.lastIndex = 0), (n -= 1);
        return e;
      }
      var z = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      };

      function U(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n
          ? t
          : ((this._longDateFormat[e] = n
              .match(H)
              .map(function (e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                  ? e.slice(1)
                  : e;
              })
              .join("")),
            this._longDateFormat[e]);
      }
      var V = "Invalid date";

      function J() {
        return this._invalidDate;
      }
      var K = "%d",
        Z = /\d{1,2}/;

      function q(e) {
        return this._ordinal.replace("%d", e);
      }
      var X = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      };

      function Q(e, t, n, r) {
        var s = this._relativeTime[n];
        return Y(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
      }

      function ee(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t);
      }
      var te = {};

      function ne(e, t) {
        var n = e.toLowerCase();
        te[n] = te[n + "s"] = te[t] = e;
      }

      function re(e) {
        return "string" == typeof e ? te[e] || te[e.toLowerCase()] : void 0;
      }

      function se(e) {
        var t,
          n,
          r = {};
        for (n in e) a(e, n) && (t = re(n)) && (r[t] = e[n]);
        return r;
      }
      var ie = {};

      function oe(e, t) {
        ie[e] = t;
      }

      function ae(e) {
        var t,
          n = [];
        for (t in e)
          a(e, t) &&
            n.push({
              unit: t,
              priority: ie[t],
            });
        return (
          n.sort(function (e, t) {
            return e.priority - t.priority;
          }),
          n
        );
      }

      function le(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
      }

      function ue(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
      }

      function ce(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = ue(t)), n;
      }

      function de(e, t) {
        return function (n) {
          return null != n
            ? (fe(this, e, n), r.updateOffset(this, t), this)
            : he(this, e);
        };
      }

      function he(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
      }

      function fe(e, t, n) {
        e.isValid() &&
          !isNaN(n) &&
          ("FullYear" === t &&
          le(e.year()) &&
          1 === e.month() &&
          29 === e.date()
            ? ((n = ce(n)),
              e._d["set" + (e._isUTC ? "UTC" : "") + t](
                n,
                e.month(),
                Qe(n, e.month())
              ))
            : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
      }

      function me(e) {
        return Y(this[(e = re(e))]) ? this[e]() : this;
      }

      function pe(e, t) {
        if ("object" == typeof e) {
          var n,
            r = ae((e = se(e)));
          for (n = 0; n < r.length; n++) this[r[n].unit](e[r[n].unit]);
        } else if (Y(this[(e = re(e))])) return this[e](t);
        return this;
      }
      var ge,
        ye = /\d/,
        ve = /\d\d/,
        we = /\d{3}/,
        ke = /\d{4}/,
        _e = /[+-]?\d{6}/,
        xe = /\d\d?/,
        be = /\d\d\d\d?/,
        Se = /\d\d\d\d\d\d?/,
        Me = /\d{1,3}/,
        $e = /\d{1,4}/,
        De = /[+-]?\d{1,6}/,
        Te = /\d+/,
        Ye = /[+-]?\d+/,
        Ce = /Z|[+-]\d\d:?\d\d/gi,
        Oe = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Pe = /[+-]?\d+(\.\d{1,3})?/,
        Ae =
          /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

      function Le(e, t, n) {
        ge[e] = Y(t)
          ? t
          : function (e, r) {
              return e && n ? n : t;
            };
      }

      function Ne(e, t) {
        return a(ge, e) ? ge[e](t._strict, t._locale) : new RegExp(He(e));
      }

      function He(e) {
        return Ie(
          e
            .replace("\\", "")
            .replace(
              /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
              function (e, t, n, r, s) {
                return t || n || r || s;
              }
            )
        );
      }

      function Ie(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      ge = {};
      var We = {};

      function Re(e, t) {
        var n,
          r = t;
        for (
          "string" == typeof e && (e = [e]),
            c(t) &&
              (r = function (e, n) {
                n[t] = ce(e);
              }),
            n = 0;
          n < e.length;
          n++
        )
          We[e[n]] = r;
      }

      function Fe(e, t) {
        Re(e, function (e, n, r, s) {
          (r._w = r._w || {}), t(e, r._w, r, s);
        });
      }

      function Ge(e, t, n) {
        null != t && a(We, e) && We[e](t, n._a, n, e);
      }
      var Ee,
        je = 0,
        Be = 1,
        ze = 2,
        Ue = 3,
        Ve = 4,
        Je = 5,
        Ke = 6,
        Ze = 7,
        qe = 8;

      function Xe(e, t) {
        return ((e % t) + t) % t;
      }

      function Qe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n = Xe(t, 12);
        return (
          (e += (t - n) / 12), 1 === n ? (le(e) ? 29 : 28) : 31 - ((n % 7) % 2)
        );
      }
      (Ee = Array.prototype.indexOf
        ? Array.prototype.indexOf
        : function (e) {
            var t;
            for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1;
          }),
        F("M", ["MM", 2], "Mo", function () {
          return this.month() + 1;
        }),
        F("MMM", 0, 0, function (e) {
          return this.localeData().monthsShort(this, e);
        }),
        F("MMMM", 0, 0, function (e) {
          return this.localeData().months(this, e);
        }),
        ne("month", "M"),
        oe("month", 8),
        Le("M", xe),
        Le("MM", xe, ve),
        Le("MMM", function (e, t) {
          return t.monthsShortRegex(e);
        }),
        Le("MMMM", function (e, t) {
          return t.monthsRegex(e);
        }),
        Re(["M", "MM"], function (e, t) {
          t[Be] = ce(e) - 1;
        }),
        Re(["MMM", "MMMM"], function (e, t, n, r) {
          var s = n._locale.monthsParse(e, r, n._strict);
          null != s ? (t[Be] = s) : (g(n).invalidMonth = e);
        });
      var et =
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        tt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        nt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        rt = Ae,
        st = Ae;

      function it(e, t) {
        return e
          ? i(this._months)
            ? this._months[e.month()]
            : this._months[
                (this._months.isFormat || nt).test(t) ? "format" : "standalone"
              ][e.month()]
          : i(this._months)
          ? this._months
          : this._months.standalone;
      }

      function ot(e, t) {
        return e
          ? i(this._monthsShort)
            ? this._monthsShort[e.month()]
            : this._monthsShort[nt.test(t) ? "format" : "standalone"][e.month()]
          : i(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }

      function at(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (
            this._monthsParse = [],
              this._longMonthsParse = [],
              this._shortMonthsParse = [],
              r = 0;
            r < 12;
            ++r
          )
            (i = m([2e3, r])),
              (this._shortMonthsParse[r] = this.monthsShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._longMonthsParse[r] = this.months(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "MMM" === t
            ? -1 !== (s = Ee.call(this._shortMonthsParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : "MMM" === t
          ? -1 !== (s = Ee.call(this._shortMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._longMonthsParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._longMonthsParse, o)) ||
            -1 !== (s = Ee.call(this._shortMonthsParse, o))
          ? s
          : null;
      }

      function lt(e, t, n) {
        var r, s, i;
        if (this._monthsParseExact) return at.call(this, e, t, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            r = 0;
          r < 12;
          r++
        ) {
          if (
            ((s = m([2e3, r])),
            n &&
              !this._longMonthsParse[r] &&
              ((this._longMonthsParse[r] = new RegExp(
                "^" + this.months(s, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[r] = new RegExp(
                "^" + this.monthsShort(s, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[r] ||
              ((i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, "")),
              (this._monthsParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
          )
            return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r;
        }
      }

      function ut(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = ce(t);
          else if (!c((t = e.localeData().monthsParse(t)))) return e;
        return (
          (n = Math.min(e.date(), Qe(e.year(), t))),
          e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
          e
        );
      }

      function ct(e) {
        return null != e
          ? (ut(this, e), r.updateOffset(this, !0), this)
          : he(this, "Month");
      }

      function dt() {
        return Qe(this.year(), this.month());
      }

      function ht(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = rt),
            this._monthsShortStrictRegex && e
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }

      function ft(e) {
        return this._monthsParseExact
          ? (a(this, "_monthsRegex") || mt.call(this),
            e ? this._monthsStrictRegex : this._monthsRegex)
          : (a(this, "_monthsRegex") || (this._monthsRegex = st),
            this._monthsStrictRegex && e
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }

      function mt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r = [],
          s = [],
          i = [];
        for (t = 0; t < 12; t++)
          (n = m([2e3, t])),
            r.push(this.monthsShort(n, "")),
            s.push(this.months(n, "")),
            i.push(this.months(n, "")),
            i.push(this.monthsShort(n, ""));
        for (r.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++)
          (r[t] = Ie(r[t])), (s[t] = Ie(s[t]));
        for (t = 0; t < 24; t++) i[t] = Ie(i[t]);
        (this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._monthsShortRegex = this._monthsRegex),
          (this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
          (this._monthsShortStrictRegex = new RegExp(
            "^(" + r.join("|") + ")",
            "i"
          ));
      }

      function pt(e) {
        return le(e) ? 366 : 365;
      }
      F("Y", 0, 0, function () {
        var e = this.year();
        return e <= 9999 ? N(e, 4) : "+" + e;
      }),
        F(0, ["YY", 2], 0, function () {
          return this.year() % 100;
        }),
        F(0, ["YYYY", 4], 0, "year"),
        F(0, ["YYYYY", 5], 0, "year"),
        F(0, ["YYYYYY", 6, !0], 0, "year"),
        ne("year", "y"),
        oe("year", 1),
        Le("Y", Ye),
        Le("YY", xe, ve),
        Le("YYYY", $e, ke),
        Le("YYYYY", De, _e),
        Le("YYYYYY", De, _e),
        Re(["YYYYY", "YYYYYY"], je),
        Re("YYYY", function (e, t) {
          t[je] = 2 === e.length ? r.parseTwoDigitYear(e) : ce(e);
        }),
        Re("YY", function (e, t) {
          t[je] = r.parseTwoDigitYear(e);
        }),
        Re("Y", function (e, t) {
          t[je] = parseInt(e, 10);
        }),
        (r.parseTwoDigitYear = function (e) {
          return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
        });
      var gt = de("FullYear", !0);

      function yt() {
        return le(this.year());
      }

      function wt(e, t, n, r, s, i, o) {
        var a;
        return (
          e < 100 && e >= 0
            ? ((a = new Date(e + 400, t, n, r, s, i, o)),
              isFinite(a.getFullYear()) && a.setFullYear(e))
            : (a = new Date(e, t, n, r, s, i, o)),
          a
        );
      }

      function kt(e) {
        var t, n;
        return (
          e < 100 && e >= 0
            ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
              (t = new Date(Date.UTC.apply(null, n))),
              isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
            : (t = new Date(Date.UTC.apply(null, arguments))),
          t
        );
      }

      function _t(e, t, n) {
        var r = 7 + t - n;
        return (-(7 + kt(e, 0, r).getUTCDay() - t) % 7) + r - 1;
      }

      function xt(e, t, n, r, s) {
        var i,
          o,
          a = 1 + 7 * (t - 1) + ((7 + n - r) % 7) + _t(e, r, s);
        return (
          a <= 0
            ? (o = pt((i = e - 1)) + a)
            : a > pt(e)
            ? ((i = e + 1), (o = a - pt(e)))
            : ((i = e), (o = a)),
          {
            year: i,
            dayOfYear: o,
          }
        );
      }

      function bt(e, t, n) {
        var r,
          s,
          i = _t(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
        return (
          o < 1
            ? (r = o + St((s = e.year() - 1), t, n))
            : o > St(e.year(), t, n)
            ? ((r = o - St(e.year(), t, n)), (s = e.year() + 1))
            : ((s = e.year()), (r = o)),
          {
            week: r,
            year: s,
          }
        );
      }

      function St(e, t, n) {
        var r = _t(e, t, n),
          s = _t(e + 1, t, n);
        return (pt(e) - r + s) / 7;
      }

      function Mt(e) {
        return bt(e, this._week.dow, this._week.doy).week;
      }
      F("w", ["ww", 2], "wo", "week"),
        F("W", ["WW", 2], "Wo", "isoWeek"),
        ne("week", "w"),
        ne("isoWeek", "W"),
        oe("week", 5),
        oe("isoWeek", 5),
        Le("w", xe),
        Le("ww", xe, ve),
        Le("W", xe),
        Le("WW", xe, ve),
        Fe(["w", "ww", "W", "WW"], function (e, t, n, r) {
          t[r.substr(0, 1)] = ce(e);
        });
      var $t = {
        dow: 0,
        doy: 6,
      };

      function Dt() {
        return this._week.dow;
      }

      function Tt() {
        return this._week.doy;
      }

      function Yt(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ct(e) {
        var t = bt(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }

      function Ot(e, t) {
        return "string" != typeof e
          ? e
          : isNaN(e)
          ? "number" == typeof (e = t.weekdaysParse(e))
            ? e
            : null
          : parseInt(e, 10);
      }

      function Pt(e, t) {
        return "string" == typeof e
          ? t.weekdaysParse(e) % 7 || 7
          : isNaN(e)
          ? null
          : e;
      }

      function At(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t));
      }
      F("d", 0, "do", "day"),
        F("dd", 0, 0, function (e) {
          return this.localeData().weekdaysMin(this, e);
        }),
        F("ddd", 0, 0, function (e) {
          return this.localeData().weekdaysShort(this, e);
        }),
        F("dddd", 0, 0, function (e) {
          return this.localeData().weekdays(this, e);
        }),
        F("e", 0, 0, "weekday"),
        F("E", 0, 0, "isoWeekday"),
        ne("day", "d"),
        ne("weekday", "e"),
        ne("isoWeekday", "E"),
        oe("day", 11),
        oe("weekday", 11),
        oe("isoWeekday", 11),
        Le("d", xe),
        Le("e", xe),
        Le("E", xe),
        Le("dd", function (e, t) {
          return t.weekdaysMinRegex(e);
        }),
        Le("ddd", function (e, t) {
          return t.weekdaysShortRegex(e);
        }),
        Le("dddd", function (e, t) {
          return t.weekdaysRegex(e);
        }),
        Fe(["dd", "ddd", "dddd"], function (e, t, n, r) {
          var s = n._locale.weekdaysParse(e, r, n._strict);
          null != s ? (t.d = s) : (g(n).invalidWeekday = e);
        }),
        Fe(["d", "e", "E"], function (e, t, n, r) {
          t[r] = ce(e);
        });
      var Lt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        Nt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Ht = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        It = Ae,
        Wt = Ae,
        Rt = Ae;

      function Ft(e, t) {
        var n = i(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ];
        return !0 === e ? At(n, this._week.dow) : e ? n[e.day()] : n;
      }

      function Gt(e) {
        return !0 === e
          ? At(this._weekdaysShort, this._week.dow)
          : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
      }

      function Et(e) {
        return !0 === e
          ? At(this._weekdaysMin, this._week.dow)
          : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
      }

      function jt(e, t, n) {
        var r,
          s,
          i,
          o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (
            this._weekdaysParse = [],
              this._shortWeekdaysParse = [],
              this._minWeekdaysParse = [],
              r = 0;
            r < 7;
            ++r
          )
            (i = m([2e3, 1]).day(r)),
              (this._minWeekdaysParse[r] = this.weekdaysMin(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._shortWeekdaysParse[r] = this.weekdaysShort(
                i,
                ""
              ).toLocaleLowerCase()),
              (this._weekdaysParse[r] = this.weekdays(
                i,
                ""
              ).toLocaleLowerCase());
        return n
          ? "dddd" === t
            ? -1 !== (s = Ee.call(this._weekdaysParse, o))
              ? s
              : null
            : "ddd" === t
            ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
              ? s
              : null
            : -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "dddd" === t
          ? -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : "ddd" === t
          ? -1 !== (s = Ee.call(this._shortWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._minWeekdaysParse, o))
            ? s
            : null
          : -1 !== (s = Ee.call(this._minWeekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._weekdaysParse, o)) ||
            -1 !== (s = Ee.call(this._shortWeekdaysParse, o))
          ? s
          : null;
      }

      function Bt(e, t, n) {
        var r, s, i;
        if (this._weekdaysParseExact) return jt.call(this, e, t, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            r = 0;
          r < 7;
          r++
        ) {
          if (
            ((s = m([2e3, 1]).day(r)),
            n &&
              !this._fullWeekdaysParse[r] &&
              ((this._fullWeekdaysParse[r] = new RegExp(
                "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[r] = new RegExp(
                "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[r] ||
              ((i =
                "^" +
                this.weekdays(s, "") +
                "|^" +
                this.weekdaysShort(s, "") +
                "|^" +
                this.weekdaysMin(s, "")),
              (this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i"))),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
          )
            return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r;
        }
      }

      function zt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e
          ? ((e = Ot(e, this.localeData())), this.add(e - t, "d"))
          : t;
      }

      function Ut(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
      }

      function Vt(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = Pt(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
      }

      function Jt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = It),
            this._weekdaysStrictRegex && e
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }

      function Kt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wt),
            this._weekdaysShortStrictRegex && e
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }

      function Zt(e) {
        return this._weekdaysParseExact
          ? (a(this, "_weekdaysRegex") || qt.call(this),
            e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Rt),
            this._weekdaysMinStrictRegex && e
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }

      function qt() {
        function e(e, t) {
          return t.length - e.length;
        }
        var t,
          n,
          r,
          s,
          i,
          o = [],
          a = [],
          l = [],
          u = [];
        for (t = 0; t < 7; t++)
          (n = m([2e3, 1]).day(t)),
            (r = Ie(this.weekdaysMin(n, ""))),
            (s = Ie(this.weekdaysShort(n, ""))),
            (i = Ie(this.weekdays(n, ""))),
            o.push(r),
            a.push(s),
            l.push(i),
            u.push(r),
            u.push(s),
            u.push(i);
        o.sort(e),
          a.sort(e),
          l.sort(e),
          u.sort(e),
          (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
          (this._weekdaysShortRegex = this._weekdaysRegex),
          (this._weekdaysMinRegex = this._weekdaysRegex),
          (this._weekdaysStrictRegex = new RegExp(
            "^(" + l.join("|") + ")",
            "i"
          )),
          (this._weekdaysShortStrictRegex = new RegExp(
            "^(" + a.join("|") + ")",
            "i"
          )),
          (this._weekdaysMinStrictRegex = new RegExp(
            "^(" + o.join("|") + ")",
            "i"
          ));
      }

      function Xt() {
        return this.hours() % 12 || 12;
      }

      function Qt() {
        return this.hours() || 24;
      }

      function en(e, t) {
        F(e, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
      }

      function tn(e, t) {
        return t._meridiemParse;
      }

      function nn(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
      }
      F("H", ["HH", 2], 0, "hour"),
        F("h", ["hh", 2], 0, Xt),
        F("k", ["kk", 2], 0, Qt),
        F("hmm", 0, 0, function () {
          return "" + Xt.apply(this) + N(this.minutes(), 2);
        }),
        F("hmmss", 0, 0, function () {
          return (
            "" + Xt.apply(this) + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        F("Hmm", 0, 0, function () {
          return "" + this.hours() + N(this.minutes(), 2);
        }),
        F("Hmmss", 0, 0, function () {
          return (
            "" + this.hours() + N(this.minutes(), 2) + N(this.seconds(), 2)
          );
        }),
        en("a", !0),
        en("A", !1),
        ne("hour", "h"),
        oe("hour", 13),
        Le("a", tn),
        Le("A", tn),
        Le("H", xe),
        Le("h", xe),
        Le("k", xe),
        Le("HH", xe, ve),
        Le("hh", xe, ve),
        Le("kk", xe, ve),
        Le("hmm", be),
        Le("hmmss", Se),
        Le("Hmm", be),
        Le("Hmmss", Se),
        Re(["H", "HH"], Ue),
        Re(["k", "kk"], function (e, t, n) {
          var r = ce(e);
          t[Ue] = 24 === r ? 0 : r;
        }),
        Re(["a", "A"], function (e, t, n) {
          (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
        }),
        Re(["h", "hh"], function (e, t, n) {
          (t[Ue] = ce(e)), (g(n).bigHour = !0);
        }),
        Re("hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r))),
            (g(n).bigHour = !0);
        }),
        Re("hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s))),
            (g(n).bigHour = !0);
        }),
        Re("Hmm", function (e, t, n) {
          var r = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))), (t[Ve] = ce(e.substr(r)));
        }),
        Re("Hmmss", function (e, t, n) {
          var r = e.length - 4,
            s = e.length - 2;
          (t[Ue] = ce(e.substr(0, r))),
            (t[Ve] = ce(e.substr(r, 2))),
            (t[Je] = ce(e.substr(s)));
        });
      var rn = /[ap]\.?m?\.?/i,
        sn = de("Hours", !0);

      function on(e, t, n) {
        return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }
      var an,
        ln = {
          calendar: A,
          longDateFormat: z,
          invalidDate: V,
          ordinal: K,
          dayOfMonthOrdinalParse: Z,
          relativeTime: X,
          months: et,
          monthsShort: tt,
          week: $t,
          weekdays: Lt,
          weekdaysMin: Ht,
          weekdaysShort: Nt,
          meridiemParse: rn,
        },
        un = {},
        cn = {};

      function dn(e, t) {
        var n,
          r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n;
        return r;
      }

      function hn(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
      }

      function fn(e) {
        for (var t, n, r, s, i = 0; i < e.length; ) {
          for (
            t = (s = hn(e[i]).split("-")).length,
              n = (n = hn(e[i + 1])) ? n.split("-") : null;
            t > 0;

          ) {
            if ((r = mn(s.slice(0, t).join("-")))) return r;
            if (n && n.length >= t && dn(s, n) >= t - 1) break;
            t--;
          }
          i++;
        }
        return an;
      }

      function mn(t) {
        var n = null;
        if (void 0 === un[t] && e && e.exports)
          try {
            (n = an._abbr), vt("./locale/" + t), pn(n);
          } catch (e) {
            un[t] = null;
          }
        return un[t];
      }

      function pn(e, t) {
        var n;
        return (
          e &&
            ((n = u(t) ? vn(e) : gn(e, t))
              ? (an = n)
              : "undefined" != typeof console &&
                console.warn &&
                console.warn(
                  "Locale " + e + " not found. Did you forget to load it?"
                )),
          an._abbr
        );
      }

      function gn(e, t) {
        if (null !== t) {
          var n,
            r = ln;
          if (((t.abbr = e), null != un[e]))
            T(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ),
              (r = un[e]._config);
          else if (null != t.parentLocale)
            if (null != un[t.parentLocale]) r = un[t.parentLocale]._config;
            else {
              if (null == (n = mn(t.parentLocale)))
                return (
                  cn[t.parentLocale] || (cn[t.parentLocale] = []),
                  cn[t.parentLocale].push({
                    name: e,
                    config: t,
                  }),
                  null
                );
              r = n._config;
            }
          return (
            (un[e] = new P(O(r, t))),
            cn[e] &&
              cn[e].forEach(function (e) {
                gn(e.name, e.config);
              }),
            pn(e),
            un[e]
          );
        }
        return delete un[e], null;
      }

      function yn(e, t) {
        if (null != t) {
          var n,
            r,
            s = ln;
          null != un[e] && null != un[e].parentLocale
            ? un[e].set(O(un[e]._config, t))
            : (null != (r = mn(e)) && (s = r._config),
              (t = O(s, t)),
              null == r && (t.abbr = e),
              ((n = new P(t)).parentLocale = un[e]),
              (un[e] = n)),
            pn(e);
        } else
          null != un[e] &&
            (null != un[e].parentLocale
              ? ((un[e] = un[e].parentLocale), e === pn() && pn(e))
              : null != un[e] && delete un[e]);
        return un[e];
      }

      function vn(e) {
        var t;
        if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
          return an;
        if (!i(e)) {
          if ((t = mn(e))) return t;
          e = [e];
        }
        return fn(e);
      }

      function wn() {
        return $(un);
      }

      function kn(e) {
        var t,
          n = e._a;
        return (
          n &&
            -2 === g(e).overflow &&
            ((t =
              n[Be] < 0 || n[Be] > 11
                ? Be
                : n[ze] < 1 || n[ze] > Qe(n[je], n[Be])
                ? ze
                : n[Ue] < 0 ||
                  n[Ue] > 24 ||
                  (24 === n[Ue] && (0 !== n[Ve] || 0 !== n[Je] || 0 !== n[Ke]))
                ? Ue
                : n[Ve] < 0 || n[Ve] > 59
                ? Ve
                : n[Je] < 0 || n[Je] > 59
                ? Je
                : n[Ke] < 0 || n[Ke] > 999
                ? Ke
                : -1),
            g(e)._overflowDayOfYear && (t < je || t > ze) && (t = ze),
            g(e)._overflowWeeks && -1 === t && (t = Ze),
            g(e)._overflowWeekday && -1 === t && (t = qe),
            (g(e).overflow = t)),
          e
        );
      }
      var _n =
          /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        xn =
          /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        bn = /Z|[+-]\d\d(?::?\d\d)?/,
        Sn = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1],
        ],
        Mn = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/],
        ],
        $n = /^\/?Date\((-?\d+)/i,
        Dn =
          /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        Tn = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480,
        };

      function Yn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = e._i,
          l = _n.exec(a) || xn.exec(a);
        if (l) {
          for (g(e).iso = !0, t = 0, n = Sn.length; t < n; t++)
            if (Sn[t][1].exec(l[1])) {
              (s = Sn[t][0]), (r = !1 !== Sn[t][2]);
              break;
            }
          if (null == s) return void (e._isValid = !1);
          if (l[3]) {
            for (t = 0, n = Mn.length; t < n; t++)
              if (Mn[t][1].exec(l[3])) {
                i = (l[2] || " ") + Mn[t][0];
                break;
              }
            if (null == i) return void (e._isValid = !1);
          }
          if (!r && null != i) return void (e._isValid = !1);
          if (l[4]) {
            if (!bn.exec(l[4])) return void (e._isValid = !1);
            o = "Z";
          }
          (e._f = s + (i || "") + (o || "")), Gn(e);
        } else e._isValid = !1;
      }

      function Cn(e, t, n, r, s, i) {
        var o = [
          On(e),
          tt.indexOf(t),
          parseInt(n, 10),
          parseInt(r, 10),
          parseInt(s, 10),
        ];
        return i && o.push(parseInt(i, 10)), o;
      }

      function On(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
      }

      function Pn(e) {
        return e
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, "");
      }

      function An(e, t, n) {
        return (
          !e ||
          Nt.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
          ((g(n).weekdayMismatch = !0), (n._isValid = !1), !1)
        );
      }

      function Ln(e, t, n) {
        if (e) return Tn[e];
        if (t) return 0;
        var r = parseInt(n, 10),
          s = r % 100;
        return ((r - s) / 100) * 60 + s;
      }

      function Nn(e) {
        var t,
          n = Dn.exec(Pn(e._i));
        if (n) {
          if (((t = Cn(n[4], n[3], n[2], n[5], n[6], n[7])), !An(n[1], t, e)))
            return;
          (e._a = t),
            (e._tzm = Ln(n[8], n[9], n[10])),
            (e._d = kt.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (g(e).rfc2822 = !0);
        } else e._isValid = !1;
      }

      function Hn(e) {
        var t = $n.exec(e._i);
        null === t
          ? (Yn(e),
            !1 === e._isValid &&
              (delete e._isValid,
              Nn(e),
              !1 === e._isValid &&
                (delete e._isValid,
                e._strict ? (e._isValid = !1) : r.createFromInputFallback(e))))
          : (e._d = new Date(+t[1]));
      }

      function In(e, t, n) {
        return null != e ? e : null != t ? t : n;
      }

      function Wn(e) {
        var t = new Date(r.now());
        return e._useUTC
          ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
          : [t.getFullYear(), t.getMonth(), t.getDate()];
      }

      function Rn(e) {
        var t,
          n,
          r,
          s,
          i,
          o = [];
        if (!e._d) {
          for (
            r = Wn(e),
              e._w && null == e._a[ze] && null == e._a[Be] && Fn(e),
              null != e._dayOfYear &&
                ((i = In(e._a[je], r[je])),
                (e._dayOfYear > pt(i) || 0 === e._dayOfYear) &&
                  (g(e)._overflowDayOfYear = !0),
                (n = kt(i, 0, e._dayOfYear)),
                (e._a[Be] = n.getUTCMonth()),
                (e._a[ze] = n.getUTCDate())),
              t = 0;
            t < 3 && null == e._a[t];
            ++t
          )
            e._a[t] = o[t] = r[t];
          for (; t < 7; t++)
            e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
          24 === e._a[Ue] &&
            0 === e._a[Ve] &&
            0 === e._a[Je] &&
            0 === e._a[Ke] &&
            ((e._nextDay = !0), (e._a[Ue] = 0)),
            (e._d = (e._useUTC ? kt : wt).apply(null, o)),
            (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[Ue] = 24),
            e._w &&
              void 0 !== e._w.d &&
              e._w.d !== s &&
              (g(e).weekdayMismatch = !0);
        }
      }

      function Fn(e) {
        var t, n, r, s, i, o, a, l, u;
        null != (t = e._w).GG || null != t.W || null != t.E
          ? ((i = 1),
            (o = 4),
            (n = In(t.GG, e._a[je], bt(Kn(), 1, 4).year)),
            (r = In(t.W, 1)),
            ((s = In(t.E, 1)) < 1 || s > 7) && (l = !0))
          : ((i = e._locale._week.dow),
            (o = e._locale._week.doy),
            (u = bt(Kn(), i, o)),
            (n = In(t.gg, e._a[je], u.year)),
            (r = In(t.w, u.week)),
            null != t.d
              ? ((s = t.d) < 0 || s > 6) && (l = !0)
              : null != t.e
              ? ((s = t.e + i), (t.e < 0 || t.e > 6) && (l = !0))
              : (s = i)),
          r < 1 || r > St(n, i, o)
            ? (g(e)._overflowWeeks = !0)
            : null != l
            ? (g(e)._overflowWeekday = !0)
            : ((a = xt(n, r, s, i, o)),
              (e._a[je] = a.year),
              (e._dayOfYear = a.dayOfYear));
      }

      function Gn(e) {
        if (e._f !== r.ISO_8601)
          if (e._f !== r.RFC_2822) {
            (e._a = []), (g(e).empty = !0);
            var t,
              n,
              s,
              i,
              o,
              a,
              l = "" + e._i,
              u = l.length,
              c = 0;
            for (
              s = B(e._f, e._locale).match(H) || [], t = 0;
              t < s.length;
              t++
            )
              (i = s[t]),
                (n = (l.match(Ne(i, e)) || [])[0]) &&
                  ((o = l.substr(0, l.indexOf(n))).length > 0 &&
                    g(e).unusedInput.push(o),
                  (l = l.slice(l.indexOf(n) + n.length)),
                  (c += n.length)),
                R[i]
                  ? (n ? (g(e).empty = !1) : g(e).unusedTokens.push(i),
                    Ge(i, n, e))
                  : e._strict && !n && g(e).unusedTokens.push(i);
            (g(e).charsLeftOver = u - c),
              l.length > 0 && g(e).unusedInput.push(l),
              e._a[Ue] <= 12 &&
                !0 === g(e).bigHour &&
                e._a[Ue] > 0 &&
                (g(e).bigHour = void 0),
              (g(e).parsedDateParts = e._a.slice(0)),
              (g(e).meridiem = e._meridiem),
              (e._a[Ue] = En(e._locale, e._a[Ue], e._meridiem)),
              null !== (a = g(e).era) &&
                (e._a[je] = e._locale.erasConvertYear(a, e._a[je])),
              Rn(e),
              kn(e);
          } else Nn(e);
        else Yn(e);
      }

      function En(e, t, n) {
        var r;
        return null == n
          ? t
          : null != e.meridiemHour
          ? e.meridiemHour(t, n)
          : null != e.isPM
          ? ((r = e.isPM(n)) && t < 12 && (t += 12),
            r || 12 !== t || (t = 0),
            t)
          : t;
      }

      function jn(e) {
        var t,
          n,
          r,
          s,
          i,
          o,
          a = !1;
        if (0 === e._f.length)
          return (g(e).invalidFormat = !0), void (e._d = new Date(NaN));
        for (s = 0; s < e._f.length; s++)
          (i = 0),
            (o = !1),
            (t = _({}, e)),
            null != e._useUTC && (t._useUTC = e._useUTC),
            (t._f = e._f[s]),
            Gn(t),
            y(t) && (o = !0),
            (i += g(t).charsLeftOver),
            (i += 10 * g(t).unusedTokens.length),
            (g(t).score = i),
            a
              ? i < r && ((r = i), (n = t))
              : (null == r || i < r || o) && ((r = i), (n = t), o && (a = !0));
        f(e, n || t);
      }

      function Bn(e) {
        if (!e._d) {
          var t = se(e._i),
            n = void 0 === t.day ? t.date : t.day;
          (e._a = h(
            [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
            function (e) {
              return e && parseInt(e, 10);
            }
          )),
            Rn(e);
        }
      }

      function zn(e) {
        var t = new x(kn(Un(e)));
        return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
      }

      function Un(e) {
        var t = e._i,
          n = e._f;
        return (
          (e._locale = e._locale || vn(e._l)),
          null === t || (void 0 === n && "" === t)
            ? v({
                nullInput: !0,
              })
            : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
              b(t)
                ? new x(kn(t))
                : (d(t) ? (e._d = t) : i(n) ? jn(e) : n ? Gn(e) : Vn(e),
                  y(e) || (e._d = null),
                  e))
        );
      }

      function Vn(e) {
        var t = e._i;
        u(t)
          ? (e._d = new Date(r.now()))
          : d(t)
          ? (e._d = new Date(t.valueOf()))
          : "string" == typeof t
          ? Hn(e)
          : i(t)
          ? ((e._a = h(t.slice(0), function (e) {
              return parseInt(e, 10);
            })),
            Rn(e))
          : o(t)
          ? Bn(e)
          : c(t)
          ? (e._d = new Date(t))
          : r.createFromInputFallback(e);
      }

      function Jn(e, t, n, r, s) {
        var a = {};
        return (
          (!0 !== t && !1 !== t) || ((r = t), (t = void 0)),
          (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
          ((o(e) && l(e)) || (i(e) && 0 === e.length)) && (e = void 0),
          (a._isAMomentObject = !0),
          (a._useUTC = a._isUTC = s),
          (a._l = n),
          (a._i = e),
          (a._f = t),
          (a._strict = r),
          zn(a)
        );
      }

      function Kn(e, t, n, r) {
        return Jn(e, t, n, r, !1);
      }
      (r.createFromInputFallback = M(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function (e) {
          e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
        }
      )),
        (r.ISO_8601 = function () {}),
        (r.RFC_2822 = function () {});
      var Zn = M(
          "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e < this ? this : e) : v();
          }
        ),
        qn = M(
          "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
          function () {
            var e = Kn.apply(null, arguments);
            return this.isValid() && e.isValid() ? (e > this ? this : e) : v();
          }
        );

      function Xn(e, t) {
        var n, r;
        if ((1 === t.length && i(t[0]) && (t = t[0]), !t.length)) return Kn();
        for (n = t[0], r = 1; r < t.length; ++r)
          (t[r].isValid() && !t[r][e](n)) || (n = t[r]);
        return n;
      }

      function Qn() {
        return Xn("isBefore", [].slice.call(arguments, 0));
      }

      function er() {
        return Xn("isAfter", [].slice.call(arguments, 0));
      }
      var tr = function () {
          return Date.now ? Date.now() : +new Date();
        },
        nr = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond",
        ];

      function rr(e) {
        var t,
          n,
          r = !1;
        for (t in e)
          if (
            a(e, t) &&
            (-1 === Ee.call(nr, t) || (null != e[t] && isNaN(e[t])))
          )
            return !1;
        for (n = 0; n < nr.length; ++n)
          if (e[nr[n]]) {
            if (r) return !1;
            parseFloat(e[nr[n]]) !== ce(e[nr[n]]) && (r = !0);
          }
        return !0;
      }

      function sr() {
        return this._isValid;
      }

      function ir() {
        return Tr(NaN);
      }

      function or(e) {
        var t = se(e),
          n = t.year || 0,
          r = t.quarter || 0,
          s = t.month || 0,
          i = t.week || t.isoWeek || 0,
          o = t.day || 0,
          a = t.hour || 0,
          l = t.minute || 0,
          u = t.second || 0,
          c = t.millisecond || 0;
        (this._isValid = rr(t)),
          (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60),
          (this._days = +o + 7 * i),
          (this._months = +s + 3 * r + 12 * n),
          (this._data = {}),
          (this._locale = vn()),
          this._bubble();
      }

      function ar(e) {
        return e instanceof or;
      }

      function lr(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
      }

      function ur(e, t, n) {
        var r,
          s = Math.min(e.length, t.length),
          i = Math.abs(e.length - t.length),
          o = 0;
        for (r = 0; r < s; r++)
          ((n && e[r] !== t[r]) || (!n && ce(e[r]) !== ce(t[r]))) && o++;
        return o + i;
      }

      function cr(e, t) {
        F(e, 0, 0, function () {
          var e = this.utcOffset(),
            n = "+";
          return (
            e < 0 && ((e = -e), (n = "-")),
            n + N(~~(e / 60), 2) + t + N(~~e % 60, 2)
          );
        });
      }
      cr("Z", ":"),
        cr("ZZ", ""),
        Le("Z", Oe),
        Le("ZZ", Oe),
        Re(["Z", "ZZ"], function (e, t, n) {
          (n._useUTC = !0), (n._tzm = hr(Oe, e));
        });
      var dr = /([\+\-]|\d\d)/gi;

      function hr(e, t) {
        var n,
          r,
          s = (t || "").match(e);
        return null === s
          ? null
          : 0 ===
            (r =
              60 *
                (n = ((s[s.length - 1] || []) + "").match(dr) || [
                  "-",
                  0,
                  0,
                ])[1] +
              ce(n[2]))
          ? 0
          : "+" === n[0]
          ? r
          : -r;
      }

      function fr(e, t) {
        var n, s;
        return t._isUTC
          ? ((n = t.clone()),
            (s = (b(e) || d(e) ? e.valueOf() : Kn(e).valueOf()) - n.valueOf()),
            n._d.setTime(n._d.valueOf() + s),
            r.updateOffset(n, !1),
            n)
          : Kn(e).local();
      }

      function mr(e) {
        return -Math.round(e._d.getTimezoneOffset());
      }

      function pr(e, t, n) {
        var s,
          i = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = hr(Oe, e))) return this;
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return (
            !this._isUTC && t && (s = mr(this)),
            (this._offset = e),
            (this._isUTC = !0),
            null != s && this.add(s, "m"),
            i !== e &&
              (!t || this._changeInProgress
                ? Ar(this, Tr(e - i, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  r.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? i : mr(this);
      }

      function gr(e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }

      function yr(e) {
        return this.utcOffset(0, e);
      }

      function vr(e) {
        return (
          this._isUTC &&
            (this.utcOffset(0, e),
            (this._isUTC = !1),
            e && this.subtract(mr(this), "m")),
          this
        );
      }

      function wr() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = hr(Ce, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
      }

      function kr(e) {
        return (
          !!this.isValid() &&
          ((e = e ? Kn(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
        );
      }

      function _r() {
        return (
          this.utcOffset() > this.clone().month(0).utcOffset() ||
          this.utcOffset() > this.clone().month(5).utcOffset()
        );
      }

      function xr() {
        if (!u(this._isDSTShifted)) return this._isDSTShifted;
        var e,
          t = {};
        return (
          _(t, this),
          (t = Un(t))._a
            ? ((e = t._isUTC ? m(t._a) : Kn(t._a)),
              (this._isDSTShifted =
                this.isValid() && ur(t._a, e.toArray()) > 0))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      }

      function br() {
        return !!this.isValid() && !this._isUTC;
      }

      function Sr() {
        return !!this.isValid() && this._isUTC;
      }

      function Mr() {
        return !!this.isValid() && this._isUTC && 0 === this._offset;
      }
      r.updateOffset = function () {};
      var $r = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Dr =
          /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Tr(e, t) {
        var n,
          r,
          s,
          i = e,
          o = null;
        return (
          ar(e)
            ? (i = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months,
              })
            : c(e) || !isNaN(+e)
            ? ((i = {}), t ? (i[t] = +e) : (i.milliseconds = +e))
            : (o = $r.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: 0,
                d: ce(o[ze]) * n,
                h: ce(o[Ue]) * n,
                m: ce(o[Ve]) * n,
                s: ce(o[Je]) * n,
                ms: ce(lr(1e3 * o[Ke])) * n,
              }))
            : (o = Dr.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (i = {
                y: Yr(o[2], n),
                M: Yr(o[3], n),
                w: Yr(o[4], n),
                d: Yr(o[5], n),
                h: Yr(o[6], n),
                m: Yr(o[7], n),
                s: Yr(o[8], n),
              }))
            : null == i
            ? (i = {})
            : "object" == typeof i &&
              ("from" in i || "to" in i) &&
              ((s = Or(Kn(i.from), Kn(i.to))),
              ((i = {}).ms = s.milliseconds),
              (i.M = s.months)),
          (r = new or(i)),
          ar(e) && a(e, "_locale") && (r._locale = e._locale),
          ar(e) && a(e, "_isValid") && (r._isValid = e._isValid),
          r
        );
      }

      function Yr(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
      }

      function Cr(e, t) {
        var n = {};
        return (
          (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
          e.clone().add(n.months, "M").isAfter(t) && --n.months,
          (n.milliseconds = +t - +e.clone().add(n.months, "M")),
          n
        );
      }

      function Or(e, t) {
        var n;
        return e.isValid() && t.isValid()
          ? ((t = fr(t, e)),
            e.isBefore(t)
              ? (n = Cr(e, t))
              : (((n = Cr(t, e)).milliseconds = -n.milliseconds),
                (n.months = -n.months)),
            n)
          : {
              milliseconds: 0,
              months: 0,
            };
      }

      function Pr(e, t) {
        return function (n, r) {
          var s;
          return (
            null === r ||
              isNaN(+r) ||
              (T(
                t,
                "moment()." +
                  t +
                  "(period, number) is deprecated. Please use moment()." +
                  t +
                  "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
              ),
              (s = n),
              (n = r),
              (r = s)),
            Ar(this, Tr(n, r), e),
            this
          );
        };
      }

      function Ar(e, t, n, s) {
        var i = t._milliseconds,
          o = lr(t._days),
          a = lr(t._months);
        e.isValid() &&
          ((s = null == s || s),
          a && ut(e, he(e, "Month") + a * n),
          o && fe(e, "Date", he(e, "Date") + o * n),
          i && e._d.setTime(e._d.valueOf() + i * n),
          s && r.updateOffset(e, o || a));
      }
      (Tr.fn = or.prototype), (Tr.invalid = ir);
      var Lr = Pr(1, "add"),
        Nr = Pr(-1, "subtract");

      function Hr(e) {
        return "string" == typeof e || e instanceof String;
      }

      function Ir(e) {
        return b(e) || d(e) || Hr(e) || c(e) || Rr(e) || Wr(e) || null == e;
      }

      function Wr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Rr(e) {
        var t = i(e),
          n = !1;
        return (
          t &&
            (n =
              0 ===
              e.filter(function (t) {
                return !c(t) && Hr(e);
              }).length),
          t && n
        );
      }

      function Fr(e) {
        var t,
          n,
          r = o(e) && !l(e),
          s = !1,
          i = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse",
          ];
        for (t = 0; t < i.length; t += 1) (n = i[t]), (s = s || a(e, n));
        return r && s;
      }

      function Gr(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }

      function Er(e, t) {
        1 === arguments.length &&
          (arguments[0]
            ? Ir(arguments[0])
              ? ((e = arguments[0]), (t = void 0))
              : Fr(arguments[0]) && ((t = arguments[0]), (e = void 0))
            : ((e = void 0), (t = void 0)));
        var n = e || Kn(),
          s = fr(n, this).startOf("day"),
          i = r.calendarFormat(this, s) || "sameElse",
          o = t && (Y(t[i]) ? t[i].call(this, n) : t[i]);
        return this.format(o || this.localeData().calendar(i, this, Kn(n)));
      }

      function jr() {
        return new x(this);
      }

      function Br(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() < this.clone().startOf(t).valueOf())
        );
      }

      function zr(e, t) {
        var n = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone().endOf(t).valueOf() < n.valueOf())
        );
      }

      function Ur(e, t, n, r) {
        var s = b(e) ? e : Kn(e),
          i = b(t) ? t : Kn(t);
        return (
          !!(this.isValid() && s.isValid() && i.isValid()) &&
          ("(" === (r = r || "()")[0]
            ? this.isAfter(s, n)
            : !this.isBefore(s, n)) &&
          (")" === r[1] ? this.isBefore(i, n) : !this.isAfter(i, n))
        );
      }

      function Vr(e, t) {
        var n,
          r = b(e) ? e : Kn(e);
        return (
          !(!this.isValid() || !r.isValid()) &&
          ("millisecond" === (t = re(t) || "millisecond")
            ? this.valueOf() === r.valueOf()
            : ((n = r.valueOf()),
              this.clone().startOf(t).valueOf() <= n &&
                n <= this.clone().endOf(t).valueOf()))
        );
      }

      function Jr(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
      }

      function Kr(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
      }

      function Zr(e, t, n) {
        var r, s, i;
        if (!this.isValid()) return NaN;
        if (!(r = fr(e, this)).isValid()) return NaN;
        switch (((s = 6e4 * (r.utcOffset() - this.utcOffset())), (t = re(t)))) {
          case "year":
            i = qr(this, r) / 12;
            break;
          case "month":
            i = qr(this, r);
            break;
          case "quarter":
            i = qr(this, r) / 3;
            break;
          case "second":
            i = (this - r) / 1e3;
            break;
          case "minute":
            i = (this - r) / 6e4;
            break;
          case "hour":
            i = (this - r) / 36e5;
            break;
          case "day":
            i = (this - r - s) / 864e5;
            break;
          case "week":
            i = (this - r - s) / 6048e5;
            break;
          default:
            i = this - r;
        }
        return n ? i : ue(i);
      }

      function qr(e, t) {
        if (e.date() < t.date()) return -qr(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return (
          -(
            n +
            (t - r < 0
              ? (t - r) / (r - e.clone().add(n - 1, "months"))
              : (t - r) / (e.clone().add(n + 1, "months") - r))
          ) || 0
        );
      }

      function Xr() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }

      function Qr(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? j(
              n,
              t
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : Y(Date.prototype.toISOString)
          ? t
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", j(n, "Z"))
          : j(
              n,
              t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }

      function es() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e,
          t,
          n,
          r,
          s = "moment",
          i = "";
        return (
          this.isLocal() ||
            ((s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
            (i = "Z")),
          (e = "[" + s + '("]'),
          (t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
          (n = "-MM-DD[T]HH:mm:ss.SSS"),
          (r = i + '[")]'),
          this.format(e + t + n + r)
        );
      }

      function ts(e) {
        e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var t = j(this, e);
        return this.localeData().postformat(t);
      }

      function ns(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              to: this,
              from: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function rs(e) {
        return this.from(Kn(), e);
      }

      function ss(e, t) {
        return this.isValid() && ((b(e) && e.isValid()) || Kn(e).isValid())
          ? Tr({
              from: this,
              to: e,
            })
              .locale(this.locale())
              .humanize(!t)
          : this.localeData().invalidDate();
      }

      function is(e) {
        return this.to(Kn(), e);
      }

      function os(e) {
        var t;
        return void 0 === e
          ? this._locale._abbr
          : (null != (t = vn(e)) && (this._locale = t), this);
      }
      (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
        (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
      var as = M(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function (e) {
          return void 0 === e ? this.localeData() : this.locale(e);
        }
      );

      function ls() {
        return this._locale;
      }
      var us = 1e3,
        cs = 60 * us,
        ds = 60 * cs,
        hs = 3506328 * ds;

      function fs(e, t) {
        return ((e % t) + t) % t;
      }

      function ms(e, t, n) {
        return e < 100 && e >= 0
          ? new Date(e + 400, t, n) - hs
          : new Date(e, t, n).valueOf();
      }

      function ps(e, t, n) {
        return e < 100 && e >= 0
          ? Date.UTC(e + 400, t, n) - hs
          : Date.UTC(e, t, n);
      }

      function gs(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t -= fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds));
            break;
          case "minute":
            (t = this._d.valueOf()), (t -= fs(t, cs));
            break;
          case "second":
            (t = this._d.valueOf()), (t -= fs(t, us));
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function ys(e) {
        var t, n;
        if (void 0 === (e = re(e)) || "millisecond" === e || !this.isValid())
          return this;
        switch (((n = this._isUTC ? ps : ms), e)) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            t =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (t = this._d.valueOf()),
              (t +=
                ds - fs(t + (this._isUTC ? 0 : this.utcOffset() * cs), ds) - 1);
            break;
          case "minute":
            (t = this._d.valueOf()), (t += cs - fs(t, cs) - 1);
            break;
          case "second":
            (t = this._d.valueOf()), (t += us - fs(t, us) - 1);
        }
        return this._d.setTime(t), r.updateOffset(this, !0), this;
      }

      function vs() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }

      function ws() {
        return Math.floor(this.valueOf() / 1e3);
      }

      function ks() {
        return new Date(this.valueOf());
      }

      function _s() {
        var e = this;
        return [
          e.year(),
          e.month(),
          e.date(),
          e.hour(),
          e.minute(),
          e.second(),
          e.millisecond(),
        ];
      }

      function xs() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds(),
        };
      }

      function bs() {
        return this.isValid() ? this.toISOString() : null;
      }

      function Ss() {
        return y(this);
      }

      function Ms() {
        return f({}, g(this));
      }

      function $s() {
        return g(this).overflow;
      }

      function Ds() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict,
        };
      }

      function Ts(e, t) {
        var n,
          s,
          i,
          o = this._eras || vn("en")._eras;
        for (n = 0, s = o.length; n < s; ++n)
          switch (
            ("string" == typeof o[n].since &&
              ((i = r(o[n].since).startOf("day")), (o[n].since = i.valueOf())),
            typeof o[n].until)
          ) {
            case "undefined":
              o[n].until = 1 / 0;
              break;
            case "string":
              (i = r(o[n].until).startOf("day").valueOf()),
                (o[n].until = i.valueOf());
          }
        return o;
      }

      function Ys(e, t, n) {
        var r,
          s,
          i,
          o,
          a,
          l = this.eras();
        for (e = e.toUpperCase(), r = 0, s = l.length; r < s; ++r)
          if (
            ((i = l[r].name.toUpperCase()),
            (o = l[r].abbr.toUpperCase()),
            (a = l[r].narrow.toUpperCase()),
            n)
          )
            switch (t) {
              case "N":
              case "NN":
              case "NNN":
                if (o === e) return l[r];
                break;
              case "NNNN":
                if (i === e) return l[r];
                break;
              case "NNNNN":
                if (a === e) return l[r];
            }
          else if ([i, o, a].indexOf(e) >= 0) return l[r];
      }

      function Cs(e, t) {
        var n = e.since <= e.until ? 1 : -1;
        return void 0 === t
          ? r(e.since).year()
          : r(e.since).year() + (t - e.offset) * n;
      }

      function Os() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].name;
          if (r[e].until <= n && n <= r[e].since) return r[e].name;
        }
        return "";
      }

      function Ps() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].narrow;
          if (r[e].until <= n && n <= r[e].since) return r[e].narrow;
        }
        return "";
      }

      function As() {
        var e,
          t,
          n,
          r = this.localeData().eras();
        for (e = 0, t = r.length; e < t; ++e) {
          if (
            ((n = this.clone().startOf("day").valueOf()),
            r[e].since <= n && n <= r[e].until)
          )
            return r[e].abbr;
          if (r[e].until <= n && n <= r[e].since) return r[e].abbr;
        }
        return "";
      }

      function Ls() {
        var e,
          t,
          n,
          s,
          i = this.localeData().eras();
        for (e = 0, t = i.length; e < t; ++e)
          if (
            ((n = i[e].since <= i[e].until ? 1 : -1),
            (s = this.clone().startOf("day").valueOf()),
            (i[e].since <= s && s <= i[e].until) ||
              (i[e].until <= s && s <= i[e].since))
          )
            return (this.year() - r(i[e].since).year()) * n + i[e].offset;
        return this.year();
      }

      function Ns(e) {
        return (
          a(this, "_erasNameRegex") || Es.call(this),
          e ? this._erasNameRegex : this._erasRegex
        );
      }

      function Hs(e) {
        return (
          a(this, "_erasAbbrRegex") || Es.call(this),
          e ? this._erasAbbrRegex : this._erasRegex
        );
      }

      function Is(e) {
        return (
          a(this, "_erasNarrowRegex") || Es.call(this),
          e ? this._erasNarrowRegex : this._erasRegex
        );
      }

      function Ws(e, t) {
        return t.erasAbbrRegex(e);
      }

      function Rs(e, t) {
        return t.erasNameRegex(e);
      }

      function Fs(e, t) {
        return t.erasNarrowRegex(e);
      }

      function Gs(e, t) {
        return t._eraYearOrdinalRegex || Te;
      }

      function Es() {
        var e,
          t,
          n = [],
          r = [],
          s = [],
          i = [],
          o = this.eras();
        for (e = 0, t = o.length; e < t; ++e)
          r.push(Ie(o[e].name)),
            n.push(Ie(o[e].abbr)),
            s.push(Ie(o[e].narrow)),
            i.push(Ie(o[e].name)),
            i.push(Ie(o[e].abbr)),
            i.push(Ie(o[e].narrow));
        (this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i")),
          (this._erasNameRegex = new RegExp("^(" + r.join("|") + ")", "i")),
          (this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i")),
          (this._erasNarrowRegex = new RegExp("^(" + s.join("|") + ")", "i"));
      }

      function js(e, t) {
        F(0, [e, e.length], 0, t);
      }

      function Bs(e) {
        return Zs.call(
          this,
          e,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }

      function zs(e) {
        return Zs.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
      }

      function Us() {
        return St(this.year(), 1, 4);
      }

      function Vs() {
        return St(this.isoWeekYear(), 1, 4);
      }

      function Js() {
        var e = this.localeData()._week;
        return St(this.year(), e.dow, e.doy);
      }

      function Ks() {
        var e = this.localeData()._week;
        return St(this.weekYear(), e.dow, e.doy);
      }

      function Zs(e, t, n, r, s) {
        var i;
        return null == e
          ? bt(this, r, s).year
          : (t > (i = St(e, r, s)) && (t = i), qs.call(this, e, t, n, r, s));
      }

      function qs(e, t, n, r, s) {
        var i = xt(e, t, n, r, s),
          o = kt(i.year, 0, i.dayOfYear);
        return (
          this.year(o.getUTCFullYear()),
          this.month(o.getUTCMonth()),
          this.date(o.getUTCDate()),
          this
        );
      }

      function Xs(e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }
      F("N", 0, 0, "eraAbbr"),
        F("NN", 0, 0, "eraAbbr"),
        F("NNN", 0, 0, "eraAbbr"),
        F("NNNN", 0, 0, "eraName"),
        F("NNNNN", 0, 0, "eraNarrow"),
        F("y", ["y", 1], "yo", "eraYear"),
        F("y", ["yy", 2], 0, "eraYear"),
        F("y", ["yyy", 3], 0, "eraYear"),
        F("y", ["yyyy", 4], 0, "eraYear"),
        Le("N", Ws),
        Le("NN", Ws),
        Le("NNN", Ws),
        Le("NNNN", Rs),
        Le("NNNNN", Fs),
        Re(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, r) {
          var s = n._locale.erasParse(e, r, n._strict);
          s ? (g(n).era = s) : (g(n).invalidEra = e);
        }),
        Le("y", Te),
        Le("yy", Te),
        Le("yyy", Te),
        Le("yyyy", Te),
        Le("yo", Gs),
        Re(["y", "yy", "yyy", "yyyy"], je),
        Re(["yo"], function (e, t, n, r) {
          var s;
          n._locale._eraYearOrdinalRegex &&
            (s = e.match(n._locale._eraYearOrdinalRegex)),
            n._locale.eraYearOrdinalParse
              ? (t[je] = n._locale.eraYearOrdinalParse(e, s))
              : (t[je] = parseInt(e, 10));
        }),
        F(0, ["gg", 2], 0, function () {
          return this.weekYear() % 100;
        }),
        F(0, ["GG", 2], 0, function () {
          return this.isoWeekYear() % 100;
        }),
        js("gggg", "weekYear"),
        js("ggggg", "weekYear"),
        js("GGGG", "isoWeekYear"),
        js("GGGGG", "isoWeekYear"),
        ne("weekYear", "gg"),
        ne("isoWeekYear", "GG"),
        oe("weekYear", 1),
        oe("isoWeekYear", 1),
        Le("G", Ye),
        Le("g", Ye),
        Le("GG", xe, ve),
        Le("gg", xe, ve),
        Le("GGGG", $e, ke),
        Le("gggg", $e, ke),
        Le("GGGGG", De, _e),
        Le("ggggg", De, _e),
        Fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, r) {
          t[r.substr(0, 2)] = ce(e);
        }),
        Fe(["gg", "GG"], function (e, t, n, s) {
          t[s] = r.parseTwoDigitYear(e);
        }),
        F("Q", 0, "Qo", "quarter"),
        ne("quarter", "Q"),
        oe("quarter", 7),
        Le("Q", ye),
        Re("Q", function (e, t) {
          t[Be] = 3 * (ce(e) - 1);
        }),
        F("D", ["DD", 2], "Do", "date"),
        ne("date", "D"),
        oe("date", 9),
        Le("D", xe),
        Le("DD", xe, ve),
        Le("Do", function (e, t) {
          return e
            ? t._dayOfMonthOrdinalParse || t._ordinalParse
            : t._dayOfMonthOrdinalParseLenient;
        }),
        Re(["D", "DD"], ze),
        Re("Do", function (e, t) {
          t[ze] = ce(e.match(xe)[0]);
        });
      var Qs = de("Date", !0);

      function ei(e) {
        var t =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == e ? t : this.add(e - t, "d");
      }
      F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        ne("dayOfYear", "DDD"),
        oe("dayOfYear", 4),
        Le("DDD", Me),
        Le("DDDD", we),
        Re(["DDD", "DDDD"], function (e, t, n) {
          n._dayOfYear = ce(e);
        }),
        F("m", ["mm", 2], 0, "minute"),
        ne("minute", "m"),
        oe("minute", 14),
        Le("m", xe),
        Le("mm", xe, ve),
        Re(["m", "mm"], Ve);
      var ti = de("Minutes", !1);
      F("s", ["ss", 2], 0, "second"),
        ne("second", "s"),
        oe("second", 15),
        Le("s", xe),
        Le("ss", xe, ve),
        Re(["s", "ss"], Je);
      var ni,
        ri,
        si = de("Seconds", !1);
      for (
        F("S", 0, 0, function () {
          return ~~(this.millisecond() / 100);
        }),
          F(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10);
          }),
          F(0, ["SSS", 3], 0, "millisecond"),
          F(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond();
          }),
          F(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond();
          }),
          F(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond();
          }),
          F(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond();
          }),
          F(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond();
          }),
          F(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond();
          }),
          ne("millisecond", "ms"),
          oe("millisecond", 16),
          Le("S", Me, ye),
          Le("SS", Me, ve),
          Le("SSS", Me, we),
          ni = "SSSS";
        ni.length <= 9;
        ni += "S"
      )
        Le(ni, Te);

      function ii(e, t) {
        t[Ke] = ce(1e3 * ("0." + e));
      }
      for (ni = "S"; ni.length <= 9; ni += "S") Re(ni, ii);

      function oi() {
        return this._isUTC ? "UTC" : "";
      }

      function ai() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      (ri = de("Milliseconds", !1)),
        F("z", 0, 0, "zoneAbbr"),
        F("zz", 0, 0, "zoneName");
      var li = x.prototype;

      function ui(e) {
        return Kn(1e3 * e);
      }

      function ci() {
        return Kn.apply(null, arguments).parseZone();
      }

      function di(e) {
        return e;
      }
      (li.add = Lr),
        (li.calendar = Er),
        (li.clone = jr),
        (li.diff = Zr),
        (li.endOf = ys),
        (li.format = ts),
        (li.from = ns),
        (li.fromNow = rs),
        (li.to = ss),
        (li.toNow = is),
        (li.get = me),
        (li.invalidAt = $s),
        (li.isAfter = Br),
        (li.isBefore = zr),
        (li.isBetween = Ur),
        (li.isSame = Vr),
        (li.isSameOrAfter = Jr),
        (li.isSameOrBefore = Kr),
        (li.isValid = Ss),
        (li.lang = as),
        (li.locale = os),
        (li.localeData = ls),
        (li.max = qn),
        (li.min = Zn),
        (li.parsingFlags = Ms),
        (li.set = pe),
        (li.startOf = gs),
        (li.subtract = Nr),
        (li.toArray = _s),
        (li.toObject = xs),
        (li.toDate = ks),
        (li.toISOString = Qr),
        (li.inspect = es),
        "undefined" != typeof Symbol &&
          null != Symbol.for &&
          (li[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">";
          }),
        (li.toJSON = bs),
        (li.toString = Xr),
        (li.unix = ws),
        (li.valueOf = vs),
        (li.creationData = Ds),
        (li.eraName = Os),
        (li.eraNarrow = Ps),
        (li.eraAbbr = As),
        (li.eraYear = Ls),
        (li.year = gt),
        (li.isLeapYear = yt),
        (li.weekYear = Bs),
        (li.isoWeekYear = zs),
        (li.quarter = li.quarters = Xs),
        (li.month = ct),
        (li.daysInMonth = dt),
        (li.week = li.weeks = Yt),
        (li.isoWeek = li.isoWeeks = Ct),
        (li.weeksInYear = Js),
        (li.weeksInWeekYear = Ks),
        (li.isoWeeksInYear = Us),
        (li.isoWeeksInISOWeekYear = Vs),
        (li.date = Qs),
        (li.day = li.days = zt),
        (li.weekday = Ut),
        (li.isoWeekday = Vt),
        (li.dayOfYear = ei),
        (li.hour = li.hours = sn),
        (li.minute = li.minutes = ti),
        (li.second = li.seconds = si),
        (li.millisecond = li.milliseconds = ri),
        (li.utcOffset = pr),
        (li.utc = yr),
        (li.local = vr),
        (li.parseZone = wr),
        (li.hasAlignedHourOffset = kr),
        (li.isDST = _r),
        (li.isLocal = br),
        (li.isUtcOffset = Sr),
        (li.isUtc = Mr),
        (li.isUTC = Mr),
        (li.zoneAbbr = oi),
        (li.zoneName = ai),
        (li.dates = M("dates accessor is deprecated. Use date instead.", Qs)),
        (li.months = M("months accessor is deprecated. Use month instead", ct)),
        (li.years = M("years accessor is deprecated. Use year instead", gt)),
        (li.zone = M(
          "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
          gr
        )),
        (li.isDSTShifted = M(
          "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
          xr
        ));
      var hi = P.prototype;

      function fi(e, t, n, r) {
        var s = vn(),
          i = m().set(r, t);
        return s[n](i, e);
      }

      function mi(e, t, n) {
        if ((c(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
          return fi(e, t, n, "month");
        var r,
          s = [];
        for (r = 0; r < 12; r++) s[r] = fi(e, r, n, "month");
        return s;
      }

      function pi(e, t, n, r) {
        "boolean" == typeof e
          ? (c(t) && ((n = t), (t = void 0)), (t = t || ""))
          : ((n = t = e),
            (e = !1),
            c(t) && ((n = t), (t = void 0)),
            (t = t || ""));
        var s,
          i = vn(),
          o = e ? i._week.dow : 0,
          a = [];
        if (null != n) return fi(t, (n + o) % 7, r, "day");
        for (s = 0; s < 7; s++) a[s] = fi(t, (s + o) % 7, r, "day");
        return a;
      }

      function gi(e, t) {
        return mi(e, t, "months");
      }

      function yi(e, t) {
        return mi(e, t, "monthsShort");
      }

      function vi(e, t, n) {
        return pi(e, t, n, "weekdays");
      }

      function wi(e, t, n) {
        return pi(e, t, n, "weekdaysShort");
      }

      function ki(e, t, n) {
        return pi(e, t, n, "weekdaysMin");
      }
      (hi.calendar = L),
        (hi.longDateFormat = U),
        (hi.invalidDate = J),
        (hi.ordinal = q),
        (hi.preparse = di),
        (hi.postformat = di),
        (hi.relativeTime = Q),
        (hi.pastFuture = ee),
        (hi.set = C),
        (hi.eras = Ts),
        (hi.erasParse = Ys),
        (hi.erasConvertYear = Cs),
        (hi.erasAbbrRegex = Hs),
        (hi.erasNameRegex = Ns),
        (hi.erasNarrowRegex = Is),
        (hi.months = it),
        (hi.monthsShort = ot),
        (hi.monthsParse = lt),
        (hi.monthsRegex = ft),
        (hi.monthsShortRegex = ht),
        (hi.week = Mt),
        (hi.firstDayOfYear = Tt),
        (hi.firstDayOfWeek = Dt),
        (hi.weekdays = Ft),
        (hi.weekdaysMin = Et),
        (hi.weekdaysShort = Gt),
        (hi.weekdaysParse = Bt),
        (hi.weekdaysRegex = Jt),
        (hi.weekdaysShortRegex = Kt),
        (hi.weekdaysMinRegex = Zt),
        (hi.isPM = nn),
        (hi.meridiem = on),
        pn("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD",
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC",
            },
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function (e) {
            var t = e % 10;
            return (
              e +
              (1 === ce((e % 100) / 10)
                ? "th"
                : 1 === t
                ? "st"
                : 2 === t
                ? "nd"
                : 3 === t
                ? "rd"
                : "th")
            );
          },
        }),
        (r.lang = M(
          "moment.lang is deprecated. Use moment.locale instead.",
          pn
        )),
        (r.langData = M(
          "moment.langData is deprecated. Use moment.localeData instead.",
          vn
        ));
      var _i = Math.abs;

      function xi() {
        var e = this._data;
        return (
          (this._milliseconds = _i(this._milliseconds)),
          (this._days = _i(this._days)),
          (this._months = _i(this._months)),
          (e.milliseconds = _i(e.milliseconds)),
          (e.seconds = _i(e.seconds)),
          (e.minutes = _i(e.minutes)),
          (e.hours = _i(e.hours)),
          (e.months = _i(e.months)),
          (e.years = _i(e.years)),
          this
        );
      }

      function bi(e, t, n, r) {
        var s = Tr(t, n);
        return (
          (e._milliseconds += r * s._milliseconds),
          (e._days += r * s._days),
          (e._months += r * s._months),
          e._bubble()
        );
      }

      function Si(e, t) {
        return bi(this, e, t, 1);
      }

      function Mi(e, t) {
        return bi(this, e, t, -1);
      }

      function $i(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
      }

      function Di() {
        var e,
          t,
          n,
          r,
          s,
          i = this._milliseconds,
          o = this._days,
          a = this._months,
          l = this._data;
        return (
          (i >= 0 && o >= 0 && a >= 0) ||
            (i <= 0 && o <= 0 && a <= 0) ||
            ((i += 864e5 * $i(Yi(a) + o)), (o = 0), (a = 0)),
          (l.milliseconds = i % 1e3),
          (e = ue(i / 1e3)),
          (l.seconds = e % 60),
          (t = ue(e / 60)),
          (l.minutes = t % 60),
          (n = ue(t / 60)),
          (l.hours = n % 24),
          (o += ue(n / 24)),
          (a += s = ue(Ti(o))),
          (o -= $i(Yi(s))),
          (r = ue(a / 12)),
          (a %= 12),
          (l.days = o),
          (l.months = a),
          (l.years = r),
          this
        );
      }

      function Ti(e) {
        return (4800 * e) / 146097;
      }

      function Yi(e) {
        return (146097 * e) / 4800;
      }

      function Ci(e) {
        if (!this.isValid()) return NaN;
        var t,
          n,
          r = this._milliseconds;
        if ("month" === (e = re(e)) || "quarter" === e || "year" === e)
          switch (
            ((t = this._days + r / 864e5), (n = this._months + Ti(t)), e)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((t = this._days + Math.round(Yi(this._months))), e)) {
            case "week":
              return t / 7 + r / 6048e5;
            case "day":
              return t + r / 864e5;
            case "hour":
              return 24 * t + r / 36e5;
            case "minute":
              return 1440 * t + r / 6e4;
            case "second":
              return 86400 * t + r / 1e3;
            case "millisecond":
              return Math.floor(864e5 * t) + r;
            default:
              throw new Error("Unknown unit " + e);
          }
      }

      function Oi() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * ce(this._months / 12)
          : NaN;
      }

      function Pi(e) {
        return function () {
          return this.as(e);
        };
      }
      var Ai = Pi("ms"),
        Li = Pi("s"),
        Ni = Pi("m"),
        Hi = Pi("h"),
        Ii = Pi("d"),
        Wi = Pi("w"),
        Ri = Pi("M"),
        Fi = Pi("Q"),
        Gi = Pi("y");

      function Ei() {
        return Tr(this);
      }

      function ji(e) {
        return (e = re(e)), this.isValid() ? this[e + "s"]() : NaN;
      }

      function Bi(e) {
        return function () {
          return this.isValid() ? this._data[e] : NaN;
        };
      }
      var zi = Bi("milliseconds"),
        Ui = Bi("seconds"),
        Vi = Bi("minutes"),
        Ji = Bi("hours"),
        Ki = Bi("days"),
        Zi = Bi("months"),
        qi = Bi("years");

      function Xi() {
        return ue(this.days() / 7);
      }
      var Qi = Math.round,
        eo = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11,
        };

      function to(e, t, n, r, s) {
        return s.relativeTime(t || 1, !!n, e, r);
      }

      function no(e, t, n, r) {
        var s = Tr(e).abs(),
          i = Qi(s.as("s")),
          o = Qi(s.as("m")),
          a = Qi(s.as("h")),
          l = Qi(s.as("d")),
          u = Qi(s.as("M")),
          c = Qi(s.as("w")),
          d = Qi(s.as("y")),
          h =
            (i <= n.ss && ["s", i]) ||
            (i < n.s && ["ss", i]) ||
            (o <= 1 && ["m"]) ||
            (o < n.m && ["mm", o]) ||
            (a <= 1 && ["h"]) ||
            (a < n.h && ["hh", a]) ||
            (l <= 1 && ["d"]) ||
            (l < n.d && ["dd", l]);
        return (
          null != n.w && (h = h || (c <= 1 && ["w"]) || (c < n.w && ["ww", c])),
          ((h = h ||
            (u <= 1 && ["M"]) ||
            (u < n.M && ["MM", u]) ||
            (d <= 1 && ["y"]) || ["yy", d])[2] = t),
          (h[3] = +e > 0),
          (h[4] = r),
          to.apply(null, h)
        );
      }

      function ro(e) {
        return void 0 === e ? Qi : "function" == typeof e && ((Qi = e), !0);
      }

      function so(e, t) {
        return (
          void 0 !== eo[e] &&
          (void 0 === t
            ? eo[e]
            : ((eo[e] = t), "s" === e && (eo.ss = t - 1), !0))
        );
      }

      function io(e, t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var n,
          r,
          s = !1,
          i = eo;
        return (
          "object" == typeof e && ((t = e), (e = !1)),
          "boolean" == typeof e && (s = e),
          "object" == typeof t &&
            ((i = Object.assign({}, eo, t)),
            null != t.s && null == t.ss && (i.ss = t.s - 1)),
          (r = no(this, !s, i, (n = this.localeData()))),
          s && (r = n.pastFuture(+this, r)),
          n.postformat(r)
        );
      }
      var oo = Math.abs;

      function ao(e) {
        return (e > 0) - (e < 0) || +e;
      }

      function lo() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e,
          t,
          n,
          r,
          s,
          i,
          o,
          a,
          l = oo(this._milliseconds) / 1e3,
          u = oo(this._days),
          c = oo(this._months),
          d = this.asSeconds();
        return d
          ? ((e = ue(l / 60)),
            (t = ue(e / 60)),
            (l %= 60),
            (e %= 60),
            (n = ue(c / 12)),
            (c %= 12),
            (r = l ? l.toFixed(3).replace(/\.?0+$/, "") : ""),
            (s = d < 0 ? "-" : ""),
            (i = ao(this._months) !== ao(d) ? "-" : ""),
            (o = ao(this._days) !== ao(d) ? "-" : ""),
            (a = ao(this._milliseconds) !== ao(d) ? "-" : ""),
            s +
              "P" +
              (n ? i + n + "Y" : "") +
              (c ? i + c + "M" : "") +
              (u ? o + u + "D" : "") +
              (t || e || l ? "T" : "") +
              (t ? a + t + "H" : "") +
              (e ? a + e + "M" : "") +
              (l ? a + r + "S" : ""))
          : "P0D";
      }
      var uo = or.prototype;
      return (
        (uo.isValid = sr),
        (uo.abs = xi),
        (uo.add = Si),
        (uo.subtract = Mi),
        (uo.as = Ci),
        (uo.asMilliseconds = Ai),
        (uo.asSeconds = Li),
        (uo.asMinutes = Ni),
        (uo.asHours = Hi),
        (uo.asDays = Ii),
        (uo.asWeeks = Wi),
        (uo.asMonths = Ri),
        (uo.asQuarters = Fi),
        (uo.asYears = Gi),
        (uo.valueOf = Oi),
        (uo._bubble = Di),
        (uo.clone = Ei),
        (uo.get = ji),
        (uo.milliseconds = zi),
        (uo.seconds = Ui),
        (uo.minutes = Vi),
        (uo.hours = Ji),
        (uo.days = Ki),
        (uo.weeks = Xi),
        (uo.months = Zi),
        (uo.years = qi),
        (uo.humanize = io),
        (uo.toISOString = lo),
        (uo.toString = lo),
        (uo.toJSON = lo),
        (uo.locale = os),
        (uo.localeData = ls),
        (uo.toIsoString = M(
          "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
          lo
        )),
        (uo.lang = as),
        F("X", 0, 0, "unix"),
        F("x", 0, 0, "valueOf"),
        Le("x", Ye),
        Le("X", Pe),
        Re("X", function (e, t, n) {
          n._d = new Date(1e3 * parseFloat(e));
        }),
        Re("x", function (e, t, n) {
          n._d = new Date(ce(e));
        }),
        //! moment.js
        (r.version = "2.29.1"),
        s(Kn),
        (r.fn = li),
        (r.min = Qn),
        (r.max = er),
        (r.now = tr),
        (r.utc = m),
        (r.unix = ui),
        (r.months = gi),
        (r.isDate = d),
        (r.locale = pn),
        (r.invalid = v),
        (r.duration = Tr),
        (r.isMoment = b),
        (r.weekdays = vi),
        (r.parseZone = ci),
        (r.localeData = vn),
        (r.isDuration = ar),
        (r.monthsShort = yi),
        (r.weekdaysMin = ki),
        (r.defineLocale = gn),
        (r.updateLocale = yn),
        (r.locales = wn),
        (r.weekdaysShort = wi),
        (r.normalizeUnits = re),
        (r.relativeTimeRounding = ro),
        (r.relativeTimeThreshold = so),
        (r.calendarFormat = Gr),
        (r.prototype = li),
        (r.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM",
        }),
        r
      );
    })();
  });

  var Pn;
  const { document: An, window: Ln } = X;

  function Nn(e) {
    let t, n;
    return (
      (t = new Lt({
        props: {
          hasFrame: e[10].hasFrame,
          title: e[10].title,
          $$slots: {
            default: [Fn],
          },
          $$scope: {
            ctx: e,
          },
        },
      })),
      t.$on("close", e[20]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          1024 & n[0] && (r.hasFrame = e[10].hasFrame),
            1024 & n[0] && (r.title = e[10].title),
            (1392 & n[0]) | (8 & n[1]) &&
              (r.$$scope = {
                dirty: n,
                ctx: e,
              }),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Hn(t) {
    let n, r;
    return (
      (n = new vn({})),
      n.$on("close", t[19]),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function In(e) {
    let t, n;
    return (
      (t = new Tn({
        props: {
          userStats: e[4],
          config: Vt,
          isPrime: e[8].isPrime,
          daysSince: e[11],
          todaysScore: e[6].length,
          guessRef: e[5].gotCorrect ? e[6].length + 1 : 0,
          hasFinished: e[5].hasFinished,
        },
      })),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, r) {
          ee(t, e, r), (n = !0);
        },
        p(e, n) {
          const r = {};
          16 & n[0] && (r.userStats = e[4]),
            256 & n[0] && (r.isPrime = e[8].isPrime),
            64 & n[0] && (r.todaysScore = e[6].length),
            96 & n[0] && (r.guessRef = e[5].gotCorrect ? e[6].length + 1 : 0),
            32 & n[0] && (r.hasFinished = e[5].hasFinished),
            t.$set(r);
        },
        i(e) {
          n || (Z(t.$$.fragment, e), (n = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (n = !1);
        },
        d(e) {
          te(t, e);
        },
      }
    );
  }

  function Wn(t) {
    let n, r;
    return (
      (n = new Ut({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Rn(t) {
    let n, r;
    return (
      (n = new Ht({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function MLn(t) {
    let n, r;
    return (
      (n = new MLCt({})),
      {
        c() {
          Q(n.$$.fragment);
        },
        m(e, t) {
          ee(n, e, t), (r = !0);
        },
        p: e,
        i(e) {
          r || (Z(n.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(n.$$.fragment, e), (r = !1);
        },
        d(e) {
          te(n, e);
        },
      }
    );
  }

  function Fn(e) {
    let t, n, r, s;
    const i = [Rn, Wn, In, Hn, MLn],
      o = [];

    function a(e, t) {
      return "info" == e[10].name
        ? 0
        : "donate" == e[10].name
        ? 1
        : "results" == e[10].name
        ? 2
        : "help" == e[10].name
        ? 3
        : "music-list" == e[10].name
        ? 4
        : -1;
    }
    return (
      ~(t = a(e)) && (n = o[t] = i[t](e)),
      {
        c() {
          n && n.c(), (r = b());
        },
        m(e, n) {
          ~t && o[t].m(e, n), g(e, r, n), (s = !0);
        },
        p(e, s) {
          let l = t;
          (t = a(e)),
            t === l
              ? ~t && o[t].p(e, s)
              : (n &&
                  (J(),
                  q(o[l], 1, 1, () => {
                    o[l] = null;
                  }),
                  K()),
                ~t
                  ? ((n = o[t]),
                    n ? n.p(e, s) : ((n = o[t] = i[t](e)), n.c()),
                    Z(n, 1),
                    n.m(r.parentNode, r))
                  : (n = null));
        },
        i(e) {
          s || (Z(n), (s = !0));
        },
        o(e) {
          q(n), (s = !1);
        },
        d(e) {
          ~t && o[t].d(e), e && y(r);
        },
      }
    );
  }

  function Gn(e) {
    let t, n, r;

    function s(t) {
      e[23](t);
    }
    let i = {
      isPrime: e[8].isPrime,
      config: Vt,
      allOptions: e[9],
      currentAttempt: e[6].length + 1,
    };
    return (
      void 0 !== e[7] && (i.guessInput = e[7]),
      (t = new Yt({
        props: i,
      })),
      e[22](t),
      H.push(() =>
        (function (e, t, n) {
          const r = e.$$.props[t];
          void 0 !== r && ((e.$$.bound[r] = n), n(e.$$.ctx[r]));
        })(t, "guessInput", s)
      ),
      t.$on("guess", e[15]),
      {
        c() {
          Q(t.$$.fragment);
        },
        m(e, n) {
          ee(t, e, n), (r = !0);
        },
        p(e, r) {
          const s = {};
          var i;
          256 & r[0] && (s.isPrime = e[8].isPrime),
            512 & r[0] && (s.allOptions = e[9]),
            64 & r[0] && (s.currentAttempt = e[6].length + 1),
            !n &&
              128 & r[0] &&
              ((n = !0),
              (s.guessInput = e[7]),
              (i = () => (n = !1)),
              W.push(i)),
            t.$set(s);
        },
        i(e) {
          r || (Z(t.$$.fragment, e), (r = !0));
        },
        o(e) {
          q(t.$$.fragment, e), (r = !1);
        },
        d(n) {
          e[22](null), te(t, n);
        },
      }
    );
  }

  function En(e) {
    let t, n, s, i, o, a, l, u, c, d, h, f, m, v, k, _, b, $, D, Y, C, O, P, A;
    G(e[18]),
      (l = new me({
        props: {
          properties: ["G-3QSG4MYSLD"],
        },
      }));
    let L = e[10].isActive && Nn(e);
    (f = new xe({})),
      f.$on("modal", e[16]),
      (_ = new Ie({
        props: {
          userGuesses: e[6],
          maxAttempts: Vt.maxAttempts,
          currentHeardle: e[2],
          todaysGame: e[5],
        },
      })),
      ($ = new mn({
        props: {
          config: Vt,
          userGuesses: e[6],
          currentHeardle: e[2],
          hasFinished: e[5].hasFinished,
          gotCorrect: e[5].gotCorrect,
          isPrime: e[8].isPrime,
          guessRef: e[5].gotCorrect ? e[6].length : 0,
        },
      }));
    let N = {
      config: Vt,
      gameState: e[8],
      currentHeardle: e[2],
      trackDuration: e[2].duration,
      currentAttempt: e[6].length + 1,
    };
    (Y = new gt({
      props: N,
    })),
      e[21](Y),
      Y.$on("updateSong", e[13]),
      Y.$on("updatePlayerState", e[14]);
    let H = !e[5].hasFinished && e[8].gameIsActive && Gn(e);
    return {
      c() {
        (t = w("meta")),
          (n = w("link")),
          (s = w("link")),
          (i = w("link")),
          (o = w("link")),
          (a = x()),
          Q(l.$$.fragment),
          (u = x()),
          (c = w("main")),
          L && L.c(),
          (d = x()),
          (h = w("div")),
          Q(f.$$.fragment),
          (m = x()),
          (v = w("div")),
          (k = w("div")),
          Q(_.$$.fragment),
          (b = x()),
          Q($.$$.fragment),
          (D = x()),
          Q(Y.$$.fragment),
          (C = x()),
          H && H.c(),
          (An.title = artist + " Heardle Infinite"),
          M(t, "name", "description"),
          M(
            t,
            "content",
            "Guess the " +
              artist +
              " song from the intro in as few tries as possible"
          ),
          M(o, "rel", "manifest"),
          M(o, "href", "/site.webmanifest"),
          M(h, "class", "flex-none"),
          M(
            k,
            "class",
            "max-w-screen-sm w-full mx-auto h-full flex flex-col justify-between overflow-auto"
          ),
          M(v, "class", "w-full flex flex-col flex-grow relative"),
          M(
            c,
            "class",
            "bg-custom-bg text-custom-fg overflow-auto flex flex-col"
          ),
          T(c, "height", e[3] + "px");
      },
      m(r, y) {
        p(An.head, t),
          p(An.head, n),
          p(An.head, s),
          p(An.head, i),
          p(An.head, o),
          g(r, a, y),
          ee(l, r, y),
          g(r, u, y),
          g(r, c, y),
          L && L.m(c, null),
          p(c, d),
          p(c, h),
          ee(f, h, null),
          p(c, m),
          p(c, v),
          p(v, k),
          ee(_, k, null),
          p(k, b),
          ee($, k, null),
          p(c, D),
          ee(Y, c, null),
          p(c, C),
          H && H.m(c, null),
          (O = !0),
          P ||
            ((A = [S(Ln, "resize", e[17]), S(Ln, "resize", e[18])]), (P = !0));
      },
      p(e, t) {
        e[10].isActive
          ? L
            ? (L.p(e, t), 1024 & t[0] && Z(L, 1))
            : ((L = Nn(e)), L.c(), Z(L, 1), L.m(c, d))
          : L &&
            (J(),
            q(L, 1, 1, () => {
              L = null;
            }),
            K());
        const n = {};
        64 & t[0] && (n.userGuesses = e[6]),
          4 & t[0] && (n.currentHeardle = e[2]),
          32 & t[0] && (n.todaysGame = e[5]),
          _.$set(n);
        const r = {};
        64 & t[0] && (r.userGuesses = e[6]),
          4 & t[0] && (r.currentHeardle = e[2]),
          32 & t[0] && (r.hasFinished = e[5].hasFinished),
          32 & t[0] && (r.gotCorrect = e[5].gotCorrect),
          256 & t[0] && (r.isPrime = e[8].isPrime),
          96 & t[0] && (r.guessRef = e[5].gotCorrect ? e[6].length : 0),
          $.$set(r);
        const s = {};
        256 & t[0] && (s.gameState = e[8]),
          4 & t[0] && (s.currentHeardle = e[2]),
          4 & t[0] && (s.trackDuration = e[2].duration),
          64 & t[0] && (s.currentAttempt = e[6].length + 1),
          Y.$set(s),
          !e[5].hasFinished && e[8].gameIsActive
            ? H
              ? (H.p(e, t), 288 & t[0] && Z(H, 1))
              : ((H = Gn(e)), H.c(), Z(H, 1), H.m(c, null))
            : H &&
              (J(),
              q(H, 1, 1, () => {
                H = null;
              }),
              K()),
          (!O || 8 & t[0]) && T(c, "height", e[3] + "px");
      },
      i(e) {
        O ||
          (Z(l.$$.fragment, e),
          Z(L),
          Z(f.$$.fragment, e),
          Z(_.$$.fragment, e),
          Z($.$$.fragment, e),
          Z(Y.$$.fragment, e),
          Z(H),
          (O = !0));
      },
      o(e) {
        q(l.$$.fragment, e),
          q(L),
          q(f.$$.fragment, e),
          q(_.$$.fragment, e),
          q($.$$.fragment, e),
          q(Y.$$.fragment, e),
          q(H),
          (O = !1);
      },
      d(d) {
        y(t),
          y(n),
          y(s),
          y(i),
          y(o),
          d && y(a),
          te(l, d),
          d && y(u),
          d && y(c),
          L && L.d(),
          te(f),
          te(_),
          te($),
          e[21](null),
          te(Y),
          H && H.d(),
          (P = !1),
          r(A);
      },
    };
  }

  function jn(e, t, n) {
    let r, s, i, o;
    u(e, Cn, (e) => n(26, (r = [...musicNameList]))),
      u(e, On, (e) => n(27, (s = e)));
    let a = currentIndex,
      l = {
        url: s[a].url,
        correctAnswer: s[a].answer,
        id: a,
        guessList: [],
        hasFinished: !1,
        hasStarted: !1,
      };
    setCurrentHeardle(l);
    // console.log("a", l);
    var c, d;
    // EventListener, originnally here to reload the page if the day changed
    // void 0 !== document.hidden ?
    //     ((c = "hidden"), (d = "visibilitychange")) :
    //     void 0 !== document.msHidden ?
    //     ((c = "msHidden"), (d = "msvisibilitychange")) :
    //     void 0 !== document.webkitHidden &&
    //     ((c = "webkitHidden"), (d = "webkitvisibilitychange")),
    //     void 0 === document.addEventListener ||
    //     void 0 === c ||
    //     document.addEventListener(
    //         d,
    //         function() {
    //             document[c] || a === currentIndex || location.reload(!0);
    //         }, !1
    //     );
    let h,
      f,
      m = 0;

    function p() {
      n(3, (m = window.innerHeight));
    }
    P(() => {
      p();
    });
    if (null == localStorage.getItem("userStats")) {
      (h = []), localStorage.setItem("userStats", JSON.stringify(h));
    } else {
      if (firstLoad) {
        h = [];
        firstLoad = false;
      } else {
        h = JSON.parse(localStorage.getItem("userStats"));
      }
      f = h.find((e) => e.id === l.id);
    }
    void 0 === f &&
      ((f = l),
      h.push(f),
      localStorage.setItem("userStats", JSON.stringify(h)));
    let g,
      y,
      v = f.guessList,
      w = {
        gameIsActive: !1,
        musicIsPlaying: !1,
        playerIsReady: !1,
        // isPrime: a >= 7, // C'est le bug bizarre des 9 secondes ?
        isPrime: true,
      };
    let k = {
      isActive: !1,
      hasFrame: !0,
      title: "",
      name: "",
    };

    function _(e, t, r) {
      n(10, (k.isActive = !0), k),
        n(10, (k.name = e), k),
        n(10, (k.title = t), k),
        n(10, (k.hasFrame = r), k);
    }

    null == localStorage.getItem("firstTime") &&
      (_("help", "how to play"), localStorage.setItem("firstTime", "false"));
    return [
      i,
      o,
      l,
      m,
      h,
      f,
      v,
      g,
      w,
      y,
      k,
      a,
      p,
      function (e) {
        let t = e.detail.currentSong;
        // console.log("current song", l);
        n(2, (l.artist = l.correctAnswer.split(" - ")[1]), l),
          n(2, (l.title = l.correctAnswer.split(" - ")[0]), l),
          n(2, (l.img = t.artwork_url), l),
          n(2, (l.duration = t.duration), l),
          n(2, (l.genre = t.genre), l),
          n(2, (l.date = t.release_date), l),
          (function (e, t, n) {
            e.set(n);
          })(Cn, (r = [...r, l.correctAnswer]), r),
          n(9, (y = r)),
          n(8, (w.playerIsReady = !0), w),
          f.hasFinished || n(8, (w.gameIsActive = !0), w);
      },
      function (e) {
        l.hasStarted ||
          (pe("startGame#" + l.id, {
            name: "startGame",
          }),
          pe("startGame", {
            name: "startGame",
          }),
          n(2, (l.hasStarted = !0), l)),
          n(8, (w.musicIsPlaying = e.detail.musicIsPlaying), w);
      },
      function (e) {
        let t = e.detail.guess,
          r = e.detail.isSkipped,
          s = !1;
        var o;
        r ||
          t != l.correctAnswer ||
          ((s = !0),
          pe("correctGuess", {
            name: "correctGuess",
          }),
          pe("correctGuess#" + l.id, {
            name: "correctGuess",
          })),
          r
            ? (pe("skippedGuess", {
                name: "skippedGuess",
              }),
              pe("skippedGuess#" + l.id, {
                name: "skippedGuess",
              }))
            : s ||
              (pe("incorrectGuess", {
                name: "incorrectGuess",
              }),
              pe("incorrectGuess#" + l.id, {
                name: "incorrectGuess",
              })),
          n(
            6,
            (v = v.concat({
              answer: e.detail.guess,
              isCorrect: s,
              isSkipped: r,
            }))
          ),
          evaluateGuessMetadata(v);
        n(5, (f.guessList = v), f),
          localStorage.setItem("userStats", JSON.stringify(h)),
          (v.length != Vt.maxAttempts && 1 != s) ||
            ((o = s),
            n(8, (w.gameIsActive = !1), w),
            n(5, (f.hasFinished = !0), f),
            n(5, (f.gotCorrect = o), f),
            n(5, (f.score = v.length), f),
            localStorage.setItem("userStats", JSON.stringify(h)),
            i.resetAndPlay(),
            o
              ? (pe("wonGame", {
                  name: "won",
                }),
                pe("wonGame#" + l.id, {
                  name: "won",
                }))
              : (pe("lostGame", {
                  name: "lost",
                }),
                pe("lostGame#" + l.id, {
                  name: "lost",
                })),
            pe("endGame" + l.id + "in" + v.length, {
              name: "#" + v.length,
            }),
            pe("endGame", {
              name: "endGame",
            }),
            pe("endGame#" + l.id, {
              name: "endGame",
            }),
            pe("gameStats#" + l.id, {
              name: v,
            }));
      },
      function (e) {
        _(e.detail.name, e.detail.title, e.detail.hasFrame);
      },
      () => {},
      function () {
        n(3, (m = Ln.innerHeight));
      },
      () => n(10, (k.isActive = !1), k),
      () => n(10, (k.isActive = !1), k),
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (i = e), n(0, i);
        });
      },
      function (e) {
        H[e ? "unshift" : "push"](() => {
          (o = e), n(1, o);
        });
      },
      function (e) {
        (g = e), n(7, g);
      },
    ];
  }
  return new (class extends se {
    constructor(e) {
      super(), re(this, e, jn, En, i, {}, null, [-1, -1]);
    }
  })({
    target: document.body,
    props: {},
  });
})();
