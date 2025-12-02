import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Donation from "./components/DonationSection";
import Activities from "./components/Activities";
import ContactSection from "./components/Contact";
import FloatingActions from "./components/FloatingActions";
import MissionSection from "./components/Misson";

import AboutPage from "./pages/AboutPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/Donatepage";
import VolunteerStatsSection from "./components/VolunteerStats";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* ---------- HOME PAGE ---------- */}
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <VolunteerStatsSection />
              <AboutSection />
              <MissionSection />
              <Activities />
              <Donation />
              <ContactSection />
              <FloatingActions />
            </main>
          }
        />

        {/* ---------- ABOUT PAGE ---------- */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonationPage />} />

      </Routes>
    </Router>
  );
};

export default App;
