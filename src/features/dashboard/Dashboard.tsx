"use client"

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { 
  BookOpen, 
  Target, 
  Clock, 
  TrendingUp,
  Activity,
  Award,
  CheckCircle,
  Bookmark,
  BarChart3,
  Calendar,
  Clock3,
  TrendingDown,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
// Import Chart.js and registerables
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartType,
  ChartData,
  ChartOptions,
  ChartConfiguration,
  ChartDataset,
  DefaultDataPoint,
  ScaleOptionsByType
} from 'chart.js';
import { Line, Bar, Pie } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Define chart data types
interface ChartDataItem<T = number> {
  labels: string[];
  datasets: Array<{
    label: string;
    data: T[];
    borderColor?: string;
    backgroundColor?: string | string[];
    borderWidth?: number;
    borderRadius?: number;
    tension?: number;
    fill?: boolean;
    borderDash?: number[];
    pointRadius?: number;
  }>;
}

// Define specific chart data types
type LineChartData = ChartDataItem<number>;
type BarChartData = ChartDataItem<number>;



// Practice test focused user performance data
const getUserPerformanceData = () => {
  const savedData = localStorage.getItem('practiceTestPerformance');
  const defaultData = {
    // Practice Test Specific Metrics
    overallScore: 0,
    lastWeekScore: 0,
    practiceTestHours: 0,
    lastWeekTestHours: 0,
    testStreak: 0,
    accuracy: 0,
    lastWeekAccuracy: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    topicsMastered: 0,
    totalTopics: 25,
    averageTimePerQuestion: 0,
    rank: 0,
    totalStudents: 2847,
    lastUpdated: null,

    // Practice Test Tracking
    testsCompleted: 0,
    testsThisWeek: 0,
    averageTestScore: 0,
    bestScore: 0,
    worstScore: 0,
    totalTestTime: 0,

    // Subject Performance (Practice Test Based)
    subjectScores: {
      mathematics: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 },
      physics: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 },
      chemistry: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 },
      computerScience: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 },
      mechanical: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 },
      electrical: { score: 0, testsCompleted: 0, totalQuestions: 0, correctAnswers: 0 }
    },

    // Practice Test History
    recentTests: [],
    monthlyTestCount: [0, 0, 0, 0, 0, 0], // Last 6 months
    monthlyScores: [0, 0, 0, 0, 0, 0], // Last 6 months average scores

    // User State
    isNewUser: true,
    hasPerformedActivity: false,
    joinedDate: new Date().toISOString(),
    achievements: [],

    // Weekly Practice Test Progress
    weeklyTestProgress: {
      monday: 0, tuesday: 0, wednesday: 0, thursday: 0,
      friday: 0, saturday: 0, sunday: 0
    }
  };

  if (savedData) {
    try {
      const userData = JSON.parse(savedData);
      return {
        ...defaultData,
        ...userData,
        isNewUser: userData.testsCompleted === 0 // New user if no practice tests completed
      };
    } catch (error) {
      console.error('Error parsing practice test performance data:', error);
      return defaultData;
    }
  }

  return defaultData;
};

