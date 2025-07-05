import { WebSocketServer } from 'ws';
import http from 'http';

// Create an HTTP server for CORS
const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('WebSocket server is running');
});

// Create a WebSocket server
const wss = new WebSocketServer({ 
    server,
    path: '/ws',
    clientTracking: true,
    perMessageDeflate: {
        zlibDeflateOptions: {
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        clientNoContextTakeover: true,
        serverNoContextTakeover: true,
        serverMaxWindowBits: 10,
        concurrencyLimit: 10,
        threshold: 1024
    }
});

// Start the HTTP server
const PORT = 3001;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
    console.log(`WebSocket server started on ws://localhost:${PORT}/ws`);
});

// Store connected clients
const clients = new Set();

wss.on('connection', (ws, req) => {
    const clientId = Date.now();
    console.log(`[${new Date().toISOString()}] New client connected (ID: ${clientId})`);
    console.log(`[${new Date().toISOString()}] Headers:`, req.headers);
    console.log(`[${new Date().toISOString()}] URL:`, req.url);
    
    clients.add(ws);
    
    // Set up a ping-pong mechanism to detect dead connections
    let isAlive = true;
    const pingInterval = setInterval(() => {
        if (!isAlive) {
            console.log(`[${new Date().toISOString()}] Client ${clientId} is not responding, terminating connection`);
            return ws.terminate();
        }
        isAlive = false;
        ws.ping();
    }, 30000);
    
    ws.on('pong', () => {
        isAlive = true;
    });

    // Send a welcome message to the client
    ws.send(JSON.stringify({
        type: 'connection_established',
        message: 'Successfully connected to WebSocket server',
        timestamp: new Date().toISOString()
    }));

    // Handle messages from the client
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            console.log('Received:', data);
            
            // Echo the message back to the client
            ws.send(JSON.stringify({
                type: 'echo',
                data: data,
                timestamp: new Date().toISOString()
            }));
        } catch (error) {
            console.error('Error processing message:', error);
        }
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

// Handle process termination
process.on('SIGINT', () => {
    console.log('Shutting down WebSocket server...');
    wss.close(() => {
        console.log('WebSocket server closed');
        process.exit(0);
    });
});
