import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sagar Thapa Shrestha - Senior Frontend Developer",
  description: "Senior Frontend Developer with 5+ years of experience crafting immersive digital experiences. Specializing in React, Next.js, and creating interfaces that users fall in love with.",
  keywords: ["frontend developer", "react", "nextjs", "typescript", "portfolio"],
  authors: [{ name: "Sagar Thapa Shrestha" }],
  openGraph: {
    title: "Sagar Thapa Shrestha - Senior Frontend Developer",
    description: "Senior Frontend Developer with 5+ years of experience crafting immersive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
