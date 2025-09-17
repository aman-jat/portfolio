import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Fade,
  Grow,
  useTheme,
} from '@mui/material';
import {
  DataObject,
  Web,
  Storage,
  DeviceHub,
  Cloud,
  Security,
} from '@mui/icons-material';

const MUISkills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const theme = useTheme();

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
      icon: <Web sx={{ fontSize: 40 }} />,
      color: '#007AFF',
      skills: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Material-UI'],
    },
    {
      title: 'Backend Development',
      icon: <DataObject sx={{ fontSize: 40 }} />,
      color: '#5856D6',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL', 'JWT', 'OAuth'],
    },
    {
      title: 'Database & Storage',
      icon: <Storage sx={{ fontSize: 40 }} />,
      color: '#34C759',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase', 'AWS S3', 'Cloudinary'],
    },
    {
      title: 'DevOps & Tools',
      icon: <DeviceHub sx={{ fontSize: 40 }} />,
      color: '#FF9500',
      skills: ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Postman'],
    },
    {
      title: 'Cloud Services',
      icon: <Cloud sx={{ fontSize: 40 }} />,
      color: '#FF3B30',
      skills: ['AWS', 'Heroku', 'Netlify', 'Vercel', 'Firebase Hosting', 'Google Cloud'],
    },
    {
      title: 'Security & Best Practices',
      icon: <Security sx={{ fontSize: 40 }} />,
      color: '#AF52DE',
      skills: ['HTTPS', 'CORS', 'XSS Protection', 'SQL Injection Prevention', 'Data Encryption', 'Code Review'],
    },
  ];

  return (
    <Box
      id="skills"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(28, 28, 30, 0.8) 50%, rgba(0, 0, 0, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(242, 242, 247, 0.8) 50%, rgba(255, 255, 255, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1))',
          borderRadius: '50%',
          filter: 'blur(20px)',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-30px) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(52, 199, 89, 0.1), rgba(255, 149, 0, 0.1))',
          borderRadius: '50%',
          filter: 'blur(15px)',
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg">
        <Fade in={isVisible} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                mb: 2,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Technical Skills
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Technologies I Master
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              A comprehensive toolkit of modern technologies for building exceptional web applications
            </Typography>
          </Box>
        </Fade>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
          {skillCategories.map((category, index) => (
            <Box key={category.title}>
              <Grow
                in={isVisible}
                timeout={1000 + index * 200}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(28, 28, 30, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.08)',
                    borderRadius: 4,
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? `0 25px 50px rgba(0, 0, 0, 0.5)`
                        : `0 25px 50px rgba(0, 0, 0, 0.15)`,
                      borderColor: category.color,
                      '& .category-icon': {
                        transform: 'scale(1.2) rotate(10deg)',
                        color: category.color,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        gap: 2,
                      }}
                    >
                      <Box
                        className="category-icon"
                        sx={{
                          color: category.color,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '1.25rem',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1.5,
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            backgroundColor: `${category.color}15`,
                            color: category.color,
                            border: `1px solid ${category.color}30`,
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            transition: 'all 0.3s ease',
                            animation: `slideIn 0.5s ease-out ${skillIndex * 0.1}s both`,
                            '&:hover': {
                              backgroundColor: `${category.color}25`,
                              transform: 'scale(1.05) translateY(-2px)',
                              boxShadow: `0 4px 12px ${category.color}40`,
                            },
                            '@keyframes slideIn': {
                              from: {
                                opacity: 0,
                                transform: 'translateY(10px)',
                              },
                              to: {
                                opacity: 1,
                                transform: 'translateY(0)',
                              },
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grow>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MUISkills;