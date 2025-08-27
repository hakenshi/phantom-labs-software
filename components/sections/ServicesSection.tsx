import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Websites and web applications built with React, Next.js, and TypeScript.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User interface and experience design focused on usability and functionality.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android applications using React Native and native development.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Code optimization, caching strategies, and performance monitoring.",
  },
]


interface ServicesSectionProps {
  id?: string
}

export default function ServicesSection({id} : ServicesSectionProps) {
  return (
    <section id={id} className="relative z-10 py-20 bg-gray/10 border-gray-900 backdrop-blur-sm">
      <div className="container mx-auto px-6 space-y-20">
        <div className="text-center space-y-6">
          <h3 className="text-4xl font-bold text-center text-white">
            Our <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Services</span>
          </h3>
          <p className="text-white/60">What we do for clients</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
          <Card key={index} className="border-gray-800/50 hover:border-gray-700/50 transition-colors group bg-gradient-to-t from-gray-800/90 to-transparent flex">
            <CardHeader>
              <div className="h-12 w-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                <service.icon className="h-6 w-6 text-sky-500" />
              </div>
              <CardTitle className="text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="h-15">
              <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  )
}