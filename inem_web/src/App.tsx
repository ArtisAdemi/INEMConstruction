import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import SingleProject from "./pages/SingleProject";
import { NotFound } from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";

function AppContent() {
  const location = useLocation();
  const isNotFound = !["/", "/contact", "/projects", "/projects/:id", "/services", "/services/:slug", "/about"].includes(location.pathname);

  return (
    <div>
      <CookieConsent />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<SingleService />} />
        <Route path="/projects/:slug" element={<SingleProject />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      {isNotFound && <NotFound />}
      <div>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
