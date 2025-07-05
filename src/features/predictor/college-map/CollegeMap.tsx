import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
} from '@mui/material';
import { LocationOn, School } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { colleges } from '../collegeData';

const CollegeMap = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <School color="primary" />
          <Typography variant="h5">
            College Locations
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {colleges.map((college) => (
            <Grid key={college.id} sx={{ width: { xs: '100%', sm: '50%', md: '33.33%' } }}>
              <Card 
                sx={{ 
                  height: '100%',
                  '&:hover': {
                    boxShadow: 6,
                    cursor: 'pointer'
                  }
                }}
                onClick={() => navigate(`/college/${college.id}`)}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <LocationOn color="primary" />
                      <Box>
                        <Typography variant="h6">{college.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {college.location}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="body2" color="text.secondary">
                        Type:
                      </Typography>
                      <Typography variant="body2">
                        {college.type}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="body2" color="text.secondary">
                        Rank:
                      </Typography>
                      <Typography variant="body2">
                        {college.rank}
                      </Typography>
                    </Stack>
                    <Button 
                      variant="outlined" 
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(college.website, '_blank');
                      }}
                    >
                      Visit Website
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default CollegeMap; 