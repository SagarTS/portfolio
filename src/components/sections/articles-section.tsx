"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";

// interface Article {
//     title: string;
//     link: string;
//     pubDate: string;
//     description: string;
//     categories: string[];
//     thumbnail?: string;
//     fullDescription: string
// }

const MEDIUM_USERNAME = "sagartshrestha";
// const MEDIUM_RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

const ARTICLES = [
    {
        title: "Google Analytics in Next js",
        link: "https://articles.readytowork.jp/google-analytics-in-next-js-a26cc2b28db5?source=rss-f5bb9e5d5c85------2",
        pubDate: "2024-03-04 09:57:34",
        description:
            "Learn how to build scalable and performant web applications using Next.js, React, and modern development practices...",
        categories: [
            "reactjs",
            "google-analytics",
            "nextjs",
            "analytics",
            "google",
        ],
        readTime: "6",
        thumbnail: "/articles/g_analytics.png",
    },
    {
        title: "Secure Your Go Web Application: JWT Authentication",
        link: "https://articles.readytowork.jp/secure-your-go-web-application-jwt-authentication-e65a5af7c049?source=rss-f5bb9e5d5c85------2",
        pubDate: "2023-09-30 06:36:27",
        description:
            "In the world of web development, security is paramount. One of the critical aspects of securing your Go web application is implementing JWT (JSON Web...",
        categories: ["gin", "go", "jwt", "gorm"],
        readTime: "7",
        thumbnail: "/articles/go_jwt.jpg",
    },
    {
        title: "Beginner’s Guide to Jest; Javascript Testing",
        link: "https://articles.readytowork.jp/beginners-guide-to-jest-javascript-testing-8b9b5d2de547?source=rss-f5bb9e5d5c85------2",
        pubDate: "2023-09-28 17:41:46",
        description:
            "In the world of JavaScript development, testing is an essential practice to ensure the reliability and stability of your code. Jest, a popular JavaSc...",
        categories: ["js", "testing", "javascript", "jest"],
        readTime: "4",
        thumbnail: "/articles/jest.png",
    },
    {
        title: "Memory leak and Re-rendering error in React",
        link: "https://articles.readytowork.jp/memory-leak-and-re-rendering-error-in-react-4c2e181fc64?source=rss-f5bb9e5d5c85------2",
        pubDate: "2023-04-24 04:06:21",
        description:
            "Today, we are going to talk about one of the most common yet ignored topics in React. Before that, let’s start with what a memory leak really is.\nA m...",
        categories: [
            "error",
            "memory-leak",
            "react",
            "optimization",
            "rerender",
        ],
        readTime: "7",
        thumbnail: "/articles/memory_leak.png",
    },
    {
        title: "Progressive Web Apps (PWAs) on Next JS using a custom button",
        link: "https://articles.readytowork.jp/memory-leak-and-re-rendering-error-in-react-4c2e181fc64?source=rss-f5bb9e5d5c85------2",
        pubDate: "2022-11-23 11:37:57",
        description:
            "Progressive Web Application (PWA) is nothing but a website built using common website technologies including HTML, CSS, JavaScript, and...",
        categories: ["nextjs", "pwa-development", "progressive-web-app"],
        readTime: "7",
        thumbnail: "/articles/pwa.png",
    },
    {
        title: "Web Components &amp; Web Workers",
        link: "https://articles.readytowork.jp/web-components-web-workers-be2f107da5ab?source=rss-f5bb9e5d5c85------2",
        pubDate: "2022-07-27 10:32:40",
        description:
            "Web Components Set of web platform APIs that allow us to create custom, reusable, and encapsulated HTML tags to use in web pages and web apps. Web co...",
        categories: [
            "web-workers-in-javascript",
            "webworker",
            "web-components",
        ],
        readTime: "9",
        thumbnail: "/articles/web_worker.png",
    },
];

