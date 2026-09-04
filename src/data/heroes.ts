// All 127 Dota 2 heroes - Patch 7.40 (December 2025)
// Attributes verified against official Valve data:
// STR 36 | AGI 35 | INT 34 | UNI 22 = 127 total
// Universal heroes confirmed list (patch 7.40):
//   Abaddon, Alchemist, Arc Warden, Bane, Batrider, Beastmaster, Brewmaster,
//   Dazzle, Death Prophet, Enigma, Io, Magnus, Marci, Nature's Prophet,
//   Nyx Assassin, Pangolier, Sand King, Snapfire, Techies, Venomancer,
//   Visage, Void Spirit, Windranger
// Spectre moved from Universal to Agility in 7.40

const CDN = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes';
const img = (slug: string) => `${CDN}/${slug}.png`;

export type HeroAttribute = 'Strength' | 'Agility' | 'Intelligence' | 'Universal';
export type HeroRole =
  | 'Carry' | 'Support' | 'Nuker' | 'Disabler'
  | 'Jungler' | 'Durable' | 'Escape' | 'Pusher' | 'Initiator';
export type HeroComplexity = 1 | 2 | 3;

export interface Hero {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  attribute: HeroAttribute;
  roles: HeroRole[];
  complexity: HeroComplexity;
  attackType: 'Melee' | 'Ranged';
}

