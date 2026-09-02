import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, X, Shield, Zap, Brain, Globe,
  Swords, Users, Filter,
} from 'lucide-react';
import {
  ALL_HEROES, HERO_ATTRIBUTES, HERO_ROLES,
  ATTRIBUTE_COLORS, COMPLEXITY_LABEL,
  type Hero, type HeroAttribute, type HeroRole, type HeroComplexity,
} from '../data/heroes';

// ── Attribute icon ───────────────────────────────────────────────────────────
function AttrIcon({ attr, size = 14 }: { attr: HeroAttribute; size?: number }) {
  const color = ATTRIBUTE_COLORS[attr];
  const props = { style: { color }, strokeWidth: 2, width: size, height: size };
  if (attr === 'Strength')     return <Shield {...props} />;
  if (attr === 'Agility')      return <Zap {...props} />;
  if (attr === 'Intelligence') return <Brain {...props} />;
  return <Globe {...props} />;
}

// ── Complexity dots ──────────────────────────────────────────────────────────
function ComplexityDots({ level }: { level: HeroComplexity }) {
  return (
    <div className="flex items-center gap-0.5">
      {([1, 2, 3] as const).map(i => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: i <= level ? 'rgba(251,191,36,0.9)' : 'rgba(255,255,255,0.1)' }}
        />
      ))}
    </div>
  );
}

// ── Hero image with fallback ─────────────────────────────────────────────────
function HeroImg({ hero, className = '' }: { hero: Hero; className?: string }) {
  const [err, setErr] = useState(false);
  const color = ATTRIBUTE_COLORS[hero.attribute];

  if (!err) {
    return (
      <img
        src={hero.imageUrl}
        alt={hero.name}
        className={`w-full h-full object-cover object-top ${className}`}
        onError={() => setErr(true)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: `radial-gradient(ellipse at center, ${color}15 0%, #0a0d12 70%)` }}
    >
      <AttrIcon attr={hero.attribute} size={32} />
    </div>
  );
}

