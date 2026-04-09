import { Heart } from 'lucide-react';
import GithubIcon from '@/components/ui/GithubIcon';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Stack, IconButton, Divider, Link } from '@mui/material';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = ['About', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = (item: string) => {
    if (item === 'Projects') {
      navigate('/projects');
      return;
    }
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'text.primary', color: 'background.default', py: 6 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box sx={{ maxWidth: '72rem', mx: 'auto' }}>
          {/* Main Footer Content */}
          <Grid container spacing={4} mb={4}>
            {/* Brand */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <Box
                  component="button"
                  onClick={scrollToTop}
                  sx={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    p: 0,
                    textAlign: 'left',
                    '&:hover': { opacity: 0.8 },
                    transition: 'opacity 0.3s'
                  }}
                >
                  <Typography variant="h5" className="text-gradient" sx={{ fontWeight: 700 }}>
                    Aman Jat
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.8,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  Full-stack developer passionate about creating exceptional digital experiences through clean code and innovative
                  solutions.
                </Typography>
              </Stack>
            </Grid>

            {/* Quick Links */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Quick Links
                </Typography>
                <Stack spacing={0.5}>
                  {quickLinks.map((item) => (
                    <Link
                      key={item}
                      component="button"
                      onClick={() => handleNavClick(item)}
                      underline="hover"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textAlign: 'left',
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        p: 0,
                        transition: 'color 0.3s',
                        '&:hover': { color: 'background.default' }
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Get In Touch
                </Typography>
                <Stack spacing={0.5}>
                  {['Indore, India', 'amanjat261@gmail.com', '+91 6260-5820-59'].map((info) => (
                    <Typography
                      key={info}
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: { xs: '0.875rem', md: '1rem' }
                      }}
                    >
                      {info}
                    </Typography>
                  ))}
                </Stack>
                <Stack direction="row" spacing={1} pt={0.5}>
                  <IconButton
                    component="a"
                    href="https://github.com/aman-jat"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    size="small"
                    className="tech-icon"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'background.default',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                      transition: 'all 0.3s'
                    }}
                  >
                    <GithubIcon size={20} />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          {/* Divider + Bottom Row */}
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Stack direction="row" alignItems="center" spacing={0.75}>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                © {currentYear} Aman Jat. Made with
              </Typography>
              <Heart size={14} color="#f87171" fill="#f87171" />
            </Stack>
            <Link
              component="button"
              onClick={scrollToTop}
              underline="hover"
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                transition: 'color 0.3s',
                '&:hover': { color: 'background.default' }
              }}
            >
              Back to Top ↑
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
