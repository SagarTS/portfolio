import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

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
        <html lang='en' className='scroll-smooth dark'>
            <head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />
                <link rel='dns-prefetch' href='//fonts.googleapis.com' />
                <link rel='dns-prefetch' href='//fonts.gstatic.com' />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
