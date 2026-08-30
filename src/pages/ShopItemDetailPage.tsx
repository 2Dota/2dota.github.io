import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, Coins, Zap, Shield,
  Package, ArrowRight, Box, BookOpen, Lightbulb,
  Keyboard, ChevronDown, ChevronUp, Star,
} from 'lucide-react';
import { SHOP_ITEMS, SHOP_CATEGORIES } from '../data/shopItems';
import { CATEGORY_COLORS, CATEGORY_ICONS } from '../data/shopMeta';

function formatGold(cost: number) {
  return cost === 0 ? 'Free' : `${cost.toLocaleString()} Gold`;
}

function StatPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/8 text-sm text-gray-300">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
      {label}
    </div>
  );
}

function ItemImage({ item }: { item: typeof SHOP_ITEMS[0] }) {
  const [err, setErr] = useState(false);
  if (!err) {
    return (
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-28 h-28 object-contain drop-shadow-2xl"
        onError={() => setErr(true)}
      />
    );
  }
  return (
    <div className="w-28 h-28 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
      <Package className="w-10 h-10 text-gray-600" strokeWidth={1.25} />
    </div>
  );
}

function RelatedMiniCard({ rel }: { rel: typeof SHOP_ITEMS[0] }) {
  const [imgErr, setImgErr] = useState(false);
  const relColor = CATEGORY_COLORS[rel.category];
  return (
    <Link key={rel.id} to={`/shop/${rel.id}`} className="group p-4 rounded-2xl border border-white/8 bg-[#0d1117] hover:border-white/20 transition-all duration-200 flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-xl bg-[#0a0d12] flex items-center justify-center">
        {!imgErr ? (
          <img src={rel.imageUrl} alt={rel.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" onError={() => setImgErr(true)} loading="lazy" />
        ) : (
          <Package className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
        )}
      </div>
      <div>
        <p className="text-xs font-semibold text-white group-hover:text-rose-300 transition-colors line-clamp-2 leading-snug">{rel.name}</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Coins className="w-2.5 h-2.5" style={{ color: relColor }} strokeWidth={2} />
          <span className="text-xs" style={{ color: relColor }}>{rel.cost === 0 ? 'Free' : rel.cost}</span>
        </div>
      </div>
    </Link>
  );
}

function RelatedCard({ item }: { item: typeof SHOP_ITEMS[0] }) {
  const [err, setErr] = useState(false);
  const color = CATEGORY_COLORS[item.category];
  return (
    <Link to={`/shop/${item.id}`} className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-[#0d1117] hover:border-white/20 transition-all duration-200">
      <div className="w-12 h-12 rounded-xl bg-[#0a0d12] flex items-center justify-center shrink-0">
        {!err ? (
          <img src={item.imageUrl} alt={item.name} className="w-10 h-10 object-contain" onError={() => setErr(true)} loading="lazy" />
        ) : (
          <Package className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white group-hover:text-rose-300 transition-colors truncate">{item.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Coins className="w-3 h-3" style={{ color }} strokeWidth={1.75} />
          <span className="text-xs" style={{ color }}>{formatGold(item.cost)}</span>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors shrink-0" />
    </Link>
  );
}

/** Full rich guide section with collapsible support */
function GuideSection({ guide, color }: { guide: string; color: string }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = guide.split('\n\n').filter(Boolean);
  const preview = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.25 }}
      className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center"
          style={{ background: `${color}20`, border: `1px solid ${color}40` }}
        >
          <BookOpen className="w-3.5 h-3.5" style={{ color }} strokeWidth={2} />
        </div>
        <h2 className="font-semibold text-white">Item Guide</h2>
      </div>

      {/* Always show first paragraph */}
      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{preview}</p>

      {/* Collapsible rest */}
      <AnimatePresence initial={false}>
        {expanded && rest.length > 0 && (
          <motion.div
            key="guide-rest"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 mt-3">
              {rest.map((para, i) => (
                <p key={i} className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{para}</p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {rest.length > 0 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-4 flex items-center gap-1.5 text-xs font-medium transition-colors"
          style={{ color }}
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" /> Read full guide</>
          )}
        </button>
      )}
    </motion.div>
  );
}

/** Alt-hold tips panel styled to mimic the in-game Alt tooltip feel */
function AltTipsPanel({ tips, color }: { tips: string[]; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="p-6 rounded-2xl border bg-[#0a0d12] overflow-hidden relative"
      style={{ borderColor: `${color}30` }}
    >
      {/* Subtle corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${color}12 0%, transparent 70%)`,
        }}
      />

      <div className="flex items-center gap-2 mb-4 relative">
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-widest uppercase"
          style={{ background: `${color}18`, color, border: `1px solid ${color}35` }}
        >
          <Keyboard className="w-3 h-3" strokeWidth={2.5} />
          ALT
        </div>
        <h2 className="font-semibold text-white text-sm">Hidden Mechanics</h2>
      </div>

      <ul className="space-y-3 relative">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-3">
            <div
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
            />
            <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/** Pro tips panel */
function ProTipsPanel({ tips }: { tips: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
        </div>
        <h2 className="font-semibold text-white">Tips & Tricks</h2>
        <span className="ml-1 text-xs text-gray-600 font-normal">things most players never figure out</span>
      </div>

      <ul className="space-y-4">
        {tips.map((tip, i) => (
          <li key={i} className="flex gap-3">
            <div className="shrink-0 mt-0.5">
              <Star className="w-3.5 h-3.5 text-amber-500/70" strokeWidth={1.75} fill="currentColor" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ShopItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = SHOP_ITEMS.find(i => i.id === id);

  if (!item) {
    return (
      <div className="pt-24 text-center py-40">
        <Package className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={1.25} />
        <h1 className="text-2xl font-bold text-white mb-3">Item Not Found</h1>
        <Link to="/shop" className="text-rose-400 hover:text-rose-300 text-sm">Back to Shop</Link>
      </div>
    );
  }

  const color = CATEGORY_COLORS[item.category];
  const CatIcon = CATEGORY_ICONS[item.category];

  const buildsFrom = item.buildsFrom
    ? SHOP_ITEMS.filter(i => item.buildsFrom!.some(name => i.name === name))
    : [];
  const buildsInto = item.buildsInto
    ? SHOP_ITEMS.filter(i => item.buildsInto!.some(name => i.name === name))
    : [];
  const related = SHOP_ITEMS
    .filter(i => i.id !== item.id && i.category === item.category)
    .slice(0, 6);

  const hasGuide = Boolean(item.guide);
  const hasAltTips = item.altTips && item.altTips.length > 0;
  const hasProTips = item.tips && item.tips.length > 0;

  return (
    <div className="min-h-screen">
      {/* Ambient glow */}
      <div
        className="fixed top-0 left-0 right-0 h-96 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% -10%, ${color}10 0%, transparent 70%)` }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span
            className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors"
            onClick={() => navigate(`/shop?category=${item.category}`)}
          >
            {item.category}
          </span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">{item.name}</span>
        </nav>

        {/* Hero block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-[#0d1117] overflow-hidden mb-8"
          style={{ boxShadow: `0 30px 80px -20px ${color}25` }}
        >
          <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

          <div className="p-8 flex flex-col sm:flex-row items-start gap-8">
            {/* Item image */}
            <div
              className="w-36 h-36 rounded-2xl flex items-center justify-center shrink-0 self-center sm:self-start"
              style={{ background: `radial-gradient(ellipse at center, ${color}15 0%, #0a0d12 70%)`, border: `1px solid ${color}25` }}
            >
              <ItemImage item={item} />
            </div>

            {/* Main info */}
            <div className="flex-1 min-w-0">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4"
                style={{ color, borderColor: `${color}40`, background: `${color}12` }}
              >
                <CatIcon className="w-3 h-3" strokeWidth={2} />
                {item.category}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                {item.name}
              </h1>

              {item.lore && (
                <p className="text-sm text-gray-500 italic mb-4 leading-relaxed border-l-2 pl-3" style={{ borderColor: `${color}50` }}>
                  "{item.lore}"
                </p>
              )}

              <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border"
                  style={{ borderColor: `${color}30`, background: `${color}10` }}
                >
                  <Coins className="w-4 h-4 text-amber-400" strokeWidth={1.75} />
                  <span className="text-lg font-bold text-amber-400">{formatGold(item.cost)}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5">
                  <Box className="w-4 h-4 text-gray-400" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-gray-300">{item.tier}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left column: stats, abilities, guide, alt-tips, pro-tips */}
          <div className="lg:col-span-2 space-y-5">
            {/* Stats */}
            {item.stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-emerald-400" strokeWidth={1.75} />
                  <h2 className="font-semibold text-white">Stats</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.stats.map(s => <StatPill key={s} label={s} />)}
                </div>
              </motion.div>
            )}

            {/* Active ability */}
            {item.active && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-blue-400" strokeWidth={2} />
                  </div>
                  <h2 className="font-semibold text-white">Active Ability</h2>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.active}</p>
              </motion.div>
            )}

            {/* Passive ability */}
            {item.passive && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-amber-400" strokeWidth={2} />
                  </div>
                  <h2 className="font-semibold text-white">Passive Ability</h2>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.passive}</p>
              </motion.div>
            )}

            {/* Rich guide */}
            {hasGuide && <GuideSection guide={item.guide!} color={color} />}

            {/* Alt-hold hidden mechanics */}
            {hasAltTips && <AltTipsPanel tips={item.altTips!} color={color} />}

            {/* Pro tips */}
            {hasProTips && <ProTipsPanel tips={item.tips!} />}
          </div>

          {/* Right sidebar: build path + categories */}
          <div className="space-y-5">
            {/* Builds from */}
            {buildsFrom.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRight className="w-4 h-4 text-gray-500 rotate-180" strokeWidth={1.75} />
                  <h2 className="text-sm font-semibold text-white">Builds From</h2>
                </div>
                <div className="space-y-2">
                  {buildsFrom.map(bi => <RelatedCard key={bi.id} item={bi} />)}
                </div>
                {item.buildsFrom && item.buildsFrom.length > buildsFrom.length && (
                  <div className="mt-3 space-y-1">
                    {item.buildsFrom
                      .filter(name => !buildsFrom.some(i => i.name === name))
                      .map(name => (
                        <div key={name} className="px-3 py-2 rounded-xl bg-white/3 border border-white/5">
                          <p className="text-sm text-gray-500">{name}</p>
                        </div>
                      ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Builds into */}
            {buildsInto.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRight className="w-4 h-4 text-emerald-400" strokeWidth={1.75} />
                  <h2 className="text-sm font-semibold text-white">Builds Into</h2>
                </div>
                <div className="space-y-2">
                  {buildsInto.map(bi => <RelatedCard key={bi.id} item={bi} />)}
                </div>
                {item.buildsInto && item.buildsInto.length > buildsInto.length && (
                  <div className="mt-3 space-y-1">
                    {item.buildsInto
                      .filter(name => !buildsInto.some(i => i.name === name))
                      .map(name => (
                        <div key={name} className="px-3 py-2 rounded-xl bg-white/3 border border-white/5">
                          <p className="text-sm text-gray-500">{name}</p>
                        </div>
                      ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Category nav */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
            >
              <h2 className="text-sm font-semibold text-white mb-4">Browse Categories</h2>
              <div className="space-y-1">
                {SHOP_CATEGORIES.map(cat => {
                  const CIcon = CATEGORY_ICONS[cat];
                  const cColor = CATEGORY_COLORS[cat];
                  const isActive = cat === item.category;
                  return (
                    <Link
                      key={cat}
                      to="/shop"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                        isActive ? 'bg-white/8 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/4'
                      }`}
                    >
                      <CIcon className="w-4 h-4 shrink-0" style={{ color: cColor }} strokeWidth={1.75} />
                      {cat}
                      {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: cColor }} />}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related items */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-white">More in {item.category}</h2>
              <Link to="/shop" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
                View all
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {related.map(rel => <RelatedMiniCard key={rel.id} rel={rel} />)}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
