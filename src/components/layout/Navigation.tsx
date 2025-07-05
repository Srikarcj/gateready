import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react'; // Add ExternalLink icon
import {
  LayoutDashboard,
  Calculator,
  Navigation as NavigationIcon,
  CheckSquare,
  Map,
  School,
  FileText,
  Bot,
  Calendar,
  Timer,
  HelpCircle,
  Brain,
  ClipboardList
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard
  },
  {
    name: 'Practice Tests',
    href: 'https://app--gateway-exam-prep-982ae520.base44.app/',
    icon: ClipboardList,
    external: true
  },
  {
    name: 'College Map',
    href: '/college-map',
    icon: Map
  },
  {
    name: 'College Transport',
    href: '/college-transport',
    icon: NavigationIcon
  },
  {
    name: 'College Predictor',
    href: '/college-predictor',
    icon: School
  },
  {
    name: 'GATE Rank Predictor',
    href: '/gate-rank-predictor',
    icon: Calculator
  },

  {
    name: 'Todo List',
    href: '/todo',
    icon: CheckSquare
  },
  {
    name: 'AI Tutor',
    href: '/ai-tutor',
    icon: Bot
  },
  {
    name: 'Priority Scheduler',
    href: '/priority-scheduler',
    icon: Calendar
  },
  {
    name: 'Pomodoro Revision',
    href: '/pomodoro-revision',
    icon: Timer
  },
  {
    name: 'Doubts',
    href: '/doubts',
    icon: HelpCircle
  },
  {
    name: 'Spaced Repetition',
    href: '/spaced-repetition',
    icon: Brain
  }
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="space-y-1">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          item.external ? (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon className="mr-3 h-5 w-5 text-muted-foreground" />
              <span className="flex-1">{item.name}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
          ) : (
            <RouterLink
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium rounded-md',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5',
                  isActive ? 'text-primary-foreground' : 'text-muted-foreground'
                )}
              />
              {item.name}
            </RouterLink>
          )
        );
      })}
    </nav>
  );
}; 