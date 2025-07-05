import React from 'react';
import { User } from '@clerk/nextjs/server';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAIMotivationalQuote } from '@/hooks/use-ai-motivational-quote';

interface WelcomeSectionProps {
  user: User | null;
  quote: string | null;
  isLoading: boolean;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  user,
  quote,
  isLoading
}) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">
                {getGreeting()}, {user?.firstName || 'Student'}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Ready to ace your GATE preparation today?
              </p>
            </div>
          </div>

          {isLoading ? (
            <Skeleton className="h-20 w-full" />
          ) : quote ? (
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm italic">"{quote}"</p>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeSection; 
 
 