import { services } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Layers, Smartphone, Cloud } from "lucide-react"

const iconMap = {
  layout: Layout,
  layers: Layers,
  smartphone: Smartphone,
  cloud: Cloud,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-mono text-sm">SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl">
            Comprehensive development services tailored to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <Card
                key={service.shortCode}
                className="bg-secondary border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xs font-mono text-primary/60">{service.shortCode}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
