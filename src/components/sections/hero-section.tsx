"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { FloatingLogos } from "@/components/ui/floating-logos";
import { ParticleBackground } from "@/components/ui/particle-background";

export function HeroSection() {
    const scrollToNext = () => {
        const nextSection = document.getElementById("about");
        nextSection?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            {/* Animated Gradient Background */}
            <div className='absolute inset-0 dark:bg-gradient-to-br dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900 light:bg-gradient-to-br light:from-blue-50 light:via-indigo-50 light:to-purple-50'>
                <motion.div
                    className='absolute inset-0 dark:bg-gradient-to-tr dark:from-pink-500/20 dark:via-purple-500/20 dark:to-blue-500/20 light:bg-gradient-to-tr light:from-pink-200/30 light:via-purple-200/30 light:to-blue-200/30'
                    animate={{
                        background: [
                            "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                            "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2))",
                            "linear-gradient(225deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(236, 72, 153, 0.2))",
                            "linear-gradient(315deg, rgba(236, 72, 153, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))",
                        ],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Particle Background */}
            <ParticleBackground />

            {/* Floating Tech Logos */}
            <FloatingLogos />

            {/* Main Content */}
            <div className='relative z-10 max-w-6xl mx-auto px-6 text-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='mb-8 mt-7'
                >
                    <motion.h1
                        className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-purple-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:via-blue-600 light:to-purple-600 light:bg-clip-text light:text-transparent sm:mb-1 md:mb-5'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        I build web experiences
                    </motion.h1>
                    <motion.h2
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold dark:bg-gradient-to-r dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-pink-600 light:via-purple-600 light:to-blue-600 light:bg-clip-text light:text-transparent'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                    >
                        that feel alive
                    </motion.h2>
                </motion.div>

                {/* Glassmorphic Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className='mb-12'
                >
                    <GlassCard className='max-w-2xl mx-auto p-6 md:p-8'>
                        <p className='text-lg md:text-xl dark:text-white/90 light:text-gray-800 leading-relaxed'>
                            I’m a front-end engineer who loves turning ideas
                            into smooth, responsive interfaces. My main tools
                            are{" "}
                            <span className='dark:text-transparent dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:bg-clip-text light:text-transparent light:bg-gradient-to-r light:from-pink-600 light:to-purple-600 light:bg-clip-text font-semibold'>
                                React, Next.js & TypeScript
                            </span>
                            , and I focus on making apps fast, intuitive, and
                            enjoyable to use.
                        </p>
                    </GlassCard>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        onClick={scrollToNext}
                        className='group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-pink-500/25 transition-all duration-200 cursor-pointer'
                    >
                        <span className='relative z-10'>View My Work</span>
                        <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        onClick={scrollToContact}
                        className='group px-8 py-4 border-2 dark:border-white/30 light:border-gray-400/60 rounded-full dark:text-white light:text-gray-800 font-semibold text-lg backdrop-blur-sm dark:hover:border-white/50 light:hover:border-gray-500/70 transition-all duration-200 cursor-pointer'
                    >
                        Get In Touch
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                    className='flex justify-center gap-6 mb-8'
                >
                    {[
                        {
                            icon: Github,
                            href: "https://github.com/sagarts/",
                            label: "GitHub",
                        },
                        {
                            icon: Linkedin,
                            href: "https://www.linkedin.com/in/sagar-thapa-shrestha-30517b191/",
                            label: "LinkedIn",
                        },
                        {
                            icon: Mail,
                            href: "mailto:sagartshrestha@gmail.com",
                            label: "Email",
                        },
                    ].map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target='_blank'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.3 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className='p-3 rounded-full dark:bg-white/10 light:bg-white/60 backdrop-blur-sm dark:border-white/20 light:border-gray-300/60 dark:hover:bg-white/20 light:hover:bg-white/80 transition-all duration-200'
                            aria-label={label}
                        >
                            <Icon className='w-6 h-6 dark:text-white light:text-gray-800' />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className='flex flex-col items-center'
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className='dark:text-white/60 light:text-gray-600 mb-2'
                    >
                        Scroll to explore
                    </motion.div>
                    <motion.button
                        onClick={scrollToNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className='p-2 rounded-full dark:bg-white/10 light:bg-white/60 backdrop-blur-sm dark:border-white/20 light:border-gray-300/60 dark:hover:bg-white/20 light:hover:bg-white/80 transition-all duration-200'
                    >
                        <ArrowDown className='w-5 h-5 dark:text-white/60 light:text-gray-600' />
                    </motion.button>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                className='absolute top-20 left-10 w-20 h-20 rounded-full dark:bg-gradient-to-r dark:from-pink-500/20 dark:to-purple-500/20 light:bg-gradient-to-r light:from-pink-300/30 light:to-purple-300/30 backdrop-blur-sm dark:border-white/20 light:border-gray-200/50'
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className='absolute bottom-20 right-10 w-16 h-16 rounded-full dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-cyan-500/20 light:bg-gradient-to-r light:from-blue-300/30 light:to-cyan-300/30 backdrop-blur-sm dark:border-white/20 light:border-gray-200/50'
                animate={{
                    y: [0, 20, 0],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </section>
    );
}
