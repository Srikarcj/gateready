import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, SignOutButton } from '@clerk/clerk-react';
import {
  BookOpen,
  Brain,
  Target,
  Clock,
  TrendingUp,
  Activity,
  Menu,
  X,
  Zap,
  FileText,
  MessageSquare,
  GraduationCap,
  LogOut,
  User,
  Award,
  BarChart3,
  Bot,
  Timer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const { isLoaded, isSignedIn, user } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  // Get page-specific headers for mobile sidebar
  const getPageHeaders = () => {
    switch (pathname) {
      case '/dashboard':
        return {
          title: 'Dashboard',
          subtitle: 'Welcome back! Here\'s your study overview.',
          icon: <BookOpen className="h-5 w-5 text-blue-600" />
        };
      case '/courses':
        return {
          title: 'MTech Programs',
          subtitle: 'Explore our comprehensive MTech programs across various engineering disciplines',
          icon: <Target className="h-5 w-5 text-green-600" />
        };
      case '/practice-tests':
        return {
          title: 'Practice Tests',
          subtitle: 'Test your knowledge with our comprehensive practice tests',
          icon: <Zap className="h-5 w-5 text-yellow-600" />
        };
      case '/study-materials':
        return {
          title: 'Study Materials',
          subtitle: 'Access comprehensive study materials for GATE preparation',
          icon: <FileText className="h-5 w-5 text-purple-600" />
        };
      case '/ai-tutor':
        return {
          title: 'AI Tutor',
          subtitle: 'Get personalized help from our AI-powered tutor',
          icon: <Brain className="h-5 w-5 text-pink-600" />
        };
      default:
        return {
          title: 'Dashboard',
          subtitle: 'Welcome back! Here\'s your study overview.',
          icon: <BookOpen className="h-5 w-5 text-blue-600" />
        };
    }
  };

  // Handle navigation with auth check
  const handleNavigation = useCallback((path: string, isExternal = false) => {
    if (!isLoaded) return;
    
    if (!isSignedIn) {
      // Store the intended path for after login
      sessionStorage.setItem('redirectAfterLogin', path);
      // Show auth modal or redirect to login
      navigate('/sign-in');
      return;
    }
    
    if (isExternal) {
      // For external URLs, open in new tab
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      // For internal routes, use react-router navigation
      navigate(path);
    }
  }, [isLoaded, isSignedIn, navigate]);

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <BookOpen className="h-5 w-5" />,
      path: '/dashboard',
      external: false
    },
    {
      text: 'Courses',
      icon: <Target className="h-5 w-5" />,
      path: '/courses',
      external: false
    },
    {
      text: 'Practice Tests',
      icon: <Zap className="h-5 w-5" />,
      path: '/practice-tests',
      external: false
    },
    {
      text: 'Study Materials',
      icon: <FileText className="h-5 w-5" />,
      path: '/study-materials',
      external: false
    },
    {
      text: 'Mock Tests',
      icon: <Award className="h-5 w-5" />,
      path: '/mock-tests',
      external: false
    },
    {
      text: 'Tutorials',
      icon: <GraduationCap className="h-5 w-5" />,
      path: '/tutorials',
      external: false
    },
    {
      text: 'Generate Schedule',
      icon: <Clock className="h-5 w-5" />,
      path: '/generate-schedule',
      external: false
    },
    {
      text: 'College Predictor',
      icon: <GraduationCap className="h-5 w-5" />,
      path: '/college-predictor',
      external: false
    },
    {
      text: 'College Map',
      icon: <Activity className="h-5 w-5" />,
      path: '/college-map',
      external: false
    },
    {
      text: 'GATE Rank Predictor',
      icon: <TrendingUp className="h-5 w-5" />,
      path: '/gate-rank-predictor',
      external: false
    },

    {
      text: 'College Transport',
      icon: <Activity className="h-5 w-5" />,
      path: '/college-transport',
      external: false
    },
    {
      text: 'Todo List',
      icon: <Activity className="h-5 w-5" />,
      path: '/todo',
      external: false
    },
    {
      text: 'Priority Scheduler',
      icon: <Clock className="h-5 w-5" />,
      path: '/priority-scheduler',
      external: false
    },
    {
      text: 'Doubts',
      icon: <MessageSquare className="h-5 w-5" />,
      path: '/doubts',
      external: false
    },
    {
      text: 'Notes',
      icon: <FileText className="h-5 w-5" />,
      path: '/notes',
      external: false
    },
    {
      text: 'Flashcards',
      icon: <FileText className="h-5 w-5" />,
      path: '/flashcards',
      external: false
    },
    {
      text: 'Performance',
      icon: <BarChart3 className="h-5 w-5" />,
      path: '/performance',
      external: false
    },
    {
      text: 'AI Tutor',
      icon: <Bot className="h-5 w-5" />,
      path: '/ai-tutor',
      external: false
    },
    {
      text: 'Pomodoro Revision',
      icon: <Timer className="h-5 w-5" />,
      path: '/pomodoro-revision',
      external: false
    },
    {
      text: 'Spaced Repetition',
      icon: <Brain className="h-5 w-5" />,
      path: '/spaced-repetition',
      external: false
    }
  ];

  return (
    <>
      {/* Mobile Sidebar - Simple & Smooth */}
      <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-sm font-bold">G</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">GATE Ready</h1>
              <p className="text-xs opacity-90">AI-Powered Study Assistant</p>
            </div>
          </div>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Simple Mobile Dropdown */}
        {isMobileOpen && (
          <div className="bg-white shadow-lg border-t">
            {/* Simple Page Headers */}
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex items-center gap-2 mb-2">
                {getPageHeaders().icon}
                <h2 className="text-lg font-semibold text-gray-900">{getPageHeaders().title}</h2>
              </div>
              <p className="text-sm text-gray-600">{getPageHeaders().subtitle}</p>
            </div>

            {/* Simple Stats Cards */}
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 text-center bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-gray-600">AI Support</div>
                </div>
                <div className="p-2 text-center bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-green-600">100+</div>
                  <div className="text-xs text-gray-600">Colleges</div>
                </div>
                <div className="p-2 text-center bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-purple-600">1000+</div>
                  <div className="text-xs text-gray-600">Resources</div>
                </div>
              </div>
            </div>

            {/* Simple User Profile */}
            {isSignedIn && (
              <div className="p-4 bg-gray-50 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">
                      {user?.firstName || user?.fullName || user?.username || 'User'}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {user?.emailAddresses?.[0]?.emailAddress || user?.primaryEmailAddress?.emailAddress}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Simple Navigation */}
            <div className="max-h-64 overflow-y-auto p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Navigation</h3>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      handleNavigation(item.path, item.external);
                      setIsMobileOpen(false);
                    }}
                    className={`
                      w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors
                      ${pathname === item.path
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                      }
                    `}
                  >
                    <span className="flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="truncate">{item.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Sign Out */}
            <div className="p-4 border-t">
              <SignOutButton>
                <Button
                  variant="outline"
                  className="w-full justify-center text-red-600 hover:text-white hover:bg-red-600 border-red-300"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </SignOutButton>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar - Exact design match */}
      <div className="hidden md:block w-64 bg-white border-r h-full">
        {/* Breadcrumb Section */}
        <div className="px-4 py-3 border-b bg-gray-50">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-medium">G</span>
            <span>GATE Ready</span>
          </div>
        </div>

        <div className="p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path, item.external)}
                className={`
                  w-full text-left flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors
                  ${pathname === item.path
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>


    </>
  );
};

export default Sidebar; 
 
 