"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const experienceTypes = ["teaching", "clinical", "training", "leadership", "education"];

const typeColors = {
    teaching: "border-blue-500 bg-blue-50",
    clinical: "border-teal-500 bg-teal-50",
    training: "border-orange-500 bg-orange-50",
    leadership: "border-purple-500 bg-purple-50",
    education: "border-green-500 bg-green-50",
};

const typeDotColors = {
    teaching: "bg-blue-500",
    clinical: "bg-teal-500",
    training: "bg-orange-500",
    leadership: "bg-purple-500",
    education: "bg-green-500",
};

export default function Experience() {
    const { t, isRTL } = useLanguage();
    return (
        <section id="experience" className="section bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

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
                        {t.experience.label}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                        {t.experience.description}
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {t.experience.items.map((exp, index) => {
                        const expType = experienceTypes[index] as keyof typeof typeColors;
                        return (
                            <motion.div
                                key={exp.title + exp.organization}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                                        className={`w-4 h-4 rounded-full ${typeDotColors[expType]
                                            } ring-4 ring-white shadow-md`}
                                    />
                                </div>

                                {/* Content card */}
                                <div
                                    className={`flex-1 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                                        } ${isRTL ? 'lg:text-right' : ''}`}
                                >
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.2 }}
                                        className={`card p-6 ${isRTL ? 'border-r-4 border-l-0' : 'border-l-4'} ${typeColors[expType]
                                            }`}
                                    >
                                        <div
                                            className={`flex items-start gap-4 ${index % 2 === 0 && !isRTL ? "lg:flex-row-reverse" : ""
                                                }`}
                                        >
                                            <div
                                                className={`w-12 h-12 rounded-xl ${typeColors[expType]
                                                    } flex items-center justify-center flex-shrink-0`}
                                            >
                                                <Briefcase className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-lg font-bold text-gray-900 mb-1 ${isRTL ? 'font-arabic' : ''}`}>
                                                    {exp.title}
                                                </h3>
                                                <p className={`text-teal-600 font-medium mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                                                    {exp.organization}
                                                </p>
                                                <div
                                                    className={`flex flex-wrap gap-3 text-sm text-gray-500 mb-3 ${index % 2 === 0 && !isRTL ? "lg:justify-end" : ""
                                                        }`}
                                                >
                                                    <span className={`inline-flex items-center gap-1 ${isRTL ? 'font-arabic' : ''}`}>
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                    <span className={`inline-flex items-center gap-1 ${isRTL ? 'font-arabic' : ''}`}>
                                                        <Calendar className="w-4 h-4" />
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <p className={`text-gray-500 text-sm ${isRTL ? 'font-arabic' : ''}`}>{exp.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden lg:block flex-1" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
