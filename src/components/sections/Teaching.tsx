"use client";

import { motion } from "framer-motion";
import { Globe, Users, BookOpen, Mic } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const teachingIcons = [BookOpen, Mic, Users];
const locationFlags = ["🇪🇬", "🇬🇧", "🇨🇳"];

export default function Teaching() {
    const { t, isRTL } = useLanguage();
    return (
        <section id="teaching" className="section bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(#0D9488_1px,transparent_1px)] [background-size:20px_20px]" />
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
                        {t.teaching.label}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.teaching.title} <span className="gradient-text">{t.teaching.titleHighlight}</span>
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                        {t.teaching.description}
                    </p>
                </motion.div>

                {/* Teaching Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    {t.teaching.stats.map((stat, index) => {
                        const IconComponent = teachingIcons[index];
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="card p-8 text-center bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100"
                            >
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center shadow-lg"
                                >
                                    <IconComponent className="w-8 h-8 text-white" />
                                </motion.div>
                                <div className="text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className={`text-gray-600 font-medium ${isRTL ? 'font-arabic' : ''}`}>{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* International Presence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <Globe className="w-6 h-6 text-teal-600" />
                        <h3 className={`text-2xl font-bold ${isRTL ? 'font-arabic' : ''}`}>{t.teaching.internationalPresence}</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {t.teaching.locations.map((location, index) => (
                            <motion.div
                                key={location.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-md border border-gray-100"
                            >
                                <span className="text-4xl">{locationFlags[index]}</span>
                                <div className={isRTL ? 'font-arabic' : ''}>
                                    <div className="font-bold text-gray-900">{location.name}</div>
                                    <div className="text-sm text-gray-500">{location.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Animated connection lines */}
                    <div className="mt-8 flex justify-center">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-0.5 bg-gradient-to-r from-orange-400 via-teal-400 to-blue-400 rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Teaching Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className={`text-2xl font-bold text-center mb-8 ${isRTL ? 'font-arabic' : ''}`}>
                        {isRTL ? 'أبرز التدريبات' : 'Training Highlights'}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.teaching.highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className={`card p-6 ${isRTL ? 'border-r-4 border-t-0' : 'border-t-4'} border-teal-500`}
                            >
                                <span className={`inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                                    {highlight.type}
                                </span>
                                <h4 className={`text-lg font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                                    {highlight.title}
                                </h4>
                                <p className={`text-gray-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
