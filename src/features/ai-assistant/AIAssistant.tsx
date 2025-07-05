import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, TextField, Button, IconButton, CircularProgress, Chip, Avatar, Card, CardContent, Grid, Tooltip, Alert, Snackbar } from '@mui/material';
import { Mic, MicOff, Send, Translate, VolumeUp, VolumeOff, History, Delete, ContentCopy, Check } from '@mui/icons-material';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  language?: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const speechSynthesis = window.speechSynthesis;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
      language: selectedLanguage.code
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: input,
          parameters: {
            max_length: 1000,
            temperature: 0.7,
            top_p: 0.9,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data[0].generated_text,
        timestamp: new Date(),
        language: selectedLanguage.code
      };

      setMessages(prev => [...prev, assistantMessage]);
      speakText(data[0].generated_text);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setError('Failed to get response. Please try again.');
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.',
        timestamp: new Date(),
        language: selectedLanguage.code
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text: string) => {
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage.code;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ language: selectedLanguage.code });
    }
  };

  const clearChat = () => {
    setMessages([]);
    resetTranscript();
    stopSpeaking();
  };

  const copyToClipboard = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <Box sx={{ p: 3, maxWidth: '1200px', margin: '0 auto' }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>AI</Avatar>
          AI Assistant
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {languages.map((lang) => (
            <Chip
              key={lang.code}
              label={`${lang.flag} ${lang.name}`}
              onClick={() => setSelectedLanguage(lang)}
              color={selectedLanguage.code === lang.code ? 'primary' : 'default'}
              variant={selectedLanguage.code === lang.code ? 'filled' : 'outlined'}
              sx={{ m: 0.5 }}
            />
          ))}
        </Box>
      </Paper>

      <Box sx={{ height: '60vh', overflowY: 'auto', mb: 3, p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
        {messages.map((message) => (
          <Card 
            key={message.id} 
            sx={{ 
              mb: 2, 
              maxWidth: '80%', 
              ml: message.role === 'user' ? 'auto' : 0,
              bgcolor: message.role === 'user' ? 'primary.light' : 'background.paper',
              color: message.role === 'user' ? 'primary.contrastText' : 'text.primary',
              borderRadius: 2,
              boxShadow: 2
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: message.role === 'user' ? 'secondary.main' : 'primary.main',
                      mr: 1,
                      width: 32,
                      height: 32
                    }}
                  >
                    {message.role === 'user' ? 'U' : 'AI'}
                  </Avatar>
                  <Typography variant="subtitle2" color="text.secondary">
                    {message.role === 'user' ? 'You' : 'AI Assistant'} • {message.timestamp.toLocaleTimeString()}
                  </Typography>
                </Box>
                <Tooltip title={copiedMessageId === message.id ? 'Copied!' : 'Copy to clipboard'}>
                  <IconButton
                    size="small"
                    onClick={() => copyToClipboard(message.content, message.id)}
                    sx={{ ml: 1 }}
                  >
                    {copiedMessageId === message.id ? <Check fontSize="small" /> : <ContentCopy fontSize="small" />}
                  </IconButton>
                </Tooltip>
              </Box>
              <ReactMarkdown
                components={{
                  code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{ margin: 0 }}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {message.content}
              </ReactMarkdown>
            </CardContent>
          </Card>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      <Paper elevation={3} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center' }}>
          <Box sx={{ width: { xs: '100%', sm: '66.67%' } }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              variant="outlined"
              disabled={isLoading}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '33.33%' } }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {browserSupportsSpeechRecognition && (
                <Tooltip title={listening ? 'Stop listening' : 'Start voice input'}>
                  <IconButton
                    color={listening ? 'error' : 'primary'}
                    onClick={toggleListening}
                    disabled={isLoading}
                  >
                    {listening ? <MicOff /> : <Mic />}
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title={isSpeaking ? 'Stop speaking' : 'Read last message'}>
                <IconButton
                  color={isSpeaking ? 'error' : 'primary'}
                  onClick={isSpeaking ? stopSpeaking : () => speakText(messages[messages.length - 1]?.content)}
                  disabled={!messages.length || isLoading}
                >
                  {isSpeaking ? <VolumeOff /> : <VolumeUp />}
                </IconButton>
              </Tooltip>
              <Tooltip title="Clear chat">
                <IconButton
                  color="primary"
                  onClick={clearChat}
                  disabled={!messages.length || isLoading}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
              <Button
                variant="contained"
                endIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                sx={{ minWidth: 100 }}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AIAssistant; 
 
 