import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            We are here to support farmers, empower the poor, provide legal and educational assistance, and fight for justice through the Mission for the Poor Charitable Trust & Farmers Rights Protection Samithi.
          </p>
        </motion.div>

        {/* PURPOSE / DONATION MESSAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-16"
        >
          <h2 className="text-3xl font-bold text-[#24B250] mb-4">Why Your Support Matters</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every rupee donated to the <b>Mission for the Poor Charitable Trust</b> directly helps support:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-700 text-lg">
            <li><b>Farmers</b> fighting illegal land acquisition & corporate exploitation</li>
            <li><b>Legal cases</b> in High Court and district courts for poor & victims</li>
            <li><b>Education support</b> for children from underprivileged families</li>
            <li><b>Medical camps</b>, health services & rural community programs</li>
            <li><b>Protest logistics</b> – tents, water, food & safety support during movements</li>
            <li><b>Goshala</b> and protection of rare Malnad Gidda species</li>
            <li><b>Women empowerment</b> & rural livelihood programs</li>
          </ul>

          <p className="mt-4 text-gray-700 text-lg">
            Your contribution strengthens our fight to ensure that farmers, the poor, and the oppressed live with dignity, equality, and justice.
          </p>

          <div className="mt-6">
            <a
              href="/donate"
              className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Support the Trust
            </a>
          </div>
        </motion.div>

        {/* CONTACT FORM + DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600" />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600" />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
                <input type="text" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600" />
              </div>

              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea className="w-full h-32 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>

            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-blue-900" />
              <p className="text-gray-700 text-lg">
                Mission for the Poor Charitable Trust<br />
                Farmers Rights Protection Samithi<br />
                Telangana, India
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-7 h-7 text-blue-900" />
              <p className="text-gray-700 text-lg">+91 ———————</p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-7 h-7 text-blue-900" />
              <p className="text-gray-700 text-lg">contact@example.com</p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
                  <Facebook />
                </a>
                <a href="#" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
                  <Instagram />
                </a>
                <a href="#" className="p-3 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
                  <Youtube />
                </a>
              </div>
            </div>

            {/* CTA BOX */}
            <div className="mt-8 bg-[#E8FFF1] p-6 rounded-2xl shadow-inner">
              <h3 className="text-2xl font-bold text-[#24B250] mb-3">Support Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Your support strengthens our fight for farmers' rights, justice for victims,  
                education for the poor, healthcare for rural families, and legal battles  
                that protect the dignity and future of thousands.
              </p>

              <a
                href="/donate"
                className="inline-block mt-4 px-6 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-700"
              >
                Donate Now
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
