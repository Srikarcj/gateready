import React, { useState, useEffect } from 'react';
import { Search, Star, Users, Briefcase, GraduationCap, TrendingUp, Heart, Flame, Building2, Award, School, Bookmark, Info, CheckCircle2, X, Laptop, Cpu, Cog, Zap, Beaker, Code, Radio, BookOpen, Car } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const branchImages: Record<string, string> = {
  CSE: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  ECE: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  ME: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  EE: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  CE: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
  CH: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  MT: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
  AE: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
  BT: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
};

const famousBranches: Record<string, string[]> = {
  'IIT Bombay': ['CSE', 'EE'],
  'IIT Madras': ['EE', 'ME'],
  'IIT Delhi': ['CSE', 'ECE'],
  'IIT Kanpur': ['ME', 'CSE'],
  'IIT Kharagpur': ['CE', 'EE'],
  'IIT Roorkee': ['CE', 'CSE'],
  'IIT BHU': ['ME', 'EE'],
  'IIT Guwahati': ['CSE', 'ECE'],
  'NIT Trichy': ['CSE', 'ME'],
  'NIT Surathkal': ['CSE', 'ECE'],
  'NIT Warangal': ['ECE', 'CSE'],
  'NIT Calicut': ['CE', 'CSE'],
};

const collegeImages: Record<string, string> = {
  'IIT Bombay': 'https://www.iitb.ac.in/sites/default/files/2018-08/IITB%20Main%20Building.jpg',
  'IIT Madras': 'https://www.iitm.ac.in/sites/default/files/2018-08/IITM%20Main%20Building.jpg',
  'IIT Delhi': 'https://www.iitd.ac.in/sites/default/files/2018-08/IITD%20Main%20Building.jpg',
  'IIT Kanpur': 'https://www.iitk.ac.in/sites/default/files/2018-08/IITK%20Main%20Building.jpg',
  'IIT Kharagpur': 'https://www.iitkgp.ac.in/sites/default/files/2018-08/IITKGP%20Main%20Building.jpg',
  'IIT Roorkee': 'https://www.iitr.ac.in/sites/default/files/2018-08/IITR%20Main%20Building.jpg',
  'IIT BHU': 'https://www.iitbhu.ac.in/sites/default/files/2018-08/IITBHU%20Main%20Building.jpg',
  'IIT Guwahati': 'https://www.iitg.ac.in/sites/default/files/2018-08/IITG%20Main%20Building.jpg',
  'NIT Trichy': 'https://www.nitt.edu/sites/default/files/2018-08/NITT%20Main%20Building.jpg',
  'NIT Surathkal': 'https://www.nitk.ac.in/sites/default/files/2018-08/NITK%20Main%20Building.jpg',
  'NIT Warangal': 'https://www.nitw.ac.in/sites/default/files/2018-08/NITW%20Main%20Building.jpg',
  'NIT Calicut': 'https://www.nitc.ac.in/sites/default/files/2018-08/NITC%20Main%20Building.jpg',
};

interface Course {
  id: string;
  name: string;
  branch: string;
  specialization: string;
  duration: string;
  seats: number;
  cutOff: number;
  strengths: string[];
  placement: {
    average: number;
    highest: number;
    companies: string[];
    percentage: number;
  };
  curriculum: {
    coreSubjects: string[];
    electives: string[];
    researchAreas: string[];
  };
  eligibility: string[];
  careerProspects: string[];
  topColleges: {
    name: string;
    cutOff: number;
    placement: {
      average: number;
      highest: number;
    };
  }[];
}

const recruiterLogos: Record<string, string> = {
  Google: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  Microsoft: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  Amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  IBM: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  Intel: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg',
  Qualcomm: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Qualcomm_logo.svg',
  AMD: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/AMD_Logo.svg',
  NVIDIA: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
  Samsung: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
  Bosch: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Bosch-logo.svg',
  "Tata Motors": 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Tata_Motors_Logo.svg',
  Mahindra: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Mahindra_logo.svg',
  ABB: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/ABB_logo.svg',
  KUKA: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/KUKA_logo.svg',
  FANUC: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/FANUC_logo.svg',
  Infosys: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Infosys_logo.svg',
  TCS: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Consultancy_Services_Logo.svg',
  Wipro: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Wipro_Logo.svg',
  "Texas Instruments": 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Texas_Instruments_logo.svg',
  "Morgan Stanley": 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Morgan_Stanley_Logo_1.svg',
};

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
  "Biotechnology (BT)",
  "Environmental (EN)",
  "Instrumentation (IN)",
  "Petroleum (PE)"
];

