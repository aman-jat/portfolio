import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const MUIFooter: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, rgba(88, 86, 214, 0.05) 100%)',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 Aman Jat. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <IconButton href="https://github.com" target="_blank" size="small">
              <GitHub />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" size="small">
              <LinkedIn />
            </IconButton>
            <IconButton href="mailto:aman@example.com" size="small">
              <Email />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MUIFooter;