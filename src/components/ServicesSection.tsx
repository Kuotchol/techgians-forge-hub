import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Zap, Globe, Users2, BookOpen, Briefcase } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Development Projects",
      description: "Collaborative coding initiatives spanning web, mobile, AI, and emerging technologies.",
      color: "tech-blue"
    },
    {
      icon: Zap,
      title: "Innovation Labs",
      description: "Rapid prototyping sessions where ideas transform into working solutions in record time.",
      color: "tech-purple"
    },
    {
      icon: Globe,
      title: "Tech Talks & Workshops",
      description: "Expert-led sessions on cutting-edge technologies, industry trends, and career guidance.",
      color: "tech-cyan"
    },
    {
      icon: Users2,
      title: "Mentorship Network",
      description: "Connect with industry professionals and senior students for guidance and opportunities.",
      color: "tech-blue"
    },
    {
      icon: BookOpen,
      title: "Learning Circles",
      description: "Peer-to-peer learning groups for mastering new technologies and frameworks.",
      color: "tech-purple"
    },
    {
      icon: Briefcase,
      title: "Startup Incubation",
      description: "Support system for student entrepreneurs ready to launch their tech ventures.",
      color: "tech-cyan"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-secondary bg-clip-text text-transparent">
            Innovation Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've grown beyond discussions to offer comprehensive support for tech students 
            at every stage of their journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-all duration-300 shadow-card group hover:scale-105"
            >
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow`}>
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};