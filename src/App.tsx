import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SectorsPage from './pages/SectorsPage';
import LogisticsPage from './pages/LogisticsPage';
import AutomotivePage from './pages/AutomotivePage';
import OilGasPage from './pages/OilGasPage';
import PartnersPage from './pages/PartnersPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import './styles/global.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sectors" element={<SectorsPage />} />
        <Route path="/sectors/logistics" element={<LogisticsPage />} />
        <Route path="/sectors/automotive" element={<AutomotivePage />} />
        <Route path="/sectors/oil-gas" element={<OilGasPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;