import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowUp, } from "lucide-react";

const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      
      {/* WhatsApp Button */}
{/* WhatsApp Button */}
<motion.a
  href="https://wa.me/919876543210"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.15, y: -3 }}
  className="w-14 h-14 bg-green-500 shadow-xl rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all"
>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 30 30"
  className="w-12 h-12 fill-white"
>
  <path
    fillRule="evenodd"
    d="
      M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.03-8.995 8.997-8.995 4.958 0 8.996 4.04 8.996 8.995s-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
  />
</svg>

</motion.a>



      {/* Phone Call Button */}
      <motion.a
        href="tel:+919876543210" // <-- Put your number here
        whileHover={{ scale: 1.15, y: -3 }}
        className="w-14 h-14 bg-blue-600 shadow-xl rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all"
      >
        <Phone className="w-7 h-7" />
      </motion.a>

      {/* Back to Top Button */}
      {showTop && (
        <motion.button
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-14 h-14 bg-yellow-400 shadow-xl rounded-full flex items-center justify-center text-blue-900 font-bold hover:bg-yellow-500 transition-all"
        >
          <ArrowUp className="w-7 h-7" />
        </motion.button>
      )}

    </div>
  );
};

export default FloatingActions;
