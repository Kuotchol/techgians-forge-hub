import { Card, CardContent } from "@/components/ui/card";
import { Calendar, TrendingUp, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What started as casual tech discussions has evolved into a dynamic ecosystem 
            of innovation, collaboration, and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card border-border hover:border-tech-blue transition-all duration-300 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Founded in 2023</h3>
              <p className="text-muted-foreground">
                Born from the passion of tech students who wanted to create a space 
                for meaningful discussions and collaborative learning.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border hover:border-tech-purple transition-all duration-300 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Rapid Growth</h3>
              <p className="text-muted-foreground">
                From a small discussion group to a thriving community of innovators, 
                makers, and future tech leaders across multiple disciplines.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border hover:border-tech-cyan transition-all duration-300 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Beyond Discussions</h3>
              <p className="text-muted-foreground">
                Today we're building real solutions, launching startups, and creating 
                opportunities that extend far beyond the classroom.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};