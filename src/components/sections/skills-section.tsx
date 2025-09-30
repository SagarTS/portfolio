"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Terminal, Monitor, Smartphone, Database, Palette, Zap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const skillCategories = [
    {
        name: "Frontend",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "TailwindCSS", level: 92 },
            { name: "Framer Motion", level: 65 },
        ],
    },
    {
        name: "Mobile",
        icon: Smartphone,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "React Native", level: 60 },
            { name: "Ionic", level: 50 },
        ],
    },
    {
        name: "Backend",
        icon: Database,
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Node.js", level: 65 },
            { name: "Express", level: 65 },
            { name: "PHP", level: 50 },
        ],
    },
    {
        name: "Design",
        icon: Palette,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "Photoshop", level: 70 },
            { name: "Figma", level: 50 },
        ],
    },
    {
        name: "Tools",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        skills: [
            { name: "Git", level: 90 },
            { name: "Docker", level: 50 },
            { name: "Vercel", level: 65 },
        ],
    },
]

const terminalCommands = [
    "npm install react@latest",
    "npx create-next-app@latest my-app",
    "git commit -m 'feat: add stunning animations'",
    "docker build -t portfolio .",
    "npm run build && npm run start",
    "git push origin main",
    "npm test -- --coverage",
    "lighthouse --chrome-flags='--headless'",
]

export function SkillsSection() {
    const [isTerminalMode, setIsTerminalMode] = useState(false)
    const [buttonClicked, setButtonClicked] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const handleTerminalToggle = () => {
        setIsTerminalMode(!isTerminalMode)
    }

    return (
        <section id="skills" className="py-24 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 light:bg-gradient-to-b light:from-gray-100 light:to-gray-200 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.05),transparent_50%)]" />
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-purple-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-purple-600 light:bg-clip-text light:text-transparent mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto mb-8">
                        A comprehensive toolkit for building modern, scalable web applicationsThe technologies I rely on to craft seamless user experiences and scalable apps.
                    </p>

                    {/* Terminal Mode Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setButtonClicked(true);
                            setIsTerminalMode(!isTerminalMode);
                            setTimeout(() => setButtonClicked(false), 1000);
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 border-2 cursor-pointer relative z-10 ${buttonClicked ? "dark:bg-green-500/30 dark:text-green-300 dark:border-green-500/70 light:bg-green-600/30 light:text-green-700 light:border-green-600/70" : isTerminalMode
                            ? "dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/50 dark:hover:bg-green-500/30 light:bg-green-600/20 light:text-green-700 light:border-green-600/50 light:hover:bg-green-600/30 shadow-lg"
                            : "dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 light:bg-white/80 light:text-gray-800 light:border-gray-400 light:hover:bg-white/90 shadow-lg"
                            }`}
                        style={{ pointerEvents: 'auto' }}
                    >
                        <Terminal className="w-5 h-5" />
                        {isTerminalMode ? "Exit Terminal Mode" : "Enter Terminal Mode"}
                    </motion.button>
                </motion.div>

                <div ref={ref}>
                    {isTerminalMode ? (
                        /* Terminal Mode */
                        <motion.div
                            key="terminal-mode"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <GlassCard className="p-8 dark:bg-black/50 light:bg-gray-900/90 border-green-500/30">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-4 dark:text-green-400 light:text-green-300 font-mono text-sm">developer@portfolio:~$</span>
                                </div>

                                <div className="font-mono dark:text-green-400 light:text-green-300 space-y-2 min-h-[400px]">
                                    <div className="dark:text-white/60 light:text-gray-200">Welcome to my development environment!</div>
                                    <div className="dark:text-white/60 light:text-gray-200">Here are some commands I use daily:</div>
                                    <div className="mt-4 space-y-1">
                                        {terminalCommands.map((command, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-green-400">$</span>
                                                <span className="dark:text-white light:text-gray-100">{command}</span>
                                                <motion.span
                                                    className="w-2 h-4 bg-green-400"
                                                    animate={{ opacity: [1, 0, 1] }}
                                                    transition={{ duration: 1, repeat: Infinity }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ) : (
                        /* Skills Grid */
                        <motion.div
                            key="skills-grid"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {skillCategories.map((category, categoryIndex) => {
                                const Icon = category.icon
                                return (
                                    <motion.div
                                        key={category.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                    >
                                        <GlassCard className="p-6 h-full">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold dark:text-white light:text-gray-800">{category.name}</h3>
                                            </div>

                                            <div className="space-y-4">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                                    >
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="dark:text-white/90 light:text-gray-700 font-medium">{skill.name}</span>
                                                            <span className="dark:text-white/60 light:text-gray-500 text-sm">{skill.level}%</span>
                                                        </div>
                                                        <div className="w-full dark:bg-white/10 light:bg-gray-300/60 rounded-full h-2">
                                                            <motion.div
                                                                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                                                initial={{ width: 0 }}
                                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                                                            />
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    )}
                </div>

                {/* Additional Info */}
                {/* {!isTerminalMode && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center"
                    >
                        <GlassCard className="max-w-4xl mx-auto p-8">
                            <h3 className="text-2xl font-bold dark:text-white light:text-gray-800 mb-4">Always Learning</h3>
                            <p className="dark:text-white/80 light:text-gray-800 leading-relaxed">
                                Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks,
                                tools, and methodologies to stay at the forefront of web development. Currently
                                diving deep into WebAssembly, AI integration, and advanced animation techniques.
                            </p>
                        </GlassCard>
                    </motion.div>
                )} */}
            </div>
        </section>
    )
}