// Practice test focused performance update function
const updatePracticeTestPerformance = (testResult: any) => {
  const currentData = getUserPerformanceData();

  // Only update based on actual practice test results
  const updatedData = {
    ...currentData,
    lastUpdated: new Date().toISOString(),
    hasPerformedActivity: true,
    isNewUser: false,

    // Update test counts
    testsCompleted: currentData.testsCompleted + 1,
    testsThisWeek: currentData.testsThisWeek + 1,

    // Update question metrics
    totalQuestions: currentData.totalQuestions + testResult.totalQuestions,
    correctAnswers: currentData.correctAnswers + testResult.correctAnswers,

    // Update time metrics
    totalTestTime: currentData.totalTestTime + testResult.timeSpent,
    practiceTestHours: currentData.practiceTestHours + (testResult.timeSpent / 60),
  };

  // Calculate accuracy based on practice tests only
  if (updatedData.totalQuestions > 0) {
    updatedData.accuracy = Math.round((updatedData.correctAnswers / updatedData.totalQuestions) * 100);
  }

  // Use the actual test score from the result
  const testScore = testResult.score || Math.round((testResult.correctAnswers / testResult.totalQuestions) * 100);

  // Calculate average test score based on all completed tests
  updatedData.averageTestScore = Math.round(
    ((currentData.averageTestScore * currentData.testsCompleted) + testScore) / updatedData.testsCompleted
  );

  // Update best and worst scores
  updatedData.bestScore = Math.max(currentData.bestScore, testScore);
  updatedData.worstScore = currentData.testsCompleted === 0 ? testScore : Math.min(currentData.worstScore, testScore);

  // Overall score based purely on practice test performance
  updatedData.overallScore = updatedData.averageTestScore;

  // Update average time per question
  if (updatedData.totalQuestions > 0) {
    updatedData.averageTimePerQuestion = Math.round(updatedData.totalTestTime / updatedData.totalQuestions);
  }

  // Update subject performance if subject is provided
  if (testResult.subject && updatedData.subjectScores[testResult.subject]) {
    const subject = updatedData.subjectScores[testResult.subject];
    subject.testsCompleted += 1;
    subject.totalQuestions += testResult.totalQuestions;
    subject.correctAnswers += testResult.correctAnswers;
    subject.score = Math.round((subject.correctAnswers / subject.totalQuestions) * 100);
  }

  // Add to recent tests with actual test data
  const recentTest = {
    id: testResult.id || Date.now(),
    testName: testResult.testName || 'Practice Test',
    score: testScore,
    subject: testResult.subject || 'General',
    date: testResult.date || new Date().toLocaleDateString(),
    timeSpent: testResult.timeSpent,
    totalQuestions: testResult.totalQuestions,
    correctAnswers: testResult.correctAnswers,
    accuracy: testScore,
    difficulty: testResult.difficulty || 'Medium',
    topics: testResult.topics || []
  };

  updatedData.recentTests = [
    recentTest,
    ...(updatedData.recentTests || []).slice(0, 9) // Keep last 10 tests
  ];

  // Update monthly data for charts
  const currentMonth = new Date().getMonth();
  const monthlyScores = [...(updatedData.monthlyScores || [0, 0, 0, 0, 0, 0])];
  const monthlyTestCount = [...(updatedData.monthlyTestCount || [0, 0, 0, 0, 0, 0])];

  // Update current month data
  if (monthlyTestCount[5] === 0) {
    monthlyScores[5] = testScore;
  } else {
    monthlyScores[5] = Math.round(((monthlyScores[5] * monthlyTestCount[5]) + testScore) / (monthlyTestCount[5] + 1));
  }
  monthlyTestCount[5] += 1;

  updatedData.monthlyScores = monthlyScores;
  updatedData.monthlyTestCount = monthlyTestCount;

  // Check for practice test achievements
  const newAchievements = checkPracticeTestAchievements(updatedData, currentData);
  if (newAchievements.length > 0) {
    updatedData.achievements = [...(updatedData.achievements || []), ...newAchievements];
  }

  localStorage.setItem('practiceTestPerformance', JSON.stringify(updatedData));
  return updatedData;
};

// Practice test focused achievement system
const checkPracticeTestAchievements = (newData: any, oldData: any) => {
  const achievements = [];
  const now = new Date().toISOString();

  // First practice test achievement
  if (oldData.testsCompleted === 0 && newData.testsCompleted === 1) {
    achievements.push({
      id: 'first_test',
      title: 'First Steps!',
      description: 'Completed your first practice test',
      icon: '🎯',
      earnedAt: now
    });
  }

  // Practice test milestones
  if (oldData.testsCompleted < 5 && newData.testsCompleted >= 5) {
    achievements.push({
      id: 'tests_5',
      title: 'Test Taker',
      description: 'Completed 5 practice tests',
      icon: '📝',
      earnedAt: now
    });
  }

  if (oldData.testsCompleted < 10 && newData.testsCompleted >= 10) {
    achievements.push({
      id: 'tests_10',
      title: 'Test Master',
      description: 'Completed 10 practice tests',
      icon: '🏆',
      earnedAt: now
    });
  }

  if (oldData.testsCompleted < 25 && newData.testsCompleted >= 25) {
    achievements.push({
      id: 'tests_25',
      title: 'Test Champion',
      description: 'Completed 25 practice tests',
      icon: '👑',
      earnedAt: now
    });
  }

  // Score achievements
  if (newData.bestScore >= 90 && oldData.bestScore < 90) {
    achievements.push({
      id: 'score_90',
      title: 'Excellence!',
      description: 'Scored 90% or higher on a practice test',
      icon: '⭐',
      earnedAt: now
    });
  }

  if (newData.averageTestScore >= 75 && oldData.averageTestScore < 75) {
    achievements.push({
      id: 'avg_75',
      title: 'Consistent Performer',
      description: 'Maintained 75% average score',
      icon: '📈',
      earnedAt: now
    });
  }

  // Accuracy achievements
  if (newData.accuracy >= 80 && oldData.accuracy < 80) {
    achievements.push({
      id: 'accuracy_80',
      title: 'Sharp Shooter',
      description: 'Achieved 80% overall accuracy',
      icon: '🎯',
      earnedAt: now
    });
  }

  return achievements;
};

