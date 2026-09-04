import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ChevronRight, Shield, Zap, Brain,
  Globe, Swords, Lightbulb, BookOpen, Package,
  Users, AlertTriangle, Star,
} from 'lucide-react';
import { ALL_HEROES, ATTRIBUTE_COLORS, COMPLEXITY_LABEL, type HeroAttribute } from '../data/heroes';
import { getHeroDetail } from '../data/heroDetails';

function AttrIcon({ attr, size = 14 }: { attr: HeroAttribute; size?: number }) {
  const color = ATTRIBUTE_COLORS[attr];
  const props = { style: { color }, strokeWidth: 2 as const, width: size, height: size };
  if (attr === 'Strength')     return <Shield {...props} />;
  if (attr === 'Agility')      return <Zap {...props} />;
  if (attr === 'Intelligence') return <Brain {...props} />;
  return <Globe {...props} />;
}

function HeroPortrait({ slug, name }: { slug: string; name: string }) {
  const [err, setErr] = useState(false);
  const url = `https://cdn.dota2.com/apps/dota2/images/heroes/${slug}_full.png`;

  if (!err) {
    return (
      <img
        src={url}
        alt={name}
        className="w-full h-full object-cover object-center"
        onError={() => setErr(true)}
      />
    );
  }
  // Fallback to _lg.png
  return (
    <img
      src={`https://cdn.dota2.com/apps/dota2/images/heroes/${slug}_lg.png`}
      alt={name}
      className="w-full h-full object-cover object-center"
    />
  );
}

