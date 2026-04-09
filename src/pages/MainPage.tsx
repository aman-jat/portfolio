import { useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from '@/sections/hero/Hero';
import About from '@/sections/about/About';
import Skills from '@/sections/skills/Skills';
import Footer from '@/sections/footer/Footer';
import Contact from '@/sections/contact/Contact';
import Navigation from '@/sections/navigation/Navigation';
import FeaturedProjects from '@/sections/featured-projects/FeaturedProjects';

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
