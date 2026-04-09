import { useEffect, useRef, useState } from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';

const highlights = [
  {
    icon: Code,
    title: '6+ Years Experience',
    description: 'Professional development in modern web technologies'
  },
  {
    icon: Users,
    title: 'Collaborative Team Player',
    description: 'Experience working in agile development environments'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Passionate about finding elegant solutions to complex challenges'
  },
  {
    icon: Coffee,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices'
  }
];

const About = () => {
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
    <Box component="section" id="about" ref={sectionRef} sx={{ px: 1, py: 8, bgcolor: 'rgba(0,0,0,0.03)' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box
          sx={{
            maxWidth: '72rem',
            mx: 'auto',
            transition: 'opacity 1s ease, transform 1s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          {/* Section Header */}
          <Stack alignItems="center" spacing={{ xs: 2, md: 3 }} mb={{ xs: 4, md: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 700, fontSize: { xs: '1.875rem', lg: '3rem' } }}>
              About{' '}
              <Box component="span" className="text-gradient">
                Me
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
              I'm a passionate full-stack developer who loves turning ideas into reality through clean, efficient code and beautiful user
              interfaces.
            </Typography>
          </Stack>

          {/* Content + Highlights */}
          <Grid container spacing={6} alignItems="center">
            {/* Journey Text */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  My Journey
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.875rem', md: '1.125rem' }
                  }}
                >
                  With over 5 years of experience in software development, I've had the privilege of working on diverse projects ranging
                  from e-commerce platforms to complex dashboard applications. My expertise spans the full development stack, with a
                  particular focus on frontend technologies.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.875rem', md: '1.125rem' }
                  }}
                >
                  I specialize in the MERN and MEAN stack, creating responsive, user-friendly applications that provide exceptional user
                  experiences. My approach combines technical expertise with creative problem-solving to deliver solutions that meet both
                  user needs and business objectives.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    fontSize: { xs: '0.875rem', md: '1.125rem' }
                  }}
                >
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </Typography>
              </Stack>
            </Grid>

            {/* Highlights Grid */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={3}>
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <Grid key={index} size={{ xs: 12, sm: 6 }}>
                      <Card
                        className={`card-gradient hover-lift ${isVisible ? 'animate-scale-in' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        sx={{
                          border: 'none',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                          transition: 'all 0.3s ease',
                          height: '100%'
                        }}
                      >
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                          <Box
                            className="hero-gradient"
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mx: 'auto',
                              mb: 2
                            }}
                          >
                            <Icon size={24} color="white" />
                          </Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                            {highlight.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {highlight.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
