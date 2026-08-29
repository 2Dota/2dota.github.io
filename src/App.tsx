import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ShopGuidePage } from './pages/ShopGuidePage';
import { ShopItemDetailPage } from './pages/ShopItemDetailPage';

const basename = import.meta.env.BASE_URL;

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopGuidePage />} />
          <Route path="/shop/:id" element={<ShopItemDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
