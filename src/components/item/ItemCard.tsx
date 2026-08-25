import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import type { StoreItem } from '../../types';
import { getRarityHex } from '../../utils/rarity';
import { HeroPortrait } from './HeroPortrait';

interface ItemCardProps {
  item: StoreItem;
  index?: number;
}

export function ItemCard({ item, index = 0 }: ItemCardProps) {
  const rarityColor = getRarityHex(item.rarity);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/item/${item.id}`} className="group block h-full">
        <article
          className="relative h-full flex flex-col rounded-2xl border border-white/8 bg-gray-900/60 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 group-hover:shadow-2xl"
          style={{
            boxShadow: `0 0 0 0 ${rarityColor}00`,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px -10px ${rarityColor}30`;
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${rarityColor}00`;
          }}
        >
          {/* Rarity top border */}
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${rarityColor}, transparent)` }}
          />

          {/* Hero portrait / item image */}
          <div className="relative h-44 bg-gray-800/50 overflow-hidden">
            <HeroPortrait item={item} />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span
                className="px-2.5 py-1 rounded-full text-xs font-semibold border"
                style={{
                  color: rarityColor,
                  borderColor: `${rarityColor}50`,
                  background: `${rarityColor}15`,
                }}
              >
                {item.category}
              </span>
            </div>

            {/* Availability indicator */}
            {!item.isAvailable && (
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-950/80 border border-white/10">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">Limited</span>
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col p-4 gap-2">
            {/* Hero name */}
            {item.hero && (
              <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                {item.hero}
              </p>
            )}

            {/* Item name */}
            <h3 className="font-semibold text-white leading-snug text-sm group-hover:text-rose-300 transition-colors line-clamp-2">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 flex-1">
              {item.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
              <span
                className="text-xs font-semibold"
                style={{ color: rarityColor }}
              >
                {item.rarity}
              </span>
              {item.price ? (
                <span className="text-xs text-emerald-400 font-medium">{item.price}</span>
              ) : item.category === 'Arcana' || item.category === 'Persona' ? (
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-rose-400" />
                  <span className="text-xs text-rose-400">Arcana</span>
                </div>
              ) : null}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
