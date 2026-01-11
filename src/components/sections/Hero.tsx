"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import 3D background to avoid SSR issues
const HeroBackground = dynamic(() => import("./HeroBackground"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30" />
    ),
});

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative bg-gradient-to-b from-slate-50 via-white to-gray-50"
        >
            {/* 3D Background */}
            <HeroBackground />

            {/* Gradient mesh overlay for depth */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
                <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
            </div>

            {/* Content - uses min-height instead of fixed height */}
            <div className="relative z-30 min-h-screen flex flex-col justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
                    <div className="max-w-7xl mx-auto">
                        {/* Main content - Flexbox layout for better control */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

                            {/* Text content */}
                            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                                {/* Pre-title badge */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mb-6 lg:mb-8"
                                >
                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 text-sm font-medium border border-teal-200/50 shadow-sm">
                                        <Sparkles className="w-4 h-4 text-teal-500" />
                                        Licensed Acupuncturist – CACMS Beijing
                                    </span>
                                </motion.div>

                                {/* Main Title */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
                                        {"Dr. Mohamed".split("").map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, y: 30, rotateX: -90 }}
                                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.5 + index * 0.05,
                                                    ease: [0.215, 0.61, 0.355, 1]
                                                }}
                                                className="inline-block"
                                                style={{ display: 'inline-block' }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </h1>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mt-1 sm:mt-2">
                                        {"Osama Sharkawi".split("").map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, y: 40, scale: 0.5 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 1.0 + index * 0.06,
                                                    ease: [0.215, 0.61, 0.355, 1]
                                                }}
                                                className="inline-block"
                                                style={{
                                                    display: 'inline-block',
                                                    backgroundImage: "linear-gradient(135deg, #F5A623 0%, #E85D04 30%, #0D9488 70%, #2563EB 100%)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </h1>
                                </motion.div>

                                {/* Subtitle */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    className="mt-4 sm:mt-6 mb-6 sm:mb-8"
                                >
                                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                                        Physical Therapy Specialist
                                        <br />
                                        <span className="text-teal-600 font-normal">
                                            in Acupuncture Techniques
                                        </span>
                                    </p>
                                </motion.div>

                                {/* Credentials */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                    className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6 sm:mb-8"
                                >
                                    {[
                                        "DPT (Orthopedics)",
                                        "BMAS Member",
                                        "PRIMEPHYSIO Instructor",
                                    ].map((credential, index) => (
                                        <motion.span
                                            key={credential}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                                            className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-gray-600 border border-gray-200 shadow-sm font-medium"
                                        >
                                            {credential}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Quote */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 italic max-w-lg mx-auto lg:mx-0"
                                >
                                    &ldquo;Advancing Musculoskeletal Care Through Evidence-Based
                                    Acupuncture&rdquo;
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                                >
                                    <Link
                                        href="#expertise"
                                        className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                                    >
                                        <span>View Expertise</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-200 hover:border-teal-300 hover:text-teal-600 shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base"
                                    >
                                        <span>Book Consultation</span>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Doctor Image - visible on all screens */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="flex-shrink-0 order-1 lg:order-2 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] mx-auto lg:mx-0"
                            >
                                <div className="relative">
                                    {/* Decorative rings */}
                                    <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-tr from-teal-500/20 via-transparent to-orange-500/20 blur-2xl" />
                                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400/30 to-orange-400/30 blur-xl" />

                                    {/* Image container - uses natural aspect ratio */}
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/50">
                                        <Image
                                            src="/images/doctor.jpg"
                                            alt="Dr. Mohamed Osama Sharkawi"
                                            width={420}
                                            height={560}
                                            className="w-full h-auto object-contain"
                                            priority
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                                    </div>

                                    {/* Floating badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.5, duration: 0.6 }}
                                        className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-gray-100"
                                    >
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                                                <span className="text-white font-bold text-base sm:text-lg">17+</span>
                                            </div>
                                            <div>
                                                <div className="text-xs sm:text-sm font-bold text-gray-900">Years</div>
                                                <div className="text-[10px] sm:text-xs text-gray-500">Experience</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="mt-16 sm:mt-20 lg:mt-24"
                        >
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
                                {[
                                    { value: "17+", label: "Years Experience" },
                                    { value: "2000+", label: "Professionals Trained" },
                                    { value: "12+", label: "Centers Founded" },
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                        className="text-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-default"
                                    >
                                        <div
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1"
                                            style={{
                                                backgroundImage:
                                                    "linear-gradient(135deg, #0D9488 0%, #2563EB 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 font-medium">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-gray-300 flex justify-center pt-1.5 sm:pt-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0], y: [0, 10] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 sm:w-1.5 h-2 sm:h-2.5 rounded-full bg-gradient-to-b from-teal-500 to-blue-500"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
