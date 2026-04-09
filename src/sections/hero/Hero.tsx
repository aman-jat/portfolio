import { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronDown, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aman from '../../assets/images/aman.png';
import { AIIcon, GithubIcon, LinkedInIcon } from '@/assets/icons/GithubIcon';
import RoleCarousel from '@/components/RoleCarousel';

const roles = [
  'Full-Stack Developer',
  'React Developer',
  'MERN Stack Developer',
  'AI Full Stack Developer',
  'Backend Developer',
  'Frontend Developer',
  'Software Engineer',
  'Web Developer',
  'Next.js Developer',
  'Node.js Developer'
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/amanjat/',
    label: 'LinkedIn',
    icon: <LinkedInIcon size={24} />
  },
  {
    href: 'https://github.com/aman-jat',
    label: 'GitHub',
    icon: <GithubIcon size={24} />
  },
  {
    href: 'mailto:amanjat261@gmail.com',
    label: 'Email',
    icon: <Mail size={24} />
  }
];

const descriptions = [
  'Passionate software engineer with 6+ years of experience',
  'Specialized in MERN and MEAN stack development',
  'Building responsive web apps with clean, modern designs',
  'Focused on exceptional user experiences'
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 3, sm: 3, lg: 4 } }}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          {/* Desktop Image + Social Links */}
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ width: '50%', display: { xs: 'none', md: 'flex' } }}
          >
            <Box sx={{ width: 200, height: 200 }}>
              <Box
                component="img"
                src={aman}
                alt="Aman Jat"
                className="animate-fade-in"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  mt: 1,
                  mb: 1,
                  boxShadow: 3
                }}
              />
            </Box>
            <Stack direction="row" spacing={1} className="animate-scale-in">
              {socialLinks.map(({ href, label, icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  sx={{
                    color: 'grey.700',
                    '&:hover': { color: 'white', bgcolor: 'grey.700' },
                    transition: 'all 0.3s'
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>

          {/* Main Content */}
          <Box
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: { xs: 'space-between', md: 'center' },
              gap: { xs: 2, md: 4 },
              height: '100vh',
              py: 8,
              transition: 'opacity 1s ease, transform 1s ease',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            {/* Name + Role */}
            <Stack alignItems="center" gap={{ xl: 0.5, '2xl': 1 }}>
              <Typography
                variant="h3"
                component="h1"
                className="animate-slide-up"
                sx={{
                  fontWeight: 700,
                  color: 'rgba(0,0,0,0.9)',
                  mb: 1,
                  fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                  letterSpacing: 2
                }}
              >
                AMAN JAT
              </Typography>
              <RoleCarousel roles={roles} />
            </Stack>

            {/* Mobile Image */}
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ width: '50%', display: { xs: 'flex', md: 'none' } }}
            >
              <Box sx={{ width: 150, height: 150 }}>
                <Box
                  component="img"
                  src={aman}
                  alt="Aman Jat"
                  className="animate-fade-in"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 1,
                    boxShadow: 3
                  }}
                />
              </Box>
            </Stack>

            {/* Description */}
            <List className="animate-fade-in" dense sx={{ maxWidth: 600, textAlign: 'left', p: 0 }}>
              {descriptions.map((text) => (
                <ListItem key={text} alignItems="flex-start" sx={{ px: 0, py: 0.25 }}>
                  <ListItemIcon sx={{ minWidth: 28, mt: 0.5 }}>
                    <AIIcon size={16} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: {
                            xs: '0.875rem',
                            md: '0.875rem',
                            lg: '1rem'
                          },
                          color: 'rgba(0,0,0,0.7)',
                          lineHeight: 1.75
                        }
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* CTA Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" className="animate-bounce-in">
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/projects')}
                className="hero-gradient hover-glow"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: 'none',
                  '&:hover': { boxShadow: '0 0 20px rgba(102,126,234,0.5)' }
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('contact')}
                className="hover-glow"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '9999px',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderColor: 'rgba(0,0,0,0.2)',
                  color: 'text.primary',
                  bgcolor: 'rgba(255,255,255,0.9)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'white',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Get In Touch
              </Button>
            </Stack>

            {/* Mobile Social Links */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              className="animate-scale-in"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              {socialLinks.map(({ href, label, icon }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  sx={{
                    color: 'grey.700',
                    '&:hover': { color: 'white', bgcolor: 'grey.700' },
                    transition: 'all 0.3s'
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>

            {/* Scroll Indicator */}
            <Box className="animate-bounce">
              <IconButton
                onClick={() => scrollToSection('about')}
                aria-label="Scroll to about"
                sx={{
                  color: 'grey.700',
                  '&:hover': { color: 'secondary.main' },
                  transition: 'color 0.3s'
                }}
              >
                <ChevronDown size={32} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Container>

      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <Box
          className="hero-gradient animate-pulse"
          sx={{
            position: 'absolute',
            top: -160,
            right: -160,
            width: 320,
            height: 320,
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(40px)',
            opacity: 0.2
          }}
        />
        <Box
          className="animate-pulse"
          sx={{
            position: 'absolute',
            bottom: -160,
            left: -160,
            width: 320,
            height: 320,
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(40px)',
            opacity: 0.2,
            bgcolor: 'var(--color-project-accent, #a78bfa)',
            animationDelay: '2s'
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
