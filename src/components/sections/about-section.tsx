"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Rocket, Users, Award } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const timelineData = [
    {
        year: "2020",
        title: "Freelance Design + Development",
        company: "Freelance",
        description: "Began freelancing with small projects, starting from logo design and brand assets to building custom websites. This phase gave me hands-on experience with client communication, end-to-end project delivery, and combining both design and development to create real-world digital solutions.",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
    },
    {
        year: "2021",
        title: "Frontend Developer",
        company: "WebExperts Nepal",
        description: "Started my journey building responsive websites with HTML, CSS, and vanilla JavaScript. Gained a strong foundation in web development and user experience design while transitioning into React and modern JavaScript. Delivered responsive, high-performing websites that improved usability and provided clients with scalable digital solutions.",
        icon: Rocket,
        color: "from-purple-500 to-pink-500",
    },
    {
        year: "2022 – Present",
        title: "Software Engineer → Senior Frontend Engineer / Team Lead",
        company: "readytowork-corp",
        description: "Joined as a Software Engineer focusing on architecting React and Next.js applications. Over the years, I grew into a Senior Frontend Engineer and Team Lead: mentoring developers, driving code quality standards, and leading projects from design to production.",
        icon: Users,
        color: "from-orange-500 to-red-500",
    },
    {
        year: "2025 – Present",
        title: "Freelance Frontend Developer",
        company: "Upwork",
        description: "Delivering React.js and Next.js projects for international clients on Upwork. Focused on building high-performance, responsive applications and collaborating directly with clients to bring their ideas to life.",
        icon: Code,
        color: "from-green-500 to-emerald-500",
    },

]

export function AboutSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800 light:bg-gradient-to-b light:from-gray-50 light:to-gray-100 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-blue-600 light:bg-clip-text light:text-transparent mb-6">
                        My Journey
                    </h2>
                    <p className="text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto">
                        From curious beginner to senior developer, here&apos;s how I&apos;ve grown and evolved in the world of frontend development.
                    </p>
                </motion.div>

                <div ref={ref} className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-0.5" />

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {timelineData.map((item, index) => {
                            const Icon = item.icon
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 dark:bg-white light:bg-gray-800 rounded-full dark:border-4 dark:border-slate-800 light:border-4 light:border-gray-100 transform -translate-x-2 md:-translate-x-2 z-10">
                                        <motion.div
                                            className={`w-full h-full rounded-full bg-gradient-to-r ${item.color}`}
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                        />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                                        <GlassCard className="p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`p-3 rounded-full bg-gradient-to-r ${item.color}`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold dark:text-white light:text-gray-800">{item.year}</div>
                                                    <div className="text-lg font-semibold dark:text-blue-200 light:text-blue-600">{item.title}</div>
                                                    <div className="text-sm dark:text-white/60 light:text-gray-500">{item.company}</div>
                                                </div>
                                            </div>
                                            <p className="dark:text-white/80 light:text-gray-800 leading-relaxed">{item.description}</p>
                                        </GlassCard>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {[
                        { number: "4+", label: "Years Experience" },
                        // { number: "10+", label: "Projects Completed" },
                        { number: "100%", label: "Client Satisfaction" },
                        { number: "24/7", label: "Learning Mode" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-blue-600 light:to-purple-600 light:bg-clip-text light:text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="dark:text-white/60 light:text-gray-600 text-sm md:text-base">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
