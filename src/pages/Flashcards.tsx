
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Zap, Plus, RotateCcw, Check, X, Brain } from "lucide-react";

interface Flashcard {
  id: string;
  front: string;
  back: string;
  subject: string;
  difficulty: "easy" | "medium" | "hard";
  lastReviewed: Date;
  nextReview: Date;
  timesReviewed: number;
  correctCount: number;
  incorrectCount: number;
}

export const Flashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [studyMode, setStudyMode] = useState(false);
  const [currentCard, setCurrentCard] = useState<Flashcard | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [newCard, setNewCard] = useState<{
    front: string;
    back: string;
    subject: string;
    difficulty: "easy" | "medium" | "hard";
  }>({
    front: "",
    back: "",
    subject: "Computer Science",
    difficulty: "medium"
  });

  const subjects = ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"];

  // Load flashcards from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('gateWithMe_flashcards');
    if (saved) {
      const parsed = JSON.parse(saved);
      setFlashcards(parsed.map((card: any) => ({
        ...card,
        lastReviewed: new Date(card.lastReviewed),
        nextReview: new Date(card.nextReview)
      })));
    }
  }, []);

  // Save flashcards to localStorage
  useEffect(() => {
    if (flashcards.length > 0) {
      localStorage.setItem('gateWithMe_flashcards', JSON.stringify(flashcards));
    }
  }, [flashcards]);

  const createFlashcard = () => {
    if (!newCard.front.trim() || !newCard.back.trim()) return;

    const flashcard: Flashcard = {
      id: Date.now().toString(),
      front: newCard.front,
      back: newCard.back,
      subject: newCard.subject,
      difficulty: newCard.difficulty,
      lastReviewed: new Date(),
      nextReview: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
      timesReviewed: 0,
      correctCount: 0,
      incorrectCount: 0
    };

    setFlashcards(prev => [flashcard, ...prev]);
    setNewCard({ front: "", back: "", subject: "Computer Science", difficulty: "medium" });
    setIsCreating(false);
  };

  const startStudySession = () => {
    const dueCards = flashcards.filter(card => card.nextReview <= new Date());
    if (dueCards.length > 0) {
      setCurrentCard(dueCards[0]);
      setStudyMode(true);
      setShowAnswer(false);
    }
  };

  const handleAnswer = (correct: boolean) => {
    if (!currentCard) return;

    const now = new Date();
    let nextReviewInterval = 1; // days

    if (correct) {
      // Spaced repetition algorithm (simplified)
      const factor = currentCard.correctCount + 1;
      nextReviewInterval = Math.min(factor * factor, 30); // Max 30 days
    } else {
      nextReviewInterval = 1; // Review again tomorrow
    }

    const updatedCard: Flashcard = {
      ...currentCard,
      lastReviewed: now,
      nextReview: new Date(now.getTime() + nextReviewInterval * 24 * 60 * 60 * 1000),
      timesReviewed: currentCard.timesReviewed + 1,
      correctCount: correct ? currentCard.correctCount + 1 : currentCard.correctCount,
      incorrectCount: correct ? currentCard.incorrectCount : currentCard.incorrectCount + 1
    };

    setFlashcards(prev => prev.map(card => 
      card.id === currentCard.id ? updatedCard : card
    ));

    // Get next card
    const remaining = flashcards.filter(card => 
      card.id !== currentCard.id && card.nextReview <= new Date()
    );

    if (remaining.length > 0) {
      setCurrentCard(remaining[0]);
      setShowAnswer(false);
    } else {
      setStudyMode(false);
      setCurrentCard(null);
    }
  };

  const dueCards = flashcards.filter(card => card.nextReview <= new Date());
  const totalCards = flashcards.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-yellow-600 rounded-full">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Spaced Repetition Flashcards</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Master GATE concepts with intelligent spaced repetition system
          </p>
        </div>

        {!studyMode ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600">{totalCards}</div>
                  <div className="text-slate-600">Total Cards</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-red-600">{dueCards.length}</div>
                  <div className="text-slate-600">Due for Review</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {flashcards.reduce((acc, card) => acc + card.correctCount, 0)}
                  </div>
                  <div className="text-slate-600">Correct Answers</div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8 justify-center">
              <Button 
                onClick={startStudySession}
                disabled={dueCards.length === 0}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Brain className="h-4 w-4 mr-2" />
                Start Study Session ({dueCards.length})
              </Button>
              <Button 
                onClick={() => setIsCreating(true)}
                variant="outline"
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Flashcard
              </Button>
            </div>

            {/* Create Card Form */}
            {isCreating && (
              <Card className="mb-8 bg-white border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle>Create New Flashcard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Front (Question)</label>
                    <Textarea
                      placeholder="Enter the question or prompt..."
                      value={newCard.front}
                      onChange={(e) => setNewCard(prev => ({ ...prev, front: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Back (Answer)</label>
                    <Textarea
                      placeholder="Enter the answer or explanation..."
                      value={newCard.back}
                      onChange={(e) => setNewCard(prev => ({ ...prev, back: e.target.value }))}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select
                        value={newCard.subject}
                        onChange={(e) => setNewCard(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      >
                        {subjects.map(subject => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Difficulty</label>
                      <select
                        value={newCard.difficulty}
                        onChange={(e) => setNewCard(prev => ({ ...prev, difficulty: e.target.value as "easy" | "medium" | "hard" }))}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md"
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={createFlashcard}>Create Flashcard</Button>
                    <Button variant="outline" onClick={() => setIsCreating(false)}>Cancel</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Flashcards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flashcards.map((card) => (
                <Card key={card.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg line-clamp-2">{card.front}</CardTitle>
                      <Badge 
                        variant={card.difficulty === "easy" ? "secondary" : card.difficulty === "medium" ? "default" : "destructive"}
                      >
                        {card.difficulty}
                      </Badge>
                    </div>
                    <Badge variant="outline">{card.subject}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{card.back}</p>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div>Reviewed: {card.timesReviewed} times</div>
                      <div>Success Rate: {card.timesReviewed > 0 ? Math.round((card.correctCount / card.timesReviewed) * 100) : 0}%</div>
                      <div>Next Review: {card.nextReview.toLocaleDateString()}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          /* Study Mode */
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-between mb-4">
                  <Badge>{currentCard?.subject}</Badge>
                  <Badge variant={currentCard?.difficulty === "easy" ? "secondary" : currentCard?.difficulty === "medium" ? "default" : "destructive"}>
                    {currentCard?.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">
                  {showAnswer ? "Answer" : "Question"}
                </CardTitle>
              </CardHeader>
              <CardContent className="min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg leading-relaxed">
                    {showAnswer ? currentCard?.back : currentCard?.front}
                  </p>
                </div>
              </CardContent>
              <div className="p-6 border-t">
                {!showAnswer ? (
                  <Button 
                    onClick={() => setShowAnswer(true)}
                    className="w-full"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Show Answer
                  </Button>
                ) : (
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => handleAnswer(false)}
                      variant="destructive"
                      className="flex-1"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Incorrect
                    </Button>
                    <Button 
                      onClick={() => handleAnswer(true)}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Correct
                    </Button>
                  </div>
                )}
                <Button 
                  onClick={() => setStudyMode(false)}
                  variant="outline"
                  className="w-full mt-4"
                >
                  End Session
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
