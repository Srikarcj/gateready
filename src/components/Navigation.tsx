import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  BookOpen,
  Zap,
  Target,
  Users,
  User,
  Menu,
  X,
  Brain,
  Calendar,
  HelpCircle,
  MessageCircleQuestion,
  Newspaper,
  Book,
  FileText,
  Settings,
  BarChart,
  Briefcase,
  School,
  GraduationCap,
  StickyNote
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignOutButton } from "./SignOutButton";
import { useAuth } from "@clerk/clerk-react";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoaded, isSignedIn } = useAuth();

  // Don't render anything until auth is loaded
  if (!isLoaded) {
    return null;
  }

  // Don't render navigation for non-authenticated users
  if (!isSignedIn) {
    return null;
  }

  // Practice Tests link - only shown when user is authenticated
  const practiceTestsLink = (
    <Link to="/practice-tests">
      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
        <div className="text-sm font-medium leading-none flex items-center gap-2">
          <Target className="h-4 w-4" />
          Practice Tests
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
          Test your knowledge with practice questions
        </p>
      </NavigationMenuLink>
    </Link>
  );

  const isActive = (path: string) => location.pathname === path;

  if (!isSignedIn) return null;

  return (
    <div className="border-b bg-white shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Navigation ONLY - Mobile navigation moved to Sidebar */}
        <NavigationMenu className="hidden md:flex h-14">
          <NavigationMenuList className="flex items-center justify-between w-full h-full">
            {/* Left side navigation */}
            <div className="flex items-center gap-2">
              <NavigationMenuItem>
                <Link to="/dashboard" className="text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Dashboard
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">Study</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200">
                  <a 
                    href="https://gate-ready-with-ai-colleges.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <School className="h-4 w-4" />
                      Explore Courses
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                      Browse through top colleges accepting GATE scores
                    </p>
                  </a>
                  <NavigationMenuLink asChild>
                    <Link to="/notes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none flex items-center gap-2">
                        <StickyNote className="h-4 w-4" />
                        Notes
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Access comprehensive study notes and materials
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  {isSignedIn && (
                    <NavigationMenuLink asChild>
                      <Link to="/practice-tests" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                        <div className="text-sm font-medium leading-none flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Practice Tests
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                          Test your knowledge with practice questions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  )}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">Colleges</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200">
                    <a 
                      href="https://gate-ready-with-ai-colleges.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900"
                    >
                      <div className="text-sm font-medium leading-none flex items-center gap-2">
                        <School className="h-4 w-4" />
                        Explore Colleges
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Browse through top colleges accepting GATE scores
                      </p>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200">
                  <NavigationMenuLink asChild>
                    <Link to="/groups" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none">Study Groups</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Join study groups and collaborate
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/ai-tutor" className="text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  AI Tutor
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/support" className="text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Support
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/faqs" className="text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  FAQs
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">Legal</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200">
                  <NavigationMenuLink asChild>
                    <Link to="/privacy" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none">Privacy Policy</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Our commitment to your privacy
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/terms" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none">Terms of Service</div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Terms and conditions for using our platform
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/cookies" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Cookie Policy</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How we use cookies
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/generate-schedule" className="text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Generate Schedule
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium h-8 px-3">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-slate-200">
                  <NavigationMenuLink asChild>
                    <Link to="/tutorials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Tutorials
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Video and written tutorials for GATE subjects
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/study-materials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900">
                      <div className="text-sm font-medium leading-none flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Study Materials
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        Download study materials and notes
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            </div>

            {/* Right side navigation items */}
            <div className="flex items-center gap-2">
              <NavigationMenuItem>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium h-8 px-3">
                        <Briefcase className="h-4 w-4" />
                        Careers
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Coming Soon</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/profile" className="flex items-center gap-1 text-sm font-medium h-8 px-3 rounded-md hover:bg-accent hover:text-accent-foreground whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <SignOutButton />
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
