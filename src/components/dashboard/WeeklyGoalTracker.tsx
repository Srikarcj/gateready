import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Target, Plus, CheckCircle2, Clock } from 'lucide-react';

const weeklyGoals = [
  {
    id: 1,
    title: "Complete Data Structures",
    target: 10,
    completed: 7,
    unit: "chapters"
  },
  {
    id: 2,
    title: "Practice Problems",
    target: 50,
    completed: 35,
    unit: "problems"
  },
  {
    id: 3,
    title: "Study Hours",
    target: 30,
    completed: 22,
    unit: "hours"
  }
];

export const WeeklyGoalTracker = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Weekly Goals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Goals List */}
          <div className="space-y-4">
            {weeklyGoals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h4 className="font-medium">{goal.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {goal.completed}/{goal.target} {goal.unit}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {Math.round((goal.completed / goal.target) * 100)}%
                  </span>
                </div>
                <Progress 
                  value={(goal.completed / goal.target) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </div>

          {/* Overall Progress */}
          <div className="p-4 rounded-lg border bg-muted/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Overall Progress</span>
              <span className="text-sm font-medium text-green-600">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          {/* Add Goal Button */}
          <Button className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add New Goal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 