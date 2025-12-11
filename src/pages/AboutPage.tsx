import React from "react";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  const sectionTitle = (title: string) => (
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
      {title}
      <div
        className="w-24 h-2 mt-3 rounded-full"
        style={{ backgroundColor: "#24B250" }}
      />
    </h2>
  );

  const battleCards = [
    {
      img: "/images/placeholder-pulichintala.jpg",
      text: "Fought for Pulichintala Project victims – secured fair compensation & rehabilitation.",
    },
    {
      img: "/images/placeholder-zuari.jpg",
      text: "Stopped illegal Sitarama Power Plant by Zuari Cements that polluted 600+ acres.",
    },
    {
      img: "/images/placeholder-highcourt.jpg",
      text: "Won landmark High Court cases protecting farmers’ lands & constitutional rights.",
    },
    {
      img: "/images/placeholder-nh65.jpg",
      text: "Led India’s biggest fight against NH-65 illegal land acquisition — helped 56 villages.",
    },
    {
      img: "/images/placeholder-mhomes.jpg",
      text: "Forced MyHome Cements to provide houses for 270+ displaced SC/ST/OBC families.",
    },
    {
      img: "/images/placeholder-peshone.jpg",
      text: "Exposed Peshone MLM Scam — protected 51,000 depositors & recovered assets.",
    },
  ];

  const familyMembers = [
    {
      role: "Wife",
      name: "Smt. Rapolu Nirmala",
      img: "/images/placeholder-wife.jpg",
      details: "Married on 04 April 1986 — Daughter of Rapolu Satya Narayana. Partner in education & philanthropy.",
    },
    {
      role: "Daughter",
      name: "Vaddepalli Krishna Deepthi",
      img: "/images/placeholder-deepthi.jpg",
      details: "Autism Specialist (Tennessee, USA). Married to Krishna Chaitanya. Mother of 2.",
    },
    {
      role: "Daughter",
      name: "Vaddepalli Krishna Keerthi",
      img: "/images/placeholder-keerthi.jpg",
      details: "MS (Florida). Married to Bala Krishna (Dentist, Boston). Mother of 2 sons.",
    },
    {
      role: "Daughter",
      name: "Vaddepalli Krishna Spoorthi",
      img: "/images/placeholder-spoorthi.jpg",
      details: "BBA (London), MIS (Chicago). Married to Vijay (Software Developer) in 2024.",
    },
    {
      role: " Elder Brothers",
      name: "Visweswara Rao (Late) & Vaddepalli Nageshwara Rao",
      img: "/images/placeholder-brothers.jpg",
      details: "Both served in Revenue Department. Nageshwara Rao retired as Tahsildar (Pitlam).",
    },
    {
      role: " Younger Brother",
      name: " vaddepalli Sreedhar Hari",
      img: "/images/placeholder-brothers.jpg",
      details: "Hari having a own recognized high school in Hyderabad",
    },
  ];

  return (
    <section className="pt-28 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            About{" "}
            <span style={{ color: "#01A3EB" }}>
              Vaddepalli Ramakrishna
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            A fearless reformer, protector of the poor, champion of farmers and the architect
            of the <span style={{ color: "#24B250" }} className="font-semibold">RISE National Movement</span> for OBC political reservation.
          </p>
        </motion.div>

        {/* MAIN HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl overflow-hidden shadow-2xl mb-12"
        >
          <picture>
            {/* Desktop (≥1024px) */}
            <source media="(min-width: 1024px)" srcSet="/About-desktop.png" />

            {/* Tablet (≥768px) */}
            <source media="(min-width: 768px)" srcSet="/About-hero.png" />

            {/* Mobile (default) */}
            <img
              src="/About-hero.png"
              alt="Sri Vaddepalli Ramakrishna"
              className="w-full object-cover h-72 md:h-96"
            />
          </picture>
        </motion.div>


        {/* Early Life */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/placeholder-early-life.jpg" alt="Early life" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            {sectionTitle("Early Life & Foundation")}
            <p className="text-lg text-gray-700 leading-relaxed">
              Born on <b>28 May 1961</b> in Krishna District and raised in Huzoor Nagar, Nalgonda District,
              Sri Ramakrishna was nurtured in a traditional farming family. His official recorded birth date
              appears as <b>01 June 1960</b>, but he celebrates his true birth date with family and followers.
            </p>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Primary schooling at Government Primary School, Huzoor Nagar. Parents: <b>Vaddepalli Veeranna</b>
              and <b>Pitchamma (Muthamma/Laxamma)</b> instilled values of honesty, service, and courage.
            </p>
          </motion.div>
        </div>

        {/* Government Career */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            {sectionTitle("Service to Government • Service to Society")}
            <p className="text-lg text-gray-700 leading-relaxed">
              Sri V. Ramakrishna served in three government departments: P&T (Telecommunications Officer),
              Education (Teacher at PS Venkatarampuram) and Revenue. Each time his conscience led him to resign
              in protest against injustice — finally resigning on <b>25 December 2009</b> during the Telangana
              statehood movement to stand with the youth and the oppressed.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-2"
          >
            <img src="/images/placeholder-job-resign.jpg" alt="Resignation" className="w-full h-64 object-cover" />
          </motion.div>
        </div>

        {/* Battles & Victories */}
        {sectionTitle("Historic Battles & Victories")}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {battleCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img src={item.img} alt={`battle-${i}`} className="w-full h-48 object-cover" />
              <div className="p-5 text-gray-700 font-medium text-base leading-relaxed">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust & Organisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/placeholder-trust.jpg" alt="Mission for the Poor Trust" className="w-full h-64 object-cover" />
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            {sectionTitle("Mission For The Poor Charitable Trust")}
            <p className="text-lg text-gray-700 leading-relaxed">
              Registered in <b>2012 (Reg No: 205/IV/2012)</b>, the trust provides legal aid, rehabilitation,
              education support and farmer protection. Another platform founded earlier — the Farmers Rights Protection
              Samithi (Reg No: 61/2010) — continues to represent victims of land acquisition and injustice.
            </p>

            <ul className="mt-5 space-y-3 text-lg text-gray-700">
              <li>✔ Farmers facing land acquisition & exploitation</li>
              <li>✔ Poor families needing education, health & support</li>
              <li>✔ Villages suffering pollution & illegal industries</li>
              <li>✔ Youth seeking constitutional awareness & guidance</li>
            </ul>
          </motion.div>
        </div>

        {/* Spiritual + Yoga Research */}
        <div className="rounded-2xl bg-[#F3FFF7] p-8 md:p-12 shadow-inner mb-16">
          {sectionTitle("Spiritual Path & Yoga Research")}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <img src="/images/placeholder-yogi-achyutha.jpg" alt="Yogi Achyutha Ashram" className="w-full h-48 object-cover" />
            </motion.div>

            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed">
                A disciple of <b>Yogi Achyutha Ashram</b> (Virupapura Gaddi, Hampi) and guided by Sri Nemakallu Ramanna,
                Sri Ramakrishna researched ancient yogic systems and developed the unique <b>“Amrutha / Ashana Vidya”</b> —
                a 10th-hole respiration technique. His research paper <i>“Alternative Respiratory Organs in Humans, Human Hibernation & A Path to Enlightenment”</i>
                has been published in international forums, and he has delivered talks globally on yogic physiology and spiritual practice.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Life & Family Legacy */}
        {sectionTitle("Personal Life & Family Legacy")}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/placeholder-family-photo.jpg" alt="Family" className="w-full h-72 object-cover" />
          </motion.div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mb-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Sri V. Ramakrishna married <b>Smt. Rapolu Nirmala</b> on <b>4 April 1986</b>. They built a family grounded in education, service and faith.
                He has three daughters — Krishna Deepthi, Krishna Keerthi and Krishna Spoorthi — each accomplished in their fields and settled overseas or in major global cities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {familyMembers.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white shadow"
                >
                  <img src={m.img} alt={m.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">{m.role}</div>
                    <div className="font-semibold text-gray-900">{m.name}</div>
                    <div className="text-gray-600 text-sm mt-1">{m.details}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements & Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-white shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Major Achievements</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Helped secure compensation & housing for displaced Pulichintala victims.</li>
              <li>Stopped Chinthiryala 300 MW coal project and Zuari Sitarama power plant.</li>
              <li>Recovered assets & justice for 51,000 Peshone victims.</li>
              <li>Led NH-65 land acquisition movement for 56 villages; filed numerous arbitration petitions.</li>
              <li>Secured 2000+ sanctioned houses for the poor as an outcome of movements.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-white shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Positions & Service</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Chairman — Sri Krishna Educational Trust</li>
              <li>Chairman — Mission for the Poor Charitable Trust (R.No:205/IV/2012)</li>
              <li>Chairman — Farmers Rights Protection Samithi (R.No:61/2010)</li>
              <li>Vice President — All India Backward Classes Federation (Telangana)</li>
              <li>Hon. Chairman — Hampi Achyutha Ashram</li>
            </ol>
          </motion.div>
        </div>

        {/* Closing Quote */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            “Together, We Rise. Together, We Transform.”
          </h2>
          <p className="text-lg text-gray-600">— Sri Vaddepalli Ramakrishna</p>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
