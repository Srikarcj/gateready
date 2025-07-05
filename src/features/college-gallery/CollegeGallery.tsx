import { Box, Typography, Paper, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { LocationOn, Star } from '@mui/icons-material';

interface College {
  id: string;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  description: string;
  tags: string[];
}

const sampleColleges: College[] = [
  {
    id: '1',
    name: 'IIT Delhi',
    location: 'New Delhi',
    rating: 4.8,
    imageUrl: 'https://source.unsplash.com/random/300x200?university',
    description: 'Premier engineering institute with excellent research facilities and placement records.',
    tags: ['IIT', 'Engineering', 'Research']
  },
  {
    id: '2',
    name: 'IIT Bombay',
    location: 'Mumbai',
    rating: 4.9,
    imageUrl: 'https://source.unsplash.com/random/300x200?campus',
    description: 'Leading technical institute known for innovation and entrepreneurship.',
    tags: ['IIT', 'Engineering', 'Innovation']
  },
  {
    id: '3',
    name: 'IIT Madras',
    location: 'Chennai',
    rating: 4.7,
    imageUrl: 'https://source.unsplash.com/random/300x200?college',
    description: 'Renowned for its strong academic programs and industry connections.',
    tags: ['IIT', 'Engineering', 'Industry']
  }
];

const CollegeGallery = () => {
  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          College Gallery
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Explore top colleges and universities that accept GATE scores for admissions.
        </Typography>
      </Paper>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(3, 1fr)'
        },
        gap: 3
      }}>
        {sampleColleges.map((college) => (
          <Card key={college.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={college.imageUrl}
              alt={college.name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" component="div">
                  {college.name}
                </Typography>
                <Chip
                  icon={<Star />}
                  label={college.rating}
                  size="small"
                  sx={{ ml: 'auto' }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  {college.location}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                {college.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {college.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
              <Button variant="contained" fullWidth>
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CollegeGallery; 