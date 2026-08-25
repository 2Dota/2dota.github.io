import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sword, Star, Shield } from 'lucide-react';
import { STORE_ITEMS } from '../data/items';
import { ItemCard } from '../components/item/ItemCard';

const FEATURED_ITEMS = STORE_ITEMS.filter(i => i.category === 'Arcana' && i.isAvailable).slice(0, 6);

const STAT_ITEMS = [
  { icon: Sword, label: 'Total Items', value: `${STORE_ITEMS.length}+` },
  { icon: Star, label: 'Arcanas', value: `${STORE_ITEMS.filter(i => i.category === 'Arcana').length}` },
  { icon: Shield, label: 'Heroes Covered', value: `${new Set(STORE_ITEMS.filter(i => i.hero).map(i => i.hero)).size}` },
];

export function HomePage() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-950" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 63, 94, 0.15) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 80% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 60%),
                radial-gradient(ellipse 60% 40% at 20% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)
              `,
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-20 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm font-medium mb-8"
          >
            <Star className="w-3.5 h-3.5" />
            Complete Dota 2 Cosmetics Reference
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-none"
          >
            The Dota 2{' '}
            <span className="relative">
              <span
                className="relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #fb7185 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Item Wiki
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Every Arcana, Persona, Immortal, and cosmetic item in the Dota 2 store.
            Complete descriptions, official artwork, and everything you need to know
            about each piece of the game's legendary collection.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-20"
          >
            <Link
              to="/browse"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-semibold text-sm shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              Browse All Items
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/browse?category=Arcana"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Arcanas
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-flex items-center gap-8 sm:gap-12 px-8 py-4 rounded-2xl border border-white/8 bg-white/3"
          >
            {STAT_ITEMS.map(({ label, value }) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-white/40" />
          </motion.div>
        </div>
      </section>

      {/* Featured Arcanas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Featured
            </p>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Available Arcanas
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg">
              The highest tier cosmetics in Dota 2. These transform heroes with new models,
              animations, particle effects, and voice lines.
            </p>
          </div>
          <Link
            to="/browse?rarity=Arcana"
            className="hidden sm:flex items-center gap-2 text-sm text-rose-400 hover:text-rose-300 font-medium transition-colors"
          >
            View all arcanas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_ITEMS.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all"
          >
            Browse all {STORE_ITEMS.length} items
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Category grid */}
      <section className="bg-gray-900/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Browse by Category</h2>
            <p className="text-gray-400">Everything from hero skins to full map transformations.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { cat: 'Arcana', color: '#FDA4AF', count: STORE_ITEMS.filter(i => i.category === 'Arcana').length, desc: 'Ultimate hero transformations' },
              { cat: 'Persona', color: '#C4B5FD', count: STORE_ITEMS.filter(i => i.category === 'Persona').length, desc: 'Hero identity reimagined' },
              { cat: 'Immortal', color: '#FCD34D', count: STORE_ITEMS.filter(i => i.category === 'Immortal').length, desc: 'Unique slot items' },
              { cat: 'Courier', color: '#6EE7B7', count: STORE_ITEMS.filter(i => i.category === 'Courier').length, desc: 'Item delivery companions' },
              { cat: 'Terrain', color: '#93C5FD', count: STORE_ITEMS.filter(i => i.category === 'Terrain').length, desc: 'Full map skins' },
              { cat: 'HUD', color: '#FDBA74', count: STORE_ITEMS.filter(i => i.category === 'HUD').length, desc: 'Interface overhauls' },
              { cat: 'Announcer', color: '#A5F3FC', count: STORE_ITEMS.filter(i => i.category === 'Announcer').length, desc: 'Voice pack replacements' },
              { cat: 'Music', color: '#FDE68A', count: STORE_ITEMS.filter(i => i.category === 'Music').length, desc: 'In-game soundtracks' },
            ].map(({ cat, color, count, desc }) => (
              <Link
                key={cat}
                to={`/browse?category=${cat}`}
                className="group p-5 rounded-2xl border border-white/8 bg-gray-900/60 hover:border-white/20 hover:-translate-y-1 transition-all duration-200"
                style={{
                  boxShadow: '0 0 0 0 transparent',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px -8px ${color}25`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 0 transparent';
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Sword className="w-4 h-4" style={{ color }} />
                </div>
                <p className="font-semibold text-white mb-1 group-hover:text-rose-300 transition-colors">
                  {cat}
                </p>
                <p className="text-xs text-gray-500 mb-2">{desc}</p>
                <p className="text-xs font-medium" style={{ color }}>
                  {count} {count === 1 ? 'item' : 'items'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
