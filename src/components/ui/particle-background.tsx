"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
    opacity: number
}

export function ParticleBackground() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const createParticles = () => {
            const newParticles: Particle[] = []
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.1,
                })
            }
            setParticles(newParticles)
        }

        createParticles()

        const animateParticles = () => {
            setParticles(prev =>
                prev.map(particle => {
                    let newX = particle.x + particle.speedX
                    let newY = particle.y + particle.speedY

                    if (newX > window.innerWidth) newX = 0
                    if (newX < 0) newX = window.innerWidth
                    if (newY > window.innerHeight) newY = 0
                    if (newY < 0) newY = window.innerHeight

                    return {
                        ...particle,
                        x: newX,
                        y: newY,
                    }
                })
            )
        }

        const interval = setInterval(animateParticles, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full light:bg-white/20"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}
