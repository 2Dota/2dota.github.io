// Full hero detail data - abilities, descriptions, tips and tricks
// One entry per hero slug matching heroes.ts

export interface HeroAbility {
  name: string;
  type: 'Active' | 'Passive' | 'Toggle' | 'Channeled' | 'Aura';
  description: string;
  cooldown?: string;
  manaCost?: string;
}

export interface HeroDetail {
  slug: string;
  lore: string;
  overview: string;
  abilities: HeroAbility[];
  tips: string[];
  counters: string[];
  synergies: string[];
  itemGuide: {
    early: string[];
    mid: string[];
    late: string[];
  };
}

export const HERO_DETAILS: Record<string, HeroDetail> = {
  axe: {
    slug: 'axe',
    lore: 'Mogul Khan carved his way to the rank of High Warlord of the Red Mist through a literal battlefield of corpses. He was the last man standing after killing every superior officer in his legion.',
    overview: 'Axe is a melee strength initiator who excels at forcing enemies to attack him, then punishing them for doing so. He is one of the most reliable initiators in the game thanks to Blink Dagger into Berserker\'s Call.',
    abilities: [
      { name: 'Berserker\'s Call', type: 'Active', description: 'Taunts all nearby enemies, forcing them to attack Axe for 2.6 seconds while Axe gains bonus armor.', cooldown: '16/14/12/10s', manaCost: '80' },
      { name: 'Battle Hunger', type: 'Active', description: 'Afflicts an enemy with Battle Hunger, causing it to take damage per second until it kills a unit or the duration ends.', cooldown: '20/15/10/5s', manaCost: '80/90/100/110' },
      { name: 'Counter Helix', type: 'Passive', description: 'When attacked, Axe has a 20% chance to spin and deal pure damage to all nearby enemies.', cooldown: '0.45/0.4/0.35/0.3s' },
      { name: 'Culling Blade', type: 'Active', description: 'Axe strikes at a target. If it is below a health threshold, it is instantly killed, granting Axe and nearby allies bonus movement speed.', cooldown: '60/50/40s', manaCost: '60/120/180' },
    ],
    tips: [
      'Berserker\'s Call hits invisible units - use it to reveal Riki or Bounty Hunter even if you cannot see them.',
      'Counter Helix procs on any attack including towers - pull enemy heroes under your tower then Call them to maximize damage.',
      'Culling Blade cooldown resets on kills, and kills trigger even on spell-immune units.',
      'Blink Dagger into Berserker\'s Call can be done in the middle of a Ravage or other channeled stun - blink before the stun lands.',
      'Battle Hunger slows and deals damage but breaks on any creep kill - use it on enemies near death to prevent escape.',
      'Counter Helix is a passive that can proc multiple times per second during Berserker\'s Call when multiple enemies attack you simultaneously.',
    ],
    counters: ['Outworld Destroyer', 'Huskar', 'Doom', 'Ancient Apparition'],
    synergies: ['Crystal Maiden', 'Skywrath Mage', 'Earthshaker', 'Magnus'],
    itemGuide: {
      early: ['Blink Dagger', 'Phase Boots', 'Magic Wand'],
      mid: ['Blade Mail', 'Black King Bar', 'Vanguard'],
      late: ['Crimson Guard', 'Lotus Orb', 'Heart of Tarrasque'],
    },
  },
  antimage: {
    slug: 'antimage',
    lore: 'After his monastery was destroyed by a demon incursion, Anti-Mage spent years training body and mind to become the perfect weapon against magical forces.',
    overview: 'Anti-Mage is a hard carry who becomes extremely powerful when farmed. His Mana Break passively burns enemy mana on every attack, making him devastating against mana-dependent heroes. Blink gives him incredible mobility.',
    abilities: [
      { name: 'Mana Break', type: 'Passive', description: 'Burns enemy mana on every attack and deals bonus damage equal to a portion of the mana burned.' },
      { name: 'Blink', type: 'Active', description: 'Anti-Mage blinks to a target location up to 925 units away.', cooldown: '15/10/7/5s', manaCost: '60' },
      { name: 'Spell Shield', type: 'Passive', description: 'Increases magic resistance and reduces the duration of most spells cast on Anti-Mage.' },
      { name: 'Mana Void', type: 'Active', description: 'Creates an explosion at target unit that deals damage based on how much mana is missing from the target. Nearby units take half damage.', cooldown: '70/60/50s', manaCost: '125/200/275' },
    ],
    tips: [
      'Mana Break stacks with Manta Style illusions - all illusions burn mana, devastating heroes with large mana pools.',
      'Blink has no mana cost at level 4 - use it to dodge projectiles mid-flight by blinking the instant they are thrown.',
      'Mana Void deals damage based on MISSING mana, not total mana - burn enemies dry before using it.',
      'Anti-Mage\'s Spell Shield reduces all magic damage including abilities like Rot and Counter Helix.',
      'Use Blink to quickly move between jungle camps when farming - you can clear every camp in the jungle in under two minutes once farmed.',
      'Battle Fury cleave combined with Mana Break burns mana of all nearby units - use this to drain Storm Spirit of mana in teamfights.',
    ],
    counters: ['Doom', 'Bloodseeker', 'Nyx Assassin', 'Orchid Malevolence holders'],
    synergies: ['Skywrath Mage', 'Vengeful Spirit', 'Crystal Maiden'],
    itemGuide: {
      early: ['Quelling Blade', 'Wraith Band x2', 'Power Treads'],
      mid: ['Battle Fury', 'Manta Style', 'Skull Basher'],
      late: ['Abyssal Blade', 'Eye of Skadi', 'Butterfly'],
    },
  },
  earthshaker: {
    slug: 'earthshaker',
    lore: 'Raigor Stonehoof was once a centaur shaman of immense power who voluntarily encased himself in stone to share the suffering of the earth.',
    overview: 'Earthshaker is a strength support initiator who can disable entire teams with Echo Slam. He works best when enemies are grouped together. Blink Dagger is a required purchase to unlock his full potential.',
    abilities: [
      { name: 'Fissure', type: 'Active', description: 'Slams the ground to create an impassable ridge of stalagmites, stunning and damaging enemies along its line.', cooldown: '17s', manaCost: '150' },
      { name: 'Enchant Totem', type: 'Active', description: 'Empowers the Earthshaker\'s totem for one attack, dealing bonus damage in a small radius.', cooldown: '5s', manaCost: '75' },
      { name: 'Aftershock', type: 'Passive', description: 'Causes the earth to shake each time Earthshaker casts a spell, stunning and damaging all nearby enemies.' },
      { name: 'Echo Slam', type: 'Active', description: 'Sends out a shockwave that bounces between enemies. Each hit triggers additional bounces, making it exponentially more powerful against grouped targets.', cooldown: '130/115/100s', manaCost: '145/205/265' },
    ],
    tips: [
      'Fissure can be used to split enemy teams in half during a chase or to trap enemies against cliffs.',
      'Aftershock procs on every spell cast including Enchant Totem - Totem into attack triggers Aftershock stun twice.',
      'Echo Slam deals its extra bounces per enemy unit present. One enemy gives one bounce, but five enemies each give five bounces.',
      'Fissure can block the ancient camps, denying enemy jungle access without vision.',
      'Blink into Echo Slam then immediately Fissure to prevent enemies from dispersing after the echo.',
      'Wand charges from Echo Slam can be lifesaving - ES naturally draws enemy spell usage during fights.',
    ],
    counters: ['Force Staff users', 'Ember Spirit', 'Puck', 'Morphling'],
    synergies: ['Magnus', 'Enigma', 'Drow Ranger', 'Axe'],
    itemGuide: {
      early: ['Blink Dagger', 'Arcane Boots', 'Magic Wand'],
      mid: ['Aghanim\'s Scepter', 'Black King Bar', 'Force Staff'],
      late: ['Refresher Orb', 'Lotus Orb', 'Aeon Disk'],
    },
  },
  pudge: {
    slug: 'pudge',
    lore: 'In the Fields of Endless Carnage, Pudge the Butcher carved flesh from the corpses of fallen heroes for years, adding their mass to his own grotesque form.',
    overview: 'Pudge is a strength initiator whose Hook is one of the most skill-expressive abilities in Dota 2. Landing a hook on an isolated hero or support creates a kill opportunity out of nowhere. He scales well with kills thanks to Flesh Heap.',
    abilities: [
      { name: 'Meat Hook', type: 'Active', description: 'Launches a hook at a unit or location. If it hits a unit, the unit is dragged back to Pudge and takes damage.', cooldown: '30/24/18/12s', manaCost: '110/120/130/140' },
      { name: 'Rot', type: 'Toggle', description: 'A toxic cloud that damages and slows nearby enemies while also damaging Pudge. The slow persists for 1 second after Rot is turned off.', manaCost: '0' },
      { name: 'Flesh Heap', type: 'Passive', description: 'Provides magic resistance and permanently gains strength whenever a nearby enemy hero dies.' },
      { name: 'Dismember', type: 'Channeled', description: 'Channels a bite on a target enemy hero, stunning it and dealing damage over time. Also heals Pudge.', cooldown: '30s', manaCost: '100/130/170' },
    ],
    tips: [
      'Rot can be toggled off mid-hook animation before the enemy lands to deny them the opportunity to detect your position.',
      'Hook behind trees, pillars, or at the edge of the minimap reveal radius to hook enemies who think they are safe.',
      'Dismember can be used through Black King Bar - Pudge\'s own BKB does not interrupt the channel.',
      'Flesh Heap strength accumulates permanently. Pudge naturally becomes unkillable in long games even without items.',
      'Hook allied units to save them from certain death - the hook pulls friendly units back to Pudge as well.',
      'Rot slow persists for 1 second after turning it off. Turn it off right before hooking to chase with the slow still active.',
    ],
    counters: ['Ghost Scepter', 'Diffusal Blade', 'Doom', 'Slark'],
    synergies: ['Clockwerk', 'Nyx Assassin', 'Lion', 'Shadow Shaman'],
    itemGuide: {
      early: ['Magic Wand', 'Arcane Boots', 'Hood of Defiance'],
      mid: ['Blink Dagger', 'Black King Bar', 'Aether Lens'],
      late: ['Heart of Tarrasque', 'Aghanim\'s Scepter', 'Bloodstone'],
    },
  },
  invoker: {
    slug: 'invoker',
    lore: 'Carl the Invoker mastered ten thousand spells over a lifetime of study. He distills them into three elemental orbs that he combines to invoke an arsenal of deadly abilities.',
    overview: 'Invoker is the most mechanically complex hero in Dota 2. He combines three elemental orbs (Quas, Wex, Exort) to invoke 14 different spells. Mastery of Invoker separates casual players from professionals.',
    abilities: [
      { name: 'Quas', type: 'Toggle', description: 'Conjures a ball of ice. Each Quas level increases HP regen passively.' },
      { name: 'Wex', type: 'Toggle', description: 'Conjures a ball of lightning. Each Wex level increases attack speed and movement speed passively.' },
      { name: 'Exort', type: 'Toggle', description: 'Conjures a ball of fire. Each Exort level increases attack damage passively.' },
      { name: 'Invoke', type: 'Active', description: 'Combines the current orbs to invoke a specific spell. Allows access to 14 unique spells depending on orb combination.', cooldown: '2s' },
    ],
    tips: [
      'Tornado into EMP is the bread-and-butter combo. Tornado suspends enemies in the air while EMP detonates under them.',
      'Cold Snap (QQQ) combined with Forge Spirits (EEE) is a devastating ganking combo in the early game.',
      'Sun Strike has global range and is invisible. Use it to scout for enemies across the map or snipe fleeing heroes.',
      'Alacrity (WWW + E) gives Invoke the highest attack speed in the game - useful for right-click mid playstyle.',
      'Ice Wall (QQQ + E or Q+Q+W) placed behind enemies cuts off their retreat path and slows drastically.',
      'Deafening Blast (QWE) is Invoke\'s most versatile spell - use it to interrupt Dismember, Black Hole, or other channels.',
      'Chaos Meteor (WWW + E) rolls a meteor across the ground. Position it so it passes through grouped enemies for maximum damage.',
    ],
    counters: ['Silencer', 'Doom', 'Diffusal Blade', 'Ancient Apparition'],
    synergies: ['Witch Doctor', 'Magnus', 'Earthshaker', 'Disruptor'],
    itemGuide: {
      early: ['Null Talisman', 'Boots of Speed', 'Magic Wand'],
      mid: ['Eul\'s Scepter', 'Aghanim\'s Scepter', 'Orchid Malevolence'],
      late: ['Refresher Orb', 'Bloodthorn', 'Octarine Core'],
    },
  },
  rubick: {
    slug: 'rubick',
    lore: 'Son of the Grand Magus, Rubick has an uncanny talent for absorbing the essence of others\' spells. He wanders Dota cataloguing magical technique.',
    overview: 'Rubick is a support who can steal and use the last spell cast by an enemy hero. A skilled Rubick player can turn the enemy\'s most powerful abilities against them, making him one of the highest-skill-ceiling supports in the game.',
    abilities: [
      { name: 'Telekinesis', type: 'Active', description: 'Lifts the target unit into the air and hurls them. The unit lands stunned.', cooldown: '28/22/16/10s', manaCost: '110/120/130/140' },
      { name: 'Fade Bolt', type: 'Active', description: 'Creates a bolt of lightning that bounces between enemies, reducing their attack damage.', cooldown: '13s', manaCost: '120/130/140/150' },
      { name: 'Arcane Supremacy', type: 'Passive', description: 'Gives Rubick a bonus to spell amplification and increases the range of all stolen spells.' },
      { name: 'Spell Steal', type: 'Active', description: 'Steals the spell most recently cast by a target enemy hero. Rubick can use this spell until he steals another or dies.', cooldown: '18s', manaCost: '25' },
    ],
    tips: [
      'Stolen spells scale with your own level and stats, not the original caster. Rubick\'s stolen Black Hole benefits from his own magic resistance pierce.',
      'You can steal spells immediately after an enemy casts them even if they are on cooldown - the stolen spell goes on its own cooldown.',
      'Telekinesis lifts the target in the air and drops them. You can drop them onto impassable terrain to create a long stun.',
      'Arcane Supremacy increases the cast range of stolen spells significantly. Stolen Lina ultimate has massive range on Rubick.',
      'If you steal Echo Slam, position yourself in the middle of the enemy team and cast it immediately for full value.',
      'Stolen Invoker spells retain their effect but Rubick cannot re-invoke - steal the best active spell at the moment.',
    ],
    counters: ['Doom', 'Diffusal Blade', 'Silencer', 'Outworld Destroyer'],
    synergies: ['Enigma', 'Magnus', 'Tidehunter', 'Lion'],
    itemGuide: {
      early: ['Arcane Boots', 'Magic Wand', 'Null Talisman'],
      mid: ['Aether Lens', 'Blink Dagger', 'Force Staff'],
      late: ['Aghanim\'s Scepter', 'Octarine Core', 'Refresher Orb'],
    },
  },
  crystal_maiden: {
    slug: 'crystal_maiden',
    lore: 'Rylai was born into a warm family but discovered her ice powers and was sent to learn from a master far away. She now uses her gift to protect allies and freeze enemies solid.',
    overview: 'Crystal Maiden is one of the most beginner-friendly supports in Dota 2. Her Arcane Aura provides passive mana regen to all allied heroes globally, her Frost Nova and Crystal Nova slow and damage, and Freezing Field is one of the most destructive ultimates in the game if she can channel it safely.',
    abilities: [
      { name: 'Crystal Nova', type: 'Active', description: 'Blasts enemies with frost in an area, damaging and slowing their movement and attack speed.', cooldown: '11/10/9/8s', manaCost: '130/140/150/160' },
      { name: 'Frostbite', type: 'Active', description: 'Encases a target in ice, preventing it from moving or attacking and dealing damage over time.', cooldown: '9s', manaCost: '140' },
      { name: 'Arcane Aura', type: 'Aura', description: 'Gives allied heroes across the entire map additional mana regeneration. CM herself gets 4x the benefit.' },
      { name: 'Freezing Field', type: 'Channeled', description: 'CM channels random ice explosions around her in a large area for 10 seconds, slowing and damaging enemies.', cooldown: '150/120/90s', manaCost: '200/400/600' },
    ],
    tips: [
      'Arcane Aura is a global aura - it benefits all allied heroes regardless of map position. This makes CM invaluable even if she does nothing else.',
      'Frostbite can be cast on allied units to provide a damage shield effect with Aghanim\'s Shard.',
      'Freezing Field explosions cluster around nearby enemies - stand inside or next to enemy heroes to maximize the number of hits they take.',
      'BKB prevents interruption of Freezing Field. BKB then channeling in the middle of the enemy team is one of the highest damage outputs in the game.',
      'Crystal Nova slows attack speed significantly - use it defensively on your carry to reduce physical DPS on them.',
      'Aghanim\'s Scepter upgrades Freezing Field to give allies armor and reduces the cooldown dramatically.',
    ],
    counters: ['Huskar', 'Invoker', 'Silencer', 'Ancient Apparition'],
    synergies: ['Sven', 'Faceless Void', 'Drow Ranger', 'Terrorblade'],
    itemGuide: {
      early: ['Arcane Boots', 'Clarity Potions', 'Magic Wand'],
      mid: ['Glimmer Cape', 'Force Staff', 'Aghanim\'s Scepter'],
      late: ['Refresher Orb', 'Octarine Core', 'Black King Bar'],
    },
  },
  lina: {
    slug: 'lina',
    lore: 'Elder sister to Crystal Maiden, Lina was forced to leave home for the opposite reason - the uncontrollable fire that burst from her fingertips.',
    overview: 'Lina is a ranged intelligence hero who deals enormous burst magical damage. She transitions from a mid-lane burst mage to a physical carry due to her passive Fiery Soul, which permanently increases attack speed with spell casts.',
    abilities: [
      { name: 'Dragon Slave', type: 'Active', description: 'Unleashes a wave of fire along a line that damages all enemies it hits.', cooldown: '9/8/7/6s', manaCost: '100/115/130/145' },
      { name: 'Light Strike Array', type: 'Active', description: 'Summons a column of fire that damages and stuns enemies in a target area.', cooldown: '7s', manaCost: '90/100/110/120' },
      { name: 'Fiery Soul', type: 'Passive', description: 'Each time Lina casts a spell, she gains bonus attack speed and movement speed that stack multiple times.' },
      { name: 'Laguna Blade', type: 'Active', description: 'Fires a bolt of lightning at a single target, dealing massive damage.', cooldown: '45s', manaCost: '280/420/680' },
    ],
    tips: [
      'Fiery Soul stacks last 18 seconds and each spell cast adds a fresh stack. Chain casting to maintain maximum stacks.',
      'Dragon Slave has long range and a wide hitbox. Use it to clear waves and poke enemies from safe distance.',
      'Light Strike Array has a 0.5-second delay - aim it slightly ahead of a moving target or use Dragon Slave first to slow them.',
      'Laguna Blade pierces spell immunity with Aghanim\'s Scepter - a crucial upgrade against BKB carries.',
      'Lina can right-click kill enemies with 6+ Fiery Soul stacks. Build into a carry role with Scythe or Bloodthorn mid-game.',
      'Aether Lens dramatically increases the cast range of Light Strike Array and Dragon Slave, making Lina harder to reach.',
    ],
    counters: ['Anti-Mage', 'Storm Spirit', 'Ancient Apparition', 'Pugna'],
    synergies: ['Magnus', 'Earthshaker', 'Disruptor', 'Nyx Assassin'],
    itemGuide: {
      early: ['Null Talisman', 'Boots of Speed', 'Magic Wand'],
      mid: ['Eul\'s Scepter', 'Aghanim\'s Scepter', 'Power Treads'],
      late: ['Scythe of Vyse', 'Bloodthorn', 'Refresher Orb'],
    },
  },
  enigma: {
    slug: 'enigma',
    lore: 'No one knows where Enigma came from. He seems to be a fundamental force of the universe itself, drawn to the conflict between Radiant and Dire.',
    overview: 'Enigma is an intelligence support whose Black Hole is the most feared teamfight ultimate in Dota 2. His Malefice and Midnight Pulse make early ganks deadly, and Eidolons provide excellent jungle clearing and lane pressure.',
    abilities: [
      { name: 'Malefice', type: 'Active', description: 'Stuns a target repeatedly with seismic jolts. Each jolt stuns and damages.', cooldown: '25/20/15/10s', manaCost: '120' },
      { name: 'Demonic Conversion', type: 'Active', description: 'Converts a creep into three Eidolons that multiply over time.', cooldown: '35s', manaCost: '170' },
      { name: 'Midnight Pulse', type: 'Active', description: 'Creates a dark resonance that deals a percentage of enemy max HP as damage per second in an area.', cooldown: '40s', manaCost: '110/120/130/140' },
      { name: 'Black Hole', type: 'Channeled', description: 'Summons a black hole that pulls all nearby enemy units toward its center, disabling and dealing damage. One of the most powerful teamfight ultimates in the game.', cooldown: '200/180/160s', manaCost: '100/150/200' },
    ],
    tips: [
      'Place Midnight Pulse under Black Hole - the combination deals max HP percentage damage making it effective against any hero.',
      'Blink Dagger into Black Hole is the standard initiation. Pop Midnight Pulse immediately before or after.',
      'Eidolons automatically attack the nearest enemy and multiply once per hit. They are one of the best early jungle clearers in the game.',
      'Black Hole can be interrupted by almost anything - use BKB before channeling against teams with disables.',
      'Force Staff can reposition allies into Black Hole, or reposition enemies into a better Black Hole position.',
      'Malefice has an incredibly short cooldown at max level (10s) and provides 3 stuns. It is exceptional in 1v1 situations.',
    ],
    counters: ['Diffusal Blade', 'Blink Dagger users', 'Force Staff users', 'Void Spirit'],
    synergies: ['Earthshaker', 'Rubick', 'Warlock', 'Crystal Maiden'],
    itemGuide: {
      early: ['Arcane Boots', 'Magic Wand', 'Helm of the Dominator'],
      mid: ['Blink Dagger', 'Black King Bar', 'Aghanim\'s Scepter'],
      late: ['Refresher Orb', 'Octarine Core', 'Shiva\'s Guard'],
    },
  },
  shadow_fiend: {
    slug: 'nevermore',
    lore: 'Nevermore the Shadow Fiend captures the souls of enemies he kills, charging his essence with power that he unleashes in devastating waves.',
    overview: 'Shadow Fiend is a mid-lane carry who uses Necromastery soul stacks to amplify his damage. He has enormous burst potential with Requiem of Souls and is one of the best last-hitters in the game. Considered a high-skill mid hero.',
    abilities: [
      { name: 'Shadowraze', type: 'Active', description: 'Three abilities each creating an explosion at a fixed range in front of SF - near, mid, and far. Each deals damage in a small area.', cooldown: '10/9/8/7s', manaCost: '75/80/85/90' },
      { name: 'Necromastery', type: 'Passive', description: 'SF captures souls when nearby units die. Each soul increases his attack damage. Souls are lost on death.' },
      { name: 'Presence of the Dark Lord', type: 'Aura', description: 'Reduces the armor of nearby enemy units.' },
      { name: 'Requiem of Souls', type: 'Active', description: 'Releases lines of demonic energy proportional to stored souls. Lines slow enemies and deal massive damage.', cooldown: '120s', manaCost: '150/175/200' },
    ],
    tips: [
      'All three Shadowraze abilities share the same animation. You can cast all three in quick succession by queuing the casts.',
      'Requiem of Souls lifts SF into the air briefly - use this to dodge projectiles mid-channel.',
      'Eul\'s Scepter into Requiem is the classic combo: cyclone a target, wait until Requiem launches, then the lines hit the falling target.',
      'Necromastery soul stacks are visible to enemies. Enemies will try to kill you when you have full stacks - protect them with Manta.',
      'Shadowraze can deny allied creeps if aimed behind you - a useful trick to deny large ranged creeps.',
      'Presence of the Dark Lord aura affects towers - pushing with SF simultaneously softens the tower for your team.',
    ],
    counters: ['Nyx Assassin', 'Ancient Apparition', 'Anti-Mage', 'Pugna'],
    synergies: ['Earthshaker', 'Magnus', 'Witch Doctor', 'Warlock'],
    itemGuide: {
      early: ['Bottle', 'Wraith Band', 'Power Treads'],
      mid: ['Eul\'s Scepter', 'Shadow Blade', 'Manta Style'],
      late: ['Butterfly', 'Satanic', 'Scythe of Vyse'],
    },
  },
  wraith_king: {
    slug: 'skeleton_king',
    lore: 'Ostarion the Wraith King will never truly die. His Reincarnation ability means even death is merely a temporary inconvenience on the battlefield.',
    overview: 'Wraith King is the most beginner-friendly carry in Dota 2. He is durable, deals reliable right-click damage, has a single-target stun, and his ultimate lets him die once per cooldown and come back to life. Perfect for learning the carry role.',
    abilities: [
      { name: 'Wraithfire Blast', type: 'Active', description: 'Slows and damages a target, then stuns them after a brief delay. Simple and reliable single-target stun.', cooldown: '8s', manaCost: '90/105/115/125' },
      { name: 'Vampiric Aura', type: 'Aura', description: 'Provides lifesteal to all nearby allied melee units, including WK himself.' },
      { name: 'Mortal Strike', type: 'Active', description: 'Passively gives WK a chance to deal bonus damage on attack. Active mode at max level summons skeleton warriors.' },
      { name: 'Reincarnation', type: 'Passive', description: 'Upon dying, WK reincarnates with full HP and mana after a brief delay. Slows all nearby enemies when triggered.', cooldown: '240/160/80s' },
    ],
    tips: [
      'Reincarnation triggers automatically but you can spend the time between death and revival planning your next actions.',
      'Aghanim\'s Scepter turns Reincarnation into an aura that revives nearby allied heroes - it can single-handedly win late-game teamfights.',
      'Vampiric Aura benefits your skeletons from Mortal Strike - they sustain themselves while pushing.',
      'Wraithfire Blast travels as a projectile - you need to aim it, it is not instant.',
      'Radiance plus Reincarnation is one of the most powerful late-game combos - enemies take burn damage even while WK is coming back to life.',
      'Scepter WK should always die first in a teamfight to revive teammates at full HP behind enemy lines.',
    ],
    counters: ['Ancient Apparition', 'Doom', 'Axe', 'Bloodseeker'],
    synergies: ['Crystal Maiden', 'Drow Ranger', 'Omniknight', 'Witch Doctor'],
    itemGuide: {
      early: ['Power Treads', 'Magic Wand', 'Helm of Iron Will'],
      mid: ['Armlet of Mordiggian', 'Desolator', 'Black King Bar'],
      late: ['Assault Cuirass', 'Aghanim\'s Scepter', 'Radiance'],
    },
  },
  phantom_assassin: {
    slug: 'phantom_assassin',
    lore: 'Mortred, the Phantom Assassin, is a member of the Veiled Sisters - a secretive group of assassins who pursue divine contracts to kill.',
    overview: 'Phantom Assassin is an agility carry whose Coup de Grace passive gives her the highest potential burst damage in the game. A fully stacked crit can one-shot most heroes. She is a lane bully who transitions into a hypercarry.',
    abilities: [
      { name: 'Stifling Dagger', type: 'Active', description: 'Throws a dagger that slows and damages a target. The dagger can critically strike using Coup de Grace.', cooldown: '8/7/6/5s', manaCost: '50' },
      { name: 'Phantom Strike', type: 'Active', description: 'PA blinks to a target and gains bonus attack speed for a short duration. Resets on kill.', cooldown: '35/25/15/8s', manaCost: '50' },
      { name: 'Blur', type: 'Passive', description: 'Passively gives PA evasion. Activating it makes PA invisible to enemies outside a small radius.', cooldown: '26/22/18/14s' },
      { name: 'Coup de Grace', type: 'Passive', description: 'Gives PA a 15/20/25% chance to deal 2.0/2.4/2.8x critical strike damage on any attack including Stifling Dagger.' },
    ],
    tips: [
      'Stifling Dagger can trigger Coup de Grace crits. Always throw the dagger before jumping to soften a target.',
      'Phantom Strike resets on kills - chain it between multiple targets in a teamfight to cover enormous distance.',
      'Blur makes PA completely invisible to enemies unless they have True Sight. Walk past enemy wards confidently when Blur is active.',
      'Battle Fury plus Blur is a farming and ganking combo - clear the jungle silently then walk into position for a gank.',
      'Abyssal Blade guarantees a kill on most supports - jump with Phantom Strike and immediately activate Abyssal Blade for a 2-second stun.',
      'PA\'s high evasion from Blur means Slardar and Bloodseeker are natural counters - be careful around heroes with armor reduction.',
    ],
    counters: ['Slardar', 'Bloodseeker', 'Viper', 'Monkey King Bar holders'],
    synergies: ['Omniknight', 'Witch Doctor', 'Crystal Maiden', 'Dark Willow'],
    itemGuide: {
      early: ['Battle Fury', 'Power Treads', 'Magic Wand'],
      mid: ['Desolator', 'Skull Basher', 'Black King Bar'],
      late: ['Abyssal Blade', 'Butterfly', 'Satanic'],
    },
  },
  tidehunter: {
    slug: 'tidehunter',
    lore: 'Leviathan the Tidehunter sold his allegiance to the Sunken God after betraying his watery brethren. He now fights for those who oppose the surface world.',
    overview: 'Tidehunter is a durable strength initiator whose Ravage is one of the largest AoE stuns in the game. He is beginner-friendly with a simple kit and high durability, making him an excellent offlane or support pick.',
    abilities: [
      { name: 'Gush', type: 'Active', description: 'Launches a watery projectile that slows and reduces the armor of an enemy unit.', cooldown: '14/12/10/8s', manaCost: '90/100/110/120' },
      { name: 'Kraken Shell', type: 'Passive', description: 'Provides passive damage reduction and removes debuffs when damage taken reaches a threshold.' },
      { name: 'Anchor Smash', type: 'Active', description: 'Swings the anchor in an area, damaging enemies and reducing their attack damage.', cooldown: '5s', manaCost: '40' },
      { name: 'Ravage', type: 'Active', description: 'Slams the ground with tentacles, stunning all nearby enemies for 2.02/2.52/3.02 seconds in an enormous radius.', cooldown: '160/120/80s', manaCost: '150/225/300' },
    ],
    tips: [
      'Kraken Shell removes debuffs every time damage threshold is reached. Stack Blademail or fight in areas where enemies deal damage frequently to proc it.',
      'Ravage is channeled instantly and has a huge radius. Use Refresher Orb for a double Ravage that keeps enemies stunned for nearly 5 seconds.',
      'Anchor Smash has a 5-second cooldown and is spammable - use it in every jungle fight and teamfight to reduce enemy right-click damage.',
      'Gush armor reduction stacks with Assault Cuirass and Slardar\'s Corrosive Haze for devastating physical damage combos.',
      'Ravage has a 2250 unit radius at max level - one of the largest AoE effects in the game. Cast it when multiple enemies are even loosely grouped.',
      'Kraken Shell passive damage reduction scales well into the late game, making Tidehunter naturally tanky without defensive items.',
    ],
    counters: ['Faceless Void', 'Ancient Apparition', 'Winter Wyvern', 'Naga Siren'],
    synergies: ['Gyrocopter', 'Shadow Fiend', 'Earthshaker', 'Magnus'],
    itemGuide: {
      early: ['Arcane Boots', 'Blink Dagger', 'Magic Wand'],
      mid: ['Assault Cuirass', 'Black King Bar', 'Refresher Orb'],
      late: ['Heart of Tarrasque', 'Aghanim\'s Scepter', 'Shiva\'s Guard'],
    },
  },
  lion: {
    slug: 'lion',
    lore: 'A corrupt soul who made a deal with a devil and then tricked the demon into trading places, Lion now fights on the surface world as a walking conduit of infernal power.',
    overview: 'Lion is one of the most reliable support disablers in Dota 2. He has two disables - Hex and Impale - making him exceptional at locking down targets. His Finger of Death deals one of the highest single-target damage outputs in the game when upgraded.',
    abilities: [
      { name: 'Earth Spike', type: 'Active', description: 'A line of spikes erupts from the ground, stunning and damaging all enemies along its path.', cooldown: '12/11/10/9s', manaCost: '80/85/90/95' },
      { name: 'Hex', type: 'Active', description: 'Transforms an enemy unit into a harmless creature for a short duration, silencing and slowing it.', cooldown: '30/26/22/18s', manaCost: '150' },
      { name: 'Mana Drain', type: 'Channeled', description: 'Drains mana from an enemy target each second.', cooldown: '22/18/14/10s', manaCost: '30' },
      { name: 'Finger of Death', type: 'Active', description: 'Deals massive damage to a single target. Each kill with Finger permanently increases its damage.', cooldown: '150/100/50s', manaCost: '200/420/650' },
    ],
    tips: [
      'Hex is one of the best single-target disables in the game - it removes all buffs including Juggernaut\'s Blade Fury.',
      'Earth Spike is a line stun - aim it to hit multiple enemies when possible. It travels quickly and has medium range.',
      'Finger of Death permanently gains 70 damage per kill. Aggressively try to secure kills with Finger to scale into the mid and late game.',
      'Mana Drain interrupts channeled abilities when used - use it to cancel Enigma\'s Black Hole, Fiend\'s Requiem, or similar.',
      'Lion\'s combo is Earth Spike then Hex then Finger. This gives maximum disable time before dealing damage.',
      'Aghanim\'s Scepter turns Finger into a chain that hits all enemies near the original target - transformative in teamfights.',
    ],
    counters: ['Black King Bar users', 'Linken\'s Sphere', 'Doom', 'Juggernaut'],
    synergies: ['Shadow Fiend', 'Juggernaut', 'Axe', 'Pudge'],
    itemGuide: {
      early: ['Arcane Boots', 'Magic Wand', 'Clarity Potions'],
      mid: ['Aether Lens', 'Aghanim\'s Scepter', 'Force Staff'],
      late: ['Refresher Orb', 'Octarine Core', 'Scythe of Vyse'],
    },
  },
  doom_bringer: {
    slug: 'doom_bringer',
    lore: 'Lucifer the Doom was once an archangel who fell from grace and now walks the physical world, harvesting the abilities of creatures he devours.',
    overview: 'Doom is a strength hero whose ultimate - Doom - is one of the most powerful single-target disables in Dota 2. It silences and deals damage over time while preventing the target from using items or abilities, including passives.',
    abilities: [
      { name: 'Devour', type: 'Active', description: 'Consumes a neutral creep, gaining gold and that creep\'s ability until you devour another.', cooldown: '30/25/20/15s' },
      { name: 'Scorched Earth', type: 'Active', description: 'Creates a patch of scorched earth that deals damage per second to enemies and provides movement speed and HP regen to Doom.', cooldown: '50/45/40/35s', manaCost: '70/75/80/85' },
      { name: 'Infernal Blade', type: 'Active', description: 'Doom\'s next attack deals bonus damage and applies a short stun and burn based on target\'s max HP.', cooldown: '6s', manaCost: '40' },
      { name: 'Doom', type: 'Active', description: 'Inflicts Doom on an enemy hero for 15 seconds, preventing the use of spells and items, and dealing damage per second. Disables all passive abilities.', cooldown: '150s', manaCost: '150' },
    ],
    tips: [
      'Devour the correct neutral creep for the situation. Centaur gives a stun, Elder Troll gives troll-aura, Satyr gives aura regen.',
      'Doom disables passive abilities including Counter Helix, Coup de Grace, Blur evasion, and Berserker\'s Call retribution.',
      'Aghanim\'s Scepter makes Doom affect all enemies in an area - an AoE doom is one of the strongest teamfight disables in the game.',
      'Scorched Earth gives Doom significant mobility - activate it before ganking for the movement speed bonus.',
      'Doom prevents item use - cast it on enemies before they can activate BKB, Linken\'s Sphere, or other defensive items.',
      'Infernal Blade deals percentage max HP damage - it is especially powerful against high-HP heroes like Bristleback or Axe.',
    ],
    counters: ['Doom is a universal counter; feared by: Invoker, Faceless Void', 'Enchantress', 'Ember Spirit'],
    synergies: ['Lina', 'Zeus', 'Earthshaker', 'Skywrath Mage'],
    itemGuide: {
      early: ['Phase Boots', 'Magic Wand', 'Ring of Basilius'],
      mid: ['Blink Dagger', 'Black King Bar', 'Aghanim\'s Scepter'],
      late: ['Heart of Tarrasque', 'Assault Cuirass', 'Shiva\'s Guard'],
    },
  },
  faceless_void: {
    slug: 'faceless_void',
    lore: 'Darkterror the Faceless Void comes from Clasz, a realm outside of time. He can move freely through time and can freeze reality with his Chronosphere.',
    overview: 'Faceless Void is an agility carry whose Chronosphere is the highest-impact teamfight ultimate in the game when used correctly. He is one of the hardest heroes to master because good Chronospheres require excellent positioning and game sense.',
    abilities: [
      { name: 'Time Walk', type: 'Active', description: 'Rushes to a target location while rewinding personal time, undoing any damage taken in the last 2 seconds.', cooldown: '30/24/18/12s', manaCost: '40' },
      { name: 'Time Dilation', type: 'Active', description: 'Freezes the cooldowns of all nearby enemy heroes, preventing them from going below their current remaining cooldown.', cooldown: '36s', manaCost: '75' },
      { name: 'Time Lock', type: 'Passive', description: 'Gives attacks a chance to freeze an enemy in time for a brief duration, dealing bonus damage and stopping movement.' },
      { name: 'Chronosphere', type: 'Active', description: 'Creates a sphere of time stoppage in which all units except Void and his allies are frozen in place.', cooldown: '130/100/70s', manaCost: '150/175/200' },
    ],
    tips: [
      'Void is the only hero who can move freely inside Chronosphere - your allies cannot. Be careful not to trap key allies inside.',
      'Time Walk rewinds damage - use it at very low HP to undo a burst combo and survive with the HP you had 2 seconds ago.',
      'Mjollnir\'s Static Charge during Chronosphere applies to all attacks on frozen targets, dealing chain lightning to all enemies inside.',
      'Time Lock can proc multiple times from a single attack with high attack speed - rush attack speed items to increase proc frequency.',
      'Time Dilation is one of the best spells in the game against spell-heavy enemies - cast it after they use their abilities to prevent refreshing.',
      'Chrono at the start of a fight rather than mid-fight to get the full duration against enemies with full HP.',
    ],
    counters: ['Enigma', 'Dark Seer', 'Keeper of the Light', 'Heroes with Blink Dagger'],
    synergies: ['Crystal Maiden', 'Zeus', 'Gyrocopter', 'Shadow Fiend'],
    itemGuide: {
      early: ['Power Treads', 'Wraith Band', 'Magic Wand'],
      mid: ['Mjollnir', 'Skull Basher', 'Mask of Madness'],
      late: ['Abyssal Blade', 'Eye of Skadi', 'Butterfly'],
    },
  },
  juggernaut: {
    slug: 'juggernaut',
    lore: 'The last member of the Yurnero clan, Juggernaut hides his face behind the Mask of the Juggernaut, an ancient relic imbued with the power of his extinct island.',
    overview: 'Juggernaut is an extremely popular agility carry due to his Blade Fury, which provides a period of spell immunity while dealing damage. He scales well and has reliable kill potential at all stages of the game.',
    abilities: [
      { name: 'Blade Fury', type: 'Active', description: 'Causes a rapid spin of the blade, making Juggernaut temporarily invulnerable to magic and dealing damage to nearby enemies.', cooldown: '38/30/22/14s', manaCost: '120' },
      { name: 'Healing Ward', type: 'Active', description: 'Summons a ward that heals all nearby allied units per second.', cooldown: '60s', manaCost: '120/125/130/135' },
      { name: 'Blade Dance', type: 'Passive', description: 'Gives Juggernaut a 20% chance to deal critical damage on any attack.' },
      { name: 'Omnislash', type: 'Active', description: 'Attacks the target and nearby enemies in a series of rapid slashes, becoming invulnerable during each slash.', cooldown: '130/110/90s', manaCost: '200/275/350' },
    ],
    tips: [
      'Blade Fury provides spell immunity - use it to dodge Lion\'s Finger, Lina\'s Laguna Blade, or any targeted spell.',
      'Healing Ward has 500 HP and can be killed. Position it behind your team or in trees where enemies cannot reach it easily.',
      'Omnislash searches for targets in a 425 radius - make sure there are enough targets nearby or the ultimate is wasted.',
      'Diffusal Blade\'s slow procs during Omnislash, applying to every slash. This is an excellent synergy.',
      'Aghanim\'s Scepter gives Jugger a Battle Fury during Omnislash, causing every slash to cleave - devastating in teamfights.',
      'Aghanim\'s Shard allows Healing Ward to move and dramatically increases its healing. It becomes one of the best healing abilities in the game.',
    ],
    counters: ['Axe', 'Doom', 'Monkey King Bar holders', 'Bladestorm counters like Force Staff'],
    synergies: ['Witch Doctor', 'Omniknight', 'Dark Willow', 'Warlock'],
    itemGuide: {
      early: ['Phase Boots', 'Wraith Band', 'Magic Wand'],
      mid: ['Diffusal Blade', 'Manta Style', 'Black King Bar'],
      late: ['Butterfly', 'Aghanim\'s Scepter', 'Satanic'],
    },
  },
  spectre: {
    slug: 'spectre',
    lore: 'An entity from a realm beyond reality, Spectre exists between dimensions. She is everywhere and nowhere simultaneously.',
    overview: 'Spectre is a late-game hypercarry who becomes nearly unkillable at high farm levels. Her Haunt ultimate allows her to appear anywhere on the map to gank heroes. She is weak early but one of the strongest carries in the game past 35 minutes.',
    abilities: [
      { name: 'Spectral Dagger', type: 'Active', description: 'Throws a dagger that creates a shadow path, slowing and dealing damage to enemies. Spectre can move at full speed along these paths.', cooldown: '14s', manaCost: '120/130/140/150' },
      { name: 'Desolate', type: 'Passive', description: 'Deals bonus damage when attacking an enemy that has no nearby allied units.' },
      { name: 'Dispersion', type: 'Passive', description: 'Reflects a portion of incoming damage back to nearby enemies, reducing the damage Spectre takes.' },
      { name: 'Haunt', type: 'Active', description: 'Spectre creates an illusion of every enemy hero, then teleports to an enemy of her choice. The real Spectre takes over an illusion\'s position on activation.', cooldown: '180/150/120s', manaCost: '100' },
    ],
    tips: [
      'Dispersion reflects damage back - enemies who burst you with high damage spells effectively deal damage to themselves.',
      'Haunt creates illusions on all enemies simultaneously. Even if you do not teleport, the illusions pressure and damage all enemies.',
      'Spectral Dagger ignores terrain. Throw it through cliffs and trees to create escape or chase paths in otherwise impassable areas.',
      'Desolate damage only triggers when the target is isolated. Use it to punish enemies who wander away from their team.',
      'Radiance plus Haunt illusions means every enemy on the map simultaneously takes Radiance burn damage during Haunt.',
      'Spectre wins games by being present everywhere. Use Haunt aggressively during teamfights on other parts of the map.',
    ],
    counters: ['Ancient Apparition', 'Doom', 'Bloodseeker', 'Phantom Lancer'],
    synergies: ['Witch Doctor', 'Omniknight', 'Dazzle', 'Warlock'],
    itemGuide: {
      early: ['Phase Boots', 'Magic Wand', 'Ring of Health'],
      mid: ['Radiance', 'Diffusal Blade', 'Manta Style'],
      late: ['Heart of Tarrasque', 'Eye of Skadi', 'Butterfly'],
    },
  },
};

// Fill any hero without details with a basic template
export function getHeroDetail(slug: string): HeroDetail {
  return HERO_DETAILS[slug] ?? {
    slug,
    lore: 'This hero\'s lore is part of the rich tapestry of the Dota 2 universe.',
    overview: 'Full guide coming soon. Check the official Dota 2 website for up-to-date ability descriptions and strategies.',
    abilities: [],
    tips: [
      'Learn this hero\'s abilities and cooldowns by playing bot matches first.',
      'Communicate with your team about your role and game plan.',
      'Watch professional replays featuring this hero to learn advanced techniques.',
      'Experiment with different item builds to understand what fits different matchups.',
    ],
    counters: [],
    synergies: [],
    itemGuide: { early: [], mid: [], late: [] },
  };
}
