
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageSquare, Plus, Search, Send, Hash } from "lucide-react";

interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: Date;
}

interface StudyGroup {
  id: string;
  name: string;
  description: string;
  subject: string;
  memberCount: number;
  messages: Message[];
  createdAt: Date;
}

export const Groups = () => {
  const [groups, setGroups] = useState<StudyGroup[]>([
    {
      id: "1",
      name: "GATE CS 2025 Prep",
      description: "Computer Science GATE preparation group for 2025",
      subject: "Computer Science",
      memberCount: 150,
      messages: [
        {
          id: "1",
          userId: "user1",
          userName: "Rahul S",
          content: "Anyone solved the dynamic programming problems from last week?",
          timestamp: new Date(Date.now() - 10 * 60 * 1000)
        },
        {
          id: "2",
          userId: "user2",
          userName: "Priya M",
          content: "Yes! The knapsack variations were tricky. I can share my solutions.",
          timestamp: new Date(Date.now() - 5 * 60 * 1000)
        }
      ],
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    },
    {
      id: "2",
      name: "Algorithms & Data Structures",
      description: "Deep dive into DSA concepts and problem solving",
      subject: "Computer Science",
      memberCount: 89,
      messages: [],
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
    }
  ]);

  const [activeGroup, setActiveGroup] = useState<StudyGroup | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [isCreatingGroup, setIsCreatingGroup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [newGroup, setNewGroup] = useState({
    name: "",
    description: "",
    subject: "Computer Science"
  });

  const subjects = ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"];

  // Load groups from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('gateWithMe_groups');
    if (saved) {
      const parsed = JSON.parse(saved);
      setGroups(parsed.map((group: any) => ({
        ...group,
        createdAt: new Date(group.createdAt),
        messages: group.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      })));
    }
  }, []);

  // Save groups to localStorage
  useEffect(() => {
    localStorage.setItem('gateWithMe_groups', JSON.stringify(groups));
  }, [groups]);

  const createGroup = () => {
    if (!newGroup.name.trim() || !newGroup.description.trim()) return;

    const group: StudyGroup = {
      id: Date.now().toString(),
      name: newGroup.name,
      description: newGroup.description,
      subject: newGroup.subject,
      memberCount: 1,
      messages: [],
      createdAt: new Date()
    };

    setGroups(prev => [group, ...prev]);
    setNewGroup({ name: "", description: "", subject: "Computer Science" });
    setIsCreatingGroup(false);
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !activeGroup) return;

    const message: Message = {
      id: Date.now().toString(),
      userId: "currentUser",
      userName: "You",
      content: newMessage,
      timestamp: new Date()
    };

    setGroups(prev => prev.map(group => 
      group.id === activeGroup.id 
        ? { ...group, messages: [...group.messages, message] }
        : group
    ));

    setActiveGroup(prev => prev ? { ...prev, messages: [...prev.messages, message] } : null);
    setNewMessage("");
  };

  const joinGroup = (groupId: string) => {
    setGroups(prev => prev.map(group => 
      group.id === groupId 
        ? { ...group, memberCount: group.memberCount + 1 }
        : group
    ));
  };

  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (activeGroup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-slate-100">
        <div className="max-w-6xl mx-auto p-6">
          {/* Group Header */}
          <Card className="mb-6 bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3">
                    <Hash className="h-6 w-6 text-pink-600" />
                    {activeGroup.name}
                  </CardTitle>
                  <p className="text-slate-600 mt-2">{activeGroup.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <Badge variant="outline">{activeGroup.subject}</Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      {activeGroup.memberCount} members
                    </div>
                  </div>
                </div>
                <Button variant="outline" onClick={() => setActiveGroup(null)}>
                  Back to Groups
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Chat Messages */}
          <Card className="bg-white">
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {activeGroup.messages.length === 0 ? (
                  <div className="text-center text-slate-500 py-12">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                    <p>No messages yet. Be the first to start the conversation!</p>
                  </div>
                ) : (
                  activeGroup.messages.map((message) => (
                    <div key={message.id} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {message.userName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{message.userName}</span>
                          <span className="text-xs text-slate-500">
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-slate-700">{message.content}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-3">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} disabled={!newMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-pink-600 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Study Groups</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join study groups, collaborate with peers, and share knowledge
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button onClick={() => setIsCreatingGroup(true)} className="bg-pink-600 hover:bg-pink-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>

        {/* Create Group Form */}
        {isCreatingGroup && (
          <Card className="mb-6 bg-white border-2 border-pink-200">
            <CardHeader>
              <CardTitle>Create New Study Group</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Group name..."
                value={newGroup.name}
                onChange={(e) => setNewGroup(prev => ({ ...prev, name: e.target.value }))}
              />
              <Textarea
                placeholder="Group description..."
                value={newGroup.description}
                onChange={(e) => setNewGroup(prev => ({ ...prev, description: e.target.value }))}
              />
              <select
                value={newGroup.subject}
                onChange={(e) => setNewGroup(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-3 py-2 border border-slate-300 rounded-md"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
              <div className="flex gap-2">
                <Button onClick={createGroup}>Create Group</Button>
                <Button variant="outline" onClick={() => setIsCreatingGroup(false)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <Card key={group.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{group.name}</CardTitle>
                    <p className="text-slate-600 text-sm mt-2 line-clamp-2">{group.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline">{group.subject}</Badge>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Users className="h-4 w-4" />
                    {group.memberCount}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {group.messages.length > 0 && (
                    <div className="text-sm text-slate-500">
                      Last activity: {formatTime(group.messages[group.messages.length - 1].timestamp)}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => setActiveGroup(group)}
                      className="flex-1"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Join Chat
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => joinGroup(group.id)}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-500 mb-2">No groups found</h3>
            <p className="text-slate-400">Create your first study group to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};
