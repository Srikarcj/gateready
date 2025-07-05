import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target,
  Play,
  BarChart3,
  CheckCircle,
  Star,
  Users
} from 'lucide-react';

// GATE Branches with subjects
const gateBranches = {
  'Computer Science': {
    code: 'CS',
    subjects: ['Programming', 'Data Structures', 'Algorithms', 'Computer Networks', 'Operating Systems', 'Database Systems'],
    color: 'bg-blue-500'
  },
  'Electronics & Communication': {
    code: 'EC',
    subjects: ['Analog Circuits', 'Digital Circuits', 'Signals & Systems', 'Communications', 'Control Systems', 'Electromagnetics'],
    color: 'bg-green-500'
  },
  'Mechanical Engineering': {
    code: 'ME',
    subjects: ['Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Machine Design', 'Manufacturing', 'Engineering Mechanics'],
    color: 'bg-red-500'
  },
  'Electrical Engineering': {
    code: 'EE',
    subjects: ['Circuit Analysis', 'Control Systems', 'Power Systems', 'Electrical Machines', 'Power Electronics', 'Measurements'],
    color: 'bg-yellow-500'
  },
  'Civil Engineering': {
    code: 'CE',
    subjects: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation', 'Water Resources', 'Environmental', 'Construction'],
    color: 'bg-purple-500'
  },
  'Chemical Engineering': {
    code: 'CH',
    subjects: ['Thermodynamics', 'Fluid Mechanics', 'Heat Transfer', 'Mass Transfer', 'Chemical Reaction', 'Process Control'],
    color: 'bg-indigo-500'
  },
  'Aerospace Engineering': {
    code: 'AE',
    subjects: ['Aerodynamics', 'Aircraft Structures', 'Propulsion', 'Flight Mechanics', 'Space Mechanics', 'Avionics'],
    color: 'bg-pink-500'
  },
  'Biotechnology': {
    code: 'BT',
    subjects: ['Biochemistry', 'Microbiology', 'Cell Biology', 'Molecular Biology', 'Bioprocess Engineering', 'Genetics'],
    color: 'bg-teal-500'
  },
  'Instrumentation Engineering': {
    code: 'IN',
    subjects: ['Measurement Systems', 'Control Systems', 'Analog Electronics', 'Digital Electronics', 'Sensors', 'Signal Processing'],
    color: 'bg-orange-500'
  },
  'Metallurgical Engineering': {
    code: 'MT',
    subjects: ['Physical Metallurgy', 'Mechanical Metallurgy', 'Extractive Metallurgy', 'Materials Science', 'Corrosion', 'Welding'],
    color: 'bg-gray-500'
  }
};

