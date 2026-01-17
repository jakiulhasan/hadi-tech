"use client";
import { motion } from "framer-motion";

export default function HadiTechLogo() {
  return (
    <div className="flex items-center justify-center bg-[#0b1220]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2"
      >
        {/* Hadi */}
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-orange-400"
        >
          Hadi
        </motion.span>

        {/* Tech */}
        <motion.span
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-3xl font-bold text-blue-400"
        >
          Tech
        </motion.span>

        {/* Dot */}
        <motion.span
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-2 h-2 rounded-full bg-blue-400 ml-1"
        />
      </motion.div>
    </div>
  );
}
