import { useState } from 'react';
import { Box, Typography, Paper, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { Book, VideoLibrary, Description } from '@mui/icons-material';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'book' | 'video' | 'document';
  url: string;
  tags: string[];
  imageUrl: string;
}

const sampleResources: Resource[] = [
  {
    id: '1',
    title: 'GATE Mathematics Complete Guide',
    description: 'Comprehensive guide covering all mathematics topics for GATE',
    type: 'book',
    url: '#',
    tags: ['Mathematics', 'Complete Guide'],
    imageUrl: 'https://source.unsplash.com/random/300x200?mathematics'
  },
  {
    id: '2',
    title: 'Data Structures Video Series',
    description: 'Complete video series on data structures and algorithms',
    type: 'video',
    url: '#',
    tags: ['DSA', 'Video Series'],
    imageUrl: 'https://source.unsplash.com/random/300x200?coding'
  },
  {
    id: '3',
    title: 'Computer Networks Notes',
    description: 'Detailed notes on computer networks for GATE',
    type: 'document',
    url: '#',
    tags: ['Networks', 'Notes'],
    imageUrl: 'https://source.unsplash.com/random/300x200?network'
  }
];

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'book':
        return <Book />;
      case 'video':
        return <VideoLibrary />;
      case 'document':
        return <Description />;
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          Study Resources
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Access a curated collection of study materials, books, videos, and documents to help you prepare for GATE.
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
        {sampleResources.map((resource) => (
          <Card key={resource.id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="140"
              image={resource.imageUrl}
              alt={resource.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {getResourceIcon(resource.type)}
                <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                  {resource.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" paragraph>
                {resource.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {resource.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>
              <Button variant="contained" fullWidth>
                Access Resource
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {selectedResource && (
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h5" gutterBottom>
            {selectedResource.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {selectedResource.description}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => setSelectedResource(null)}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Resources; 