import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Clock, Target, Award } from 'lucide-react';

interface DailyPerformance {
  day: string;
  studyHours: number;
  questionsSolved: number;
  accuracy: number;
}

export const WeeklyPerformance = () => {
  const performanceData: DailyPerformance[] = [
    { day: 'Mon', studyHours: 4, questionsSolved: 25, accuracy: 85 },
    { day: 'Tue', studyHours: 3, questionsSolved: 20, accuracy: 80 },
    { day: 'Wed', studyHours: 5, questionsSolved: 30, accuracy: 90 },
    { day: 'Thu', studyHours: 4, questionsSolved: 22, accuracy: 88 },
    { day: 'Fri', studyHours: 6, questionsSolved: 35, accuracy: 92 },
    { day: 'Sat', studyHours: 7, questionsSolved: 40, accuracy: 95 },
    { day: 'Sun', studyHours: 5, questionsSolved: 28, accuracy: 87 }
  ];

  const totalStudyHours = performanceData.reduce((sum, day) => sum + day.studyHours, 0);
  const totalQuestions = performanceData.reduce((sum, day) => sum + day.questionsSolved, 0);
  const averageAccuracy = performanceData.reduce((sum, day) => sum + day.accuracy, 0) / 7;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Weekly Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Study Hours</span>
              </div>
              <p className="text-2xl font-bold">{totalStudyHours}h</p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Questions</span>
              </div>
              <p className="text-2xl font-bold">{totalQuestions}</p>
            </div>

            <div className="p-4 rounded-lg border bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Accuracy</span>
              </div>
              <p className="text-2xl font-bold">{averageAccuracy.toFixed(1)}%</p>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="studyHours" fill="#8884d8" name="Study Hours" />
                <Bar yAxisId="right" dataKey="questionsSolved" fill="#82ca9d" name="Questions Solved" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 