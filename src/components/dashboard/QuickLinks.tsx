import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Video, 
  Bookmark,
  ExternalLink,
  Brain
} from 'lucide-react';

interface QuickLink {
  id: string;
  title: string;
  icon: React.ElementType;
  url: string;
  description: string;
}

export const QuickLinks = () => {
  const quickLinks: QuickLink[] = [
    {
      id: '1',
      title: 'Study Materials',
      icon: BookOpen,
      url: '/materials',
      description: 'Access your study materials and notes'
    },
    {
      id: '2',
      title: 'Practice Tests',
      icon: FileText,
      url: '/tests',
      description: 'Take practice tests and quizzes'
    },
    {
      id: '3',
      title: 'Study Schedule',
      icon: Calendar,
      url: '/schedule',
      description: 'View and manage your study schedule'
    },
    {
      id: '4',
      title: 'Discussion Forum',
      icon: MessageSquare,
      url: '/forum',
      description: 'Join study discussions and get help'
    },
    {
      id: '5',
      title: 'Video Lectures',
      icon: Video,
      url: '/videos',
      description: 'Watch recorded lectures and tutorials'
    },
    {
      id: '6',
      title: 'Bookmarks',
      icon: Bookmark,
      url: '/bookmarks',
      description: 'Access your saved resources'
    },
    {
      id: '7',
      title: 'AI Tutor',
      icon: Brain,
      url: '/ai-tutor',
      description: 'Get help from our AI tutor'
    },
    {
      id: '8',
      title: 'Generate Schedule',
      icon: Calendar,
      url: '/generate-schedule',
      description: 'Create a personalized study schedule with AI'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Quick Links
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Button
              key={link.id}
              variant="outline"
              className="h-auto p-4 justify-start"
              asChild
            >
              <a href={link.url} className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{link.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {link.description}
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 