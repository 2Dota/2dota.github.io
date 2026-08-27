import {
  Coffee, Star, Package, Box, Shield, Zap, Flame, Sword,
} from 'lucide-react';
import type { ShopCategory } from './shopItems';

export const CATEGORY_COLORS: Record<ShopCategory, string> = {
  Consumables: '#4ade80',
  Attributes: '#60a5fa',
  Equipment: '#a78bfa',
  Miscellaneous: '#94a3b8',
  Support: '#34d399',
  Magical: '#818cf8',
  Armor: '#fb923c',
  Weapons: '#f87171',
  Artifacts: '#fbbf24',
};

export const CATEGORY_ICONS: Record<ShopCategory, React.ElementType> = {
  Consumables: Coffee,
  Attributes: Star,
  Equipment: Package,
  Miscellaneous: Box,
  Support: Shield,
  Magical: Zap,
  Armor: Shield,
  Weapons: Sword,
  Artifacts: Flame,
};
