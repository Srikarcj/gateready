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
  MenuItem,
  Link
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
  Refresh,
  OpenInNew
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
    // Input validation
    const score = Number(gateScore);
    if (isNaN(score) || score < 0 || score > 1000) {
      toast({
        title: 'Invalid Input',
        description: 'Please enter a valid GATE score between 0 and 1000',
        variant: 'destructive',
      });
      return;
    }

    if (!selectedCourse) {
      toast({
        title: 'Course Required',
        description: 'Please select a course to predict colleges',
        variant: 'destructive',
      });
      return;
    }

    // Normalize GATE score (0-1000) to a 0-100 scale
    const normalizedGateScore = (score / 1000) * 100;

    // Calculate eligibility score for each college
    const predictions = colleges
      .map(college => {
        // Find the selected course in the college
        const course = college.courses.find(c => c.name === selectedCourse);
        if (!course) return null;

        // Base eligibility score (0-100)
        let eligibilityScore = 0;

        // 1. GATE Score component (50% weight)
        const gateScoreWeight = 0.5;
        const gateScoreComponent = normalizedGateScore * gateScoreWeight;
        
        // 2. College Rating component (20% weight)
        const ratingWeight = 0.2;
        const ratingComponent = (college.rating / 5) * 100 * ratingWeight;
        
        // 3. Cut-off match component (20% weight)
        const cutOffWeight = 0.2;
        // Calculate how close the score is to the cut-off (normalized to 0-1)
        const scoreDistance = Math.abs(score - course.cutOff) / 1000;
        const cutOffMatch = 1 - Math.min(1, scoreDistance); // 1 if exact match, decreasing as difference increases
        const cutOffComponent = cutOffMatch * 100 * cutOffWeight;
        
        // 4. Placement component (10% weight)
        const placementWeight = 0.1;
        // Normalize placement average (assuming max 30 LPA)
        const normalizedPlacement = Math.min(1, college.placement.average / 30);
        const placementComponent = normalizedPlacement * 100 * placementWeight;

        // Calculate final score
        eligibilityScore = gateScoreComponent + ratingComponent + cutOffComponent + placementComponent;

        // Apply bonus/malus based on college type (IITs get +5% boost)
        if (college.type === 'IIT') {
          eligibilityScore = Math.min(100, eligibilityScore * 1.05);
        }

        return {
          ...college,
          eligibilityScore: Math.round(eligibilityScore * 10) / 10, // Round to 1 decimal
          selectedCourse: course
        };
      })
      .filter((prediction): prediction is NonNullable<typeof prediction> => prediction !== null);

    // Apply filters
    let filteredPredictions = predictions;

    // Filter by course (should already be handled, but keeping for safety)
    filteredPredictions = filteredPredictions.filter(prediction => 
      prediction.courses.some(course => course.name === selectedCourse)
    );

    // Filter by location (state) if specified
    if (selectedLocation) {
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.location === selectedLocation
      );
    }

    // Filter by type if specified
    if (selectedType) {
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.type === selectedType
      );
    }

    // Filter by rating range if specified
    if (selectedRating) {
      const [minRating, maxRating] = selectedRating.split('-').map(Number);
      filteredPredictions = filteredPredictions.filter(prediction => 
        prediction.rating >= minRating && prediction.rating <= maxRating
      );
    }

    // Sort by eligibility score (descending)
    filteredPredictions.sort((a, b) => b.eligibilityScore - a.eligibilityScore);

    setPredictions(filteredPredictions);

    // Show appropriate toast message
    if (filteredPredictions.length > 0) {
      const topCollege = filteredPredictions[0];
      toast({
        title: 'Prediction Complete',
        description: `Your score gives you a ${Math.round(topCollege.eligibilityScore)}% chance at ${topCollege.name}`,
        variant: 'default',
      });
    } else {
      toast({
        title: 'No Matches Found',
        description: 'No colleges match your criteria. Try adjusting your filters or score.',
        variant: 'destructive',
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
    <Box sx={{ 
      maxWidth: 1200, 
      mx: 'auto', 
      p: { xs: 1.5, sm: 2, md: 3 },
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <Paper sx={{ 
        p: { xs: 2, sm: 3 }, 
        mb: 3,
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }}>
          College Predictor
        </Typography>
        <Stack spacing={{ xs: 2, md: 3 }}>
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

          <FormControl fullWidth>
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

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 2 }}>
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

            <FormControl fullWidth sx={{ minWidth: { xs: '100%', sm: 200 } }}>
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

            <FormControl fullWidth sx={{ minWidth: { xs: '100%', sm: 200 } }}>
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
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontSize: { xs: '1.35rem', sm: '1.5rem' }, mt: { xs: 2, sm: 0 } }}>
            Recommended Colleges
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
            gap: { xs: 2, md: 3 },
            width: '100%'
          }}>
            {predictions.map((college) => (
              <Card 
                key={college.id}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-4px)' },
                    boxShadow: { xs: 1, sm: 3 }
                  },
                  width: '100%',
                  maxWidth: '100%',
                  mx: 'auto'
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between', 
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: 1,
                      width: '100%'
                    }}>
                      <Box>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1, 
                          flexWrap: 'wrap',
                          width: '100%',
                          mb: { xs: 1, sm: 0 }
                        }}>
                          <Typography variant="h6" gutterBottom sx={{ mb: 0, mr: 1 }}>
                            {college.name}
                          </Typography>
                          <Tooltip title="Visit official website">
                            <Link 
                              href={college.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              color="primary"
                              sx={{ 
                                display: 'flex', 
                                alignItems: 'center',
                                textDecoration: 'none',
                                '&:hover': {
                                  textDecoration: 'underline',
                                }
                              }}
                            >
                              <OpenInNew fontSize="small" sx={{ fontSize: '1rem' }} />
                            </Link>
                          </Tooltip>
                        </Box>
                        <Stack direction="row" spacing={1} sx={{ mt: { xs: 1, sm: 0 } }}>
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
                      <Box sx={{ 
                        textAlign: { xs: 'left', sm: 'right' },
                        width: { xs: '100%', sm: 'auto' },
                        mt: { xs: 1, sm: 0 }
                      }}>
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

                    <Box sx={{ 
                      display: 'flex', 
                      gap: { xs: 1.5, sm: 2 }, 
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'space-between', sm: 'flex-start' },
                      '& > div': {
                        flex: { xs: '0 0 calc(50% - 8px)', sm: 'auto' },
                        minWidth: { xs: 'auto', sm: '100px' }
                      }
                    }}>
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
                      size={window.innerWidth < 600 ? 'small' : 'medium'}
                      sx={{
                        mt: 1,
                        py: { xs: 1, sm: 1.25 },
                        fontSize: { xs: '0.875rem', sm: '1rem' }
                      }}
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