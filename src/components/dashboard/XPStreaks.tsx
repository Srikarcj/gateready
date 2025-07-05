import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Flame, Star, Target } from 'lucide-react';

interface StreakData {
  currentStreak: number;
  longestStreak: number;
  totalXP: number;
  level: number;
  xpToNextLevel: number;
  currentXP: number;
}

export const XPStreaks = () => {
  const streakData: StreakData = {
    currentStreak: 7,
    longestStreak: 14,
    totalXP: 2500,
    level: 5,
    xpToNextLevel: 1000,
    currentXP: 750
  };

  const progress = (streakData.currentXP / streakData.xpToNextLevel) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5" />
          XP & Streaks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Level Progress */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Level {streakData.level}</span>
              <span className="text-sm text-muted-foreground">
                {streakData.currentXP}/{streakData.xpToNextLevel} XP
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">Current Streak</span>
              </div>
              <p className="text-2xl font-bold">{streakData.currentStreak} days</p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Longest Streak</span>
              </div>
              <p className="text-2xl font-bold">{streakData.longestStreak} days</p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Total XP</span>
              </div>
              <p className="text-2xl font-bold">{streakData.totalXP}</p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Level</span>
              </div>
              <p className="text-2xl font-bold">{streakData.level}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 