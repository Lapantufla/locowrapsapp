import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Collection } from './components/sections/Collection';
import { Bespoke } from './components/sections/Bespoke';
import { ProductDetail } from './components/sections/ProductDetail';
import { Footer } from './components/layout/Footer';

const Home = () => (
  <>
    <Hero />
    <Manifesto />
    <Collection />
    <Bespoke />
  </>
);

function App() {
  return (
    <Router basename="/locowrapsapp">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:slug" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
