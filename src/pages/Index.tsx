import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignInButton, SignUpButton, useAuth } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  BrainCircuit, 
  Users, 
  BarChart2, 
  Target, 
  Clock, 
  Sparkles, 
  MessageSquare, 
  BookMarked, 
  Trophy, 
  BookText, 
  GraduationCap, 
  Lightbulb, 
  CheckCircle, 
  BarChart, 
  Award,
  BookOpenCheck,
  Code2,
  Cpu,
  Cog,
  Building2,
  Zap,
  FlaskConical,
  Gauge,
  Plane,
  Dna,
  Factory,
  MountainSnow,
  Hammer,
  Twitter,
  Github,
  MessageCircle
} from "lucide-react";

// Import JSX type from React
import type { JSX } from 'react';

// Declare JSX elements for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
      a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    }
  }
}

// NavLink component for navigation links
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a 
    href={href} 
    className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors"
    onClick={(e) => {
      e.preventDefault();
      // Handle navigation here if using client-side routing
      window.location.href = href;
    }}
  >
    {children}
  </a>
);

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Follow expert-curated learning paths tailored to your branch and exam goals.",
    color: "bg-blue-500"
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Practice",
    description: "Get personalized question recommendations based on your performance.",
    color: "bg-purple-500"
  },
  {
    icon: BarChart2,
    title: "Performance Analytics",
    description: "Track your progress with detailed analytics and performance reports.",
    color: "bg-green-500"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with peers and mentors in our active learning community.",
    color: "bg-amber-500"
  },
  {
    icon: Clock,
    title: "Exam Simulation",
    description: "Practice with full-length mock tests that simulate the actual GATE exam.",
    color: "bg-rose-500"
  },
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Learn from top educators and GATE toppers with years of teaching experience.",
    color: "bg-indigo-500"
  },
  {
    icon: BarChart2,
    title: "Performance Tracking",
    description: "Monitor your improvement with detailed progress reports and analytics.",
    color: "bg-emerald-500"
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Our AI adapts to your learning style and pace for maximum efficiency.",
    color: "bg-cyan-500"
  }
];

