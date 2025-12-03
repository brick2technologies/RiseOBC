import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
import SocialBar from "./components/SocialMediaBar";
import JoinMovementModal from "./components/MovementModal";
import DonarPage from "./pages/DonarsPage";
import ScrollManager from "./components/ScrollManager";



const App = () => {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  return (
    <Router>
     <Navbar onJoinClick={() => setIsJoinOpen(true)} />
      <SocialBar />
      <ScrollManager />
      <JoinMovementModal
        isOpen={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
      />

      <Routes>

        {/* ---------- HOME PAGE ---------- */}
        <Route
          path="/"
          element={
            <main>
              <HeroSection onJoinClick={() => setIsJoinOpen(true)} />
              <VolunteerStatsSection />
              <AboutSection />
              <MissionSection onJoinClick={() => setIsJoinOpen(true)}/>
              <Activities />
              <Donation />
              <ContactSection onJoinClick={() => setIsJoinOpen(true)}/>
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
        <Route path="/donors" element={<DonarPage />} />
        
        

      </Routes>
    </Router>
  );
};

export default App;
