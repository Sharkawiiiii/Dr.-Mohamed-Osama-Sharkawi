"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

// Fade In from bottom
export function FadeIn({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
}: AnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Slide In from left
export function SlideInLeft({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
}: AnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Slide In from right
export function SlideInRight({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
}: AnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scale In
export function ScaleIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
}: AnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger Container for children animations
interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export function StaggerContainer({
    children,
    className = "",
}: StaggerContainerProps) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}

// Text Reveal Animation
export function TextReveal({
    children,
    className = "",
    delay = 0,
}: AnimatedProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Animated Counter
interface CounterProps {
    from?: number;
    to: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    duration?: number;
}

export function AnimatedCounter({
    from = 0,
    to,
    suffix = "",
    prefix = "",
    className = "",
    duration = 2,
}: CounterProps) {
    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {prefix}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    onViewportEnter={(entry) => {
                        if (entry?.target) {
                            const element = entry.target as HTMLElement;
                            let startTime: number;
                            const animate = (currentTime: number) => {
                                if (!startTime) startTime = currentTime;
                                const progress = Math.min(
                                    (currentTime - startTime) / (duration * 1000),
                                    1
                                );
                                const current = Math.floor(from + (to - from) * progress);
                                element.textContent = prefix + current + suffix;
                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                } else {
                                    element.textContent = prefix + to + suffix;
                                }
                            };
                            requestAnimationFrame(animate);
                        }
                    }}
                >
                    {from}
                </motion.span>
                {suffix}
            </motion.span>
        </motion.span>
    );
}

// Hover Scale Effect
export function HoverScale({
    children,
    className = "",
    scale = 1.05,
}: {
    children: ReactNode;
    className?: string;
    scale?: number;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Parallax Effect
interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export function Parallax({ children, className = "", speed = 0.5 }: ParallaxProps) {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: speed * 100 }}
            viewport={{ once: false }}
            transition={{ type: "tween", ease: "linear" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
