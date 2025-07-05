import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  BookOpen, 
  Target, 
  CheckCircle2, 
  Clock,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface Topic {
  id: string;
  name: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'not-started';
  subtopics: string[];
  estimatedTime: string;
}

export const MapExplorer = () => {
  const topics: Topic[] = [
    {
      id: '1',
      name: 'Data Structures',
      progress: 75,
      status: 'in-progress',
      subtopics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs'],
      estimatedTime: '40 hours'
    },
    {
      id: '2',
      name: 'Algorithms',
      progress: 30,
      status: 'in-progress',
      subtopics: ['Sorting', 'Searching', 'Dynamic Programming'],
      estimatedTime: '35 hours'
    },
    {
      id: '3',
      name: 'Mathematics',
      progress: 100,
      status: 'completed',
      subtopics: ['Linear Algebra', 'Calculus', 'Probability'],
      estimatedTime: '25 hours'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'in-progress':
        return 'text-yellow-500';
      case 'not-started':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-5 w-5" />
          Study Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topics.map((topic) => (
            <div key={topic.id} className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{topic.name}</h3>
                      <Badge variant="outline" className={getStatusColor(topic.status)}>
                        {topic.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {topic.estimatedTime}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{topic.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>
              </div>

              {/* Subtopics */}
              <div className="mt-4 space-y-2">
                {topic.subtopics.map((subtopic, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span>{subtopic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 