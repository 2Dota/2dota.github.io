import { motion, AnimatePresence } from 'framer-motion';
import { X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { FilterState, ItemCategory, ItemRarity } from '../../types';
import { ALL_CATEGORIES, ALL_RARITIES, ALL_HEROES } from '../../data/items';
import { getRarityHex } from '../../utils/rarity';

interface FilterPanelProps {
  filter: FilterState;
  onToggleCategory: (c: ItemCategory) => void;
  onToggleRarity: (r: ItemRarity) => void;
  onToggleHero: (h: string) => void;
  onSetAvailability: (a: FilterState['availability']) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

interface AccordionProps {
  label: string;
  count?: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function Accordion({ label, count, children, defaultOpen = true }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/5 pb-4">
      <button
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center gap-2">
          {label}
          {count != null && count > 0 && (
            <span className="px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-xs">{count}</span>
          )}
        </span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
  color?: string;
}

function FilterChip({ label, active, onClick, color }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
        active
          ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
          : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
      }`}
      style={
        active && color
          ? { background: `${color}20`, borderColor: `${color}50`, color }
          : undefined
      }
    >
      {label}
    </button>
  );
}

export function FilterPanel({
  filter,
  onToggleCategory,
  onToggleRarity,
  onToggleHero,
  onSetAvailability,
  onClear,
  hasActiveFilters,
}: FilterPanelProps) {
  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <SlidersHorizontal className="w-4 h-4 text-rose-400" />
          Filters
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-rose-400 transition-colors"
          >
            <X className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Availability */}
        <Accordion label="Availability">
          <div className="flex flex-wrap gap-2">
            {(['all', 'available', 'limited'] as const).map(a => (
              <FilterChip
                key={a}
                label={a === 'all' ? 'All Items' : a === 'available' ? 'In Store' : 'Limited'}
                active={filter.availability === a}
                onClick={() => onSetAvailability(a)}
              />
            ))}
          </div>
        </Accordion>

        {/* Category */}
        <Accordion label="Category" count={filter.categories.length}>
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map(cat => (
              <FilterChip
                key={cat}
                label={cat}
                active={filter.categories.includes(cat)}
                onClick={() => onToggleCategory(cat)}
              />
            ))}
          </div>
        </Accordion>

        {/* Rarity */}
        <Accordion label="Rarity" count={filter.rarities.length}>
          <div className="flex flex-wrap gap-2">
            {ALL_RARITIES.map(r => (
              <FilterChip
                key={r}
                label={r}
                active={filter.rarities.includes(r)}
                onClick={() => onToggleRarity(r)}
                color={getRarityHex(r)}
              />
            ))}
          </div>
        </Accordion>

        {/* Hero */}
        <Accordion label="Hero" count={filter.heroes.length} defaultOpen={false}>
          <div className="max-h-52 overflow-y-auto pr-1 flex flex-wrap gap-2 scrollbar-thin">
            {ALL_HEROES.map(hero => (
              <FilterChip
                key={hero}
                label={hero}
                active={filter.heroes.includes(hero)}
                onClick={() => onToggleHero(hero)}
              />
            ))}
          </div>
        </Accordion>
      </div>
    </aside>
  );
}
