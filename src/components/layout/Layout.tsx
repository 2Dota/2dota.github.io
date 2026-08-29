import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps { children: ReactNode; }

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#070a0f] text-gray-100 flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
