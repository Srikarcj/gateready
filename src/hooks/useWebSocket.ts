import { useEffect, useState, useRef, useCallback } from 'react';

export interface WebSocketMessage {
  type: string;
  data: any;
}

interface UseWebSocketProps {
  url?: string;
  onMessage?: (message: WebSocketMessage) => void;
  onError?: (error: Error) => void;
  onOpen?: () => void;
  onClose?: () => void;
  reconnectAttempts?: number;
  reconnectInterval?: number;
}

interface WebSocketState {
  socket: WebSocket | null;
  isConnected: boolean;
  error: Error | null;
  sendMessage: (data: any) => boolean;
  reconnect: () => void;
}

export const useWebSocket = ({
  url = 'ws://localhost:8080',
  onMessage,
  onError,
  onOpen,
  onClose,
  reconnectAttempts = 3,
  reconnectInterval = 3000,
}: UseWebSocketProps = {}): WebSocketState => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const reconnectCount = useRef(0);
  const reconnectTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(true);
  const messageHandlerRef = useRef(onMessage);

  useEffect(() => {
    messageHandlerRef.current = onMessage;
  }, [onMessage]);

  const closeConnection = useCallback((): void => {
    if (socket) {
      socket.onclose = null;
      socket.close();
      setSocket(null);
      setIsConnected(false);
    }
  }, [socket]);

  const connect = useCallback((): (() => void) | undefined => {
    if (!url) {
      const error = new Error('WebSocket URL is required');
      console.error(error);
      setError(error);
      onError?.(error);
      return;
    }

    closeConnection(); 

    console.log(`Attempting to connect to WebSocket at ${url}...`);
    
    try {
      // Add timestamp to prevent caching issues
      const wsUrl = new URL(url);
      wsUrl.searchParams.set('t', Date.now().toString());
      
      const ws = new WebSocket(wsUrl.toString());
      
      // Set binary type to 'arraybuffer' for better compatibility
      ws.binaryType = 'arraybuffer';

      ws.onopen = (): void => {
        if (!isMounted.current) return;
        console.log('WebSocket connection opened');
        reconnectCount.current = 0;
        setIsConnected(true);
        setError(null);
        onOpen?.();
      };

      ws.onclose = (event: CloseEvent): void => {
        if (!isMounted.current) return;
        console.log('WebSocket connection closed', event.code, event.reason);
        setIsConnected(false);

        if (reconnectCount.current < reconnectAttempts) {
          reconnectCount.current += 1;
          console.log(`Attempting to reconnect (${reconnectCount.current}/${reconnectAttempts})...`);

          if (reconnectTimeout.current) {
            clearTimeout(reconnectTimeout.current);
          }

          reconnectTimeout.current = setTimeout(() => {
            if (isMounted.current) {
              connect();
            }
          }, reconnectInterval);
        } else if (reconnectCount.current === reconnectAttempts) {
          const error = new Error('Max reconnection attempts reached');
          setError(error);
          onError?.(error);
        }

        onClose?.();
      };

      ws.onerror = (event: Event): void => {
        if (!isMounted.current) return;
        const error = new Error('WebSocket connection error');
        console.error('WebSocket error:', event);
        setError(error);
        onError?.(error);
      };

      ws.onmessage = (event: MessageEvent): void => {
        if (!isMounted.current) return;
        try {
          const message = JSON.parse(event.data);
          console.log('WebSocket message received:', message);
          messageHandlerRef.current?.(message);
        } catch (err) {
          console.error('Error parsing WebSocket message:', err);
        }
      };

      setSocket(ws);

      return (): void => {
        ws.close();
      };
    } catch (err) {
      console.error('Error creating WebSocket:', err);
      const error = err instanceof Error ? err : new Error('Failed to create WebSocket');
      setError(error);
      onError?.(error);
    }
  }, [url, reconnectAttempts, reconnectInterval, onOpen, onError, onClose, closeConnection]);

  const reconnect = useCallback((): void => {
    if (reconnectTimeout.current) {
      clearTimeout(reconnectTimeout.current);
      reconnectTimeout.current = null;
    }
    reconnectCount.current = 0;
    closeConnection();
    connect();
  }, [closeConnection, connect]);

  const sendMessage = useCallback((data: any): boolean => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      try {
        const message = JSON.stringify(data);
        socket.send(message);
        return true;
      } catch (err) {
        console.error('Error sending WebSocket message:', err);
        const error = err instanceof Error ? err : new Error('Failed to send message');
        setError(error);
        onError?.(error);
        return false;
      }
    }
    return false;
  }, [socket, onError]);

  useEffect(() => {
    isMounted.current = true;
    const cleanup = connect();

    return (): void => {
      isMounted.current = false;
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
        reconnectTimeout.current = null;
      }
      cleanup?.();
      closeConnection();
    };
  }, [connect, closeConnection]);

  return {
    socket,
    isConnected,
    error,
    sendMessage,
    reconnect,
  };
};

export default useWebSocket;
