import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Lock,
  CheckCircle2,
  Sparkles,
  Calendar,
  Tag,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { STORE_ITEMS } from '../data/items';
import { RarityBadge } from '../components/ui/RarityBadge';
import { HeroPortrait } from '../components/item/HeroPortrait';
import { ItemCard } from '../components/item/ItemCard';
import { getRarityHex, formatDate } from '../utils/rarity';
import type { CustomizationFeature } from '../types';

const CUSTOMIZATION_ICONS: Record<CustomizationFeature['type'], string> = {
  Model: '🎭',
  Animation: '🎬',
  'Particle Effect': '✨',
  'Ability Icon': '🔮',
  Sound: '🔊',
  Voice: '🎙️',
  UI: '🖥️',
  Style: '🎨',
};

export function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = STORE_ITEMS.find(i => i.id === id);

  if (!item) {
    return (
      <div className="pt-24 text-center py-40">
        <h1 className="text-2xl font-bold text-white mb-4">Item Not Found</h1>
        <Link to="/browse" className="text-rose-400 hover:text-rose-300">
          Back to Browse
        </Link>
      </div>
    );
  }

  const rarityColor = getRarityHex(item.rarity);

  const relatedItems = STORE_ITEMS.filter(
    i => i.id !== item.id && (i.hero === item.hero || i.category === item.category)
  ).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen">
      {/* Ambient glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${rarityColor}12 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <ChevronRight className="w-3 h-3" />
          <Link to="/browse" className="hover:text-white transition-colors">Browse</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">{item.name}</span>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div
              className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square max-w-sm lg:max-w-none mx-auto lg:mx-0"
              style={{ boxShadow: `0 30px 80px -20px ${rarityColor}40` }}
            >
              <HeroPortrait item={item} large className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />

              {/* Availability overlay */}
              {!item.isAvailable && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-950/90 border border-white/10">
                    <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-xs text-gray-400">{item.availabilityNote}</p>
                  </div>
                </div>
              )}

              {/* Rarity glow border */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 1px 0 ${rarityColor}60`,
                }}
              />
            </div>

            {/* Quick info card */}
            <div className="mt-4 p-4 rounded-2xl border border-white/8 bg-gray-900/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Availability</span>
                {item.isAvailable ? (
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">In Store</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">Not Available</span>
                  </div>
                )}
              </div>
              {item.price && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Price</span>
                  <span className="text-sm font-semibold text-emerald-400">{item.price}</span>
                </div>
              )}
              {item.event && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Source</span>
                  <span className="text-xs text-gray-300">{item.event}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right: details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-6"
          >
            {/* Category + Hero */}
            <div className="flex flex-wrap items-center gap-3">
              <RarityBadge rarity={item.rarity} />
              <span
                className="px-3 py-1 rounded-full text-sm border border-white/15 text-gray-300"
              >
                {item.category}
              </span>
              {item.hero && (
                <span className="px-3 py-1 rounded-full text-sm border border-white/10 text-gray-400">
                  {item.hero}
                </span>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {item.name}
              </h1>
              {item.hero && item.heroAttribute && (
                <p className="text-gray-400 mt-2">
                  {item.hero} &middot; {item.heroAttribute} Hero
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>

            {/* Lore */}
            {item.lore && (
              <blockquote
                className="pl-5 border-l-2 py-1"
                style={{ borderColor: `${rarityColor}60` }}
              >
                <p className="text-gray-400 italic leading-relaxed">"{item.lore}"</p>
              </blockquote>
            )}

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/60 border border-white/5">
                <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Released</p>
                  <p className="text-sm text-white">{formatDate(item.releaseDate)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/60 border border-white/5">
                <Layers className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Slot</p>
                  <p className="text-sm text-white">{item.slot}</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="flex items-start gap-3">
                <Tag className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-gray-400 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Customizations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-rose-400" />
            <h2 className="text-2xl font-bold text-white">Customizations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {item.customizations.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-gray-900/40"
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{CUSTOMIZATION_ICONS[c.type]}</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{c.type}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{c.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Styles */}
        {item.styles && item.styles.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Visual Styles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {item.styles.map((style, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-white/8 bg-gray-900/40"
                  style={{ borderColor: i === 0 ? `${rarityColor}40` : undefined }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: rarityColor }}
                    />
                    <p className="font-semibold text-white text-sm">{style.name}</p>
                    {i === 0 && (
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Default</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{style.description}</p>
                  {style.unlockRequirement && (
                    <div className="flex items-start gap-2 pt-3 border-t border-white/5">
                      <Lock className="w-3.5 h-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-gray-500">{style.unlockRequirement}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Related items */}
        {relatedItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Related Items</h2>
              <Link
                to="/browse"
                className="text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedItems.map((rel, i) => (
                <ItemCard key={rel.id} item={rel} index={i} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
