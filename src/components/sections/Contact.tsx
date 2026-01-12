"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Facebook,
    MessageCircle,
    CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactIcons = [Mail, Phone, MapPin];
const contactColors = [
    "from-orange-400 to-red-500",
    "from-green-400 to-emerald-500",
    "from-blue-400 to-indigo-500",
];
const contactHrefs = [
    "mailto:drm7mdsharkawi@gmail.com",
    "https://wa.me/201285410091",
    null,
];
const contactValues = [
    "drm7mdsharkawi@gmail.com",
    "+20 128 541 0091",
    "",
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/drmohamedsharkawi",
        color: "hover:bg-blue-600",
    },
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/share/1DsTdaXjSZ/",
        color: "hover:bg-blue-500",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        href: "https://wa.me/201285410091",
        color: "hover:bg-green-500",
    },
];

export default function Contact() {
    const { t, isRTL } = useLanguage();
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section
            id="contact"
            className="section relative overflow-hidden bg-gradient-to-b from-gray-50 to-white"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
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
                        {t.contact.label}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                        {t.contact.title} <span className="gradient-text">{t.contact.titleHighlight}</span>
                    </h2>
                    <p className={`text-gray-500 max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
                        {t.contact.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                            {t.contact.contactInfo}
                        </h3>
                        <p className={`text-gray-500 mb-8 ${isRTL ? 'font-arabic' : ''}`}>
                            {t.contact.contactDesc}
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-10">
                            {[t.contact.email, t.contact.phone, t.contact.location].map((label, index) => {
                                const IconComponent = contactIcons[index];
                                const color = contactColors[index];
                                const href = contactHrefs[index];
                                const value = index === 2 ? (isRTL ? 'المنوفية، مصر' : 'Menufia, Egypt') : contactValues[index];
                                return (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ x: isRTL ? -5 : 5 }}
                                        className="group"
                                    >
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith("http") ? "_blank" : undefined}
                                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                                                >
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className={`text-sm text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>{label}</div>
                                                    <div className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">
                                                        {value}
                                                    </div>
                                                </div>
                                            </a>
                                        ) : (
                                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                                                <div
                                                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center shadow-md`}
                                                >
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className={`text-sm text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>{label}</div>
                                                    <div className={`font-medium text-gray-900 ${isRTL ? 'font-arabic' : ''}`}>
                                                        {value}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className={`text-lg font-semibold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : ''}`}>
                                {t.contact.connectSocial}
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-white transition-colors ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="card p-8 lg:p-10">
                            <h3 className={`text-2xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                                {t.contact.sendMessage}
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h4 className={`text-xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : ''}`}>
                                        {t.contact.formSuccess}
                                    </h4>
                                    <p className={`text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>
                                        {isRTL ? 'شكراً لتواصلك. سأرد عليك قريباً.' : "Thank you for reaching out. I'll get back to you soon."}
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label
                                                htmlFor="name"
                                                className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                                            >
                                                {t.contact.formName}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all ${isRTL ? 'text-right font-arabic' : ''}`}
                                                placeholder={isRTL ? 'الاسم' : 'John Doe'}
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            <label
                                                htmlFor="email"
                                                className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                                            >
                                                {t.contact.formEmail}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all ${isRTL ? 'text-right' : ''}`}
                                                placeholder="example@email.com"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label
                                            htmlFor="subject"
                                            className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                                        >
                                            {t.contact.formSubject}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all ${isRTL ? 'text-right font-arabic' : ''}`}
                                            placeholder={isRTL ? 'الموضوع' : 'Professional Consultation'}
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.25 }}
                                    >
                                        <label
                                            htmlFor="message"
                                            className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'font-arabic' : ''}`}
                                        >
                                            {t.contact.formMessage}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none ${isRTL ? 'text-right font-arabic' : ''}`}
                                            placeholder={isRTL ? 'أخبرني عن استفسارك...' : 'Tell me about your inquiry...'}
                                        />
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 ${isRTL ? 'font-arabic' : ''}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                <span>{t.contact.formSending}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>{t.contact.formSend}</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
