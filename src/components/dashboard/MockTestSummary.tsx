import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', score: 65 },
  { name: 'Week 2', score: 72 },
  { name: 'Week 3', score: 68 },
  { name: 'Week 4', score: 75 },
  { name: 'Week 5', score: 82 },
];

export const MockTestSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mock Test Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <p className="text-2xl font-bold">72.4%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tests Taken</p>
              <p className="text-2xl font-bold">5</p>
            </div>
          </div>
          
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>72%</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Best Score</p>
              <p className="font-semibold">82%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Improvement</p>
              <p className="font-semibold text-green-500">+17%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 