import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
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

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/projects", element: <Projects /> },
  { path: "/services", element: <Services /> },
  { path: "/services/:slug", element: <SingleService /> },
  { path: "/projects/:slug", element: <SingleProject /> },
];

function AppContent() {
  return (
    <div>
      <CookieConsent />
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
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
