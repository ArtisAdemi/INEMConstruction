import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
