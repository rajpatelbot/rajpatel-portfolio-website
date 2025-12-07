import { experienceData } from "@/lib/data"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono text-sm">EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Professional Journey</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 -translate-y-1 border-4 border-background" />

                {/* Left Content (Date) */}
                <div className="hidden md:flex justify-end pr-8">
                  <div className="text-right">
                    <span className="text-primary font-mono text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Right Content (Details) */}
                <div className="ml-8 md:ml-0 md:pl-8">
                  <div className="bg-secondary p-6 rounded-lg border border-border">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <span className="text-muted-foreground text-xs font-mono md:hidden">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
