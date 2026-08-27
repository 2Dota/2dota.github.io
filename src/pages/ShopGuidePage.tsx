import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, ShoppingBag, Coins, ChevronRight, Package, Box,
} from 'lucide-react';
import { SHOP_ITEMS, SHOP_CATEGORIES, type ShopCategory } from '../data/shopItems';
import { CATEGORY_COLORS, CATEGORY_ICONS } from '../data/shopMeta';

function formatGold(cost: number) {
  return cost === 0 ? 'Free' : `${cost.toLocaleString()}`;
}

interface ItemCardProps {
  item: (typeof SHOP_ITEMS)[0];
  index: number;
}

function ShopItemCard({ item, index }: ItemCardProps) {
  const color = CATEGORY_COLORS[item.category];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.4) }}
    >
      <Link to={`/shop/${item.id}`} className="group block">
        <article className="relative rounded-2xl border border-white/8 bg-[#0d1117] overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-black/40">
          {/* Top rarity line */}
          <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }} />

          {/* Image area */}
          <div className="relative h-28 bg-[#0a0d12] flex items-center justify-center overflow-hidden">
            {!imgError ? (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Package className="w-7 h-7 text-gray-600" strokeWidth={1.5} />
              </div>
            )}
            {/* Gold badge */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#070a0f]/90 border border-white/10">
              <Coins className="w-3 h-3 text-amber-400" strokeWidth={1.75} />
              <span className="text-xs font-bold text-amber-400">{formatGold(item.cost)}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-3">
            <p className="text-xs font-medium text-gray-600 mb-0.5"
              style={{ color: `${color}99` }}>
              {item.category}
            </p>
            <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-rose-300 transition-colors line-clamp-1">
              {item.name}
            </h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function ShopGuidePage() {
  const [activeCategory, setActiveCategory] = useState<ShopCategory | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let items = SHOP_ITEMS;
    if (activeCategory !== 'All') {
      items = items.filter(i => i.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q) ||
        (i.active ?? '').toLowerCase().includes(q) ||
        (i.passive ?? '').toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, query]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: SHOP_ITEMS.length };
    SHOP_CATEGORIES.forEach(cat => {
      counts[cat] = SHOP_ITEMS.filter(i => i.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="relative border-b border-white/5 bg-[#070a0f] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% -20%, rgba(251,191,36,0.2) 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30 shrink-0">
              <ShoppingBag className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">In-Game Shop</p>
              <h1 className="text-4xl font-bold text-white tracking-tight">Item Shop Guide</h1>
              <p className="text-gray-400 mt-2 max-w-xl">
                Every item you can buy in the Dota 2 in-game shop (press F4). Full stats, costs,
                build paths, active and passive abilities with official artwork.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Package className="w-4 h-4" strokeWidth={1.75} />
                  {SHOP_ITEMS.length} items documented
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Box className="w-4 h-4" strokeWidth={1.75} />
                  {SHOP_CATEGORIES.length} categories
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-8 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search items, abilities, stats..."
              className="w-full pl-11 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/40 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="sticky top-16 z-30 border-b border-white/5 bg-[#070a0f]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-3">
            {(['All', ...SHOP_CATEGORIES] as const).map(cat => {
              const isActive = activeCategory === cat;
              const CatIcon = cat === 'All' ? Box : CATEGORY_ICONS[cat];
              const color = cat === 'All' ? '#f87171' : CATEGORY_COLORS[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                  }`}
                  style={isActive ? { color } : undefined}
                >
                  <CatIcon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  {cat}
                  <span className={`text-xs ${isActive ? 'opacity-80' : 'opacity-40'}`}>
                    {categoryCounts[cat]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Result count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="text-white font-medium">{filtered.length}</span> items
            {activeCategory !== 'All' && (
              <span> in <span className="text-white">{activeCategory}</span></span>
            )}
          </p>
          {(query || activeCategory !== 'All') && (
            <button
              onClick={() => { setQuery(''); setActiveCategory('All'); }}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-rose-400 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <Package className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={1.25} />
            <p className="text-gray-500">No items match your search.</p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('All'); }}
              className="mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filtered.map((item, i) => (
                <ShopItemCard key={item.id} item={item} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Category sections when viewing all */}
        {activeCategory === 'All' && !query && (
          <div className="mt-20 space-y-16">
            <div className="h-px bg-white/5" />
            <div className="text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-medium">Browse by category</p>
            </div>
            {SHOP_CATEGORIES.map(cat => {
              const CatIcon = CATEGORY_ICONS[cat];
              const color = CATEGORY_COLORS[cat];
              const catItems = SHOP_ITEMS.filter(i => i.category === cat).slice(0, 6);
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                      >
                        <CatIcon className="w-4.5 h-4.5" style={{ color }} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{cat}</h3>
                        <p className="text-xs text-gray-600">{categoryCounts[cat]} items</p>
                      </div>
                    </div>
                    <button
                      onClick={() => { setActiveCategory(cat); window.scrollTo(0, 0); }}
                      className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      View all
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {catItems.map((item, i) => (
                      <ShopItemCard key={item.id} item={item} index={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
