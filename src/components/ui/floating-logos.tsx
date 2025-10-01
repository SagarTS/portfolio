"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingLogo {
    name: string;
    color: string;
    position: { x: number; y: number };
    animation: {
        duration: number;
        delay: number;
        type: "float" | "rotate" | "drift";
    };
    size: "sm" | "md" | "lg";
}

const techLogos: FloatingLogo[] = [
    {
        name: "JavaScript",
        color: "#F7DF1E",
        position: { x: 8, y: 20 },
        animation: { duration: 4, delay: 0, type: "float" },
        size: "lg",
    },
    {
        name: "TypeScript",
        color: "#3178C6",
        position: { x: 88, y: 15 },
        animation: { duration: 5, delay: 0.5, type: "drift" },
        size: "lg",
    },
    {
        name: "Git",
        color: "#3178C6",
        position: { x: 88, y: 55 },
        animation: { duration: 5, delay: 0.5, type: "drift" },
        size: "md",
    },
    {
        name: "React",
        color: "#61DAFB",
        position: { x: 12, y: 60 },
        animation: { duration: 3.5, delay: 1, type: "rotate" },
        size: "lg",
    },
    {
        name: "TailwindCSS",
        color: "#06B6D4",
        position: { x: 85, y: 70 },
        animation: { duration: 4.5, delay: 1.5, type: "float" },
        size: "md",
    },
    {
        name: "Next.js",
        color: "#000000",
        position: { x: 6, y: 40 },
        animation: { duration: 6, delay: 2, type: "drift" },
        size: "sm",
    },
    {
        name: "Node.js",
        color: "#339933",
        position: { x: 92, y: 35 },
        animation: { duration: 4, delay: 2.5, type: "rotate" },
        size: "md",
    },
    {
        name: "Ionic",
        color: "#3880FF",
        position: { x: 10, y: 80 },
        animation: { duration: 5.5, delay: 3, type: "float" },
        size: "sm",
    },
];

export function FloatingLogos() {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (!mounted) return null;

    // Filter logos for mobile
    const displayLogos = isMobile ? techLogos.slice(0, 4) : techLogos;

    return (
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
            {displayLogos.map((logo) => (
                <motion.div
                    key={logo.name}
                    className={`absolute ${
                        logo.size === "lg"
                            ? "w-12 h-12 md:w-16 md:h-16"
                            : logo.size === "md"
                              ? "w-10 h-10 md:w-12 md:h-12"
                              : "w-8 h-8 md:w-10 md:h-10"
                    } flex items-center justify-center rounded-full dark:bg-white/10 bg-gray-100/80 backdrop-blur-sm dark:border-white/20 light:border-gray-200/50 shadow-lg`}
                    style={{
                        left: `${logo.position.x}%`,
                        top: `${logo.position.y}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                        logo.animation.type === "float"
                            ? {
                                  opacity: 1,
                                  scale: 1,
                                  y: [-10, 10, -10],
                                  transition: {
                                      opacity: {
                                          duration: 0.5,
                                          delay: logo.animation.delay,
                                      },
                                      scale: {
                                          duration: 0.5,
                                          delay: logo.animation.delay,
                                      },
                                      y: {
                                          duration: logo.animation.duration,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                      },
                                  },
                              }
                            : logo.animation.type === "rotate"
                              ? {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: [0, 360],
                                    transition: {
                                        opacity: {
                                            duration: 0.5,
                                            delay: logo.animation.delay,
                                        },
                                        scale: {
                                            duration: 0.5,
                                            delay: logo.animation.delay,
                                        },
                                        rotate: {
                                            duration: logo.animation.duration,
                                            repeat: Infinity,
                                            ease: "linear",
                                        },
                                    },
                                }
                              : {
                                    opacity: 1,
                                    scale: 1,
                                    x: [-15, 15, -15],
                                    y: [-5, 5, -5],
                                    transition: {
                                        opacity: {
                                            duration: 0.5,
                                            delay: logo.animation.delay,
                                        },
                                        scale: {
                                            duration: 0.5,
                                            delay: logo.animation.delay,
                                        },
                                        x: {
                                            duration: logo.animation.duration,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                        y: {
                                            duration: logo.animation.duration,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    },
                                }
                    }
                    whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 },
                    }}
                >
                    <div
                        className={`${
                            logo.size === "lg"
                                ? "text-lg md:text-2xl"
                                : logo.size === "md"
                                  ? "text-base md:text-xl"
                                  : "text-sm md:text-lg"
                        } font-bold`}
                        style={{ color: logo.color }}
                    >
                        {logo.name === "JavaScript" && (
                            <Image
                                src='/logos/javascript.svg'
                                alt='JS'
                                width={40}
                                height={40}
                                className='w-7 h-7 md:w-9 md:h-9'
                            />
                        )}
                        {logo.name === "TypeScript" && (
                            <Image
                                src='/logos/typescript.svg'
                                alt='TS'
                                width={30}
                                height={30}
                                className='w-6 h-6 md:w-8 md:h-8'
                            />
                        )}
                        {logo.name === "React" && (
                            <Image
                                src='/logos/react.svg'
                                alt='React'
                                width={45}
                                height={45}
                                className='w-8 h-8 md:w-10 md:h-10'
                            />
                        )}
                        {logo.name === "TailwindCSS" && (
                            <Image
                                src='/logos/tailwind.svg'
                                alt='Tailwind'
                                width={35}
                                height={35}
                            />
                        )}
                        {logo.name === "Next.js" && (
                            <Image
                                src='/logos/next.svg'
                                alt='Next'
                                width={30}
                                height={30}
                            />
                        )}
                        {logo.name === "Node.js" && (
                            <Image
                                src='/logos/node.svg'
                                alt='Node'
                                width={30}
                                height={30}
                            />
                        )}
                        {logo.name === "Ionic" && (
                            <Image
                                src='/logos/ionic.svg'
                                alt='Ionic'
                                width={30}
                                height={30}
                            />
                        )}
                        {logo.name === "Git" && (
                            <Image
                                src='/logos/git.svg'
                                alt='Git'
                                width={40}
                                height={40}
                                className='w-7 h-7 md:w-9 md:h-9'
                            />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
