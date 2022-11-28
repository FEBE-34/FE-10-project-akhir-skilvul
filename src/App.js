import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import ProgramDetail from "./pages/ProgramDetail";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
    <Route path="/program" element={<ProgramPage />} />
    <Route path="/programdetail" element={<ProgramDetail/>}></Route>
      
    </Routes>
    </Router>
  );
}

export default App;
