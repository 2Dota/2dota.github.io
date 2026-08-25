import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { useItemFilter } from '../hooks/useItemFilter';
import { SearchBar } from '../components/ui/SearchBar';
import { FilterPanel } from '../components/ui/FilterPanel';
import { SortControl } from '../components/ui/SortControl';
import { ItemCard } from '../components/item/ItemCard';
import { STORE_ITEMS } from '../data/items';
import type { ItemCategory } from '../types';

export function BrowsePage() {
  const [searchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const initialized = useRef(false);

  const {
    filter,
    sortBy,
    filteredItems,
    sortOptions,
    hasActiveFilters,
    setQuery,
    toggleCategory,
    toggleRarity,
    toggleHero,
    setAvailability,
    setSortBy,
    clearFilters,
  } = useItemFilter();

  // Apply URL params on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const cat = searchParams.get('category') as ItemCategory | null;
    if (cat) toggleCategory(cat);

    const rarity = searchParams.get('rarity');
    if (rarity) toggleRarity(rarity as any);

    const q = searchParams.get('q');
    if (q) setQuery(q);
  }, [searchParams, toggleCategory, toggleRarity, setQuery]);

  return (
    <div className="pt-16 min-h-screen">
      {/* Page header */}
      <div className="border-b border-white/5 bg-gray-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-white mb-2">Browse Items</h1>
          <p className="text-gray-400 text-sm">
            {STORE_ITEMS.length} cosmetic items from the Dota 2 store
          </p>

          {/* Search */}
          <div className="mt-6 max-w-2xl">
            <SearchBar
              value={filter.query}
              onChange={setQuery}
              placeholder="Search by name, hero, or type..."
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel
                filter={filter}
                onToggleCategory={toggleCategory}
                onToggleRarity={toggleRarity}
                onToggleHero={toggleHero}
                onSetAvailability={setAvailability}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center gap-3 mb-6">
              {/* Mobile filter button */}
              <button
                className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-gray-900/80 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-all"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                )}
              </button>

              <div className="flex-1">
                <SortControl
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                  count={filteredItems.length}
                  total={STORE_ITEMS.length}
                />
              </div>
            </div>

            {/* Active filter pills */}
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-2 mb-5"
              >
                {filter.categories.map(c => (
                  <button
                    key={c}
                    onClick={() => toggleCategory(c)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-medium hover:bg-rose-500/30 transition-colors"
                  >
                    {c} <X className="w-3 h-3" />
                  </button>
                ))}
                {filter.rarities.map(r => (
                  <button
                    key={r}
                    onClick={() => toggleRarity(r)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-medium hover:bg-amber-500/30 transition-colors"
                  >
                    {r} <X className="w-3 h-3" />
                  </button>
                ))}
                {filter.heroes.map(h => (
                  <button
                    key={h}
                    onClick={() => toggleHero(h)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-medium hover:bg-blue-500/30 transition-colors"
                  >
                    {h} <X className="w-3 h-3" />
                  </button>
                ))}
                {filter.availability !== 'all' && (
                  <button
                    onClick={() => setAvailability('all')}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium hover:bg-emerald-500/30 transition-colors"
                  >
                    {filter.availability === 'available' ? 'In Store' : 'Limited'} <X className="w-3 h-3" />
                  </button>
                )}
              </motion.div>
            )}

            {/* Grid */}
            {filteredItems.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <p className="text-gray-500 text-lg">No items match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-rose-400 text-sm hover:text-rose-300 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, i) => (
                    <ItemCard key={item.id} item={item} index={i} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileFilterOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 left-0 z-50 w-80 bg-gray-950 border-r border-white/10 p-6 overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-white">Filters</h2>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel
                filter={filter}
                onToggleCategory={toggleCategory}
                onToggleRarity={toggleRarity}
                onToggleHero={toggleHero}
                onSetAvailability={setAvailability}
                onClear={clearFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
