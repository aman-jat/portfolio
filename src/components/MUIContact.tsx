import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  Stack,
  Fade,
  Grow,
  useTheme,
  InputAdornment,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  GitHub,
  LinkedIn,
  Twitter,
  Send,
  Person,
  Subject,
} from '@mui/icons-material';

const MUIContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 32 }} />,
      title: 'Email',
      value: 'aman@example.com',
      link: 'mailto:aman@example.com',
      color: '#007AFF',
    },
    {
      icon: <Phone sx={{ fontSize: 32 }} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#34C759',
    },
    {
      icon: <LocationOn sx={{ fontSize: 32 }} />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      color: '#FF3B30',
    },
  ];

  const socialLinks = [
    {
      icon: <GitHub sx={{ fontSize: 24 }} />,
      label: 'GitHub',
      url: 'https://github.com',
      color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
    },
    {
      icon: <LinkedIn sx={{ fontSize: 24 }} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077B5',
    },
    {
      icon: <Twitter sx={{ fontSize: 24 }} />,
      label: 'Twitter',
      url: 'https://twitter.com',
      color: '#1DA1F2',
    },
  ];

  return (
    <Box
      id="contact"
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
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, rgba(0, 122, 255, 0.05), rgba(88, 86, 214, 0.05))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.1)' },
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
              Get In Touch
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
              Let's Work Together
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Fade in={isVisible} timeout={1200}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  Contact Information
                </Typography>
                
                <Stack spacing={3} sx={{ mb: 6 }}>
                  {contactInfo.map((info, index) => (
                    <Grow
                      key={info.title}
                      in={isVisible}
                      timeout={1500 + index * 200}
                    >
                      <Card
                        component="a"
                        href={info.link}
                        sx={{
                          textDecoration: 'none',
                          background: theme.palette.mode === 'dark'
                            ? 'rgba(28, 28, 30, 0.6)'
                            : 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid',
                          borderColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.08)',
                          borderRadius: 3,
                          transition: 'all 0.4s ease',
                          '&:hover': {
                            transform: 'translateX(8px) scale(1.02)',
                            borderColor: info.color,
                            boxShadow: `0 8px 25px ${info.color}40`,
                            '& .contact-icon': {
                              color: info.color,
                              transform: 'scale(1.2) rotate(5deg)',
                            },
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Box
                              className="contact-icon"
                              sx={{
                                color: info.color,
                                transition: 'all 0.3s ease',
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  mb: 0.5,
                                }}
                              >
                                {info.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{
                                  color: 'text.secondary',
                                }}
                              >
                                {info.value}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grow>
                  ))}
                </Stack>

                {/* Social Links */}
                <Fade in={isVisible} timeout={2000}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      Follow Me
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((social, index) => (
                        <Grow
                          key={social.label}
                          in={isVisible}
                          timeout={2200 + index * 150}
                        >
                          <IconButton
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: 'text.secondary',
                              border: '2px solid',
                              borderColor: 'divider',
                              borderRadius: 2,
                              p: 2,
                              transition: 'all 0.4s ease',
                              '&:hover': {
                                color: social.color,
                                borderColor: social.color,
                                transform: 'translateY(-4px) scale(1.1) rotate(10deg)',
                                boxShadow: `0 8px 25px ${social.color}40`,
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </Grow>
                      ))}
                    </Stack>
                  </Box>
                </Fade>
              </Box>
            </Fade>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Grow in={isVisible} timeout={1500}>
              <Card
                sx={{
                  background: theme.palette.mode === 'dark'
                    ? 'rgba(28, 28, 30, 0.6)'
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid',
                  borderColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.08)',
                  borderRadius: 4,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 4,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    Send Message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.15)',
                              },
                              '&.Mui-focused': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.15)',
                              },
                              '&.Mui-focused': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Subject sx={{ color: 'primary.main' }} />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.15)',
                              },
                              '&.Mui-focused': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={6}
                          label="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.15)',
                              },
                              '&.Mui-focused': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(0, 122, 255, 0.25)',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
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
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MUIContact;