import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Trash2,
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  AlertCircle
} from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate?: Date;
  category: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Tasks' },
    { id: 'study', name: 'Study' },
    { id: 'practice', name: 'Practice' },
    { id: 'revision', name: 'Revision' }
  ];

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: Date.now().toString(),
      title: newTodo,
      completed: false,
      priority: 'medium',
      category: 'study',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    };

    setTodos([...todos, todo]);
    setNewTodo('');
  };

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = selectedCategory === 'all'
    ? todos
    : todos.filter(todo => todo.category === selectedCategory);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle2 className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">Todo List</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Todo List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Add Todo */}
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                />
                <Button onClick={handleAddTodo}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              {/* Todo Items */}
              <div className="space-y-2">
                {filteredTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-4 p-4 rounded-lg border"
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => handleToggleTodo(todo.id)}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={todo.completed ? 'line-through text-muted-foreground' : ''}>
                          {todo.title}
                        </span>
                        <Badge variant={
                          todo.priority === 'high' ? 'destructive' :
                          todo.priority === 'medium' ? 'default' : 'secondary'
                        }>
                          {todo.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {todo.dueDate?.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {todo.category}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-medium">Completed Tasks</span>
                </div>
                <p className="text-2xl font-bold">
                  {todos.filter(todo => todo.completed).length}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-2 mb-2">
                  <Circle className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Pending Tasks</span>
                </div>
                <p className="text-2xl font-bold">
                  {todos.filter(todo => !todo.completed).length}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="font-medium">High Priority</span>
                </div>
                <p className="text-2xl font-bold">
                  {todos.filter(todo => todo.priority === 'high').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 