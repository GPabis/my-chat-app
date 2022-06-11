import { Server, Socket } from 'socket.io';

const messageHandler = (io: Server, socket: Socket) => {
    const sendMessage = (payload: string) => {
        console.log(payload);
    };

    socket.on('message:send', sendMessage);
};

export default messageHandler;
