import { personalInfo, aboutData } from "@/lib/data"
import { MapPin, Mail, User } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header & Image */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-mono text-sm">ABOUT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Crafting Digital Experiences</h2>
            </div>

            {/* About Image Placeholder */}
            <div className="aspect-[4/3] bg-secondary rounded-lg border border-border overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                <Image 
                  src="/RajPatelAbout.jpg"
                  alt="About Raj Patel"
                  className="w-full h-full object-cover"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Experience Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg">
              <span className="text-3xl font-bold text-primary">{aboutData.yearsExperience}</span>
              <span className="text-sm text-muted-foreground">
                Years of
                <br />
                Experience
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-primary" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User size={16} className="text-primary" />
                <span className="text-muted-foreground font-mono">@{personalInfo.username}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
