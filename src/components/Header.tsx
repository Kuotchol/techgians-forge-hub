import { Button } from "@/components/ui/button";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">TG</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechGiants
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Innovation
            </button>
            <button 
              onClick={() => scrollToSection('community')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Community
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          
          <Button 
            variant="default" 
            className="bg-gradient-primary hover:opacity-90"
            onClick={() => scrollToSection('contact')}
          >
            Join Us
          </Button>
        </div>
      </div>
    </header>
  );
};