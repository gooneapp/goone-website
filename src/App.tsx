import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Features from '@/pages/Features';
import Solutions from '@/pages/Solutions';
import HowItWorks from '@/pages/HowItWorks';
import Pricing from '@/pages/Pricing';
import DownloadApp from '@/pages/DownloadApp';
import FAQ from '@/pages/FAQ';
import Blog from '@/pages/Blog';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';
import AdminInquiries from '@/pages/AdminInquiries';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="download-app" element={<DownloadApp />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="admin/inquiries" element={<AdminInquiries />} />
      </Route>
    </Routes>
  );
}

export default App;
