import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import ProgramPage from "./pages/ProgramPage";
import ProgramDetail from "./pages/ProgramDetailPage";
import InputFromData from "./pages/InputFormData";
import InputKontakPribadi from "./pages/InputKontakPribadi";
import UploadBerkas from "./pages/UploadBerkas";
import ResetPassword from "./pages/ResetPassword";
import HomePage from "./pages/HomePage";
import KegiatanAktifPage from "./pages/KegiatanAktifPage";
import StatusPendaftaranPage from "./pages/StatusPendaftaranPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/form-data" element={<InputFromData />} />
        <Route path="/kontak-pribadi" element={<InputKontakPribadi />} />
        <Route path="/upload-berkas" element={<UploadBerkas />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route
          path="/programpenyandang/lihat/:id"
          element={<ProgramDetail />}
        />
        <Route path="/kegiatanaktif" element={<KegiatanAktifPage />} />
        <Route path="/statuspendaftaran" element={<StatusPendaftaranPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
