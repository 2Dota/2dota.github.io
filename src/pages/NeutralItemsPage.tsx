import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Search, Clock, Lightbulb, Shield, Zap,
  ChevronRight, Package, TriangleAlert,
} from 'lucide-react';
import {
  NEUTRAL_ITEMS, NEUTRAL_TIERS, TIER_INFO, SYSTEM_NOTES,
  type NeutralItem, type NeutralTier,
} from '../data/neutralItems';

// ── Item image with fallback ────────────────────────────────────────────────
function ItemImg({
  item, size = 'md',
}: { item: NeutralItem; size?: 'sm' | 'md' | 'lg' }) {
  const [err, setErr] = useState(false);
  const dim = size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-24 h-24' : 'w-16 h-16';
  if (!err) {
    return (
      <img
        src={item.imageUrl}
        alt={item.name}
        className={`${dim} object-contain drop-shadow-lg`}
        onError={() => setErr(true)}
        loading="lazy"
      />
    );
  }
  return (
    <div className={`${dim} rounded-xl bg-white/5 border border-white/10 flex items-center justify-center`}>
      <Package className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
    </div>
  );
}

// ── Stat pill ───────────────────────────────────────────────────────────────
function StatPill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 text-sm text-gray-300">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
      {label}
    </div>
  );
}

