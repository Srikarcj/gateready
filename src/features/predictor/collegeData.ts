export interface Course {
  name: string;
  category: 'CS' | 'EC' | 'ME' | 'CE' | 'EE' | 'CH' | 'PI' | 'Other';
  seats: number;
  cutOff: number;
  rank: number;
  description: string;
}

export interface Placement {
  average: number;
  highest: number;
  companies: string[];
  internships: string[];
  research: string[];
}

export interface Transport {
  bus: boolean;
  metro: boolean;
  train: boolean;
}

export interface College {
  id: string;
  name: string;
  type: 'IIT' | 'NIT';
  location: string;
  city: string;
  description: string;
  courses: Course[];
  cutOff: number;
  rank: number;
  rating: number;
  facilities: string[];
  transport: Transport;
  website: string;
  established: number;
  campusSize: string;
  researchCenters: string[];
  placement: Placement;
  eligibilityScore?: number;
  selectedCourse?: Course;
  lat: number;
  lng: number;
}

export const colleges: College[] = [
  {
    id: 'iitd',
    name: 'IIT Delhi',
    type: 'IIT',
    location: 'Delhi',
    city: 'New Delhi',
    description: 'IIT Delhi is a premier institution for higher education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 120,
        cutOff: 95,
        rank: 1,
        description: 'Comprehensive program covering computer science fundamentals and advanced topics.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 100,
        cutOff: 92,
        rank: 2,
        description: 'Focus on electrical systems, power electronics, and control systems.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 90,
        cutOff: 90,
        rank: 3,
        description: 'Study of mechanical systems, thermodynamics, and manufacturing processes.'
      }
    ],
    cutOff: 95,
    rank: 1,
    rating: 4.8,
    facilities: [
      '24/7 Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Incubation Center',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: true,
      train: true
    },
    website: 'https://www.iitd.ac.in',
    established: 1961,
    campusSize: '320 acres',
    researchCenters: [
      'AI Research Center',
      'Robotics Lab',
      'Quantum Computing Lab',
      'Materials Science Center'
    ],
    placement: {
      average: 12.5,
      highest: 45.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Goldman Sachs'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'Quantum Computing']
    },
    lat: 28.5455,
    lng: 77.1927
  },
  {
    id: 'iitb',
    name: 'IIT Bombay',
    type: 'IIT',
    location: 'Maharashtra',
    city: 'Mumbai',
    description: 'IIT Bombay is a renowned institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 110,
        cutOff: 94,
        rank: 1,
        description: 'Advanced program in computer science with focus on research and innovation.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 95,
        cutOff: 91,
        rank: 2,
        description: 'Comprehensive study of electrical systems and power engineering.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 85,
        cutOff: 89,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing processes.'
      }
    ],
    cutOff: 94,
    rank: 2,
    rating: 4.7,
    facilities: [
      'Central Library',
      'Gymnasium',
      'Auditorium',
      'Hostel',
      'Innovation Center',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: true,
      train: true
    },
    website: 'https://www.iitb.ac.in',
    established: 1958,
    campusSize: '550 acres',
    researchCenters: [
      'Data Science Lab',
      'IoT Research Center',
      'Materials Science Lab',
      'Energy Research Center'
    ],
    placement: {
      average: 11.8,
      highest: 42.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Morgan Stanley'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['Data Science', 'IoT', 'Materials Science']
    },
    lat: 19.1334,
    lng: 72.9133
  },
  {
    id: 'iith',
    name: 'IIT Hyderabad',
    type: 'IIT',
    location: 'Telangana',
    city: 'Hyderabad',
    description: 'IIT Hyderabad is a premier institution known for its research and innovation.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 93,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 90,
        cutOff: 90,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 80,
        cutOff: 88,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 93,
    rank: 8,
    rating: 4.6,
    facilities: [
      'Digital Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: true,
      train: true
    },
    website: 'https://www.iith.ac.in',
    established: 2008,
    campusSize: '576 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.2,
      highest: 40.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 17.4120,
    lng: 78.4657
  },
  {
    id: 'nitw',
    name: 'NIT Warangal',
    type: 'NIT',
    location: 'Telangana',
    city: 'Warangal',
    description: 'NIT Warangal is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 90,
        cutOff: 88,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 85,
        cutOff: 86,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 80,
        cutOff: 84,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 88,
    rank: 5,
    rating: 4.5,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nitw.ac.in',
    established: 1959,
    campusSize: '250 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 10.2,
      highest: 32.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 18.0000,
    lng: 79.5833
  },
  {
    id: 'iitk',
    name: 'IIT Kanpur',
    type: 'IIT',
    location: 'Uttar Pradesh',
    city: 'Kanpur',
    description: 'IIT Kanpur is known for its strong focus on research and innovation.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 93,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 90,
        cutOff: 91,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 85,
        cutOff: 89,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 93,
    rank: 4,
    rating: 4.7,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iitk.ac.in',
    established: 1959,
    campusSize: '1055 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.5,
      highest: 43.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 26.5123,
    lng: 80.2329
  },
  {
    id: 'nitk',
    name: 'NIT Karnataka',
    type: 'NIT',
    location: 'Karnataka',
    city: 'Surathkal',
    description: 'NIT Karnataka is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 92,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Information Technology',
        category: 'CS',
        seats: 90,
        cutOff: 90,
        rank: 2,
        description: 'Focus on information technology and software development.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 85,
        cutOff: 88,
        rank: 3,
        description: 'Study of electronics and communication systems.'
      }
    ],
    cutOff: 92,
    rank: 3,
    rating: 4.5,
    facilities: [
      'Digital Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nitk.ac.in',
    established: 1960,
    campusSize: '295 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 10.5,
      highest: 35.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 13.7200,
    lng: 74.7800
  },
  {
    id: 'iitm',
    name: 'IIT Madras',
    type: 'IIT',
    location: 'Tamil Nadu',
    city: 'Chennai',
    description: 'IIT Madras is known for its excellence in research and innovation.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 110,
        cutOff: 94,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 95,
        cutOff: 92,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 90,
        cutOff: 90,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 94,
    rank: 3,
    rating: 4.7,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: true,
      train: true
    },
    website: 'https://www.iitm.ac.in',
    established: 1959,
    campusSize: '620 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.8,
      highest: 42.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 13.0067,
    lng: 80.2356
  },
  {
    id: 'nitc',
    name: 'NIT Calicut',
    type: 'NIT',
    location: 'Kerala',
    city: 'Calicut',
    description: 'NIT Calicut is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 95,
        cutOff: 89,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 90,
        cutOff: 87,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 85,
        cutOff: 85,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 89,
    rank: 6,
    rating: 4.4,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nitc.ac.in',
    established: 1961,
    campusSize: '300 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 10.0,
      highest: 30.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 11.2500,
    lng: 75.7833
  },
  {
    id: 'iitt',
    name: 'IIT Tirupati',
    type: 'IIT',
    location: 'Andhra Pradesh',
    city: 'Tirupati',
    description: 'IIT Tirupati is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 90,
        cutOff: 92,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 85,
        cutOff: 90,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 80,
        cutOff: 88,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 92,
    rank: 7,
    rating: 4.5,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iittp.ac.in',
    established: 2015,
    campusSize: '530 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 10.8,
      highest: 35.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 13.6500,
    lng: 79.4167
  },
  {
    id: 'nitap',
    name: 'NIT Andhra Pradesh',
    type: 'NIT',
    location: 'Andhra Pradesh',
    city: 'Tadepalligudem',
    description: 'NIT Andhra Pradesh is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 85,
        cutOff: 87,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 80,
        cutOff: 85,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 75,
        cutOff: 83,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 87,
    rank: 8,
    rating: 4.3,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nitandhra.ac.in',
    established: 2015,
    campusSize: '172 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 9.5,
      highest: 28.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 14.8750,
    lng: 79.1667
  },
  {
    id: 'iitg',
    name: 'IIT Guwahati',
    type: 'IIT',
    location: 'Assam',
    city: 'Guwahati',
    description: 'IIT Guwahati is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 93,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 90,
        cutOff: 91,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 85,
        cutOff: 89,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 93,
    rank: 5,
    rating: 4.6,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iitg.ac.in',
    established: 1994,
    campusSize: '700 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.2,
      highest: 38.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 26.1444,
    lng: 91.7361
  },
  {
    id: 'nitap',
    name: 'NIT Silchar',
    type: 'NIT',
    location: 'Assam',
    city: 'Silchar',
    description: 'NIT Silchar is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 90,
        cutOff: 88,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 85,
        cutOff: 86,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 80,
        cutOff: 84,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 88,
    rank: 7,
    rating: 4.4,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nits.ac.in',
    established: 1967,
    campusSize: '600 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 10.2,
      highest: 32.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 24.7994,
    lng: 92.8340
  },
  {
    id: 'iitbhu',
    name: 'IIT BHU',
    type: 'IIT',
    location: 'Uttar Pradesh',
    city: 'Varanasi',
    description: 'IIT BHU is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 92,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 90,
        cutOff: 90,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 85,
        cutOff: 88,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 92,
    rank: 6,
    rating: 4.6,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iitbhu.ac.in',
    established: 1919,
    campusSize: '1300 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.0,
      highest: 36.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 25.3219,
    lng: 82.9873
  },
  {
    id: 'iitkgp',
    name: 'IIT Kharagpur',
    type: 'IIT',
    location: 'West Bengal',
    city: 'Kharagpur',
    description: 'IIT Kharagpur is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 110,
        cutOff: 94,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 95,
        cutOff: 92,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 90,
        cutOff: 90,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 94,
    rank: 2,
    rating: 4.7,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iitkgp.ac.in',
    established: 1951,
    campusSize: '2100 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.8,
      highest: 42.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 22.3149,
    lng: 87.3105
  },
  {
    id: 'nitd',
    name: 'NIT Durgapur',
    type: 'NIT',
    location: 'West Bengal',
    city: 'Durgapur',
    description: 'NIT Durgapur is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 90,
        cutOff: 87,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 85,
        cutOff: 85,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 80,
        cutOff: 83,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 87,
    rank: 6,
    rating: 4.4,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nitdgp.ac.in',
    established: 1960,
    campusSize: '187 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 10.0,
      highest: 30.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 23.5500,
    lng: 87.3167
  },
  {
    id: 'iitr',
    name: 'IIT Roorkee',
    type: 'IIT',
    location: 'Uttarakhand',
    city: 'Roorkee',
    description: 'IIT Roorkee is a premier institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 100,
        cutOff: 93,
        rank: 1,
        description: 'Advanced program in computer science with focus on AI and ML.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 90,
        cutOff: 91,
        rank: 2,
        description: 'Focus on power systems and electronics.'
      },
      {
        name: 'Mechanical Engineering',
        category: 'ME',
        seats: 85,
        cutOff: 89,
        rank: 3,
        description: 'Study of mechanical systems and manufacturing.'
      }
    ],
    cutOff: 93,
    rank: 4,
    rating: 4.6,
    facilities: [
      'Central Library',
      'Sports Complex',
      'Research Labs',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.iitr.ac.in',
    established: 1847,
    campusSize: '365 acres',
    researchCenters: [
      'AI & ML Lab',
      'Robotics Center',
      'VLSI Design Lab',
      'Materials Science Lab'
    ],
    placement: {
      average: 11.5,
      highest: 40.0,
      companies: ['Google', 'Microsoft', 'Amazon', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'Robotics', 'VLSI']
    },
    lat: 30.0000,
    lng: 77.5833
  },
  {
    id: 'nituk',
    name: 'NIT Uttarakhand',
    type: 'NIT',
    location: 'Uttarakhand',
    city: 'Srinagar',
    description: 'NIT Uttarakhand is a leading institution for technical education and research.',
    courses: [
      {
        name: 'Computer Science and Engineering',
        category: 'CS',
        seats: 85,
        cutOff: 86,
        rank: 1,
        description: 'Comprehensive program in computer science and software engineering.'
      },
      {
        name: 'Electronics & Communication',
        category: 'EC',
        seats: 80,
        cutOff: 84,
        rank: 2,
        description: 'Focus on electronics and communication systems.'
      },
      {
        name: 'Electrical Engineering',
        category: 'EE',
        seats: 75,
        cutOff: 82,
        rank: 3,
        description: 'Study of electrical systems and power engineering.'
      }
    ],
    cutOff: 86,
    rank: 7,
    rating: 4.3,
    facilities: [
      'Central Library',
      'Sports Center',
      'Conference Hall',
      'Hostel',
      'Innovation Hub',
      'WiFi Campus',
      'Cafeteria',
      'Medical Center'
    ],
    transport: {
      bus: true,
      metro: false,
      train: true
    },
    website: 'https://www.nituk.ac.in',
    established: 2010,
    campusSize: '300 acres',
    researchCenters: [
      'AI & ML Lab',
      'VLSI Design Center',
      'Robotics Lab',
      'Communication Systems Lab'
    ],
    placement: {
      average: 9.8,
      highest: 28.0,
      companies: ['Infosys', 'TCS', 'Wipro', 'Intel'],
      internships: ['Summer Research Program', 'Industry Internships'],
      research: ['AI/ML', 'VLSI', 'Robotics']
    },
    lat: 34.0833,
    lng: 74.7833
  }
]; 