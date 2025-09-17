import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Fade,
  Grow,
  useTheme,
} from '@mui/material';
import {
  Code,
  Speed,
  Group,
  EmojiObjects,
  TrendingUp,
  Security,
} from '@mui/icons-material';

const MUIAbout: React.FC = () => {
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

  const highlights = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code following industry best practices.',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency with modern development techniques.',
    },
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills in agile environments.',
    },
    {
      icon: <EmojiObjects sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and finding creative solutions to complex problems.',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      title: 'Growth',
      description: 'Continuously learning and adapting to stay current with emerging technologies.',
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: 'Security',
      description: 'Implementing secure coding practices and ensuring data protection in all applications.',
    },
  ];

  return (
    <Box
      id="about"
      ref={sectionRef}
      sx={{
        py: { xs: 8, md: 12 },
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(28, 28, 30, 0.7) 50%, rgba(0, 0, 0, 0.9) 100%)'
          : 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(242, 242, 247, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)',
        position: 'relative',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(0, 122, 255, 0.05), rgba(88, 86, 214, 0.05))',
          borderRadius: '50%',
          filter: 'blur(20px)',
          animation: 'pulse 4s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
            '50%': { opacity: 0.8, transform: 'scale(1.2)' },
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
              About Me
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
              Crafting Digital Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Passionate about creating seamless user experiences through innovative web solutions
            </Typography>
          </Box>
        </Fade>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} sx={{ alignItems: 'flex-start' }}>
          {/* Journey Section */}
          <Box sx={{ flex: 1 }}>
            <Fade in={isVisible} timeout={1200}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  My Journey
                </Typography>
                <Box sx={{ space: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    }}
                  >
                    With 5 years of hands-on experience in full-stack development, I've had the 
                    privilege of working on diverse projects that have shaped my expertise in 
                    both MERN and MEAN stack technologies. My journey began with a curiosity 
                    for creating interactive web experiences, which evolved into a passion for 
                    building scalable, user-centric applications.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    }}
                  >
                    I believe in the power of clean, maintainable code and the importance of 
                    staying current with emerging technologies. Whether it's optimizing 
                    performance, implementing responsive designs, or ensuring accessibility, 
                    I approach every project with attention to detail and a commitment to excellence.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                    }}
                  >
                    When I'm not coding, you'll find me exploring new frameworks, contributing 
                    to open-source projects, or mentoring aspiring developers. I'm always eager 
                    to take on new challenges and collaborate with teams that share my passion 
                    for innovation.
                  </Typography>
                </Box>
              </Box>
            </Fade>
          </Box>

          {/* Highlights Grid */}
          <Box sx={{ flex: 1 }}>
            <Fade in={isVisible} timeout={1500}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                What I Bring
              </Typography>
            </Fade>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                gap: 3 
              }}
            >
              {highlights.map((highlight, index) => (
                <Grow
                  key={highlight.title}
                  in={isVisible}
                  timeout={1800 + index * 200}
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
                      borderRadius: 3,
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 20px 40px rgba(0, 0, 0, 0.4)'
                          : '0 20px 40px rgba(0, 0, 0, 0.15)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box
                        sx={{
                          color: 'primary.main',
                          mb: 2,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1) rotate(5deg)',
                          },
                        }}
                      >
                        {highlight.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1.5,
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {highlight.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default MUIAbout;