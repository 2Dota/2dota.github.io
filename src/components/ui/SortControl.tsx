import type { SortOption } from '../../types';
import { ArrowUpDown } from 'lucide-react';

interface SortControlProps {
  options: SortOption[];
  value: SortOption['value'];
  onChange: (value: SortOption['value']) => void;
  count: number;
  total: number;
}

export function SortControl({ options, value, onChange, count, total }: SortControlProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm text-gray-400">
        Showing <span className="text-white font-medium">{count}</span>
        {count !== total && <> of <span className="text-white font-medium">{total}</span></>}
        {' '}items
      </p>

      <label className="flex items-center gap-2 text-sm text-gray-400">
        <ArrowUpDown className="w-4 h-4" />
        <span className="hidden sm:inline">Sort by</span>
        <select
          value={value}
          onChange={e => onChange(e.target.value as SortOption['value'])}
          className="bg-gray-900 border border-white/10 text-white text-sm rounded-xl px-3 py-1.5 focus:outline-none focus:border-rose-500/50 cursor-pointer"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
