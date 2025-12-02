import React from "react";
import { motion } from "framer-motion";

const ActivitiesPage: React.FC = () => {
  const sectionTitle = (title: string, color = "#24B250") => (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
        {title}
      </h2>
      <div className="w-28 h-1.5 rounded-full mt-3" style={{ backgroundColor: color }} />
    </div>
  );

  return (
    <main className="pt-28 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="relative">
            <img
              src="/images/placeholder-hero.jpg"
              alt="Sri Vaddepalli Ramakrishna leading activities"
              className="w-full object-cover h-72 md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute left-6 md:left-12 bottom-6 md:bottom-10 text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight">
                Activities & Movements
              </h1>
              <p className="mt-2 max-w-xl text-sm md:text-base">
                A lifetime of fearless activism — farmers’ justice, social welfare, education, spiritual research and legal battles for the voiceless.
              </p>
            </div>
          </div>
        </motion.header>

        {/* OVERVIEW */}
        <section className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#F7FFFA] rounded-2xl p-6 md:p-10 shadow-inner"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Overview</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Sri Vaddepalli Ramakrishna Garu has devoted his life to protecting farmers, poor families, and marginalized communities.
              His activism spans land-rights campaigns, environmental protection, large-scale legal interventions, charitable trust work, educational projects,
              and the preservation of cultural & spiritual practices. The sections below describe his major activities in detail.
            </p>
          </motion.div>
        </section>

        {/* SECTION: Farmers Rights & NH-65 */}
        <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            {sectionTitle("Farmers’ Rights & NH-65 Land Acquisition Movement")}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-700 space-y-4"
            >
              <p>
                Sri Ramakrishna Garu led one of India’s largest farmer movements against unfair land acquisition for the NH-65 widening — a struggle that involved <b>56 villages</b>.
                Farmers were offered grossly inadequate compensation (often ₹1–3 lakh per acre) while losing livelihoods, homes, and business.
              </p>

              <p>
                He educated villagers on their legal rights, guided arbitration petitions, and personally filed hundreds of arbitration and writ petitions — bringing national
                attention to the issue. His campaigns included Nirahara Dikshas, hunger strikes, coordinated village-level awareness drives and representation before collectors and the High Court.
              </p>

              <p>
                Even after a decade and a half, those legal battles continue to protect rightful compensation due to persistent negotiations and court processes initiated by him.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/placeholder-farmers-nh65.jpg" alt="NH65 protests" className="w-full h-80 object-cover"/>
          </motion.div>
        </section>

        {/* SECTION: Major Battles (pulichintala, zuari, chinthiryala, myhome) */}
        <section className="mt-16">
          {sectionTitle("Major Battles & Landmark Victories")}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-pulichintala.jpg" alt="Pulichintala Project" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Pulichintala Project Victims</h4>
                <p className="text-gray-700 leading-relaxed">
                  Fought for fair compensation, rehabilitation, and construction of houses with basic amenities for displaced families. Thousands were resettled due to these interventions.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-zuari.jpg" alt="Zuari Sitarama" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Zuari Sitarama Power Project</h4>
                <p className="text-gray-700 leading-relaxed">
                  Exposed illegal diversion of the NSP canal & ash dumping that polluted 600+ acres, killing cattle and destroying crops — which ultimately led to the project's closure.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-chinthiryala.jpg" alt="Chinthiryala protest" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Chinthiryala 300 MW Coal Project</h4>
                <p className="text-gray-700 leading-relaxed">
                  Mobilized local communities and collapsed the project's operations to protect environment, groundwater and livestock from toxic coal ash.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-myhome.jpg" alt="MyHome Cements case" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">MyHome Cements — Housing Victory</h4>
                <p className="text-gray-700 leading-relaxed">
                  After relentless protests the company agreed to provide permanent houses to 270+ displaced SC/ST/OBC families — a rare win for vulnerable communities.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-peshone.jpg" alt="Peshone scam" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Peshone MLM Scam Rescue</h4>
                <p className="text-gray-700 leading-relaxed">
                  Investigated and led legal action that saved <b>51,000 depositors</b>, recovered assets and placed the company's properties into liquidation — a landmark consumer protection case.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-niims.jpg" alt="NIIMS case" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">NIIMS Hospital Land Case</h4>
                <p className="text-gray-700 leading-relaxed">
                  Exposed illegal Budhan land sales and secured orders enabling the institution to acquire lands for the NIIMS hospital — refusing bribes and defending public interest.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src="/images/placeholder-metro.jpg" alt="Metro rail protest" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Uppal Grasslands & Metro Rail (PIL 386/2013)</h4>
                <p className="text-gray-700 leading-relaxed">
                  Filed a PIL and argued before the High Court to protect farmers and vendors affected by Metro land acquisition — resulting in fair negotiations and settlements.
                </p>
              </div>
            </motion.article>

          </div>
        </section>

        {/* SECTION: Anti-corruption & Legal Work */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            {sectionTitle("Anti-Corruption & Public Interest Legal Work", "#01A3EB")}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gray-700 text-base leading-relaxed space-y-4"
            >
              <p>
                Sri V. Ramakrishna has been a relentless public interest litigant — exposing scams, illegal land plotting, and frauds that harmed thousands. The Peshone MLM insolvency case,
                the NIIMS land fraud exposure, and numerous arbitration petitions illustrate his determination to use law as a tool for social justice.
              </p>
              <p>
                His legal teams and standing counsels represent victims in district forums and High Court across multiple states — often without any fee, prioritizing justice over reward.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img src="/images/placeholder-peshone.jpg" alt="Legal action" className="w-full h-72 object-cover"/>
          </motion.div>
        </section>

        {/* SECTION: Telangana movement & resignation */}
        <section className="mt-16">
          {sectionTitle("Telangana Statehood Movement & Resignation")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gray-700 text-base leading-relaxed space-y-4"
            >
              <p>
                Deeply moved by the sacrifices of youth and the brutal crackdowns during the Telangana statehood struggle, Sri Ramakrishna publicly resigned his government post on <b>25 December 2009</b>.
                This powerful act of conscience came at Kalinga Bhavan during the all-party joint action events — a personal pledge to stand permanently with the people's cause.
              </p>
              <p>
                He organized, protected and mentored youth & local leaders — taking the movement from district platforms to national awareness programs and international solidarity initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/placeholder-telangana.jpg" alt="Telangana protests" className="w-full h-72 object-cover"/>
            </motion.div>
          </div>
        </section>

        {/* SECTION: Education & Trust Work */}
        <section className="mt-16">
          {sectionTitle("Education, Rural Development & Mission for the Poor Trust")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gray-700 text-base leading-relaxed space-y-4"
            >
              <p>
                Through the <b>Mission for the Poor Charitable Trust (Reg. No. 205/IV/2012)</b> and the Sri Krishna Educational Trust, Sri Ramakrishna has delivered measurable impact:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Free education, scholarships, uniforms and books for poor students.</li>
                <li>School infrastructure & teacher support at rural schools and educational institutes.</li>
                <li>Village development programs — water, sanitation, road repairs, and livelihood projects.</li>
                <li>Free medical camps, health & yoga workshops to boost rural health awareness.</li>
              </ul>
              <p>
                His charitable work focuses on long-term empowerment — not temporary relief — by investing in education and skill development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/placeholder-trust.jpg" alt="Trust activities" className="w-full h-72 object-cover"/>
            </motion.div>
          </div>
        </section>

        {/* SECTION: Goshala & Biodiversity */}
        <section className="mt-16">
          {sectionTitle("Goshala — Preservation of Malnad Gidda & Biodiversity")}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src="/images/placeholder-goshala.jpg" alt="Goshala Malnad Gidda" className="w-full h-72 object-cover"/>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gray-700 text-base leading-relaxed space-y-4"
            >
              <p>
                The Goshala maintains <b>50+ endangered Malnad Gidda cows</b> — a project focused on breeding, conservation and improving genetic stock of rare Western Ghats breeds.
                This work supports biodiversity, rural livelihoods and traditional agriculture.
              </p>
              <p>
                By protecting rare cattle breeds, the project contributes to cultural heritage and sustainable farming practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION: Spiritual & Yoga Research */}
        <section className="mt-16 bg-[#F3FFF7] rounded-2xl p-6 md:p-10 shadow-inner">
          {sectionTitle("Spiritual Path & Ancient Yoga Research", "#01A3EB")}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-1 lg:col-span-1 rounded-xl overflow-hidden shadow-md"
            >
              <img src="/images/placeholder-yoga.jpg" alt="Yoga research" className="w-full h-64 object-cover"/>
            </motion.div>

            <div className="lg:col-span-2 text-gray-700 space-y-4">
              <p className="text-base leading-relaxed">
                Disciple of Yogi Achyutha Ashram and guided by Sri Nemakallu Ramanna, Sri Ramakrishna developed <b>Amrutha / Ashana Vidya</b> — a 10th-hole respiration technique.
                His research has been presented internationally, exploring topics like alternative respiratory organs in humans, hibernation, and pathways to enlightenment.
              </p>

              <p className="text-base leading-relaxed">
                He regularly conducts workshops and meditation sessions that blend scientific curiosity with ancient practice — making traditional knowledge accessible and practical.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: Timeline */}
        <section className="mt-16">
          {sectionTitle("Timeline — Selected Milestones")}
          <div className="space-y-8">
            <TimelineItem
              year="1984"
              title="Resigned from Education Department"
              desc="Resigned as a teacher (25 June 1984) and later joined Revenue Department on 26 June 1984 — always guided by principle."
              img="/images/placeholder-timeline-1.jpg"
            />
            <TimelineItem
              year="2009"
              title="Resignation for Telangana Movement"
              desc="Resigned job on 25 December 2009 during the Telangana movement to stand with youth and the cause."
              img="/images/placeholder-timeline-2.jpg"
            />
            <TimelineItem
              year="2010"
              title="Farmers Rights Protection Samithi Registered"
              desc="Formally registered (Reg No: 61/2010) to defend farmers, fight land grabs and represent victims at tribunals."
            />
            <TimelineItem
              year="2012"
              title="Mission for the Poor Charitable Trust"
              desc="Trust registered (Reg No: 205/IV/2012) to support education, legal aid, disaster relief, and rural development."
            />
          </div>
        </section>

        {/* SECTION: Call to Action */}
        <section className="mt-16 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2"
          >
            <img src="/images/placeholder-cta.jpg" alt="Join movement" className="w-full object-cover h-64 lg:h-auto"/>
            <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Join the Movement — Support Justice & Education</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your participation can help scale legal aid, educational scholarships, and village development projects. Volunteer, donate, or partner to extend impact across rural Telangana.
              </p>

              <div className="flex gap-3 flex-wrap">
                <a href="/join" className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold shadow">Join</a>
                <a href="/donate" className="inline-block px-6 py-3 rounded-xl border-2 border-blue-900 text-blue-900 font-semibold hover:bg-blue-50">Donate</a>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default ActivitiesPage;

/* -------------------------
   TimelineItem: small helper
   ------------------------- */
type TimelineItemProps = {
  year: string;
  title: string;
  desc: string;
  img?: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, desc, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-6 items-start"
    >
      <div className="w-24 flex-shrink-0">
        <div className="text-2xl font-bold text-blue-900">{year}</div>
      </div>

      <div className="flex-1 bg-white rounded-2xl shadow p-5">
        <div className="flex items-start gap-4">
          {img && (
            <img src={img} alt={title} className="w-28 h-20 object-cover rounded-md hidden md:block"/>
          )}
          <div>
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-gray-700 mt-1">{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
