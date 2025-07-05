import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth, useUser, SignOutButton } from '@clerk/clerk-react';

type NavItemProps = {
  item: {
    text: string;
    icon: React.ReactNode;
    path: string;
    external: boolean;
  };
  pathname: string;
  onClick: () => void;
};

const NavItem = ({ item, pathname, onClick }: NavItemProps) => {
  const isActive = pathname === item.path;
  
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors
        ${isActive 
          ? 'bg-blue-50 text-blue-700 font-medium' 
          : 'text-gray-700 hover:bg-gray-50'
        }
      `}
    >
      <span className={`flex-shrink-0 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
        {item.icon}
      </span>
      <span className="truncate">{item.text}</span>
    </button>
  );
};

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
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
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

  // Handle navigation with auth check and external URLs
  const handleNavigation = useCallback((path: string, isExternal = false) => {
    if (!isLoaded) return;
    
    // Handle external URLs
    if (path.startsWith('http') || path.startsWith('https') || path.startsWith('www.')) {
      window.open(path, '_blank', 'noopener,noreferrer');
      return;
    }
    
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
      text: 'Explore Colleges',
      icon: <GraduationCap className="h-5 w-5" />,
      path: 'https://gate-ready-with-ai-colleges.netlify.app/',
      external: true
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
      {/* Mobile Navigation Bar */}
      <div className="md:hidden bg-white border-b sticky top-0 z-50 shadow-sm">
        {/* Top Bar with Menu Button */}
        <div className="flex items-center justify-between h-14 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <span className="text-sm font-bold">G</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">GATE Ready</h1>
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

        {/* Quick Access Bar - Always Visible */}
        <div className="flex items-stretch justify-between bg-white border-b shadow-sm">
          {/* Dashboard */}
          <button
            onClick={() => handleNavigation('/dashboard')}
            className={`flex-1 flex flex-col items-center py-2 text-xs transition-colors ${
              location.pathname === '/dashboard' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <BookOpen className="h-5 w-5 mb-1" />
            <span>Home</span>
          </button>

          {/* Tests */}
          <button
            onClick={() => handleNavigation('/practice-tests')}
            className={`flex-1 flex flex-col items-center py-2 text-xs transition-colors ${
              location.pathname === '/practice-tests' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Zap className="h-5 w-5 mb-1" />
            <span>Tests</span>
          </button>

          {/* Colleges - Direct External Link */}
          <a
            href="https://gate-ready-with-ai-colleges.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center py-2 text-xs transition-colors text-gray-600 hover:text-blue-600"
          >
            <GraduationCap className="h-5 w-5 mb-1" />
            <span>Colleges</span>
          </a>

          {/* AI Tutor */}
          <button
            onClick={() => handleNavigation('/ai-tutor')}
            className={`flex-1 flex flex-col items-center py-2 text-xs transition-colors ${
              location.pathname === '/ai-tutor' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Bot className="h-5 w-5 mb-1" />
            <span>AI Tutor</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileOpen && (
          <div className="bg-white shadow-lg border-t max-h-[calc(100vh-120px)] overflow-y-auto">
            {/* User Profile Section */}
            {isSignedIn && (
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {user?.firstName || user?.fullName || user?.username || 'User'}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {user?.emailAddresses?.[0]?.emailAddress || user?.primaryEmailAddress?.emailAddress}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Navigation Sections */}
            <div className="p-2">
              {/* Study Section */}
              <div className="mb-4">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Study</h3>
                <div className="space-y-1">
                  {menuItems
                    .filter(item => 
                      ['/courses', '/tutorials', '/notes', '/flashcards', '/pomodoro-revision', '/spaced-repetition']
                      .includes(item.path)
                    )
                    .map((item) => (
                      <NavItem 
                        key={item.path}
                        item={item} 
                        pathname={pathname} 
                        onClick={() => {
                          handleNavigation(item.path, item.external);
                          setIsMobileOpen(false);
                        }}
                      />
                    ))}
                </div>
              </div>

              {/* Tests Section */}
              <div className="mb-4">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tests</h3>
                <div className="space-y-1">
                  {menuItems
                    .filter(item => 
                      ['/practice-tests', '/mock-tests', '/performance'].includes(item.path)
                    )
                    .map((item) => (
                      <NavItem 
                        key={item.path}
                        item={item} 
                        pathname={pathname} 
                        onClick={() => {
                          handleNavigation(item.path, item.external);
                          setIsMobileOpen(false);
                        }}
                      />
                    ))}
                </div>
              </div>

              {/* College Section */}
              <div className="mb-4">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Colleges</h3>
                <div className="space-y-1">
                  {menuItems
                    .filter(item => 
                      ['/college-predictor', 'https://gate-ready-with-ai-colleges.netlify.app/', '/college-map', '/college-transport']
                      .includes(item.path)
                    )
                    .map((item) => (
                      <NavItem 
                        key={item.path}
                        item={item} 
                        pathname={pathname} 
                        onClick={() => {
                          handleNavigation(item.path, item.external);
                          setIsMobileOpen(false);
                        }}
                      />
                    ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className="mb-4">
                <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Tools</h3>
                <div className="space-y-1">
                  {menuItems
                    .filter(item => 
                      ['/ai-tutor', '/generate-schedule', '/priority-scheduler', '/todo'].includes(item.path)
                    )
                    .map((item) => (
                      <NavItem 
                        key={item.path}
                        item={item} 
                        pathname={pathname} 
                        onClick={() => {
                          handleNavigation(item.path, item.external);
                          setIsMobileOpen(false);
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Sign Out */}
            <div className="p-4 border-t sticky bottom-0 bg-white">
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
 
 