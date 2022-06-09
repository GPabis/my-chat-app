import Layout from './Layout';
import { io } from 'socket.io-client';
import Chat from './Chat';

const App: React.FC = () => {
    const socket = io('http://localhost:3010');

    socket.on('connect', () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    return (
        <Layout>
            <Chat />
        </Layout>
    );
};

export default App;
