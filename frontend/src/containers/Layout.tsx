import { Box } from '@mui/material';
import { useContext } from 'react';
import { Main } from '../components/Content';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import LayoutContext from '../context/LayoutContext';
import RoomsList from './RoomsList';
import UsersList from './UsersList';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { open, sidebarWidth } = useContext(LayoutContext);

    console.log(open);

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar content={[<RoomsList />, <UsersList />]} />
            <Main sidebarWidth={sidebarWidth} open={open}>
                <Header />
                {children}
            </Main>
        </Box>
    );
};

export default Layout;