const mtechBranches: Course[] = [
  {
    id: "cse",
    name: "Computer Science and Engineering",
    branch: "CSE",
    specialization: "Artificial Intelligence & Machine Learning",
    duration: "2 Years",
    seats: 60,
    cutOff: 95,
    strengths: ["AI/ML", "Software Development", "Data Science"],
    placement: {
      average: 18.0,
      highest: 35.0,
      companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"],
      percentage: 95
    },
    curriculum: {
      coreSubjects: [
        "Advanced Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Big Data Analytics"
      ],
      electives: [
        "Reinforcement Learning",
        "Computer Graphics",
        "Cloud Computing",
        "Blockchain Technology",
        "IoT and Edge Computing"
      ],
      researchAreas: [
        "AI/ML",
        "Computer Vision",
        "NLP",
        "Robotics",
        "Distributed Systems"
      ]
    },
    eligibility: [
      "B.Tech/B.E. in CSE/IT/ECE with minimum 60% marks",
      "Valid GATE score in CS/IT",
      "Strong programming skills",
      "Basic knowledge of mathematics and statistics"
    ],
    careerProspects: [
      "AI/ML Engineer",
      "Data Scientist",
      "Research Scientist",
      "Software Developer",
      "Technical Lead"
    ],
    topColleges: [
      {
        name: "IIT Bombay",
        cutOff: 98,
        placement: {
          average: 22.0,
          highest: 45.0
        }
      },
      {
        name: "IIT Delhi",
        cutOff: 97,
        placement: {
          average: 21.5,
          highest: 44.0
        }
      }
    ]
  },
  {
    id: "ece",
    name: "Electronics and Communication Engineering",
    branch: "ECE",
    specialization: "VLSI Design and Embedded Systems",
    duration: "2 Years",
    seats: 45,
    cutOff: 92,
    strengths: ["VLSI Design", "Embedded Systems", "Signal Processing"],
    placement: {
      average: 16.0,
      highest: 30.0,
      companies: ["Intel", "Qualcomm", "Texas Instruments", "Samsung", "NVIDIA", "AMD", "IBM", "Bosch"],
      percentage: 90
    },
    curriculum: {
      coreSubjects: [
        "VLSI Design",
        "Digital Signal Processing",
        "Embedded Systems",
        "Wireless Communications",
        "Microelectronics",
        "RF Design"
      ],
      electives: [
        "IoT Design",
        "FPGA Design",
        "ASIC Design",
        "Wireless Networks",
        "Optical Communications"
      ],
      researchAreas: [
        "VLSI Design",
        "Wireless Communications",
        "Signal Processing",
        "Embedded Systems",
        "RF Design"
      ]
    },
    eligibility: [
      "B.Tech/B.E. in ECE/EEE with minimum 60% marks",
      "Valid GATE score in EC/EE",
      "Basic knowledge of electronics and communication",
      "Understanding of digital systems"
    ],
    careerProspects: [
      "VLSI Design Engineer",
      "Embedded Systems Engineer",
      "RF Engineer",
      "Communication Engineer",
      "Research Scientist"
    ],
    topColleges: [
      {
        name: "IIT Madras",
        cutOff: 95,
        placement: {
          average: 18.0,
          highest: 35.0
        }
      },
      {
        name: "IIT Delhi",
        cutOff: 94,
        placement: {
          average: 17.5,
          highest: 34.0
        }
      }
    ]
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    branch: "ME",
    specialization: "Robotics and Automation",
    duration: "2 Years",
    seats: 40,
    cutOff: 90,
    strengths: ["Robotics", "Automation", "Control Systems"],
    placement: {
      average: 14.0,
      highest: 25.0,
      companies: ["Tata Motors", "Mahindra", "Bosch", "ABB", "KUKA", "FANUC", "Siemens", "General Electric"],
      percentage: 85
    },
    curriculum: {
      coreSubjects: [
        "Robotics",
        "Control Systems",
        "Automation",
        "Manufacturing Processes",
        "CAD/CAM",
        "Industrial Engineering"
      ],
      electives: [
        "Industrial Robotics",
        "Mechatronics",
        "Smart Manufacturing",
        "Quality Control",
        "Product Design"
      ],
      researchAreas: [
        "Robotics",
        "Automation",
        "Control Systems",
        "Manufacturing",
        "Product Design"
      ]
    },
    eligibility: [
      "B.Tech/B.E. in ME/Automobile with minimum 60% marks",
      "Valid GATE score in ME",
      "Basic knowledge of mechanical systems",
      "Understanding of manufacturing processes"
    ],
    careerProspects: [
      "Robotics Engineer",
      "Automation Engineer",
      "Control Systems Engineer",
      "Manufacturing Engineer",
      "Research Scientist"
    ],
    topColleges: [
      {
        name: "IIT Madras",
        cutOff: 93,
        placement: {
          average: 16.0,
          highest: 30.0
        }
      },
      {
        name: "IIT Bombay",
        cutOff: 92,
        placement: {
          average: 15.5,
          highest: 28.0
        }
      }
    ]
  }
];

