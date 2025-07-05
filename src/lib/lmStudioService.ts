import axios from 'axios';

interface LMStudioResponse {
  text: string;
  error?: string;
}

class LMStudioService {
  private baseUrl = 'https://api.lmstudio.cloud/v1';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateText(prompt: string, model: string = 'mistral'): Promise<string> {
    try {
      const response = await axios.post<LMStudioResponse>(
        `${this.baseUrl}/generate`,
        {
          prompt,
          model,
          max_tokens: 1000,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      return response.data.text;
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }
}

export default LMStudioService; 