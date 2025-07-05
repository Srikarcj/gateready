import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { colleges } from './collegeData';

const CollegeMap = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          College Locations
        </Typography>
        <Grid container spacing={3}>
          {colleges.map((college) => (
            <Grid key={college.id} sx={{ width: { xs: '100%', md: '33.33%' } }}>
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <LocationOn color="primary" />
                    <Box>
                      <Typography variant="h6">{college.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {college.location}
                      </Typography>
                    </Box>
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