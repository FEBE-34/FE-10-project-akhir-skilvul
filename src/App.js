import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
// import KegiatanAktif from "./pages/KegiatanAktifPage";
// import StatusPendaftaran from "./pages/StatusPendaftaranPage";
import ProgramDetail from "./pages/ProgramDetailPage";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/program" element={<ProgramPage />} />
    <Route path="/programdetail/:id" element={<ProgramDetail />}>
    {/* <Route path="/kegiatanaktif" element={<KegiatanAktif />} />
    <Route path="/statuspendaftaran" element={<StatusPendaftaran />} />
   */}
  </Route>
      
    </Routes>
    </Router>
  );
}

export default App;
