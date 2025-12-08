"use client"

import { Button } from "@/components/ui/button"
import { personalInfo, techStack } from "@/lib/data"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-wider">{"<Hello World />"}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-2xl text-primary font-medium">{personalInfo.title}</h2>
              <p className="text-muted-foreground font-mono text-sm">{personalInfo.subtitle}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">{personalInfo.tagline}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {(() => {
                const frontend = techStack.frontend;
                const backend = techStack.backend;
                const allTechs = [...frontend, ...backend];
                // Shuffle array
                for (let i = allTechs.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [allTechs[i], allTechs[j]] = [allTechs[j], allTechs[i]];
                }
                // Pick 6-7 unique from frontend+backend
                const count = Math.floor(Math.random() * 2) + 6; // 6 or 7
                const selectedTechs = Array.from(new Set(allTechs)).slice(0, count);
                // Always include languages
                const techs = [...techStack.languages, ...selectedTechs];
                const total = Math.floor(Math.random() * 2) + 8; // 8 or 9
                const uniqueTechs = Array.from(new Set(techs)).slice(0, total);
                return uniqueTechs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ));
              })()}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire Me
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 bg-transparent"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </Link>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    src="/RajPatel.png"
                    alt="Raj Patel"
                    className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-primary/40 shadow-lg"
                  />
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-primary/20 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
