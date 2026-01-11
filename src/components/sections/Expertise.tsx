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

const expertiseItems = [
    {
        icon: Sparkles,
        title: "Acupuncture for MSK Disorders",
        description:
            "Evidence-based acupuncture protocols for musculoskeletal conditions including chronic pain, arthritis, and sports injuries.",
        gradient: "from-orange-400 to-red-500",
    },
    {
        icon: Target,
        title: "Dry Needling",
        description:
            "Precision trigger point therapy for myofascial pain syndrome, muscle tension, and movement dysfunction.",
        gradient: "from-teal-400 to-cyan-500",
    },
    {
        icon: Ear,
        title: "Auricular Acupuncture",
        description:
            "Specialized ear acupuncture techniques for pain management, addiction, and neurological conditions.",
        gradient: "from-purple-400 to-pink-500",
    },
    {
        icon: Brain,
        title: "Scalp Acupuncture",
        description:
            "Advanced scalp needling protocols for neurological rehabilitation and cognitive enhancement.",
        gradient: "from-blue-400 to-indigo-500",
    },
    {
        icon: Hand,
        title: "Orthopedic Manual Therapy",
        description:
            "Hands-on therapeutic techniques for joint mobilization, soft tissue release, and postural correction.",
        gradient: "from-green-400 to-emerald-500",
    },
    {
        icon: Activity,
        title: "Musculoskeletal Physiotherapy",
        description:
            "Comprehensive rehabilitation programs for spine, joint, and soft tissue conditions.",
        gradient: "from-amber-400 to-orange-500",
    },
    {
        icon: HeartPulse,
        title: "Pain Management",
        description:
            "Integrative approach combining acupuncture, manual therapy, and therapeutic exercise for chronic pain.",
        gradient: "from-rose-400 to-red-500",
    },
];

export default function Expertise() {
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
                    <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">
                        Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                        Clinical <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Specialized in evidence-based acupuncture and physiotherapy techniques
                        for comprehensive musculoskeletal care
                    </p>
                </motion.div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {expertiseItems.map((item, index) => (
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
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}
                                >
                                    <item.icon className="w-7 h-7 text-white" />
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
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
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 mb-6">
                        Interested in professional training or consultation?
                    </p>
                    <a
                        href="#contact"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <span>Get in Touch</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
