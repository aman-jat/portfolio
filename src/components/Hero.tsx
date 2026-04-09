import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Button, IconButton, Stack, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronDown, Mail } from 'lucide-react';
import GithubIcon from '@/components/ui/GithubIcon';
import { useNavigate } from 'react-router-dom';
import aman from '../assets/images/aman.png';

const LinkedInIcon = ({ size = 28 }: { size?: number }) => (
  <svg height={size} width={size} viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z" />
  </svg>
);

const AIIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" height={size} width={size} fill="currentColor">
    <path d="M14.217,19.707l-1.112,2.547c-0.427,0.979-1.782,0.979-2.21,0l-1.112-2.547c-0.99-2.267-2.771-4.071-4.993-5.057L1.73,13.292c-0.973-0.432-0.973-1.848,0-2.28l2.965-1.316C6.974,8.684,8.787,6.813,9.76,4.47l1.126-2.714c0.418-1.007,1.81-1.007,2.228,0L14.24,4.47c0.973,2.344,2.786,4.215,5.065,5.226l2.965,1.316c0.973,0.432,0.973,1.848,0,2.28l-3.061,1.359C16.988,15.637,15.206,17.441,14.217,19.707z" />
    <path d="M24.481,27.796l-0.339,0.777c-0.248,0.569-1.036,0.569-1.284,0l-0.339-0.777c-0.604-1.385-1.693-2.488-3.051-3.092l-1.044-0.464c-0.565-0.251-0.565-1.072,0-1.323l0.986-0.438c1.393-0.619,2.501-1.763,3.095-3.195l0.348-0.84c0.243-0.585,1.052-0.585,1.294,0l0.348,0.84c0.594,1.432,1.702,2.576,3.095,3.195l0.986,0.438c0.565,0.251,0.565,1.072,0,1.323l-1.044,0.464C26.174,25.308,25.085,26.411,24.481,27.796z" />
  </svg>
);

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

const RoleCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        const nextIdx = (current + 1) % roles.length;
        setCurrent(nextIdx);
        setDisplayed(nextIdx);
        setPhase('enter');
        setTimeout(() => setPhase('idle'), 400);
      }, 350);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const animStyle: React.CSSProperties =
    phase === 'exit'
      ? { animation: 'roleSlideOut 350ms ease-in forwards' }
      : phase === 'enter'
        ? { animation: 'roleSlideIn 400ms ease-out forwards' }
        : {
            transform: 'translateY(0) scaleY(1)',
            opacity: 1,
            filter: 'blur(0px)'
          };

  return (
    <>
      <style>{`
        @keyframes roleSlideIn {
          from { transform: translateY(120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
          to   { transform: translateY(0)    scaleY(1);   opacity: 1; filter: blur(0px); }
        }
        @keyframes roleSlideOut {
          from { transform: translateY(0)     scaleY(1);   opacity: 1; filter: blur(0px); }
          to   { transform: translateY(-120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
        }
      `}</style>
      <Box
        sx={{
          overflow: 'hidden',
          height: { xs: 40, sm: 48, md: 56 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          className="text-gradient"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.875rem' }
          }}
          style={animStyle}
        >
          {roles[displayed]}
        </Typography>
      </Box>
    </>
  );
};

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
              <RoleCarousel />
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
