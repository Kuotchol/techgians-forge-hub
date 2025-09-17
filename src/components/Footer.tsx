import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform: string) => {
    toast({
      title: `${platform} Coming Soon!`,
      description: "Follow us for updates on our social media launch.",
    });
  };

  const handleNavClick = (section: string) => {
    scrollToSection(section);
  };
  return (
    <footer className="bg-darker-surface border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">TG</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TechGiants
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              From a discussion group in 2023 to an innovation hub today. 
              Where tech students unite, innovate, and shape the future together.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('GitHub')}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Email')}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Discord')}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-tech-blue/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Innovation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('community')} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Join Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => toast({ title: "Projects Page", description: "Coming soon! Stay tuned for our project showcase." })} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toast({ title: "Workshops", description: "Workshop schedule will be available soon!" })} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Workshops
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toast({ title: "Mentorship", description: "Mentorship program launching soon!" })} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Mentorship
                </button>
              </li>
              <li>
                <button 
                  onClick={() => toast({ title: "Blog", description: "Our tech blog is coming soon with exciting content!" })} 
                  className="hover:text-foreground transition-colors text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TechGiants. Building the future, one innovation at a time.</p>
        </div>
      </div>
    </footer>
  );
};