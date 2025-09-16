import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Fade,
  Grow,
  useTheme,
  IconButton,
} from '@mui/material';
import {
  Launch,
  Code,
  ArrowForward,
} from '@mui/icons-material';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';

const MUIProjects: React.FC = () => {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with MERN stack featuring real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      image: project1,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Socket.io'],
      liveUrl: '#',
      codeUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features built with MEAN stack.',
      image: project2,
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Socket.io'],
      liveUrl: '#',
      codeUrl: '#',
      featured: false,
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration capabilities.',
      image: project3,
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'REST API'],
      liveUrl: '#',
      codeUrl: '#',
      featured: true,
    },
  ];

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(28, 28, 30, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(242, 242, 247, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '250px',
          height: '250px',
          background: 'linear-gradient(45deg, rgba(0, 122, 255, 0.08), rgba(88, 86, 214, 0.08))',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'pulse 6s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.2)' },
          },
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
              Portfolio
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
              Featured Projects
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
              Showcasing innovative solutions and creative problem-solving through code
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={project.featured ? 12 : 6} key={project.title}>
              <Grow
                in={isVisible}
                timeout={1200 + index * 300}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: project.featured ? { xs: 'column', md: 'row' } : 'column',
                    background: theme.palette.mode === 'dark'
                      ? 'rgba(28, 28, 30, 0.6)'
                      : 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.08)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 30px 60px rgba(0, 0, 0, 0.5)'
                        : '0 30px 60px rgba(0, 0, 0, 0.15)',
                      borderColor: 'primary.main',
                      '& .project-image': {
                        transform: 'scale(1.1)',
                      },
                      '& .project-tech-chip': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: project.featured ? { xs: '100%', md: '50%' } : '100%',
                      height: project.featured ? { xs: 300, md: 400 } : 250,
                      objectFit: 'cover',
                      transition: 'all 0.5s ease',
                    }}
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  
                  <CardContent
                    sx={{
                      flex: 1,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                        }}
                      >
                        {project.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 3,
                          color: 'text.secondary',
                          fontSize: '1.1rem',
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ mb: 4 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            mb: 2,
                            color: 'text.primary',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}
                        >
                          Technologies Used
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ flexWrap: 'wrap', gap: 1 }}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <Chip
                              key={tech}
                              label={tech}
                              className="project-tech-chip"
                              sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                                transition: 'all 0.3s ease',
                                animation: `slideUp 0.5s ease-out ${techIndex * 0.1}s both`,
                                '&:hover': {
                                  backgroundColor: 'primary.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 4px 12px rgba(0, 122, 255, 0.4)',
                                },
                                '@keyframes slideUp': {
                                  from: {
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                  },
                                  to: {
                                    opacity: 1,
                                    transform: 'translateY(0)',
                                  },
                                },
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                    
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveUrl}
                        target="_blank"
                        sx={{
                          borderRadius: 3,
                          px: 3,
                          py: 1.5,
                          background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                            transform: 'translateY(-2px) scale(1.05)',
                            boxShadow: '0 8px 25px rgba(0, 122, 255, 0.4)',
                          },
                        }}
                      >
                        Live Demo
                      </Button>
                      <IconButton
                        href={project.codeUrl}
                        target="_blank"
                        sx={{
                          color: 'text.secondary',
                          border: '2px solid',
                          borderColor: 'divider',
                          borderRadius: 2,
                          p: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: 'primary.main',
                            borderColor: 'primary.main',
                            transform: 'scale(1.1) rotate(5deg)',
                            boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                          },
                        }}
                      >
                        <Code />
                      </IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Fade in={isVisible} timeout={2000}>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px) scale(1.05)',
                  boxShadow: '0 8px 25px rgba(0, 122, 255, 0.25)',
                },
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default MUIProjects;