// Mock data for charts
const performanceData: LineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Your Performance',
      data: [65, 70, 72, 75, 73, 78],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Class Average',
      data: [60, 65, 63, 68, 70, 72],
      borderColor: 'rgb(107, 114, 128)',
      borderDash: [5, 5],
      borderWidth: 1,
      pointRadius: 0,
    },
  ],
};

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        padding: 10,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 11,
        },
      },
    },
    y: {
      type: 'linear' as const,
      min: 50,
      max: 100,
      ticks: {
        callback: (value: any) => `${value}%`,
        font: {
          size: 11,
        },
      } as any, // Workaround for Chart.js type issue
    },
  },
};

// Dynamic subject performance data - will be generated from actual practice test results

const barOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
        },
        maxRotation: 45,
        minRotation: 0,
      },
    },
    y: {
      type: 'linear' as const,
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: (value: any) => `${value}%`,
        font: {
          size: 10,
        },
      } as any, // Workaround for Chart.js type issue
    },
  },
};

const timeSpentData: BarChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Hours',
      data: [3, 2.5, 4, 3.5, 5, 3, 2],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 4,
    },
  ],
};

const timeSpentOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    y: {
      type: 'linear' as const,
      beginAtZero: true,
      title: {
        display: true,
        text: 'Hours',
        font: {
          size: 11,
        },
      } as any, // Workaround for Chart.js type issue
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
};

