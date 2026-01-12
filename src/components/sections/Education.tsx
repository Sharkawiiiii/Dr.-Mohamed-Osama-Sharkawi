"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const educationIcons = [GraduationCap, Award, BadgeCheck];
const educationColors = [
    "from-blue-500 to-indigo-600",
    "from-orange-500 to-red-500",
    "from-teal-500 to-cyan-500",
];

export default function Education() {
    const { t, isRTL } = useLanguage();
    return (
        <section id="education" className="section section-alt relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl" />
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
                        {t.education.label}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.education.title} <span className="gradient-text">{t.education.titleHighlight}</span>
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                        {t.education.description}
                    </p>
                </motion.div>

                {/* Main Education Cards */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {t.education.degrees.map((item, index) => {
                        const IconComponent = educationIcons[index];
                        const color = educationColors[index];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="card h-full p-8 relative overflow-hidden">
                                    {/* Gradient top bar */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-teal-600 font-medium mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                                        {item.institution}
                                    </p>
                                    <p className={`text-gray-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>{item.specialization}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className={`text-2xl font-bold text-center mb-8 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.education.additionalCertifications}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {t.education.certifications.map((cert, index) => (
                            <motion.span
                                key={cert}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-4 py-2 bg-white rounded-full text-gray-700 text-sm font-medium shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all cursor-default ${isRTL ? 'font-arabic' : ''}`}
                            >
                                {cert}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Professional Memberships */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className={`text-2xl font-bold text-center mb-8 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.education.professionalMemberships}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {t.education.memberships.map((membership, index) => (
                            <motion.div
                                key={membership.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="card p-6 text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                                    <BadgeCheck className="w-6 h-6 text-white" />
                                </div>
                                <h4 className={`font-bold text-gray-900 mb-1 ${isRTL ? 'font-arabic' : ''}`}>{membership.name}</h4>
                                <p className={`text-gray-500 text-sm mb-2 ${isRTL ? 'font-arabic' : ''}`}>{membership.location}</p>
                                <span className={`inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium ${isRTL ? 'font-arabic' : ''}`}>
                                    {membership.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
