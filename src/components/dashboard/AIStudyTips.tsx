import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, BookOpen, Clock, TrendingUp, Target } from 'lucide-react';

const studyTips = [
  {
    id: 1,
    title: "Focus on Weak Areas",
    description: "Based on your recent test performance, prioritize Data Structures and Algorithms",
    icon: Target,
    priority: "High"
  },
  {
    id: 2,
    title: "Optimal Study Schedule",
    description: "Study Mathematics in the morning when your concentration is highest",
    icon: Clock,
    priority: "Medium"
  },
  {
    id: 3,
    title: "Resource Recommendation",
    description: "Try these practice problems to improve your understanding of Dynamic Programming",
    icon: BookOpen,
    priority: "High"
  }
];

export const AIStudyTips = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          AI Study Tips
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Tips List */}
          <div className="space-y-4">
            {studyTips.map((tip) => (
              <div key={tip.id} className="p-4 rounded-lg border bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{tip.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        tip.priority === 'High' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {tip.priority} Priority
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Get More Tips Button */}
          <Button className="w-full">
            <TrendingUp className="h-4 w-4 mr-2" />
            Get More Tips
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 