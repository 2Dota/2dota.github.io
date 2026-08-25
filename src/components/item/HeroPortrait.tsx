import { useState } from 'react';
import type { StoreItem } from '../../types';
import { getRarityHex } from '../../utils/rarity';
import { Sword, Shield, Zap, Globe } from 'lucide-react';

interface HeroPortraitProps {
  item: StoreItem;
  className?: string;
  large?: boolean;
}

// Maps hero names to their Valve CDN slug
const HERO_SLUGS: Record<string, string> = {
  'Lina': 'lina',
  'Shadow Fiend': 'nevermore',
  'Phantom Assassin': 'phantom_assassin',
  'Techies': 'techies',
  'Terrorblade': 'terrorblade',
  'Zeus': 'zuus',
  'Juggernaut': 'juggernaut',
  'IO': 'wisp',
  'Rubick': 'rubick',
  'Earthshaker': 'earthshaker',
  'Ogre Magi': 'ogre_magi',
  'Wraith King': 'skeleton_king',
  'Queen of Pain': 'queenofpain',
  'Spectre': 'spectre',
  'Drow Ranger': 'drow_ranger',
  'Razor': 'razor',
  'Faceless Void': 'faceless_void',
  'Legion Commander': 'legion_commander',
  'Pudge': 'pudge',
  'Crystal Maiden': 'crystal_maiden',
  'Monkey King': 'monkey_king',
  'Windranger': 'windrunner',
  'Skywrath Mage': 'skywrath_mage',
  'Vengeful Spirit': 'vengefulspirit',
  'Dragon Knight': 'dragon_knight',
  'Mirana': 'mirana',
  'Invoker': 'invoker',
};

function AttributeIcon({ attr }: { attr: string }) {
  switch (attr) {
    case 'Strength': return <Shield className="w-4 h-4 text-red-400" />;
    case 'Agility': return <Zap className="w-4 h-4 text-emerald-400" />;
    case 'Intelligence': return <Sword className="w-4 h-4 text-blue-400" />;
    case 'Universal': return <Globe className="w-4 h-4 text-purple-400" />;
    default: return null;
  }
}

export function HeroPortrait({ item, className = '', large = false }: HeroPortraitProps) {
  const [imgError, setImgError] = useState(false);
  const rarityColor = getRarityHex(item.rarity);

  const slug = item.hero ? HERO_SLUGS[item.hero] : null;
  const heroImgUrl = slug
    ? `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${slug}/hero_selection.png`
    : null;

  const sizeClass = large ? 'w-full h-full' : 'w-full h-full';

  if (heroImgUrl && !imgError) {
    return (
      <img
        src={heroImgUrl}
        alt={item.hero ?? item.name}
        className={`${sizeClass} object-cover object-center transition-transform duration-500 group-hover:scale-105 ${className}`}
        onError={() => setImgError(true)}
        loading="lazy"
      />
    );
  }

  // Fallback: gradient with rarity color + category label
  return (
    <div
      className={`${sizeClass} flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        background: `radial-gradient(ellipse at center, ${rarityColor}20 0%, transparent 70%), 
                     linear-gradient(180deg, #1f2937 0%, #111827 100%)`,
      }}
    >
      <div
        className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center"
        style={{ borderColor: `${rarityColor}50`, background: `${rarityColor}15` }}
      >
        {item.heroAttribute && <AttributeIcon attr={item.heroAttribute} />}
        {!item.heroAttribute && <Sword className="w-6 h-6" style={{ color: rarityColor }} />}
      </div>
      <span className="text-xs font-medium text-gray-400 text-center px-4 line-clamp-1">
        {item.hero ?? item.category}
      </span>
    </div>
  );
}
