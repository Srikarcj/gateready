import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MapPin, Bus, Train, Car, Clock, Users, AlertCircle, Navigation, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Switch } from '@/components/ui/switch';

// Fix for default marker icons in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface College {
  id: string;
  name: string;
  type: 'IIT' | 'NIT';
  location: {
    lat: number;
    lng: number;
  };
  transportOptions: TransportOption[];
}

interface TransportOption {
  type: 'bus' | 'train' | 'car' | 'metro';
  name: string;
  duration: string;
  distance: string;
  cost: string;
  frequency: string;
  stops: string[];
  liveStatus: 'on-time' | 'delayed' | 'cancelled';
  nextArrival: string;
  occupancy: number;
}

// All IITs and NITs with their locations and transport options
const colleges: College[] = [
  // IITs
  {
    id: 'IITB',
    name: 'IIT Bombay',
    type: 'IIT',
    location: { lat: 19.1334, lng: 72.9133 },
    transportOptions: [
      {
        type: 'train',
        name: 'Mumbai Local',
        duration: '45 mins',
        distance: '12 km',
        cost: '₹30',
        frequency: 'Every 15 mins',
        stops: ['Andheri', 'Powai', 'IIT Main Gate'],
        liveStatus: 'on-time',
        nextArrival: '5 mins',
        occupancy: 75
      },
      {
        type: 'bus',
        name: 'BEST Bus',
        duration: '1 hour',
        distance: '15 km',
        cost: '₹25',
        frequency: 'Every 20 mins',
        stops: ['Andheri Station', 'Powai', 'IIT Gate'],
        liveStatus: 'delayed',
        nextArrival: '10 mins',
        occupancy: 60
      },
      {
        type: 'metro',
        name: 'Mumbai Metro',
        duration: '35 mins',
        distance: '10 km',
        cost: '₹40',
        frequency: 'Every 10 mins',
        stops: ['Andheri Metro', 'Powai', 'IIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '3 mins',
        occupancy: 45
      }
    ]
  },
  {
    id: 'IITD',
    name: 'IIT Delhi',
    type: 'IIT',
    location: { lat: 28.5450, lng: 77.1925 },
    transportOptions: [
      {
        type: 'train',
        name: 'Delhi Metro',
        duration: '30 mins',
        distance: '8 km',
        cost: '₹40',
        frequency: 'Every 10 mins',
        stops: ['Hauz Khas', 'IIT Delhi'],
        liveStatus: 'on-time',
        nextArrival: '3 mins',
        occupancy: 85
      }
    ]
  },
  {
    id: 'IITM',
    name: 'IIT Madras',
    type: 'IIT',
    location: { lat: 12.9915, lng: 80.2337 },
    transportOptions: [
      {
        type: 'train',
        name: 'Chennai Local',
        duration: '40 mins',
        distance: '15 km',
        cost: '₹35',
        frequency: 'Every 20 mins',
        stops: ['Tambaram', 'Guindy', 'IIT Madras'],
        liveStatus: 'delayed',
        nextArrival: '15 mins',
        occupancy: 70
      }
    ]
  },
  {
    id: 'IITK',
    name: 'IIT Kanpur',
    type: 'IIT',
    location: { lat: 26.5123, lng: 80.2329 },
    transportOptions: [
      {
        type: 'bus',
        name: 'UPSRTC Bus',
        duration: '1.5 hours',
        distance: '30 km',
        cost: '₹50',
        frequency: 'Every 30 mins',
        stops: ['Kanpur Central', 'IIT Kanpur'],
        liveStatus: 'on-time',
        nextArrival: '20 mins',
        occupancy: 50
      }
    ]
  },
  {
    id: 'IITKGP',
    name: 'IIT Kharagpur',
    type: 'IIT',
    location: { lat: 22.3149, lng: 87.3105 },
    transportOptions: [
      {
        type: 'train',
        name: 'Kharagpur Local',
        duration: '20 mins',
        distance: '5 km',
        cost: '₹10',
        frequency: 'Every 30 mins',
        stops: ['Kharagpur Station', 'IIT Kharagpur'],
        liveStatus: 'on-time',
        nextArrival: '8 mins',
        occupancy: 40
      }
    ]
  },
  {
    id: 'IITR',
    name: 'IIT Roorkee',
    type: 'IIT',
    location: { lat: 29.8543, lng: 77.8880 },
    transportOptions: [
      {
        type: 'bus',
        name: 'UPSRTC Bus',
        duration: '2 hours',
        distance: '40 km',
        cost: '₹60',
        frequency: 'Every 45 mins',
        stops: ['Roorkee Station', 'IIT Roorkee'],
        liveStatus: 'delayed',
        nextArrival: '25 mins',
        occupancy: 65
      }
    ]
  },
  {
    id: 'IITG',
    name: 'IIT Guwahati',
    type: 'IIT',
    location: { lat: 26.1879, lng: 91.6912 },
    transportOptions: [
      {
        type: 'bus',
        name: 'ASTC Bus',
        duration: '1 hour',
        distance: '20 km',
        cost: '₹40',
        frequency: 'Every 30 mins',
        stops: ['Guwahati Station', 'IIT Guwahati'],
        liveStatus: 'on-time',
        nextArrival: '12 mins',
        occupancy: 55
      }
    ]
  },
  {
    id: 'IITH',
    name: 'IIT Hyderabad',
    type: 'IIT',
    location: { lat: 17.5932, lng: 78.3328 },
    transportOptions: [
      {
        type: 'metro',
        name: 'Hyderabad Metro',
        duration: '40 mins',
        distance: '25 km',
        cost: '₹50',
        frequency: 'Every 15 mins',
        stops: ['Ameerpet', 'Kukatpally', 'IIT Hyderabad'],
        liveStatus: 'on-time',
        nextArrival: '7 mins',
        occupancy: 55
      },
      {
        type: 'bus',
        name: 'TSRTC Bus',
        duration: '1.5 hours',
        distance: '30 km',
        cost: '₹35',
        frequency: 'Every 30 mins',
        stops: ['Secunderabad', 'Kukatpally', 'IIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '20 mins',
        occupancy: 70
      }
    ]
  },
  {
    id: 'IITM',
    name: 'IIT Mandi',
    type: 'IIT',
    location: { lat: 31.7082, lng: 76.9324 },
    transportOptions: [
      {
        type: 'bus',
        name: 'HRTC Bus',
        duration: '2 hours',
        distance: '50 km',
        cost: '₹100',
        frequency: 'Every 2 hours',
        stops: ['Mandi Bus Stand', 'Kamand', 'IIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '45 mins',
        occupancy: 40
      }
    ]
  },
  {
    id: 'IITBHU',
    name: 'IIT BHU',
    type: 'IIT',
    location: { lat: 25.2677, lng: 82.9913 },
    transportOptions: [
      {
        type: 'bus',
        name: 'UPSRTC Bus',
        duration: '1 hour',
        distance: '20 km',
        cost: '₹30',
        frequency: 'Every 30 mins',
        stops: ['Varanasi Junction', 'BHU Gate', 'IIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '15 mins',
        occupancy: 60
      },
      {
        type: 'train',
        name: 'Varanasi Local',
        duration: '45 mins',
        distance: '15 km',
        cost: '₹20',
        frequency: 'Every 1 hour',
        stops: ['Varanasi Station', 'BHU', 'IIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '25 mins',
        occupancy: 45
      }
    ]
  },
  {
    id: 'IITGN',
    name: 'IIT Gandhinagar',
    type: 'IIT',
    location: { lat: 23.2156, lng: 72.6369 },
    transportOptions: [
      {
        type: 'bus',
        name: 'Gujarat Bus',
        duration: '1.5 hours',
        distance: '30 km',
        cost: '₹40',
        frequency: 'Every 45 mins',
        stops: ['Ahmedabad', 'Gandhinagar', 'IIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '20 mins',
        occupancy: 55
      },
      {
        type: 'metro',
        name: 'Ahmedabad Metro',
        duration: '1 hour',
        distance: '25 km',
        cost: '₹35',
        frequency: 'Every 20 mins',
        stops: ['Ahmedabad Metro', 'Gandhinagar', 'IIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '10 mins',
        occupancy: 40
      }
    ]
  },
  {
    id: 'IITP',
    name: 'IIT Palakkad',
    type: 'IIT',
    location: { lat: 10.7867, lng: 76.6548 },
    transportOptions: [
      {
        type: 'bus',
        name: 'KSRTC Bus',
        duration: '2 hours',
        distance: '40 km',
        cost: '₹50',
        frequency: 'Every 1 hour',
        stops: ['Palakkad', 'Nila Campus', 'IIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '35 mins',
        occupancy: 50
      }
    ]
  },
  // NITs
  {
    id: 'NITK',
    name: 'NIT Karnataka',
    type: 'NIT',
    location: { lat: 13.0089, lng: 74.7937 },
    transportOptions: [
      {
        type: 'bus',
        name: 'KSRTC Bus',
        duration: '1 hour',
        distance: '25 km',
        cost: '₹50',
        frequency: 'Every 30 mins',
        stops: ['Mangalore', 'Surathkal'],
        liveStatus: 'on-time',
        nextArrival: '15 mins',
        occupancy: 70
      },
      {
        type: 'train',
        name: 'Mangalore Local',
        duration: '45 mins',
        distance: '20 km',
        cost: '₹30',
        frequency: 'Every 1 hour',
        stops: ['Mangalore Central', 'Surathkal', 'NIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '25 mins',
        occupancy: 60
      }
    ]
  },
  {
    id: 'NITT',
    name: 'NIT Trichy',
    type: 'NIT',
    location: { lat: 10.7635, lng: 78.8136 },
    transportOptions: [
      {
        type: 'bus',
        name: 'TNSTC Bus',
        duration: '45 mins',
        distance: '20 km',
        cost: '₹40',
        frequency: 'Every 20 mins',
        stops: ['Trichy Central', 'NIT Trichy'],
        liveStatus: 'delayed',
        nextArrival: '18 mins',
        occupancy: 60
      }
    ]
  },
  {
    id: 'NITW',
    name: 'NIT Warangal',
    type: 'NIT',
    location: { lat: 17.9689, lng: 79.5941 },
    transportOptions: [
      {
        type: 'bus',
        name: 'TSRTC Bus',
        duration: '1 hour',
        distance: '30 km',
        cost: '₹45',
        frequency: 'Every 30 mins',
        stops: ['Warangal Bus Stand', 'NIT Warangal'],
        liveStatus: 'on-time',
        nextArrival: '10 mins',
        occupancy: 45
      }
    ]
  },
  {
    id: 'NITD',
    name: 'NIT Durgapur',
    type: 'NIT',
    location: { lat: 23.5204, lng: 87.3119 },
    transportOptions: [
      {
        type: 'train',
        name: 'Durgapur Local',
        duration: '30 mins',
        distance: '10 km',
        cost: '₹15',
        frequency: 'Every 45 mins',
        stops: ['Durgapur Station', 'NIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '12 mins',
        occupancy: 35
      },
      {
        type: 'bus',
        name: 'WBTC Bus',
        duration: '45 mins',
        distance: '15 km',
        cost: '₹20',
        frequency: 'Every 30 mins',
        stops: ['Durgapur Bus Stand', 'NIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '18 mins',
        occupancy: 60
      }
    ]
  },
  {
    id: 'NITH',
    name: 'NIT Hamirpur',
    type: 'NIT',
    location: { lat: 31.7082, lng: 76.5324 },
    transportOptions: [
      {
        type: 'bus',
        name: 'HRTC Bus',
        duration: '1.5 hours',
        distance: '35 km',
        cost: '₹45',
        frequency: 'Every 2 hours',
        stops: ['Hamirpur Bus Stand', 'NIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '40 mins',
        occupancy: 45
      }
    ]
  },
  {
    id: 'NITS',
    name: 'NIT Silchar',
    type: 'NIT',
    location: { lat: 24.8333, lng: 92.7789 },
    transportOptions: [
      {
        type: 'bus',
        name: 'ASTC Bus',
        duration: '1 hour',
        distance: '25 km',
        cost: '₹35',
        frequency: 'Every 1 hour',
        stops: ['Silchar Bus Stand', 'NIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '25 mins',
        occupancy: 55
      }
    ]
  },
  {
    id: 'NITC',
    name: 'NIT Calicut',
    type: 'NIT',
    location: { lat: 11.3171, lng: 75.9282 },
    transportOptions: [
      {
        type: 'bus',
        name: 'KSRTC Bus',
        duration: '1.5 hours',
        distance: '35 km',
        cost: '₹60',
        frequency: 'Every 45 mins',
        stops: ['Calicut', 'NIT Calicut'],
        liveStatus: 'on-time',
        nextArrival: '25 mins',
        occupancy: 50
      }
    ]
  },
  {
    id: 'NITR',
    name: 'NIT Rourkela',
    type: 'NIT',
    location: { lat: 22.2492, lng: 84.9028 },
    transportOptions: [
      {
        type: 'bus',
        name: 'OSRTC Bus',
        duration: '1 hour',
        distance: '15 km',
        cost: '₹30',
        frequency: 'Every 20 mins',
        stops: ['Rourkela Station', 'NIT Rourkela'],
        liveStatus: 'on-time',
        nextArrival: '8 mins',
        occupancy: 65
      }
    ]
  },
  {
    id: 'NITJ',
    name: 'NIT Jalandhar',
    type: 'NIT',
    location: { lat: 31.3260, lng: 75.5762 },
    transportOptions: [
      {
        type: 'bus',
        name: 'Punjab Roadways',
        duration: '30 mins',
        distance: '10 km',
        cost: '₹20',
        frequency: 'Every 15 mins',
        stops: ['Jalandhar Bus Stand', 'NIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '5 mins',
        occupancy: 50
      },
      {
        type: 'train',
        name: 'Jalandhar Local',
        duration: '20 mins',
        distance: '8 km',
        cost: '₹15',
        frequency: 'Every 30 mins',
        stops: ['Jalandhar Station', 'NIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '12 mins',
        occupancy: 35
      }
    ]
  },
  {
    id: 'NITP',
    name: 'NIT Patna',
    type: 'NIT',
    location: { lat: 25.5941, lng: 85.1376 },
    transportOptions: [
      {
        type: 'bus',
        name: 'Bihar Roadways',
        duration: '45 mins',
        distance: '15 km',
        cost: '₹25',
        frequency: 'Every 20 mins',
        stops: ['Patna Bus Stand', 'NIT Campus'],
        liveStatus: 'delayed',
        nextArrival: '18 mins',
        occupancy: 65
      },
      {
        type: 'metro',
        name: 'Patna Metro',
        duration: '30 mins',
        distance: '12 km',
        cost: '₹30',
        frequency: 'Every 15 mins',
        stops: ['Patna Metro', 'NIT Campus'],
        liveStatus: 'on-time',
        nextArrival: '8 mins',
        occupancy: 45
      }
    ]
  }
];

const CollegeTransportExplorer = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'map' | 'list'>('map');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [filteredColleges, setFilteredColleges] = useState<College[]>(colleges);
  const [selectedType, setSelectedType] = useState<'all' | 'IIT' | 'NIT'>('all');
  const { toast } = useToast();
  const [selectedTransportType, setSelectedTransportType] = useState<'all' | 'bus' | 'train' | 'metro' | 'car'>('all');
  const [showLiveTracking, setShowLiveTracking] = useState(false);
  const [trackingInterval, setTrackingInterval] = useState<NodeJS.Timeout | null>(null);
  const [sourceCollege, setSourceCollege] = useState<College | null>(null);
  const [destinationCollege, setDestinationCollege] = useState<College | null>(null);
  const [routeDetails, setRouteDetails] = useState<{
    distance: number;
    duration: string;
    transportOptions: TransportOption[];
  } | null>(null);

  // Real-time location tracking
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          toast({
            title: 'Location Error',
            description: 'Unable to get your location. Please enable location services.',
            variant: 'destructive'
          });
        }
      );
    }
  }, []);

  // Filter colleges based on search and type
  useEffect(() => {
    const filtered = colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'all' || college.type === selectedType;
      return matchesSearch && matchesType;
    });
    setFilteredColleges(filtered);
  }, [searchQuery, selectedType]);

  // Calculate route from user location to selected college
  const calculateRoute = (college: College) => {
    if (!userLocation) return;

    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      college.location.lat,
      college.location.lng
    );

    // Enhance transport options with route-specific details
    const transportOptions = college.transportOptions.map(option => ({
      ...option,
      duration: `${Math.floor(distance / 50 * 60)} mins`, // Rough estimate
      distance: `${distance.toFixed(1)} km`,
      cost: `₹${Math.floor(distance * 2)}`, // Rough estimate
    }));

    setRouteDetails({
      distance,
      duration: `${Math.floor(distance / 50 * 60)} mins`,
      transportOptions
    });
  };

  // Enhanced live tracking
  useEffect(() => {
    if (showLiveTracking) {
      const interval = setInterval(() => {
        // Simulate live updates
        const updatedColleges = colleges.map(college => ({
          ...college,
          transportOptions: college.transportOptions.map(option => ({
            ...option,
            liveStatus: Math.random() > 0.8 ? 'delayed' as const : 'on-time' as const,
            nextArrival: `${Math.floor(Math.random() * 20)} mins`,
            occupancy: Math.floor(Math.random() * 100)
          }))
        }));
        setFilteredColleges(updatedColleges);

        // Update route details if college is selected
        if (selectedCollege) {
          calculateRoute(selectedCollege);
        }
      }, 30000); // Update every 30 seconds
      setTrackingInterval(interval);
    } else if (trackingInterval) {
      clearInterval(trackingInterval);
      setTrackingInterval(null);
    }
    return () => {
      if (trackingInterval) {
        clearInterval(trackingInterval);
      }
    };
  }, [showLiveTracking, selectedCollege]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast({
        title: 'Search Error',
        description: 'Please enter a college name to search.',
        variant: 'destructive'
      });
      return;
    }

    const found = colleges.find(
      college => college.name.toLowerCase() === searchQuery.toLowerCase()
    );

    if (found) {
      setSelectedCollege(found);
      calculateRoute(found);
      toast({
        title: 'College Found',
        description: `Found ${found.name}. Showing transport options.`
      });
    } else {
      toast({
        title: 'Not Found',
        description: 'No college found with that name. Please try again.',
        variant: 'destructive'
      });
    }
  };

  const getRouteColor = (type: string) => {
    switch (type) {
      case 'bus':
        return '#3b82f6'; // blue
      case 'train':
        return '#22c55e'; // green
      case 'car':
        return '#8b5cf6'; // purple
      default:
        return '#6b7280'; // gray
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-time':
        return 'bg-green-500';
      case 'delayed':
        return 'bg-yellow-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getOccupancyColor = (occupancy: number) => {
    if (occupancy >= 80) return 'bg-red-500';
    if (occupancy >= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Navigation className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">College Transport Explorer</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant={view === 'map' ? 'default' : 'outline'}
            onClick={() => setView('map')}
          >
            Map View
          </Button>
          <Button
            variant={view === 'list' ? 'default' : 'outline'}
            onClick={() => setView('list')}
          >
            List View
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Live Transport Map</CardTitle>
            {showLiveTracking && (
              <p className="text-sm text-muted-foreground">
                Live updates every 30 seconds
              </p>
            )}
          </CardHeader>
          <CardContent>
            <div className="h-[600px] rounded-lg overflow-hidden">
              <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* User Location Marker */}
                {userLocation && (
                  <Marker position={[userLocation.lat, userLocation.lng]}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">Your Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Lat: {userLocation.lat.toFixed(4)}, Lng: {userLocation.lng.toFixed(4)}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                )}

                {/* College Markers */}
                {filteredColleges.map((college) => (
                  <Marker
                    key={college.id}
                    position={[college.location.lat, college.location.lng]}
                  >
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">{college.name}</h3>
                        <p className="text-sm text-muted-foreground">{college.type}</p>
                        {userLocation && (
                          <p className="text-sm mt-2">
                            Distance: {calculateDistance(
                              userLocation.lat,
                              userLocation.lng,
                              college.location.lat,
                              college.location.lng
                            ).toFixed(1)} km
                          </p>
                        )}
                        <div className="mt-2">
                          {college.transportOptions.map((option, index) => (
                            <div key={`${college.id}-${index}`} className="text-sm border-t pt-2 mt-2">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{option.name}</p>
                                <Badge
                                  variant="secondary"
                                  className={getStatusColor(option.liveStatus)}
                                >
                                  {option.liveStatus}
                                </Badge>
                              </div>
                              <p>Next Arrival: {option.nextArrival}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                  <div
                                    className={`h-2 rounded-full ${getOccupancyColor(option.occupancy)}`}
                                    style={{ width: `${option.occupancy}%` }}
                                  />
                                </div>
                                <span className="text-xs">{option.occupancy}% full</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}

                {/* Route Lines */}
                {selectedCollege && userLocation && (
                  <Polyline
                    positions={[
                      [userLocation.lat, userLocation.lng],
                      [selectedCollege.location.lat, selectedCollege.location.lng]
                    ]}
                    color={getRouteColor(selectedCollege.transportOptions[0]?.type)}
                    weight={3}
                  />
                )}
              </MapContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search Colleges</Label>
                <div className="flex gap-2">
                  <Input
                    id="search"
                    placeholder="Enter college name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button onClick={handleSearch}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Filter by Type</Label>
                <Select value={selectedType} onValueChange={(value: 'all' | 'IIT' | 'NIT') => setSelectedType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colleges</SelectItem>
                    <SelectItem value="IIT">IITs</SelectItem>
                    <SelectItem value="NIT">NITs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Transport Type</Label>
                <Select value={selectedTransportType} onValueChange={(value: 'all' | 'bus' | 'train' | 'metro' | 'car') => setSelectedTransportType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select transport type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Transport</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="train">Train</SelectItem>
                    <SelectItem value="metro">Metro</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Transport Updates</CardTitle>
              {showLiveTracking && (
                <p className="text-sm text-muted-foreground">
                  Updates every 30 seconds
                </p>
              )}
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {filteredColleges.map((college) => (
                    <div
                      key={college.id}
                      className="p-4 border rounded-lg space-y-2 cursor-pointer hover:bg-muted"
                      onClick={() => {
                        setSelectedCollege(college);
                        calculateRoute(college);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="font-medium">{college.name}</span>
                        </div>
                        <Badge variant="secondary">{college.type}</Badge>
                      </div>
                      {userLocation && (
                        <p className="text-sm text-muted-foreground">
                          Distance: {calculateDistance(
                            userLocation.lat,
                            userLocation.lng,
                            college.location.lat,
                            college.location.lng
                          ).toFixed(1)} km
                        </p>
                      )}
                      <div className="space-y-2">
                        {college.transportOptions
                          .filter(option => selectedTransportType === 'all' || option.type === selectedTransportType)
                          .map((option, index) => (
                            <div key={`${college.id}-transport-${index}`} className="p-2 bg-muted rounded-md">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {option.type === 'bus' && <Bus className="h-4 w-4" />}
                                  {option.type === 'train' && <Train className="h-4 w-4" />}
                                  {option.type === 'metro' && <Train className="h-4 w-4" />}
                                  {option.type === 'car' && <Car className="h-4 w-4" />}
                                  <span className="text-sm font-medium">{option.name}</span>
                                </div>
                                <Badge
                                  variant="secondary"
                                  className={getStatusColor(option.liveStatus)}
                                >
                                  {option.liveStatus}
                                </Badge>
                              </div>
                              <div className="mt-2 flex items-center justify-between text-sm">
                                <span>Next: {option.nextArrival}</span>
                                <div className="flex items-center gap-2">
                                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                                    <div
                                      className={`h-2 rounded-full ${getOccupancyColor(option.occupancy)}`}
                                      style={{ width: `${option.occupancy}%` }}
                                    />
                                  </div>
                                  <span className="text-xs">{option.occupancy}%</span>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      {selectedCollege && routeDetails && (
        <Card>
          <CardHeader>
            <CardTitle>Transport Details - {selectedCollege.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {routeDetails.transportOptions
                .filter(option => selectedTransportType === 'all' || option.type === selectedTransportType)
                .map((option, index) => (
                  <div key={`${selectedCollege.id}-detail-${index}`} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {option.type === 'bus' && <Bus className="h-5 w-5 text-blue-500" />}
                        {option.type === 'train' && <Train className="h-5 w-5 text-green-500" />}
                        {option.type === 'metro' && <Train className="h-5 w-5 text-purple-500" />}
                        {option.type === 'car' && <Car className="h-5 w-5 text-orange-500" />}
                        <h3 className="font-medium">{option.name}</h3>
                      </div>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(option.liveStatus)}
                      >
                        {option.liveStatus}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Duration</span>
                        <span className="font-medium">{option.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Distance</span>
                        <span className="font-medium">{option.distance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Cost</span>
                        <span className="font-medium">{option.cost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Frequency</span>
                        <span className="font-medium">{option.frequency}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Next Arrival</span>
                        <span className="font-medium">{option.nextArrival}</span>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Occupancy</span>
                          <span className="text-sm">{option.occupancy}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div
                            className={`h-2 rounded-full ${getOccupancyColor(option.occupancy)}`}
                            style={{ width: `${option.occupancy}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-2">Stops:</p>
                      <div className="flex flex-wrap gap-2">
                        {option.stops.map((stop, i) => (
                          <Badge key={i} variant="secondary">
                            {stop}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CollegeTransportExplorer; 