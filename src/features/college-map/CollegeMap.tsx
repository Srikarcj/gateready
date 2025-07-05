import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Chip,
  useTheme,
  useMediaQuery,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  Autocomplete
} from '@mui/material';
import {
  LocationOn,
  DirectionsBus,
  DirectionsWalk,
  DirectionsCar,
  Search as SearchIcon,
  MyLocation,
  AccessTime,
  Directions,
  Star,
  StarBorder,
  Favorite,
  FavoriteBorder,
  Navigation,
  Train,
  DirectionsTransit,
  LocalAtm,
  People,
  Schedule,
  School
} from '@mui/icons-material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { colleges } from '../predictor/collegeData';

// Fix for default marker icons in Leaflet with React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Location {
  id: string;
  name: string;
  type: 'building' | 'facility' | 'parking' | 'bus-stop';
  position: {
    lat: number;
    lng: number;
  };
  description: string;
  rating: number;
  isFavorite: boolean;
}

interface TransportOption {
  type: 'bus' | 'walk' | 'car' | 'train' | 'metro';
  duration: string;
  distance: string;
  details: string;
  icon: React.ReactNode;
  cost: string;
  frequency: string;
  stops: string[];
  liveStatus: 'on-time' | 'delayed';
  nextArrival: string;
  occupancy: number;
  availability: {
    startTime: string;
    endTime: string;
    days: string[];
  };
  amenities: string[];
}

const CollegeMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [transportOptions, setTransportOptions] = useState<TransportOption[]>([]);
  const [hometown, setHometown] = useState('');
  const [hometownCoordinates, setHometownCoordinates] = useState<[number, number] | null>(null);
  const [route, setRoute] = useState<[number, number][]>([]);
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [selectedCollege, setSelectedCollege] = useState<any>(null);

  const defaultCenter: [number, number] = [20.5937, 78.9629]; // Center of India
  const mapStyle = {
    height: '600px',
    width: '100%',
    borderRadius: '8px'
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = colleges.filter(college => 
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredColleges(filtered);
    } else {
      setFilteredColleges(colleges);
    }
  }, [searchQuery]);

  const handleCollegeSelect = (college: any) => {
    setSelectedCollege(college);
    setSelectedLocation({
      id: college.id,
      name: college.name,
      type: 'building',
      position: {
        lat: college.lat || 0,
        lng: college.lng || 0
      },
      description: college.description,
      rating: college.rating,
      isFavorite: false
    });
    if (hometownCoordinates) {
      calculateRoute({
        id: college.id,
        name: college.name,
        type: 'building',
        position: {
          lat: college.lat || 0,
          lng: college.lng || 0
        },
        description: college.description,
        rating: college.rating,
        isFavorite: false
      });
    }
  };

  const handleHometownSearch = async () => {
    if (!hometown) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(hometown)}`
      );
      const data = await response.json();
      
      if (data && data[0]) {
        setHometownCoordinates([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
      }
    } catch (error) {
      console.error('Error geocoding hometown:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateRoute = async (destination: Location) => {
    if (!hometownCoordinates) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${hometownCoordinates[1]},${hometownCoordinates[0]};${destination.position.lng},${destination.position.lat}?overview=full&geometries=geojson`
      );
      const data = await response.json();

      if (data.routes && data.routes[0]) {
        const coordinates = data.routes[0].geometry.coordinates.map((coord: number[]) => [coord[1], coord[0]]);
        setRoute(coordinates);

        const distance = data.routes[0].distance / 1000; // Convert to km
        const duration = data.routes[0].duration / 60; // Convert to minutes

        setTransportOptions([
          {
            type: 'car',
            duration: `${Math.round(duration)} mins`,
            distance: `${distance.toFixed(1)} km`,
            details: 'Parking available at destination',
            icon: <DirectionsCar />,
            cost: `₹${Math.round(distance * 2)}`,
            frequency: '24/7',
            stops: [],
            liveStatus: 'on-time',
            nextArrival: 'Now',
            occupancy: 0,
            availability: {
              startTime: '00:00',
              endTime: '23:59',
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            amenities: ['Parking', 'Charging Station', 'Rest Area']
          },
          {
            type: 'bus',
            duration: `${Math.round(duration * 1.5)} mins`,
            distance: `${distance.toFixed(1)} km`,
            details: 'Bus stop 5 min walk from destination',
            icon: <DirectionsBus />,
            cost: `₹${Math.round(distance)}`,
            frequency: 'Every 30 mins',
            stops: ['Main Bus Terminal', 'City Center', 'College Road'],
            liveStatus: 'on-time',
            nextArrival: '15 mins',
            occupancy: 60,
            availability: {
              startTime: '06:00',
              endTime: '22:00',
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            amenities: ['AC', 'WiFi', 'USB Charging', 'Wheelchair Access']
          },
          {
            type: 'train',
            duration: `${Math.round(duration * 1.2)} mins`,
            distance: `${distance.toFixed(1)} km`,
            details: 'Nearest station: 10 min walk',
            icon: <Train />,
            cost: `₹${Math.round(distance * 1.5)}`,
            frequency: 'Every 1 hour',
            stops: ['Central Station', 'City Junction', 'College Station'],
            liveStatus: 'on-time',
            nextArrival: '45 mins',
            occupancy: 40,
            availability: {
              startTime: '05:00',
              endTime: '23:00',
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            amenities: ['AC', 'Food Court', 'Waiting Room', 'Wheelchair Access']
          },
          {
            type: 'metro',
            duration: `${Math.round(duration * 1.1)} mins`,
            distance: `${distance.toFixed(1)} km`,
            details: 'Metro station 8 min walk from destination',
            icon: <DirectionsTransit />,
            cost: `₹${Math.round(distance * 1.2)}`,
            frequency: 'Every 15 mins',
            stops: ['Central Metro', 'City Center', 'College Metro'],
            liveStatus: 'on-time',
            nextArrival: '10 mins',
            occupancy: 70,
            availability: {
              startTime: '06:00',
              endTime: '22:00',
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            },
            amenities: ['AC', 'WiFi', 'Digital Display', 'Wheelchair Access']
          },
          {
            type: 'walk',
            duration: `${Math.round(duration * 3)} mins`,
            distance: `${distance.toFixed(1)} km`,
            details: 'Scenic route through campus',
            icon: <DirectionsWalk />,
            cost: 'Free',
            frequency: '24/7',
            stops: [],
            liveStatus: 'on-time',
            nextArrival: 'Now',
            occupancy: 0,
            availability: {
              startTime: '00:00',
              endTime: '23:59',
              days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            amenities: ['Footpath', 'Street Lights', 'Public Restrooms']
          }
        ]);
      }
    } catch (error) {
      console.error('Error calculating route:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    calculateRoute(location);
  };

  const toggleFavorite = (locationId: string) => {
    // Implement favorite toggling logic
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ 
          fontWeight: 'bold',
          fontSize: { xs: '1.75rem', sm: '2.5rem' },
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          College Map
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Enter Your Hometown
            </Typography>
            <TextField
              fullWidth
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
              placeholder="Enter your hometown"
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleHometownSearch}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Search'}
            </Button>
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Search College
            </Typography>
            <Autocomplete
              options={filteredColleges}
              getOptionLabel={(option) => `${option.name}, ${option.city}`}
              onChange={(_, value) => value && handleCollegeSelect(value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Search for a college"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              )}
              renderOption={(props, option) => {
                const { key, ...restProps } = props;
                return (
                  <ListItem key={key} {...restProps}>
                    <ListItemIcon>
                      <School />
                    </ListItemIcon>
                    <ListItemText
                      primary={option.name}
                      secondary={`${option.city}, ${option.location}`}
                    />
                  </ListItem>
                );
              }}
            />
          </Paper>

          {selectedCollege && (
            <Paper sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                College Details
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {selectedCollege.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedCollege.city}, {selectedCollege.location}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {selectedCollege.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                  <Chip 
                    label={selectedCollege.type} 
                    size="small"
                    sx={{ 
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      color: 'white'
                    }}
                  />
                  <Chip 
                    icon={<School />}
                    label={`Rating: ${selectedCollege.rating}`}
                    size="small"
                    sx={{ 
                      background: 'linear-gradient(45deg, #FF9800 30%, #FFB74D 90%)',
                      color: 'white'
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          )}

          {route.length > 0 && (
            <Paper sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Transport Options
              </Typography>
              <List>
                {transportOptions.map((option, index) => (
                  <ListItem 
                    key={index}
                    sx={{
                      mb: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      }
                    }}
                  >
                    <Box sx={{ width: '100%' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <ListItemIcon>{option.icon}</ListItemIcon>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {option.type.toUpperCase()}
                        </Typography>
                        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
                          <AccessTime fontSize="small" />
                          <Typography variant="body2">{option.duration}</Typography>
                          <LocationOn fontSize="small" />
                          <Typography variant="body2">{option.distance}</Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LocalAtm fontSize="small" />
                          <Typography variant="body2">Cost: {option.cost}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Schedule fontSize="small" />
                          <Typography variant="body2">Next: {option.nextArrival}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <People fontSize="small" />
                          <Typography variant="body2">Occupancy: {option.occupancy}%</Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {option.details}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                        {option.amenities.map((amenity, idx) => (
                          <Chip
                            key={idx}
                            label={amenity}
                            size="small"
                            sx={{ 
                              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                              color: 'white'
                            }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Available: {option.availability.startTime} - {option.availability.endTime}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Days: {option.availability.days.join(', ')}
                        </Typography>
                      </Box>

                      {option.stops.length > 0 && (
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            Stops: {option.stops.join(' → ')}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>

        <Box sx={{ width: { xs: '100%', md: '66.66%' } }}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <MapContainer center={defaultCenter} zoom={5} style={mapStyle}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {hometownCoordinates && (
                <Marker position={hometownCoordinates}>
                  <Popup>
                    Your Hometown: {hometown}
                  </Popup>
                </Marker>
              )}
              {filteredColleges.map((college) => (
                <Marker 
                  key={college.id}
                  position={[college.lat || 0, college.lng || 0]}
                  eventHandlers={{
                    click: () => handleCollegeSelect(college)
                  }}
                >
                  <Popup>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {college.name}
                      </Typography>
                      <Typography variant="body2">
                        {college.city}, {college.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Rating: {college.rating}
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              ))}
              {route.length > 0 && (
                <Polyline
                  positions={route}
                  color="#2196F3"
                  weight={5}
                  opacity={0.7}
                />
              )}
            </MapContainer>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default CollegeMap; 