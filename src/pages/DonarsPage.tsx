import { useState } from "react";
import { motion } from "framer-motion";

const donors = [
  { name: "Ramakrishna", amount: 100000, location: "Hyderabad", date: "2025-01-03", tier: "Platinum" },
  { name: "Anil Kumar", amount: 55000, location: "Vijayawada", date: "2025-01-02", tier: "Gold" },
  { name: "Suresh", amount: 20000, location: "Guntur", date: "2025-01-01", tier: "Silver" },
  { name: "Lakshmi Narayana", amount: 75000, location: "Nellore", date: "2025-01-03", tier: "Gold" },
  { name: "Harika", amount: 15000, location: "Machilipatnam", date: "2025-01-04", tier: "Silver" },
  { name: "Venkatesh", amount: 120000, location: "Eluru", date: "2025-01-05", tier: "Platinum" },
];

const DonorListPage = () => {
  const [search, setSearch] = useState("");
  const [tierFilter, setTierFilter] = useState("");

  const filtered = donors.filter((d) => {
    return (
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      (tierFilter ? d.tier === tierFilter : true)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-[#0A3D62]"
      >
        Donor List
      </motion.h1>

      <p className="text-center text-gray-600 mt-2">
        We thank every donor who supports our movement and trust.
      </p>

      {/* Search + Filters */}
      <div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <input
          type="text"
          placeholder="Search donor name…"
          className="w-full md:w-1/3 p-3 border rounded-lg shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 p-3 border rounded-lg shadow-sm"
          onChange={(e) => setTierFilter(e.target.value)}
        >
          <option value="">All Tiers</option>
          <option value="Platinum">Platinum Donors</option>
          <option value="Gold">Gold Donors</option>
          <option value="Silver">Silver Donors</option>
        </select>
      </div>

      {/* Donor Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        {filtered.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow-lg border"
          >
            <h3 className="text-xl font-bold">{d.name}</h3>
            <p className="text-gray-600">{d.location}</p>

            <p className="mt-2 font-semibold text-[#0A3D62]">
              ₹ {d.amount.toLocaleString()}
            </p>

            <p className="text-sm text-gray-500 mt-1">Date: {d.date}</p>

            <span
              className={`mt-4 inline-block px-3 py-1 text-sm rounded-full ${
                d.tier === "Platinum"
                  ? "bg-yellow-500 text-white"
                  : d.tier === "Gold"
                  ? "bg-yellow-300 text-black"
                  : "bg-gray-300 text-black"
              }`}
            >
              {d.tier} Donor
            </span>
          </motion.div>
        ))}
      </div>

      {/* Gratitude Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-xl italic text-gray-700 mt-16"
      >
        “Your donation is not just money — it is hope for someone who needs it.”
      </motion.p>
    </div>
  );
};

export default DonorListPage;
