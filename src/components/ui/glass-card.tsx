"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface GlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    delay?: number
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            // whileHover={hover ? { y: -5, scale: 1.02 } : {}}
            // hoverTransition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
                "relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-200",
                // Dark mode styles
                "dark:bg-white/10 dark:shadow-2xl dark:shadow-black/20",
                "dark:before:absolute dark:before:inset-0 dark:before:rounded-2xl dark:before:bg-gradient-to-br dark:before:from-white/20 dark:before:to-transparent dark:before:opacity-0 dark:before:transition-opacity dark:before:duration-200",
                "dark:hover:before:opacity-100",
                // Light mode styles
                "light:bg-white/70 light:shadow-lg light:shadow-gray-300/40",
                "light:before:absolute light:before:inset-0 light:before:rounded-2xl light:before:bg-gradient-to-br light:before:from-white/40 light:before:to-transparent light:before:opacity-0 light:before:transition-opacity light:before:duration-200",
                "light:hover:before:opacity-100",
                // Add these to force proper GPU compositing and fix the blur rendering after opacity animation
                "backface-hidden [transform:translateZ(0)] [will-change:opacity,transform]",
                className
            )}
        >
            {children}
        </motion.div>
    )
}