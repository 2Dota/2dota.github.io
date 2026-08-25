import type { ItemRarity } from '../../types';
import { getRarityHex } from '../../utils/rarity';

interface RarityBadgeProps {
  rarity: ItemRarity;
  size?: 'sm' | 'md' | 'lg';
}

export function RarityBadge({ rarity, size = 'md' }: RarityBadgeProps) {
  const color = getRarityHex(rarity);
  const sizeClass = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold border ${sizeClass}`}
      style={{
        color,
        borderColor: `${color}50`,
        background: `${color}15`,
      }}
    >
      {rarity}
    </span>
  );
}
