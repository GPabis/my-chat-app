import { config } from 'dotenv';
import express from 'express';
import { Server, Socket } from 'socket.io';
import messageHandler from './websockets/messageHandler';
import loginRoute from './routes/auth/login';
import registerRoute from './routes/auth/register';
import cors from 'cors';
config();

const app = express();
const PORT = 3010;

app.use(cors());
app.use(express.json());
app.use(loginRoute);
app.use(registerRoute);

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
