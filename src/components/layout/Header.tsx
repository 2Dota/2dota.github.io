import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sword, ShoppingBag, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/shop', label: 'In-Game Shop', Icon: ShoppingBag },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070a0f]/95 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 via-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/30 group-hover:shadow-rose-500/50 transition-all duration-200 group-hover:scale-105">
              <Sword className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-none">
              <span className="text-sm font-bold text-white tracking-tight">Dota 2</span>
              <span className="block text-[10px] font-medium text-rose-400 tracking-widest uppercase">Wiki</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(({ to, label, Icon }) => {
              const active = pathname === to || (to !== '/' && pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-[#070a0f]/98 backdrop-blur-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {NAV.map(({ to, label, Icon }) => {
                const active = pathname === to || (to !== '/' && pathname.startsWith(to));
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
