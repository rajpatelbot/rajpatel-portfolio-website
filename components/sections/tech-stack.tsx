import { techStack } from "@/lib/data"

const categories = [
  { title: "Languages", items: techStack.languages, color: "from-primary/20 to-primary/5" },
  { title: "Frontend", items: techStack.frontend, color: "from-primary/15 to-primary/5" },
  { title: "Backend / Full Stack", items: techStack.backend, color: "from-primary/10 to-primary/5" },
  { title: "Other Expertise", items: techStack.other, color: "from-primary/5 to-transparent" },
]

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono text-sm">TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive toolkit of modern technologies I use to build exceptional digital products.
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-sm font-mono text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="group px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    <span className="font-medium text-sm group-hover:text-primary transition-colors">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
