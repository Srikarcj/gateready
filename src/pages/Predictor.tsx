
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  TrendingUp, 
  Users, 
  BookOpen,
  Building,
  DollarSign,
  Award,
  Calendar,
  ChevronRight,
  ExternalLink,
  BarChart3
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  type: "IIT" | "NIT" | "IIIT" | "Government" | "Private";
  ranking: number;
  cutoffs: {
    [branch: string]: {
      general: { open: number; close: number };
      obc: { open: number; close: number };
      sc: { open: number; close: number };
      st: { open: number; close: number };
    };
  };
  cutoffHistory: Array<{
    year: number;
    general: number;
    obc: number;
    sc: number;
    st: number;
  }>;
  branches: string[];
  placement: {
    average: number;
    highest: number;
    companies: string[];
  };
  fees: {
    tuition: number;
    hostel: number;
    total: number;
  };
  website: string;
  image: string;
  distance?: number;
}

export const Predictor = () => {
  const [gateScore, setGateScore] = useState("");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("general");
  const [selectedBranch, setSelectedBranch] = useState("Computer Science");
  const [selectedState, setSelectedState] = useState("all");
  const [collegeType, setCollegeType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [eligibleColleges, setEligibleColleges] = useState<College[]>([]);
  const [userLocation, setUserLocation] = useState<{lat: number; lng: number} | null>(null);
  const [selectedCollegeForChart, setSelectedCollegeForChart] = useState<College | null>(null);

  const branches = [
    "Computer Science", "Electronics & Communication", "Mechanical Engineering",
    "Civil Engineering", "Electrical Engineering", "Chemical Engineering",
    "Instrumentation Engineering", "Aerospace Engineering", "Biotechnology",
    "Production & Industrial", "Metallurgical Engineering", "Mining Engineering"
  ];

  const states = [
    "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Gujarat",
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab", "Rajasthan",
    "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  // Comprehensive college database with historical cutoff data
  const collegeDatabase: College[] = [
    {
      id: "iit-bombay",
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai",
      state: "Maharashtra",
      type: "IIT",
      ranking: 1,
      cutoffs: {
        "Computer Science": {
          general: { open: 67, close: 100 },
          obc: { open: 150, close: 200 },
          sc: { open: 300, close: 400 },
          st: { open: 400, close: 500 }
        },
        "Electronics & Communication": {
          general: { open: 150, close: 250 },
          obc: { open: 300, close: 400 },
          sc: { open: 500, close: 600 },
          st: { open: 600, close: 700 }
        }
      },
      cutoffHistory: [
        { year: 2024, general: 67, obc: 150, sc: 300, st: 400 },
        { year: 2023, general: 71, obc: 160, sc: 320, st: 420 },
        { year: 2022, general: 63, obc: 145, sc: 285, st: 380 },
        { year: 2021, general: 69, obc: 155, sc: 310, st: 410 },
        { year: 2020, general: 72, obc: 165, sc: 330, st: 440 },
        { year: 2019, general: 65, obc: 148, sc: 295, st: 390 }
      ],
      branches: ["Computer Science", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering"],
      placement: {
        average: 2150000,
        highest: 5500000,
        companies: ["Google", "Microsoft", "Amazon", "Goldman Sachs", "McKinsey"]
      },
      fees: {
        tuition: 250000,
        hostel: 150000,
        total: 400000
      },
      website: "https://www.iitb.ac.in",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop"
    },
    {
      id: "iit-delhi",
      name: "Indian Institute of Technology Delhi",
      location: "New Delhi",
      state: "Delhi",
      type: "IIT",
      ranking: 2,
      cutoffs: {
        "Computer Science": {
          general: { open: 70, close: 120 },
          obc: { open: 180, close: 250 },
          sc: { open: 350, close: 450 },
          st: { open: 450, close: 550 }
        }
      },
      cutoffHistory: [
        { year: 2024, general: 70, obc: 180, sc: 350, st: 450 },
        { year: 2023, general: 75, obc: 190, sc: 370, st: 470 },
        { year: 2022, general: 68, obc: 175, sc: 340, st: 440 },
        { year: 2021, general: 73, obc: 185, sc: 360, st: 460 },
        { year: 2020, general: 76, obc: 195, sc: 380, st: 480 },
        { year: 2019, general: 69, obc: 178, sc: 345, st: 445 }
      ],
      branches: ["Computer Science", "Electronics & Communication", "Mechanical Engineering"],
      placement: {
        average: 2080000,
        highest: 5200000,
        companies: ["Google", "Microsoft", "Adobe", "Samsung", "Qualcomm"]
      },
      fees: {
        tuition: 250000,
        hostel: 140000,
        total: 390000
      },
      website: "https://www.iitd.ac.in",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop"
    },
    {
      id: "nit-trichy",
      name: "National Institute of Technology Tiruchirappalli",
      location: "Tiruchirappalli",
      state: "Tamil Nadu",
      type: "NIT",
      ranking: 8,
      cutoffs: {
        "Computer Science": {
          general: { open: 250, close: 400 },
          obc: { open: 500, close: 650 },
          sc: { open: 800, close: 1000 },
          st: { open: 1000, close: 1200 }
        }
      },
      cutoffHistory: [
        { year: 2024, general: 250, obc: 500, sc: 800, st: 1000 },
        { year: 2023, general: 265, obc: 520, sc: 820, st: 1020 },
        { year: 2022, general: 240, obc: 485, sc: 785, st: 985 },
        { year: 2021, general: 258, obc: 510, sc: 810, st: 1010 },
        { year: 2020, general: 270, obc: 530, sc: 830, st: 1030 },
        { year: 2019, general: 245, obc: 490, sc: 790, st: 990 }
      ],
      branches: ["Computer Science", "Electronics & Communication", "Mechanical Engineering"],
      placement: {
        average: 1650000,
        highest: 4200000,
        companies: ["TCS", "Infosys", "Wipro", "L&T", "Bajaj Auto"]
      },
      fees: {
        tuition: 180000,
        hostel: 120000,
        total: 300000
      },
      website: "https://www.nitt.edu",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=400&fit=crop"
    }
  ];

  // Convert GATE score to approximate rank
  const scoreToRank = (score: number): number => {
    if (score >= 80) return Math.floor(100 + (100 - score) * 20);
    if (score >= 70) return Math.floor(500 + (80 - score) * 50);
    if (score >= 60) return Math.floor(1500 + (70 - score) * 100);
    if (score >= 50) return Math.floor(5000 + (60 - score) * 200);
    return Math.floor(15000 + (50 - score) * 500);
  };

  // Auto-calculate rank when score changes
  useEffect(() => {
    if (gateScore) {
      const score = parseFloat(gateScore);
      if (score >= 0 && score <= 100) {
        const estimatedRank = scoreToRank(score);
        setRank(estimatedRank.toString());
      }
    }
  }, [gateScore]);

  // Predict eligible colleges
  const predictColleges = () => {
    if (!rank || !gateScore) return;

    const userRank = parseInt(rank);
    
    const eligible = collegeDatabase.filter(college => {
      if (!college.cutoffs[selectedBranch]) return false;
      const cutoff = college.cutoffs[selectedBranch][category as keyof typeof college.cutoffs[string]];
      if (!cutoff) return false;
      const isEligible = userRank >= cutoff.open && userRank <= cutoff.close;
      if (selectedState !== "all" && college.state !== selectedState) return false;
      if (collegeType !== "all" && college.type !== collegeType) return false;
      if (searchTerm && !college.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return isEligible;
    });

    setEligibleColleges(eligible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              College Predictor & Cutoff Analyzer
            </h1>
          </div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            🎯 Enter your GATE score and discover colleges with detailed cutoff trends from 2019-2024. 
            View historical data, placement statistics, and make informed decisions.
          </p>
        </div>

        {/* Input Section */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl">📊 Enter Your GATE Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">GATE Score</label>
                <Input
                  type="number"
                  placeholder="e.g., 75.5"
                  value={gateScore}
                  onChange={(e) => setGateScore(e.target.value)}
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">AIR (Auto-calculated)</label>
                <Input
                  type="number"
                  placeholder="Rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Branch/Stream</label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {branches.map(branch => (
                      <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    <SelectItem value="all">All States</SelectItem>
                    {states.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">College Type</label>
                <Select value={collegeType} onValueChange={setCollegeType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="IIT">IITs</SelectItem>
                    <SelectItem value="NIT">NITs</SelectItem>
                    <SelectItem value="IIIT">IIITs</SelectItem>
                    <SelectItem value="Government">Government</SelectItem>
                    <SelectItem value="Private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  className="pl-10"
                  placeholder="Search for colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button 
                onClick={predictColleges}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                Predict Colleges
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Historical Cutoff Trends */}
        {selectedCollegeForChart && (
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Cutoff Trends: {selectedCollegeForChart.name} - {selectedBranch}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={selectedCollegeForChart.cutoffHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="general" stroke="#2563eb" strokeWidth={2} name="General" />
                    <Line type="monotone" dataKey="obc" stroke="#16a34a" strokeWidth={2} name="OBC" />
                    <Line type="monotone" dataKey="sc" stroke="#dc2626" strokeWidth={2} name="SC" />
                    <Line type="monotone" dataKey="st" stroke="#9333ea" strokeWidth={2} name="ST" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Section */}
        {eligibleColleges.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">
                📚 Eligible Colleges (Total: {eligibleColleges.length})
              </h2>
              <Badge variant="outline" className="bg-white">
                <Filter className="h-3 w-3 mr-1" />
                Score {gateScore} | AIR {rank} | {category.toUpperCase()}
              </Badge>
            </div>

            <div className="space-y-6">
              {eligibleColleges.map((college) => (
                <Card 
                  key={college.id} 
                  className="overflow-hidden transition-all duration-300 hover:shadow-2xl border-0 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row">
                    <div 
                      className="md:w-1/3 h-48 md:h-auto bg-cover bg-center"
                      style={{ backgroundImage: `url(${college.image})` }}
                    />
                    
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-slate-900">{college.name}</h3>
                              <Badge 
                                className={`ml-2 ${
                                  college.type === 'IIT' ? 'bg-blue-600' : 
                                  college.type === 'NIT' ? 'bg-green-600' : 
                                  college.type === 'IIIT' ? 'bg-purple-600' : 'bg-amber-600'
                                }`}
                              >
                                {college.type}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-1 mt-2 text-sm">
                              <MapPin className="h-3 w-3 text-slate-500" />
                              <span className="text-slate-600">{college.location}, {college.state}</span>
                              
                              <span className="mx-2 text-slate-400">•</span>
                              
                              <Star className="h-3 w-3 text-amber-500" />
                              <span className="font-medium text-slate-800">Rank #{college.ranking} in India</span>
                            </div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedCollegeForChart(college)}
                          >
                            <BarChart3 className="h-4 w-4 mr-2" />
                            View Trends
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 flex items-center">
                              <Building className="h-4 w-4 mr-1 text-green-600" />
                              {selectedBranch} Cutoffs (2024)
                            </h4>
                            <div className="mt-2 border rounded-lg p-3 bg-green-50 text-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <div className="text-xs text-slate-500">Opening Rank</div>
                                  <div className="font-medium">{college.cutoffs[selectedBranch]?.general.open}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-slate-500">Closing Rank</div>
                                  <div className="font-medium">{college.cutoffs[selectedBranch]?.general.close}</div>
                                </div>
                                <div className="col-span-2 mt-1">
                                  <div className="text-xs text-slate-500">Your Rank: <span className="font-medium text-green-700">{rank}</span></div>
                                  <div className="h-2 bg-green-200 rounded-full mt-1 overflow-hidden">
                                    {college.cutoffs[selectedBranch] && (
                                      <div 
                                        className="h-full bg-gradient-to-r from-green-400 to-green-600"
                                        style={{ 
                                          width: `${Math.min(100, Math.max(0, (
                                            (parseInt(rank) - college.cutoffs[selectedBranch].general.open) /
                                            (college.cutoffs[selectedBranch].general.close - college.cutoffs[selectedBranch].general.open)
                                          ) * 100))}%` 
                                        }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 flex items-center">
                              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
                              Placement Statistics
                            </h4>
                            <div className="mt-2 border rounded-lg p-3 bg-blue-50 text-sm">
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-slate-500">Average Package</span>
                                <span className="font-medium">₹{(college.placement.average/100000).toFixed(1)} LPA</span>
                              </div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs text-slate-500">Highest Package</span>
                                <span className="font-medium">₹{(college.placement.highest/100000).toFixed(1)} LPA</span>
                              </div>
                              <div className="text-xs text-slate-500">Top Recruiters</div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {college.placement.companies.slice(0, 3).map((company, idx) => (
                                  <Badge key={idx} variant="outline" className="bg-white text-xs">{company}</Badge>
                                ))}
                                {college.placement.companies.length > 3 && (
                                  <Badge variant="outline" className="bg-white text-xs">+{college.placement.companies.length - 3}</Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-slate-700 flex items-center">
                              <Award className="h-4 w-4 mr-1 text-purple-600" />
                              Fees & Information
                            </h4>
                            <div className="mt-2 border rounded-lg p-3 bg-purple-50 text-sm">
                              <div className="flex justify-between mb-1">
                                <span className="text-xs text-slate-500">Annual Fees</span>
                                <span className="font-medium">₹{(college.fees.total/1000).toFixed(0)}K</span>
                              </div>
                              <div className="flex justify-between mb-2">
                                <span className="text-xs text-slate-500">Total (2 years)</span>
                                <span className="font-medium">₹{(college.fees.total*2/100000).toFixed(1)} Lac</span>
                              </div>
                              <div className="text-xs text-slate-500 mb-1">Branches Available</div>
                              <div className="text-xs font-medium">{college.branches.length} programs</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs bg-amber-50">
                              <Calendar className="h-3 w-3 mr-1 text-amber-600" />
                              6-Year Trend Available
                            </Badge>
                            <Badge variant="outline" className="text-xs bg-green-50">
                              <BookOpen className="h-3 w-3 mr-1 text-green-600" />
                              {Math.round((parseInt(rank) / college.cutoffs[selectedBranch]?.general.close) * 100)}% Admission Chance
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                            <Button size="sm" asChild>
                              <a href={college.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Visit Website
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 bg-slate-900 text-white rounded-lg">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">GATE Revolution</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Your comprehensive GATE preparation platform with AI-powered college prediction,
                  historical cutoff analysis, and personalized guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Prediction Tools</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>College Predictor</li>
                  <li>Cutoff Analyzer</li>
                  <li>Rank Calculator</li>
                  <li>Historical Trends</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>College Tours</li>
                  <li>Study Materials</li>
                  <li>Mock Tests</li>
                  <li>AI Tutor</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
              <p>&copy; 2024 GATE Revolution. Empowering students to achieve their engineering dreams.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
