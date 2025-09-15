import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Introduction */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl text-white/90 font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
              Aman Jat
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gradient mb-6 animate-slide-up">
              Full-Stack Developer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Passionate software engineer with 5+ years of experience in MERN and MEAN stack development. 
            I specialize in creating responsive web applications with clean, modern designs and exceptional user experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="hero-gradient text-white font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-white text-grey hover:bg-white hover:text-foreground hover-glow px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-scale-in">
            <a
              href="https://github.com/aman-jat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hero-secondary transition-colors duration-300 tech-icon"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/amanjat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-hero-secondary transition-colors duration-300 tech-icon"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:amanjat261@gmail.com"
              className="text-white hover:text-hero-secondary transition-colors duration-300 tech-icon"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-hero-secondary transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-project-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;