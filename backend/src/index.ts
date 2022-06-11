import express, { Request, Response } from 'express';
import { Server, Socket } from 'socket.io';
import messageHandler from './websockets/messageHandler';

const app = express();
const PORT = 3010;

const server = app.listen(PORT, () => {
    console.log(`Server Listen on port ${PORT}`);
});

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

const onConnection = (socket: Socket) => {
    console.log('new user connected');
    messageHandler(io, socket);
};

io.on('connection', onConnection);
