import { Box, Divider, Drawer, IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useContext } from 'react';
import LayoutContext from '../../context/LayoutContext';
import { Link } from 'react-router-dom';

interface SidebarProps {
    content?: React.ReactNode[];
}

const DrawerHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 3px 5px;
`;

export const SidebarListContainer = styled.div`
    height: auto;
    max-height: calc(50vh - 23px);
    display: flex;
    flex-direction: column;
`;

export const SidebarListTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 0;
`;

export const SidebarList = styled.ul`
    padding: 0;
    list-style: none;
    height: 100%;
`;

export const SidebarListElement = styled.li`
    padding: 5px 0;
`;

export const SidebarButton = styled(Link)`
    font-size: 16px;
    font-weight: 400;
    outline: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #000;
    text-decoration: none;

    :hover {
        font-weight: 600;
    }
`;

const Sidebar: React.FC<SidebarProps> = ({ content }) => {
    const { open, closeSidebarHandler, sidebarWidth } = useContext(LayoutContext);

    const sidebarContent = content?.map((item, index) => (
        <Box key={index}>
            <Box sx={{ padding: '10px 20px' }}>{item}</Box>
            <Divider />
        </Box>
    ));

    return (
        <Drawer variant="persistent" anchor="left" open={open}>
            <Box sx={{ width: sidebarWidth }}>
                <DrawerHeader>
                    <IconButton onClick={closeSidebarHandler}>
                        <ChevronLeft />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {sidebarContent}
            </Box>
        </Drawer>
    );
};

export default Sidebar;
