import React from "react";
import { motion } from "framer-motion";
import { Shield, } from "lucide-react";

const DonationPage: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Support the Mission</h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Your donation helps protect farmers, support education, provide healthcare to rural families,
            fight legal battles, sustain protests, and uplift the poorest communities through the 
            <b> Mission for the Poor Charitable Trust </b>.
          </p>
        </motion.div>

        {/* WHY DONATE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-3xl shadow-xl space-y-4 text-lg text-gray-700 leading-relaxed"
          >
            <h2 className="text-3xl font-bold text-[#24B250]">Why Your Donation Matters</h2>

            <ul className="mt-3 space-y-3 list-disc pl-5">
              <li>Legal battles to protect farmers against illegal land acquisition</li>
              <li>Support for poor families facing exploitation or injustice</li>
              <li>Education assistance for rural students in need</li>
              <li>Medical camps, rural health awareness & emergency support</li>
              <li>Protest support – food, tents, travel & safety arrangements</li>
              <li>Funding awareness programs about OBC reservation & rights</li>
              <li>Maintenance of Goshala with rare Malnad Gidda cattle</li>
              <li>Support for High Court petitions & arbitration cases</li>
            </ul>
          </motion.div>

          {/* QR + BANK DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-3xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-5">Ways to Donate</h2>

            {/* QR Code */}
            <div className="flex flex-col items-center text-center mb-8">
              <img
                src="/images/donation-qr-placeholder.png"
                alt="QR Code"
                className="w-56 h-56 rounded-xl border shadow"
              />
              <p className="text-gray-700 mt-3">Scan to Pay (UPI)</p>
            </div>

            {/* Bank Info */}
            <div className="space-y-2 text-lg text-gray-800">
              <p><b>Account Name:</b> Mission for the Poor Charitable Trust</p>
              <p><b>Bank:</b>Punjab national bank</p>
              <p><b>Account Number:</b>3935002100009691</p>
              <p><b>IFSC Code:</b>  PUNB0393500</p>
              <p><b>Branch:</b>Punjab national bank ,Habsiguda,Hyderabad</p>
            </div>
          </motion.div>
        </div>

        {/* TRANSPARENCY / ASSURANCE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#E8FFF1] p-10 rounded-3xl shadow-inner border-2 border-[#24B250]/40"
        >
          <h2 className="text-3xl font-bold text-[#24B250] mb-3 flex items-center gap-2">
            <Shield className="text-[#24B250]" /> 100% Transparent Utilization
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Every rupee donated is used ONLY for social welfare, legal battles, health programs,
            farmer protection, educational support, and trust operations.  
            No personal or political usage — complete transparency is maintained.
          </p>
        </motion.div>

      </div>
    </main>
  );
};

export default DonationPage;
