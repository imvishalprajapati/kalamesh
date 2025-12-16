import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

import UploadPage from "./pages/UploadPage";

import ArtworkDetailPage from "./pages/ArtworkDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes Wrapper could go here */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/artwork/:artworkId" element={<ArtworkDetailPage />} />
          <Route path="/settings/profile" element={<div className="p-8">Settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
