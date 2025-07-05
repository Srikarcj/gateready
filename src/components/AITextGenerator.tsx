import React, { useState } from 'react';
import OpenRouterService from '../lib/openRouterService';

const AVAILABLE_MODELS = [
  { id: 'mistralai/mistral-7b-instruct', name: 'Mistral 7B' },
  { id: 'google/gemma-7b-it', name: 'Gemma 7B' },
  { id: 'meta-llama/codellama-34b-instruct', name: 'CodeLlama 34B' },
  { id: 'anthropic/claude-3-opus', name: 'Claude 3 Opus' }
];

const AITextGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedModel, setSelectedModel] = useState(AVAILABLE_MODELS[0].id);

  // Initialize the service with your API key
  const openRouter = new OpenRouterService(process.env.VITE_OPENROUTER_API_KEY || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await openRouter.generateText(prompt, selectedModel);
      setResponse(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI Text Generator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="model" className="block text-sm font-medium mb-2">
            Select Model:
          </label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
          >
            {AVAILABLE_MODELS.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            Enter your prompt:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
            placeholder="Type your prompt here..."
          />
        </div>

        <button
          type="submit"
          disabled={loading || !prompt}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 hover:bg-blue-600 transition-colors"
        >
          {loading ? 'Generating...' : 'Generate Text'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Generated Response:</h3>
          <div className="p-3 bg-gray-50 rounded-md whitespace-pre-wrap">
            {response}
          </div>
        </div>
      )}
    </div>
  );
};

export default AITextGenerator; 