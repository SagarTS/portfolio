"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play, X } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

const projects = [
    {
        id: 1,
        title: "公式 ４℃ Members Club",
        description:
            "Mobile jewelry marketplace app with product browsing, filtering, purchase tracking, and retailer chat.",
        longDescription:
            "The ４℃ Members Club is a mobile-based jewelry marketplace built with Ionic, designed to enhance the shopping experience for customers. Users can browse and filter jewelry collections, view detailed pricing, and favorite items they like. The app records all purchases, manages warranty information, and provides in-app chat with retailers for personalized support, making it a complete digital companion for jewelry shopping.",
        image: "/projects/fdcp.png",
        tech: ["Ionic", "Next.js", "Laravel", "Angular.js", "Nest.js", "MySQL"],
        liveUrl: "https://www.fdcp.co.jp/Page/app/",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "The Grad Story | AI Powered CV Builder",
        description:
            "AI-powered CV builder and career support platform for students and professionals abroad.",
        longDescription:
            "The Grad Story is an AI-powered platform designed to help students and professionals craft standout CVs and build career confidence. Beyond CV building, it provides tools and guidance for job applications, networking, and navigating the challenges of studying and working abroad. The platform focuses on empowering users with the confidence and resources needed to succeed in international career paths.",
        image: "/projects/grad-story.png",
        tech: ["React", "TailwindCSS", "API Integration", "Responsive Design"],
        liveUrl: "https://thegradstory.co.uk/",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Frail Check",
        description:
            "Comprehensive wellness and community platform with health tracking, event participation, and reward systems.",
        longDescription:
            "Admins manage frail checks and delegate tasks to business admins, offering tickets for healthy users or classroom bookings for improvement. The platform also supports transportation, invoicing, home visits, and QR-based event participation for earning redeemable points.",
        image: "/projects/frail-check.png",
        tech: ["Next.js", "TypeScript", "Go", "Lerna"],
        liveUrl: "https://kenkou-taisaku.com/",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 4,
        title: "Kaki-Oki",
        description:
            "Innovative end-of-life platform helping individuals express final thoughts and preserve lasting memories.",
        longDescription:
            "Kaki-Oki is an innovative end-of-life platform designed to offer individuals facing mortality a meaningful way to express their final thoughts. It allows users to create and share messages, preserve memories, and connect with loved ones. The platform emphasizes compassion, dignity, and digital legacy while ensuring a secure and user-friendly experience.",
        image: "/projects/kaki-oki.png",
        tech: ["Next.js", "Typescript", "TanStack Query", "Go", "Ant Design"],
        liveUrl: "https://kaki-oki.com/",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 5,
        title: "Fanique",
        description:
            "NFT-based platform for buying and selling collectible basketball player cards.",
        longDescription:
            "Fanique is an NFT-based platform that allows users to buy, sell, and trade unique basketball player cards as digital collectibles. Built with a secure marketplace and wallet integration, it enables fans to own verifiable digital assets, participate in exclusive drops, and engage with a growing sports-focused NFT community.",
        image: "/projects/fanique.png",
        tech: ["Ionic/react", "Node.js", "MySQL", "Styled Components"],
        liveUrl: "https://scalagrp.jp/news/2023/03-fanique/",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 6,
        title: "BOTEJYU Group",
        description:
            "Restaurant loyalty platform with points, coupons, and rewards for customer engagement.",
        longDescription:
            "BOTEJYU Group is a mobile app and website used by restaurants to boost customer engagement through a loyalty program. Customers earn points when visiting or dining, which can be redeemed for discounts or gifts. The platform also distributes exclusive coupons to users, enhancing retention and repeat visits. I contributed by developing the admin dashboard, enabling restaurant owners to manage users, track rewards, and oversee campaign performance effectively.",
        image: "/projects/botejyu.png",
        tech: ["React", "Laravel", "MongoDB", "MySQL"],
        liveUrl: "https://botejyu.co.jp/",
        githubUrl: "#",
        featured: false,
    },
];

