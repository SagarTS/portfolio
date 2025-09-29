"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useState, useEffect } from "react"

export function ThemeToggle() {
    const { theme, toggleTheme, isDark } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/20">
                <div className="w-6 h-6" />
            </div>
        )
    }

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50 p-3 rounded-full dark:bg-white/10 light:bg-gray-100/80 backdrop-blur-xl dark:border-white/20 light:border-gray-200/50 dark:hover:bg-white/20 light:hover:bg-gray-200/90 transition-all duration-200 shadow-2xl shadow-black/20"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <div className="relative w-6 h-6">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {isDark ? (
                        <Moon className="w-6 h-6 text-white" />
                    ) : (
                        <Sun className="w-6 h-6 text-yellow-500" />
                    )}
                </motion.div>
            </div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                    boxShadow: isDark
                        ? "0 0 20px rgba(59, 130, 246, 0.3)"
                        : "0 0 20px rgba(251, 191, 36, 0.3)"
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    )
}
