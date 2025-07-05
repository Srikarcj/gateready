import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
  Button,
  Card,
  CardContent,
  Stack,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Container,
  Avatar,
  LinearProgress,
  Tooltip,
  Breadcrumbs,
  Link,
  alpha
} from '@mui/material';
import {
  LocationOn,
  School,
  Work,
  DirectionsBus,
  DirectionsCar,
  Train,
  Flight,
  Wifi,
  Sports,
  Restaurant,
  LocalLibrary,
  Security,
  MedicalServices,
  Computer,
  Language,
  Phone,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Instagram,
  Favorite,
  FavoriteBorder,
  Share,
  Bookmark,
  BookmarkBorder,
  NavigateNext,
  Home,
  TrendingUp,
  DirectionsSubway,
  Engineering,
  Architecture,
  ArrowBack,
  Science,
  OpenInNew
} from '@mui/icons-material';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import { colleges } from './collegeData';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`college-tabpanel-${index}`}
      aria-labelledby={`college-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const CollegeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const college = colleges.find(c => c.id === id);

  if (!college) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper 
          sx={{ 
            p: 4, 
            textAlign: 'center',
            background: 'linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)',
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}
        >
          <Typography variant="h4" color="error" gutterBottom>
            College Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The college you're looking for doesn't exist or has been removed.
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/college-predictor')}
            sx={{
              mt: 2,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
              }
            }}
          >
            Back to College Predictor
          </Button>
        </Paper>
      </Container>
    );
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getPlacementColor = (percentage: number) => {
    if (percentage >= 90) return '#4CAF50';
    if (percentage >= 75) return '#2196F3';
    if (percentage >= 60) return '#FF9800';
    return '#F44336';
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'CS':
        return <Computer />;
      case 'EC':
      case 'EE':
      case 'ME':
      case 'CE':
        return <Engineering />;
      case 'CH':
      case 'PI':
        return <Science />;
      default:
        return <Architecture />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs 
        separator={<NavigateNext fontSize="small" />} 
        sx={{ mb: 3 }}
      >
        <Link
          component={RouterLink}
          to="/"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Home sx={{ mr: 0.5 }} fontSize="small" />
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/college-predictor"
          color="inherit"
        >
          College Predictor
        </Link>
        <Typography color="text.primary">{college.name}</Typography>
      </Breadcrumbs>

      {/* Header Section */}
      <Paper 
        sx={{ 
          p: { xs: 2, sm: 3 }, 
          mb: 3,
          background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.1)} 30%, ${alpha(theme.palette.secondary.main, 0.1)} 90%)`,
          overflow: 'hidden',
        }}
      >
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 2, sm: 3 }} 
          alignItems={{ xs: 'flex-start', sm: 'center' }} 
          sx={{ mb: 3, width: '100%' }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
            width: { xs: '100%', sm: 'auto' }
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
              <Avatar 
                sx={{ 
                  width: 64, 
                  height: 64,
                  bgcolor: college.type === 'IIT' ? 'primary.main' : 'secondary.main',
                  flexShrink: 0
                }}
              >
                <School sx={{ fontSize: 40 }} />
              </Avatar>
              <Box sx={{ flex: 1, overflow: 'hidden' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontSize: '2rem',
                      lineHeight: 1.2,
                      wordBreak: 'break-word',
                      flex: '1 1 auto',
                      minWidth: 0
                    }}
                  >
                    {college.name}
                  </Typography>
                  <Chip
                    label={college.type}
                    color={college.type === 'IIT' ? 'primary' : 'secondary'}
                    sx={{ height: 32, fontSize: '0.875rem' }}
                  />
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 1,
                  alignItems: 'center',
                  mt: 1
                }}>
                  <Chip
                    icon={<LocationOn />}
                    label={college.location}
                    variant="outlined"
                    size="medium"
                  />
                  <Chip
                    icon={<TrendingUp />}
                    label={`Rank #${college.rank}`}
                    color="info"
                    size="medium"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={college.rating} precision={0.5} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                      ({college.rating})
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            ml: 2,
            flexShrink: 0
          }}>
            <Stack direction="row" spacing={1}>
              <Tooltip title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
                <IconButton 
                  onClick={() => setIsFavorite(!isFavorite)} 
                  color={isFavorite ? 'primary' : 'default'}
                  size={isMobile ? 'small' : 'medium'}
                >
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Tooltip>
              <Tooltip title={isBookmarked ? 'Remove bookmark' : 'Bookmark this college'}>
                <IconButton 
                  onClick={toggleBookmark} 
                  color={isBookmarked ? 'primary' : 'default'}
                  size={isMobile ? 'small' : 'medium'}
                >
                  {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton size={isMobile ? 'small' : 'medium'}>
                  <Share />
                </IconButton>
              </Tooltip>
              <Tooltip title={`Visit ${college.name} official website`}>
                <Button
                  variant="contained"
                  startIcon={<Language />}
                  href={college.website.startsWith('http') ? college.website : `https://${college.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  size={isMobile ? 'small' : 'medium'}
                  fullWidth={isMobile}
                  sx={{
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
                    },
                    whiteSpace: 'nowrap',
                    minWidth: 'auto',
                    '@media (max-width: 600px)': {
                      width: '100%',
                      mt: 1
                    }
                  }}
                  onClick={(e) => {
                    if (!college.website) {
                      e.preventDefault();
                      console.warn('Website URL is not available');
                    }
                  }}
                >
                  {isMobile ? 'Website' : 'Visit Website'}
                </Button>
              </Tooltip>
            </Stack>
          </Box>
        </Stack>

        <Typography variant="body1" paragraph>
          {college.description}
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Stats
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Established"
                      secondary={college.established}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Campus Size"
                      secondary={college.campusSize}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Cut-off"
                      secondary={`${college.cutOff}%`}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Placement Stats
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Average Package"
                      secondary={`${college.placement.average} LPA`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Highest Package"
                      secondary={`${college.placement.highest} LPA`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Top Recruiters"
                      secondary={college.placement.companies.join(', ')}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          <Grid sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Transport Options
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <DirectionsBus color={college.transport.bus ? 'primary' : 'disabled'} />
                    </ListItemIcon>
                    <ListItemText primary="Bus Service" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Train color={college.transport.train ? 'primary' : 'disabled'} />
                    </ListItemIcon>
                    <ListItemText primary="Train Station" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <DirectionsSubway color={college.transport.metro ? 'primary' : 'disabled'} />
                    </ListItemIcon>
                    <ListItemText primary="Metro Station" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Content Section */}
      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? "auto" : false}
          sx={{
            mb: 3,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
            }
          }}
        >
          <Tab label="Courses" />
          <Tab label="Facilities" />
          <Tab label="Research Centers" />
        </Tabs>

        <TabPanel value={selectedTab} index={0}>
          <Grid container spacing={3}>
            {college.courses.map((course, index) => (
              <Grid key={index} sx={{ width: { xs: '100%', md: '50%' } }}>
                <Card>
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {getCategoryIcon(course.category)}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {course.name}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                          <Chip
                            label={`Cut-off: ${course.cutOff}%`}
                            size="small"
                            color="primary"
                          />
                          <Chip
                            label={`Seats: ${course.seats}`}
                            size="small"
                            variant="outlined"
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={selectedTab} index={1}>
          <Grid container spacing={3}>
            {college.facilities.map((facility, index) => (
              <Grid key={index} sx={{ width: { xs: '100%', md: '33.33%' } }}>
                <Card>
                  <CardContent>
                    <Typography variant="body1">
                      {facility}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={selectedTab} index={2}>
          <Grid container spacing={3}>
            {college.researchCenters.map((center, index) => (
              <Grid key={index} sx={{ width: { xs: '100%', md: '50%' } }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {center}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default CollegeDetails; 