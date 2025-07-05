import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Rating,
  IconButton,
  Tooltip,
  alpha,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  School,
  LocationOn,
  TrendingUp,
  Bookmark,
  BookmarkBorder,
  Share,
  Star,
  Computer,
  Science,
  Architecture,
  ArrowForward,
  Refresh
} from '@mui/icons-material';
import { useToast } from '@/components/ui/use-toast';
import { colleges, College } from './collegeData';

const indianStates = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

const CollegePredictor = () => {
  const [gateScore, setGateScore] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [predictions, setPredictions] = useState<Array<College & { eligibilityScore: number }>>([]);
  const [bookmarkedColleges, setBookmarkedColleges] = useState<string[]>([]);
  const navigate = useNavigate();
  const theme = useTheme();
  const { toast } = useToast();

  const allCourses = Array.from(new Set(colleges.flatMap(college => 
    college.courses.map(course => course.name)
  )));

  const allLocations = Array.from(new Set(colleges.map(college => college.location)));

  const predictColleges = () => {
    if (!gateScore || !selectedCourse) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    // Calculate eligibility score for each college
    const predictions = colleges.map(college => {
      // Find the selected course in the college
      const course = college.courses.find(c => c.name === selectedCourse);
      if (!course) return null;

      // Calculate base eligibility score (0-100)
      let eligibilityScore = 0;

      // GATE Score component (50% weight)
      const gateScoreComponent = (Number(gateScore) / 1000) * 50;
      eligibilityScore += gateScoreComponent;

      // College Rating component (20% weight)
      const ratingComponent = (college.rating / 5) * 20;
      eligibilityScore += ratingComponent;

      // Placement component (15% weight)
      const placementComponent = (college.placement.average / 20) * 15;
      eligibilityScore += placementComponent;

      // Cut-off match component (15% weight)
      const cutOffMatch = Math.max(0, 1 - Math.abs(Number(gateScore) - course.cutOff) / 100);
      const cutOffComponent = cutOffMatch * 15;
      eligibilityScore += cutOffComponent;

      return {
        ...college,
        eligibilityScore,
        selectedCourse: course
      };
    }).filter((prediction): prediction is NonNullable<typeof prediction> => prediction !== null);

    // Apply filters
    let filteredPredictions = predictions;

    // Filter by course
    if (selectedCourse) {
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.courses.some(course => course.name === selectedCourse)
      );
    }

    // Filter by location (state)
    if (selectedLocation) {
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.location === selectedLocation
      );
    }

    // Filter by type
    if (selectedType) {
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.type === selectedType
      );
    }

    // Filter by rating range
    if (selectedRating) {
      const [minRating, maxRating] = selectedRating.split('-').map(Number);
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.rating >= minRating && prediction.rating <= maxRating
      );
    }

    // Sort by eligibility score
    filteredPredictions.sort((a, b) => b.eligibilityScore - a.eligibilityScore);

    setPredictions(filteredPredictions);

    if (filteredPredictions.length > 0) {
      toast({
        title: 'Success',
        description: `Found ${filteredPredictions.length} colleges matching your criteria`,
        variant: 'default',
      });
    } else {
      toast({
        title: 'No Results',
        description: 'No colleges found matching your criteria. Try adjusting your filters or score.',
        variant: 'default',
      });
    }
  };

  const handleViewDetails = (collegeId: string) => {
    navigate(`/college/${collegeId}`);
  };

  const toggleBookmark = (collegeId: string) => {
    setBookmarkedColleges(prev => 
      prev.includes(collegeId) 
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          College Predictor
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="GATE Score"
            type="number"
            value={gateScore}
            onChange={(e) => setGateScore(e.target.value)}
            InputProps={{
              endAdornment: (
                <Typography variant="caption" color="text.secondary">
                  /1000
                </Typography>
              ),
            }}
          />

          <FormControl>
            <InputLabel>Course</InputLabel>
            <Select
              value={selectedCourse}
              label="Course"
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              {allCourses.map((course) => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                label="Location"
              >
                <MenuItem value="">All Locations</MenuItem>
                {indianStates.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>College Type</InputLabel>
              <Select
                value={selectedType}
                label="College Type"
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="IIT">IIT</MenuItem>
                <MenuItem value="NIT">NIT</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Rating Range</InputLabel>
              <Select
                value={selectedRating}
                label="Rating Range"
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <MenuItem value="">All Ratings</MenuItem>
                <MenuItem value="0-1">0-1</MenuItem>
                <MenuItem value="1-2">1-2</MenuItem>
                <MenuItem value="2-3">2-3</MenuItem>
                <MenuItem value="3-4">3-4</MenuItem>
                <MenuItem value="4-5">4-5</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Button
            variant="contained"
            onClick={predictColleges}
            startIcon={<School />}
          >
            Predict Colleges
          </Button>
        </Stack>
      </Paper>

      {/* Results Section */}
      {predictions.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recommended Colleges
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {predictions.map((college) => (
              <Card 
                key={college.id}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          {college.name}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip 
                            label={college.type} 
                            color={college.type === 'IIT' ? 'primary' : 'secondary'}
                            size="small"
                          />
                          <Chip 
                            label={`${college.city}, ${college.location}`}
                            variant="outlined"
                            size="small"
                          />
                        </Stack>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h6" color="primary">
                          {college.eligibilityScore.toFixed(1)}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Match Score
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {college.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Rank
                        </Typography>
                        <Typography variant="body1">
                          #{college.rank}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Cut-off
                        </Typography>
                        <Typography variant="body1">
                          {college.cutOff}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Rating
                        </Typography>
                        <Rating value={college.rating} readOnly size="small" />
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => handleViewDetails(college.id)}
                      startIcon={<ArrowForward />}
                    >
                      View Details
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ) : (
        <Box 
          sx={{ 
            mt: 4, 
            p: 4, 
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No Colleges Found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {selectedLocation 
              ? `No colleges found in ${selectedLocation}. Try adjusting your filters or score.`
              : 'Try adjusting your filters or score to see more colleges.'}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSelectedLocation('');
              setSelectedType('');
              setSelectedRating('');
              setGateScore('');
              setSelectedCourse('');
              setPredictions([]);
            }}
            startIcon={<Refresh />}
          >
            Clear All Filters
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CollegePredictor; 