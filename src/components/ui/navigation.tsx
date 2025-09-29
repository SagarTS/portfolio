"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Home, User, Code, Briefcase, Mail } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const navItems = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
]

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("hero")
    const [isVisible, setIsVisible] = useState(false)
    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 100], [0, 1])

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1))
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) {
                setActiveSection(current)
            }
            setIsVisible(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        console.log("isVisible:", isVisible, "scrollY:", window.scrollY)
    }, [isVisible])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                className="fixed top-0 left-0 right-0 z-50 hidden md:block"
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <GlassCard className="px-6 py-3 dark:bg-white/10 light:bg-white/60 border dark:border-white/30 light:border-gray-300/60">
                        <div className="flex items-center justify-between">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-xl font-bold dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent bg-gradient-to-r light:from-blue-600 light:to-purple-600 bg-clip-text text-transparent cursor-pointer"
                                onClick={() => scrollToSection("#hero")}
                            >
                                STS
                            </motion.div>
                            <div className="flex items-center gap-8">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    const isActive = activeSection === item.href.substring(1)
                                    return (
                                        <motion.button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.href)}
                                            className={`
    flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer
    ${isActive
                                                    ? "text-orange-600 dark:text-orange-400 font-bold dark:bg-white/20 light:bg-white/80"
                                                    : "font-medium dark:text-white/70 light:text-gray-600"}
    dark:hover:light:bg-white/15 hover:light:bg-white/70
    hover:text-orange-600 dark:hover:text-orange-400
  `}
                                            style={{
                                                transition: "all 0.2s ease-in-out",
                                                ...(isActive ? {} : {
                                                    "--tw-shadow": "0 0 8px rgba(0,255,255,0.7)",
                                                    "--tw-shadow-color": "rgba(0,255,255,0.7)",
                                                }),
                                            }}
                                            whileHover={{
                                                textShadow: isActive
                                                    ? "none"
                                                    : `0 0 8px rgba(0,255,255,0.7)`,
                                            }}
                                        >
                                            <Icon className="w-4 h-4 transition-colors duration-200" />
                                            <span className="text-sm">{item.name}</span>
                                        </motion.button>
                                    )
                                })}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <motion.div
                    className="fixed top-0 left-0 right-0 z-50 p-4"
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                >
                    <GlassCard className="px-4 py-3 dark:bg-white/10 light:bg-white/60 border dark:border-white/30 light:border-gray-300/60">
                        <div className="flex items-center justify-between">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="text-lg font-bold dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent bg-gradient-to-r light:from-blue-600 light:to-purple-600 bg-clip-text text-transparent cursor-pointer"
                            >
                                STS
                            </motion.div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-lg dark:bg-white/10 dark:hover:light:bg-white/20 light:bg-white/60 hover:light:bg-white/80 transition-all duration-300"
                            >
                                {isOpen ? <X className="w-5 h-5 dark:text-white light:text-gray-800" /> : <Menu className="w-5 h-5 dark:text-white light:text-gray-800" />}
                            </motion.button>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed inset-0 z-40 dark:bg-black/80 bg-gray-900/80 backdrop-blur-sm"
                    style={{ display: isOpen ? "block" : "none" }}
                >
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        {navItems.map((item, index) => {
                            const Icon = item.icon
                            const isActive = activeSection === item.href.substring(1)
                            return (
                                <motion.button
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`
                    flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer
                    ${isActive
                                            ? "text-orange-600 dark:text-orange-400 font-bold dark:bg-white/20 light:bg-white/80"
                                            : "font-medium dark:text-white/70 light:text-gray-600"}
                    hover:text-orange-600 dark:hover:text-orange-400
                    dark:hover:light:bg-white/15 hover:light:bg-white/70
                    transition-[color,background-color]
                  `}
                                >
                                    <Icon className="w-6 h-6 transition-colors duration-200" />
                                    <span className="text-lg">{item.name}</span>
                                </motion.button>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    )
}