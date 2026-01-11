"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Award, Users, BookOpen, Building2 } from "lucide-react";

const stats = [
    {
        icon: Award,
        value: 17,
        suffix: "+",
        label: "Years of Clinical Excellence",
        color: "text-orange-500",
        bgColor: "bg-orange-50",
    },
    {
        icon: Users,
        value: 2000,
        suffix: "+",
        label: "Professionals Trained",
        color: "text-teal-500",
        bgColor: "bg-teal-50",
    },
    {
        icon: BookOpen,
        value: 100,
        suffix: "+",
        label: "Courses & Workshops",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
    },
    {
        icon: Building2,
        value: 12,
        suffix: "+",
        label: "Medical Centers Founded",
        color: "text-purple-500",
        bgColor: "bg-purple-50",
    },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">
                        About
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Professional{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{
                                backgroundImage:
                                    "linear-gradient(135deg, #F5A623 0%, #E85D04 30%, #0D9488 70%, #2563EB 100%)",
                            }}
                        >
                            Summary
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
                        Dedicated to advancing musculoskeletal care through evidence-based
                        acupuncture and professional education
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorative frame - behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500 rounded-3xl opacity-20 blur-xl" />

                        {/* Image container - no overflow hidden, proper sizing */}
                        <div className="relative pb-8 pr-8">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/doctor.jpg"
                                    alt="Dr. Mohamed Osama Sharkawi"
                                    width={600}
                                    height={750}
                                    className="w-full h-auto object-contain rounded-2xl"
                                    priority
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl" />
                            </div>

                            {/* Floating badge - positioned within padding area */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute bottom-0 right-0 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">BMAS</div>
                                        <div className="text-xs text-gray-500">Certified Member</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block text-gray-900"
                            >
                                {"Dr. Mohamed".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.3 + index * 0.03,
                                            ease: "easeOut"
                                        }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block"
                            >
                                {"Osama Sharkawi".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.6 + index * 0.04,
                                            ease: "easeOut"
                                        }}
                                        className="inline-block"
                                        style={{
                                            backgroundImage: "linear-gradient(135deg, #F5A623 0%, #E85D04 30%, #0D9488 70%, #2563EB 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </h3>

                        <div className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-lg">
                            <p>
                                A distinguished <strong className="text-teal-600">Egyptian physical therapist and licensed acupuncturist</strong> with{" "}
                                <strong className="text-gray-900">over 17 years</strong> of expertise in orthopedic rehabilitation and medical acupuncture.
                                Dr. Sharkawi has established himself as a leading figure in integrating evidence-based acupuncture within
                                modern physiotherapy practice, training <strong className="text-gray-900">thousands of healthcare professionals</strong> across
                                Egypt and internationally.
                            </p>
                            <p>
                                As the <strong className="text-teal-600">founder and co-founder of 12 MSK medical centers</strong>,
                                his clinical approach uniquely bridges traditional acupuncture techniques with contemporary rehabilitative medicine.
                                Currently serving as a <strong className="text-gray-900">Senior Physiotherapist</strong> at the Ministry of Health, Egypt,
                                and an <strong className="text-gray-900">Acupuncture Instructor</strong> with PRIMEPHYSIO (UK),
                                Dr. Sharkawi continues to advance the field through both clinical excellence and professional education.
                            </p>
                        </div>

                        {/* Credentials list */}
                        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
                            {[
                                "DPT (Orthopedics) – Cairo University",
                                "Licensed Acupuncturist – CACMS Beijing",
                                "BMAS Member – UK",
                                "PRIMEPHYSIO Instructor – UK",
                            ].map((credential, index) => (
                                <motion.span
                                    key={credential}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm sm:text-base border border-gray-200 shadow-sm"
                                >
                                    <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                                    {credential}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 text-center h-full hover:shadow-lg transition-shadow">
                                <div
                                    className={`w-12 sm:w-14 h-12 sm:h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <stat.icon className={`w-6 sm:w-7 h-6 sm:h-7 ${stat.color}`} />
                                </div>
                                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1 sm:mb-2`}>
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
