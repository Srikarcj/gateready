import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Target, Zap, Award } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  xp: number;
  completed: boolean;
  progress: number;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
}

export const GoalTracker: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: '1', title: 'Complete 5 mock tests', xp: 500, completed: false, progress: 60 },
    { id: '2', title: 'Study 20 hours this week', xp: 300, completed: false, progress: 75 },
    { id: '3', title: 'Review all flashcards', xp: 200, completed: false, progress: 40 },
    { id: '4', title: 'Join 2 study groups', xp: 150, completed: false, progress: 50 }
  ]);

  const [badges, setBadges] = useState<Badge[]>([
    { id: '1', name: 'Early Bird', description: 'Study before 8 AM', icon: <Star className="h-4 w-4" />, unlocked: true },
    { id: '2', name: 'Consistent', description: '7-day streak', icon: <Zap className="h-4 w-4" />, unlocked: false },
    { id: '3', name: 'Perfect Score', description: '100% in a mock test', icon: <Trophy className="h-4 w-4" />, unlocked: false },
    { id: '4', name: 'Team Player', description: 'Join 5 study groups', icon: <Award className="h-4 w-4" />, unlocked: false }
  ]);

  const totalXP = goals.reduce((acc, goal) => acc + (goal.completed ? goal.xp : 0), 0);
  const level = Math.floor(totalXP / 1000) + 1;
  const xpToNextLevel = 1000 - (totalXP % 1000);

  const handleGoalComplete = (goalId: string) => {
    setGoals(goals.map(goal =>
      goal.id === goalId ? { ...goal, completed: true, progress: 100 } : goal
    ));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            Weekly Goals
          </span>
          <Badge variant="secondary" className="text-sm">
            Level {level}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total XP: {totalXP}</span>
              <span>{xpToNextLevel} XP to next level</span>
            </div>
            <Progress value={(totalXP % 1000) / 10} />
          </div>

          {/* Goals List */}
          <div className="space-y-4">
            {goals.map((goal) => (
              <Card key={goal.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">{goal.title}</p>
                      <div className="flex items-center gap-2">
                        <Progress value={goal.progress} className="w-[200px]" />
                        <span className="text-sm text-muted-foreground">
                          {goal.progress}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">
                        {goal.xp} XP
                      </Badge>
                      {!goal.completed && (
                        <Button
                          size="sm"
                          onClick={() => handleGoalComplete(goal.id)}
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Badges Section */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              Badges
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge) => (
                <Card
                  key={badge.id}
                  className={`${
                    badge.unlocked ? 'border-yellow-500' : 'opacity-50'
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-2">
                        {badge.icon}
                      </div>
                      <p className="font-medium">{badge.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {badge.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker; 