import { useEffect, useRef, useState } from 'react';
import { Code, Database, Server, Settings } from 'lucide-react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, LinearProgress } from '@mui/material';

import php from '../../assets/images/php.png';
import mui from '../../assets/images/material-ui.png';
import git from '../../assets/images/git.png';
import html from '../../assets/images/html.png';
import next from '../../assets/images/next.png';
import jest from '../../assets/images/jest.png';
import react from '../../assets/images/react.png';
import nodejs from '../../assets/images/node.png';
import mysql from '../../assets/images/mysql.png';
import redux from '../../assets/images/redux.png';
import github from '../../assets/images/github.png';
import typescript from '../../assets/images/ts.png';
import python from '../../assets/images/python.png';
import vitest from '../../assets/images/vitest.png';
import postman from '../../assets/images/postman.png';
import angular from '../../assets/images/angular.png';
import mongodb from '../../assets/images/mongodb.png';
import graphql from '../../assets/images/graphql.png';
import express from '../../assets/images/express.png';
import fastAPI from '../../assets/images/fastapi.png';
import laravel from '../../assets/images/laravel.png';
import tailwind from '../../assets/images/tailwind.png';
import firebase from '../../assets/images/firebase.png';
import sequelize from '../../assets/images/sequelize.png';
import postgreSQL from '../../assets/images/postgres.png';
import playwright from '../../assets/images/playwright.svg';
import androidStudio from '../../assets/images/android-studio.png';
import reactTestingLibrary from '../../assets/images/react-testing-library.png';

import sleeksky from '../../assets/organizations/sleeksky.svg';
import exxat from '../../assets/organizations/exxat.svg';
import techdome from '../../assets/organizations/techdome.svg';
import numadic from '../../assets/organizations/numadic.svg';
import cibirix from '../../assets/organizations/cibirix.svg';
import sensei from '../../assets/organizations/sensei.svg';

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
      { name: 'Material UI', level: 88, icon: mui }
    ]
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
      { name: 'Sequelize', level: 80, icon: sequelize }
    ]
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 90, icon: mongodb },
      { name: 'MySQL', level: 85, icon: mysql },
      { name: 'PostgreSQL', level: 82, icon: postgreSQL },
      { name: 'Firebase', level: 70, icon: firebase }
    ]
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
      { name: 'Postman', level: 85, icon: postman },
      { name: 'Android Studio', level: 80, icon: androidStudio }
    ]
  }
];

const organizations = [
  { icon: sleeksky, height: 24 },
  { icon: exxat, height: 24 },
  { icon: techdome, height: 24 },
  { icon: numadic, height: 32 },
  { icon: cibirix, height: 32 },
  { icon: sensei, height: 32 }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" id="skills" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box
          sx={{
            maxWidth: '80rem',
            mx: 'auto',
            transition: 'opacity 1s ease, transform 1s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          {/* Section Header */}
          <Stack alignItems="center" spacing={2} mb={8}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' }
              }}
            >
              Technical{' '}
              <Box component="span" className="text-gradient">
                Skills
              </Box>
            </Typography>
            <Box className="hero-gradient" sx={{ width: 96, height: 4, borderRadius: 9999 }} />
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '48rem',
                textAlign: 'center',
                fontSize: { xs: '0.875rem', md: '1.125rem' }
              }}
            >
              Here are the technologies and tools I use to bring ideas to life.
            </Typography>
          </Stack>

          {/* Skills Grid */}
          <Grid container spacing={4}>
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Grid key={categoryIndex} size={{ xs: 12, md: 6, xl: 3 }}>
                  <Card
                    className={`card-gradient hover-lift ${isVisible ? 'animate-slide-up' : ''}`}
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                    sx={{
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      height: '100%'
                    }}
                  >
                    {/* Card Header */}
                    <Stack alignItems="center" pt={3} pb={2} px={2}>
                      <Box
                        className="hero-gradient"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 1.5
                        }}
                      >
                        <Icon size={24} color="white" />
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {category.title}
                      </Typography>
                    </Stack>

                    <CardContent sx={{ pt: 0 }}>
                      <Stack spacing={1.5}>
                        {category.skills.map((skill, skillIndex) => (
                          <Box
                            key={skillIndex}
                            sx={{
                              transition: 'opacity 0.5s ease, transform 0.5s ease',
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
                              transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                            }}
                          >
                            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={0.5}>
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <Box
                                  component="img"
                                  src={skill.icon}
                                  alt={skill.name}
                                  sx={{
                                    width: 20,
                                    height: 20,
                                    objectFit: 'contain'
                                  }}
                                />
                                <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
                                  {skill.name}
                                </Typography>
                              </Stack>
                              <Typography variant="caption" color="text.secondary">
                                {skill.level}%
                              </Typography>
                            </Stack>
                            <LinearProgress
                              variant="determinate"
                              value={isVisible ? skill.level : 0}
                              className="hero-gradient"
                              sx={{
                                height: 6,
                                borderRadius: 9999,
                                bgcolor: 'action.hover',
                                transition: 'all 1s ease-out',
                                transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`,
                                '& .MuiLinearProgress-bar': {
                                  borderRadius: 9999,
                                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                  transition: 'transform 1s ease-out'
                                }
                              }}
                            />
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Organizations */}
          <Box mt={10} textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 4 }}>
              Organizations I Work With
            </Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" alignItems="center" gap={4} sx={{ opacity: 0.6 }}>
              {organizations.map((org, index) => (
                <Box
                  key={index}
                  className={`tech-icon ${isVisible ? 'animate-bounce-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Box component="img" src={org.icon} alt="organization" sx={{ height: org.height, objectFit: 'contain' }} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
