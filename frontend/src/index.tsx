import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './containers/App';
import './index.css';
import { LayoutProvider } from './context/LayoutContext';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <LayoutProvider>
                <App />
            </LayoutProvider>
        </Provider>
    </React.StrictMode>,
);
