import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext({
  socket: null,
  isConnected: false,
});

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);
  const isInitialConnect = useRef(true);

  useEffect(() => {
    // Determine backend URL (fallback to localhost:5000 in dev)
    const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    // Connect to Socket.IO backend
    const socketInstance = io(backendUrl, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 20,
      reconnectionDelay: 2000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    socketInstance.on('connect', () => {
      console.log('Real-time connection active:', socketInstance.id);
      setIsConnected(true);
      
      // If it is a reconnection (not the first connection), emit a refresh event
      if (!isInitialConnect.current) {
        console.log('Reconnected to server, triggering global refetch...');
        socketInstance.emit('website:request-refresh');
        
        // Dispatch local event so components can hook into it
        window.dispatchEvent(new CustomEvent('socket_reconnected'));
      }
      isInitialConnect.current = false;
    });

    socketInstance.on('disconnect', () => {
      console.log('Real-time connection lost, attempting reconnect...');
      setIsConnected(false);
    });

    socketInstance.on('connect_error', () => {
      // Quietly log connection errors to avoid cluttered console warnings
      setIsConnected(false);
    });

    socketRef.current = socketInstance;

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}
