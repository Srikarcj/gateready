import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  BookOpen, 
  Clock, 
  Award,
  Brain
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ProgressData {
  topicsCompleted: number;
  totalTopics: number;
  mockTestStats: {
    totalTests: number;
    averageScore: number;
    improvement: number;
  };
  aiPerformanceScore: number;
  weeklyProgress: {
    date: string;
    score: number;
  }[];
  studyHours: number;
  targetHours: number;
  questionsSolved: number;
  targetQuestions: number;
  currentStreak: number;
  targetStreak: number;
}

interface ProgressOverviewProps {
  data?: ProgressData;
  isLoading?: boolean;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  data,
  isLoading = false
}) => {
  // Use data if provided, otherwise use defaults
  const progressData: ProgressData = data ?? {
    topicsCompleted: 0,
    totalTopics: 0,
    mockTestStats: {
      totalTests: 0,
      averageScore: 0,
      improvement: 0
    },
    aiPerformanceScore: 0,
    weeklyProgress: [],
    studyHours: 0,
    targetHours: 0,
    questionsSolved: 0,
    targetQuestions: 0,
    currentStreak: 0,
    targetStreak: 0
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const calculateProgress = (current: number, target: number) => {
    return target > 0 ? Math.min((current / target) * 100, 100) : 0;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Progress Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Topics Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Topics</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {progressData.topicsCompleted}/{progressData.totalTopics}
              </span>
            </div>
            <Progress 
              value={calculateProgress(progressData.topicsCompleted, progressData.totalTopics)} 
              className="h-2"
            />
          </div>

          {/* Study Hours Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Study Hours</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {progressData.studyHours}/{progressData.targetHours}h
              </span>
            </div>
            <Progress 
              value={calculateProgress(progressData.studyHours, progressData.targetHours)} 
              className="h-2"
            />
          </div>

          {/* Questions Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">Questions Solved</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {progressData.questionsSolved}/{progressData.targetQuestions}
              </span>
            </div>
            <Progress 
              value={calculateProgress(progressData.questionsSolved, progressData.targetQuestions)} 
              className="h-2"
            />
          </div>

          {/* Streak Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Study Streak</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {progressData.currentStreak}/{progressData.targetStreak} days
              </span>
            </div>
            <Progress 
              value={calculateProgress(progressData.currentStreak, progressData.targetStreak)} 
              className="h-2"
            />
          </div>

          {/* AI Performance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-indigo-500" />
                <span className="text-sm font-medium">AI Performance</span>
              </div>
              <Badge variant="secondary">
                {progressData.aiPerformanceScore}%
              </Badge>
            </div>
            <Progress value={progressData.aiPerformanceScore} className="h-2" />
          </div>

          {/* Weekly Progress Chart */}
          {progressData.weeklyProgress.length > 0 && (
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData.weeklyProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressOverview; 