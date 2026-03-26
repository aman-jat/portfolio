import { useEffect, useRef, useState } from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: '6+ Years Experience',
      description: 'Professional development in modern web technologies',
    },
    {
      icon: Users,
      title: 'Collaborative Team Player',
      description: 'Experience working in agile development environments',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description:
        'Passionate about finding elegant solutions to complex challenges',
    },
    {
      icon: Coffee,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices',
    },
  ];

  return (
    <section id='about' ref={sectionRef} className='px-2 py-16 bg-accent/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }
          space-y-4 md:space-y-8
          `}>
          {/* Section Header */}
          <div className='text-center space-y-4 md:space-y-8'>
            <h2 className='text-3xl lg:text-5xl font-bold '>
              About <span className='text-gradient'>Me</span>
            </h2>
            <div className='w-24 h-1 hero-gradient mx-auto rounded-full mb-8'></div>
            <p className='text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto'>
              I'm a passionate full-stack developer who loves turning ideas into
              reality through clean, efficient code and beautiful user
              interfaces.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            {/* Content */}
            <div className='space-y-4 md:space-y-6'>
              <h3 className='text-2xl font-semibold'>My Journey</h3>
              <p className='text-sm md:text-lg text-muted-foreground leading-relaxed'>
                With over 5 years of experience in software development, I've
                had the privilege of working on diverse projects ranging from
                e-commerce platforms to complex dashboard applications. My
                expertise spans the full development stack, with a particular
                focus on frontend technologies.
              </p>
              <p className='text-sm md:text-lg text-muted-foreground leading-relaxed'>
                I specialize in the MERN and MEAN stack, creating responsive,
                user-friendly applications that provide exceptional user
                experiences. My approach combines technical expertise with
                creative problem-solving to deliver solutions that meet both
                user needs and business objectives.
              </p>
              <p className='text-sm md:text-lg text-muted-foreground leading-relaxed'>
                <i>
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </i>
              </p>
            </div>

            {/* Highlights Grid */}
            <div className='grid sm:grid-cols-2 gap-6'>
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className={`card-gradient border-0 shadow-soft hover-lift transition-all duration-300 ${
                    isVisible ? 'animate-scale-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className='p-6 text-center'>
                    <div className='hero-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <highlight.icon className='w-6 h-6 text-white' />
                    </div>
                    <h4 className='font-semibold mb-2'>{highlight.title}</h4>
                    <p className='text-sm text-muted-foreground'>
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
