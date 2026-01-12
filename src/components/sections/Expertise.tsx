"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    Target,
    Ear,
    Brain,
    Hand,
    Activity,
    HeartPulse,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const expertiseIcons = [Sparkles, Target, Ear, Brain, Hand, Activity, HeartPulse];

const gradients = [
    "from-orange-400 to-red-500",
    "from-teal-400 to-cyan-500",
    "from-purple-400 to-pink-500",
    "from-blue-400 to-indigo-500",
    "from-green-400 to-emerald-500",
    "from-amber-400 to-orange-500",
    "from-rose-400 to-red-500",
];

export default function Expertise() {
    const { t, isRTL } = useLanguage();
    return (
        <section id="expertise" className="section section-alt relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-200 rounded-full blur-3xl" />
            </div>

            <div className="container relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className={`text-teal-600 font-medium text-sm uppercase tracking-wider ${isRTL ? 'font-arabic' : ''}`}>
                        {t.expertise.label}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.expertise.title} <span className="gradient-text">{t.expertise.titleHighlight}</span>
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                        {t.expertise.description}
                    </p>
                </motion.div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {t.expertise.items.map((item, index) => {
                        const IconComponent = expertiseIcons[index];
                        const gradient = gradients[index];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group"
                            >
                                <div className="card h-full p-6 lg:p-8 relative overflow-hidden">
                                    {/* Gradient background on hover */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
                                    >
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors ${isRTL ? 'font-arabic' : ''}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-gray-500 text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                                        {item.description}
                                    </p>

                                    {/* Decorative needle line */}
                                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        <svg viewBox="0 0 80 80" className="w-full h-full">
                                            <line
                                                x1="80"
                                                y1="0"
                                                x2="0"
                                                y2="80"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-teal-500"
                                            />
                                            <circle cx="10" cy="70" r="4" fill="currentColor" className="text-teal-500" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className={`text-gray-500 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'مهتم بالتدريب المهني أو الاستشارة؟' : 'Interested in professional training or consultation?'}
                    </p>
                    <a
                        href="#contact"
                        className={`btn-primary inline-flex items-center gap-2 ${isRTL ? 'font-arabic' : ''}`}
                    >
                        <span>{t.contact.title} {t.contact.titleHighlight}</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
