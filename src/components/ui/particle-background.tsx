"use client";

import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export default function ParticleBackground() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [startParticles, setStartParticles] = useState(false);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );
        setIsReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) =>
            setIsReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        if (isReducedMotion) return;

        const particleCount = window.innerWidth < 768 ? 15 : 25;
        const newParticles: Particle[] = Array.from(
            { length: particleCount },
            (_, i) => ({
                id: i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.1,
            })
        );
        setParticles(newParticles);

        let frameId: number;
        const animate = () => {
            setParticles((prev) =>
                prev.map((p) => ({
                    ...p,
                    x: (p.x + p.speedX + window.innerWidth) % window.innerWidth,
                    y:
                        (p.y + p.speedY + window.innerHeight) %
                        window.innerHeight,
                }))
            );
            frameId = requestAnimationFrame(animate);
        };

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [isReducedMotion]);

    useEffect(() => {
        const timer = setTimeout(() => setStartParticles(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!startParticles || isReducedMotion) return null;

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none'>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className='absolute rounded-full light:bg-white/20'
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                />
            ))}
        </div>
    );
}
