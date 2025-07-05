import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Send, Loader2 } from 'lucide-react';

export const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice recognition start
      setTimeout(() => {
        setTranscript('What would you like to know about GATE preparation?');
      }, 1000);
    } else {
      setTranscript('');
    }
  };

  const handleSend = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setTranscript('Based on your current progress, I recommend focusing on Data Structures and Algorithms this week.');
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mic className="h-5 w-5" />
          Voice Assistant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Voice Input Area */}
          <div className="p-4 rounded-lg border bg-muted/50 min-h-[100px]">
            {transcript ? (
              <p className="text-sm">{transcript}</p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Click the microphone to start speaking...
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <Button 
              variant={isListening ? "destructive" : "default"}
              onClick={toggleListening}
              className="flex-1"
            >
              {isListening ? (
                <>
                  <MicOff className="h-4 w-4 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="h-4 w-4 mr-2" />
                  Start Listening
                </>
              )}
            </Button>
            
            <Button 
              onClick={handleSend}
              disabled={!transcript || isProcessing}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </>
              )}
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">
              Ask about GATE Syllabus
            </Button>
            <Button variant="outline" size="sm">
              Get Study Tips
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 