import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import KegiatanPage from "./pages/KegiatanPage";


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/program" element={<ProgramPage />} />
    <Route path="/kegiatan" element={<KegiatanPage />} />

      
    </Routes>
    </Router>
  );
}

export default App;
