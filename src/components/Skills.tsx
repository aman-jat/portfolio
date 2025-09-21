import { useEffect, useRef, useState } from 'react';
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Settings,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import react from '../assets/images/react.png';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 95, icon: react },
        { name: 'Angular', level: 90, icon: '🅰️' },
        { name: 'TypeScript', level: 92, icon: '📘' },
        { name: 'JavaScript', level: 95, icon: '🟨' },
        { name: 'HTML5/CSS3', level: 95, icon: '🎨' },
        { name: 'Tailwind CSS', level: 88, icon: '💨' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90, icon: '💚' },
        { name: 'Express.js', level: 88, icon: '🚄' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'REST APIs', level: 92, icon: '📡' },
        { name: 'GraphQL', level: 80, icon: '⚡' },
        { name: 'Socket.io', level: 82, icon: '🔌' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'Redis', level: 75, icon: '🔴' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      skills: [
        { name: 'Git/GitHub', level: 92, icon: '📦' },
        { name: 'Docker', level: 80, icon: '🐳' },
        { name: 'Jest/Testing', level: 85, icon: '🧪' },
        { name: 'Webpack', level: 82, icon: '📦' },
        { name: 'Figma', level: 85, icon: '🎨' },
        { name: 'Agile/Scrum', level: 90, icon: '🏃' },
      ],
    },
  ];

  return (
    <section id='skills' ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
              Technical <span className='text-gradient'>Skills</span>
            </h2>
            <div className='w-24 h-1 hero-gradient mx-auto rounded-full mb-8'></div>
            <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
              Here are the technologies and tools I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`card-gradient border-0 shadow-soft hover-lift transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <CardHeader className='text-center pb-4'>
                  <div className='hero-gradient w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <category.icon className='w-6 h-6 text-white' />
                  </div>
                  <CardTitle className='text-lg'>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`transition-all duration-500 ${
                        isVisible
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 translate-x-4'
                      }`}
                      style={{
                        animationDelay: `${
                          categoryIndex * 0.1 + skillIndex * 0.05
                        }s`,
                      }}>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center space-x-2'>
                          <span className='text-lg'>
                            <img
                              src={skill.icon}
                              alt='React'
                              className='w-6 h-6'
                            />
                          </span>
                          <span className='text-sm font-medium'>
                            {skill.name}
                          </span>
                        </div>
                        <span className='text-xs text-muted-foreground'>
                          {skill.level}%
                        </span>
                      </div>
                      <div className='w-full bg-muted rounded-full h-2'>
                        <div
                          className='hero-gradient h-2 rounded-full transition-all duration-1000 ease-out'
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${
                              categoryIndex * 0.1 + skillIndex * 0.05
                            }s`,
                          }}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Tech Stack Icons */}
          <div className='mt-16 text-center'>
            <h3 className='text-xl font-semibold mb-8'>
              Technologies I Work With
            </h3>
            <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
              {['⚛️', '🅰️', '💚', '🐍', '🍃', '🔥', '☁️', '🐳', '📦', '🎨'].map(
                (icon, index) => (
                  <div
                    key={index}
                    className={`text-4xl tech-icon transition-all duration-300 ${
                      isVisible ? 'animate-bounce-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    {icon}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
