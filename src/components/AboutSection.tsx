import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Heart, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const missions = [
    {
      icon: Target,
      title: "OBC Empowerment",
      description:
        "Strengthening OBC communities through political representation, awareness, education, and constitutional rights.",
      bg: "from-[#01A3EB] to-[#24B250]",
    },
    {
      icon: Users,
      title: "Farmer Protection",
      description:
        "Safeguarding the rights of farmers, assignees, and landowners by fighting injustices and ensuring fair compensation.",
      bg: "from-[#24B250] to-[#01A3EB]",
    },
    {
      icon: Heart,
      title: "Social Welfare",
      description:
        "Supporting poor families through surveys, legal assistance, livelihood guidance, and access to government schemes.",
      bg: "from-[#01A3EB] to-[#24B250]",
    },
    {
      icon: Award,
      title: "Leadership & Reform",
      description:
        "Building fearless leaders who fight corruption, exploitation, and injustice to create a stronger, equal society.",
      bg: "from-[#24B250] to-[#01A3EB]",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gradient-to-br from-[#CDFFE2] via-white to-[#E9FFF4] overflow-hidden"
    >
      {/* Soft BG Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#01A3EB] rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#24B250] rounded-full filter blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-5 py-2 bg-[#01A3EB]/10 text-[#003B73] border border-[#01A3EB]/30 rounded-full text-sm font-semibold shadow-sm">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003B73] leading-tight"
            >
              The Man Behind{" "}
              <span className="text-[#24B250] drop-shadow-md">
                DANDA Movement
              </span>
            </motion.h2>

            {/* Paragraphs */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vaddepalli Ramakrishna is a fearless social reformer, farmer protector,
                and national voice for OBC political rights. Born in a humble farmer’s
                family, he rose through struggle, service, and sacrifice to become one
                of the strongest champions for justice in Telangana and India.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                His journey—from government service to resigning during the Telangana
                movement, fighting land acquisition injustices, protecting farmers,
                stopping illegal industries, winning historic High Court cases, and
                empowering poor families—has impacted more than 
                <strong> 50,000 lives</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Today, he leads{" "}
                <strong className="text-[#01A3EB]">Mission for the Poor Charitable Trust (Reg. 205/IV/2012)</strong>{" "}
                and the{" "}
                <strong className="text-[#24B250]">RISE National Movement for OBC Political Reservation</strong>,
                inspiring thousands with his message:
                <br />
                <span className="italic font-semibold text-[#003B73] block mt-2">
                  “Together, we rise. Together, we transform.”
                </span>
              </p>
            </motion.div>

            {/* Decor line */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="w-16 h-1 bg-gradient-to-r from-[#01A3EB] to-[#24B250] rounded-full"></div>
              <div className="w-3 h-3 bg-[#24B250] rounded-full"></div>
            </motion.div>

            {/* Mission Heading */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-[#003B73]"
            >
              Mission
            </motion.h3>

            {/* Mission Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {missions.map((mission) => (
                <motion.div
                  key={mission.title}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-[#01A3EB]/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                     
                    >
                      <mission.icon className="w-6 h-6 text-[#24B250]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#003B73] mb-2">
                        {mission.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#01A3EB] to-[#24B250] text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Learn More About Me
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[800px] h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#01A3EB] to-[#24B250] rounded-3xl transform rotate-3 opacity-30"></div>

            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white">
              <img
                src="/images/about-leader.jpg"
                alt="Vaddepalli Ramakrishna"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                  <p className="text-xl font-semibold italic mb-2 text-[#CDFFE2]">
                    "Together, we rise. Together, we transform."
                  </p>
                  <p className="text-sm opacity-90 text-white">- Vaddepalli Ramakrishna</p>
                </div>
              </div>
            </div>

            {/* Stats Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-6 bottom-32 bg-white rounded-2xl shadow-2xl p-5 hidden lg:block border border-[#01A3EB]/20"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#01A3EB] drop-shadow-md">
                  50K+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Lives Impacted
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
