import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";


interface NavbarProps {
  onJoinClick: () => void;
}

const MissionSection: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const missionPoints = [
    {
      icon: Target,
      title: "Village Exploitation",
      description:
        "Stopping powerful local groups who grab lands, exploit labour, control benefits, and suppress OBC, SC, ST, and Nomadic communities.",
    },
    {
      icon: Users,
      title: "Protecting the Poor",
      description:
        "Ensuring proper education, health, constitutional awareness, and equal access to government schemes.",
    },
    {
      icon: TrendingUp,
      title: "Ending Disparities",
      description:
        "Fighting against budget looting, corruption, and unequal distribution of resources.",
    },
    {
      icon: Award,
      title: "Preserving Identity",
      description:
        "Protecting hereditary trades, cultural rights, and economic dignity of OBC communities.",
    },
  ];

  return (
    <section id="whyrise" className="relative py-10 md:py-14 lg:py-14 bg-white overflow-hidden">

      {/* BG Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CDFFE2] opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#CDFFE2] opacity-30 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Know The Mission
          </h2>

          <div className="w-24 h-1.5 bg-[#24B250] mx-auto rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Why the RISE National Movement Started
          </p>
        </motion.div>

        {/* -------------- TWO COLUMN LAYOUT FOR DESKTOP -------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT COLUMN — IMAGE + OBJECTIVES */}
          <div className="space-y-12">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/mission.png"
                  alt="RISE Mission"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 bg-black/10"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="bg-white rounded-2xl p-6 md:p-7 shadow-2xl">
                    <p className="text-gray-900 text-xl md:text-2xl font-bold mb-3 leading-tight">
                      "Political empowerment is the key to social transformation"
                    </p>
                    <div className="w-16 h-1 bg-[#24B250] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-[#01A3EB] rounded-2xl p-5 md:p-6 shadow-2xl hidden md:block"
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">15+</div>
                  <div className="text-sm text-white font-semibold">Years of Service</div>
                </div>
              </motion.div>
            </motion.div>

            {/* CORE OBJECTIVES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-7 md:p-8 border border-[#24B250] shadow-lg bg-white"
            >
              <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#01A3EB" }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                Core Objectives
              </h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full mt-1 flex items-center justify-center"
                    style={{ backgroundColor: "#24B250" }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-800 font-medium">
                    Stop exploitation of OBC communities and restore their constitutional rights.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full mt-1 flex items-center justify-center"
                    style={{ backgroundColor: "#24B250" }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-800 font-medium">
                    Ensure equal access to education, healthcare, and government schemes.
                  </p>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full mt-1 flex items-center justify-center"
                    style={{ backgroundColor: "#24B250" }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <p className="text-base md:text-lg text-gray-800 font-medium">
                    Strengthen political representation for OBC communities nationwide.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — TEXT + MISSION CARDS + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                Why RISE Movement Began
              </h3>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                After observing society deeply, we found that in every village, powerful groups
                exploit farmers, grab lands, suppress OBC, SC, ST communities, and block
                government benefits meant for the poor.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                The poor lack proper education, health, and constitutional awareness — keeping
                them dependent and powerless. 80% of public representatives come from forward
                castes, controlling budgets and allowing only 10–20% to reach the ground.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Drugs, unemployment, sickness, broken hereditary trades, cultural destruction,
                and poverty are crushing OBC families.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
                Mission for the Poor Charitable Trust (Reg. 205/IV/2012) therefore launched the
                RISE National Movement for OBC Political Reservation in all Assemblies & Parliament.
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {missionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: "#24B250" }}
                  >
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4"
            >
              <motion.button
              onClick={onJoinClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl text-white font-black text-lg md:text-xl shadow-xl transition-all duration-300 flex items-center gap-3"
                style={{ backgroundColor: "#24B250" }}
              >
                Join Our Movement
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {[
            { number: "50+", label: "Grassroot Volunteers" },
            { number: "20+", label: "Social Reforms" },
            { number: "100K+", label: "Lives Impacted" },
            { number: "15+", label: "Years of Service" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-2xl p-6 md:p-8 text-center shadow-xl text-white"
              style={{ backgroundColor: "#01A3EB" }}
            >
              <div className="text-3xl md:text-4xl font-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;