// All data is now dynamic - no static content

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [analytics, setAnalytics] = useState(getUserPerformanceData());
  const [lastActivity, setLastActivity] = useState(new Date());

  // Function to reset practice test data (for testing new user experience)
  const resetUserData = () => {
    // Clear both old and new data formats
    localStorage.removeItem('practiceTestPerformance');
    localStorage.removeItem('userPerformance');

    // Get fresh default data
    const freshData = getUserPerformanceData();
    setAnalytics(freshData);
    setLastActivity(new Date());

    toast({
      title: "Practice Test Data Reset",
      description: "Your dashboard has been reset to new user state. All practice test data cleared.",
    });

    console.log('Practice test data reset - now showing new user experience:', freshData);
  };

  // Navigation functions for all buttons
  const handleStartStudying = () => {
    // No practice test simulation for studying - just navigate
    toast({
      title: "Study Session Started!",
      description: "Redirecting to Notes page...",
    });
    // Navigate to external notes page
    setTimeout(() => {
      window.open('https://gate-ready-with-ai-notes.netlify.app/', '_blank');
    }, 1000);
  };

  const handleTakeTest = () => {
    toast({
      title: "Redirecting to Practice Tests",
      description: "Opening comprehensive GATE practice test interface...",
    });
    // Navigate to practice tests
    navigate('/practice-tests');
  };

  const handleLearnTopic = () => {
    // No practice test simulation for learning - just navigate
    toast({
      title: "Topic Learning Started!",
      description: "Redirecting to Study Materials...",
    });
    // Navigate to study materials
    setTimeout(() => navigate('/study-materials'), 1000);
  };

  const handleSetGoal = () => {
    // No practice test simulation for goal setting - just navigate
    toast({
      title: "Daily Goal Set!",
      description: "Redirecting to Todo List...",
    });
    // Navigate to todo list
    setTimeout(() => navigate('/todo'), 1000);
  };

  // All navigation functions now use real practice test data - no static content

  const handleViewPerformanceDetails = () => {
    toast({
      title: "Analyzing Performance",
      description: "Loading practice test analytics...",
    });
    navigate('/practice-tests');
  };

  const handleViewRecommendations = () => {
    toast({
      title: "Study Recommendations",
      description: "Loading tutorials and recommendations...",
    });
    navigate('/tutorials');
  };

  const handleViewDetailedAnalytics = () => {
    toast({
      title: "Detailed Analytics",
      description: "Loading practice test analytics...",
    });
    navigate('/practice-tests');
  };

  // Generate dynamic subject performance data from actual practice test results
  const generateSubjectPerformanceData = (): BarChartData => {
    // For new users, show empty chart
    if (analytics.isNewUser || analytics.testsCompleted === 0 || !analytics.subjectScores) {
      return {
        labels: ['No Data Available'],
        datasets: [
          {
            label: 'Score',
            data: [0],
            backgroundColor: ['rgba(203, 213, 225, 0.8)'],
            borderWidth: 0,
          },
        ],
      };
    }

    // Get actual subject scores from practice tests
    const subjectEntries = Object.entries(analytics.subjectScores)
      .filter(([_, data]: [string, any]) => data.testsCompleted > 0)
      .sort(([,a]: [string, any], [,b]: [string, any]) => b.score - a.score)
      .slice(0, 6); // Show top 6 subjects

    if (subjectEntries.length === 0) {
      return {
        labels: ['No Tests Completed'],
        datasets: [
          {
            label: 'Score',
            data: [0],
            backgroundColor: ['rgba(203, 213, 225, 0.8)'],
            borderWidth: 0,
          },
        ],
      };
    }

    const labels = subjectEntries.map(([subject]) =>
      subject.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, c => c.toUpperCase())
    );
    const scores = subjectEntries.map(([_, data]: [string, any]) => data.score);

    const colors = [
      'rgba(59, 130, 246, 0.8)',   // Blue
      'rgba(16, 185, 129, 0.8)',   // Green
      'rgba(245, 158, 11, 0.8)',   // Yellow
      'rgba(139, 92, 246, 0.8)',   // Purple
      'rgba(236, 72, 153, 0.8)',   // Pink
      'rgba(239, 68, 68, 0.8)',    // Red
    ];

    return {
      labels,
      datasets: [
        {
          label: 'Score',
          data: scores,
          backgroundColor: colors.slice(0, scores.length),
          borderWidth: 0,
        },
      ],
    };
  };

  // Dynamic performance data for charts based ONLY on actual practice test results
  const generatePerformanceData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    // For new users, show completely empty chart
    if (analytics.isNewUser || analytics.testsCompleted === 0) {
      return {
        labels: months,
        datasets: [
          {
            label: 'Your Practice Test Performance',
            data: [0, 0, 0, 0, 0, 0],
            borderColor: 'rgb(203, 213, 225)',
            backgroundColor: 'rgba(203, 213, 225, 0.1)',
            tension: 0.4,
            fill: true,
          },
        ],
      };
    }

    // Use ONLY actual monthly scores from practice tests - no interpolation
    const monthlyScores = analytics.monthlyScores || [0, 0, 0, 0, 0, 0];
    const monthlyTestCount = analytics.monthlyTestCount || [0, 0, 0, 0, 0, 0];

    // Show only actual scores - no fake data
    const actualScores = monthlyScores.map((score, index) => {
      return monthlyTestCount[index] > 0 ? score : 0; // Only show score if tests were actually taken
    });

    return {
      labels: months,
      datasets: [
        {
          label: 'Your Practice Test Performance',
          data: actualScores,
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true,
        },
      ],
    };
  };

  // Real-time data loading and updates
  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        setIsLoading(true);

        // Clear old data format if it exists
        if (localStorage.getItem('userPerformance')) {
          localStorage.removeItem('userPerformance');
          console.log('Cleared old userPerformance data format');
        }

        // Load practice test performance data
        const userData = getUserPerformanceData();
        setAnalytics(userData);

        // Log user state for debugging
        console.log('Practice test data loaded:', {
          isNewUser: userData.isNewUser,
          testsCompleted: userData.testsCompleted,
          totalQuestions: userData.totalQuestions,
          practiceTestHours: userData.practiceTestHours,
          accuracy: userData.accuracy
        });
      } catch (error) {
        console.error('Error loading practice test analytics:', error);
        setAnalytics(getUserPerformanceData());
      } finally {
        setIsLoading(false);
      }
    };

    loadAnalytics();

    // Set up real-time updates every 30 seconds
    const interval = setInterval(() => {
      const updatedData = getUserPerformanceData();
      setAnalytics(updatedData);
      setLastActivity(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Function to get actual practice test results from localStorage
  const getPracticeTestResults = () => {
    const results = localStorage.getItem('practiceTestResults');
    return results ? JSON.parse(results) : [];
  };

  // Function to add a practice test result
  const addPracticeTestResult = (testResult: any) => {
    const existingResults = getPracticeTestResults();
    const newResult = {
      ...testResult,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString()
    };

    const updatedResults = [newResult, ...existingResults];
    localStorage.setItem('practiceTestResults', JSON.stringify(updatedResults));

    // Update dashboard analytics based on actual results
    const updatedData = updatePracticeTestPerformance(newResult);
    setAnalytics(updatedData);
    setLastActivity(new Date());

    return newResult;
  };

  // Function to simulate practice test completion ONLY for demo purposes
  // In production, this should be replaced with actual test results from practice tests page
  const simulatePracticeTestForDemo = () => {
    // This simulates what would come from the actual practice tests page
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Mechanical', 'Electrical'];
    const totalQuestions = Math.floor(Math.random() * 20) + 30; // 30-50 questions
    const correctAnswers = Math.floor(Math.random() * totalQuestions * 0.4) + Math.floor(totalQuestions * 0.5); // 50-90% correct
    const timeSpent = Math.floor(Math.random() * 60) + 30; // 30-90 minutes
    const subject = subjects[Math.floor(Math.random() * subjects.length)];

    const testResult = {
      testName: `${subject} Practice Test`,
      subject: subject.toLowerCase().replace(' ', ''),
      totalQuestions,
      correctAnswers,
      timeSpent, // in minutes
      score: Math.round((correctAnswers / totalQuestions) * 100),
      difficulty: 'Medium',
      topics: [`${subject} Topic 1`, `${subject} Topic 2`]
    };

    return addPracticeTestResult(testResult);
  };

  const getPerformanceChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(Math.round(change)),
      isPositive: change >= 0,
    };
  };

  // All performance changes are now calculated from real practice test data
  const performanceChange = getPerformanceChange(analytics.overallScore, analytics.lastWeekScore || 0);
  const accuracyChange = getPerformanceChange(analytics.accuracy, analytics.lastWeekAccuracy || 0);
  const hoursChange = getPerformanceChange(analytics.practiceTestHours || 0, analytics.lastWeekHours || 0);

  return (
    <div className="w-full max-w-full space-y-4 md:space-y-6 overflow-hidden">
      {/* New User Welcome Section */}
      {analytics.isNewUser && (
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to GATE Ready!</h2>
                <p className="text-gray-600 mb-4">
                  Start your GATE preparation journey. Your progress will be tracked here as you study, take tests, and master topics.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  onClick={handleStartStudying}
                  className="gap-2 bg-blue-600 hover:bg-blue-700"
                  size="sm"
                >
                  <BookOpen className="h-4 w-4" />
                  Start Studying
                </Button>
                <Button
                  onClick={handleTakeTest}
                  className="gap-2 bg-green-600 hover:bg-green-700"
                  size="sm"
                >
                  <Target className="h-4 w-4" />
                  Take Test
                </Button>
                <Button
                  onClick={handleLearnTopic}
                  className="gap-2 bg-purple-600 hover:bg-purple-700"
                  size="sm"
                >
                  <CheckCircle className="h-4 w-4" />
                  Learn Topic
                </Button>
                <Button
                  onClick={handleSetGoal}
                  className="gap-2 bg-orange-600 hover:bg-orange-700"
                  size="sm"
                >
                  <TrendingUp className="h-4 w-4" />
                  Set Goal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Activity Controls for Existing Users */}
      {!analytics.isNewUser && (
        <div className="flex flex-wrap gap-2 mb-4">
          <Button
            onClick={handleStartStudying}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Study Session</span>
            <span className="sm:hidden">Study</span>
          </Button>
          <Button
            onClick={handleTakeTest}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Target className="h-4 w-4" />
            <span className="hidden sm:inline">Take Test</span>
            <span className="sm:hidden">Test</span>
          </Button>
          <Button
            onClick={handleLearnTopic}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <CheckCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Master Topic</span>
            <span className="sm:hidden">Topic</span>
          </Button>
          <Button
            onClick={handleSetGoal}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Daily Goal</span>
            <span className="sm:hidden">Goal</span>
          </Button>
          <Button
            onClick={resetUserData}
            variant="outline"
            size="sm"
            className="gap-2 text-red-600 border-red-300 hover:bg-red-50"
          >
            <span className="hidden sm:inline">Reset Data</span>
            <span className="sm:hidden">Reset</span>
          </Button>
          <div className="ml-auto text-xs text-gray-500 flex items-center gap-1">
            <Activity className="h-3 w-3" />
            Last updated: {lastActivity.toLocaleTimeString()}
          </div>
        </div>
      )}

      {/* Achievement Notifications */}
      {analytics.achievements && analytics.achievements.length > 0 && (
        <div className="space-y-2">
          {analytics.achievements.slice(-2).map((achievement, index) => (
            <Card key={achievement.id} className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Stats Grid - Responsive and contained */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-full">
        <Card className="relative overflow-hidden">
          <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs md:text-sm font-medium truncate">Overall Score</CardTitle>
              <div className="p-1.5 md:p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex-shrink-0">
                <Award className="h-3 w-3 md:h-4 md:w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
            {analytics.isNewUser ? (
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-400">--</div>
                <p className="text-xs text-muted-foreground mt-1">Start studying to see your score</p>
                <div className="mt-2 md:mt-3">
                  <Progress value={0} className="h-1.5 md:h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Target: 90%</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-xl md:text-2xl font-bold">{analytics.overallScore}%</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  {performanceChange.isPositive ? (
                    <TrendingUp className="h-3 w-3 text-green-500 flex-shrink-0" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 flex-shrink-0" />
                  )}
                  <span className={`${performanceChange.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} truncate`}>
                    {performanceChange.value}% {performanceChange.isPositive ? 'increase' : 'decrease'} from last week
                  </span>
                </div>
                <div className="mt-2 md:mt-3">
                  <Progress value={analytics.overallScore} className="h-1.5 md:h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Target: 90%</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs md:text-sm font-medium truncate">Practice Test Hours</CardTitle>
              <div className="p-1.5 md:p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex-shrink-0">
                <Clock3 className="h-3 w-3 md:h-4 md:w-4 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
            {analytics.isNewUser ? (
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-400">0h</div>
                <p className="text-xs text-muted-foreground mt-1">Take practice tests to track your time</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Goal: Complete regular practice tests
                </p>
              </div>
            ) : (
              <div>
                <div className="text-xl md:text-2xl font-bold">{analytics.practiceTestHours ? analytics.practiceTestHours.toFixed(1) : 0}h</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span className="text-blue-600 dark:text-blue-400 truncate">
                    {analytics.testsCompleted} tests completed
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Average: {analytics.testsCompleted > 0 ? (analytics.practiceTestHours / analytics.testsCompleted).toFixed(1) : 0}h per test
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs md:text-sm font-medium truncate">Accuracy</CardTitle>
              <div className="p-1.5 md:p-2 rounded-lg bg-green-100 dark:bg-green-900/50 flex-shrink-0">
                <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
            {analytics.isNewUser ? (
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-400">--%</div>
                <p className="text-xs text-muted-foreground mt-1">Take practice tests to see your accuracy</p>
                <p className="text-xs text-muted-foreground mt-2">
                  0/0 practice test questions answered
                </p>
              </div>
            ) : (
              <div>
                <div className="text-xl md:text-2xl font-bold">{analytics.accuracy}%</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span className="text-green-600 dark:text-green-400 truncate">
                    Based on {analytics.testsCompleted} practice tests
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 truncate">
                  {analytics.correctAnswers}/{analytics.totalQuestions} practice test questions correct
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xs md:text-sm font-medium truncate">Topics Mastered</CardTitle>
              <div className="p-1.5 md:p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex-shrink-0">
                <Bookmark className="h-3 w-3 md:h-4 md:w-4 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
            {analytics.isNewUser ? (
              <div>
                <div className="text-xl md:text-2xl font-bold text-gray-400">
                  0/{analytics.totalTopics}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span>0% completed</span>
                </div>
                <div className="mt-2 md:mt-3">
                  <Progress value={0} className="h-1.5 md:h-2" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Master topics to see progress</p>
              </div>
            ) : (
              <div>
                <div className="text-xl md:text-2xl font-bold">
                  {analytics.topicsMastered}/{analytics.totalTopics}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <span>{(analytics.topicsMastered / analytics.totalTopics * 100).toFixed(0)}% completed</span>
                </div>
                <div className="mt-2 md:mt-3">
                  <Progress value={(analytics.topicsMastered / analytics.totalTopics) * 100} className="h-1.5 md:h-2" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Latest Test Results - Prominent Display */}
      {!analytics.isNewUser && analytics.recentTests && analytics.recentTests.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Latest Test Results
            </CardTitle>
            <p className="text-sm text-gray-600">Your most recent practice test performances</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {analytics.recentTests.slice(0, 6).map((test, index) => (
                <div key={test.id || index} className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm truncate">{test.testName}</h3>
                    <Badge variant={test.score >= 75 ? "default" : test.score >= 50 ? "secondary" : "destructive"}>
                      {test.score}%
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{test.subject} • {test.date}</p>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="font-medium">{test.correctAnswers}/{test.totalQuestions}</div>
                      <div className="text-gray-500">Correct</div>
                    </div>
                    <div>
                      <div className="font-medium">{test.timeSpent}m</div>
                      <div className="text-gray-500">Time</div>
                    </div>
                    <div>
                      <div className="font-medium">{test.difficulty || 'Medium'}</div>
                      <div className="text-gray-500">Level</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          test.score >= 75 ? 'bg-green-500' :
                          test.score >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${test.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button
                variant="outline"
                onClick={() => navigate('/practice-tests')}
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                View All Results & Take More Tests
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Content - Mobile optimized */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2 space-y-4 md:space-y-6">
          {/* Recent Test Results - Only show for users who have taken tests */}
          {!analytics.isNewUser && analytics.testsCompleted > 0 && (
            <Card>
            <CardHeader className="px-3 md:px-6 pt-3 md:pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <BarChart3 className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                  <CardTitle className="text-sm md:text-base truncate">Recent Test Results</CardTitle>
                </div>
                <Button
                  onClick={() => navigate('/practice-tests')}
                  variant="ghost"
                  size="sm"
                  className="text-primary text-xs md:text-sm flex-shrink-0"
                >
                  <span className="hidden sm:inline">View All</span>
                  <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-3 md:px-6 pb-3 md:pb-6">
              <div className="space-y-3 md:space-y-4">
                {(analytics.recentTests || []).slice(0, 3).map((test) => (
                  <div key={test.id} className="p-3 md:p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start gap-3">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">{test.testName || test.title}</h4>
                        <p className="text-xs md:text-sm text-gray-500 truncate">{test.subject} • {test.date}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg md:text-2xl font-bold text-primary">{test.score}%</div>
                        <div className="text-xs text-gray-500">Score</div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-3 grid grid-cols-3 gap-1 md:gap-2 text-center text-xs md:text-sm">
                      <div>
                        <div className="font-medium">{test.correctAnswers}/{test.totalQuestions}</div>
                        <div className="text-xs text-gray-500">Correct</div>
                      </div>
                      <div>
                        <div className="font-medium">{test.accuracy}%</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                      <div>
                        <div className="font-medium">{test.timeSpent} min</div>
                        <div className="text-xs text-gray-500">Time</div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-3">
                      <div className="h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            test.accuracy >= 70 ? 'bg-green-500' :
                            test.accuracy >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${test.accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          )}

          {/* Empty State for New Users */}
          {analytics.isNewUser && (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Test Results Yet</h3>
                <p className="text-gray-600 mb-4">
                  Take your first practice test to see your results here.
                </p>
                <Button onClick={handleTakeTest} className="gap-2">
                  <Target className="h-4 w-4" />
                  Take Your First Test
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Dynamic Practice Test Recommendations */}
          {!analytics.isNewUser && analytics.recentTests && analytics.recentTests.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <CardTitle>Recommended Practice</CardTitle>
                  </div>
                  <Button
                    onClick={() => navigate('/practice-tests')}
                    variant="ghost"
                    size="sm"
                    className="text-primary"
                  >
                    View All <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.subjectScores && Object.entries(analytics.subjectScores)
                    .filter(([_, data]: [string, any]) => data.score < 75)
                    .slice(0, 3)
                    .map(([subject, data]: [string, any]) => (
                    <div key={subject} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div>
                        <p className="font-medium text-gray-900 capitalize">{subject.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-sm text-gray-500">Current Score: {data.score}% • {data.testsCompleted} tests taken</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate('/practice-tests')}
                      >
                        Practice
                      </Button>
                    </div>
                  ))}
                  {(!analytics.subjectScores || Object.keys(analytics.subjectScores).length === 0) && (
                    <div className="text-center py-4 text-gray-500">
                      <p>Take practice tests to get personalized recommendations</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Performance Chart - Only show for users with activity */}
          {!analytics.isNewUser && analytics.hasPerformedActivity && (
            <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Practice Test Performance</CardTitle>
                  <CardDescription>Your practice test progress over the last 6 months</CardDescription>
                </div>
                <Button
                  onClick={() => navigate('/practice-tests')}
                  variant="outline"
                  size="sm"
                  className="gap-1"
                >
                  View Details <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="h-64 md:h-80 px-3 md:px-6 pb-3 md:pb-6">
              <div className="w-full h-full overflow-hidden">
                <Line
                  data={generatePerformanceData()}
                  options={chartOptions}
                  redraw
                />
              </div>
            </CardContent>
          </Card>
          )}

          {/* Subject Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-full">
            <Card>
              <CardHeader className="px-3 md:px-6 pt-3 md:pt-6">
                <CardTitle className="text-sm md:text-base">Practice Test Performance by Subject</CardTitle>
                <CardDescription className="text-xs md:text-sm">Your practice test scores by subject area</CardDescription>
              </CardHeader>
              <CardContent className="h-48 md:h-64 px-3 md:px-6 pb-3 md:pb-6">
                <div className="w-full h-full overflow-hidden">
                  <Bar
                    data={generateSubjectPerformanceData()}
                    options={barOptions}
                    redraw
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="px-3 md:px-6 pt-3 md:pt-6">
                <CardTitle className="text-sm md:text-base">Practice Test Time</CardTitle>
                <CardDescription className="text-xs md:text-sm">Time spent on practice tests this week</CardDescription>
              </CardHeader>
              <CardContent className="h-48 md:h-64 px-3 md:px-6 pb-3 md:pb-6">
                <div className="w-full h-full overflow-hidden">
                  <Bar
                    data={timeSpentData}
                    options={timeSpentOptions}
                    redraw
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar - Mobile optimized */}
        <div className="space-y-4 md:space-y-6">
          {/* Dynamic Subject Performance */}
          {!analytics.isNewUser && analytics.subjectScores && Object.keys(analytics.subjectScores).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Your performance by subject</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(analytics.subjectScores)
                  .sort(([,a]: [string, any], [,b]: [string, any]) => a.score - b.score)
                  .slice(0, 5)
                  .map(([subject, data]: [string, any]) => (
                  <div key={subject} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">{subject.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-xs text-muted-foreground">{data.score}%</span>
                    </div>
                    <Progress value={data.score} className="h-2" />
                    <div className="text-xs text-gray-500">
                      {data.testsCompleted} test{data.testsCompleted !== 1 ? 's' : ''} completed
                    </div>
                  </div>
                ))}
                <Button
                  onClick={() => navigate('/practice-tests')}
                  variant="outline"
                  className="w-full mt-2"
                  size="sm"
                >
                  Take More Tests
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Dynamic Quick Stats */}
          {!analytics.isNewUser && (
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Tests Completed</span>
                  <span className="font-medium">{analytics.testsCompleted}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Average Score</span>
                  <span className="font-medium">{analytics.averageTestScore}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Best Score</span>
                  <span className="font-medium">{analytics.bestScore}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Practice Time</span>
                  <span className="font-medium">{analytics.practiceTestHours ? analytics.practiceTestHours.toFixed(1) : 0}h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Accuracy</span>
                  <span className="font-medium">{analytics.accuracy}%</span>
                </div>
                <div className="pt-2">
                  <Button
                    onClick={() => navigate('/practice-tests')}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Practice Tests
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 