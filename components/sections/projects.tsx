import { projects } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono text-sm">PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of projects that demonstrate my expertise in building scalable, user-centric applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-secondary border-border hover:border-primary/30 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-4">
                      <div>
                        <p className="text-primary text-sm font-mono mb-1">{project.subtitle}</p>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
                          >
                            {project.title}
                            <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 cursor-default">
                            {project.title}
                          </span>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono bg-background text-foreground rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        {project.features.map((feature) => (
                          <span key={feature} className="flex items-center gap-1">
                            <span className="text-primary">•</span>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