interface CollegeRecommendation {
  name: string;
  icon: React.ReactNode;
  cutOff: number;
  placement: {
    average: number;
    highest: number;
  };
  strengths: string[];
  topRecruiters?: string[];
}

const collegeRecommendations: Record<string, CollegeRecommendation[]> = {
  "CSE": [
    {
      name: "IIT Bombay",
      icon: <School className="w-6 h-6 text-blue-600" />,
      cutOff: 98,
      placement: { average: 22.0, highest: 45.0 },
      strengths: ["AI/ML Research", "Software Development", "Data Science"],
      topRecruiters: ["Google", "Microsoft", "Amazon", "IBM", "TCS"]
    },
    {
      name: "IIT Delhi",
      icon: <School className="w-6 h-6 text-green-600" />,
      cutOff: 97,
      placement: { average: 21.5, highest: 44.0 },
      strengths: ["Algorithms", "Systems", "Networks"],
      topRecruiters: ["Microsoft", "Amazon", "Google", "IBM", "Infosys"]
    },
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 96,
      placement: { average: 20.0, highest: 42.0 },
      strengths: ["Systems", "Software Engineering", "Distributed Computing"],
      topRecruiters: ["Amazon", "Microsoft", "Google", "TCS", "Wipro"]
    }
  ],
  "ECE": [
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 95,
      placement: { average: 18.0, highest: 35.0 },
      strengths: ["VLSI Design", "Communication Systems", "Signal Processing"],
      topRecruiters: ["Intel", "Qualcomm", "Samsung", "Texas Instruments", "Broadcom"]
    },
    {
      name: "IIT Kanpur",
      icon: <School className="w-6 h-6 text-purple-600" />,
      cutOff: 94,
      placement: { average: 17.5, highest: 34.0 },
      strengths: ["Embedded Systems", "Microelectronics", "Control Systems"],
      topRecruiters: ["Qualcomm", "Intel", "Samsung", "MediaTek", "NXP"]
    },
    {
      name: "IIT Delhi",
      icon: <School className="w-6 h-6 text-green-600" />,
      cutOff: 94,
      placement: { average: 17.0, highest: 33.0 },
      strengths: ["Wireless Communications", "Signal Processing", "RF Design"],
      topRecruiters: ["Qualcomm", "Intel", "Samsung", "MediaTek", "NXP"]
    }
  ],
  "ME": [
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 93,
      placement: { average: 16.0, highest: 32.0 },
      strengths: ["Thermal Engineering", "Manufacturing", "Robotics"],
      topRecruiters: ["Tata Motors", "Mahindra", "Larsen & Toubro", "Bosch", "Siemens"]
    },
    {
      name: "IIT Kanpur",
      icon: <School className="w-6 h-6 text-purple-600" />,
      cutOff: 92,
      placement: { average: 15.5, highest: 31.0 },
      strengths: ["Design", "Fluid Mechanics", "Materials"],
      topRecruiters: ["Larsen & Toubro", "Tata Motors", "Mahindra", "Bosch", "Siemens"]
    },
    {
      name: "IIT Bombay",
      icon: <School className="w-6 h-6 text-blue-600" />,
      cutOff: 92,
      placement: { average: 15.0, highest: 30.0 },
      strengths: ["Industrial Engineering", "Production", "Automation"],
      topRecruiters: ["Mahindra", "Tata Motors", "Larsen & Toubro", "Bosch", "Siemens"]
    }
  ],
  "EE": [
    {
      name: "IIT Kharagpur",
      icon: <School className="w-6 h-6 text-purple-600" />,
      cutOff: 95,
      placement: { average: 16.5, highest: 33.0 },
      strengths: ["Power Systems", "Electrical Machines", "Power Electronics"],
      topRecruiters: ["Siemens", "ABB", "Schneider Electric", "Tata Power", "BHEL"]
    },
    {
      name: "IIT Bombay",
      icon: <School className="w-6 h-6 text-blue-600" />,
      cutOff: 94,
      placement: { average: 16.0, highest: 32.0 },
      strengths: ["Control Systems", "Power Electronics", "Smart Grid"],
      topRecruiters: ["ABB", "Siemens", "Schneider Electric", "Tata Power", "BHEL"]
    },
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 93,
      placement: { average: 15.5, highest: 31.0 },
      strengths: ["Renewable Energy", "Power Systems", "High Voltage"],
      topRecruiters: ["BHEL", "Siemens", "ABB", "Schneider Electric", "Tata Power"]
    }
  ],
  "CE": [
    {
      name: "IIT Roorkee",
      icon: <School className="w-6 h-6 text-yellow-600" />,
      cutOff: 94,
      placement: { average: 15.0, highest: 30.0 },
      strengths: ["Structural Engineering", "Transportation", "Geotechnical"],
      topRecruiters: ["Larsen & Toubro", "Tata Projects", "Shapoorji Pallonji", "Gammon India", "HCC"]
    },
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 93,
      placement: { average: 14.5, highest: 29.0 },
      strengths: ["Water Resources", "Environmental", "Coastal Engineering"],
      topRecruiters: ["Tata Projects", "Larsen & Toubro", "Shapoorji Pallonji", "Gammon India", "HCC"]
    },
    {
      name: "IIT Delhi",
      icon: <School className="w-6 h-6 text-green-600" />,
      cutOff: 92,
      placement: { average: 14.0, highest: 28.0 },
      strengths: ["Construction Technology", "Project Management", "Infrastructure"],
      topRecruiters: ["Tata Projects", "Larsen & Toubro", "Shapoorji Pallonji", "Gammon India", "HCC"]
    }
  ],
  "CH": [
    {
      name: "IIT Bombay",
      icon: <School className="w-6 h-6 text-blue-600" />,
      cutOff: 95,
      placement: { average: 15.5, highest: 31.0 },
      strengths: ["Process Design", "Catalysis", "Biotechnology"],
      topRecruiters: ["Reliance Industries", "HUL", "ITC", "P&G", "BASF"]
    },
    {
      name: "IIT Madras",
      icon: <School className="w-6 h-6 text-red-600" />,
      cutOff: 94,
      placement: { average: 15.0, highest: 30.0 },
      strengths: ["Polymer Science", "Biotechnology", "Materials"],
      topRecruiters: ["HUL", "Reliance Industries", "ITC", "P&G", "BASF"]
    },
    {
      name: "IIT Kanpur",
      icon: <School className="w-6 h-6 text-purple-600" />,
      cutOff: 93,
      placement: { average: 14.5, highest: 29.0 },
      strengths: ["Reaction Engineering", "Thermodynamics", "Process Control"],
      topRecruiters: ["ITC", "Reliance Industries", "HUL", "P&G", "BASF"]
    }
  ]
};

