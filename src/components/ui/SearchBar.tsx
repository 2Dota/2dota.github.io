import { useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search items, heroes, categories...', className = '' }: SearchBarProps) {
  const handleClear = useCallback(() => onChange(''), [onChange]);

  return (
    <div className={`relative group ${className}`}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-rose-400 transition-colors" />

      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3.5 bg-gray-900/80 border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-rose-500/50 focus:bg-gray-900 transition-all"
        aria-label="Search Dota 2 store items"
      />

      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-gray-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