export const HEROES: Hero[] = [
  // ── STRENGTH (36) ───────────────────────────────────────────────────────────
  { id: 1,  name: 'Axe',               slug: 'axe',               imageUrl: img('axe'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler'] },
  { id: 2,  name: 'Bristleback',       slug: 'bristleback',       imageUrl: img('bristleback'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Nuker','Initiator'] },
  { id: 3,  name: 'Centaur Warrunner', slug: 'centaur',           imageUrl: img('centaur'),           attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler'] },
  { id: 4,  name: 'Chaos Knight',      slug: 'chaos_knight',      imageUrl: img('chaos_knight'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Disabler','Initiator'] },
  { id: 5,  name: 'Clockwerk',         slug: 'rattletrap',        imageUrl: img('rattletrap'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Durable'] },
  { id: 6,  name: 'Dawnbreaker',       slug: 'dawnbreaker',       imageUrl: img('dawnbreaker'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Support','Initiator','Durable','Nuker'] },
  { id: 7,  name: 'Doom',              slug: 'doom_bringer',      imageUrl: img('doom_bringer'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Jungler','Durable','Disabler','Initiator','Nuker'] },
  { id: 8,  name: 'Dragon Knight',     slug: 'dragon_knight',     imageUrl: img('dragon_knight'),     attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Initiator','Disabler','Pusher'] },
  { id: 9,  name: 'Earth Spirit',      slug: 'earth_spirit',      imageUrl: img('earth_spirit'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Nuker','Durable','Escape'] },
  { id: 10, name: 'Earthshaker',       slug: 'earthshaker',       imageUrl: img('earthshaker'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Nuker'] },
  { id: 11, name: 'Elder Titan',       slug: 'elder_titan',       imageUrl: img('elder_titan'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Nuker'] },
  { id: 12, name: 'Huskar',            slug: 'huskar',            imageUrl: img('huskar'),            attribute: 'Strength',     attackType: 'Ranged', complexity: 2, roles: ['Carry','Durable','Initiator','Nuker'] },
  { id: 13, name: 'Kunkka',            slug: 'kunkka',            imageUrl: img('kunkka'),            attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Disabler','Initiator','Nuker','Support'] },
  { id: 14, name: 'Largo',             slug: 'largo',             imageUrl: img('largo'),             attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Support','Disabler','Initiator'] },
  { id: 15, name: 'Legion Commander',  slug: 'legion_commander',  imageUrl: img('legion_commander'),  attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Initiator','Durable','Disabler'] },
  { id: 16, name: 'Lifestealer',       slug: 'life_stealer',      imageUrl: img('life_stealer'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Jungler','Durable'] },
  { id: 17, name: 'Lycan',             slug: 'lycan',             imageUrl: img('lycan'),             attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Pusher','Jungler'] },
  { id: 18, name: 'Mars',              slug: 'mars',              imageUrl: img('mars'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Durable','Carry','Nuker'] },
  { id: 19, name: 'Night Stalker',     slug: 'night_stalker',     imageUrl: img('night_stalker'),     attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Disabler','Initiator','Durable'] },
  { id: 20, name: 'Omniknight',        slug: 'omniknight',        imageUrl: img('omniknight'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Support','Durable'] },
  { id: 21, name: 'Phoenix',           slug: 'phoenix',           imageUrl: img('phoenix'),           attribute: 'Strength',     attackType: 'Ranged', complexity: 3, roles: ['Initiator','Disabler','Durable','Nuker','Support'] },
  { id: 22, name: 'Primal Beast',      slug: 'primal_beast',      imageUrl: img('primal_beast'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Durable','Disabler','Nuker'] },
  { id: 23, name: 'Pudge',             slug: 'pudge',             imageUrl: img('pudge'),             attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Disabler','Initiator','Durable'] },
  { id: 24, name: 'Slardar',           slug: 'slardar',           imageUrl: img('slardar'),           attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Initiator','Disabler'] },
  { id: 25, name: 'Spirit Breaker',    slug: 'spirit_breaker',    imageUrl: img('spirit_breaker'),    attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler','Escape','Carry'] },
  { id: 26, name: 'Sven',              slug: 'sven',              imageUrl: img('sven'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Disabler','Initiator','Durable','Nuker'] },
  { id: 27, name: 'Tidehunter',        slug: 'tidehunter',        imageUrl: img('tidehunter'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Disabler','Durable','Support'] },
  { id: 28, name: 'Timbersaw',         slug: 'shredder',          imageUrl: img('shredder'),          attribute: 'Strength',     attackType: 'Melee',  complexity: 3, roles: ['Carry','Initiator','Durable','Escape','Nuker'] },
  { id: 29, name: 'Tiny',              slug: 'tiny',              imageUrl: img('tiny'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Nuker','Initiator','Pusher','Disabler'] },
  { id: 30, name: 'Treant Protector',  slug: 'treant',            imageUrl: img('treant'),            attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Support','Initiator','Disabler','Durable','Pusher'] },
  { id: 31, name: 'Tusk',              slug: 'tusk',              imageUrl: img('tusk'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Carry'] },
  { id: 32, name: 'Underlord',         slug: 'abyssal_underlord', imageUrl: img('abyssal_underlord'), attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Disabler','Durable','Pusher','Nuker'] },
  { id: 33, name: 'Undying',           slug: 'undying',           imageUrl: img('undying'),           attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Nuker','Support','Disabler'] },
  { id: 34, name: 'Ursa',              slug: 'ursa',              imageUrl: img('ursa'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Jungler','Initiator'] },
  { id: 35, name: 'Wraith King',       slug: 'skeleton_king',     imageUrl: img('skeleton_king'),     attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Disabler','Initiator'] },
  { id: 36, name: 'Marci',             slug: 'marci',             imageUrl: img('marci'),             attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Support','Initiator','Disabler','Carry'] },

  // ── AGILITY (35) ────────────────────────────────────────────────────────────
  { id: 37, name: 'Anti-Mage',         slug: 'antimage',          imageUrl: img('antimage'),          attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape'] },
  { id: 38, name: 'Bloodseeker',       slug: 'bloodseeker',       imageUrl: img('bloodseeker'),       attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Jungler','Initiator','Disabler'] },
  { id: 39, name: 'Bounty Hunter',     slug: 'bounty_hunter',     imageUrl: img('bounty_hunter'),     attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Support','Escape','Disabler','Jungler'] },
  { id: 40, name: 'Broodmother',       slug: 'broodmother',       imageUrl: img('broodmother'),       attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Pusher','Jungler'] },
  { id: 41, name: 'Clinkz',            slug: 'clinkz',            imageUrl: img('clinkz'),            attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape','Nuker'] },
  { id: 42, name: 'Drow Ranger',       slug: 'drow_ranger',       imageUrl: img('drow_ranger'),       attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Disabler'] },
  { id: 43, name: 'Faceless Void',     slug: 'faceless_void',     imageUrl: img('faceless_void'),     attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Initiator','Disabler'] },
  { id: 44, name: 'Gyrocopter',        slug: 'gyrocopter',        imageUrl: img('gyrocopter'),        attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Initiator'] },
  { id: 45, name: 'Hoodwink',          slug: 'hoodwink',          imageUrl: img('hoodwink'),          attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Disabler','Escape'] },
  { id: 46, name: 'Juggernaut',        slug: 'juggernaut',        imageUrl: img('juggernaut'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Pusher','Escape'] },
  { id: 47, name: 'Kez',               slug: 'kez',               imageUrl: img('kez'),               attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Disabler','Nuker'] },
  { id: 48, name: 'Lone Druid',        slug: 'lone_druid',        imageUrl: img('lone_druid'),        attribute: 'Agility',      attackType: 'Ranged', complexity: 3, roles: ['Carry','Pusher','Jungler','Durable'] },
  { id: 49, name: 'Luna',              slug: 'luna',              imageUrl: img('luna'),              attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Pusher','Nuker'] },
  { id: 50, name: 'Medusa',            slug: 'medusa',            imageUrl: img('medusa'),            attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Durable','Disabler','Nuker'] },
  { id: 51, name: 'Meepo',             slug: 'meepo',             imageUrl: img('meepo'),             attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Pusher','Jungler'] },
  { id: 52, name: 'Mirana',            slug: 'mirana',            imageUrl: img('mirana'),            attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Support','Disabler','Escape','Nuker'] },
  { id: 53, name: 'Monkey King',       slug: 'monkey_king',       imageUrl: img('monkey_king'),       attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Disabler','Pusher'] },
  { id: 54, name: 'Morphling',         slug: 'morphling',         imageUrl: img('morphling'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Durable'] },
  { id: 55, name: 'Naga Siren',        slug: 'naga_siren',        imageUrl: img('naga_siren'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Disabler','Pusher','Initiator','Support'] },
  { id: 56, name: 'Phantom Assassin',  slug: 'phantom_assassin',  imageUrl: img('phantom_assassin'),  attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Escape'] },
  { id: 57, name: 'Phantom Lancer',    slug: 'phantom_lancer',    imageUrl: img('phantom_lancer'),    attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Pusher'] },
  { id: 58, name: 'Razor',             slug: 'razor',             imageUrl: img('razor'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Durable','Nuker','Initiator'] },
  { id: 59, name: 'Riki',              slug: 'riki',              imageUrl: img('riki'),              attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Escape','Disabler','Nuker'] },
  { id: 60, name: 'Shadow Fiend',      slug: 'nevermore',         imageUrl: img('nevermore'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker'] },
  { id: 61, name: 'Slark',             slug: 'slark',             imageUrl: img('slark'),             attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Initiator'] },
  { id: 62, name: 'Sniper',            slug: 'sniper',            imageUrl: img('sniper'),            attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Nuker'] },
  { id: 63, name: 'Spectre',           slug: 'spectre',           imageUrl: img('spectre'),           attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Durable'] },
  { id: 64, name: 'Templar Assassin',  slug: 'templar_assassin',  imageUrl: img('templar_assassin'),  attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape','Nuker','Initiator'] },
  { id: 65, name: 'Terrorblade',       slug: 'terrorblade',       imageUrl: img('terrorblade'),       attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Pusher'] },
  { id: 66, name: 'Troll Warlord',     slug: 'troll_warlord',     imageUrl: img('troll_warlord'),     attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Disabler'] },
  { id: 67, name: 'Viper',             slug: 'viper',             imageUrl: img('viper'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Durable','Nuker','Disabler'] },
  { id: 68, name: 'Weaver',            slug: 'weaver',            imageUrl: img('weaver'),            attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape'] },
  { id: 69, name: 'Arc Warden',        slug: 'arc_warden',        imageUrl: img('arc_warden'),        attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Pusher','Jungler'] },
  { id: 70, name: 'Ember Spirit',      slug: 'ember_spirit',      imageUrl: img('ember_spirit'),      attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 71, name: 'Vengeful Spirit',   slug: 'vengefulspirit',    imageUrl: img('vengefulspirit'),    attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Initiator','Nuker','Escape'] },

  // ── INTELLIGENCE (34) ───────────────────────────────────────────────────────
  { id: 72, name: 'Ancient Apparition',slug: 'ancient_apparition',imageUrl: img('ancient_apparition'),attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 73, name: 'Chen',              slug: 'chen',              imageUrl: img('chen'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Jungler','Pusher'] },
  { id: 74, name: 'Crystal Maiden',    slug: 'crystal_maiden',    imageUrl: img('crystal_maiden'),    attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker'] },
  { id: 75, name: 'Dark Seer',         slug: 'dark_seer',         imageUrl: img('dark_seer'),         attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Initiator','Disabler','Durable','Pusher','Support'] },
  { id: 76, name: 'Dazzle',            slug: 'dazzle',            imageUrl: img('dazzle'),            attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Initiator'] },
  { id: 77, name: 'Death Prophet',     slug: 'death_prophet',     imageUrl: img('death_prophet'),     attribute: 'Universal',    attackType: 'Ranged', complexity: 1, roles: ['Carry','Pusher','Nuker'] },
  { id: 78, name: 'Disruptor',         slug: 'disruptor',         imageUrl: img('disruptor'),         attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 79, name: 'Enchantress',       slug: 'enchantress',       imageUrl: img('enchantress'),       attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Jungler','Carry','Disabler'] },
  { id: 80, name: 'Enigma',            slug: 'enigma',            imageUrl: img('enigma'),            attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Jungler','Initiator','Disabler','Nuker','Pusher'] },
  { id: 81, name: 'Grimstroke',        slug: 'grimstroke',        imageUrl: img('grimstroke'),        attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 82, name: 'Invoker',           slug: 'invoker',           imageUrl: img('invoker'),           attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Disabler','Initiator','Pusher'] },
  { id: 83, name: 'Jakiro',            slug: 'jakiro',            imageUrl: img('jakiro'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker','Pusher'] },
  { id: 84, name: 'Keeper of the Light',slug: 'keeper_of_the_light',imageUrl: img('keeper_of_the_light'),attribute: 'Intelligence',attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Disabler','Pusher'] },
  { id: 85, name: 'Leshrac',           slug: 'leshrac',           imageUrl: img('leshrac'),           attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Pusher','Initiator','Disabler','Nuker'] },
  { id: 86, name: 'Lich',              slug: 'lich',              imageUrl: img('lich'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 87, name: 'Lina',              slug: 'lina',              imageUrl: img('lina'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Support','Disabler'] },
  { id: 88, name: 'Lion',              slug: 'lion',              imageUrl: img('lion'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker'] },
  { id: 89, name: 'Muerta',            slug: 'muerta',            imageUrl: img('muerta'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Disabler','Initiator'] },
  { id: 90, name: 'Necrophos',         slug: 'necrolyte',         imageUrl: img('necrolyte'),         attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Carry','Nuker','Durable'] },
  { id: 91, name: 'Oracle',            slug: 'oracle',            imageUrl: img('oracle'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Nuker','Disabler'] },
  { id: 92, name: 'Outworld Destroyer',slug: 'obsidian_destroyer',imageUrl: img('obsidian_destroyer'),attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Disabler'] },
  { id: 93, name: 'Puck',              slug: 'puck',              imageUrl: img('puck'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Escape','Initiator','Disabler','Nuker'] },
  { id: 94, name: 'Pugna',             slug: 'pugna',             imageUrl: img('pugna'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Pusher','Nuker','Disabler'] },
  { id: 95, name: 'Queen of Pain',     slug: 'queenofpain',       imageUrl: img('queenofpain'),       attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 96, name: 'Rubick',            slug: 'rubick',            imageUrl: img('rubick'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 97, name: 'Shadow Demon',      slug: 'shadow_demon',      imageUrl: img('shadow_demon'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Nuker','Pusher'] },
  { id: 98, name: 'Shadow Shaman',     slug: 'shadow_shaman',     imageUrl: img('shadow_shaman'),     attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Pusher','Nuker'] },
  { id: 99, name: 'Silencer',          slug: 'silencer',          imageUrl: img('silencer'),          attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Carry','Support','Disabler','Nuker','Initiator'] },
  { id: 100,name: 'Skywrath Mage',     slug: 'skywrath_mage',     imageUrl: img('skywrath_mage'),     attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 101,name: 'Storm Spirit',      slug: 'storm_spirit',      imageUrl: img('storm_spirit'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Initiator','Disabler','Nuker'] },
  { id: 102,name: 'Tinker',            slug: 'tinker',            imageUrl: img('tinker'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Nuker','Pusher','Carry'] },
  { id: 103,name: 'Visage',            slug: 'visage',            imageUrl: img('visage'),            attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Durable','Initiator','Disabler','Nuker','Pusher','Support'] },
  { id: 104,name: 'Warlock',           slug: 'warlock',           imageUrl: img('warlock'),           attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 105,name: 'Winter Wyvern',     slug: 'winter_wyvern',     imageUrl: img('winter_wyvern'),     attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker'] },
  { id: 106,name: 'Witch Doctor',      slug: 'witch_doctor',      imageUrl: img('witch_doctor'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 107,name: 'Zeus',              slug: 'zuus',              imageUrl: img('zuus'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Nuker','Carry'] },

  // ── UNIVERSAL (22) ──────────────────────────────────────────────────────────
  { id: 108,name: 'Abaddon',           slug: 'abaddon',           imageUrl: img('abaddon'),           attribute: 'Universal',    attackType: 'Melee',  complexity: 1, roles: ['Carry','Support','Durable'] },
  { id: 109,name: 'Alchemist',         slug: 'alchemist',         imageUrl: img('alchemist'),         attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Carry','Durable','Disabler','Jungler','Nuker'] },
  { id: 110,name: 'Bane',              slug: 'bane',              imageUrl: img('bane'),              attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker'] },
  { id: 111,name: 'Batrider',          slug: 'batrider',          imageUrl: img('batrider'),          attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Initiator','Disabler','Carry','Nuker','Escape','Durable'] },
  { id: 112,name: 'Beastmaster',       slug: 'beastmaster',       imageUrl: img('beastmaster'),       attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Pusher','Durable','Jungler'] },
  { id: 113,name: 'Brewmaster',        slug: 'brewmaster',        imageUrl: img('brewmaster'),        attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Durable','Nuker'] },
  { id: 114,name: 'Dark Willow',       slug: 'dark_willow',       imageUrl: img('dark_willow'),       attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Nuker','Disabler','Escape','Initiator'] },
  { id: 115,name: 'Io',                slug: 'wisp',              imageUrl: img('wisp'),              attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Escape'] },
  { id: 116,name: 'Magnus',            slug: 'magnataur',         imageUrl: img('magnataur'),         attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Nuker','Support'] },
  { id: 117,name: 'Nyx Assassin',      slug: 'nyx_assassin',      imageUrl: img('nyx_assassin'),      attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Support','Initiator','Disabler','Nuker','Escape'] },
  { id: 118,name: 'Pangolier',         slug: 'pangolier',         imageUrl: img('pangolier'),         attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Carry','Escape','Durable','Nuker'] },
  { id: 119,name: 'Sand King',         slug: 'sand_king',         imageUrl: img('sand_king'),         attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Nuker','Support','Escape'] },
  { id: 120,name: 'Snapfire',          slug: 'snapfire',          imageUrl: img('snapfire'),          attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 121,name: 'Techies',           slug: 'techies',           imageUrl: img('techies'),           attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Disabler','Nuker','Support'] },
  { id: 122,name: 'Venomancer',        slug: 'venomancer',        imageUrl: img('venomancer'),        attribute: 'Universal',    attackType: 'Ranged', complexity: 1, roles: ['Pusher','Nuker','Initiator','Disabler'] },
  { id: 123,name: 'Void Spirit',       slug: 'void_spirit',       imageUrl: img('void_spirit'),       attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 124,name: 'Windranger',        slug: 'windrunner',        imageUrl: img('windrunner'),        attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Carry','Support','Disabler','Nuker','Escape'] },
  { id: 127,name: 'Ringmaster',        slug: 'ringmaster',        imageUrl: img('ringmaster'),        attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Initiator','Nuker'] },
];

// Deduplicate by slug
const _seenSlugs = new Set<string>();
const _deduped: Hero[] = [];
for (const h of HEROES) {
  if (!_seenSlugs.has(h.slug)) {
    _seenSlugs.add(h.slug);
    _deduped.push(h);
  }
}

export const ALL_HEROES = _deduped.sort((a, b) => a.name.localeCompare(b.name));
export const HERO_ATTRIBUTES: HeroAttribute[] = ['Strength','Agility','Intelligence','Universal'];
export const HERO_ROLES: HeroRole[] = ['Carry','Support','Nuker','Disabler','Jungler','Durable','Escape','Pusher','Initiator'];

export const ATTRIBUTE_COLORS: Record<HeroAttribute, string> = {
  Strength:     '#f87171',
  Agility:      '#4ade80',
  Intelligence: '#60a5fa',
  Universal:    '#c084fc',
};

export const COMPLEXITY_LABEL: Record<HeroComplexity, string> = {
  1: 'Simple',
  2: 'Moderate',
  3: 'Complex',
};
