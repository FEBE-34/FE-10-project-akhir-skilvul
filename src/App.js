import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
      
    </Routes>
    </Router>
  );
}

export default App;
