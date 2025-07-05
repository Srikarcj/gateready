
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { User, Mail, Calendar, Target, BookOpen, Trophy, Settings, Edit3 } from "lucide-react";
import { useUser, UserButton } from "@clerk/clerk-react";

interface UserProfile {
  examYear: string;
  targetScore: number;
  subjects: string[];
  bio: string;
  studyHours: number;
  streak: number;
  totalNotes: number;
  testsCompleted: number;
  flashcardsReviewed: number;
}

export const Profile = () => {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    examYear: "2025",
    targetScore: 650,
    subjects: ["Computer Science"],
    bio: "GATE aspirant preparing for Computer Science Engineering",
    studyHours: 0,
    streak: 0,
    totalNotes: 0,
    testsCompleted: 0,
    flashcardsReviewed: 0
  });

  const [editingProfile, setEditingProfile] = useState<UserProfile>(profile);

  const subjects = ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"];

  // Load profile from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('gateWithMe_profile');
    if (saved) {
      const parsed = JSON.parse(saved);
      setProfile(parsed);
      setEditingProfile(parsed);
    }
  }, []);

  // Calculate stats from localStorage
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('gateWithMe_notes') || '[]');
    const testResults = JSON.parse(localStorage.getItem('gateWithMe_testResults') || '[]');
    const flashcards = JSON.parse(localStorage.getItem('gateWithMe_flashcards') || '[]');

    const flashcardsReviewed = flashcards.reduce((acc: number, card: any) => acc + (card.timesReviewed || 0), 0);

    setProfile(prev => ({
      ...prev,
      totalNotes: notes.length,
      testsCompleted: testResults.length,
      flashcardsReviewed: flashcardsReviewed,
      studyHours: Math.floor((notes.length * 0.5) + (testResults.length * 1) + (flashcardsReviewed * 0.1)),
      streak: Math.min(7, notes.length + testResults.length) // Simplified streak calculation
    }));
  }, []);

  // Save profile to localStorage
  useEffect(() => {
    localStorage.setItem('gateWithMe_profile', JSON.stringify(profile));
  }, [profile]);

  const saveProfile = () => {
    setProfile(editingProfile);
    setIsEditing(false);
  };

  const achievements = [
    { title: "First Note", description: "Created your first study note", completed: profile.totalNotes > 0 },
    { title: "Test Taker", description: "Completed your first mock test", completed: profile.testsCompleted > 0 },
    { title: "Flashcard Master", description: "Reviewed 50+ flashcards", completed: profile.flashcardsReviewed >= 50 },
    { title: "Study Streak", description: "Maintained a 7-day study streak", completed: profile.streak >= 7 },
    { title: "Dedicated Student", description: "Studied for 20+ hours", completed: profile.studyHours >= 20 }
  ];

  const progressToTarget = Math.min((profile.studyHours / 100) * 100, 100); // Simplified progress calculation

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <User className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Manage your profile and track your GATE preparation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <User className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <UserButton />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
                    >
                      <Edit3 className="h-4 w-4 mr-2" />
                      {isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback className="text-lg">
                      {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{user?.fullName}</h2>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="h-4 w-4" />
                      {user?.primaryEmailAddress?.emailAddress}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      GATE Exam Year
                    </label>
                    {isEditing ? (
                      <select
                        value={editingProfile.examYear}
                        onChange={(e) => setEditingProfile(prev => ({ ...prev, examYear: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      >
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                    ) : (
                      <div className="px-3 py-2 bg-slate-50 rounded-md">{profile.examYear}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Target Score
                    </label>
                    {isEditing ? (
                      <Input
                        type="number"
                        value={editingProfile.targetScore}
                        onChange={(e) => setEditingProfile(prev => ({ ...prev, targetScore: parseInt(e.target.value) || 0 }))}
                        min="0"
                        max="1000"
                      />
                    ) : (
                      <div className="px-3 py-2 bg-slate-50 rounded-md">{profile.targetScore}</div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subjects
                  </label>
                  {isEditing ? (
                    <div className="space-y-2">
                      {subjects.map(subject => (
                        <label key={subject} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={editingProfile.subjects.includes(subject)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setEditingProfile(prev => ({
                                  ...prev,
                                  subjects: [...prev.subjects, subject]
                                }));
                              } else {
                                setEditingProfile(prev => ({
                                  ...prev,
                                  subjects: prev.subjects.filter(s => s !== subject)
                                }));
                              }
                            }}
                            className="mr-2"
                          />
                          {subject}
                        </label>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.subjects.map(subject => (
                        <Badge key={subject} variant="outline">{subject}</Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Bio
                  </label>
                  {isEditing ? (
                    <Textarea
                      value={editingProfile.bio}
                      onChange={(e) => setEditingProfile(prev => ({ ...prev, bio: e.target.value }))}
                      placeholder="Tell us about your GATE preparation journey..."
                    />
                  ) : (
                    <div className="px-3 py-2 bg-slate-50 rounded-md">{profile.bio}</div>
                  )}
                </div>

                {isEditing && (
                  <div className="flex gap-2">
                    <Button onClick={saveProfile}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-5 w-5" />
                  GATE Preparation Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-slate-600">{Math.round(progressToTarget)}%</span>
                    </div>
                    <Progress value={progressToTarget} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{profile.studyHours}</div>
                      <div className="text-sm text-slate-600">Study Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{profile.streak}</div>
                      <div className="text-sm text-slate-600">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{profile.totalNotes}</div>
                      <div className="text-sm text-slate-600">Notes Created</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{profile.testsCompleted}</div>
                      <div className="text-sm text-slate-600">Tests Completed</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        achievement.completed ? 'bg-green-50 border border-green-200' : 'bg-slate-50'
                      }`}
                    >
                      <div className={`p-2 rounded-full ${
                        achievement.completed ? 'bg-green-500' : 'bg-slate-300'
                      }`}>
                        <Trophy className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-slate-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-5 w-5" />
                  Quick Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Flashcards Reviewed</span>
                    <span className="font-medium">{profile.flashcardsReviewed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Avg. Test Score</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Member Since</span>
                    <span className="font-medium">
                      {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Today'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
