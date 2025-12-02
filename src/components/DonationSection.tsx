import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Shield, HandCoins } from "lucide-react";

const DonationSection: React.FC = () => {
  return (
    <section
      id="donate"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 opacity-25 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 opacity-25 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Support Farmers • Support Justice
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Contribution <span className="text-blue-700">Creates Impact</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every rupee you donate helps in protecting farmers, fighting legal battles,
            supporting education, funding protests, running rural health camps,
            and empowering poor communities across the nation.
          </p>
        </motion.div>

        {/* Donation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — WHY DONATE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-green-600 mb-5 flex items-center gap-2">
              <Heart className="text-green-600" /> Why Donate?
            </h3>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>• Fighting illegal land acquisition for farmers</li>
              <li>• Supporting High Court & arbitration cases</li>
              <li>• Running medical camps for poor families</li>
              <li>• Providing free education support to students</li>
              <li>• Supporting dharnas, awareness rallies & protests</li>
              <li>• Maintaining rare Malnad Gidda Goshala</li>
              <li>• Running social welfare programs statewide</li>
            </ul>

            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mt-6 text-blue-800 font-semibold text-lg hover:underline"
            >
              Learn More <ArrowRight />
            </motion.a>
          </motion.div>

          {/* RIGHT — QR + BANK DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-blue-700 mb-6 flex items-center gap-2">
              <HandCoins className="text-blue-700" /> Ways to Donate
            </h3>

            {/* QR Code */}
            <div className="flex flex-col items-center mb-8">
              <img
                src="/images/qr-placeholder.png"
                alt="Donation QR"
                className="w-56 h-56 rounded-xl border shadow"
              />
              <p className="text-gray-600 mt-3">Scan to Pay (UPI)</p>
            </div>

            {/* Bank Info */}
            <div className="space-y-2 text-lg text-gray-800">
              <p><b>Account Name:</b> Mission for the Poor Charitable Trust</p>
              <p><b>Bank:</b> ——————————————</p>
              <p><b>Account Number:</b> ——————————</p>
              <p><b>IFSC Code:</b> ——————————————</p>
              <p><b>Branch:</b> ———————————————</p>
            </div>

            {/* Secure Donation Message */}
            <div className="mt-8 p-5 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="text-blue-900 text-lg flex items-center gap-2">
                <Shield className="text-blue-900" /> 
                100% Secure & Transparent Usage of Funds
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DonationSection;
