import Layout from './Layout';
import Chat from './Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route element={<Chat />} path="/room/:roomName" />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
