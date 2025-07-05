import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Plus, Trash2, Clock, Calendar } from 'lucide-react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  dueDate?: string;
  priority: 'high' | 'medium' | 'low';
}

export const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      text: 'Complete Data Structures Assignment',
      completed: false,
      dueDate: '2024-03-20',
      priority: 'high'
    },
    {
      id: '2',
      text: 'Review Mathematics Formulas',
      completed: true,
      dueDate: '2024-03-19',
      priority: 'medium'
    },
    {
      id: '3',
      text: 'Practice Algorithm Problems',
      completed: false,
      dueDate: '2024-03-21',
      priority: 'low'
    }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo,
          completed: false,
          priority: 'medium'
        }
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          To-Do List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Add Todo Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Add new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <Button onClick={addTodo}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Todo List */}
          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-muted/50"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                  />
                  <div>
                    <p className={`${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {todo.text}
                    </p>
                    {todo.dueDate && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Due: {todo.dueDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${getPriorityColor(todo.priority)}`}>
                    {todo.priority}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 