const branchIcons: { [key: string]: React.ReactNode } = {
  "CSE": <Code className="w-6 h-6 text-blue-600" />,
  "ECE": <Radio className="w-6 h-6 text-purple-600" />,
  "ME": <Cog className="w-6 h-6 text-green-600" />,
  "EE": <Zap className="w-6 h-6 text-yellow-600" />,
  "CE": <Building2 className="w-6 h-6 text-orange-600" />,
  "CH": <Beaker className="w-6 h-6 text-red-600" />
};

const companyIcons: { [key: string]: React.ReactNode } = {
  "Google": <Building2 className="w-6 h-6 text-blue-600" />,
  "Microsoft": <Building2 className="w-6 h-6 text-green-600" />,
  "Amazon": <Building2 className="w-6 h-6 text-orange-600" />,
  "IBM": <Building2 className="w-6 h-6 text-blue-800" />,
  "Intel": <Cpu className="w-6 h-6 text-blue-600" />,
  "Qualcomm": <Cpu className="w-6 h-6 text-purple-600" />,
  "AMD": <Cpu className="w-6 h-6 text-red-600" />,
  "NVIDIA": <Cpu className="w-6 h-6 text-green-600" />,
  "Texas Instruments": <Cpu className="w-6 h-6 text-red-800" />,
  "Samsung": <Laptop className="w-6 h-6 text-blue-600" />,
  "Bosch": <Cog className="w-6 h-6 text-red-600" />,
  "Tata Motors": <Car className="w-6 h-6 text-blue-600" />,
  "Mahindra": <Car className="w-6 h-6 text-red-600" />,
  "ABB": <Zap className="w-6 h-6 text-red-600" />,
  "KUKA": <Cog className="w-6 h-6 text-blue-600" />,
  "FANUC": <Cog className="w-6 h-6 text-red-600" />,
  "Siemens": <Zap className="w-6 h-6 text-blue-600" />,
  "General Electric": <Zap className="w-6 h-6 text-blue-800" />
};

