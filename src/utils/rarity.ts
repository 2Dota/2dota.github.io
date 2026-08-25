import type { ItemRarity } from '../types';

export const RARITY_COLORS: Record<ItemRarity, { bg: string; text: string; border: string; glow: string }> = {
  Common: {
    bg: 'bg-gray-500/20',
    text: 'text-gray-300',
    border: 'border-gray-500/40',
    glow: 'shadow-gray-500/20',
  },
  Uncommon: {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-300',
    border: 'border-emerald-500/40',
    glow: 'shadow-emerald-500/30',
  },
  Rare: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-300',
    border: 'border-blue-500/40',
    glow: 'shadow-blue-500/30',
  },
  Mythical: {
    bg: 'bg-purple-500/20',
    text: 'text-purple-300',
    border: 'border-purple-500/40',
    glow: 'shadow-purple-500/30',
  },
  Legendary: {
    bg: 'bg-yellow-500/20',
    text: 'text-yellow-300',
    border: 'border-yellow-500/40',
    glow: 'shadow-yellow-500/30',
  },
  Immortal: {
    bg: 'bg-amber-500/20',
    text: 'text-amber-300',
    border: 'border-amber-500/40',
    glow: 'shadow-amber-500/40',
  },
  Arcana: {
    bg: 'bg-rose-500/20',
    text: 'text-rose-300',
    border: 'border-rose-500/40',
    glow: 'shadow-rose-500/40',
  },
  Ancient: {
    bg: 'bg-orange-500/20',
    text: 'text-orange-300',
    border: 'border-orange-500/40',
    glow: 'shadow-orange-500/40',
  },
};

export const RARITY_HEX: Record<ItemRarity, string> = {
  Common: '#9CA3AF',
  Uncommon: '#6EE7B7',
  Rare: '#93C5FD',
  Mythical: '#C4B5FD',
  Legendary: '#FDE68A',
  Immortal: '#FCD34D',
  Arcana: '#FDA4AF',
  Ancient: '#FDBA74',
};

export function getRarityColors(rarity: ItemRarity) {
  return RARITY_COLORS[rarity] ?? RARITY_COLORS.Common;
}

export function getRarityHex(rarity: ItemRarity): string {
  return RARITY_HEX[rarity] ?? '#9CA3AF';
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
