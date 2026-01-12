"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Facebook,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    MessageCircle,
    Heart,
    Sparkles,
    ExternalLink,
} from "lucide-react";
import { getImagePath } from "@/lib/imagePath";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/drmohamedsharkawi",
        label: "LinkedIn",
        color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
    },
    {
        icon: Facebook,
        href: "https://www.facebook.com/share/1DsTdaXjSZ/",
        label: "Facebook",
        color: "bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
    {
        icon: MessageCircle,
        href: "https://wa.me/201285410091",
        label: "WhatsApp",
        color: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white",
    },
];

const contactIcons = [Mail, Phone, MapPin];
const contactHrefs = [
    "mailto:drm7mdsharkawi@gmail.com",
    "tel:+201285410091",
    null,
];
const contactTexts = [
    "drm7mdsharkawi@gmail.com",
    "+20 128 541 0091",
];

export default function Footer() {
    const { t, isRTL } = useLanguage();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl" />
            </div>

            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-orange-500" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Main CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-16 border-b border-gray-200"
                >
                    <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-12 shadow-xl shadow-teal-500/20">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className={`text-center lg:text-${isRTL ? 'right' : 'left'} text-white`}>
                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                                    {t.footer.ctaTitle}
                                </h3>
                                <p className={`text-teal-100 max-w-md ${isRTL ? 'font-arabic' : ''}`}>
                                    {t.footer.ctaDesc}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${isRTL ? 'font-arabic' : ''}`}
                                >
                                    <Sparkles className="w-5 h-5" />
                                    {t.nav.bookConsultation}
                                </Link>
                                <Link
                                    href="https://wa.me/201285410091"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-2xl border border-white/30 transition-all duration-300"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Main Footer Grid */}
                <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <motion.div
                                whileHover={{ rotate: 10 }}
                                className="relative w-14 h-14"
                            >
                                <Image
                                    src={getImagePath("/images/logo.png")}
                                    alt="PT Acupuncture"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl">
                                    <span className="text-orange-500">PT</span>{" "}
                                    <span className="text-teal-600">ACUPUNCTURE</span>
                                </span>
                                <span className="text-xs text-gray-500">
                                    Dr. Mohamed Sharkawi
                                </span>
                            </div>
                        </Link>
                        <p className={`text-gray-600 text-sm leading-relaxed mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
                            {t.footer.aboutDesc}
                        </p>

                        {/* Social Links */}
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
                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    className={`w-11 h-11 rounded-xl ${social.color} flex items-center justify-center shadow-sm transition-all duration-300`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className={`font-bold text-lg text-gray-800 mb-6 flex items-center gap-2 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                            <span className="w-8 h-0.5 bg-gradient-to-r from-teal-500 to-transparent rounded-full" />
                            {t.footer.quickLinks}
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: t.nav.about, href: "#about" },
                                { label: t.nav.expertise, href: "#expertise" },
                                { label: t.nav.experience, href: "#experience" },
                                { label: t.nav.education, href: "#education" },
                                { label: t.nav.teaching, href: "#teaching" },
                                { label: t.nav.contact, href: "#contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-gray-600 hover:text-teal-600 transition-colors text-sm inline-flex items-center gap-2 group ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-teal-500 transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className={`font-bold text-lg text-gray-800 mb-6 flex items-center gap-2 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                            <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                            {t.footer.services}
                        </h4>
                        <ul className="space-y-3">
                            {t.expertise.items.slice(0, 6).map((item) => (
                                <li
                                    key={item.title}
                                    className={`text-gray-600 text-sm flex items-center gap-2 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className={`font-bold text-lg text-gray-800 mb-6 flex items-center gap-2 ${isRTL ? 'font-arabic flex-row-reverse' : ''}`}>
                            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                            {t.footer.connect}
                        </h4>
                        <ul className="space-y-4">
                            {[t.contact.email, t.contact.phone, t.contact.location].map((label, index) => {
                                const IconComponent = contactIcons[index];
                                const href = contactHrefs[index];
                                const text = index === 2 ? (isRTL ? 'المنوفية، مصر' : 'Menufia, Egypt') : contactTexts[index];
                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                className={`flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                                            >
                                                <span className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                                                    <IconComponent className="w-5 h-5 text-teal-600" />
                                                </span>
                                                <span className="text-sm">{text}</span>
                                            </a>
                                        ) : (
                                            <div className={`flex items-center gap-3 text-gray-600 ${isRTL ? 'flex-row-reverse font-arabic' : ''}`}>
                                                <span className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                                                    <IconComponent className="w-5 h-5 text-teal-600" />
                                                </span>
                                                <span className="text-sm">{text}</span>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="py-8 border-t border-gray-200"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className={`text-gray-500 text-sm text-center md:text-${isRTL ? 'right' : 'left'} flex items-center gap-1 ${isRTL ? 'font-arabic' : ''}`}>
                            © {new Date().getFullYear()} {isRTL ? 'د. محمد أسامة شرقاوي' : 'Dr. Mohamed Osama Sharkawi'}. {t.footer.madeWith}
                            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline mx-1" />
                            {t.footer.copyright}
                        </p>
                        <div className={`flex items-center gap-2 text-sm text-gray-500 ${isRTL ? 'font-arabic' : ''}`}>
                            <Sparkles className="w-4 h-4 text-teal-500" />
                            <span>{isRTL ? 'أخصائي علاج طبيعي في تقنيات الوخز بالإبر' : 'Physical Therapy Specialist in Acupuncture'}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
                className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-teal-500/30 hover:shadow-xl transition-all z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    );
}
