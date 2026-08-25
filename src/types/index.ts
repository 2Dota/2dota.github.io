export type ItemRarity =
  | 'Common'
  | 'Uncommon'
  | 'Rare'
  | 'Mythical'
  | 'Legendary'
  | 'Immortal'
  | 'Arcana'
  | 'Ancient';

export type ItemCategory =
  | 'Arcana'
  | 'Persona'
  | 'Immortal'
  | 'Bundle'
  | 'Courier'
  | 'Ward'
  | 'HUD'
  | 'Announcer'
  | 'Music'
  | 'Terrain'
  | 'Loading Screen'
  | 'Taunt'
  | 'Spray'
  | 'Treasure'
  | 'Hero Set';

export type ItemSlot =
  | 'Weapon'
  | 'Head'
  | 'Shoulder'
  | 'Armor'
  | 'Belt'
  | 'Back'
  | 'Arms'
  | 'Mount'
  | 'Offhand'
  | 'Neckpiece'
  | 'Tail'
  | 'Ambient'
  | 'Ability Effect'
  | 'N/A';

export type HeroAttribute = 'Strength' | 'Agility' | 'Intelligence' | 'Universal';

export type ItemQuality = 'Normal' | 'Genuine' | 'Inscribed' | 'Heroic' | 'Corrupted' | 'Autographed';

export interface CustomizationFeature {
  type: 'Model' | 'Animation' | 'Particle Effect' | 'Ability Icon' | 'Sound' | 'Voice' | 'UI' | 'Style';
  description: string;
}

export interface ItemStyle {
  name: string;
  description: string;
  unlockRequirement?: string;
}

export interface StoreItem {
  id: string;
  name: string;
  hero?: string;
  heroAttribute?: HeroAttribute;
  category: ItemCategory;
  rarity: ItemRarity;
  slot: ItemSlot;
  releaseDate: string;
  description: string;
  lore?: string;
  customizations: CustomizationFeature[];
  styles?: ItemStyle[];
  imageUrl: string;
  heroImageUrl?: string;
  price?: string;
  isAvailable: boolean;
  availabilityNote?: string;
  tags: string[];
  set?: string;
  event?: string;
  quality?: ItemQuality;
  isLimited?: boolean;
}

export interface FilterState {
  query: string;
  categories: ItemCategory[];
  rarities: ItemRarity[];
  heroes: string[];
  availability: 'all' | 'available' | 'limited';
}

export interface SortOption {
  value: 'name' | 'rarity' | 'release' | 'hero';
  label: string;
}
