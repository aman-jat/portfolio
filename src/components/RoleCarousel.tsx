import { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';

interface RoleCarouselProps {
  roles: string[];
}

const RoleCarousel = ({ roles }: RoleCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [displayed, setDisplayed] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPhase('exit');
      setTimeout(() => {
        const nextIdx = (current + 1) % roles.length;
        setCurrent(nextIdx);
        setDisplayed(nextIdx);
        setPhase('enter');
        setTimeout(() => setPhase('idle'), 400);
      }, 350);
    }, 2000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const animStyle: React.CSSProperties =
    phase === 'exit'
      ? { animation: 'roleSlideOut 350ms ease-in forwards' }
      : phase === 'enter'
        ? { animation: 'roleSlideIn 400ms ease-out forwards' }
        : {
            transform: 'translateY(0) scaleY(1)',
            opacity: 1,
            filter: 'blur(0px)'
          };

  return (
    <>
      <style>{`
        @keyframes roleSlideIn {
          from { transform: translateY(120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
          to   { transform: translateY(0)    scaleY(1);   opacity: 1; filter: blur(0px); }
        }
        @keyframes roleSlideOut {
          from { transform: translateY(0)     scaleY(1);   opacity: 1; filter: blur(0px); }
          to   { transform: translateY(-120%) scaleY(0.6); opacity: 0; filter: blur(8px); }
        }
      `}</style>
      <Box
        sx={{
          overflow: 'hidden',
          height: { xs: 40, sm: 48, md: 56 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          className="text-gradient"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.875rem' }
          }}
          style={animStyle}
        >
          {roles[displayed]}
        </Typography>
      </Box>
    </>
  );
};

export default RoleCarousel;
