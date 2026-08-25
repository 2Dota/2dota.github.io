import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ItemDetailPage } from './pages/ItemDetailPage';
import { BrowsePage } from './pages/BrowsePage';
import { AboutPage } from './pages/AboutPage';

const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
