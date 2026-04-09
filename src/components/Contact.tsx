import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import GithubIcon from '@/components/ui/GithubIcon';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Link,
  Snackbar,
  Alert
} from '@mui/material';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'amanjat261@gmail.com',
    href: 'mailto:amanjat261@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6260-5820-59',
    href: 'tel:+916260582059'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Indore, India',
    href: 'https://maps.google.com'
  }
];

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success'
  });
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const url = 'https://portfolio-backend-3rmg.onrender.com/api/users';
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });
      setSnackbar({ open: true, message: "Message sent! I'll get back to you soon.", severity: 'success' });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.log('error', error);
      setSnackbar({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="section" id="contact" ref={sectionRef} sx={{ py: { xs: 4, md: 8 }, bgcolor: 'background.default' }}>
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
          <Stack alignItems="center" spacing={2} mb={{ xs: 4, md: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' }
              }}
            >
              Get In{' '}
              <Box component="span" className="text-gradient">
                Touch
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
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas
              to life.
            </Typography>
          </Stack>

          <Grid container spacing={6}>
            {/* Left — Contact Info */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)'
              }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Let's Connect
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      fontSize: { xs: '0.875rem', md: '1.125rem' }
                    }}
                  >
                    Whether you're looking for a developer to join your team, need help with a project, or just want to chat about
                    technology, I'd love to hear from you.
                  </Typography>
                </Box>

                {/* Contact Methods */}
                <Stack spacing={2}>
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Link
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        underline="none"
                        className="hover-lift"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 2,
                          borderRadius: 2,
                          transition: 'opacity 0.5s ease, transform 0.5s ease',
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transitionDelay: `${index * 0.1}s`
                        }}
                        component="a"
                      >
                        <Box
                          className="card-gradient"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 2,
                            borderRadius: 2,
                            width: '100%',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                            gap: 2,
                            '&:hover .icon-circle': { transform: 'scale(1.1)' }
                          }}
                        >
                          <Box
                            className="icon-circle hero-gradient"
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            <Icon size={22} color="white" />
                          </Box>
                          <Box>
                            <Typography variant="caption" color="text.secondary">
                              {info.label}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      </Link>
                    );
                  })}
                </Stack>

                {/* Social Links */}
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                    Follow Me
                  </Typography>
                  <Stack direction="row" spacing={1.5}>
                    <IconButton
                      component="a"
                      href="https://github.com/aman-jat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="tech-icon"
                      sx={{
                        bgcolor: 'action.hover',
                        width: 48,
                        height: 48,
                        '&:hover': { color: 'grey.900' },
                        transition: 'all 0.3s'
                      }}
                    >
                      <GithubIcon size={20} />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Grid>

            {/* Right — Contact Form */}
            <Grid
              size={{ xs: 12, lg: 6 }}
              sx={{
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)'
              }}
            >
              <Card
                className="card-gradient"
                sx={{
                  border: 'none',
                  boxShadow: { xs: 'none', md: '0 4px 24px rgba(0,0,0,0.1)' }
                }}
              >
                <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Send a Message
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={3}>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="First Name" name="firstName" size="small" variant="outlined" />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField fullWidth label="Last Name" name="lastName" size="small" variant="outlined" />
                        </Grid>
                      </Grid>

                      <TextField fullWidth label="Email" name="email" type="email" size="small" variant="outlined" />

                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        required
                        variant="outlined"
                        sx={{ '& textarea': { resize: 'none' } }}
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        fullWidth
                        startIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : <Send size={16} />}
                        className="hero-gradient hover-glow"
                        sx={{
                          py: 1.5,
                          fontWeight: 600,
                          textTransform: 'none',
                          fontSize: '1rem',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          '&:hover': {
                            boxShadow: '0 0 20px rgba(102,126,234,0.5)'
                          },
                          '&.Mui-disabled': { opacity: 0.5 }
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar((s) => ({ ...s, open: false }))} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
