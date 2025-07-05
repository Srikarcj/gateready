import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, BookOpen, Clock, ChevronRight, Search, Filter, Star, Bookmark, Share2, ThumbsUp, MessageCircle, X, History, TrendingUp, Tag, User, ChevronDown, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Tutorial {
  id: number;
  title: string;
  type: 'video' | 'article' | 'course' | 'workshop';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  thumbnail: string;
  description: string;
  author: string;
  link: string;
  tags: string[];
  featured?: boolean;
  likes?: number;
  comments?: number;
  bookmarked?: boolean;
  rating?: number;
  prerequisites?: string[];
  lastUpdated?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  category: 'Core' | 'Specialized' | 'Research' | 'Practice' | 'Interview Prep' | 'Project Based' | 'Theory' | 'Application';
  subcategory?: 'Fundamentals' | 'Advanced Concepts' | 'Problem Solving' | 'Implementation' | 'Design Patterns' | 'System Design' | 'Performance' | 'Security';
  format?: 'Video Series' | 'Single Video' | 'Article Series' | 'Single Article' | 'Course' | 'Workshop' | 'Live Session';
  language?: 'English' | 'Hindi' | 'Bilingual';
  targetAudience?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  estimatedTime?: string;
  completionRate?: number;
  enrolledStudents?: number;
  certification?: boolean;
  practiceProblems?: number;
  assignments?: number;
  projects?: number;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Advanced Problem Solving Techniques",
    type: "video",
    duration: "2:15:00",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Master advanced problem-solving strategies and techniques for GATE examination",
    author: "Dr. Rajesh Kumar",
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    tags: ["Problem Solving", "Strategy", "Advanced"],
    featured: true,
    category: "Practice"
  },
  {
    id: 2,
    title: "Data Structures and Algorithms Masterclass",
    type: "course",
    duration: "12 weeks",
    level: "Advanced",
    progress: 75,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive course covering advanced DSA concepts and their applications",
    author: "Prof. Sunita Sharma",
    link: "https://www.coursera.org/learn/algorithms-part1",
    tags: ["DSA", "Algorithms", "Advanced"],
    featured: true,
    category: "Core"
  },
  {
    id: 3,
    title: "Computer Architecture Deep Dive",
    type: "video",
    duration: "3:45:00",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "In-depth analysis of computer architecture concepts and modern processor design",
    author: "Dr. Amit Patel",
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    tags: ["Architecture", "Hardware", "Advanced"],
    category: "Core"
  },
  {
    id: 4,
    title: "Operating Systems Internals",
    type: "article",
    duration: "45 min read",
    level: "Advanced",
    progress: 100,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Detailed exploration of operating system internals and kernel concepts",
    author: "Dr. Priya Singh",
    link: "https://www.geeksforgeeks.org/operating-systems/",
    tags: ["OS", "Kernel", "Advanced"],
    category: "Core"
  },
  {
    id: 5,
    title: "Database Systems Optimization",
    type: "course",
    duration: "8 weeks",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced database concepts, optimization techniques, and distributed systems",
    author: "Prof. Ravi Verma",
    link: "https://www.coursera.org/learn/database-management",
    tags: ["Databases", "Optimization", "Advanced"],
    featured: true,
    category: "Core"
  },
  {
    id: 6,
    title: "Computer Networks Security",
    type: "video",
    duration: "2:30:00",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced network security concepts and implementation strategies",
    author: "Dr. Neha Gupta",
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    tags: ["Networks", "Security", "Advanced"],
    category: "Core"
  },
  {
    id: 7,
    title: "Advanced Algorithm Design Patterns",
    type: "workshop",
    duration: "4 weeks",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Master advanced algorithm design patterns and optimization techniques",
    author: "Dr. Vikram Singh",
    link: "https://www.coursera.org/learn/algorithm-design",
    tags: ["Algorithms", "Design Patterns", "Optimization"],
    category: "Core",
    difficulty: "Hard",
    prerequisites: ["Data Structures", "Basic Algorithms"],
    lastUpdated: "2024-03-15",
    rating: 4.8,
    likes: 245,
    comments: 56
  },
  {
    id: 8,
    title: "Machine Learning for GATE",
    type: "course",
    duration: "10 weeks",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive course on machine learning concepts and applications",
    author: "Prof. Ananya Sharma",
    link: "https://www.coursera.org/learn/machine-learning",
    tags: ["Machine Learning", "AI", "Data Science"],
    category: "Specialized",
    difficulty: "Hard",
    prerequisites: ["Probability", "Linear Algebra"],
    lastUpdated: "2024-03-10",
    rating: 4.9,
    likes: 189,
    comments: 42
  },
  {
    id: 9,
    title: "Distributed Systems Architecture",
    type: "article",
    duration: "60 min read",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Deep dive into distributed systems design and implementation",
    author: "Dr. Rajesh Kumar",
    link: "https://www.geeksforgeeks.org/distributed-systems/",
    tags: ["Distributed Systems", "Architecture", "Scalability"],
    category: "Research",
    difficulty: "Hard",
    prerequisites: ["Operating Systems", "Networks"],
    lastUpdated: "2024-03-05",
    rating: 4.7,
    likes: 156,
    comments: 38
  },
  {
    id: 10,
    title: "Advanced Problem Solving Workshop",
    type: "workshop",
    duration: "6 weeks",
    level: "Advanced",
    progress: 0,
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Intensive workshop on advanced problem-solving techniques",
    author: "Prof. Sunita Sharma",
    link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev",
    tags: ["Problem Solving", "Strategy", "Practice"],
    category: "Practice",
    difficulty: "Hard",
    prerequisites: ["Basic Problem Solving"],
    lastUpdated: "2024-03-01",
    rating: 4.9,
    likes: 278,
    comments: 89
  }
];