export function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[0] | null
    >(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const featuredProjects = projects.filter((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);

    return (
        <section
            id='projects'
            className='py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black light:bg-gradient-to-b light:from-gray-200 light:to-gray-300 relative overflow-hidden'
        >
            {/* Background Elements */}
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]' />
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.05),transparent_50%)]' />

            <div className='max-w-7xl mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-blue-600 light:bg-clip-text light:text-transparent mb-6'>
                        Featured Projects
                    </h2>
                    <p className='text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto'>
                        A showcase of my most impactful work, featuring modern
                        technologies and innovative solutions.
                    </p>
                </motion.div>

                <div ref={ref}>
                    {/* Featured Projects */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                            >
                                <GlassCard className='p-0 overflow-hidden h-full'>
                                    <div className='relative group'>
                                        <div className='h-64 relative overflow-hidden'>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className='w-full h-full object-cover'
                                                priority={index < 2}
                                                loading={
                                                    index < 2 ? "eager" : "lazy"
                                                }
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                            />
                                            <div className='absolute inset-0 bg-black/20' />
                                            {/* <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <Play className="w-8 h-8 text-white ml-1" />
                                                </motion.div>
                                            </div> */}

                                            {/* Overlay */}
                                            <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                    onClick={() =>
                                                        setSelectedProject(
                                                            project
                                                        )
                                                    }
                                                    className='p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200'
                                                >
                                                    <Play className='w-5 h-5 text-white' />
                                                </motion.button>
                                                <motion.a
                                                    href={project.liveUrl}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    target='_blank'
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                    className='p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200'
                                                >
                                                    <ExternalLink className='w-5 h-5 text-white' />
                                                </motion.a>
                                                {/* <motion.a
                                                    href={project.githubUrl}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-200"
                                                >
                                                    <Github className="w-5 h-5 text-white" />
                                                </motion.a> */}
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className='p-6'>
                                            <h3 className='text-2xl font-bold dark:text-white light:text-gray-800 mb-3'>
                                                {project.title}
                                            </h3>
                                            <p className='dark:text-white/70 light:text-gray-800 mb-4 leading-relaxed'>
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className='flex flex-wrap gap-2 mb-4'>
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className='px-3 py-1 dark:bg-white/10 light:bg-white/60 rounded-full text-sm dark:text-white/80 light:text-gray-700 dark:border-white/20 light:border-gray-300/60'
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className='flex gap-3'>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={{
                                                        duration: 0.1,
                                                        ease: "easeOut",
                                                    }}
                                                    onClick={() =>
                                                        setSelectedProject(
                                                            project
                                                        )
                                                    }
                                                    className='flex-1 cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-sm transition-all duration-200'
                                                >
                                                    View Details
                                                </motion.button>
                                                <motion.a
                                                    href={project.liveUrl}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    target='_blank'
                                                    transition={{
                                                        duration: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                    className='px-4 py-2 border border-white/30 light:text-black light:border-gray-400/60 rounded-lg text-white font-semibold text-sm hover:bg-white/10 transition-all duration-200'
                                                >
                                                    Live Demo
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                    {/* Other Projects Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='mb-8'
                    >
                        <h3 className='text-3xl font-bold dark:text-white light:text-gray-800 mb-8 text-center'>
                            More Projects
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={
                                        isInView ? { opacity: 1, y: 0 } : {}
                                    }
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                >
                                    <GlassCard className='p-6 h-full'>
                                        <div className='h-32 rounded-lg mb-4 overflow-hidden relative'>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={600}
                                                height={400}
                                                className='w-full h-full object-cover'
                                                loading='lazy'
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                            />
                                            <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
                                                {/* <Play className="w-8 h-8 text-white/80" /> */}
                                            </div>
                                        </div>
                                        <h4 className='text-xl font-bold dark:text-white light:text-gray-800 mb-2'>
                                            {project.title}
                                        </h4>
                                        <p className='dark:text-white/70 light:text-gray-800 text-sm mb-4'>
                                            {project.description}
                                        </p>
                                        <div className='flex flex-wrap gap-1 mb-4'>
                                            {project.tech
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className='px-2 py-1 dark:bg-white/10 light:bg-white/60 rounded text-xs dark:text-white/70 light:text-gray-700'
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                        </div>
                                        <div className='flex gap-2'>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                transition={{
                                                    duration: 0.1,
                                                    ease: "easeOut",
                                                }}
                                                onClick={() =>
                                                    setSelectedProject(project)
                                                }
                                                className='flex-1 cursor-pointer px-3 py-2 dark:bg-white/10 light:bg-white/60 rounded dark:text-white light:text-gray-800 text-sm font-medium dark:hover:bg-white/20 light:hover:bg-white/80 transition-all duration-200'
                                            >
                                                Details
                                            </motion.button>
                                            <motion.a
                                                href={project.liveUrl}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                target='_blank'
                                                transition={{
                                                    duration: 0.2,
                                                    ease: "easeOut",
                                                }}
                                                className='px-3 py-2 dark:border-white/30 light:border-gray-400/60 rounded dark:text-white light:text-gray-800 text-sm dark:hover:bg-white/10 light:hover:bg-white/60 transition-all duration-200'
                                            >
                                                <ExternalLink className='w-4 h-4' />
                                            </motion.a>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 dark:bg-black/80 light:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6'
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className='max-w-4xl w-full max-h-[90vh] overflow-y-auto'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <GlassCard className='p-8'>
                            <div className='flex justify-between items-start mb-6'>
                                <h3 className='text-3xl font-bold dark:text-white light:text-gray-800'>
                                    {selectedProject.title}
                                </h3>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedProject(null)}
                                    className='p-2 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300'
                                >
                                    <X className='w-6 h-6 text-white' />
                                </motion.button>
                            </div>

                            <div className='h-64 rounded-lg mb-6 overflow-hidden relative'>
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    width={600}
                                    height={400}
                                    className='w-full h-full object-cover'
                                    priority
                                    sizes='(max-width: 768px) 100vw, 800px'
                                />
                            </div>

                            <p className='dark:text-white/80 light:text-gray-800 leading-relaxed mb-6'>
                                {selectedProject.longDescription}
                            </p>

                            <div className='flex flex-wrap gap-2 mb-6'>
                                {selectedProject.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className='px-3 py-1 dark:bg-white/10 light:bg-white/60 rounded-full text-sm dark:text-white/80 light:text-gray-700 dark:border-white/20 light:border-gray-300/60'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className='flex gap-4'>
                                <motion.a
                                    href={selectedProject.liveUrl}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    target='_blank'
                                    className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-300'
                                >
                                    <ExternalLink className='w-5 h-5' />
                                    Live Demo
                                </motion.a>
                                {/* <motion.a
                                    href={selectedProject.githubUrl}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg text-white font-semibold hover:bg-white/10 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </motion.a> */}
                            </div>
                        </GlassCard>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
