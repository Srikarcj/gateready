import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  Navigation,
  Brain,
  CheckSquare,
  ArrowRight,
  FileText
} from 'lucide-react';

const quickActions = [
  {
    name: 'GATE Rank Predictor',
    description: 'Predict your GATE rank and college options',
    href: '/gate-rank-predictor',
    icon: Calculator
  },
  {
    name: 'College Transport',
    description: 'Explore transport options to colleges',
    href: '/college-transport',
    icon: Navigation
  },

  {
    name: 'AI Tutor',
    description: 'Get help from AI tutor',
    href: '/ai-tutor',
    icon: Brain
  },
  {
    name: 'Todo List',
    description: 'Manage your study tasks',
    href: '/todo',
    icon: CheckSquare
  }
];

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => (
            <Link key={action.name} to={action.href}>
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-2">
                  <action.icon className="h-5 w-5" />
                  <span className="font-medium">{action.name}</span>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  {action.description}
                </p>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}; 