const Index: React.FC = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Tutor",
      description: "Get instant explanations for any GATE topic with our GPT-level AI assistant",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Complete Study Materials",
      description: "Access comprehensive notes and textbooks for all GATE branches and subjects",
      color: "bg-green-500"
    },
    {
      icon: Target,
      title: "Adaptive Mock Tests",
      description: "AI-powered practice tests that adapt to your learning pattern and weak areas",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Smart Study Planner",
      description: "Personalized study schedules based on your progress and target exam date",
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Join study groups, discuss with peers, and learn from top performers",
      color: "bg-pink-500"
    },
    {
      icon: Sparkles,
      title: "Rapid Learning System",
      description: "Master concepts 3x faster with our scientifically-proven learning methods",
      color: "bg-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "All GATE Branches",
      description: "Complete coverage for CS, EC, ME, CE, EE, CH, PI, and all other branches",
      color: "bg-indigo-500"
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Detailed insights into your progress with personalized improvement suggestions",
      color: "bg-red-500"
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a 
      href={href} 
      className="block px-4 py-3 text-base text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-x-hidden">
      {/* Mobile Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-slate-200 fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="relative px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-base font-bold text-slate-900 whitespace-nowrap">GATE Revolution</span>
            </div>
            <div className="flex items-center">
              <button 
                onClick={toggleMenu}
                className="menu-button p-2 -mr-1 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu bg-white border-t border-slate-200 px-4 py-3 fixed left-0 right-0 z-50 shadow-lg transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full hidden'
          }`}
          style={{
            top: '4rem',
            maxHeight: 'calc(100vh - 4rem)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="space-y-2 pb-4">
            <details className="group">
              <summary className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer select-none">
                <span className="text-base font-medium">Study</span>
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform text-slate-500" />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="/courses" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors">Courses</a>
                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors">Study Materials</a>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex justify-between items-center px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg cursor-pointer select-none">
                <span className="text-base font-medium">Community</span>
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform text-slate-500" />
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors">Forums</a>
                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors">Study Groups</a>
                <a href="#" className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-md transition-colors">Success Stories</a>
              </div>
            </details>

            <div className="pt-4 border-t border-slate-100 mt-2">
              <div className="space-y-3 px-2">
                <SignInButton>
                  <Button variant="outline" className="w-full h-11 text-base font-medium">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="w-full h-11 bg-black hover:bg-gray-800 text-white text-base font-medium">
                    Start Learning
                  </Button>
                </SignUpButton>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">GATE Revolution</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="group relative">
                <button className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1 py-2">
                  Study
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="py-2">
                    <a href="/courses" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">Courses</a>
                    <a href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900">Study Materials</a>
                  </div>
                </div>
              </div>
              
              {/* Other desktop menu items */}
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2">Community</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2">Resources</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2">Colleges</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200 py-2">Legal</a>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <SignInButton>
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="bg-black hover:bg-gray-800 text-white">Start Learning</Button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced for Mobile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="text-center px-3 sm:px-4 pt-2 sm:pt-0">
          <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm md:text-base px-3 py-1.5 sm:py-1">
            🚀 The Future of GATE Preparation
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Crack GATE with{' '}
            <span className="text-blue-600">AI Revolution</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            The world's most advanced GATE preparation platform powered by cutting-edge AI. 
            Learn faster, practice smarter, and achieve your dream rank with personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0 max-w-md mx-auto sm:max-w-none">
            <div className="w-full sm:w-auto">
              <SignUpButton>
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg md:text-lg py-4 sm:py-5 md:py-6 px-6 font-medium transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Start Free Learning Journey
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Button>
              </SignUpButton>
            </div>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-lg font-medium border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Explore AI Features
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced for Mobile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            Revolutionary Learning Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to excel in GATE, powered by advanced AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-full"
            >
              <Card 
                className="group hover:shadow-xl transition-all duration-300 border border-slate-200 bg-white/90 backdrop-blur-sm hover:-translate-y-1 h-full flex flex-col"
              >
                <CardHeader className="p-5 sm:p-6 md:p-7 flex-grow">
                  <div 
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                  >
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-2 sm:mb-3 leading-tight">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section - Enhanced for Mobile */}
      <section className="bg-blue-600 py-14 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-4 sm:p-5 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">100K+</div>
              <div className="text-blue-100 text-sm sm:text-base font-medium">Students Learning</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-4 sm:p-5 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100 text-sm sm:text-base font-medium">Questions Solved Daily</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="p-4 sm:p-5 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100 text-sm sm:text-base font-medium">Success Rate</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="p-4 sm:p-5 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100 text-sm sm:text-base font-medium">AI Assistance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Branches Section - Enhanced for Mobile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Complete Coverage for All GATE Branches
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mt-3">
            Comprehensive preparation materials for every GATE discipline
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {[
            { name: "Computer Science", icon: <Code2 className="h-5 w-5 text-blue-600" /> },
            { name: "Electronics", icon: <Cpu className="h-5 w-5 text-purple-600" /> },
            { name: "Mechanical", icon: <Cog className="h-5 w-5 text-amber-600" /> },
            { name: "Civil", icon: <Building2 className="h-5 w-5 text-emerald-600" /> },
            { name: "Electrical", icon: <Zap className="h-5 w-5 text-yellow-600" /> },
            { name: "Chemical", icon: <FlaskConical className="h-5 w-5 text-rose-600" /> },
            { name: "Instrumentation", icon: <Gauge className="h-5 w-5 text-indigo-600" /> },
            { name: "Aerospace", icon: <Plane className="h-5 w-5 text-sky-600" /> },
            { name: "Biotechnology", icon: <Dna className="h-5 w-5 text-pink-600" /> },
            { name: "Production", icon: <Factory className="h-5 w-5 text-orange-600" /> },
            { name: "Mining", icon: <MountainSnow className="h-5 w-5 text-gray-600" /> },
            { name: "Metallurgy", icon: <Hammer className="h-5 w-5 text-red-600" /> },
          ].map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full text-center p-4 sm:p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200">
                <CardContent className="p-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    {branch.icon}
                  </div>
                  <div className="font-medium text-sm sm:text-base text-slate-800">
                    {branch.name}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Enhanced for Mobile */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-14 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 leading-tight">
              Ready to transform your GATE preparation?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who are already acing their GATE exam with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-lg mx-auto">
              <div className="w-full sm:w-auto">
                <SignUpButton>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-blue-700 hover:bg-blue-50 text-base sm:text-lg font-medium py-4 sm:py-5 px-6 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Get Started for Free
                  </Button>
                </SignUpButton>
              </div>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 text-white hover:text-white text-base sm:text-lg font-medium py-4 sm:py-5 px-6 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
