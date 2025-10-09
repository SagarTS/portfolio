import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "optional",
    preload: true,
    adjustFontFallback: true,
});

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export const metadata: Metadata = {
    title: "Sagar Thapa Shrestha - Senior Frontend Developer",
    description:
        "Senior Frontend Developer with 5+ years of experience crafting immersive digital experiences. Specializing in React, Next.js, and creating interfaces that users fall in love with.",
    keywords: [
        "frontend developer",
        "react",
        "nextjs",
        "typescript",
        "portfolio",
    ],
    authors: [{ name: "Sagar Thapa Shrestha" }],
    openGraph: {
        title: "Sagar Thapa Shrestha - Senior Frontend Developer",
        description:
            "Senior Frontend Developer with 5+ years of experience crafting immersive digital experiences.",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth dark' suppressHydrationWarning>
            <head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />
                <link rel='dns-prefetch' href='//fonts.googleapis.com' />
                <link rel='dns-prefetch' href='//fonts.gstatic.com' />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    const savedTheme = localStorage.getItem('theme');
                                    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
                                    
                                    document.documentElement.classList.remove('dark', 'light');
                                    document.documentElement.classList.add(theme);
                                } catch (e) {
                                    console.error('Theme initialization error:', e);
                                }
                            })();
                        `,
                    }}
                />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
