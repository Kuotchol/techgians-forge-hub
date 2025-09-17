import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb, Rocket } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to TechGiants
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From a humble discussion group in 2023 to a thriving innovation hub. 
            Where tech students unite, innovate, and shape the future together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3">
              Join Our Community
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-tech-blue hover:bg-tech-blue/10">
              Explore Innovation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-muted-foreground">Building connections that last beyond university</p>
            </div>
            
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
              <p className="text-muted-foreground">Transforming ideas into real-world solutions</p>
            </div>
            
            <div className="flex flex-col items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Ready</h3>
              <p className="text-muted-foreground">Preparing tomorrow's tech leaders today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};