interface CollegePlacement {
  average: number;
  highest: number;
  percentage: number;
  companies: string[];
}

interface CollegeCutOff {
  gate: number;
  percentile: number;
}

interface College {
  name: string;
  icon: React.ReactNode;
  description: string;
  strengths: string[];
  placement: CollegePlacement;
  cutOff: CollegeCutOff;
  facilities: string[];
  research: string[];
  location: string;
  fees: string;
}

interface CollegeCategory {
  [key: string]: College[];
}

interface TopCollegesData {
  [key: string]: CollegeCategory;
}

const collegeIcons: { [key: string]: React.ReactNode } = {
  "IIT Bombay": <School className="w-6 h-6 text-blue-600" />,
  "IIT Delhi": <School className="w-6 h-6 text-green-600" />,
  "IIT Madras": <School className="w-6 h-6 text-red-600" />,
  "IIT Kanpur": <School className="w-6 h-6 text-purple-600" />,
  "IIT Kharagpur": <School className="w-6 h-6 text-orange-600" />,
  "IIT Roorkee": <School className="w-6 h-6 text-yellow-600" />,
  "NIT Trichy": <School className="w-6 h-6 text-blue-800" />,
  "NIT Surathkal": <School className="w-6 h-6 text-green-800" />,
  "NIT Warangal": <School className="w-6 h-6 text-red-800" />,
  "BITS Pilani": <School className="w-6 h-6 text-purple-800" />,
  "DTU Delhi": <School className="w-6 h-6 text-orange-800" />,
  "COEP Pune": <School className="w-6 h-6 text-yellow-800" />
};

const companyLogos: { [key: string]: string } = {
  "Google": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "Microsoft": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
  "Amazon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
  "Intel": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282020%2C_light_blue%29.svg/1200px-Intel_logo_%282020%2C_light_blue%29.svg.png",
  "Qualcomm": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Qualcomm-Logo.svg/1200px-Qualcomm-Logo.svg.png",
  "Samsung": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
  "Tata Motors": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tata_Motors_logo.svg/1200px-Tata_Motors_logo.svg.png",
  "Mahindra": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mahindra_Rise_New_Logo.svg/1200px-Mahindra_Rise_New_Logo.svg.png",
  "Larsen & Toubro": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/L%26T_Logo.svg/1200px-L%26T_Logo.svg.png",
  "Reliance Industries": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png",
  "HDFC Bank": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/HDFC_Bank_Logo.svg/1200px-HDFC_Bank_Logo.svg.png",
  "TCS": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/TCS_logo.svg/1200px-TCS_logo.svg.png",
  "Infosys": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
  "Wipro": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png",
  "IBM": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png"
};