const ABILITY_TYPE_COLORS = {
  Active:    { bg: 'bg-blue-500/10', border: 'border-blue-500/25', text: 'text-blue-400' },
  Passive:   { bg: 'bg-amber-500/10', border: 'border-amber-500/25', text: 'text-amber-400' },
  Toggle:    { bg: 'bg-purple-500/10', border: 'border-purple-500/25', text: 'text-purple-400' },
  Channeled: { bg: 'bg-rose-500/10', border: 'border-rose-500/25', text: 'text-rose-400' },
  Aura:      { bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', text: 'text-emerald-400' },
};

export function HeroDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const hero = ALL_HEROES.find(h => h.slug === slug);
  if (!hero) {
    return (
      <div className="pt-24 text-center py-40">
        <Users className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={1.25} />
        <h1 className="text-2xl font-bold text-white mb-3">Hero Not Found</h1>
        <Link to="/heroes" className="text-rose-400 hover:text-rose-300 text-sm">
          Back to Heroes
        </Link>
      </div>
    );
  }

  const detail   = getHeroDetail(hero.slug);
  const color    = ATTRIBUTE_COLORS[hero.attribute];

  // Related heroes: same attribute, exclude current
  const related = ALL_HEROES
    .filter(h => h.slug !== hero.slug && h.attribute === hero.attribute)
    .slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Ambient glow */}
      <div
        className="fixed top-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${color}12 0%, transparent 70%)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <ChevronRight className="w-3 h-3" />
          <Link to="/heroes" className="hover:text-white transition-colors">Heroes</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">{hero.name}</span>
        </nav>

        {/* ── Hero banner ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-white/10 bg-[#0d1117] overflow-hidden mb-8"
          style={{ boxShadow: `0 30px 80px -20px ${color}20` }}
        >
          <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />

          <div className="flex flex-col sm:flex-row">
            {/* Portrait */}
            <div className="relative w-full sm:w-72 h-56 sm:h-auto shrink-0 overflow-hidden bg-[#0a0d12]">
              <HeroPortrait slug={hero.slug} name={hero.name} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1117] hidden sm:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent sm:hidden" />
            </div>

            {/* Info */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{ color, borderColor: `${color}40`, background: `${color}12` }}
                >
                  <AttrIcon attr={hero.attribute} size={11} />
                  {hero.attribute}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300">
                  {hero.attackType === 'Melee' ? (
                    <Swords className="w-3 h-3" strokeWidth={2} />
                  ) : (
                    <Zap className="w-3 h-3" strokeWidth={2} />
                  )}
                  {hero.attackType}
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-gray-300">
                  <Star className="w-3 h-3 text-amber-400" strokeWidth={2} />
                  {COMPLEXITY_LABEL[hero.complexity]}
                </div>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
                {hero.name}
              </h1>

              {/* Lore */}
              <p
                className="text-sm text-gray-500 italic leading-relaxed mb-5 pl-3 border-l-2"
                style={{ borderColor: `${color}50` }}
              >
                "{detail.lore}"
              </p>

              {/* Overview */}
              <p className="text-gray-300 leading-relaxed text-sm mb-6">{detail.overview}</p>

              {/* Roles */}
              <div className="flex flex-wrap gap-2">
                {hero.roles.map(role => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium border border-white/10 bg-white/5 text-gray-400"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Main content grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left col: abilities + tips */}
          <div className="lg:col-span-2 space-y-6">

            {/* Abilities */}
            {detail.abilities.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Zap className="w-4 h-4 text-blue-400" strokeWidth={1.75} />
                  <h2 className="font-semibold text-white">Abilities</h2>
                </div>
                <div className="space-y-4">
                  {detail.abilities.map((ability, i) => {
                    const typeStyle = ABILITY_TYPE_COLORS[ability.type];
                    return (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border ${typeStyle.bg} ${typeStyle.border}`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold uppercase tracking-wider ${typeStyle.text}`}>
                            {ability.type}
                          </span>
                          <span className="text-sm font-semibold text-white">{ability.name}</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-2">{ability.description}</p>
                        {(ability.cooldown || ability.manaCost) && (
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            {ability.cooldown && (
                              <span className="flex items-center gap-1">
                                <span className="text-blue-500">CD:</span> {ability.cooldown}
                              </span>
                            )}
                            {ability.manaCost && (
                              <span className="flex items-center gap-1">
                                <span className="text-purple-400">Mana:</span> {ability.manaCost}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            )}

            {/* Tips and tricks */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
            >
              <div className="flex items-center gap-2 mb-5">
                <Lightbulb className="w-4 h-4 text-yellow-400" strokeWidth={1.75} />
                <h2 className="font-semibold text-white">Tips and Tricks</h2>
                <span className="text-xs text-gray-600 ml-1">things most players miss</span>
              </div>
              <ul className="space-y-3">
                {detail.tips.map((tip, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                    >
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{tip}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Item guide */}
            {(detail.itemGuide.early.length > 0 || detail.itemGuide.mid.length > 0 || detail.itemGuide.late.length > 0) && (
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-6 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Package className="w-4 h-4 text-amber-400" strokeWidth={1.75} />
                  <h2 className="font-semibold text-white">Item Guide</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Early Game', items: detail.itemGuide.early, color: '#4ade80' },
                    { label: 'Mid Game',   items: detail.itemGuide.mid,   color: '#60a5fa' },
                    { label: 'Late Game',  items: detail.itemGuide.late,  color: '#fbbf24' },
                  ].map(({ label, items, color: stageColor }) => (
                    <div key={label}>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: stageColor }}
                      >
                        {label}
                      </p>
                      <div className="space-y-1.5">
                        {items.map(item => (
                          <div
                            key={item}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/4 border border-white/6"
                          >
                            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: stageColor }} />
                            <span className="text-sm text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right col: counters, synergies, more */}
          <div className="space-y-5">

            {/* Counters */}
            {detail.counters.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-rose-400" strokeWidth={1.75} />
                  <h2 className="text-sm font-semibold text-white">Countered By</h2>
                </div>
                <div className="space-y-2">
                  {detail.counters.map(name => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-rose-500/5 border border-rose-500/15"
                    >
                      <Shield className="w-3.5 h-3.5 text-rose-500 shrink-0" strokeWidth={1.75} />
                      <span className="text-sm text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Synergies */}
            {detail.synergies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-emerald-400" strokeWidth={1.75} />
                  <h2 className="text-sm font-semibold text-white">Works Well With</h2>
                </div>
                <div className="space-y-2">
                  {detail.synergies.map(name => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15"
                    >
                      <Star className="w-3.5 h-3.5 text-emerald-500 shrink-0" strokeWidth={1.75} />
                      <span className="text-sm text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="p-5 rounded-2xl border border-white/8 bg-[#0d1117]"
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gray-400" strokeWidth={1.75} />
                <h2 className="text-sm font-semibold text-white">Quick Reference</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Attribute</span>
                  <span className="flex items-center gap-1.5 font-medium" style={{ color }}>
                    <AttrIcon attr={hero.attribute} size={12} />
                    {hero.attribute}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Attack</span>
                  <span className="text-gray-300">{hero.attackType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Complexity</span>
                  <span className="text-gray-300">{COMPLEXITY_LABEL[hero.complexity]}</span>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <span className="text-gray-500 shrink-0">Roles</span>
                  <div className="flex flex-wrap justify-end gap-1">
                    {hero.roles.map(r => (
                      <span key={r} className="text-xs text-gray-500 border border-white/8 px-1.5 py-0.5 rounded">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Placeholder for full guide note */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-5 rounded-2xl border border-white/5 bg-white/2"
            >
              <p className="text-xs text-gray-600 leading-relaxed">
                Hero data is based on patch 7.40. For the latest ability values and patch changes,
                visit the{' '}
                <a
                  href={`https://www.dota2.com/hero/${hero.name.replace(/\s/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-500 hover:text-rose-400 transition-colors"
                >
                  official Dota 2 website
                </a>.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Related heroes ────────────────────────────────── */}
        {related.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-12"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-white">
                More {hero.attribute} Heroes
              </h2>
              <Link
                to="/heroes"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
              >
                All heroes
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {related.map(rel => {
                const relColor = ATTRIBUTE_COLORS[rel.attribute];
                return (
                  <Link
                    key={rel.slug}
                    to={`/heroes/${rel.slug}`}
                    className="group rounded-2xl border border-white/8 bg-[#0d1117] overflow-hidden hover:border-white/20 transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${relColor}70, transparent)` }} />
                    <div className="h-24 bg-[#0a0d12] overflow-hidden">
                      <img
                        src={`https://cdn.dota2.com/apps/dota2/images/heroes/${rel.slug}_lg.png`}
                        alt={rel.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs font-semibold text-white leading-tight line-clamp-1 group-hover:text-rose-300 transition-colors">
                        {rel.name}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
