import { Project } from '@/type';
import { ExternalLink } from 'lucide-react';
import { Box, Card, CardContent, CardMedia, CardActions, Typography, Chip, Button, Stack } from '@mui/material';

interface ProjectCardProps {
  isVisible: boolean;
  project: Project;
}

const ProjectCard = ({ project, isVisible }: ProjectCardProps) => {
  return (
    <Card
      className={isVisible ? 'animate-fade-in' : ''}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.5s ease',
        '&:hover': {
          boxShadow: 6,
          borderColor: 'divider',
          '& .project-image': { transform: 'scale(1.05)' }
        }
      }}
    >
      {/* Project Image */}
      <Box sx={{ overflow: 'hidden', bgcolor: 'action.hover' }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          className="project-image"
          sx={{
            height: 192,
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
      </Box>

      <CardContent sx={{ pb: 1, flexGrow: 1 }}>
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: '1rem',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            mb: 0.5
          }}
        >
          {project.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '0.75rem',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            mb: 2
          }}
        >
          {project.description}
        </Typography>

        {/* Technologies */}
        <Stack direction="row" flexWrap="wrap" gap={0.5}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
              className="tech-gradient"
              sx={{ fontSize: '0.7rem', height: 22 }}
            />
          ))}
          {project.technologies.length > 4 && (
            <Chip label={`+${project.technologies.length - 4}`} size="small" variant="outlined" sx={{ fontSize: '0.7rem', height: 22 }} />
          )}
        </Stack>
      </CardContent>

      {project.liveUrl && (
        <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
          <Button
            component="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="small"
            startIcon={<ExternalLink size={14} />}
            fullWidth
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: 1.5,
              height: 36
            }}
          >
            Live
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default ProjectCard;
