import React from "react";
import { motion } from "framer-motion";
import { HandCoins, Heart } from "lucide-react";

const ActivitiesSection: React.FC = () => {
  return (
    <section
      id="activities"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-[#01A3EB]/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#24B250]/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-[#CDFFE2] text-[#24B250] rounded-full text-sm md:text-base font-semibold mb-4 shadow-sm">
            Our Service to Society
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            What <span className="text-[#01A3EB]">We Stand</span> & Work For
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            Mission for the Poor Charitable Trust & Farmers Rights Protection Samithi work tirelessly
            for farmers, OBC empowerment, legal justice, health, education & rural upliftment.
          </p>
        </motion.div>

        {/* ----------------------------- */}
        {/*     TWO COLUMN LAYOUT         */}
        {/* ----------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* -------------------------------- */}
          {/* LEFT — ACTIVITIES (2/3 WIDTH)    */}
          {/* -------------------------------- */}
          <div className="lg:col-span-2 space-y-8">

            {[
              {
                title: "Protecting Farmers & Their Rights",
                desc: "We legally fight land acquisition fraud, unfair compensations, pollution issues, NH65 land injustice, Zuari cement exploitation & industrial corruption."
              },
              {
                title: "Supporting Poor & Underprivileged Families",
                desc: "We provide food, health help, government scheme assistance, women support, ration programs & emergency aid to distressed families."
              },
              {
                title: "Educating & Guiding Students",
                desc: "Our trust supports rural students through counselling, scholarships, career guidance & youth leadership programs."
              },
              {
                title: "Health Camps & Medical Awareness",
                desc: "We conduct free health checkups, distribute medicines, create health awareness & support women’s hygiene programs."
              },
              {
                title: "Village & Environmental Protection",
                desc: "We stop pollution, protect water canals, safeguard cattle breeds, fight illegal construction, and restore polluted rural ecosystems."
              },
              {
                title: "RISE Movement – OBC Political Empowerment",
                desc: "A massive national movement demanding political reservation for OBCs in Assemblies & Parliament."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#24B250] mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}

          </div>

          {/* -------------------------------- */}
          {/* RIGHT — DONATION BOX (1/3 WIDTH) */}
          {/* -------------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-blue-900 to-blue-700 text-white rounded-3xl p-8 md:p-10 shadow-2xl h-fit"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#CDFFE2]" />
              <h3 className="text-3xl font-extrabold">Support the Mission</h3>
            </div>

            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Your support helps us fight for farmers in courts, run health camps, fund student
              education, support protests, protect villages & serve the poorest families.
            </p>

            {/* QR Code */}
            <div className="mb-6">
              <img
                src="/images/qr-placeholder.png"
                className="w-52 h-52 mx-auto rounded-xl border-4 border-white shadow-xl"
                alt="Donation QR"
              />
              <p className="text-center text-blue-100 mt-3">Scan to Donate (UPI)</p>
            </div>

            {/* Bank Details */}
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 text-blue-100 text-sm space-y-1 mb-6">
              <p><b>Account:</b> Mission for the Poor Charitable Trust</p>
              <p><b>A/C No:</b> —————————</p>
              <p><b>Bank:</b> —————————</p>
              <p><b>IFSC:</b> —————————</p>
            </div>

            <a
              href="/donate"
              className="w-full flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold py-4 rounded-2xl shadow-xl hover:bg-gray-200 transition"
            >
              <HandCoins className="w-6 h-6" />
              Donate Now
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
