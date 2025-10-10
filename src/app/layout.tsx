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
        "Senior Frontend Developer with 5+ years of experience building modern, responsive web applications using React, Next.js, and TypeScript.",
    keywords: [
        "SagarTS",
        "Sagar Thapa Shrestha",
        "Frontend Developer",
        "Frontend Engineer",
        "React Developer",
        "Next.js Developer",
        "TypeScript",
        "Full Stack Developer",
        "Web Developer Portfolio",
    ],
    authors: [
        {
            name: "Sagar Thapa Shrestha",
            url: "https://sagarthapashrestha.com.np",
        },
    ],
    openGraph: {
        title: "Sagar Thapa Shrestha - Senior Frontend Developer",
        description:
            "Explore my portfolio — modern web experiences built with React, Next.js, and TypeScript.",
        url: "https://sagarthapashrestha.com.np",
        siteName: "Sagar Thapa Shrestha",
        images: [
            {
                url: "https://sagarthapashrestha.com/portfolio.png",
                width: 1200,
                height: 630,
                alt: "Sagar Thapa Shrestha Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    metadataBase: new URL("https://sagarthapashrestha.com.np"),
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
