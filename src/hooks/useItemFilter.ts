import { useState, useMemo, useCallback } from 'react';
import type { StoreItem, FilterState, ItemCategory, ItemRarity, SortOption } from '../types';
import { STORE_ITEMS } from '../data/items';

const DEFAULT_FILTER: FilterState = {
  query: '',
  categories: [],
  rarities: [],
  heroes: [],
  availability: 'all',
};

const SORT_OPTIONS: SortOption[] = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'rarity', label: 'Rarity' },
  { value: 'release', label: 'Release Date' },
  { value: 'hero', label: 'Hero' },
];

const RARITY_ORDER: Record<string, number> = {
  Arcana: 0,
  Ancient: 1,
  Immortal: 2,
  Legendary: 3,
  Mythical: 4,
  Rare: 5,
  Uncommon: 6,
  Common: 7,
};

export class ItemFilterManager {
  private items: StoreItem[];

  constructor(items: StoreItem[]) {
    this.items = items;
  }

  filter(state: FilterState): StoreItem[] {
    return this.items.filter(item => {
      if (state.query) {
        const q = state.query.toLowerCase();
        const searchable = [
          item.name,
          item.hero ?? '',
          item.description,
          item.category,
          item.rarity,
          ...(item.tags ?? []),
        ]
          .join(' ')
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      if (state.categories.length > 0 && !state.categories.includes(item.category)) return false;
      if (state.rarities.length > 0 && !state.rarities.includes(item.rarity)) return false;
      if (state.heroes.length > 0 && (!item.hero || !state.heroes.includes(item.hero))) return false;

      if (state.availability === 'available' && !item.isAvailable) return false;
      if (state.availability === 'limited' && !item.isLimited) return false;

      return true;
    });
  }

  sort(items: StoreItem[], sortBy: SortOption['value']): StoreItem[] {
    return [...items].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rarity':
          return (RARITY_ORDER[a.rarity] ?? 99) - (RARITY_ORDER[b.rarity] ?? 99);
        case 'release':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'hero':
          return (a.hero ?? 'ZZZ').localeCompare(b.hero ?? 'ZZZ');
        default:
          return 0;
      }
    });
  }
}

export function useItemFilter() {
  const [filter, setFilter] = useState<FilterState>(DEFAULT_FILTER);
  const [sortBy, setSortBy] = useState<SortOption['value']>('rarity');

  const manager = useMemo(() => new ItemFilterManager(STORE_ITEMS), []);

  const filteredItems = useMemo(() => {
    const filtered = manager.filter(filter);
    return manager.sort(filtered, sortBy);
  }, [manager, filter, sortBy]);

  const setQuery = useCallback((query: string) => {
    setFilter(prev => ({ ...prev, query }));
  }, []);

  const toggleCategory = useCallback((category: ItemCategory) => {
    setFilter(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  }, []);

  const toggleRarity = useCallback((rarity: ItemRarity) => {
    setFilter(prev => ({
      ...prev,
      rarities: prev.rarities.includes(rarity)
        ? prev.rarities.filter(r => r !== rarity)
        : [...prev.rarities, rarity],
    }));
  }, []);

  const toggleHero = useCallback((hero: string) => {
    setFilter(prev => ({
      ...prev,
      heroes: prev.heroes.includes(hero)
        ? prev.heroes.filter(h => h !== hero)
        : [...prev.heroes, hero],
    }));
  }, []);

  const setAvailability = useCallback((availability: FilterState['availability']) => {
    setFilter(prev => ({ ...prev, availability }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilter(DEFAULT_FILTER);
  }, []);

  const hasActiveFilters =
    filter.query !== '' ||
    filter.categories.length > 0 ||
    filter.rarities.length > 0 ||
    filter.heroes.length > 0 ||
    filter.availability !== 'all';

  return {
    filter,
    sortBy,
    filteredItems,
    sortOptions: SORT_OPTIONS,
    hasActiveFilters,
    setQuery,
    toggleCategory,
    toggleRarity,
    toggleHero,
    setAvailability,
    setSortBy,
    clearFilters,
  };
}
