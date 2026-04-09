import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Link,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isOnProject = window.location.pathname === '/projects';
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === 'projects') {
      navigate('/projects');
      return;
    }
    if (isOnProject) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop AppBar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          display: { xs: 'none', md: 'block' },
          bgcolor: isScrolled ? 'rgba(255,255,255,0.5)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" py={1.5}>
            {/* Logo */}
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Link href="/" underline="hover" className="text-gradient" sx={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: 1 }}>
                AMAN JAT
              </Link>
              {isOnProject && (
                <>
                  <ChevronRight size={18} color="rgba(0,0,0,0.3)" />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: '1.1rem',
                      color: 'text.primary'
                    }}
                  >
                    PROJECTS
                  </Typography>
                </>
              )}
            </Stack>

            {/* Nav Links */}
            <Stack direction="row" spacing={4}>
              {navItems.map((item) => {
                if (isOnProject && item.id !== 'hero') return null;
                return (
                  <Box
                    key={item.id}
                    component="button"
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'grey.800',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      position: 'relative',
                      p: 0,
                      transition: 'color 0.2s',
                      '&:hover': { color: 'primary.main' },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -2,
                        height: 2,
                        width: 0,
                        bgcolor: 'primary.main',
                        transition: 'width 0.2s'
                      },
                      '&:hover::after': { width: '100%' }
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </AppBar>

      {/* Mobile Header */}
      <Box component="header" sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* Top bar */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 64,
            px: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 10000
          }}
        >
          {isOnProject && (!isScrolled || isOpen) ? (
            <IconButton onClick={() => navigate(-1)} size="small" sx={{ color: 'text.primary' }}>
              <ChevronLeft size={28} />
            </IconButton>
          ) : (
            <Box />
          )}

          <IconButton onClick={() => setIsOpen((prev) => !prev)} size="small" sx={{ color: 'grey.700', zIndex: 9999 }}>
            {isOpen ? <CloseIcon fontSize="medium" /> : <MenuIcon fontSize="medium" />}
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="top"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          ModalProps={{ keepMounted: true }}
          slotProps={{
            paper: {
              sx: {
                height: '100dvh',
                bgcolor: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                pt: 10,
                px: 4
              }
            }
          }}
        >
          <List disablePadding>
            {navItems.map((item, index) => (
              <Slide key={item.id} direction="down" in={isOpen} timeout={300 + index * 60}>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' }
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: { fontWeight: 700, fontSize: '1.125rem' }
                      }
                    }}
                  />
                </ListItemButton>
              </Slide>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Navigation;
