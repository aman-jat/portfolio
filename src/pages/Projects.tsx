import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';
import Navigation from '@/components/Navigation.tsx';
import Footer from '@/components/Footer.tsx';
import { projects } from '../constants.ts';
import { ProjectCategory } from '../type.ts';
import ProjectCard from '@/components/ui/ProjectCard.tsx';

const categories: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'html/css', label: 'HTML/CSS UI' },
  { value: 'javaScript', label: 'JavaScript' },
  { value: 'react', label: 'React' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Full Stack' }
];

const mobileCategories = categories.filter((c) => !['html/css', 'javaScript', 'react'].includes(c.value));

const getFilteredProjects = (category: ProjectCategory | 'all') => {
  const unsorted =
    category === 'all'
      ? [...projects]
      : category === 'frontend'
        ? projects.filter((p) => ['fullstack', 'react', 'javaScript', 'html/css'].some((c) => p.category.includes(c as ProjectCategory)))
        : projects.filter((p) => p.category.includes(category));
  return unsorted.sort((a, b) => a.priority - b.priority);
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory | 'all'>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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

  const filtered = getFilteredProjects(activeTab);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        overflow: 'auto'
      }}
    >
      <Navigation />

      <Box component="section" id="projects" ref={sectionRef}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 }, py: 6 }}>
          <Box sx={{ maxWidth: '80rem', mx: 'auto' }}>
            {/* Header */}
            <Stack alignItems="center" mb={4} pt={3}>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.875rem', sm: '2.25rem', lg: '3rem' }
                }}
              >
                My{' '}
                <Box component="span" className="text-gradient">
                  Projects
                </Box>
              </Typography>
            </Stack>

            {/* Desktop Tabs */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                mb: 4
              }}
            >
              <Box
                sx={{
                  bgcolor: 'grey.800',
                  borderRadius: 2,
                  p: 0.5,
                  display: 'inline-flex'
                }}
              >
                <Tabs
                  value={activeTab}
                  onChange={(_, val) => setActiveTab(val)}
                  TabIndicatorProps={{ style: { display: 'none' } }}
                  sx={{
                    minHeight: 44,
                    '& .MuiTab-root': {
                      color: 'rgba(255,255,255,0.6)',
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      minHeight: 44,
                      px: 2,
                      borderRadius: 1.5,
                      transition: 'all 0.2s'
                    },
                    '& .Mui-selected': {
                      color: 'text.primary',
                      bgcolor: 'background.default',
                      boxShadow: 1
                    }
                  }}
                >
                  {categories.map((cat) => (
                    <Tab key={cat.value} value={cat.value} label={`${cat.label} (${getFilteredProjects(cat.value).length})`} />
                  ))}
                </Tabs>
              </Box>
            </Box>

            {/* Mobile Tabs */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                mb: 3
              }}
            >
              <Tabs
                value={mobileCategories.find((c) => c.value === activeTab) ? activeTab : 'all'}
                onChange={(_, val) => setActiveTab(val)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.875rem'
                  },
                  '& .Mui-selected': {
                    fontWeight: 700
                  }
                }}
              >
                {mobileCategories.map((cat) => (
                  <Tab key={cat.value} value={cat.value} label={cat.label} />
                ))}
              </Tabs>
            </Box>

            {/* Projects Grid */}
            {filtered.length > 0 ? (
              <Grid container spacing={3}>
                {filtered.map((project) => (
                  <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <ProjectCard project={project} isVisible={isVisible} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Stack alignItems="center" py={8}>
                <Typography color="text.secondary">No projects found in this category yet.</Typography>
              </Stack>
            )}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Projects;
