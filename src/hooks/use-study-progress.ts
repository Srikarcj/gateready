import { useQuery } from '@tanstack/react-query';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

interface StudyProgress {
  topicsCompleted: number;
  totalTopics: number;
  mockTestStats: {
    totalTests: number;
    averageScore: number;
    improvement: number;
  };
  aiPerformanceScore: number;
  weeklyProgress: Array<{
    date: string;
    score: number;
  }>;
}

const fetchStudyProgress = async (supabase: any): Promise<StudyProgress> => {
  // Fetch topics progress
  const { data: topicsData, error: topicsError } = await supabase
    .from('topics')
    .select('*');

  if (topicsError) throw topicsError;

  // Fetch mock test stats
  const { data: mockTestData, error: mockTestError } = await supabase
    .from('mock_tests')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  if (mockTestError) throw mockTestError;

  // Calculate mock test stats
  const totalTests = mockTestData.length;
  const averageScore = mockTestData.reduce((acc: number, test: any) => acc + test.score, 0) / totalTests;
  const improvement = mockTestData.length >= 2
    ? ((mockTestData[0].score - mockTestData[1].score) / mockTestData[1].score) * 100
    : 0;

  // Generate weekly progress data
  const weeklyProgress = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return {
      date: date.toISOString().split('T')[0],
      score: Math.floor(Math.random() * 30) + 70 // Placeholder data
    };
  }).reverse();

  // Calculate AI performance score (placeholder)
  const aiPerformanceScore = Math.floor(Math.random() * 20) + 80;

  return {
    topicsCompleted: topicsData.filter((topic: any) => topic.completed).length,
    totalTopics: topicsData.length,
    mockTestStats: {
      totalTests,
      averageScore,
      improvement
    },
    aiPerformanceScore,
    weeklyProgress
  };
};

export const useStudyProgress = () => {
  const supabase = useSupabaseClient();

  const { data: progress, isLoading, error } = useQuery({
    queryKey: ['studyProgress'],
    queryFn: () => fetchStudyProgress(supabase),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2
  });

  return {
    progress,
    isLoading,
    error: error as Error | null
  };
}; 