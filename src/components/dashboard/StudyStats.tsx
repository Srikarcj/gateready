import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import {
  BookOpen,
  Target,
  Clock,
  TrendingUp,
  Brain,
  Award
} from 'lucide-react';

// Sample data for charts
const weeklyData = [
  { day: 'Mon', hours: 4, score: 85 },
  { day: 'Tue', hours: 3, score: 78 },
  { day: 'Wed', hours: 5, score: 92 },
  { day: 'Thu', hours: 4, score: 88 },
  { day: 'Fri', hours: 6, score: 95 },
  { day: 'Sat', hours: 7, score: 90 },
  { day: 'Sun', hours: 5, score: 87 }
];

const subjectProgress = [
  { subject: 'Data Structures', progress: 85 },
  { subject: 'Algorithms', progress: 70 },
  { subject: 'Operating Systems', progress: 65 },
  { subject: 'Computer Networks', progress: 80 },
  { subject: 'Database Systems', progress: 75 }
];

export const StudyStats = () => {
  const totalHours = weeklyData.reduce((sum, day) => sum + day.hours, 0);
  const averageScore = Math.round(
    weeklyData.reduce((sum, day) => sum + day.score, 0) / weeklyData.length
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Study Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Weekly Overview */}
          <div>
            <h3 className="text-sm font-medium mb-4">Weekly Overview</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="hours"
                    stroke="#8884d8"
                    name="Study Hours"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="score"
                    stroke="#82ca9d"
                    name="Performance"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subject Progress */}
          <div>
            <h3 className="text-sm font-medium mb-4">Subject Progress</h3>
            <div className="space-y-4">
              {subjectProgress.map((subject) => (
                <div key={subject.subject} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{subject.subject}</span>
                    <Badge variant="secondary">{subject.progress}%</Badge>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">Total Hours</span>
              </div>
              <p className="text-2xl font-bold">{totalHours}h</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Average Score</span>
              </div>
              <p className="text-2xl font-bold">{averageScore}%</p>
            </div>
          </div>

          {/* Performance Trends */}
          <div>
            <h3 className="text-sm font-medium mb-4">Performance Trends</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8884d8" name="Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 