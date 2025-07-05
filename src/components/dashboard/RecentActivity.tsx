import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BookOpen,
  Target,
  Brain,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

interface Activity {
  id: string;
  type: 'study' | 'quiz' | 'flashcard' | 'ai';
  title: string;
  description: string;
  timestamp: Date;
  status: 'completed' | 'in-progress' | 'failed';
  score?: number;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'study',
    title: 'Data Structures - Trees',
    description: 'Completed chapter on Binary Trees',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    status: 'completed',
    score: 85
  },
  {
    id: '2',
    type: 'quiz',
    title: 'Operating Systems Quiz',
    description: 'Process Scheduling and Memory Management',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: 'completed',
    score: 92
  },
  {
    id: '3',
    type: 'flashcard',
    title: 'Computer Networks',
    description: 'Reviewed 50 flashcards',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    status: 'completed'
  },
  {
    id: '4',
    type: 'ai',
    title: 'AI Tutor Session',
    description: 'Discussed algorithm complexity',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    status: 'completed'
  },
  {
    id: '5',
    type: 'study',
    title: 'Database Systems',
    description: 'Started chapter on Normalization',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    status: 'in-progress'
  }
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'study':
      return <BookOpen className="h-4 w-4" />;
    case 'quiz':
      return <Target className="h-4 w-4" />;
    case 'flashcard':
      return <Brain className="h-4 w-4" />;
    case 'ai':
      return <TrendingUp className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: Activity['status']) => {
  switch (status) {
    case 'completed':
      return (
        <Badge variant="success" className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" />
          Completed
        </Badge>
      );
    case 'in-progress':
      return (
        <Badge variant="secondary" className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          In Progress
        </Badge>
      );
    case 'failed':
      return (
        <Badge variant="destructive" className="flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          Failed
        </Badge>
      );
  }
};

export const RecentActivity = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border"
              >
                <div className="p-2 rounded-full bg-muted">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{activity.title}</h3>
                    {getStatusBadge(activity.status)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>
                      {activity.timestamp.toLocaleDateString()} at{' '}
                      {activity.timestamp.toLocaleTimeString()}
                    </span>
                    {activity.score && (
                      <span className="font-medium text-foreground">
                        Score: {activity.score}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}; 