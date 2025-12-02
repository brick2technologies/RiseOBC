import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GalleryPage: React.FC = () => {
  const categories = [
    "All",
    "Trust Work",
    "Farmers Rights",
    "Movements",
    "Legal Battles",
    "Education",
    "Goshala",
    "Spiritual",
  ];

  const images = [
    // Farmers Rights Movement
    { src: "/gallery/gallery-farmers-1.jpg", category: "Farmers Rights", title: "NH-65 Protest" },
    { src: "/gallery/gallery-farmers-2.jpg", category: "Farmers Rights", title: "Village Arbitration Awareness" },

    // Trust Work
    { src: "/gallery/gallery-trust-1.jpg", category: "Trust Work", title: "Medical Camp Support" },
    { src: "/gallery/gallery-trust-2.jpg", category: "Trust Work", title: "Village Development Program" },

    // Movements & Public Actions
    { src: "/gallery/gallery-movement-1.jpg", category: "Movements", title: "OBC Reservation Movement" },
    { src: "/gallery/gallery-movement-2.jpg", category: "Movements", title: "Telangana Statehood Rally" },

    // Legal Battles
    { src: "/gallery/gallery-legal-1.jpg", category: "Legal Battles", title: "High Court Representation" },
    { src: "/gallery/gallery-legal-2.jpg", category: "Legal Battles", title: "Arbitration Filing" },

    // Education Trust
    { src: "/gallery/gallery-education-1.jpg", category: "Education", title: "Sri Krishna Educational Trust" },
    { src: "/gallery/gallery-education-2.jpg", category: "Education", title: "School Development Program" },

    // Goshala
    { src: "/gallery/gallery-goshala-1.jpg", category: "Goshala", title: "Malnad Gidda – Rare Breed" },
    { src: "/gallery/gallery-goshala-2.jpg", category: "Goshala", title: "Cattle Feeding Program" },

    // Spiritual
    { src: "/gallery/gallery-spiritual-1.jpg", category: "Spiritual", title: "Yogi Achyutha Ashram Visit" },
    { src: "/gallery/gallery-spiritual-2.jpg", category: "Spiritual", title: "Yoga & Meditation Workshop" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">Gallery</h1>
          <p className="text-lg text-gray-600 mt-3">
            A collection of moments from Sri Vaddepalli Ramakrishna Garu’s social, legal, spiritual and charitable activities.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                activeCategory === cat
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Masonry Style) */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
          {filteredImages.map((img, index) => (
            <motion.div
              key={index}
              layout
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(img.src)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full mb-5 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm py-2 px-3 opacity-0 group-hover:opacity-100 transition">
                {img.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage}
              className="w-[90%] max-w-3xl rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white bg-white/10 rounded-full p-3 hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-7 h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
