import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Stack,
  Fade,
  Grow,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowDown,
  GetApp,
} from '@mui/icons-material';
import profilePhoto from '../assets/profile-photo.jpg';

const MUIHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    // Create a mock PDF download - in real app, you'd have an actual PDF file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual PDF URL
    link.download = 'Aman_Jat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Email />, url: 'mailto:aman@example.com', label: 'Email' },
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? `linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(28, 28, 30, 0.8) 50%, 
              rgba(0, 0, 0, 0.9) 100%),
             radial-gradient(circle at 30% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 70% 50%, rgba(88, 86, 214, 0.1) 0%, transparent 50%)`
          : `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.9) 0%, 
              rgba(242, 242, 247, 0.8) 50%, 
              rgba(255, 255, 255, 0.9) 100%),
             radial-gradient(circle at 30% 50%, rgba(0, 122, 255, 0.05) 0%, transparent 50%),
             radial-gradient(circle at 70% 50%, rgba(88, 86, 214, 0.05) 0%, transparent 50%)`,
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Animated background blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, rgba(0, 122, 255, 0.1), rgba(88, 86, 214, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(88, 86, 214, 0.1), rgba(0, 122, 255, 0.1))',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Profile Photo */}
          <Fade in={isVisible} timeout={1000}>
            <Box>
              <Avatar
                src={profilePhoto}
                alt="Aman Jat"
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: '4px solid',
                  borderColor: 'primary.main',
                  boxShadow: '0 20px 40px rgba(0, 122, 255, 0.3)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05) rotate(2deg)',
                    boxShadow: '0 30px 60px rgba(0, 122, 255, 0.4)',
                  },
                }}
              />
            </Box>
          </Fade>

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Fade in={isVisible} timeout={1200}>
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
                Hello, I'm
              </Typography>
            </Fade>

            <Grow in={isVisible} timeout={1500}>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  animation: 'glow 2s ease-in-out infinite alternate',
                  '@keyframes glow': {
                    from: { filter: 'drop-shadow(0 0 5px rgba(0, 122, 255, 0.3))' },
                    to: { filter: 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.6))' },
                  },
                }}
              >
                Aman Jat
              </Typography>
            </Grow>

            <Fade in={isVisible} timeout={1800}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Full-Stack Developer
              </Typography>
            </Fade>

            <Fade in={isVisible} timeout={2000}>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  maxWidth: '600px',
                }}
              >
                5 years of experience in MERN & MEAN stack with a focus on creating 
                beautiful, responsive, and user-friendly web applications. Passionate 
                about clean code and modern development practices.
              </Typography>
            </Fade>

            <Fade in={isVisible} timeout={2300}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 10px 30px rgba(0, 122, 255, 0.4)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GetApp />}
                  onClick={downloadResume}
                  sx={{
                    borderRadius: 3,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 10px 30px rgba(0, 122, 255, 0.2)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </Fade>

            {/* Social Links */}
            <Fade in={isVisible} timeout={2600}>
              <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      border: '2px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      p: 1.5,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        transform: 'translateY(-4px) scale(1.1) rotate(5deg)',
                        boxShadow: '0 8px 25px rgba(0, 122, 255, 0.25)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Fade>
          </Box>
        </Box>

        {/* Scroll Indicator */}
        <Fade in={isVisible} timeout={3000}>
          <Box
            sx={{
              position: 'absolute',
              bottom: 40,
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
            }}
          >
            <IconButton
              onClick={() => scrollToSection('about')}
              sx={{
                color: 'text.secondary',
                animation: 'bounce 2s infinite',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.2)',
                },
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                  '40%': { transform: 'translateY(-10px)' },
                  '60%': { transform: 'translateY(-5px)' },
                },
              }}
            >
              <KeyboardArrowDown sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default MUIHero;