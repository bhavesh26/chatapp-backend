
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express()
const server = createServer(app);
// Create a new Socket.IO instance
const io = new Server(server, {
    cors: {
      origin: "*", // Allow all origins (adjust for production)
      methods: ["GET", "POST"]
    }
  });
const onlineUsers = new Map();

io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);
    


  
    // Listen for a custom event (e.g., "message")
    socket.on("message", (data) => {
      console.log("Message received:", data);
      // Broadcast message to all connected clients
      io.emit("message", data);
    });
})
server.listen(3002, (()=> {
    console.log('server is crazy')
}))