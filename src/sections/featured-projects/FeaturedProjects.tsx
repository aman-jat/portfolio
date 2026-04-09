import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Link, Stack } from '@mui/material';
import { projects } from '@/constants';
import ProjectCard from '../../components/ProjectCard';

const FeaturedProjects = () => {
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

  const featuredProjects = projects.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <Box
      component="section"
      id="featured-projects"
      ref={sectionRef}
      sx={{ pb: { xs: 4, md: 8 }, py: { md: 8 }, bgcolor: 'rgba(0,0,0,0.03)' }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box
          sx={{
            maxWidth: '72rem',
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            transition: 'opacity 1s ease, transform 1s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
          }}
        >
          {/* Section Header */}
          <Stack alignItems="center" spacing={1} mb={{ xs: 3, md: 4 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' },
                mb: 1
              }}
            >
              Featured{' '}
              <Box component="span" className="text-gradient">
                Projects
              </Box>
            </Typography>
            <Box className="hero-gradient" sx={{ width: 96, height: 4, borderRadius: 9999 }} />
          </Stack>

          {/* Projects Grid */}
          <Grid container spacing={3}>
            {featuredProjects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <ProjectCard project={project} isVisible={isVisible} />
              </Grid>
            ))}
          </Grid>

          {/* View All Link */}
          <Link
            href="/projects"
            underline="always"
            sx={{
              textAlign: 'center',
              mt: 4,
              color: 'text.primary',
              fontSize: '0.95rem'
            }}
          >
            View all projects ({projects.length})
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