const subjects = [
  "All Tutorials",
  "Problem Solving",
  "Data Structures",
  "Computer Architecture",
  "Operating Systems",
  "Database Systems",
  "Computer Networks",
  "Security",
  "Machine Learning",
  "Distributed Systems",
  "Advanced Topics"
];

const categories = [
  "All Categories",
  "Core",
  "Specialized",
  "Research",
  "Practice",
  "Interview Prep",
  "Project Based",
  "Theory",
  "Application"
];

const subcategories = [
  "All Subcategories",
  "Fundamentals",
  "Advanced Concepts",
  "Problem Solving",
  "Implementation",
  "Design Patterns",
  "System Design",
  "Performance",
  "Security"
];

const formats = [
  "All Formats",
  "Video Series",
  "Single Video",
  "Article Series",
  "Single Article",
  "Course",
  "Workshop",
  "Live Session"
];

const languages = [
  "All Languages",
  "English",
  "Hindi",
  "Bilingual"
];

const targetAudiences = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert"
];

interface SearchFilter {
  duration: [number, number];
  rating: number;
  difficulty: string[];
  format: string[];
  language: string[];
  hasPracticeProblems: boolean;
  hasAssignments: boolean;
  hasProjects: boolean;
  certification: boolean;
  completionRate: number;
  enrolledStudents: number;
}

