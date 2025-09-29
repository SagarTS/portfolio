import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/ui/navigation"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { EasterEggs } from "@/components/ui/easter-eggs"
import { LoadingScreen } from "@/components/ui/loading-screen"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <EasterEggs />
      <Navigation />
      <ScrollProgress />
      <ThemeToggle />

      <div id="hero">
        <HeroSection />
      </div>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}