import { Link } from 'react-router-dom';
import { Sword, ExternalLink } from 'lucide-react';

const LINKS = [
  { label: 'Dota 2 Official', href: 'https://www.dota2.com', external: true },
  { label: 'Dota 2 Wiki', href: 'https://dota2.fandom.com/wiki/Dota_2_Wiki', external: true },
  { label: 'Cosmetics', href: '/cosmetics', external: false },
  { label: 'In-Game Shop', href: '/shop', external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070a0f] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center">
              <Sword className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Dota 2 Wiki</p>
              <p className="text-xs text-gray-600 mt-0.5">Fan-made reference</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map(({ label, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-700 leading-relaxed max-w-2xl">
            Dota 2 is a trademark of Valve Corporation. All item names, images, and descriptions are property of Valve Corporation.
            This site is not affiliated with or endorsed by Valve. Images sourced from Valve's official CDN.
          </p>
        </div>
      </div>
    </footer>
  );
}
