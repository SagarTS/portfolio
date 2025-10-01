"use client";

import {
    Mail,
    Send,
    // Phone,
    MapPin,
    Github,
    // Twitter,
    Linkedin,
    Instagram,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import {
    sendContactEmail,
    createMailtoLink,
    type ContactFormData,
} from "@/lib/email-service";
import { GlassCard } from "@/components/ui/glass-card";

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/sagarts",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-500/20",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/sagar-thapa-shrestha-30517b191/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/20",
    },
    // {
    //     name: "Twitter",
    //     icon: Twitter,
    //     href: "https://twitter.com",
    //     color: "hover:text-sky-400",
    //     bgColor: "hover:bg-sky-500/20",
    // },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/sagartshrestha/",
        color: "hover:text-pink-400",
        bgColor: "hover:bg-pink-500/20",
    },
];

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "sagartshrestha@gmail.com",
        href: "mailto:sagartshrestha@gmail.com",
    },
    // {
    //     icon: Phone,
    //     label: "Phone",
    //     value: "+977",
    //     href: "tel:+977",
    // },
    {
        icon: MapPin,
        label: "Location",
        value: "Bhaktapur, Nepal",
        href: "https://www.google.com/maps?q=Bhaktapur,Nepal",
    },
];

export function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });
    const [isClient, setIsClient] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setSubmitStatus({ type: "success", message: result.message });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSubmitStatus({ type: "error", message: result.message });

                // If EmailJS is not configured, offer mailto fallback
                if (result.message.includes("not configured")) {
                    const mailtoLink = createMailtoLink(formData);
                    window.open(mailtoLink, "_blank");
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus({
                type: "error",
                message:
                    "An unexpected error occurred. Please try again or contact me directly at sagartshrestha@gmail.com",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id='contact'
            className='py-24 dark:bg-gradient-to-b dark:from-slate-900 dark:to-black light:bg-gradient-to-b light:from-gray-400 light:to-gray-500 relative overflow-hidden'
        >
            {/* Background Elements */}
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.05),transparent_50%)]' />
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)]' />

            <div className='max-w-6xl mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-blue-600 light:bg-clip-text light:text-transparent mb-6'>
                        Let&apos;s Work Together
                    </h2>
                    <p className='text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto'>
                        Ready to bring your ideas to life? I&apos;m always
                        excited to work on new projects and collaborate with
                        amazing people.
                    </p>
                </motion.div>

                <div
                    ref={ref}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12'
                >
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <GlassCard className='p-8'>
                            <h3 className='text-2xl font-bold dark:text-white light:text-gray-800 mb-6'>
                                Send me a message
                            </h3>

                            {isClient ? (
                                <form
                                    onSubmit={handleSubmit}
                                    className='space-y-6'
                                >
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div>
                                            <label
                                                htmlFor='name'
                                                className='block dark:text-white/80 light:text-gray-700 text-sm font-medium mb-2'
                                            >
                                                Name
                                            </label>
                                            <input
                                                type='text'
                                                id='name'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className='w-full px-4 py-3 dark:bg-white/15 light:bg-white/95 dark:border-white/40 light:border-gray-400 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/70 dark:focus:bg-white/20 light:focus:bg-white dark:focus:border-white/60 light:focus:border-red-500 transition-all duration-200 backdrop-blur-sm'
                                                placeholder='Your name'
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor='email'
                                                className='block dark:text-white/80 light:text-gray-700 text-sm font-medium mb-2'
                                            >
                                                Email
                                            </label>
                                            <input
                                                type='email'
                                                id='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className='w-full px-4 py-3 dark:bg-white/15 light:bg-white/95 dark:border-white/40 light:border-gray-400 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/70 dark:focus:bg-white/20 light:focus:bg-white dark:focus:border-white/60 light:focus:border-blue-500 transition-all duration-200 backdrop-blur-sm'
                                                placeholder='your@email.com'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='subject'
                                            className='block dark:text-white/80 light:text-gray-700 text-sm font-medium mb-2'
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type='text'
                                            id='subject'
                                            name='subject'
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className='w-full px-4 py-3 dark:bg-white/15 light:bg-white/95 dark:border-white/40 light:border-gray-400 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/70 dark:focus:bg-white/20 light:focus:bg-white dark:focus:border-white/60 light:focus:border-blue-500 transition-all duration-200 backdrop-blur-sm'
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor='message'
                                            className='block dark:text-white/80 light:text-gray-700 text-sm font-medium mb-2'
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id='message'
                                            name='message'
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className='w-full px-4 py-3 dark:bg-white/15 light:bg-white/95 dark:border-white/40 light:border-gray-400 rounded-lg dark:text-white light:text-gray-900 dark:placeholder-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500/70 dark:focus:bg-white/20 light:focus:bg-white dark:focus:border-white/60 light:focus:border-blue-500 transition-all duration-200 resize-none backdrop-blur-sm'
                                            placeholder='Tell me about your project...'
                                        />
                                    </div>

                                    {/* Status Message */}
                                    {submitStatus.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg flex items-center gap-3 ${
                                                submitStatus.type === "success"
                                                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                                                    : "bg-red-500/20 border border-red-500/30 text-red-400"
                                            }`}
                                        >
                                            {submitStatus.type === "success" ? (
                                                <CheckCircle className='w-5 h-5 flex-shrink-0' />
                                            ) : (
                                                <AlertCircle className='w-5 h-5 flex-shrink-0' />
                                            )}
                                            <p className='text-sm'>
                                                {submitStatus.message}
                                            </p>
                                        </motion.div>
                                    )}

                                    <motion.button
                                        type='submit'
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{
                                            duration: 0.1,
                                            ease: "easeOut",
                                        }}
                                        className={`w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${isSubmitting ? "" : "cursor-pointer"}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className='w-5 h-5' />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            ) : (
                                <div className='space-y-6'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div className='h-16 bg-white/10 rounded-lg animate-pulse' />
                                        <div className='h-16 bg-white/10 rounded-lg animate-pulse' />
                                    </div>
                                    <div className='h-16 bg-white/10 rounded-lg animate-pulse' />
                                    <div className='h-32 bg-white/10 rounded-lg animate-pulse' />
                                    <div className='h-16 bg-white/10 rounded-lg animate-pulse' />
                                </div>
                            )}
                        </GlassCard>
                    </motion.div>

                    {/* Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='space-y-8'
                    >
                        {/* Contact Information */}
                        <GlassCard className='p-8'>
                            <h3 className='text-2xl font-bold dark:text-white light:text-gray-800 mb-6'>
                                Get in touch
                            </h3>
                            <div className='space-y-6'>
                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    return (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            target={
                                                info.label === "Location"
                                                    ? "_blank"
                                                    : "_self"
                                            }
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, x: 0 }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.3 + index * 0.1,
                                            }}
                                            className='flex items-center gap-4 p-4 rounded-lg dark:bg-white/5 light:bg-white/60 dark:hover:bg-white/10 light:hover:bg-white/80 transition-all duration-300 group'
                                        >
                                            <div className='p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300'>
                                                <Icon className='w-5 h-5 text-white' />
                                            </div>
                                            <div>
                                                <p className='dark:text-white/60 light:text-gray-600 text-sm'>
                                                    {info.label}
                                                </p>
                                                <p className='dark:text-white light:text-gray-800 font-medium'>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </GlassCard>

                        {/* Social Links */}
                        <GlassCard className='p-8'>
                            <h3 className='text-2xl font-bold dark:text-white light:text-gray-800 mb-6'>
                                Follow me
                            </h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, scale: 1 }
                                                    : {}
                                            }
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-3 p-4 rounded-lg dark:bg-white/5 light:bg-white/60 dark:border-white/10 light:border-gray-300/60 transition-all duration-200 ${social.bgColor} ${social.color}`}
                                        >
                                            <Icon className='w-5 h-5' />
                                            <span className='font-medium'>
                                                {social.name}
                                            </span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </GlassCard>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <GlassCard className='p-6 border-2 border-green-500/30'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                                    <div>
                                        <p className='dark:text-white light:text-gray-800 font-semibold'>
                                            Available for new projects
                                        </p>
                                        <p className='dark:text-white/60 light:text-gray-600 text-sm'>
                                            Response time: Usually within 24
                                            hours
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className='text-center mt-16 pt-8 dark:border-t dark:border-white/10 light:border-t light:border-gray-300/50'
                >
                    <p className='text-white/60'>
                        © 2024 Sagar Thapa Shrestha. Built with Next.js, React,
                        and lots of ☕
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
