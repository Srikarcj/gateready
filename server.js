const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { YoutubeTranscript } = require('youtube-transcript-api');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 3001;

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server, path: '/ws' });

// Store connected clients
const clients = new Set();

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');
  clients.add(ws);

  // Send a welcome message
  ws.send(JSON.stringify({ type: 'connection_established', message: 'Connected to WebSocket server' }));

  // Handle incoming messages
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      console.log('Received:', data);
      
      // Broadcast to all clients except the sender
      clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({
            type: 'broadcast',
            data: data,
            timestamp: new Date().toISOString()
          }));
        }
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    clients.delete(ws);
  });
});

// Middleware
app.use(cors());
app.use(express.json());

// Existing transcript endpoint
app.get('/api/transcript/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    res.json(transcript);
  } catch (error) {
    console.error('Error fetching transcript:', error);
    res.status(500).json({ error: 'Failed to fetch transcript' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server
server.listen(port, () => {
  console.log(`HTTP Server running at http://localhost:${port}`);
  console.log(`WebSocket Server running at ws://localhost:${port}/ws`);
});