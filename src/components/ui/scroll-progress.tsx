"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r light:from-blue-500 light:via-purple-500 to-pink-500 z-50 origin-left"
            style={{ scaleX }}
        />
    )
}
