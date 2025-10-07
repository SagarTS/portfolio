import dynamic from "next/dynamic";

import { Navigation } from "@/components/ui/navigation";
import { EasterEggs } from "@/components/ui/easter-eggs";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeroSection } from "@/components/sections/hero-section";
// import { LoadingScreen } from "@/components/ui/loading-screen";
// import { AboutSection } from "@/components/sections/about-section";

const LazySkillsSection = dynamic(
    () =>
        import("@/components/sections/skills-section").then((mod) => ({
            default: mod.SkillsSection,
        })),
    {
        loading: () => (
            <div className='h-96 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg' />
        ),
    }
);

const LazyProjectsSection = dynamic(
    () =>
        import("@/components/sections/projects-section").then((mod) => ({
            default: mod.ProjectsSection,
        })),
    {
        loading: () => (
            <div className='h-96 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg' />
        ),
    }
);

const LazyExperienceSection = dynamic(
    () =>
        import("@/components/sections/experience-section").then((mod) => ({
            default: mod.ExperienceSection,
        })),
    {
        loading: () => (
            <div className='h-96 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg' />
        ),
    }
);

const LazyArticlesSection = dynamic(
    () =>
        import("@/components/sections/articles-section").then((mod) => ({
            default: mod.ArticlesSection,
        })),
    {
        loading: () => (
            <div className='h-96 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg' />
        ),
    }
);

const LazyContactSection = dynamic(
    () =>
        import("@/components/sections/contact-section").then((mod) => ({
            default: mod.ContactSection,
        })),
    {
        loading: () => (
            <div className='h-96 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-lg' />
        ),
    }
);

export default function Home() {
    return (
        <main className='relative'>
            {/* <LoadingScreen /> */}
            <EasterEggs />
            <Navigation />
            <ScrollProgress />
            <ThemeToggle />

            <div id='hero'>
                <HeroSection />
            </div>

            {/* <AboutSection /> */}
            <LazySkillsSection />
            <LazyProjectsSection />
            <LazyArticlesSection />
            <LazyExperienceSection />
            <LazyContactSection />
        </main>
    );
}