const PracticeTests = () => {
  const navigate = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState('Computer Science');
  const [userStats, setUserStats] = useState({
    testsCompleted: 0,
    averageScore: 0,
    totalTime: 0,
    rank: 0
  });

  // Load user statistics
  useEffect(() => {
    const practiceTestData = localStorage.getItem('practiceTestPerformance');
    if (practiceTestData) {
      const data = JSON.parse(practiceTestData);
      setUserStats({
        testsCompleted: data.testsCompleted || 0,
        averageScore: data.averageTestScore || 0,
        totalTime: data.practiceTestHours || 0,
        rank: data.rank || 0
      });
    }
  }, []);

  const handleStartTest = (testType: string, subject?: string) => {
    const testConfig = {
      branch: selectedBranch,
      branchCode: gateBranches[selectedBranch].code,
      testType,
      subject,
      timestamp: new Date().toISOString()
    };
    
    // Store test configuration
    localStorage.setItem('currentTestConfig', JSON.stringify(testConfig));
    
    // Navigate to test interface
    navigate('/test-interface');
  };

  const getBranchStats = (branchName: string) => {
    const practiceTestData = localStorage.getItem('practiceTestPerformance');
    if (practiceTestData) {
      const data = JSON.parse(practiceTestData);
      const branchCode = gateBranches[branchName].code.toLowerCase();
      const subjectScores = data.subjectScores || {};
      
      let totalTests = 0;
      let totalScore = 0;
      let subjectCount = 0;
      
      Object.keys(subjectScores).forEach(subject => {
        if (subject.includes(branchCode) || gateBranches[branchName].subjects.some(s => 
          subject.toLowerCase().includes(s.toLowerCase().replace(/\s+/g, ''))
        )) {
          totalTests += subjectScores[subject].testsCompleted || 0;
          if (subjectScores[subject].score > 0) {
            totalScore += subjectScores[subject].score;
            subjectCount++;
          }
        }
      });
      
      return {
        testsCompleted: totalTests,
        averageScore: subjectCount > 0 ? Math.round(totalScore / subjectCount) : 0
      };
    }
    
    return { testsCompleted: 0, averageScore: 0 };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">GATE Practice Tests</h1>
              <p className="text-gray-600 mt-2">Real exam experience with comprehensive analytics</p>
            </div>
            <div className="flex items-center gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <div>
                    <div className="text-sm font-medium">Tests Completed</div>
                    <div className="text-2xl font-bold">{userStats.testsCompleted}</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="text-sm font-medium">Average Score</div>
                    <div className="text-2xl font-bold">{userStats.averageScore}%</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Branch Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Select Your GATE Branch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(gateBranches).map(([branchName, branch]) => {
                const stats = getBranchStats(branchName);
                return (
                  <Card 
                    key={branchName}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedBranch === branchName ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    }`}
                    onClick={() => setSelectedBranch(branchName)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 ${branch.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-2`}>
                        {branch.code}
                      </div>
                      <h3 className="font-semibold text-sm mb-1">{branchName}</h3>
                      <div className="text-xs text-gray-500">
                        <div>{stats.testsCompleted} tests</div>
                        <div>{stats.averageScore}% avg</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Test Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject-wise Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Subject-wise Tests
              </CardTitle>
              <p className="text-sm text-gray-600">Practice individual subjects</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {gateBranches[selectedBranch].subjects.map((subject, index) => (
                <div key={subject} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-medium text-sm">{subject}</div>
                    <div className="text-xs text-gray-500">30 questions • 60 minutes</div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleStartTest('subject', subject)}
                    className="gap-1"
                  >
                    <Play className="h-3 w-3" />
                    Start
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Basic Full Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Basic Full Test
              </CardTitle>
              <p className="text-sm text-gray-600">Complete branch coverage</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-green-50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{selectedBranch} Full Test</h3>
                      <p className="text-sm text-gray-600">65 questions • 3 hours</p>
                    </div>
                    <Badge variant="secondary">Basic</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>General Aptitude</span>
                      <span>10 questions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Engineering Mathematics</span>
                      <span>15 questions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Core Subjects</span>
                      <span>40 questions</span>
                    </div>
                  </div>
                  <Button
                    className="w-full gap-2"
                    onClick={() => handleStartTest('basicFull')}
                  >
                    <Play className="h-4 w-4" />
                    Start Basic Full Test
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mock Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-purple-500" />
                Full Mock Tests
              </CardTitle>
              <p className="text-sm text-gray-600">Real exam simulation</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {[1, 2, 3, 4].map((mockNumber) => (
                <div key={mockNumber} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-medium text-sm">Mock Test {mockNumber}</div>
                    <div className="text-xs text-gray-500">65 questions • 3 hours • Real difficulty</div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStartTest('mock', `Mock Test ${mockNumber}`)}
                    className="gap-1"
                  >
                    <Play className="h-3 w-3" />
                    Start
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Performance Analytics */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-indigo-500" />
              Your Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{userStats.testsCompleted}</div>
                <div className="text-sm text-gray-600">Tests Completed</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{userStats.averageScore}%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{userStats.totalTime.toFixed(1)}h</div>
                <div className="text-sm text-gray-600">Total Time</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">#{userStats.rank || 'N/A'}</div>
                <div className="text-sm text-gray-600">Current Rank</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PracticeTests;