export function ArticlesSection() {
    // const [articles, setArticles] = useState<Article[]>([]);
    // const [loading, setLoading] = useState(true);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // useEffect(() => {
    //     const fetchArticles = async () => {
    //         try {
    //             setLoading(true);

    //             const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(MEDIUM_RSS_URL)}`;
    //             const response = await fetch(proxyUrl);

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch articles');
    //             }

    //             const data = await response.json();

    //             if (data.status === 'ok' && data.items) {
    //                 const formattedArticles: Article[] = data.items.slice(0, 6).map((item: any) => ({
    //                     title: item.title,
    //                     link: item.link,
    //                     pubDate: item.pubDate,
    //                     description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
    //                     categories: item.categories || [],
    //                     thumbnail: item.content.match(/<img[^>]+src="([^">]+)"/) ? item.content.match(/<img[^>]+src="([^">]+)"/)[1] : null,
    //                     fullDescription: item.description.replace(/<[^>]*>/g, '')
    //                 }));
    //                 setArticles(formattedArticles);
    //             } else {
    //                 throw new Error('Invalid RSS data');
    //             }
    //         } catch (err) {
    //             setArticles([
    //                 {
    //                     title: "Google Analytics in Next js",
    //                     link: "https://articles.readytowork.jp/google-analytics-in-next-js-a26cc2b28db5?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2024-03-04 09:57:34",
    //                     description: "Learn how to build scalable and performant web applications using Next.js, React, and modern development practices...",
    //                     categories: ["reactjs", "google-analytics", "nextjs", "analytics", "google"],
    //                     fullDescription: "",
    //                 },
    //                 {
    //                     title: "Secure Your Go Web Application: JWT Authentication",
    //                     link: "https://articles.readytowork.jp/secure-your-go-web-application-jwt-authentication-e65a5af7c049?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2023-09-30 06:36:27",
    //                     description: "In the world of web development, security is paramount. One of the critical aspects of securing your Go web application is implementing JWT (JSON Web...",
    //                     categories: ['gin', 'go', 'jwt', 'gorm'],
    //                     fullDescription: "",
    //                 },
    //                 {
    //                     title: "Beginner’s Guide to Jest; Javascript Testing",
    //                     link: "https://articles.readytowork.jp/beginners-guide-to-jest-javascript-testing-8b9b5d2de547?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2023-09-28 17:41:46",
    //                     description: "In the world of JavaScript development, testing is an essential practice to ensure the reliability and stability of your code. Jest, a popular JavaSc...",
    //                     categories: ['js', 'testing', 'javascript', 'jest'],
    //                     fullDescription: "",
    //                 },
    //                 {
    //                     title: "Memory leak and Re-rendering error in React",
    //                     link: "https://articles.readytowork.jp/memory-leak-and-re-rendering-error-in-react-4c2e181fc64?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2023-04-24 04:06:21",
    //                     description: "Today, we are going to talk about one of the most common yet ignored topics in React. Before that, let’s start with what a memory leak really is.\nA m...",
    //                     categories: ['error', 'memory-leak', 'react', 'optimization', 'rerender'],
    //                     fullDescription: "",
    //                 },
    //                 {
    //                     title: "Progressive Web Apps (PWAs) on Next JS using a custom button",
    //                     link: "https://articles.readytowork.jp/memory-leak-and-re-rendering-error-in-react-4c2e181fc64?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2022-11-23 11:37:57",
    //                     description: "Progressive Web Application (PWA) is nothing but a website built using common website technologies including HTML, CSS, JavaScript, and WebAssembly t...",
    //                     categories: ['nextjs', 'pwa-development', 'progressive-web-app'],
    //                     fullDescription: "",
    //                 },
    //                 {
    //                     title: "Web Components &amp; Web Workers",
    //                     link: "https://articles.readytowork.jp/web-components-web-workers-be2f107da5ab?source=rss-f5bb9e5d5c85------2",
    //                     pubDate: "2022-07-27 10:32:40",
    //                     description: "Web Components Set of web platform APIs that allow us to create custom, reusable, and encapsulated HTML tags to use in web pages and web apps. Web co...",
    //                     categories: ['web-workers-in-javascript', 'webworker', 'web-components'],
    //                     fullDescription: "9",
    //                 }
    //             ]);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchArticles();
    // }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    const getReadingTime = (description: string) => {
        const wordsPerMinute = 200;
        const wordCount = description.split(" ").length;
        return Math.ceil(wordCount / wordsPerMinute);
    };

    return (
        <section
            id='articles'
            className='py-24 dark:bg-gradient-to-b dark:from-black dark:to-black light:bg-gradient-to-b light:from-gray-300 light:to-gray-300 relative overflow-hidden'
        >
            {/* Background Elements */}
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.05),transparent_50%)]' />
            <div className='absolute inset-0 dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]' />

            <div className='max-w-7xl mx-auto px-6'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-5xl md:text-6xl font-bold dark:bg-gradient-to-r dark:from-white dark:to-blue-200 dark:bg-clip-text dark:text-transparent light:bg-gradient-to-r light:from-gray-800 light:to-blue-600 light:bg-clip-text light:text-transparent mb-6'>
                        Latest Articles
                    </h2>
                    <p className='text-xl dark:text-white/70 light:text-gray-700 max-w-3xl mx-auto'>
                        Thoughts, insights, and tutorials on web development,
                        technology, and programming.
                    </p>
                </motion.div>

                <div ref={ref}>
                    {/* {loading ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {[...Array(6)].map((_, index) => (
                                <div
                                    key={index}
                                    className='h-80 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg'
                                />
                            ))}
                        </div>
                    ) : ( */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {ARTICLES.map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <GlassCard className='p-6 h-full flex flex-col group hover:scale-105 transition-transform duration-300'>
                                    {/* Article Thumbnail */}
                                    {article.thumbnail && (
                                        <div className='h-48 rounded-lg mb-4 overflow-hidden relative'>
                                            {/* <img
                                                src={article.thumbnail}
                                                alt={article.title}
                                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                                            /> */}
                                            <Image
                                                src={article.thumbnail}
                                                alt={article.title}
                                                fill
                                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                                className='object-cover group-hover:scale-110 transition-transform duration-300'
                                            />
                                            <div className='absolute inset-0 bg-black/20' />
                                        </div>
                                    )}

                                    {/* Article Content */}
                                    <div className='flex-1 flex flex-col'>
                                        <h3 className='text-xl font-bold dark:text-white light:text-gray-800 mb-2'>
                                            {article.title}
                                        </h3>

                                        <p className='dark:text-white/70 light:text-gray-600 text-sm mb-4 flex-1 line-clamp-3'>
                                            {article.description}
                                        </p>

                                        {/* Article Meta */}
                                        <div className='space-y-2 mb-4'>
                                            <div className='flex items-center gap-4 text-xs dark:text-white/60 light:text-gray-500'>
                                                <div className='flex items-center gap-1'>
                                                    <Calendar className='w-3 h-3' />
                                                    {formatDate(
                                                        article.pubDate
                                                    )}
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <Clock className='w-3 h-3' />
                                                    {getReadingTime(
                                                        article.readTime
                                                    )}{" "}
                                                    min read
                                                </div>
                                            </div>
                                        </div>

                                        {/* Categories */}
                                        {article.categories.length > 0 && (
                                            <div className='flex flex-wrap gap-1 mb-4'>
                                                {article.categories
                                                    .slice(0, 3)
                                                    .map((category) => (
                                                        <span
                                                            key={category}
                                                            className='px-2 py-1 dark:bg-white/10 light:bg-white/60 rounded text-xs dark:text-white/70 light:text-gray-700'
                                                        >
                                                            {category}
                                                        </span>
                                                    ))}
                                            </div>
                                        )}

                                        {/* Read More Button */}
                                        <motion.a
                                            href={article.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='inline-flex items-center justify-center gap-2 cursor-pointer px-3 py-2 dark:bg-white/10 light:bg-white/60 rounded dark:text-white light:text-gray-800 text-sm font-medium dark:hover:bg-white/20 light:hover:bg-white/80 transition-all duration-200'
                                        >
                                            Read Article
                                            <ExternalLink className='w-4 h-4' />
                                        </motion.a>
                                    </div>
                                </GlassCard>
                            </motion.article>
                        ))}
                    </div>
                    {/* )} */}
                </div>

                {/* View All Articles Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mt-12'
                >
                    <motion.a
                        href={`https://medium.com/@${MEDIUM_USERNAME}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 border-2 cursor-pointer relative z-10 dark:bg-white/10 dark:text-white dark:border-white/30 dark:hover:bg-white/20 light:bg-white/80 light:text-gray-800 light:border-gray-400 light:hover:bg-white/90 shadow-lg'
                    >
                        View All Articles on Medium
                        <ExternalLink className='w-5 h-5' />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
