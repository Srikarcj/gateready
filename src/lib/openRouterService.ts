import axios from 'axios';

interface OpenRouterResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: {
    message: string;
  };
}

class OpenRouterService {
  private baseUrl = 'https://openrouter.ai/api/v1';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateText(
    prompt: string,
    model: string = 'mistralai/mistral-7b-instruct'
  ): Promise<string> {
    try {
      const response = await axios.post<OpenRouterResponse>(
        `${this.baseUrl}/chat/completions`,
        {
          model,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'HTTP-Referer': window.location.origin,
            'X-Title': 'AI Text Generator'
          }
        }
      );

      if (response.data.error) {
        throw new Error(response.data.error.message);
      }

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }
}

export default OpenRouterService; 