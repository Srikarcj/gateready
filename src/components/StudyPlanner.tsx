import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Target, Brain, Plus, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StudyTask {
  time: string;
  subject: string;
  topic: string;
  duration: number;
  type: "study" | "practice" | "revision" | "test";
  completed: boolean;
  id: string;
}

interface WeeklyPlan {
  [date: string]: StudyTask[];
}

export const StudyPlanner = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [addTaskDialogOpen, setAddTaskDialogOpen] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { toast } = useToast();

  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyPlan>({
    "2024-06-05": [
      { id: "1", time: "09:00", subject: "Data Structures", topic: "Binary Trees", duration: 120, type: "study", completed: true },
      { id: "2", time: "14:00", subject: "Algorithms", topic: "Dynamic Programming", duration: 90, type: "practice", completed: false },
      { id: "3", time: "19:00", subject: "Mock Test", topic: "Full Length Test 1", duration: 180, type: "test", completed: false }
    ],
    "2024-06-06": [
      { id: "4", time: "10:00", subject: "Computer Networks", topic: "TCP/IP Protocol", duration: 120, type: "study", completed: false },
      { id: "5", time: "15:00", subject: "Operating Systems", topic: "Process Scheduling", duration: 90, type: "revision", completed: false },
      { id: "6", time: "20:00", subject: "Digital Logic", topic: "Boolean Algebra", duration: 60, type: "practice", completed: false }
    ],
    "2024-06-07": [
      { id: "7", time: "09:30", subject: "Database Systems", topic: "Normalization", duration: 100, type: "study", completed: false },
      { id: "8", time: "16:00", subject: "Theory of Computation", topic: "Regular Languages", duration: 80, type: "study", completed: false }
    ]
  });

  const [newTask, setNewTask] = useState({
    time: "",
    subject: "",
    topic: "",
    duration: 60,
    type: "study" as const,
    date: ""
  });

  const getWeekDays = () => {
    const start = new Date(currentWeek);
    start.setDate(start.getDate() - start.getDay());
    const days = [];
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getTypeColor = (type: string) => {
    const colors = {
      study: "bg-blue-500",
      practice: "bg-green-500", 
      revision: "bg-yellow-500",
      test: "bg-purple-500"
    };
    return colors[type] || "bg-gray-500";
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      study: "📚",
      practice: "💻",
      revision: "🔄", 
      test: "📝"
    };
    return icons[type] || "📖";
  };

  const handleAddTask = () => {
    if (!newTask.time || !newTask.subject || !newTask.topic || !newTask.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const task: StudyTask = {
      id: Date.now().toString(),
      ...newTask,
      completed: false
    };

    setWeeklyPlan(prev => ({
      ...prev,
      [newTask.date]: [...(prev[newTask.date] || []), task]
    }));

    // Reset form
    setNewTask({
      time: "",
      subject: "",
      topic: "",
      duration: 60,
      type: "study",
      date: ""
    });

    setAddTaskDialogOpen(false);

    toast({
      title: "Task Added",
      description: "New study task has been added to your planner",
    });
  };

  const handleAIOptimize = async () => {
    setIsOptimizing(true);
    
    try {
      // Simulate AI optimization process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get current tasks and optimize them
      const optimizedPlan = { ...weeklyPlan };
      
      // AI optimization logic - redistribute tasks for better learning
      Object.keys(optimizedPlan).forEach(date => {
        const tasks = optimizedPlan[date];
        if (tasks && tasks.length > 0) {
          // Sort by difficulty and spread them out
          const sortedTasks = tasks.sort((a, b) => {
            const difficultyOrder = { test: 3, study: 2, practice: 1, revision: 0 };
            return difficultyOrder[b.type] - difficultyOrder[a.type];
          });
          
          // Optimize timing - harder tasks in morning, easier in evening
          sortedTasks.forEach((task, index) => {
            if (task.type === 'test' || task.type === 'study') {
              task.time = `${9 + index * 2}:00`;
            } else {
              task.time = `${15 + index}:00`;
            }
          });
          
          optimizedPlan[date] = sortedTasks;
        }
      });
      
      setWeeklyPlan(optimizedPlan);
      
      toast({
        title: "Schedule Optimized!",
        description: "AI has optimized your study schedule for better learning efficiency",
      });
      
    } catch (error) {
      toast({
        title: "Optimization Failed",
        description: "Unable to optimize schedule. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  const toggleTaskCompletion = (date: string, taskId: string) => {
    setWeeklyPlan(prev => ({
      ...prev,
      [date]: prev[date]?.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ) || []
    }));
  };

  const weekDays = getWeekDays();
  const today = new Date().toDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            <Calendar className="h-8 w-8 text-blue-600" />
            Smart Study Planner
          </h1>
          <p className="text-slate-600">
            AI-powered study schedule that adapts to your progress and focuses on weak areas
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {Object.values(weeklyPlan).flat().length}
                  </div>
                  <div className="text-sm text-slate-600">Tasks This Week</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {Object.values(weeklyPlan).flat().filter(task => task.completed).length}
                  </div>
                  <div className="text-sm text-slate-600">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {Math.round(Object.values(weeklyPlan).flat().reduce((total, task) => total + task.duration, 0) / 60)}h
                  </div>
                  <div className="text-sm text-slate-600">Planned Study</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500 rounded-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">3</div>
                  <div className="text-sm text-slate-600">Weak Topics</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calendar View */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Weekly Study Schedule</CardTitle>
              <div className="flex items-center gap-2">
                <Dialog open={addTaskDialogOpen} onOpenChange={setAddTaskDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add Study Task</DialogTitle>
                      <DialogDescription>
                        Add a new task to your study schedule
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Date</label>
                          <Input
                            type="date"
                            value={newTask.date}
                            onChange={(e) => setNewTask(prev => ({ ...prev, date: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Time</label>
                          <Input
                            type="time"
                            value={newTask.time}
                            onChange={(e) => setNewTask(prev => ({ ...prev, time: e.target.value }))}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Subject</label>
                        <Select value={newTask.subject} onValueChange={(value) => setNewTask(prev => ({ ...prev, subject: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Data Structures">Data Structures</SelectItem>
                            <SelectItem value="Algorithms">Algorithms</SelectItem>
                            <SelectItem value="Computer Networks">Computer Networks</SelectItem>
                            <SelectItem value="Operating Systems">Operating Systems</SelectItem>
                            <SelectItem value="Database Systems">Database Systems</SelectItem>
                            <SelectItem value="Digital Logic">Digital Logic</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Topic</label>
                        <Input
                          placeholder="Enter topic"
                          value={newTask.topic}
                          onChange={(e) => setNewTask(prev => ({ ...prev, topic: e.target.value }))}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium">Duration (min)</label>
                          <Input
                            type="number"
                            value={newTask.duration}
                            onChange={(e) => setNewTask(prev => ({ ...prev, duration: parseInt(e.target.value) || 60 }))}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Type</label>
                          <Select value={newTask.type} onValueChange={(value: any) => setNewTask(prev => ({ ...prev, type: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="study">Study</SelectItem>
                              <SelectItem value="practice">Practice</SelectItem>
                              <SelectItem value="revision">Revision</SelectItem>
                              <SelectItem value="test">Test</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setAddTaskDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddTask}>Add Task</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleAIOptimize}
                  disabled={isOptimizing}
                >
                  {isOptimizing ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <Brain className="h-4 w-4 mr-2" />
                  )}
                  AI Optimize
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {weekDays.map((day, index) => {
                const dayKey = formatDate(day);
                const dayTasks = weeklyPlan[dayKey] || [];
                const isToday = day.toDateString() === today;
                
                return (
                  <div 
                    key={index}
                    className={`min-h-[300px] p-4 rounded-lg border-2 transition-all duration-200 ${
                      isToday 
                        ? 'bg-blue-50 border-blue-200' 
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-center mb-4">
                      <div className="text-sm font-medium text-slate-600">
                        {day.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className={`text-lg font-bold ${
                        isToday ? 'text-blue-600' : 'text-slate-900'
                      }`}>
                        {day.getDate()}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {dayTasks.map((task, taskIndex) => (
                        <div 
                          key={taskIndex}
                          className={`p-3 rounded-lg border text-xs cursor-pointer ${
                            task.completed 
                              ? 'bg-green-50 border-green-200 opacity-75' 
                              : 'bg-white border-slate-200 hover:shadow-sm'
                          }`}
                          onClick={() => toggleTaskCompletion(dayKey, task.id)}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-slate-900">
                              {task.time}
                            </span>
                            <Badge 
                              variant="secondary" 
                              className={`${getTypeColor(task.type)} text-white text-xs`}
                            >
                              {getTypeIcon(task.type)}
                            </Badge>
                          </div>
                          <div className="font-semibold text-slate-800 mb-1">
                            {task.subject}
                          </div>
                          <div className="text-slate-600 mb-2">
                            {task.topic}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-500">
                              {task.duration}min
                            </span>
                            {task.completed && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {dayTasks.length === 0 && (
                        <div className="text-center py-8 text-slate-400">
                          <Plus className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm">No tasks scheduled</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* AI Suggestions */}
        <Card className="mt-8 bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Study Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">⚡ Priority Focus</div>
                <div className="text-purple-100 text-sm">
                  Spend extra time on Digital Logic this week. Your last mock test showed room for improvement.
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">📅 Schedule Optimization</div>
                <div className="text-purple-100 text-sm">
                  Consider moving Network theory to mornings when you're most focused on technical subjects.
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-2">🎯 Mock Test Reminder</div>
                <div className="text-purple-100 text-sm">
                  You're due for a full-length mock test. Schedule one for this weekend to track progress.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 bg-slate-900 text-white rounded-lg">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <span className="text-xl font-bold">GATE Revolution</span>
                </div>
                <p className="text-slate-300 mb-4">
                  Your comprehensive GATE preparation platform with AI-powered study planning, 
                  college prediction, and personalized learning paths.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Study Tools</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>AI Tutor</li>
                  <li>Mock Tests</li>
                  <li>Study Planner</li>
                  <li>Progress Tracker</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>College Predictor</li>
                  <li>College Tours</li>
                  <li>Study Materials</li>
                  <li>Study Groups</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
              <p>&copy; 2024 GATE Revolution. Empowering students to achieve their engineering dreams.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
