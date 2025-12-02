import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#01A3EB] via-[#CDFFE2] to-[#24B250] px-6 py-20 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* MAIN CENTER CONTENT */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">

        {/* Left Side - Image */}
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/3 flex flex-col items-center"
        >
          <div className="relative w-96 h-2/3 md:w-80 md:h-2/3 rounded-2xl p-[4px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#01A3EB] via-[#24B250] to-[#CDFFE2] animate-neon"></div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src="/mission.png" className="w-full h-full rounded-2xl shadow-2xl" />
            </div>
          </div>

          {/* OTP COUNTER BOXES BELOW IMAGE */}
          <div className="mt-6 flex flex-col items-center">
            <div className="flex gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-16 flex items-center justify-center text-2xl font-extrabold
                   rounded-lg border-2 shadow-lg 
                   bg-gradient-to-b from-[#01A3EB] to-[#24B250]
                   text-white border-white/40 backdrop-blur-sm"
                >
                  0
                </div>
              ))}
            </div>

            <p className="mt-2 text-sm font-semibold text-blue-900 tracking-wide">
              Letters Collected
            </p>
          </div>

        </motion.div>


        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">

          {/* Main Title with Blue–Green Gradient */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-extrabold leading-tight mt-6"
          >
            {/* RISE + ICON ROW */}
            <span className="flex items-center gap-2 justify-center md:justify-start">
              <span
                className="block text-7xl md:text-8xl font-extraboldr"
                style={{
                  background: 'linear-gradient(to right, #1E3A8A, #10B981, #1E3A8A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Rise
              </span>

              {/* Tiny Side Image */}
              {/* <img 
      src="/hero-image.png"
      alt="Rise Movement Icon"
      className="w-10 h-10 md:w-80 md:h-36 object-contain rounded-2xl "
    /> */}
            </span>

            {/* SUBTITLE */}
            <span
              className="block text-4xl md:text-4xl mt-2"
              style={{
                background: 'linear-gradient(to right, #1E3A8A, #3B82F6, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              OBC's <span className="text-[#24B250]">INDIAN</span> National Movement for Political Reservation in All State Assemblies, Parliament & Local Bodies
            </span>
          </motion.h1>



          {/* Decorative Elements */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#24B250] rounded-full"></div>
            <div className="w-3 h-3 bg-[#24B250] rounded-full animate-pulse"></div>
            <div className="w-28 h-1.5 bg-[#24B250] rounded-full shadow-lg shadow-[#24B250] shadow-opacity-50"></div>
            <div className="w-3 h-3 bg-[#24B250] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#24B250] rounded-full"></div>
          </div>

          {/* Quote with Enhanced Styling */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2 }}
  className="relative mt-8 px-4"
>
  <div className="absolute -top-2 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0 text-6xl text-blue-300 opacity-30">"</div>

  <p className="italic text-lg md:text-xl text-gray-800 font-medium leading-relaxed bg-white/90 backdrop-blur-md py-6 px-8 rounded-2xl shadow-lg border border-white/50 max-w-3xl mx-auto text-center">

    <span className="block mt-4 text-gray-800 text-base md:text-2xl font-semibold leading-snug">
      <span className="uppercase font-bold">DANDA-YATRA </span>
      Movement for OBC's Constitutional Reservations Campaign &
      One Crore (1,00,00,000) Letters to the Prime Minister  
      for Ensuring OBC's Reservation
    </span>

    <span className="block font-semibold text-3xl md:text-lg mt-3 tracking-tight">
      Under Mission For The Poor Charitable Trust
    </span>

    <span className="block mt-3 text-gray-700 text-base md:text-lg font-normal">
      Reg No: 205/IV/2012
    </span>

    {/* Author Line Added */}
    <span className="block mt-4 text-gray-600 text-sm md:text-base font-medium">
      Author: <span className="font-semibold text-blue-600">Vaddepalli Ramkrishna</span>
    </span>

  </p>
</motion.div>


          {/* CTA BUTTONS with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-600 text-white font-bold text-lg shadow-2xl hover:shadow-blue-500 hover:shadow-opacity-50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Join the Movement</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl border-2 border-blue-900 bg-white bg-opacity-80 backdrop-blur-sm text-blue-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300"
            >
              Become a Volunteer
            </motion.button>
            <motion.a
              href="#whyrise"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl border-2 border-blue-900 bg-white bg-opacity-80 backdrop-blur-sm text-blue-900 font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300"
            >
              Why Rise?
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;