const durationToMinutes = (duration: string): number => {
  if (!duration) return 0;
  
  if (duration.includes('weeks')) {
    const weeks = parseInt(duration.split(' ')[0]);
    return isNaN(weeks) ? 0 : weeks * 7 * 24 * 60;
  }
  
  if (duration.includes('min read')) {
    const minutes = parseInt(duration.split(' ')[0]);
    return isNaN(minutes) ? 0 : minutes;
  }
  
  const parts = duration.split(':').map(part => {
    const num = parseInt(part);
    return isNaN(num) ? 0 : num;
  });
  
  if (parts.length === 3) {
    return parts[0] * 60 + parts[1] + parts[2] / 60;
  }
  
  return 0;
};

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All Tutorials');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All Subcategories');
  const [selectedFormat, setSelectedFormat] = useState('All Formats');
  const [selectedLanguage, setSelectedLanguage] = useState('All Languages');
  const [selectedTargetAudience, setSelectedTargetAudience] = useState('All Levels');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedTutorials, setBookmarkedTutorials] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('all');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchType, setSearchType] = useState<'all' | 'title' | 'tags' | 'author' | 'content'>('all');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState<SearchFilter>({
    duration: [0, 20],
    rating: 0,
    difficulty: [],
    format: [],
    language: [],
    hasPracticeProblems: false,
    hasAssignments: false,
    hasProjects: false,
    certification: false,
    completionRate: 0,
    enrolledStudents: 0
  });
  const [searchSort, setSearchSort] = useState<'relevance' | 'rating' | 'duration' | 'popularity'>('relevance');
  const [searchView, setSearchView] = useState<'grid' | 'list'>('grid');
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const [searchExcludeTags, setSearchExcludeTags] = useState<string[]>([]);

  useEffect(() => {
    // Load bookmarked tutorials from localStorage
    const savedBookmarks = localStorage.getItem('bookmarkedTutorials');
    if (savedBookmarks) {
      setBookmarkedTutorials(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    // Load search history from localStorage
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const toggleBookmark = (tutorialId: number) => {
    setBookmarkedTutorials(prev => {
      const newBookmarks = prev.includes(tutorialId)
        ? prev.filter(id => id !== tutorialId)
        : [...prev, tutorialId];
      localStorage.setItem('bookmarkedTutorials', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const saveToSearchHistory = (query: string) => {
    if (query.trim()) {
      setSearchHistory(prev => {
        const newHistory = [query, ...prev.filter(item => item !== query)].slice(0, 5);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
        return newHistory;
      });
    }
  };

  // Fuzzy search function
  const fuzzySearch = (str: string, pattern: string): boolean => {
    pattern = pattern.toLowerCase();
    str = str.toLowerCase();
    let patternIdx = 0;
    for (let i = 0; i < str.length && patternIdx < pattern.length; i++) {
      if (pattern[patternIdx] === str[i]) patternIdx++;
    }
    return patternIdx === pattern.length;
  };

  // Get current visible tutorials based on active tab
  const getVisibleTutorials = () => {
    switch (activeTab) {
      case 'featured':
        return tutorials.filter(tutorial => tutorial.featured);
      case 'bookmarked':
        return tutorials.filter(tutorial => bookmarkedTutorials.includes(tutorial.id));
      default:
        return tutorials;
    }
  };

  // Get search suggestions with fuzzy matching
  const getSearchSuggestions = (query: string) => {
    if (!query.trim()) return [];

    const suggestions = new Map<string, { type: string; icon: React.ReactNode; score: number }>();
    const queryLower = query.toLowerCase();
    const visibleTutorials = getVisibleTutorials();
    
    // Add matching titles with fuzzy search
    visibleTutorials.forEach(tutorial => {
      if (fuzzySearch(tutorial.title, queryLower)) {
        const score = tutorial.title.toLowerCase().includes(queryLower) ? 1 : 0.8;
        suggestions.set(tutorial.title, { 
          type: 'title', 
          icon: <BookOpen className="h-4 w-4" />,
          score 
        });
      }
    });

    // Add matching tags with fuzzy search
    visibleTutorials.forEach(tutorial => {
      tutorial.tags.forEach(tag => {
        if (fuzzySearch(tag, queryLower)) {
          const score = tag.toLowerCase().includes(queryLower) ? 1 : 0.8;
          suggestions.set(tag, { 
            type: 'tag', 
            icon: <Tag className="h-4 w-4" />,
            score 
          });
        }
      });
    });

    // Add matching authors with fuzzy search
    visibleTutorials.forEach(tutorial => {
      if (fuzzySearch(tutorial.author, queryLower)) {
        const score = tutorial.author.toLowerCase().includes(queryLower) ? 1 : 0.8;
        suggestions.set(tutorial.author, { 
          type: 'author', 
          icon: <User className="h-4 w-4" />,
          score 
        });
      }
    });

    // Sort suggestions by score and return top 10
    return Array.from(suggestions.entries())
      .sort((a, b) => b[1].score - a[1].score)
      .slice(0, 10);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    saveToSearchHistory(query);
    setShowSearchSuggestions(false);
  };

  // Calculate relevance score for sorting
  const calculateRelevanceScore = (tutorial: Tutorial) => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
    let score = 0;

    searchTerms.forEach(term => {
      // Title matches are most important
      if (tutorial.title.toLowerCase().includes(term)) score += 3;
      // Tag matches are next
      if (tutorial.tags.some(tag => tag.toLowerCase().includes(term))) score += 2;
      // Description matches are less important
      if (tutorial.description.toLowerCase().includes(term)) score += 1;
    });

    // Boost score for featured tutorials
    if (tutorial.featured) score += 2;
    // Boost score for high-rated tutorials
    score += tutorial.rating || 0;
    // Boost score for popular tutorials
    score += (tutorial.enrolledStudents || 0) / 1000;

    return score;
  };

  // Enhanced search filtering with current page results
  const filteredTutorials = getVisibleTutorials().filter(tutorial => {
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
    
    if (searchTerms.length === 0) return true;

    // Check if any search term matches any field
    return searchTerms.some(term => {
      // Title match (highest priority)
      if (tutorial.title.toLowerCase().includes(term)) return true;
      
      // Tags match (high priority)
      if (tutorial.tags.some(tag => tag.toLowerCase().includes(term))) return true;
      
      // Category and subcategory match (medium priority)
      if (tutorial.category.toLowerCase().includes(term)) return true;
      if (tutorial.subcategory?.toLowerCase().includes(term)) return true;
      
      // Description match (lower priority)
      if (tutorial.description.toLowerCase().includes(term)) return true;
      
      // Author match (lowest priority)
      if (tutorial.author.toLowerCase().includes(term)) return true;

      return false;
    });
  }).sort((a, b) => {
    switch (searchSort) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'duration':
        return durationToMinutes(a.duration) - durationToMinutes(b.duration);
      case 'popularity':
        return (b.enrolledStudents || 0) - (a.enrolledStudents || 0);
      default:
        // Sort by relevance (title matches first, then tags, then others)
        const aTitleMatch = a.title.toLowerCase().includes(searchQuery.toLowerCase());
        const bTitleMatch = b.title.toLowerCase().includes(searchQuery.toLowerCase());
        if (aTitleMatch !== bTitleMatch) return bTitleMatch ? 1 : -1;

        const aTagMatch = a.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const bTagMatch = b.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        if (aTagMatch !== bTagMatch) return bTagMatch ? 1 : -1;

        return 0;
    }
  });

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              GATE Ready with AI
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link to="/ai-tutor" className="text-muted-foreground hover:text-foreground">
                AI Tutor
              </Link>
              <Link to="/support" className="text-muted-foreground hover:text-foreground">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Advanced GATE Tutorials</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master advanced concepts with our comprehensive video tutorials, courses, and articles
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="max-w-4xl mx-auto mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Tutorials</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Advanced Search System */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col gap-4">
            {/* New Simple Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Search tutorials..."
                    className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setSearchQuery('')}
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>
              <Select value={searchSort} onValueChange={(value: any) => setSearchSort(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => setSearchView(searchView === 'grid' ? 'list' : 'grid')}
              >
                {searchView === 'grid' ? 'List View' : 'Grid View'}
              </Button>
            </div>

            {/* Search Results Summary */}
            {searchQuery && (
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Found {filteredTutorials.length} results for "{searchQuery}"
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Subject Categories */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={selectedSubject === subject ? "default" : "outline"}
                className="text-sm"
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && activeTab === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTutorials.map((tutorial) => (
            <article key={tutorial.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="icon" className="text-white">
                    <PlayCircle className="h-12 w-12" />
                  </Button>
                </div>
                    {tutorial.difficulty && (
                      <Badge className="absolute top-2 right-2" variant={tutorial.difficulty === 'Hard' ? 'destructive' : 'default'}>
                        {tutorial.difficulty}
                      </Badge>
                    )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    {tutorial.type === "video" ? (
                      <PlayCircle className="h-4 w-4" />
                        ) : tutorial.type === "course" ? (
                          <BookOpen className="h-4 w-4" />
                    ) : (
                      <BookOpen className="h-4 w-4" />
                    )}
                    {tutorial.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tutorial.duration}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                      <a
                        href={tutorial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                    {tutorial.title}
                      </a>
                </h2>
                    <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tutorial.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-sm bg-muted rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Level: {tutorial.level}</span>
                    {tutorial.progress > 0 && (
                      <span className="text-muted-foreground">
                        {tutorial.progress}% Complete
                      </span>
                    )}
                  </div>
                  {tutorial.progress > 0 && (
                    <Progress value={tutorial.progress} className="h-2" />
                  )}
                  <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => toggleBookmark(tutorial.id)}
                                >
                                  <Bookmark
                                    className={`h-4 w-4 ${
                                      bookmarkedTutorials.includes(tutorial.id)
                                        ? 'fill-current'
                                        : ''
                                    }`}
                                  />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                {bookmarkedTutorials.includes(tutorial.id)
                                  ? 'Remove Bookmark'
                                  : 'Bookmark'}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Share</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                      Start Learning
                          </a>
                    </Button>
                      </div>
                      {tutorial.prerequisites && (
                        <div className="text-sm text-muted-foreground">
                          <strong>Prerequisites:</strong> {tutorial.prerequisites.join(', ')}
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {tutorial.rating && (
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-current" />
                            {tutorial.rating}
                          </span>
                        )}
                        {tutorial.likes && (
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {tutorial.likes}
                          </span>
                        )}
                        {tutorial.comments && (
                          <span className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            {tutorial.comments}
                          </span>
                        )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
          </div>
        )}

        {/* All Tutorials */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {activeTab === 'bookmarked' ? 'Bookmarked Tutorials' : 'All Tutorials'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <article key={tutorial.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="text-white">
                      <PlayCircle className="h-12 w-12" />
                    </Button>
                  </div>
                  {tutorial.difficulty && (
                    <Badge className="absolute top-2 right-2" variant={tutorial.difficulty === 'Hard' ? 'destructive' : 'default'}>
                      {tutorial.difficulty}
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      {tutorial.type === "video" ? (
                        <PlayCircle className="h-4 w-4" />
                      ) : tutorial.type === "course" ? (
                        <BookOpen className="h-4 w-4" />
                      ) : (
                        <BookOpen className="h-4 w-4" />
                      )}
                      {tutorial.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tutorial.duration}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">
                    <a
                      href={tutorial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {tutorial.title}
                    </a>
                  </h2>
                  <p className="text-muted-foreground mb-4">{tutorial.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-sm bg-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level: {tutorial.level}</span>
                      {tutorial.progress > 0 && (
                        <span className="text-muted-foreground">
                          {tutorial.progress}% Complete
                        </span>
                      )}
                    </div>
                    {tutorial.progress > 0 && (
                      <Progress value={tutorial.progress} className="h-2" />
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => toggleBookmark(tutorial.id)}
                              >
                                <Bookmark
                                  className={`h-4 w-4 ${
                                    bookmarkedTutorials.includes(tutorial.id)
                                      ? 'fill-current'
                                      : ''
                                  }`}
                                />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              {bookmarkedTutorials.includes(tutorial.id)
                                ? 'Remove Bookmark'
                                : 'Bookmark'}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Share</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
                          Start Learning
                        </a>
                      </Button>
                    </div>
                    {tutorial.prerequisites && (
                      <div className="text-sm text-muted-foreground">
                        <strong>Prerequisites:</strong> {tutorial.prerequisites.join(', ')}
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      {tutorial.rating && (
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current" />
                          {tutorial.rating}
                        </span>
                      )}
                      {tutorial.likes && (
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          {tutorial.likes}
                        </span>
                      )}
                      {tutorial.comments && (
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          {tutorial.comments}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GATE Ready with AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
} 