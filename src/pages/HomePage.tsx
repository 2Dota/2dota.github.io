import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShoppingBag, ArrowRight, Sword, Star, Shield,
  Zap, Package, BookOpen,
} from 'lucide-react';
import { SHOP_ITEMS, SHOP_CATEGORIES } from '../data/shopItems';
import { NEUTRAL_ITEMS, NEUTRAL_TIERS } from '../data/neutralItems';

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

interface SectionCardProps {
  to: string;
  Icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  delay: number;
  tag: string;
}

function SectionCard({
  to, Icon, title, subtitle, description, stats,
  gradientFrom, gradientTo, accentColor, delay, tag,
}: SectionCardProps) {
  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_UP}
    >
      <Link to={to} className="group block h-full">
        <article className="relative h-full rounded-3xl border border-white/8 bg-[#0d1117] overflow-hidden hover:border-white/16 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
          <div className={`h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo}`} />
          <div className="p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
              <BookOpen className="w-3 h-3" />
              {tag}
            </div>
            <div className="flex items-start gap-5 mb-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-lg shrink-0`}>
                <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                  {title}
                </h2>
                <p className="text-sm mt-0.5" style={{ color: accentColor + '99' }}>{subtitle}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">{description}</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(s => (
                <div key={s.label} className="text-center p-3 rounded-xl bg-white/3 border border-white/5">
                  <p className="text-xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-400 group-hover:text-rose-300 transition-colors">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function HomePage() {
  const shopItemCount = SHOP_ITEMS.length;
  const shopCategoryCount = SHOP_CATEGORIES.length;
  const upgradeCount = SHOP_ITEMS.filter(i => i.tier === 'Upgrade').length;
  const neutralCount = NEUTRAL_ITEMS.length;
  const neutralTierCount = NEUTRAL_TIERS.length;
  const tier5Count = NEUTRAL_ITEMS.filter(i => i.tier === 5).length;

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#070a0f]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -10%, rgba(244,63,94,0.18) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 85% 60%, rgba(251,191,36,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 15% 70%, rgba(139,92,246,0.07) 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/8 text-rose-400 text-sm font-medium mb-8"
          >
            <Star className="w-3.5 h-3.5" strokeWidth={1.75} />
            Complete Dota 2 Item Reference
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-none mb-6"
          >
            The Dota 2
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #fb7185 0%, #f59e0b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Knowledge Base
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Every purchasable item and neutral drop in Dota 2. Rich guides, hidden mechanics,
            tips and pro strategies — everything you need to master the item economy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {[
              { Icon: ShoppingBag, label: `${shopItemCount} Shop Items` },
              { Icon: Package, label: `${neutralCount} Neutral Items` },
              { Icon: Shield, label: `${shopCategoryCount} Categories` },
              { Icon: Zap, label: `${upgradeCount} Upgrades` },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-sm text-gray-300"
              >
                <Icon className="w-3.5 h-3.5 text-rose-400" strokeWidth={1.75} />
                {label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 text-white font-semibold text-sm shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.75} />
              Browse Shop Items
            </Link>
            <Link
              to="/neutral"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Package className="w-4 h-4" strokeWidth={1.75} />
              Neutral Items
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-9 rounded-full border-2 border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/30" />
          </motion.div>
        </div>
      </section>

      {/* ── Section cards ─────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP}
          className="text-center mb-14"
        >
          <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">Explore</p>
          <h2 className="text-4xl font-bold text-white tracking-tight">Choose your guide</h2>
          <p className="text-gray-500 mt-3">Everything documented, nothing missing</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SectionCard
            to="/shop"
            Icon={ShoppingBag}
            title="In-Game Shop"
            subtitle="All Purchasable Items"
            description="Complete guide to every item in the Dota 2 shop. Stats, costs, build paths, active and passive abilities, and pro tips. Everything to master the item economy."
            stats={[
              { label: 'Shop Items', value: String(shopItemCount) },
              { label: 'Categories', value: String(shopCategoryCount) },
              { label: 'Upgrades', value: String(upgradeCount) },
            ]}
            gradientFrom="from-amber-500"
            gradientTo="to-orange-500"
            accentColor="#f59e0b"
            delay={1}
            tag="In-Game"
          />
          <SectionCard
            to="/neutral"
            Icon={Package}
            title="Neutral Items"
            subtitle="Jungle Drop Guide"
            description="All 5 tiers of neutral items dropped in the Dota 2 jungle. Full stats, tips, prioritization guides, and strategies for every item from Tier 1 basics to Tier 5 game-changers."
            stats={[
              { label: 'Neutral Items', value: String(neutralCount) },
              { label: 'Tiers', value: String(neutralTierCount) },
              { label: 'Tier 5 Items', value: String(tier5Count) },
            ]}
            gradientFrom="from-yellow-500"
            gradientTo="to-amber-600"
            accentColor="#eab308"
            delay={2}
            tag="Jungle"
          />
        </div>
      </section>

      {/* ── Coming soon ───────────────────────────────────────── */}
      <section className="border-t border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-3">More pages</p>
            <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { Icon: Shield, label: 'Heroes', sub: 'All 124 heroes' },
              { Icon: Sword, label: 'Patch Notes', sub: 'Change history' },
              { Icon: Star, label: 'Tier Lists', sub: 'Meta analysis' },
              { Icon: BookOpen, label: 'Guides', sub: 'Strategy content' },
            ].map(({ Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-2xl border border-white/5 bg-white/2 flex flex-col items-center text-center gap-3 opacity-50"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-400">{label}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
