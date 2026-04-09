import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
      <Stack alignItems="center" spacing={2}>
        <Typography variant="h1" sx={{ fontWeight: 700, fontSize: '6rem', lineHeight: 1 }}>
          404
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Oops! Page not found
        </Typography>
        <Button component="a" href="/" variant="contained" sx={{ textTransform: 'none', borderRadius: 2 }}>
          Return to Home
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;
