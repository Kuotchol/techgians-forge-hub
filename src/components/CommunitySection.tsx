import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const CommunitySection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    interests: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.university) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Welcome to TechGiants! 🚀",
      description: "Thank you for joining our community. We'll be in touch soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', university: '', interests: '' });
  };

  const handleSocialClick = (platform: string) => {
    toast({
      title: `${platform} Coming Soon!`,
      description: "Our social media links will be available shortly.",
    });
  };
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of something bigger? Connect with like-minded tech enthusiasts 
            and start building the future today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-gradient-hero border-border shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Why Join TechGiants?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-tech-blue rounded-full mr-3"></span>
                    Access to exclusive workshops and tech talks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-tech-purple rounded-full mr-3"></span>
                    Collaborative projects with real-world impact
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></span>
                    Networking with industry professionals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-tech-blue rounded-full mr-3"></span>
                    Mentorship and career guidance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-tech-purple rounded-full mr-3"></span>
                    Startup incubation support
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="flex items-center justify-center border-tech-blue hover:bg-tech-blue/10"
                onClick={() => handleSocialClick('GitHub')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center border-tech-purple hover:bg-tech-purple/10"
                onClick={() => handleSocialClick('LinkedIn')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          <div id="contact" className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="text-2xl font-semibold mb-6">Get Started Today</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
              <div>
                <label htmlFor="university" className="block text-sm font-medium mb-2">University/School *</label>
                <input
                  type="text"
                  id="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Your educational institution"
                  required
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium mb-2">Tech Interests</label>
                <textarea
                  id="interests"
                  rows={3}
                  value={formData.interests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="What areas of technology interest you most?"
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                <Mail className="w-5 h-5 mr-2" />
                Join TechGiants
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};