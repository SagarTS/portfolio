import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Enable React Strict Mode
    reactStrictMode: true,

    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ["framer-motion", "lucide-react"],
    },

    // Image optimization
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30,
    },

    // Compression
    compress: true,

    // Power optimizations
    poweredByHeader: false,

    // Headers for better caching
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                ],
            },
            {
                source: "/public/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