const topCollegesData: TopCollegesData = {
  "CSE": {
    "IITs": [
      {
        name: "IIT Bombay",
        icon: collegeIcons["IIT Bombay"],
        description: "Premier institute known for excellence in AI/ML research and strong industry connections",
        strengths: ["AI/ML Research", "Software Development", "Data Science"],
        placement: { 
          average: 22.0, 
          highest: 45.0,
          percentage: 95,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 98, percentile: 99.5 },
        facilities: ["Advanced Computing Lab", "AI Research Center", "Industry Partnerships"],
        research: ["Machine Learning", "Computer Vision", "Distributed Systems"],
        location: "Mumbai, Maharashtra",
        fees: "₹2.5 Lakhs/year"
      },
      {
        name: "IIT Delhi",
        icon: collegeIcons["IIT Delhi"],
        description: "Strong focus on theoretical computer science and algorithms",
        strengths: ["Algorithms", "Systems", "Networks"],
        placement: { 
          average: 21.5, 
          highest: 44.0,
          percentage: 94,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 97, percentile: 99.2 },
        facilities: ["High Performance Computing Lab", "IoT Lab", "Cybersecurity Center"],
        research: ["Theoretical CS", "Networks", "Security"],
        location: "New Delhi",
        fees: "₹2.3 Lakhs/year"
      },
      {
        name: "IIT Madras",
        icon: collegeIcons["IIT Madras"],
        description: "Excellent in systems and software engineering",
        strengths: ["Systems", "Software Engineering", "Distributed Computing"],
        placement: { 
          average: 20.0, 
          highest: 42.0,
          percentage: 93,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 96, percentile: 99.0 },
        facilities: ["Software Engineering Lab", "Cloud Computing Center", "Mobile Computing Lab"],
        research: ["Software Systems", "Cloud Computing", "Mobile Computing"],
        location: "Chennai, Tamil Nadu",
        fees: "₹2.2 Lakhs/year"
      },
      {
        name: "IIT Kanpur",
        icon: collegeIcons["IIT Kanpur"],
        description: "Strong in theoretical foundations and research",
        strengths: ["Theoretical CS", "Algorithms", "Systems"],
        placement: { 
          average: 19.5, 
          highest: 40.0,
          percentage: 92,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 95, percentile: 98.8 },
        facilities: ["Advanced Algorithms Lab", "Systems Lab", "Research Center"],
        research: ["Theoretical CS", "Algorithms", "Systems"],
        location: "Kanpur, Uttar Pradesh",
        fees: "₹2.1 Lakhs/year"
      },
      {
        name: "IIT Kharagpur",
        icon: collegeIcons["IIT Kharagpur"],
        description: "Comprehensive computer science education with industry focus",
        strengths: ["Software Engineering", "AI/ML", "Networks"],
        placement: { 
          average: 19.0, 
          highest: 38.0,
          percentage: 91,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 94, percentile: 98.5 },
        facilities: ["Software Lab", "AI Research Center", "Networking Lab"],
        research: ["Software Engineering", "AI/ML", "Networks"],
        location: "Kharagpur, West Bengal",
        fees: "₹2.0 Lakhs/year"
      }
    ],
    "NITs": [
      {
        name: "NIT Trichy",
        icon: collegeIcons["NIT Trichy"],
        description: "Leading NIT with strong industry connections",
        strengths: ["Software Development", "Web Technologies", "Database Systems"],
        placement: { 
          average: 16.0, 
          highest: 32.0,
          percentage: 90,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 92, percentile: 98.0 },
        facilities: ["Software Lab", "Web Technologies Lab", "Database Lab"],
        research: ["Web Technologies", "Database Systems", "Software Engineering"],
        location: "Tiruchirappalli, Tamil Nadu",
        fees: "₹1.8 Lakhs/year"
      },
      {
        name: "NIT Surathkal",
        icon: collegeIcons["NIT Surathkal"],
        description: "Excellent in software engineering and web technologies",
        strengths: ["Software Engineering", "Web Technologies", "Mobile Computing"],
        placement: { 
          average: 15.5, 
          highest: 30.0,
          percentage: 89,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 91, percentile: 97.8 },
        facilities: ["Software Engineering Lab", "Web Technologies Lab", "Mobile Computing Lab"],
        research: ["Software Engineering", "Web Technologies", "Mobile Computing"],
        location: "Surathkal, Karnataka",
        fees: "₹1.7 Lakhs/year"
      },
      {
        name: "NIT Warangal",
        icon: collegeIcons["NIT Warangal"],
        description: "Strong in systems and networks",
        strengths: ["Systems", "Networks", "Security"],
        placement: { 
          average: 15.0, 
          highest: 28.0,
          percentage: 88,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 90, percentile: 97.5 },
        facilities: ["Systems Lab", "Networks Lab", "Security Lab"],
        research: ["Systems", "Networks", "Security"],
        location: "Warangal, Telangana",
        fees: "₹1.6 Lakhs/year"
      },
      {
        name: "NIT Calicut",
        icon: collegeIcons["NIT Calicut"],
        description: "Focus on practical software development",
        strengths: ["Software Development", "Web Technologies", "Database Systems"],
        placement: { 
          average: 14.5, 
          highest: 26.0,
          percentage: 87,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 89, percentile: 97.2 },
        facilities: ["Software Development Lab", "Web Technologies Lab", "Database Lab"],
        research: ["Software Development", "Web Technologies", "Database Systems"],
        location: "Calicut, Kerala",
        fees: "₹1.5 Lakhs/year"
      },
      {
        name: "NIT Rourkela",
        icon: collegeIcons["NIT Rourkela"],
        description: "Strong in algorithms and data structures",
        strengths: ["Algorithms", "Data Structures", "Software Engineering"],
        placement: { 
          average: 14.0, 
          highest: 24.0,
          percentage: 86,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 88, percentile: 97.0 },
        facilities: ["Algorithms Lab", "Data Structures Lab", "Software Engineering Lab"],
        research: ["Algorithms", "Data Structures", "Software Engineering"],
        location: "Rourkela, Odisha",
        fees: "₹1.4 Lakhs/year"
      }
    ],
    "Private": [
      {
        name: "BITS Pilani",
        icon: collegeIcons["BITS Pilani"],
        description: "Premier private institute with strong industry focus",
        strengths: ["Software Development", "AI/ML", "Web Technologies"],
        placement: { 
          average: 18.0, 
          highest: 35.0,
          percentage: 92,
          companies: ["Google", "Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA"]
        },
        cutOff: { gate: 93, percentile: 98.2 },
        facilities: ["Software Lab", "AI Research Center", "Web Technologies Lab"],
        research: ["Software Development", "AI/ML", "Web Technologies"],
        location: "Pilani, Rajasthan",
        fees: "₹4.5 Lakhs/year"
      },
      {
        name: "VIT Vellore",
        icon: collegeIcons["VIT Vellore"],
        description: "Strong in practical software development",
        strengths: ["Software Development", "Web Technologies", "Mobile Computing"],
        placement: { 
          average: 16.5, 
          highest: 30.0,
          percentage: 90,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 90, percentile: 97.5 },
        facilities: ["Software Development Lab", "Web Technologies Lab", "Mobile Computing Lab"],
        research: ["Software Development", "Web Technologies", "Mobile Computing"],
        location: "Vellore, Tamil Nadu",
        fees: "₹3.8 Lakhs/year"
      },
      {
        name: "Manipal Institute of Technology",
        icon: collegeIcons["Manipal Institute of Technology"],
        description: "Excellent in emerging technologies",
        strengths: ["AI/ML", "Cloud Computing", "Cybersecurity"],
        placement: { 
          average: 15.5, 
          highest: 28.0,
          percentage: 88,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 88, percentile: 97.0 },
        facilities: ["AI Research Center", "Cloud Computing Lab", "Cybersecurity Lab"],
        research: ["AI/ML", "Cloud Computing", "Cybersecurity"],
        location: "Manipal, Karnataka",
        fees: "₹3.5 Lakhs/year"
      },
      {
        name: "SRM Institute of Science and Technology",
        icon: collegeIcons["SRM Institute of Science and Technology"],
        description: "Strong in software engineering and web technologies",
        strengths: ["Software Engineering", "Web Technologies", "Database Systems"],
        placement: { 
          average: 14.5, 
          highest: 26.0,
          percentage: 86,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 86, percentile: 96.5 },
        facilities: ["Software Engineering Lab", "Web Technologies Lab", "Database Lab"],
        research: ["Software Engineering", "Web Technologies", "Database Systems"],
        location: "Chennai, Tamil Nadu",
        fees: "₹3.2 Lakhs/year"
      },
      {
        name: "Thapar Institute of Engineering and Technology",
        icon: collegeIcons["Thapar Institute of Engineering and Technology"],
        description: "Focus on practical software development",
        strengths: ["Software Development", "Web Technologies", "Mobile Computing"],
        placement: { 
          average: 14.0, 
          highest: 24.0,
          percentage: 85,
          companies: ["Microsoft", "Amazon", "IBM", "Intel", "Qualcomm", "AMD", "NVIDIA", "Samsung"]
        },
        cutOff: { gate: 85, percentile: 96.0 },
        facilities: ["Software Development Lab", "Web Technologies Lab", "Mobile Computing Lab"],
        research: ["Software Development", "Web Technologies", "Mobile Computing"],
        location: "Patiala, Punjab",
        fees: "₹3.0 Lakhs/year"
      }
    ]
  }
};

