import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

const revisionHistory = [
  {
    id: 1,
    subject: "Data Structures",
    topic: "Binary Trees",
    date: "2024-03-18",
    duration: "45 min",
    completed: true
  },
  {
    id: 2,
    subject: "Algorithms",
    topic: "Dynamic Programming",
    date: "2024-03-17",
    duration: "60 min",
    completed: true
  },
  {
    id: 3,
    subject: "Mathematics",
    topic: "Linear Algebra",
    date: "2024-03-16",
    duration: "30 min",
    completed: false
  }
];

export const RevisionLog = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Revision Log
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Revision History */}
          <div className="space-y-3">
            {revisionHistory.map((revision) => (
              <div key={revision.id} className="p-3 rounded-lg border bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {revision.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      )}
                      <h4 className="font-medium">{revision.subject}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{revision.topic}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{revision.duration}</p>
                    <p className="text-xs text-muted-foreground">{revision.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Revision Button */}
          <Button className="w-full">
            <BookOpen className="h-4 w-4 mr-2" />
            Log New Revision
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 