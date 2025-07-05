import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchMotivationalQuote = async () => {
  try {
    const response = await fetch('/api/ai/motivational-quote');
    if (!response.ok) {
      throw new Error('Failed to fetch motivational quote');
    }
    const data = await response.json();
    return data.quote;
  } catch (error) {
    console.error('Error fetching motivational quote:', error);
    return null;
  }
};

export const useAIMotivationalQuote = () => {
  const { data: quote, isLoading, error } = useQuery({
    queryKey: ['motivationalQuote'],
    queryFn: fetchMotivationalQuote,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 2
  });

  return {
    quote,
    isLoading,
    error: error as Error | null
  };
}; 
 
 