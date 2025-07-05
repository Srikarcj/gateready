import axios from 'axios';

interface TranscriptSegment {
  text: string;
  duration: number;
  offset: number;
}

interface ErrorResponse {
  error: string;
  details: string;
}

export const getYouTubeTranscript = async (videoId: string): Promise<string> => {
  try {
    // Use a serverless function to fetch the transcript
    const response = await axios.post('http://localhost:3001/api/transcript', {
      videoId: videoId
    });

    if (!response.data || !response.data.transcript) {
      throw new Error('No transcript data received');
    }

    return response.data.transcript;
  } catch (error) {
    console.error('Error in proxy:', error);
    throw new Error('Failed to fetch transcript through proxy');
  }
};

export const generateSummary = async (text: string): Promise<string> => {
  try {
    // Simple text summarization algorithm
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const wordFrequencies: { [key: string]: number } = {};
    
    // Calculate word frequencies
    sentences.forEach(sentence => {
      const words = sentence.toLowerCase().split(/\s+/);
      words.forEach(word => {
        if (word.length > 3) {
          wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
        }
      });
    });

    // Score sentences based on word frequencies
    const sentenceScores = sentences.map(sentence => {
      const words = sentence.toLowerCase().split(/\s+/);
      const score = words.reduce((sum, word) => sum + (wordFrequencies[word] || 0), 0);
      return { sentence, score };
    });

    // Get top 5 sentences
    const topSentences = sentenceScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(item => item.sentence)
      .join('. ');

    return topSentences + '.';
  } catch (error) {
    console.error('Error generating summary:', error);
    throw new Error('Failed to generate summary');
  }
}; 