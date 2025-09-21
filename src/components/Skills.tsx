import { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import php from '../assets/images/php.png';
import mui from '../assets/images/mui.png';

import git from '../assets/images/git.png';
import html from '../assets/images/html.png';
import next from '../assets/images/next.png';
import jest from '../assets/images/jest.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/node.png';
import mysql from '../assets/images/mysql.png';
import redux from '../assets/images/redux.png';
import github from '../assets/images/github.png';
import typescript from '../assets/images/ts.png';
import python from '../assets/images/python.png';
import vitest from '../assets/images/vitest.png';
import postman from '../assets/images/postman.png';
import angular from '../assets/images/angular.png';
import mongodb from '../assets/images/mongodb.png';
import graphql from '../assets/images/graphql.png';
import express from '../assets/images/express.png';
import fastAPI from '../assets/images/fastapi.png';
import laravel from '../assets/images/laravel.png';
import tailwind from '../assets/images/tailwind.png';
import firebase from '../assets/images/firebase.png';
import sequelize from '../assets/images/sequelize.png';
import postgreSQL from '../assets/images/postgres.png';
import playwright from '../assets/images/playwright.svg';
import androidStudio from '../assets/images/android-studio.png';
import reactTestingLibrary from '../assets/images/react-testing-library.png';

import sleeksky from '../assets/organizations/sleeksky.svg';
import exxat from '../assets/organizations/exxat.svg';
import techdome from '../assets/organizations/techdome.svg';
import numadic from '../assets/organizations/numadic.svg';
import cibirix from '../assets/organizations/cibirix.svg';
import sensei from '../assets/organizations/sensei.svg';

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
        { name: 'Next.js', level: 95, icon: next },
        { name: 'React.js', level: 95, icon: react },
        { name: 'Redux/RTK', level: 88, icon: redux },
        { name: 'Angular', level: 80, icon: angular },
        { name: 'TypeScript/Javascript', level: 95, icon: typescript },
        { name: 'HTML5/CSS3', level: 95, icon: html },
        { name: 'Tailwind CSS', level: 88, icon: tailwind },
        { name: 'Material UI', level: 88, icon: mui },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90, icon: nodejs },
        { name: 'Express.js', level: 88, icon: express },
        { name: 'Python', level: 85, icon: python },
        { name: 'Fast API', level: 92, icon: fastAPI },
        { name: 'PHP', level: 92, icon: php },
        { name: 'Laravel', level: 92, icon: laravel },
        { name: 'GraphQL', level: 80, icon: graphql },
        { name: 'Sequelize', level: 80, icon: sequelize },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 90, icon: mongodb },
        { name: 'MySQL', level: 85, icon: mysql },
        { name: 'PostgreSQL', level: 82, icon: postgreSQL },
        { name: 'Firebase', level: 70, icon: firebase },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      skills: [
        { name: 'Git', level: 92, icon: git },
        { name: 'GitHub', level: 80, icon: github },
        { name: 'Jest/Testing', level: 85, icon: jest },
        { name: 'Vitest', level: 82, icon: vitest },
        { name: 'React Testing Library', level: 80, icon: reactTestingLibrary },
        { name: 'Playwright', level: 80, icon: playwright },
        { name: 'postman', level: 85, icon: postman },
        { name: 'Android Studio', level: 80, icon: androidStudio },
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
                          <span className='text-lg '>
                            <img src={skill.icon} alt='React' className='w-6' />
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
          <div className='mt-16 text-center '>
            <h3 className='text-xl font-semibold mb-8'>
              Organizations I Work With
            </h3>
            <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
              {[
                { icon: sleeksky, className: 'h-6' },
                { icon: exxat, className: 'h-6' },
                { icon: techdome, className: 'h-6' },
                { icon: numadic, className: 'h-8' },
                { icon: cibirix, className: 'h-8' },
                { icon: sensei, className: 'h-8' },
              ].map((org, index) => (
                <div
                  key={index}
                  className={`text-4xl tech-icon transition-all duration-300 ${
                    isVisible ? 'animate-bounce-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <img src={org.icon} alt='React' className={org.className} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
