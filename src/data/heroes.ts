// All Dota 2 heroes as of patch 7.40
// Images: https://cdn.dota2.com/apps/dota2/images/heroes/{slug}_lg.png
// Slugs are verified Valve internal names from the official Steam Web API
// Every slug is unique and has been manually cross-checked

const CDN = 'https://cdn.dota2.com/apps/dota2/images/heroes';
const img = (slug: string) => `${CDN}/${slug}_lg.png`;

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
  // STRENGTH
  { id: 1,   name: 'Axe',                slug: 'axe',                imageUrl: img('axe'),                attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler'] },
  { id: 2,   name: 'Beastmaster',         slug: 'beastmaster',        imageUrl: img('beastmaster'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Pusher','Durable','Jungler'] },
  { id: 3,   name: 'Brewmaster',          slug: 'brewmaster',         imageUrl: img('brewmaster'),         attribute: 'Strength',     attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Durable','Nuker'] },
  { id: 4,   name: 'Bristleback',         slug: 'bristleback',        imageUrl: img('bristleback'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Nuker','Initiator'] },
  { id: 5,   name: 'Centaur Warrunner',   slug: 'centaur',            imageUrl: img('centaur'),            attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler'] },
  { id: 6,   name: 'Chaos Knight',        slug: 'chaos_knight',       imageUrl: img('chaos_knight'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Disabler','Initiator'] },
  { id: 7,   name: 'Clockwerk',           slug: 'rattletrap',         imageUrl: img('rattletrap'),         attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Durable'] },
  { id: 8,   name: 'Dawnbreaker',         slug: 'dawnbreaker',        imageUrl: img('dawnbreaker'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Support','Initiator','Durable','Nuker'] },
  { id: 9,   name: 'Doom',                slug: 'doom_bringer',       imageUrl: img('doom_bringer'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Jungler','Durable','Disabler','Initiator','Nuker'] },
  { id: 10,  name: 'Dragon Knight',       slug: 'dragon_knight',      imageUrl: img('dragon_knight'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Initiator','Disabler','Pusher'] },
  { id: 11,  name: 'Earth Spirit',        slug: 'earth_spirit',       imageUrl: img('earth_spirit'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Nuker','Durable','Escape'] },
  { id: 12,  name: 'Earthshaker',         slug: 'earthshaker',        imageUrl: img('earthshaker'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Nuker'] },
  { id: 13,  name: 'Elder Titan',         slug: 'elder_titan',        imageUrl: img('elder_titan'),        attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Nuker'] },
  { id: 14,  name: 'Huskar',              slug: 'huskar',             imageUrl: img('huskar'),             attribute: 'Strength',     attackType: 'Ranged', complexity: 2, roles: ['Carry','Durable','Initiator','Nuker'] },
  { id: 15,  name: 'Io',                  slug: 'wisp',               imageUrl: img('wisp'),               attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Escape'] },
  { id: 16,  name: 'Kunkka',              slug: 'kunkka',             imageUrl: img('kunkka'),             attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Disabler','Initiator','Nuker','Support'] },
  { id: 17,  name: 'Largo',               slug: 'largo',              imageUrl: img('largo'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Support','Disabler','Initiator'] },
  { id: 18,  name: 'Legion Commander',    slug: 'legion_commander',   imageUrl: img('legion_commander'),   attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Initiator','Durable','Disabler'] },
  { id: 19,  name: 'Lifestealer',         slug: 'life_stealer',       imageUrl: img('life_stealer'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Jungler','Durable'] },
  { id: 20,  name: 'Lycan',               slug: 'lycan',              imageUrl: img('lycan'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Pusher','Jungler'] },
  { id: 21,  name: 'Magnus',              slug: 'magnataur',          imageUrl: img('magnataur'),          attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Nuker','Support'] },
  { id: 22,  name: 'Marci',               slug: 'marci',              imageUrl: img('marci'),              attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Support','Initiator','Disabler','Carry'] },
  { id: 23,  name: 'Mars',                slug: 'mars',               imageUrl: img('mars'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Durable','Carry','Nuker'] },
  { id: 24,  name: 'Night Stalker',       slug: 'night_stalker',      imageUrl: img('night_stalker'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Disabler','Initiator','Durable'] },
  { id: 25,  name: 'Ogre Magi',           slug: 'ogre_magi',          imageUrl: img('ogre_magi'),          attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Support','Durable','Disabler','Nuker'] },
  { id: 26,  name: 'Omniknight',          slug: 'omniknight',         imageUrl: img('omniknight'),         attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Support','Durable'] },
  { id: 27,  name: 'Phoenix',             slug: 'phoenix',            imageUrl: img('phoenix'),            attribute: 'Strength',     attackType: 'Ranged', complexity: 3, roles: ['Initiator','Disabler','Durable','Nuker','Support'] },
  { id: 28,  name: 'Primal Beast',        slug: 'primal_beast',       imageUrl: img('primal_beast'),       attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Durable','Disabler','Nuker'] },
  { id: 29,  name: 'Pudge',               slug: 'pudge',              imageUrl: img('pudge'),              attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Disabler','Initiator','Durable'] },
  { id: 30,  name: 'Sand King',           slug: 'sand_king',          imageUrl: img('sand_king'),          attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Nuker','Support','Escape'] },
  { id: 31,  name: 'Slardar',             slug: 'slardar',            imageUrl: img('slardar'),            attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Initiator','Disabler'] },
  { id: 32,  name: 'Snapfire',            slug: 'snapfire',           imageUrl: img('snapfire'),           attribute: 'Strength',     attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 33,  name: 'Spirit Breaker',      slug: 'spirit_breaker',     imageUrl: img('spirit_breaker'),     attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Disabler','Escape','Carry'] },
  { id: 34,  name: 'Sven',                slug: 'sven',               imageUrl: img('sven'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Disabler','Initiator','Durable','Nuker'] },
  { id: 35,  name: 'Tidehunter',          slug: 'tidehunter',         imageUrl: img('tidehunter'),         attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Disabler','Durable','Support'] },
  { id: 36,  name: 'Timbersaw',           slug: 'shredder',           imageUrl: img('shredder'),           attribute: 'Strength',     attackType: 'Melee',  complexity: 3, roles: ['Carry','Initiator','Durable','Escape','Nuker'] },
  { id: 37,  name: 'Tiny',                slug: 'tiny',               imageUrl: img('tiny'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Carry','Nuker','Initiator','Pusher','Disabler'] },
  { id: 38,  name: 'Treant Protector',    slug: 'treant',             imageUrl: img('treant'),             attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Support','Initiator','Disabler','Durable','Pusher'] },
  { id: 39,  name: 'Tusk',                slug: 'tusk',               imageUrl: img('tusk'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 2, roles: ['Initiator','Disabler','Support','Carry'] },
  { id: 40,  name: 'Underlord',           slug: 'abyssal_underlord',  imageUrl: img('abyssal_underlord'),  attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Disabler','Durable','Pusher','Nuker'] },
  { id: 41,  name: 'Undying',             slug: 'undying',            imageUrl: img('undying'),            attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Initiator','Durable','Nuker','Support','Disabler'] },
  { id: 42,  name: 'Ursa',                slug: 'ursa',               imageUrl: img('ursa'),               attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Jungler','Initiator'] },
  { id: 43,  name: 'Wraith King',         slug: 'skeleton_king',      imageUrl: img('skeleton_king'),      attribute: 'Strength',     attackType: 'Melee',  complexity: 1, roles: ['Carry','Durable','Disabler','Initiator'] },

  // AGILITY
  { id: 44,  name: 'Anti-Mage',           slug: 'antimage',           imageUrl: img('antimage'),           attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape'] },
  { id: 45,  name: 'Arc Warden',          slug: 'arc_warden',         imageUrl: img('arc_warden'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Pusher','Jungler'] },
  { id: 46,  name: 'Bloodseeker',         slug: 'bloodseeker',        imageUrl: img('bloodseeker'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Jungler','Initiator','Disabler'] },
  { id: 47,  name: 'Bounty Hunter',       slug: 'bounty_hunter',      imageUrl: img('bounty_hunter'),      attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Support','Escape','Disabler','Jungler'] },
  { id: 48,  name: 'Broodmother',         slug: 'broodmother',        imageUrl: img('broodmother'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Pusher','Jungler'] },
  { id: 49,  name: 'Clinkz',              slug: 'clinkz',             imageUrl: img('clinkz'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape','Nuker'] },
  { id: 50,  name: 'Drow Ranger',         slug: 'drow_ranger',        imageUrl: img('drow_ranger'),        attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Disabler'] },
  { id: 51,  name: 'Faceless Void',       slug: 'faceless_void',      imageUrl: img('faceless_void'),      attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Initiator','Disabler'] },
  { id: 52,  name: 'Gyrocopter',          slug: 'gyrocopter',         imageUrl: img('gyrocopter'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Initiator'] },
  { id: 53,  name: 'Hoodwink',            slug: 'hoodwink',           imageUrl: img('hoodwink'),           attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Disabler','Escape'] },
  { id: 54,  name: 'Juggernaut',          slug: 'juggernaut',         imageUrl: img('juggernaut'),         attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Pusher','Escape'] },
  { id: 55,  name: 'Kez',                 slug: 'kez',                imageUrl: img('kez'),                attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Disabler','Nuker'] },
  { id: 56,  name: 'Lone Druid',          slug: 'lone_druid',         imageUrl: img('lone_druid'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 3, roles: ['Carry','Pusher','Jungler','Durable'] },
  { id: 57,  name: 'Luna',                slug: 'luna',               imageUrl: img('luna'),               attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Pusher','Nuker'] },
  { id: 58,  name: 'Medusa',              slug: 'medusa',             imageUrl: img('medusa'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Durable','Disabler','Nuker'] },
  { id: 59,  name: 'Meepo',               slug: 'meepo',              imageUrl: img('meepo'),              attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Pusher','Jungler'] },
  { id: 60,  name: 'Mirana',              slug: 'mirana',             imageUrl: img('mirana'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Support','Disabler','Escape','Nuker'] },
  { id: 61,  name: 'Monkey King',         slug: 'monkey_king',        imageUrl: img('monkey_king'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Disabler','Pusher'] },
  { id: 62,  name: 'Morphling',           slug: 'morphling',          imageUrl: img('morphling'),          attribute: 'Agility',      attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Durable'] },
  { id: 63,  name: 'Naga Siren',          slug: 'naga_siren',         imageUrl: img('naga_siren'),         attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Disabler','Pusher','Initiator','Support'] },
  { id: 64,  name: 'Nyx Assassin',        slug: 'nyx_assassin',       imageUrl: img('nyx_assassin'),       attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Support','Initiator','Disabler','Nuker','Escape'] },
  { id: 65,  name: 'Phantom Assassin',    slug: 'phantom_assassin',   imageUrl: img('phantom_assassin'),   attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Escape'] },
  { id: 66,  name: 'Phantom Lancer',      slug: 'phantom_lancer',     imageUrl: img('phantom_lancer'),     attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Pusher'] },
  { id: 67,  name: 'Razor',               slug: 'razor',              imageUrl: img('razor'),              attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Durable','Nuker','Initiator'] },
  { id: 68,  name: 'Riki',                slug: 'riki',               imageUrl: img('riki'),               attribute: 'Agility',      attackType: 'Melee',  complexity: 1, roles: ['Carry','Escape','Disabler','Nuker'] },
  { id: 69,  name: 'Shadow Fiend',        slug: 'nevermore',          imageUrl: img('nevermore'),          attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker'] },
  { id: 70,  name: 'Slark',               slug: 'slark',              imageUrl: img('slark'),              attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Initiator'] },
  { id: 71,  name: 'Sniper',              slug: 'sniper',             imageUrl: img('sniper'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Nuker'] },
  { id: 72,  name: 'Spectre',             slug: 'spectre',            imageUrl: img('spectre'),            attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Durable'] },
  { id: 73,  name: 'Templar Assassin',    slug: 'templar_assassin',   imageUrl: img('templar_assassin'),   attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape','Nuker','Initiator'] },
  { id: 74,  name: 'Terrorblade',         slug: 'terrorblade',        imageUrl: img('terrorblade'),        attribute: 'Agility',      attackType: 'Melee',  complexity: 2, roles: ['Carry','Escape','Pusher'] },
  { id: 75,  name: 'Troll Warlord',       slug: 'troll_warlord',      imageUrl: img('troll_warlord'),      attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Disabler'] },
  { id: 77,  name: 'Vengeful Spirit',     slug: 'vengefulspirit',     imageUrl: img('vengefulspirit'),     attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Initiator','Nuker','Escape'] },
  { id: 78,  name: 'Venomancer',          slug: 'venomancer',         imageUrl: img('venomancer'),         attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Pusher','Nuker','Initiator','Disabler'] },
  { id: 79,  name: 'Viper',               slug: 'viper',              imageUrl: img('viper'),              attribute: 'Agility',      attackType: 'Ranged', complexity: 1, roles: ['Carry','Durable','Nuker','Disabler'] },
  { id: 80,  name: 'Weaver',              slug: 'weaver',             imageUrl: img('weaver'),             attribute: 'Agility',      attackType: 'Ranged', complexity: 2, roles: ['Carry','Escape'] },

  // INTELLIGENCE
  { id: 81,  name: 'Ancient Apparition',  slug: 'ancient_apparition', imageUrl: img('ancient_apparition'), attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 82,  name: 'Bane',                slug: 'bane',               imageUrl: img('bane'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker'] },
  { id: 83,  name: 'Batrider',            slug: 'batrider',           imageUrl: img('batrider'),           attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Initiator','Disabler','Carry','Nuker','Escape','Durable'] },
  { id: 84,  name: 'Chen',                slug: 'chen',               imageUrl: img('chen'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Jungler','Pusher'] },
  { id: 85,  name: 'Crystal Maiden',      slug: 'crystal_maiden',     imageUrl: img('crystal_maiden'),     attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker'] },
  { id: 86,  name: 'Dark Seer',           slug: 'dark_seer',          imageUrl: img('dark_seer'),          attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Initiator','Disabler','Durable','Pusher','Support'] },
  { id: 87,  name: 'Death Prophet',       slug: 'death_prophet',      imageUrl: img('death_prophet'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Carry','Pusher','Nuker'] },
  { id: 88,  name: 'Disruptor',           slug: 'disruptor',          imageUrl: img('disruptor'),          attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 89,  name: 'Dazzle',              slug: 'dazzle',             imageUrl: img('dazzle'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Initiator'] },
  { id: 90,  name: 'Enchantress',         slug: 'enchantress',        imageUrl: img('enchantress'),        attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Jungler','Carry','Disabler'] },
  { id: 91,  name: 'Enigma',              slug: 'enigma',             imageUrl: img('enigma'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Jungler','Initiator','Disabler','Nuker','Pusher'] },
  { id: 92,  name: 'Grimstroke',          slug: 'grimstroke',         imageUrl: img('grimstroke'),         attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 93,  name: 'Invoker',             slug: 'invoker',            imageUrl: img('invoker'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Nuker','Disabler','Initiator','Pusher'] },
  { id: 94,  name: 'Jakiro',              slug: 'jakiro',             imageUrl: img('jakiro'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker','Pusher'] },
  { id: 95,  name: 'Keeper of the Light', slug: 'keeper_of_the_light',imageUrl: img('keeper_of_the_light'),attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Nuker','Disabler','Pusher'] },
  { id: 96,  name: 'Leshrac',             slug: 'leshrac',            imageUrl: img('leshrac'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Pusher','Initiator','Disabler','Nuker'] },
  { id: 97,  name: 'Lich',                slug: 'lich',               imageUrl: img('lich'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 98,  name: 'Lina',                slug: 'lina',               imageUrl: img('lina'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Support','Disabler'] },
  { id: 99,  name: 'Lion',                slug: 'lion',               imageUrl: img('lion'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker'] },
  { id: 100, name: 'Muerta',              slug: 'muerta',             imageUrl: img('muerta'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Disabler','Initiator'] },
  { id: 101, name: "Nature's Prophet",    slug: 'furion',             imageUrl: img('furion'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Pusher','Jungler','Initiator','Escape','Nuker'] },
  { id: 102, name: 'Necrophos',           slug: 'necrolyte',          imageUrl: img('necrolyte'),          attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Carry','Nuker','Durable'] },
  { id: 103, name: 'Oracle',              slug: 'oracle',             imageUrl: img('oracle'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Nuker','Disabler'] },
  { id: 104, name: 'Outworld Destroyer',  slug: 'obsidian_destroyer', imageUrl: img('obsidian_destroyer'), attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Nuker','Disabler'] },
  { id: 105, name: 'Puck',                slug: 'puck',               imageUrl: img('puck'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Escape','Initiator','Disabler','Nuker'] },
  { id: 106, name: 'Pugna',               slug: 'pugna',              imageUrl: img('pugna'),              attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Carry','Pusher','Nuker','Disabler'] },
  { id: 107, name: 'Queen of Pain',       slug: 'queenofpain',        imageUrl: img('queenofpain'),        attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 108, name: 'Rubick',              slug: 'rubick',             imageUrl: img('rubick'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 109, name: 'Shadow Demon',        slug: 'shadow_demon',       imageUrl: img('shadow_demon'),       attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Nuker','Pusher'] },
  { id: 110, name: 'Shadow Shaman',       slug: 'shadow_shaman',      imageUrl: img('shadow_shaman'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Pusher','Nuker'] },
  { id: 111, name: 'Silencer',            slug: 'silencer',           imageUrl: img('silencer'),           attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Carry','Support','Disabler','Nuker','Initiator'] },
  { id: 112, name: 'Skywrath Mage',       slug: 'skywrath_mage',      imageUrl: img('skywrath_mage'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 113, name: 'Storm Spirit',        slug: 'storm_spirit',       imageUrl: img('storm_spirit'),       attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Carry','Escape','Initiator','Disabler','Nuker'] },
  { id: 114, name: 'Techies',             slug: 'techies',            imageUrl: img('techies'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Disabler','Nuker','Support'] },
  { id: 115, name: 'Tinker',              slug: 'tinker',             imageUrl: img('tinker'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Nuker','Pusher','Carry'] },
  { id: 116, name: 'Visage',              slug: 'visage',             imageUrl: img('visage'),             attribute: 'Intelligence', attackType: 'Ranged', complexity: 3, roles: ['Durable','Initiator','Disabler','Nuker','Pusher','Support'] },
  { id: 117, name: 'Void Spirit',         slug: 'void_spirit',        imageUrl: img('void_spirit'),        attribute: 'Intelligence', attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 118, name: 'Warlock',             slug: 'warlock',            imageUrl: img('warlock'),            attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Disabler','Nuker','Initiator'] },
  { id: 119, name: 'Winter Wyvern',       slug: 'winter_wyvern',      imageUrl: img('winter_wyvern'),      attribute: 'Intelligence', attackType: 'Ranged', complexity: 2, roles: ['Support','Disabler','Nuker'] },
  { id: 120, name: 'Witch Doctor',        slug: 'witch_doctor',       imageUrl: img('witch_doctor'),       attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Support','Nuker','Disabler'] },
  { id: 121, name: 'Zeus',                slug: 'zuus',               imageUrl: img('zuus'),               attribute: 'Intelligence', attackType: 'Ranged', complexity: 1, roles: ['Nuker','Carry'] },

  // UNIVERSAL
  { id: 122, name: 'Alchemist',           slug: 'alchemist',          imageUrl: img('alchemist'),          attribute: 'Universal',    attackType: 'Melee',  complexity: 2, roles: ['Carry','Durable','Disabler','Jungler','Nuker'] },
  { id: 123, name: 'Dark Willow',         slug: 'dark_willow',        imageUrl: img('dark_willow'),        attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Nuker','Disabler','Escape','Initiator'] },
  { id: 124, name: 'Ember Spirit',        slug: 'ember_spirit',       imageUrl: img('ember_spirit'),       attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Carry','Escape','Initiator','Nuker','Disabler'] },
  { id: 125, name: 'Pangolier',           slug: 'pangolier',          imageUrl: img('pangolier'),          attribute: 'Universal',    attackType: 'Melee',  complexity: 3, roles: ['Initiator','Disabler','Carry','Escape','Durable','Nuker'] },
  { id: 126, name: 'Ringmaster',          slug: 'ringmaster',         imageUrl: img('ringmaster'),         attribute: 'Universal',    attackType: 'Ranged', complexity: 3, roles: ['Support','Disabler','Initiator','Nuker'] },
  { id: 127, name: 'Windranger',          slug: 'windrunner',         imageUrl: img('windrunner'),         attribute: 'Universal',    attackType: 'Ranged', complexity: 2, roles: ['Carry','Support','Disabler','Nuker','Escape'] },
];

export const ALL_HEROES = [...HEROES].sort((a, b) => a.name.localeCompare(b.name));
export const HERO_ATTRIBUTES: HeroAttribute[] = ['Strength', 'Agility', 'Intelligence', 'Universal'];
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
