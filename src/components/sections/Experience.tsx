"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Acupuncture Instructor",
        organization: "PRIMEPHYSIO",
        location: "UK",
        period: "2024 – Present",
        description:
            "Teaching acupuncture techniques to physiotherapists and healthcare professionals through comprehensive courses and workshops.",
        type: "teaching",
    },
    {
        title: "Senior Physiotherapist",
        organization: "Ministry of Health",
        location: "Egypt",
        period: "2013 – Present",
        description:
            "Providing clinical physiotherapy services with specialization in musculoskeletal disorders and acupuncture integration.",
        type: "clinical",
    },
    {
        title: "Licensed Acupuncturist",
        organization: "Beijing International Hospital of Acupuncture",
        location: "China",
        period: "Clinical Training",
        description:
            "Completed advanced training and certification in Traditional Chinese Medicine acupuncture under CACMS.",
        type: "training",
    },
    {
        title: "Founder & Clinical Director",
        organization: "Reaya Physical Therapy Centers",
        location: "Egypt",
        period: "2015 – Present",
        description:
            "Founded and manage multiple MSK rehabilitation centers focusing on evidence-based physiotherapy and acupuncture.",
        type: "leadership",
    },
    {
        title: "Course Creator & Educator",
        organization: "Acupuncture for MSK Conditions",
        location: "International",
        period: "2014 – Present",
        description:
            "Developed comprehensive educational curriculum training over 2000+ physiotherapists and doctors in acupuncture techniques.",
        type: "education",
    },
];

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
                    <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">
                        Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Professional <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Over 17 years of clinical practice, teaching, and leadership in
                        physiotherapy and acupuncture
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
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
                                    className={`w-4 h-4 rounded-full ${typeDotColors[exp.type as keyof typeof typeDotColors]
                                        } ring-4 ring-white shadow-md`}
                                />
                            </div>

                            {/* Content card */}
                            <div
                                className={`flex-1 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                                    }`}
                            >
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className={`card p-6 border-l-4 ${typeColors[exp.type as keyof typeof typeColors]
                                        }`}
                                >
                                    <div
                                        className={`flex items-start gap-4 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                                            }`}
                                    >
                                        <div
                                            className={`w-12 h-12 rounded-xl ${typeColors[exp.type as keyof typeof typeColors]
                                                } flex items-center justify-center flex-shrink-0`}
                                        >
                                            <Briefcase className="w-6 h-6 text-gray-700" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-teal-600 font-medium mb-2">
                                                {exp.organization}
                                            </p>
                                            <div
                                                className={`flex flex-wrap gap-3 text-sm text-gray-500 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""
                                                    }`}
                                            >
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 text-sm">{exp.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Empty space for alternating layout */}
                            <div className="hidden lg:block flex-1" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
