"use client";

import {
    MapPin,
    Calendar,
    Download,
    FileText,
    Building2,
    Briefcase,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { GlassCard } from "@/components/ui/glass-card";

const experiences = [
    {
        id: 1,
        company: "readytowork-corp",
        position: "Software Engineer",
        location: "Remote",
        startDate: "12/2021",
        endDate: "Present",
        type: "Full-time",
        description:
            "Driving frontend development from concept to delivery by building pixel-perfect web pages, integrating APIs, ensuring responsive design, and mentoring junior developers to create scalable and maintainable solutions.",
        achievements: [
            "Led a cross-functional project, managing a team of 6 to deliver on time and exceed expectations",
            "Transformed Figma designs into highly accurate, pixel-perfect web pages",
            "Implemented responsive design strategies, improving accessibility and user experience across all devices",
            "Integrated APIs seamlessly to enhance platform performance and functionality",
            "Mentored junior developers, fostering skill growth and adherence to best practices",
            "Established and enforced code review processes, ensuring maintainable and robust codebases",
        ],
        technologies: [
            "React",
            "Redux",
            "Typescript",
            "API Integration",
            "Responsive Design",
            "Code Review",
        ],
        current: true,
    },
    {
        id: 2,
        company: "WebExpertsNepal",
        position: "React JS Developer",
        location: "Satdobato, Lalitpur",
        startDate: "01/2021",
        endDate: "12/2021",
        type: "Full-time",
        description:
            "Built and optimized frontend applications using React, collaborating closely with designers and senior developers to deliver interactive, high-quality user interfaces.",
        achievements: [
            "Developed clean, maintainable frontend components with HTML, CSS, and JavaScript",
            "Created interactive user interfaces using React.js, effectively leveraging state management and React hooks",
            "Worked closely with senior developers and designers to ensure timely and accurate feature delivery",
            "Implemented Redux-based state management to maintain consistent and predictable application state",
        ],
        technologies: [
            "React",
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "State Management",
            "Component Lifecycle",
            "React Hooks",
        ],
        current: false,
    },
];

const education = [
    {
        degree: "Bachelor of Software Engineering",
        school: "Pokhara University",
        year: "2019",
    },
];

// const certifications = [
//     {
//         name: "AWS Certified Developer",
//         issuer: "Amazon Web Services",
//         year: "2023",
//     },
//     {
//         name: "React Professional Certification",
//         issuer: "Meta",
//         year: "2022",
//     },
//     {
//         name: "Google UX Design Certificate",
//         issuer: "Google",
//         year: "2021",
//     },
// ]

export function ExperienceSection() {
    const [isResumeMode, setIsResumeMode] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/my_cv.pdf";
        link.download = "Sagar_T_Shrestha_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id='experience'
            className='py-24 dark:bg-gradient-to-b dark:from-black dark:to-slate-900 light:bg-gradient-to-b light:from-gray-300 light:to-gray-400 relative overflow-hidden'
        >
            {/* Background Elements */}
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]' />

            <div className='max-w-6xl mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-blue-600 light:bg-clip-text light:text-transparent mb-6'>
                        Experience & Resume
                    </h2>
                    <p className='text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto mb-8'>
                        My professional journey and achievements in the world of
                        frontend development
                    </p>

                    {/* Resume Mode Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsResumeMode(!isResumeMode);
                        }}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 border-2 cursor-pointer relative z-10 ${isResumeMode
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/50 hover:bg-blue-500/30 shadow-lg"
                                : "dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 light:bg-white/80 light:text-gray-800 light:border-gray-400 light:hover:bg-white/90 shadow-lg"
                            }`}
                        style={{ pointerEvents: "auto" }}
                    >
                        <FileText className='w-5 h-5' />
                        {isResumeMode ? "Dashboard View" : "Resume View"}
                    </motion.button>
                </motion.div>

                <div ref={ref}>
                    {isResumeMode ? (
                        /* Resume Mode */
                        <motion.div
                            key='resume-mode'
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className='max-w-4xl mx-auto'
                        >
                            <GlassCard className='p-8 dark:bg-white/5 light:bg-white/60'>
                                {/* Header */}
                                <div className='text-center mb-8 pb-6 dark:border-b dark:border-white/20 light:border-b light:border-gray-300/50'>
                                    <h3 className='text-3xl font-bold dark:text-white light:text-gray-800 mb-2'>
                                        Sagar Thapa Shrestha
                                    </h3>
                                    <p className='dark:text-blue-200 light:text-blue-600 text-lg'>
                                        Senior Frontend Developer
                                    </p>
                                    <p className='dark:text-white/60 light:text-gray-500'>
                                        Bhaktapur, Nepal
                                    </p>
                                </div>

                                {/* Experience */}
                                <div className='mb-8'>
                                    <h4 className='text-2xl font-bold dark:text-white light:text-gray-800 mb-4 flex items-center gap-2'>
                                        <Briefcase className='w-6 h-6' />
                                        Professional Experience
                                    </h4>
                                    <div className='space-y-6'>
                                        {experiences.map((exp) => (
                                            <div
                                                key={exp.id}
                                                className='border-l-2 border-blue-500/30 pl-6'
                                            >
                                                <div className='flex justify-between items-start mb-2'>
                                                    <div>
                                                        <h5 className='text-xl font-bold dark:text-white light:text-gray-800'>
                                                            {exp.position}
                                                        </h5>
                                                        <p className='dark:text-blue-200 light:text-blue-600 font-semibold'>
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                    <div className='text-right dark:text-white/60 light:text-gray-500'>
                                                        <p>
                                                            {exp.startDate} -{" "}
                                                            {exp.endDate}
                                                        </p>
                                                        <p className='text-sm'>
                                                            {exp.location}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className='dark:text-white/80 light:text-gray-800 mb-3'>
                                                    {exp.description}
                                                </p>
                                                <ul className='list-disc list-inside dark:text-white/70 light:text-gray-700 space-y-1'>
                                                    {exp.achievements.map(
                                                        (achievement, i) => (
                                                            <li
                                                                key={i}
                                                                className='text-sm'
                                                            >
                                                                {achievement}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Education & Certifications */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                                    <div>
                                        <h4 className='text-xl font-bold dark:text-white light:text-gray-800 mb-4'>
                                            Education
                                        </h4>
                                        {education.map((edu, index) => (
                                            <div key={index} className='mb-4'>
                                                <h5 className='text-lg font-semibold dark:text-blue-200 light:text-blue-600'>
                                                    {edu.degree}
                                                </h5>
                                                <p className='dark:text-white/80 light:text-gray-800'>
                                                    {edu.school}
                                                </p>
                                                <p className='dark:text-white/60 light:text-gray-500 text-sm'>
                                                    {edu.year}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {/* <div>
                                        <h4 className="text-xl font-bold dark:text-white light:text-gray-800 mb-4">Certifications</h4>
                                        {certifications.map((cert, index) => (
                                            <div key={index} className="mb-4">
                                                <h5 className="text-lg font-semibold dark:text-blue-200 light:text-blue-600">{cert.name}</h5>
                                                <p className="dark:text-white/80 light:text-gray-800">{cert.issuer}</p>
                                                <p className="dark:text-white/60 light:text-gray-500 text-sm">{cert.year}</p>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>

                                {/* Download Button */}
                                <div className='text-center mt-8 pt-6 dark:border-t dark:border-white/20 light:border-t light:border-gray-300/50'>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleDownload}
                                        className='inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold transition-all duration-100'
                                    >
                                        <Download className='w-5 h-5' />
                                        Download PDF Resume
                                    </motion.button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ) : (
                        /* Dashboard Mode */
                        <motion.div
                            key='dashboard-mode'
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            className='space-y-8'
                        >
                            {/* Current Role Highlight */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6 }}
                            >
                                <GlassCard className='p-8 border-2 border-blue-500/30'>
                                    <div className='flex items-center gap-4 mb-4'>
                                        <div className='p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600'>
                                            <Building2 className='w-6 h-6 text-white' />
                                        </div>
                                        <div>
                                            <h3 className='text-2xl font-bold dark:text-white light:text-gray-800'>
                                                Current Role
                                            </h3>
                                            <p className='dark:text-blue-200 light:text-blue-600'>
                                                Software Engineer at
                                                readytowork-corp
                                            </p>
                                        </div>
                                        <div className='ml-auto'>
                                            <span className='px-3 py-1 bg-blue-500/20 text-blue-400 border-blue-500/50 rounded-full text-sm border'>
                                                Current
                                            </span>
                                        </div>
                                    </div>
                                    <p className='dark:text-white/80 light:text-gray-800 leading-relaxed'>
                                        Leading projects from inception to
                                        completion, turning Figma designs into
                                        pixel-perfect web pages, implementing
                                        responsive design for all devices, and
                                        integrating APIs to enhance performance
                                        and usability. Mentoring junior
                                        developers and enforcing code review
                                        practices to ensure scalable,
                                        maintainable, and high-quality
                                        codebases.
                                    </p>
                                </GlassCard>
                            </motion.div>

                            {/* Experience Timeline */}
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={
                                            isInView ? { opacity: 1, y: 0 } : {}
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <GlassCard className='p-6 h-full'>
                                            <div className='flex items-start justify-between mb-4'>
                                                <div className='flex items-center gap-3'>
                                                    <div
                                                        className={`p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600`}
                                                    >
                                                        <Building2 className='w-5 h-5 text-white' />
                                                    </div>
                                                    <div>
                                                        <h4 className='text-xl font-bold dark:text-white light:text-gray-800'>
                                                            {exp.position}
                                                        </h4>
                                                        <p className='dark:text-blue-200 light:text-blue-600 font-semibold'>
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                </div>
                                                {exp.current && (
                                                    <span className='px-2 py-1 bg-blue-500/20 text-blue-400 border-blue-500/50 rounded text-xs border'>
                                                        Current
                                                    </span>
                                                )}
                                            </div>

                                            <div className='flex items-center gap-4 dark:text-white/60 light:text-gray-600 text-sm mb-4'>
                                                <div className='flex items-center gap-1'>
                                                    <Calendar className='w-4 h-4' />
                                                    {exp.startDate} -{" "}
                                                    {exp.endDate}
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <MapPin className='w-4 h-4' />
                                                    {exp.location}
                                                </div>
                                            </div>

                                            <p className='dark:text-white/80 light:text-gray-800 text-sm mb-4 leading-relaxed'>
                                                {exp.description}
                                            </p>

                                            <div className='mb-4'>
                                                <h5 className='dark:text-white light:text-gray-800 font-semibold mb-2'>
                                                    Key Achievements:
                                                </h5>
                                                <ul className='dark:text-white/70 light:text-gray-700 text-sm space-y-1'>
                                                    {exp.achievements
                                                        .slice(0, 2)
                                                        .map(
                                                            (
                                                                achievement,
                                                                i
                                                            ) => (
                                                                <li
                                                                    key={i}
                                                                    className='flex items-start gap-2'
                                                                >
                                                                    <span className='text-blue-400 mt-1'>
                                                                        •
                                                                    </span>
                                                                    {
                                                                        achievement
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                </ul>
                                            </div>

                                            <div className='flex flex-wrap gap-1'>
                                                {exp.technologies
                                                    .slice(0, 4)
                                                    .map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className='px-2 py-1 dark:bg-white/10 light:bg-white/60 rounded text-xs dark:text-white/70 light:text-gray-700 dark:border-white/20 light:border-gray-300/60'
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                {exp.technologies.length >
                                                    4 && (
                                                        <span className='px-2 py-1 bg-white/10 rounded text-xs text-white/70 border border-white/20'>
                                                            +
                                                            {exp.technologies
                                                                .length - 4}
                                                        </span>
                                                    )}
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
