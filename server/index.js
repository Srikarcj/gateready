const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Enable CORS
app.use(cors());

// Store test sessions
const testSessions = new Map();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// WebSocket connection handler
wss.on('connection', (ws, req) => {
  try {
    const url = new URL(req.url, 'http://localhost:8080');
    const testId = url.pathname.split('/').pop();
    
    console.log(`New connection for testId: ${testId}`);
    console.log('Connection URL:', req.url);

    // Initialize test session if it doesn't exist
    if (!testSessions.has(testId)) {
      testSessions.set(testId, {
        score: 0,
        correct: 0,
        wrong: 0,
        attempted: 0,
        unanswered: 0,
        timeSpent: 0,
        currentQuestion: 1,
        mcqCorrect: 0,
        mcqWrong: 0,
        natCorrect: 0,
        natWrong: 0,
        positiveMarks: 0,
        negativeMarks: 0
      });
    }

    // Handle messages from client
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);
        console.log('Received message:', data);
        const session = testSessions.get(testId);

        if (!session) {
          console.error('Session not found for testId:', testId);
          return;
        }

        switch (data.type) {
          case 'answer':
            // Handle MCQ and NAT answers
            if (data.questionType === 'MCQ') {
              if (data.isCorrect) {
                session.correct++;
                session.mcqCorrect++;
                session.positiveMarks += 1;
              } else {
                session.wrong++;
                session.mcqWrong++;
                session.negativeMarks -= 0.33; // GATE negative marking for MCQ
              }
            } else if (data.questionType === 'NAT') {
              if (data.isCorrect) {
                session.correct++;
                session.natCorrect++;
                session.positiveMarks += 1;
              } else {
                session.wrong++;
                session.natWrong++;
              }
            }
            session.attempted++;
            session.unanswered--;
            session.currentQuestion++;
            
            // Send updated score back to client
            ws.send(JSON.stringify({
              type: 'test_update',
              data: {
                ...session,
                timeSpent: session.timeSpent + 1, // Increment time
                questionsRemaining: session.unanswered
              }
            }));
            
            break;
          
          case 'time_update':
            session.timeSpent = data.time;
            break;

          case 'connect':
            console.log('Client connected:', data);
            break;

          default:
            console.log('Unknown message type:', data.type);
        }
      } catch (error) {
        console.error('Error processing message:', error);
        ws.close(1000, 'Error processing message');
      }
    });

    // Handle connection close
    ws.on('close', (code, reason) => {
      console.log(`Connection closed for testId: ${testId}`);
      console.log('Close code:', code, 'Reason:', reason);
    });

    // Handle errors
    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

  } catch (error) {
    console.error('Error setting up connection:', error);
  }
});

// Start server
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`WebSocket endpoint: ws://localhost:${PORT}/ws/test/{testId}`);
});
