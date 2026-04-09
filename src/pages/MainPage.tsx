import { useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import FeaturedProjects from '@/components/FeaturedProjects';

const MainPage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }} className="font-zalando">
      <Navigation />
      <Box component="main">
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainPage;
