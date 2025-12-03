import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  Facebook,

  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import VolunteerModal from "./VolunteerModal";


interface NavbarProps {
  onJoinClick: () => void;
}

const ContactSection: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 92925 05473",
      color: "from-[#01A3EB] to-[#0679b0]",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "dandamovement@riseobc.in",
      color: "from-[#24B250] to-[#1a8c3b]",
    },
  ];
  const XIcon = () => (
  <img
    src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000"
    className="w-5 h-5"
    alt="YouTube"
  />
);


  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-blue-500" },
    { icon: XIcon, href: "#", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "#", color: "hover:bg-[#d6249f]" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <>
    <section className="relative py-20 bg-gradient-to-b from-white via-[#EAF7FF] to-[#F3FFF6] overflow-hidden">
      
      {/* Soft Background Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#01A3EB]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#24B250]/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="px-5 py-2 bg-[#DDF3FF] text-[#01A3EB] rounded-full text-sm font-semibold tracking-wide">
            Contact Our Trust
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            We Are Here to{" "}
            <span className="text-[#24B250]">Help & Serve</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto mt-3 leading-relaxed">
            Reach out to us for support, trust work, volunteering, donations, 
            or to join our mission of protecting farmers, empowering OBC communities, 
            and uplifting the underprivileged.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg border border-gray-100 flex items-center gap-4"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-md`}
              >
                <info.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* MAIN CONTACT BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {/* Form Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#01A3EB] to-[#0679b0] rounded-xl flex items-center justify-center">
                <MessageCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
                <p className="text-gray-600 text-sm">We reply within 24 hours.</p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 text-sm rounded-xl border border-gray-300 focus:border-[#01A3EB] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700">Phone Number *</label>
                <input
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 text-sm rounded-xl border border-gray-300 focus:border-[#24B250] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700">Your Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 text-sm rounded-xl border border-gray-300 focus:border-[#01A3EB] outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-bold text-white shadow-md transition ${
                  isSubmitted
                    ? "bg-[#24B250]"
                    : "bg-gradient-to-r from-[#01A3EB] to-[#0679b0]"
                }`}
              >
                {isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>

            {/* Quick Help */}
            <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4">
              <h4 className="font-bold text-gray-900 text-sm mb-1">
                💡 Quick Support
              </h4>
              <p className="text-gray-700 text-xs">
                For urgent matters, please call us directly. Phone support is fastest.
              </p>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* MAP */}
            <div className="bg-white rounded-3xl shadow-xl h-72 overflow-hidden border border-gray-100">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18..."
              ></iframe>
            </div>

            {/* Social Box */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>

              <div className="flex justify-center gap-4 mb-6">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center ${s.color} transition`}
                  >
                    <s.icon className="text-gray-700 w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="space-y-3">
                <button 
                onClick={onJoinClick}
                className="w-full py-3 rounded-xl bg-[#01A3EB] text-white font-bold shadow-sm hover:bg-[#017fb6]">
                  Join the Movement
                </button>
                <button
                onClick={() => setIsVolunteerOpen(true)}
                className="w-full py-3 rounded-xl border-2 border-[#24B250] text-[#24B250] font-bold hover:bg-[#e6ffef]">
                  Become a Volunteer
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>

    <VolunteerModal open={isVolunteerOpen} setOpen={setIsVolunteerOpen} />
    </>
  );
};

export default ContactSection;
