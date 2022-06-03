import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useContext } from 'react';
import LayoutContext from '../../context/LayoutContext';

const Header: React.FC = () => {
    const { openSidebarHandler } = useContext(LayoutContext);

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={openSidebarHandler}>
                    <Menu />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    My Chat App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
