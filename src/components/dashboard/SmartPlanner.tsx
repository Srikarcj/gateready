import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: "Complete Data Structures Chapter",
    subject: "Computer Science",
    priority: "High",
    dueDate: "2024-03-20",
    completed: false
  },
  {
    id: 2,
    title: "Practice Algorithms Problems",
    subject: "Computer Science",
    priority: "Medium",
    dueDate: "2024-03-21",
    completed: true
  },
  {
    id: 3,
    title: "Review Mathematics Formulas",
    subject: "Mathematics",
    priority: "High",
    dueDate: "2024-03-19",
    completed: false
  }
];

export const SmartPlanner = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Smart Planner
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Task List */}
          <div className="space-y-3">
            {tasks.map((task) => (
              <div key={task.id} className="p-3 rounded-lg border bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {task.completed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-yellow-500" />
                      )}
                      <h4 className="font-medium">{task.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{task.subject}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'High' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Due: {task.dueDate}
                </div>
              </div>
            ))}
          </div>

          {/* Add Task Button */}
          <Button className="w-full">
            Add New Task
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}; 