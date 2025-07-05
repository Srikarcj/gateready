import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  FileText, 
  Download, 
  Search, 
  Filter,
  Bookmark,
  Share2,
  Star,
  Clock,
  Users,
  School,
  Building2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface StudyMaterial {
  id: number;
  title: string;
  subject: string;
  branch: string;
  type: 'pdf' | 'doc' | 'ppt' | 'video' | 'Notes';
  size: string;
  downloads: number;
  rating: number;
  lastUpdated: string;
  description: string;
  tags: string[];
  source: 'gatewithme' | 'community' | 'gatewithme.netlify.app';
  link: string;
}

interface College {
  id: number;
  name: string;
  image: string;
  description: string;
  website: string;
  type: 'IIT' | 'NIT';
  location: string;
  established: string;
}

interface AdvancedContent {
  id: number;
  title: string;
  category: string;
  type: 'article' | 'video' | 'course' | 'research';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  author: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

const subjectImages = {
  "Computer Science": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
  "Electronics": "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop&q=60",
  "Mechanical": "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&auto=format&fit=crop&q=60",
  "Electrical": "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop&q=60",
  "Civil": "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&auto=format&fit=crop&q=60",
  "Chemical": "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop&q=60",
  "Metallurgical": "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&auto=format&fit=crop&q=60",
  "Aerospace": "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop&q=60",
  "Biotechnology": "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop&q=60"
};

const studyMaterials: StudyMaterial[] = [
  // Computer Science Notes
  {
    id: 1,
    title: "Engineering Mathematics",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "8.5 MB",
    downloads: 1500,
    rating: 4.8,
    lastUpdated: "2024-02-15",
    description: "Complete notes on Engineering Mathematics for GATE CS",
    tags: ["Mathematics", "Calculus", "Linear Algebra"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/1-2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7/view"
  },
  {
    id: 2,
    title: "Discrete Mathematics",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "7.2 MB",
    downloads: 1200,
    rating: 4.7,
    lastUpdated: "2024-02-10",
    description: "Comprehensive notes on Discrete Mathematics concepts",
    tags: ["Discrete Math", "Logic", "Graph Theory"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/discrete-mathematics"
  },
  {
    id: 3,
    title: "Data Structures",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "10.5 MB",
    downloads: 1800,
    rating: 4.9,
    lastUpdated: "2024-02-05",
    description: "Complete notes on Data Structures with examples",
    tags: ["DSA", "Arrays", "Linked Lists"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/data-structures"
  },
  {
    id: 4,
    title: "Algorithms",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "9.8 MB",
    downloads: 1600,
    rating: 4.8,
    lastUpdated: "2024-02-12",
    description: "Detailed notes on Algorithms and complexity analysis",
    tags: ["Algorithms", "Complexity", "Sorting"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/algorithms"
  },
  {
    id: 5,
    title: "Computer Networks",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "11.2 MB",
    downloads: 1400,
    rating: 4.7,
    lastUpdated: "2024-02-08",
    description: "Complete notes on Computer Networks and protocols",
    tags: ["Networks", "Protocols", "TCP/IP"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/computer-networks"
  },
  {
    id: 6,
    title: "Operating Systems",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "10.8 MB",
    downloads: 1300,
    rating: 4.8,
    lastUpdated: "2024-02-14",
    description: "Detailed notes on OS concepts and process management",
    tags: ["OS", "Processes", "Memory"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/operating-systems"
  },
  {
    id: 7,
    title: "Compiler Design",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "8.9 MB",
    downloads: 1100,
    rating: 4.6,
    lastUpdated: "2024-02-11",
    description: "Complete notes on Compiler Design and phases",
    tags: ["Compiler", "Parsing", "Code Generation"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/compiler-design"
  },
  {
    id: 8,
    title: "Database Management Systems",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "9.5 MB",
    downloads: 1250,
    rating: 4.7,
    lastUpdated: "2024-02-13",
    description: "Detailed notes on DBMS concepts and SQL",
    tags: ["DBMS", "SQL", "Normalization"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/dbms"
  },
  {
    id: 9,
    title: "Theory of Computation",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "7.8 MB",
    downloads: 1000,
    rating: 4.6,
    lastUpdated: "2024-02-09",
    description: "Complete notes on automata and formal languages",
    tags: ["Automata", "Languages", "Computability"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/toc"
  },
  {
    id: 10,
    title: "Digital Logic",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "8.2 MB",
    downloads: 1150,
    rating: 4.7,
    lastUpdated: "2024-02-16",
    description: "Detailed notes on digital circuits and logic design",
    tags: ["Digital", "Circuits", "Boolean Algebra"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/digital-logic"
  },
  {
    id: 11,
    title: "Computer Organization",
    subject: "Computer Science",
    branch: "Computer Science",
    type: "Notes",
    size: "9.1 MB",
    downloads: 1200,
    rating: 4.8,
    lastUpdated: "2024-02-07",
    description: "Complete notes on computer architecture and organization",
    tags: ["Architecture", "Memory", "CPU"],
    source: "gatewithme.netlify.app",
    link: "https://gatewithme.netlify.app/notes/computer-organization"
  },

  // Electronics Notes
  {
    id: 12,
    title: "Digital Electronics",
    subject: "Electronics",
    branch: "Electronics",
    type: "Notes",
    size: "12.5 MB",
    downloads: 1200,
    rating: 4.7,
    lastUpdated: "2024-02-14",
    description: "Complete notes on Digital Electronics and Logic Design",
    tags: ["Digital", "Logic", "Circuits"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/2-3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8/view"
  },
  {
    id: 13,
    title: "Analog Electronics",
    subject: "Electronics",
    branch: "Electronics",
    type: "Notes",
    size: "10.8 MB",
    downloads: 1100,
    rating: 4.6,
    lastUpdated: "2024-02-13",
    description: "Detailed notes on Analog Circuits and Amplifiers",
    tags: ["Analog", "Circuits", "Amplifiers"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/3-4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9/view"
  },
  {
    id: 14,
    title: "Communication Systems",
    subject: "Electronics",
    branch: "Electronics",
    type: "Notes",
    size: "11.2 MB",
    downloads: 1000,
    rating: 4.8,
    lastUpdated: "2024-02-12",
    description: "Complete notes on Communication Systems and Signals",
    tags: ["Communication", "Signals", "Systems"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/4-5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0/view"
  },

  // Mechanical Notes
  {
    id: 15,
    title: "Thermodynamics",
    subject: "Mechanical",
    branch: "Mechanical",
    type: "Notes",
    size: "13.5 MB",
    downloads: 1300,
    rating: 4.7,
    lastUpdated: "2024-02-11",
    description: "Complete notes on Thermodynamics and Heat Transfer",
    tags: ["Thermodynamics", "Heat", "Energy"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/5-6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1/view"
  },
  {
    id: 16,
    title: "Fluid Mechanics",
    subject: "Mechanical",
    branch: "Mechanical",
    type: "Notes",
    size: "12.8 MB",
    downloads: 1200,
    rating: 4.6,
    lastUpdated: "2024-02-10",
    description: "Detailed notes on Fluid Mechanics and Hydraulics",
    tags: ["Fluids", "Mechanics", "Hydraulics"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/6-7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2/view"
  },
  {
    id: 17,
    title: "Machine Design",
    subject: "Mechanical",
    branch: "Mechanical",
    type: "Notes",
    size: "14.2 MB",
    downloads: 1100,
    rating: 4.8,
    lastUpdated: "2024-02-09",
    description: "Complete notes on Machine Design and Analysis",
    tags: ["Design", "Machines", "Analysis"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/7-8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3/view"
  },

  // Electrical Notes
  {
    id: 18,
    title: "Power Systems",
    subject: "Electrical",
    branch: "Electrical",
    type: "Notes",
    size: "11.5 MB",
    downloads: 1400,
    rating: 4.7,
    lastUpdated: "2024-02-08",
    description: "Complete notes on Power Systems and Transmission",
    tags: ["Power", "Systems", "Transmission"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/8-9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4/view"
  },
  {
    id: 19,
    title: "Control Systems",
    subject: "Electrical",
    branch: "Electrical",
    type: "Notes",
    size: "10.2 MB",
    downloads: 1300,
    rating: 4.6,
    lastUpdated: "2024-02-07",
    description: "Detailed notes on Control Systems and Automation",
    tags: ["Control", "Systems", "Automation"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/9-0X1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5/view"
  },
  {
    id: 20,
    title: "Electrical Machines",
    subject: "Electrical",
    branch: "Electrical",
    type: "Notes",
    size: "12.8 MB",
    downloads: 1200,
    rating: 4.8,
    lastUpdated: "2024-02-06",
    description: "Complete notes on Electrical Machines and Drives",
    tags: ["Machines", "Drives", "Motors"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/0-1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6/view"
  },

  // Civil Notes
  {
    id: 21,
    title: "Structural Analysis",
    subject: "Civil",
    branch: "Civil",
    type: "Notes",
    size: "13.2 MB",
    downloads: 1100,
    rating: 4.7,
    lastUpdated: "2024-02-05",
    description: "Complete notes on Structural Analysis and Design",
    tags: ["Structures", "Analysis", "Design"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/1-2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7/view"
  },
  {
    id: 22,
    title: "Geotechnical Engineering",
    subject: "Civil",
    branch: "Civil",
    type: "Notes",
    size: "11.8 MB",
    downloads: 1000,
    rating: 4.6,
    lastUpdated: "2024-02-04",
    description: "Detailed notes on Soil Mechanics and Foundation",
    tags: ["Soil", "Mechanics", "Foundation"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/2-3X4Y5Z6A7B8C9D0E1F2G3H4I5J6K7L8/view"
  },
  {
    id: 23,
    title: "Transportation Engineering",
    subject: "Civil",
    branch: "Civil",
    type: "Notes",
    size: "12.5 MB",
    downloads: 950,
    rating: 4.8,
    lastUpdated: "2024-02-03",
    description: "Complete notes on Transportation and Highway Engineering",
    tags: ["Transportation", "Highway", "Traffic"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/3-4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9/view"
  },

  // Chemical Notes
  {
    id: 24,
    title: "Chemical Reaction Engineering",
    subject: "Chemical",
    branch: "Chemical",
    type: "Notes",
    size: "14.5 MB",
    downloads: 1200,
    rating: 4.7,
    lastUpdated: "2024-02-02",
    description: "Complete notes on Chemical Reaction Engineering",
    tags: ["Reactions", "Engineering", "Process"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/4-5X6Y7Z8A9B0C1D2E3F4G5H6I7J8K9L0/view"
  },
  {
    id: 25,
    title: "Process Control",
    subject: "Chemical",
    branch: "Chemical",
    type: "Notes",
    size: "11.2 MB",
    downloads: 1100,
    rating: 4.6,
    lastUpdated: "2024-02-01",
    description: "Detailed notes on Process Control and Instrumentation",
    tags: ["Process", "Control", "Instrumentation"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/5-6X7Y8Z9A0B1C2D3E4F5G6H7I8J9K0L1/view"
  },

  // Metallurgical Notes
  {
    id: 26,
    title: "Physical Metallurgy",
    subject: "Metallurgical",
    branch: "Metallurgical",
    type: "Notes",
    size: "13.8 MB",
    downloads: 1000,
    rating: 4.8,
    lastUpdated: "2024-01-31",
    description: "Complete notes on Physical Metallurgy and Materials",
    tags: ["Metallurgy", "Materials", "Properties"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/6-7X8Y9Z0A1B2C3D4E5F6G7H8I9J0K1L2/view"
  },
  {
    id: 27,
    title: "Extractive Metallurgy",
    subject: "Metallurgical",
    branch: "Metallurgical",
    type: "Notes",
    size: "12.5 MB",
    downloads: 950,
    rating: 4.7,
    lastUpdated: "2024-01-30",
    description: "Detailed notes on Extractive Metallurgy Processes",
    tags: ["Extraction", "Processes", "Metals"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/7-8X9Y0Z1A2B3C4D5E6F7G8H9I0J1K2L3/view"
  },

  // Aerospace Notes
  {
    id: 28,
    title: "Aerodynamics",
    subject: "Aerospace",
    branch: "Aerospace",
    type: "Notes",
    size: "15.2 MB",
    downloads: 1100,
    rating: 4.8,
    lastUpdated: "2024-01-29",
    description: "Complete notes on Aerodynamics and Flight Mechanics",
    tags: ["Aerodynamics", "Flight", "Mechanics"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/8-9X0Y1Z2A3B4C5D6E7F8G9H0I1J2K3L4/view"
  },
  {
    id: 29,
    title: "Aircraft Structures",
    subject: "Aerospace",
    branch: "Aerospace",
    type: "Notes",
    size: "14.8 MB",
    downloads: 1000,
    rating: 4.7,
    lastUpdated: "2024-01-28",
    description: "Detailed notes on Aircraft Structures and Design",
    tags: ["Structures", "Design", "Aircraft"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/9-0X1Y2Z3A4B5C6D7E8F9G0H1I2J3K4L5/view"
  },

  // Biotechnology Notes
  {
    id: 30,
    title: "Biochemical Engineering",
    subject: "Biotechnology",
    branch: "Biotechnology",
    type: "Notes",
    size: "12.8 MB",
    downloads: 950,
    rating: 4.6,
    lastUpdated: "2024-01-27",
    description: "Complete notes on Biochemical Engineering Processes",
    tags: ["Biochemical", "Processes", "Engineering"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/0-1X2Y3Z4A5B6C7D8E9F0G1H2I3J4K5L6/view"
  },
  {
    id: 31,
    title: "Bioprocess Technology",
    subject: "Biotechnology",
    branch: "Biotechnology",
    type: "Notes",
    size: "11.5 MB",
    downloads: 900,
    rating: 4.7,
    lastUpdated: "2024-01-26",
    description: "Detailed notes on Bioprocess Technology and Applications",
    tags: ["Bioprocess", "Technology", "Applications"],
    source: "gatewithme.netlify.app",
    link: "https://drive.google.com/file/d/1-2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7/view"
  }
];

const colleges: College[] = [
  // IITs
  {
    id: 1,
    name: "IIT Bombay",
    image: "https://www.iitb.ac.in/sites/default/files/2018-08/IITB%20Main%20Building.jpg",
    description: "Indian Institute of Technology Bombay",
    website: "https://www.iitb.ac.in",
    type: "IIT",
    location: "Mumbai, Maharashtra",
    established: "1958"
  },
  {
    id: 2,
    name: "IIT Delhi",
    image: "https://www.iitd.ac.in/sites/default/files/2018-08/IITD%20Main%20Building.jpg",
    description: "Indian Institute of Technology Delhi",
    website: "https://www.iitd.ac.in",
    type: "IIT",
    location: "New Delhi",
    established: "1961"
  },
  {
    id: 3,
    name: "IIT Madras",
    image: "https://www.iitm.ac.in/sites/default/files/2018-08/IITM%20Main%20Building.jpg",
    description: "Indian Institute of Technology Madras",
    website: "https://www.iitm.ac.in",
    type: "IIT",
    location: "Chennai, Tamil Nadu",
    established: "1959"
  },
  {
    id: 4,
    name: "IIT Kanpur",
    image: "https://www.iitk.ac.in/sites/default/files/2018-08/IITK%20Main%20Building.jpg",
    description: "Indian Institute of Technology Kanpur",
    website: "https://www.iitk.ac.in",
    type: "IIT",
    location: "Kanpur, Uttar Pradesh",
    established: "1959"
  },
  {
    id: 5,
    name: "IIT Kharagpur",
    image: "https://www.iitkgp.ac.in/sites/default/files/2018-08/IITKGP%20Main%20Building.jpg",
    description: "Indian Institute of Technology Kharagpur",
    website: "https://www.iitkgp.ac.in",
    type: "IIT",
    location: "Kharagpur, West Bengal",
    established: "1951"
  },
  {
    id: 6,
    name: "IIT Roorkee",
    image: "https://www.iitr.ac.in/sites/default/files/2018-08/IITR%20Main%20Building.jpg",
    description: "Indian Institute of Technology Roorkee",
    website: "https://www.iitr.ac.in",
    type: "IIT",
    location: "Roorkee, Uttarakhand",
    established: "1847"
  },
  {
    id: 7,
    name: "IIT Guwahati",
    image: "https://www.iitg.ac.in/sites/default/files/2018-08/IITG%20Main%20Building.jpg",
    description: "Indian Institute of Technology Guwahati",
    website: "https://www.iitg.ac.in",
    type: "IIT",
    location: "Guwahati, Assam",
    established: "1994"
  },
  {
    id: 8,
    name: "IIT Hyderabad",
    image: "https://www.iith.ac.in/sites/default/files/2018-08/IITH%20Main%20Building.jpg",
    description: "Indian Institute of Technology Hyderabad",
    website: "https://www.iith.ac.in",
    type: "IIT",
    location: "Hyderabad, Telangana",
    established: "2008"
  },
  {
    id: 9,
    name: "IIT Indore",
    image: "https://www.iiti.ac.in/sites/default/files/2018-08/IITI%20Main%20Building.jpg",
    description: "Indian Institute of Technology Indore",
    website: "https://www.iiti.ac.in",
    type: "IIT",
    location: "Indore, Madhya Pradesh",
    established: "2009"
  },
  {
    id: 10,
    name: "IIT BHU",
    image: "https://www.iitbhu.ac.in/sites/default/files/2018-08/IITBHU%20Main%20Building.jpg",
    description: "Indian Institute of Technology (BHU) Varanasi",
    website: "https://www.iitbhu.ac.in",
    type: "IIT",
    location: "Varanasi, Uttar Pradesh",
    established: "1919"
  },
  // NITs
  {
    id: 11,
    name: "NIT Trichy",
    image: "https://www.nitt.edu/sites/default/files/2018-08/NITT%20Main%20Building.jpg",
    description: "National Institute of Technology Tiruchirappalli",
    website: "https://www.nitt.edu",
    type: "NIT",
    location: "Tiruchirappalli, Tamil Nadu",
    established: "1964"
  },
  {
    id: 12,
    name: "NIT Surathkal",
    image: "https://www.nitk.ac.in/sites/default/files/2018-08/NITK%20Main%20Building.jpg",
    description: "National Institute of Technology Karnataka",
    website: "https://www.nitk.ac.in",
    type: "NIT",
    location: "Surathkal, Karnataka",
    established: "1960"
  },
  {
    id: 13,
    name: "NIT Warangal",
    image: "https://www.nitw.ac.in/sites/default/files/2018-08/NITW%20Main%20Building.jpg",
    description: "National Institute of Technology Warangal",
    website: "https://www.nitw.ac.in",
    type: "NIT",
    location: "Warangal, Telangana",
    established: "1959"
  },
  {
    id: 14,
    name: "NIT Calicut",
    image: "https://www.nitc.ac.in/sites/default/files/2018-08/NITC%20Main%20Building.jpg",
    description: "National Institute of Technology Calicut",
    website: "https://www.nitc.ac.in",
    type: "NIT",
    location: "Calicut, Kerala",
    established: "1961"
  },
  {
    id: 15,
    name: "NIT Rourkela",
    image: "https://www.nitrkl.ac.in/sites/default/files/2018-08/NITR%20Main%20Building.jpg",
    description: "National Institute of Technology Rourkela",
    website: "https://www.nitrkl.ac.in",
    type: "NIT",
    location: "Rourkela, Odisha",
    established: "1961"
  },
  {
    id: 16,
    name: "NIT Durgapur",
    image: "https://www.nitdgp.ac.in/sites/default/files/2018-08/NITD%20Main%20Building.jpg",
    description: "National Institute of Technology Durgapur",
    website: "https://www.nitdgp.ac.in",
    type: "NIT",
    location: "Durgapur, West Bengal",
    established: "1960"
  },
  {
    id: 17,
    name: "NIT Allahabad",
    image: "https://www.mnnit.ac.in/sites/default/files/2018-08/MNNIT%20Main%20Building.jpg",
    description: "Motilal Nehru National Institute of Technology",
    website: "https://www.mnnit.ac.in",
    type: "NIT",
    location: "Allahabad, Uttar Pradesh",
    established: "1961"
  },
  {
    id: 18,
    name: "NIT Jaipur",
    image: "https://www.mnit.ac.in/sites/default/files/2018-08/MNIT%20Main%20Building.jpg",
    description: "Malaviya National Institute of Technology",
    website: "https://www.mnit.ac.in",
    type: "NIT",
    location: "Jaipur, Rajasthan",
    established: "1963"
  },
  {
    id: 19,
    name: "NIT Nagpur",
    image: "https://www.vnit.ac.in/sites/default/files/2018-08/VNIT%20Main%20Building.jpg",
    description: "Visvesvaraya National Institute of Technology",
    website: "https://www.vnit.ac.in",
    type: "NIT",
    location: "Nagpur, Maharashtra",
    established: "1960"
  },
  {
    id: 20,
    name: "NIT Hamirpur",
    image: "https://www.nith.ac.in/sites/default/files/2018-08/NITH%20Main%20Building.jpg",
    description: "National Institute of Technology Hamirpur",
    website: "https://www.nith.ac.in",
    type: "NIT",
    location: "Hamirpur, Himachal Pradesh",
    established: "1986"
  }
];

const branches = [
  "All Branches",
  "Computer Science (CSE)",
  "Electronics (ECE)",
  "Mechanical (ME)",
  "Electrical (EE)",
  "Civil (CE)",
  "Chemical (CH)",
  "Metallurgical (MT)",
  "Aerospace (AE)",
  "Biotechnology (BT)"
];

const subjects = [
  "All Subjects",
  "Computer Science",
  "Electronics",
  "Mechanical",
  "Electrical",
  "Civil",
  "Chemical",
  "Metallurgical",
  "Aerospace",
  "Biotechnology"
];

const types = [
  "All Types",
  "PDF",
  "Document",
  "Presentation",
  "Video"
];

const advancedContent: AdvancedContent[] = [
  {
    id: 1,
    title: "Advanced Problem Solving Techniques for GATE",
    category: "Problem Solving",
    type: "course",
    level: "advanced",
    duration: "8 weeks",
    author: "Dr. Rajesh Kumar",
    description: "Master advanced problem-solving strategies and techniques specifically designed for GATE examination. Learn how to approach complex problems efficiently.",
    tags: ["Problem Solving", "Strategy", "Advanced"],
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    featured: true
  },
  {
    id: 2,
    title: "Research Trends in Computer Science",
    category: "Research",
    type: "article",
    level: "advanced",
    duration: "45 min read",
    author: "Prof. Sunita Sharma",
    description: "Explore the latest research trends and developments in Computer Science that are relevant for GATE preparation and future studies.",
    tags: ["Research", "Trends", "Computer Science"],
    link: "https://www.geeksforgeeks.org/computer-science-research-topics/"
  },
  {
    id: 3,
    title: "Advanced Mathematics for Engineering",
    category: "Mathematics",
    type: "course",
    level: "advanced",
    duration: "12 weeks",
    author: "Dr. Amit Patel",
    description: "Comprehensive coverage of advanced mathematical concepts required for GATE, including complex analysis and advanced calculus.",
    tags: ["Mathematics", "Advanced", "Engineering"],
    link: "https://www.khanacademy.org/math/calculus-home",
    featured: true
  },
  {
    id: 4,
    title: "Interview Preparation Guide",
    category: "Career",
    type: "article",
    level: "intermediate",
    duration: "30 min read",
    author: "Career Experts",
    description: "Complete guide for interview preparation after qualifying GATE, including technical and HR interview tips.",
    tags: ["Interview", "Career", "Preparation"],
    link: "https://www.geeksforgeeks.org/top-50-interview-questions-for-gate-cs/"
  },
  {
    id: 5,
    title: "Advanced Programming Concepts",
    category: "Programming",
    type: "course",
    level: "advanced",
    duration: "10 weeks",
    author: "Dr. Priya Singh",
    description: "Deep dive into advanced programming concepts, algorithms, and data structures for GATE preparation.",
    tags: ["Programming", "Algorithms", "Data Structures"],
    link: "https://www.coursera.org/learn/algorithms-part1"
  },
  {
    id: 6,
    title: "Research Paper Writing Workshop",
    category: "Research",
    type: "course",
    level: "advanced",
    duration: "6 weeks",
    author: "Prof. Ravi Verma",
    description: "Learn how to write and publish research papers, essential for higher studies after GATE.",
    tags: ["Research", "Writing", "Publication"],
    link: "https://www.coursera.org/learn/how-to-write-a-scientific-paper",
    featured: true
  },
  {
    id: 7,
    title: "GATE Previous Year Papers Analysis",
    category: "Exam Preparation",
    type: "article",
    level: "advanced",
    duration: "60 min read",
    author: "GATE Experts",
    description: "Detailed analysis of previous year GATE papers with pattern analysis and important topics.",
    tags: ["GATE", "Previous Papers", "Analysis"],
    link: "https://www.geeksforgeeks.org/gate-cs-notes-gq/"
  },
  {
    id: 8,
    title: "Advanced Data Structures",
    category: "Programming",
    type: "course",
    level: "advanced",
    duration: "8 weeks",
    author: "Dr. Neha Gupta",
    description: "Comprehensive course on advanced data structures and their applications in real-world problems.",
    tags: ["Data Structures", "Algorithms", "Advanced"],
    link: "https://www.coursera.org/learn/data-structures"
  },
  {
    id: 9,
    title: "Machine Learning for Engineers",
    category: "Technology",
    type: "course",
    level: "intermediate",
    duration: "12 weeks",
    author: "Dr. Sanjay Kumar",
    description: "Introduction to machine learning concepts and their applications in engineering problems.",
    tags: ["Machine Learning", "AI", "Engineering"],
    link: "https://www.coursera.org/learn/machine-learning"
  }
];

export const StudyMaterials = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesBranch = !selectedBranch || material.branch === selectedBranch;
    const matchesType = !selectedType || material.type === selectedType;
    const matchesSearch = !searchQuery || 
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesBranch && matchesType && matchesSearch;
  });

  const categories = Array.from(new Set(advancedContent.map(content => content.category)));
  const levels = ['beginner', 'intermediate', 'advanced'];

  const filteredContent = advancedContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || content.category === selectedCategory;
    const matchesLevel = !selectedLevel || content.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredContent = advancedContent.filter(content => content.featured);

  const handleSubjectClick = (subject: string) => {
    setSelectedBranch(subject);
    // Scroll to materials section
    const materialsSection = document.getElementById('materials-section');
    if (materialsSection) {
      materialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Headers moved to TitleBanner for desktop, Sidebar for mobile */}
        <div className="mb-8">
          <p className="text-slate-600">
            Explore advanced content, research materials, and specialized courses to enhance your GATE preparation
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search advanced content..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <select 
              className="px-4 py-2 rounded-md border border-slate-200 bg-white"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">All Branches</option>
              {Array.from(new Set(studyMaterials.map(m => m.branch))).map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
            <select 
              className="px-4 py-2 rounded-md border border-slate-200 bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">All Types</option>
              {Array.from(new Set(studyMaterials.map(m => m.type))).map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Content */}
        {featuredContent.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredContent.map(content => (
                <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                        {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                        {content.level.charAt(0).toUpperCase() + content.level.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                    <p className="text-gray-600 mb-4">{content.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{content.duration}</span>
                      <a
                        href={content.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Learn More <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Advanced Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map(content => (
              <div key={content.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                      {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                    </span>
                    <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                      {content.level.charAt(0).toUpperCase() + content.level.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.title}</h3>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{content.author}</span>
                      <span className="mx-2">•</span>
                      <span>{content.duration}</span>
                    </div>
                    <a
                      href={content.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Learn More <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 