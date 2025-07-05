const WebSocket = require('ws');

// Create a WebSocket server on port 3001
const wss = new WebSocket.Server({ port: 3001 });

console.log('WebSocket server started on ws://localhost:3001');

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    // Send a welcome message to the client
    ws.send(JSON.stringify({
        type: 'connection_established',
        message: 'Successfully connected to WebSocket server'
    }));

    // Handle messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message.toString());
        
        // Echo the message back to the client
        ws.send(JSON.stringify({
            type: 'echo',
            data: message.toString(),
            timestamp: new Date().toISOString()
        }));
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });

    // Handle errors
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server is running. Press Ctrl+C to stop.');
