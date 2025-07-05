import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, Clock, CheckCircle2, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Flashcard {
  id: string;
  question: string;
  answer: string;
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  lastReviewed: string;
}

interface FlashcardQueueProps {
  flashcards?: Flashcard[];
  isLoading?: boolean;
}

export const FlashcardQueue: React.FC<FlashcardQueueProps> = ({
  flashcards: initialFlashcards = [],
  isLoading = false
}) => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'hard':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const handleMarkAsReviewed = () => {
    const updatedFlashcards = [...flashcards];
    updatedFlashcards[currentIndex] = {
      ...updatedFlashcards[currentIndex],
      lastReviewed: 'Just now'
    };
    setFlashcards(updatedFlashcards);
    handleNext();
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Flashcard Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!flashcards.length) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Flashcard Queue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">No flashcards available.</div>
        </CardContent>
      </Card>
    );
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Flashcard Queue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Flashcard */}
          <div className="p-4 rounded-lg border bg-muted/50">
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-muted-foreground">{currentFlashcard.subject}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                {currentFlashcard.difficulty}
              </span>
            </div>
            <h3 className="font-medium mb-2">{currentFlashcard.question}</h3>
            {showAnswer && (
              <p className="text-sm text-muted-foreground">{currentFlashcard.answer}</p>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <Button variant="outline" size="icon" onClick={handlePrevious} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{flashcards.length - currentIndex} cards remaining</span>
            </div>
            <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Review Button */}
          <Button className="w-full" onClick={handleMarkAsReviewed}>
            Review Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FlashcardQueue; 