// ── Hero card ────────────────────────────────────────────────────────────────
function HeroCard({ hero, index }: { hero: Hero; index: number }) {
  const color = ATTRIBUTE_COLORS[hero.attribute];

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.025, 0.5) }}
      className="group relative rounded-2xl border border-white/8 bg-[#0d1117] overflow-hidden hover:border-white/22 hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-black/50 cursor-default"
    >
      {/* Attribute accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
      />

      {/* Portrait */}
      <div className="relative h-36 bg-[#0a0d12] overflow-hidden">
        <HeroImg hero={hero} />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />

        {/* Attack type badge */}
        <div className="absolute top-2 right-2">
          <div
            className="flex items-center gap-1 px-1.5 py-0.5 rounded-md text-xs font-semibold border"
            style={{ color, borderColor: `${color}40`, background: `${color}15` }}
          >
            {hero.attackType === 'Melee' ? (
              <Swords className="w-2.5 h-2.5" strokeWidth={2.5} />
            ) : (
              <Zap className="w-2.5 h-2.5" strokeWidth={2.5} />
            )}
          </div>
        </div>

        {/* Attribute icon bottom-left */}
        <div className="absolute bottom-2 left-2">
          <AttrIcon attr={hero.attribute} size={14} />
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-1 mb-2">
          <h3 className="text-sm font-semibold text-white leading-tight line-clamp-1 group-hover:text-rose-300 transition-colors">
            {hero.name}
          </h3>
          <ComplexityDots level={hero.complexity} />
        </div>

        {/* Roles */}
        <div className="flex flex-wrap gap-1">
          {hero.roles.slice(0, 3).map(role => (
            <span
              key={role}
              className="text-xs text-gray-600 border border-white/6 px-1.5 py-0.5 rounded-md"
            >
              {role}
            </span>
          ))}
          {hero.roles.length > 3 && (
            <span className="text-xs text-gray-700 px-1 py-0.5">
              +{hero.roles.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────
export function HeroesPage() {
  const [query, setQuery]               = useState('');
  const [activeAttr, setActiveAttr]     = useState<HeroAttribute | 'All'>('All');
  const [activeRole, setActiveRole]     = useState<HeroRole | 'All'>('All');
  const [activeAttack, setActiveAttack] = useState<'All' | 'Melee' | 'Ranged'>('All');
  const [complexity, setComplexity]     = useState<HeroComplexity | 'All'>('All');
  const [showFilters, setShowFilters]   = useState(false);

  const attrCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_HEROES.length };
    HERO_ATTRIBUTES.forEach(a => {
      counts[a] = ALL_HEROES.filter(h => h.attribute === a).length;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return ALL_HEROES.filter(h => {
      if (query) {
        const q = query.toLowerCase();
        if (!h.name.toLowerCase().includes(q) &&
            !h.roles.some(r => r.toLowerCase().includes(q)) &&
            !h.attribute.toLowerCase().includes(q)) return false;
      }
      if (activeAttr !== 'All' && h.attribute !== activeAttr) return false;
      if (activeRole !== 'All' && !h.roles.includes(activeRole)) return false;
      if (activeAttack !== 'All' && h.attackType !== activeAttack) return false;
      if (complexity !== 'All' && h.complexity !== complexity) return false;
      return true;
    });
  }, [query, activeAttr, activeRole, activeAttack, complexity]);

  const hasFilters = query || activeAttr !== 'All' || activeRole !== 'All' ||
                     activeAttack !== 'All' || complexity !== 'All';

  const clearAll = () => {
    setQuery('');
    setActiveAttr('All');
    setActiveRole('All');
    setActiveAttack('All');
    setComplexity('All');
  };

  return (
    <div className="min-h-screen">
      {/* ── Page header ───────────────────────────────────── */}
      <div className="relative border-b border-white/5 bg-[#070a0f] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 40% 60% at 20% 50%, rgba(248,113,113,0.12) 0%, transparent 70%),
              radial-gradient(ellipse 40% 60% at 80% 50%, rgba(96,165,250,0.10) 0%, transparent 70%),
              radial-gradient(ellipse 30% 50% at 50% -10%, rgba(192,132,252,0.10) 0%, transparent 60%)
            `,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 flex items-center justify-center shadow-lg shadow-rose-500/30 shrink-0">
              <Users className="w-7 h-7 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-rose-400 text-xs font-semibold uppercase tracking-widest mb-2">Heroes</p>
              <h1 className="text-4xl font-bold text-white tracking-tight">Hero Directory</h1>
              <p className="text-gray-400 mt-2 max-w-xl">
                All {ALL_HEROES.length} heroes in Dota 2 as of patch 7.40. Filter by attribute,
                role, attack type, and complexity to find your next pick.
              </p>

              {/* Attribute summary pills */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                {HERO_ATTRIBUTES.map(attr => (
                  <div key={attr} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <AttrIcon attr={attr} size={13} />
                    <span style={{ color: ATTRIBUTE_COLORS[attr] }}>{attrCounts[attr]}</span>
                    <span className="text-gray-600">{attr}</span>
                  </div>
                ))}
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
              placeholder="Search heroes, roles, attributes..."
              className="w-full pl-11 pr-10 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-rose-500/40 transition-colors"
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

      {/* ── Attribute tabs ────────────────────────────────── */}
      <div className="sticky top-16 z-30 border-b border-white/5 bg-[#070a0f]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Attribute pills */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin py-3">
              {(['All', ...HERO_ATTRIBUTES] as const).map(attr => {
                const isActive = activeAttr === attr;
                const color = attr === 'All' ? '#f87171' : ATTRIBUTE_COLORS[attr];
                return (
                  <button
                    key={attr}
                    onClick={() => setActiveAttr(attr)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                      isActive ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }`}
                    style={isActive ? { color } : undefined}
                  >
                    {attr !== 'All' && <AttrIcon attr={attr} size={12} />}
                    {attr}
                    <span className={`opacity-60 ${isActive ? '' : 'opacity-40'}`}>
                      {attrCounts[attr] ?? ALL_HEROES.filter(h => h.attribute === attr).length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(v => !v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ml-3 shrink-0 ${
                showFilters || (hasFilters && activeAttr === 'All' && !query)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <Filter className="w-3.5 h-3.5" strokeWidth={1.75} />
              Filters
              {hasFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              )}
            </button>
          </div>

          {/* Expanded filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pb-4 flex flex-wrap gap-6">
                  {/* Role filter */}
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-2">Role</p>
                    <div className="flex flex-wrap gap-1.5">
                      {(['All', ...HERO_ROLES] as const).map(role => (
                        <button
                          key={role}
                          onClick={() => setActiveRole(role)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                            activeRole === role
                              ? 'bg-white/12 text-white border border-white/20'
                              : 'text-gray-500 border border-white/6 hover:text-gray-300 hover:border-white/12'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Attack type filter */}
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-2">Attack</p>
                    <div className="flex gap-1.5">
                      {(['All', 'Melee', 'Ranged'] as const).map(t => (
                        <button
                          key={t}
                          onClick={() => setActiveAttack(t)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                            activeAttack === t
                              ? 'bg-white/12 text-white border border-white/20'
                              : 'text-gray-500 border border-white/6 hover:text-gray-300 hover:border-white/12'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Complexity filter */}
                  <div>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-2">Complexity</p>
                    <div className="flex gap-1.5">
                      {(['All', 1, 2, 3] as const).map(c => (
                        <button
                          key={c}
                          onClick={() => setComplexity(c)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                            complexity === c
                              ? 'bg-white/12 text-white border border-white/20'
                              : 'text-gray-500 border border-white/6 hover:text-gray-300 hover:border-white/12'
                          }`}
                        >
                          {c === 'All' ? 'All' : COMPLEXITY_LABEL[c]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Result bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing{' '}
            <span className="text-white font-medium">{filtered.length}</span>
            {' '}of{' '}
            <span className="text-white font-medium">{ALL_HEROES.length}</span>
            {' '}heroes
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-rose-400 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Clear all
            </button>
          )}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-32">
            <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={1.25} />
            <p className="text-gray-500">No heroes match your filters.</p>
            <button
              onClick={clearAll}
              className="mt-3 text-sm text-rose-400 hover:text-rose-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* When attribute = All: group by attribute */}
        {filtered.length > 0 && activeAttr === 'All' && !query && activeRole === 'All' && activeAttack === 'All' && complexity === 'All' ? (
          <div className="space-y-14">
            {HERO_ATTRIBUTES.map(attr => {
              const heroes = filtered.filter(h => h.attribute === attr);
              if (heroes.length === 0) return null;
              const color = ATTRIBUTE_COLORS[attr];
              return (
                <div key={attr}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <AttrIcon attr={attr} size={16} />
                    </div>
                    <h2 className="text-lg font-bold text-white">{attr}</h2>
                    <span className="text-sm text-gray-600">{heroes.length} heroes</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {heroes.map((hero, i) => (
                      <HeroCard key={hero.id} hero={hero} index={i} />
                    ))}
                  </div>
                  <div className="mt-10 h-px bg-white/5" />
                </div>
              );
            })}
          </div>
        ) : (
          /* Flat filtered grid */
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeAttr}-${activeRole}-${activeAttack}-${complexity}-${query}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3"
            >
              {filtered.map((hero, i) => (
                <HeroCard key={hero.id} hero={hero} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Legend */}
        {filtered.length > 0 && (
          <div className="mt-16 p-5 rounded-2xl border border-white/5 bg-white/2">
            <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mb-4">Legend</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-500">
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Attributes</p>
                {HERO_ATTRIBUTES.map(a => (
                  <div key={a} className="flex items-center gap-2">
                    <AttrIcon attr={a} size={11} />
                    <span style={{ color: ATTRIBUTE_COLORS[a] }}>{a}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Complexity dots</p>
                <div className="space-y-1.5">
                  {([1, 2, 3] as const).map(c => (
                    <div key={c} className="flex items-center gap-2">
                      <ComplexityDots level={c} />
                      <span>{COMPLEXITY_LABEL[c]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Attack type</p>
                <div className="flex items-center gap-2">
                  <Swords className="w-3 h-3 text-gray-500" strokeWidth={2} />
                  <span>Melee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 text-gray-500" strokeWidth={2} />
                  <span>Ranged</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400 font-medium">Current patch</p>
                <p>Patch 7.40</p>
                <p className="text-gray-600">127 heroes total</p>
                <p className="text-gray-600">Latest: Largo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
