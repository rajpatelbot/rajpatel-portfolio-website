
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { TechStackSection } from "@/components/sections/tech-stack"
import { ServicesSection } from "@/components/sections/services"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import GithubContributions from "@/components/sections/github-contributions"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechStackSection />
      <GithubContributions />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </main>
  )
}
