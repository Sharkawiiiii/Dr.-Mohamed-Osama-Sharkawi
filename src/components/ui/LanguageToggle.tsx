"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/50 hover:border-teal-300 text-teal-700 text-xs font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <Languages className="w-4 h-4" />
      <span className="hidden sm:inline">
        {language === "en" ? "العربية" : "English"}
      </span>
      <span className="sm:hidden">
        {language === "en" ? "AR" : "EN"}
      </span>
    </motion.button>
  );
}