const CollegeRecommendationCard = ({ college }: { college: CollegeRecommendation }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-blue-600">
          {college.icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{college.name}</h3>
          <p className="text-sm text-gray-600">Cut-off: {college.cutOff}%</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Average Package:</span>
          <span className="font-medium text-gray-900">₹{college.placement.average} LPA</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Highest Package:</span>
          <span className="font-medium text-gray-900">₹{college.placement.highest} LPA</span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {college.strengths.map((strength, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
          >
            {strength}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Top Recruiters:</h4>
        <div className="flex flex-wrap gap-2">
          {college.topRecruiters?.map((company, index) => (
            <img
              key={index}
              src={companyLogos[company]}
              alt={company}
              className="h-6 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/100x30?text=Company";
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseDetailsModal = ({ course, isOpen, onClose }: { course: Course; isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="text-blue-600">
                {branchIcons[course.branch]}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{course.name}</h2>
                <p className="text-gray-600">{course.specialization}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              {["overview", "curriculum", "eligibility", "careers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            {activeTab === "overview" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Program Details</h3>
                    <div className="space-y-2">
                      <p className="text-blue-800">
                        <span className="font-medium">Duration:</span> {course.duration}
                      </p>
                      <p className="text-blue-800">
                        <span className="font-medium">Seats:</span> {course.seats}
                      </p>
                      <p className="text-blue-800">
                        <span className="font-medium">Cut-off:</span> {course.cutOff}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Placement Statistics</h3>
                    <div className="space-y-2">
                      <p className="text-green-800">
                        <span className="font-medium">Average Package:</span> ₹{course.placement.average} LPA
                      </p>
                      <p className="text-green-800">
                        <span className="font-medium">Highest Package:</span> ₹{course.placement.highest} LPA
                      </p>
                      <p className="text-green-800">
                        <span className="font-medium">Placement Rate:</span> {course.placement.percentage}%
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Top Recruiters</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {course.placement.companies.map((company) => (
                        <div 
                          key={company} 
                          className="flex flex-col items-center p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                        >
                          <div className="w-8 h-8 flex items-center justify-center mb-1">
                            {companyIcons[company]}
                          </div>
                          <div className="h-4 w-full flex items-center justify-center">
                            <span className="text-xs text-gray-600 text-center line-clamp-1 px-1">{company}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "curriculum" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.curriculum.coreSubjects.map((subject, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Electives</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.curriculum.electives.map((elective, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                        <span className="text-gray-700">{elective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Areas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.curriculum.researchAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                        <Beaker className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "eligibility" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Eligibility Criteria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.eligibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "careers" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Career Prospects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.careerProspects.map((career, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <Briefcase className="h-5 w-5 text-blue-600 mt-1" />
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Courses = () => {
  const [selectedBranch, setSelectedBranch] = useState("All Branches");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const filteredCourses = selectedBranch === "All Branches"
    ? mtechBranches
    : mtechBranches.filter(course => course.branch === selectedBranch);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-8">
        {/* Headers moved to TitleBanner for desktop, Sidebar for mobile */}

        <div className="flex flex-wrap gap-4">
          <Button
            variant={selectedBranch === "All Branches" ? "default" : "outline"}
            onClick={() => setSelectedBranch("All Branches")}
            className="flex items-center gap-2"
          >
            <School className="w-4 h-4" />
            All Branches
          </Button>
          {Object.keys(branchIcons).map((branch) => (
            <Button
              key={branch}
              variant={selectedBranch === branch ? "default" : "outline"}
              onClick={() => setSelectedBranch(branch)}
              className="flex items-center gap-2"
            >
              {branchIcons[branch]}
              {branch}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card
              key={course.name}
              className="group hover:shadow-xl transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  {branchIcons[course.branch]}
                  <div>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.specialization}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {course.curriculum.coreSubjects.slice(0, 3).map((subject, index) => (
                      <Badge key={index} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Seats</p>
                      <p className="font-semibold">{course.seats}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cut-off</p>
                      <p className="font-semibold">{course.cutOff}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Average Package</p>
                      <p className="font-semibold">₹{course.placement.average} LPA</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCourse(course);
                      setIsDetailsModalOpen(true);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedBranch !== "All Branches" && (
          <div className="mt-12 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Top College Recommendations</h2>
            {Object.entries(topCollegesData[selectedBranch.split(" ")[0]] || {}).map(([category, colleges]) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colleges.map((college, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <CardHeader className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <CardTitle className="text-xl flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-blue-500" />
                            {college.name}
                          </CardTitle>
                          <CardDescription className="text-base">{college.location}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">
                            {college.description}
                          </p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Key Strengths</h4>
                            <div className="flex flex-wrap gap-2">
                              {college.strengths.map((strength, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                                  {strength}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Facilities</h4>
                            <div className="flex flex-wrap gap-2">
                              {college.facilities.map((facility, idx) => (
                                <Badge key={idx} variant="outline" className="bg-gray-50">
                                  {facility}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium">Research Areas</h4>
                            <div className="flex flex-wrap gap-2">
                              {college.research.map((area, idx) => (
                                <Badge key={idx} variant="outline" className="bg-purple-50 text-purple-700">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="pt-4 border-t">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">GATE Cut-off</p>
                                <p className="font-semibold">{college.cutOff.gate}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Percentile</p>
                                <p className="font-semibold">{college.cutOff.percentile}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Average Package</p>
                                <p className="font-semibold">₹{college.placement.average} LPA</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Highest Package</p>
                                <p className="font-semibold">₹{college.placement.highest} LPA</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Placement Rate</p>
                                <p className="font-semibold">{college.placement.percentage}%</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Annual Fees</p>
                                <p className="font-semibold">{college.fees}</p>
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 border-t">
                            <h4 className="font-medium mb-2">Top Recruiters</h4>
                            <div className="flex flex-wrap gap-2">
                              {college.placement.companies.map((company, idx) => (
                                <Badge key={idx} variant="outline" className="bg-green-50 text-green-700">
                                  {company}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedCourse && (
        <CourseDetailsModal
          course={selectedCourse}
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
        />
      )}
    </div>
  );
}; 