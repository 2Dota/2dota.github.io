import { motion } from 'framer-motion';
import { Sword, ExternalLink, Globe, Database, RefreshCw } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <Sword className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Dota 2 Item Wiki</h1>
              <p className="text-gray-400 mt-1">The complete cosmetics reference</p>
            </div>
          </div>

          {/* About */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A comprehensive reference for every cosmetic item in the Dota 2 store.
              Covers all Arcanas, Personas, Immortals, Couriers, HUDs, Terrains,
              Announcers, and more — with full descriptions, customization details,
              availability status, and official artwork.
            </p>
            <p className="text-gray-400 leading-relaxed">
              All item data is sourced from the official Dota 2 website, the Dota 2 Wiki,
              and Valve's public APIs. Images are served directly from Valve's official
              CDN, the same source used by the Dota 2 store itself.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Database,
                title: 'Complete Coverage',
                desc: 'Every item category from Arcana to terrain, including limited and vaulted items.',
              },
              {
                icon: Globe,
                title: 'Official Images',
                desc: "All artwork served from Valve's official CDN, always matching the latest patch.",
              },
              {
                icon: RefreshCw,
                title: 'Kept Updated',
                desc: 'Item data updated with each major Dota 2 patch and event release.',
              },
              {
                icon: ExternalLink,
                title: 'Open Source',
                desc: 'Built with React, TypeScript and Vite. Deployed via GitHub Pages.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 rounded-2xl border border-white/8 bg-gray-900/40"
              >
                <Icon className="w-5 h-5 text-rose-400 mb-3" />
                <p className="font-semibold text-white mb-1">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Data sources */}
          <div className="p-6 rounded-2xl border border-white/8 bg-gray-900/40">
            <h2 className="font-semibold text-white mb-4">Data Sources</h2>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span>Dota 2 Official Website — dota2.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span>Dota 2 Wiki — wiki.dota2.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span>Valve CDN — cdn.cloudflare.steamstatic.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                <span>Steam Community item schema and item_game data</span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-4">
              Dota 2 is a trademark of Valve Corporation. This site is not affiliated with or endorsed by Valve.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
