import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Activities", to: "/activities" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">

          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="RISE Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  className={`
                    text-base font-semibold group transition-all duration-300
                    ${isScrolled ? "text-[#03355F]" : "text-[#03355F]"}
                  `}
                >
                  <span className="relative">
                    {link.name}
                    {/* New hover underline animation */}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#24B250] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">

  <Link to="/join">
    <motion.button
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 rounded-xl bg-[#01A3EB] text-white font-semibold shadow-lg hover:bg-[#028ac7] transition-all"
    >
      Join the Movement
    </motion.button>
  </Link>

  <Link to="/volunteer">
    <motion.button
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 rounded-xl border-[2px] border-[#24B250] text-[#24B250] font-semibold hover:bg-[#E8F9FF] transition-all"
    >
      Become a Volunteer
    </motion.button>
  </Link>

  <Link to="/donate">
    <motion.button
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 rounded-xl bg-[#01A3EB] text-white font-semibold shadow-lg hover:bg-[#028ac7] transition-all"
    >
      Donate
    </motion.button>
  </Link>

</div>


          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-[#03355F]" />
            ) : (
              <Menu className="w-7 h-7 text-[#03355F]" />
            )}
          </motion.button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 border-l border-gray-200"
          >
            {/* Close */}
            <div className="flex justify-end p-5">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-green-100"
              >
                <X className="w-7 h-7 text-[#03355F]" />
              </button>
            </div>

            {/* Links */}
            <div className="px-6 space-y-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-lg font-semibold text-[#03355F] hover:bg-blue-100 transition"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-6 space-y-4">
                <Link to="/join">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl bg-[#01A3EB] text-white font-semibold shadow-md hover:bg-[#028ac7]"
                  >
                    Join the Movement
                  </motion.button>
                </Link>

                <Link to="/volunteer">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl border-[2px] border-[#01A3EB] text-[#01A3EB] font-semibold hover:bg-[#E8F9FF]"
                  >
                    Become a Volunteer
                  </motion.button>
                </Link>
                <Link to="/donate">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 rounded-xl bg-[#01A3EB] text-white font-semibold shadow-md hover:bg-[#028ac7]"
                  >
                    Donate
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