// ── Item detail modal ───────────────────────────────────────────────────────
function ItemModal({
  item,
  onClose,
}: { item: NeutralItem; onClose: () => void }) {
  const tier = TIER_INFO[item.tier];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl bg-[#0d1117] rounded-3xl border border-white/12 overflow-hidden shadow-2xl shadow-black/60"
          onClick={e => e.stopPropagation()}
        >
          {/* Tier accent */}
          <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${tier.color}, transparent)` }} />

          {/* Header */}
          <div className="flex items-start gap-5 p-6 pb-4">
            <div
              className="w-20 h-20 rounded-2xl shrink-0 flex items-center justify-center"
              style={{ background: `radial-gradient(ellipse at center, ${tier.color}15 0%, #0a0d12 70%)`, border: `1px solid ${tier.color}25` }}
            >
              <ItemImg item={item} size="lg" />
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border mb-2"
                style={{ color: tier.color, borderColor: `${tier.color}40`, background: `${tier.color}12` }}
              >
                <Clock className="w-3 h-3" strokeWidth={2} />
                Tier {item.tier} · {item.dropTime}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{item.name}</h2>
              <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-6 pb-6 space-y-5">
            {/* Stats */}
            {item.stats.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-emerald-400" strokeWidth={1.75} />
                  <p className="text-sm font-semibold text-white">Stats</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.stats.map(s => <StatPill key={s} label={s} />)}
                </div>
              </div>
            )}

            {/* Active */}
            {item.active && (
              <div className="p-4 rounded-2xl bg-blue-500/8 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-blue-400" strokeWidth={2} />
                  </div>
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Active</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.active}</p>
              </div>
            )}

            {/* Passive */}
            {item.passive && (
              <div className="p-4 rounded-2xl bg-amber-500/8 border border-amber-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-amber-400" strokeWidth={2} />
                  </div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Passive</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{item.passive}</p>
              </div>
            )}

            {/* Tips */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-yellow-400" strokeWidth={1.75} />
                <p className="text-sm font-semibold text-white">Tips</p>
              </div>
              <ul className="space-y-2">
                {item.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" strokeWidth={1.75} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Item card ───────────────────────────────────────────────────────────────
function NeutralCard({
  item, index, onClick,
}: { item: NeutralItem; index: number; onClick: () => void }) {
  const tier = TIER_INFO[item.tier];

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: Math.min(index * 0.035, 0.45) }}
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-white/8 bg-[#0d1117] overflow-hidden hover:border-white/20 hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Tier line */}
      <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${tier.color}80, transparent)` }} />

      {/* Image */}
      <div className="h-24 bg-[#0a0d12] flex items-center justify-center relative">
        <ItemImg item={item} size="md" />
        {/* Tier badge */}
        <div
          className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold border"
          style={{ color: tier.color, borderColor: `${tier.color}40`, background: `${tier.color}15` }}
        >
          T{item.tier}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-sm font-semibold text-white leading-snug group-hover:text-rose-300 transition-colors line-clamp-1">
          {item.name}
        </p>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        {/* First stat */}
        {item.stats[0] && (
          <p className="text-xs mt-2 font-medium" style={{ color: tier.color }}>
            {item.stats[0]}
          </p>
        )}
      </div>
    </motion.button>
  );
}

// ── Main page ───────────────────────────────────────────────────────────────
export function NeutralItemsPage() {
  const [activeTier, setActiveTier] = useState<NeutralTier | 'All'>('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<NeutralItem | null>(null);

  const filtered = useMemo(() => {
    let items = NEUTRAL_ITEMS;
    if (activeTier !== 'All') items = items.filter(i => i.tier === activeTier);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.active ?? '').toLowerCase().includes(q) ||
        (i.passive ?? '').toLowerCase().includes(q) ||
        i.tips.some(t => t.toLowerCase().includes(q))
      );
    }
    return items;
  }, [activeTier, query]);

  const tierCounts = useMemo(() => {
    const counts: Record<string, number> = { All: NEUTRAL_ITEMS.length };
    NEUTRAL_TIERS.forEach(t => { counts[t] = NEUTRAL_ITEMS.filter(i => i.tier === t).length; });
    return counts;
  }, []);

  return (
    <div className="min-h-screen">
      {/* ── Page header ──────────────────────────────────────── */}
      <div className="relative border-b border-white/5 bg-[#070a0f] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% -20%, rgba(251,191,36,0.18) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/30 shrink-0">
              <Package className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-2">Neutral Items</p>
              <h1 className="text-4xl font-bold text-white tracking-tight">Neutral Item Guide</h1>
              <p className="text-gray-400 mt-2 max-w-xl">
                All {NEUTRAL_ITEMS.length} neutral items across 5 tiers. Stats, tips, and pro strategies
                for every item dropped by neutral creeps in the Dota 2 jungle.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-5">
                {NEUTRAL_TIERS.map(t => {
                  const info = TIER_INFO[t];
                  return (
                    <div key={t} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-2 h-2 rounded-full" style={{ background: info.color }} />
                      Tier {t}: {info.dropTime}
                    </div>
                  );
                })}
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
              placeholder="Search items, stats, abilities..."
              className="w-full pl-11 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/40 transition-colors"
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

      {/* ── Tier tabs ────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-white/5 bg-[#070a0f]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-3">
            {(['All', ...NEUTRAL_TIERS] as const).map(t => {
              const isActive = activeTier === t;
              const color = t === 'All' ? '#f87171' : TIER_INFO[t].color;
              const label = t === 'All' ? 'All Tiers' : `Tier ${t}`;
              const sub = t === 'All' ? null : TIER_INFO[t].dropTime;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTier(t)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                    isActive ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                  }`}
                  style={isActive ? { color } : undefined}
                >
                  {t !== 'All' && (
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  )}
                  {label}
                  {sub && <span className="text-gray-600 font-normal">{sub}</span>}
                  <span className={`text-xs ${isActive ? 'opacity-80' : 'opacity-40'}`}>
                    {tierCounts[t]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ── How neutral items work ────────────────────────── */}
        {activeTier === 'All' && !query && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <TriangleAlert className="w-5 h-5 text-yellow-400" strokeWidth={1.75} />
              <h2 className="font-semibold text-white">How Neutral Items Work (Patch 7.39)</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-400 leading-relaxed">
              {SYSTEM_NOTES.map(note => (
                <div key={note.title} className="space-y-1">
                  <p className="font-medium text-gray-300">{note.title}</p>
                  <p>{note.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Result count ─────────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="text-white font-medium">{filtered.length}</span> items
            {activeTier !== 'All' && (
              <> in <span className="font-medium" style={{ color: TIER_INFO[activeTier].color }}>Tier {activeTier}</span></>
            )}
          </p>
          {(query || activeTier !== 'All') && (
            <button
              onClick={() => { setQuery(''); setActiveTier('All'); }}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-rose-400 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear
            </button>
          )}
        </div>

        {/* ── Items by tier (when All is selected, no search) ─ */}
        {activeTier === 'All' && !query ? (
          <div className="space-y-16">
            {NEUTRAL_TIERS.map(tier => {
              const info = TIER_INFO[tier];
              const tierItems = NEUTRAL_ITEMS.filter(i => i.tier === tier);
              return (
                <div key={tier}>
                  {/* Tier header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold shrink-0 mt-0.5"
                        style={{ background: `${info.color}15`, border: `1px solid ${info.color}30`, color: info.color }}
                      >
                        {tier}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-bold text-white">Tier {tier}</h3>
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium"
                            style={{ color: info.color, borderColor: `${info.color}40`, background: `${info.color}10` }}>
                            <Clock className="w-3 h-3" strokeWidth={2} />
                            {info.dropTime}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {tierItems.map((item, i) => (
                      <NeutralCard key={item.id} item={item} index={i} onClick={() => setSelected(item)} />
                    ))}
                  </div>

                  {tier < 5 && <div className="mt-12 h-px bg-white/5" />}
                </div>
              );
            })}
          </div>
        ) : (
          /* ── Filtered flat grid ─────────────────────────── */
          filtered.length === 0 ? (
            <div className="text-center py-32">
              <Package className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={1.25} />
              <p className="text-gray-500">No items match your search.</p>
              <button
                onClick={() => { setQuery(''); setActiveTier('All'); }}
                className="mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTier}-${query}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              >
                {filtered.map((item, i) => (
                  <NeutralCard key={item.id} item={item} index={i} onClick={() => setSelected(item)} />
                ))}
              </motion.div>
            </AnimatePresence>
          )
        )}

        {/* ── General tips section ─────────────────────────── */}
        {activeTier === 'All' && !query && (
          <div className="mt-20 space-y-6">
            <div className="h-px bg-white/5" />
            <div className="text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-medium mb-2">Strategy</p>
              <h2 className="text-2xl font-bold text-white">General Tips</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {[
                {
                  title: 'Farm camps actively',
                  body: 'Clearing full camps drops Madstone. The more camps you clear the faster you craft your neutral item. Junglers and offlaners should be clearing camps on cooldown.',
                },
                {
                  title: 'Save Dormant Curio',
                  body: 'If you receive a Dormant Curio at Tier 1, hold it and wait until Tier 3 or higher before using it. The 30% potency increase is far more valuable on stronger artifacts.',
                },
                {
                  title: 'Steal enemy jungle',
                  body: 'At each tier transition window (7, 17, 27, 37 min), rotate into the enemy jungle to deny their camps. Less Madstone for them means slower neutral item crafting.',
                },
                {
                  title: 'Supports at Tier 1-2',
                  body: 'Supports should prioritize farming Madstone for their early tiers. Items like Kobold Cup, Essence Ring, and Ring of Aquila are transformative for position 4 and 5 heroes.',
                },
                {
                  title: 'Carries at Tier 4-5',
                  body: 'High-tier items like Apex, Helm of the Undying, and Giants Ring are so powerful they should go to the carry or whoever creates the most impact in teamfights.',
                },
                {
                  title: 'Read the enemy lineup',
                  body: 'Choose your artifact based on what the enemy has. Clumsy Net versus an immobile hero. Mirror Shield or Divine Regalia versus single-target lockdown. Always adapt to the draft.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-yellow-400 shrink-0" strokeWidth={1.75} />
                    <p className="font-semibold text-white text-sm">{title}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Detail modal ─────────────────────────────────────── */}
      {selected && (
        <ItemModal item={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
