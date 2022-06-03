import styled from '@emotion/styled';

interface MainProps {
    open: boolean;
    sidebarWidth: number;
}

const Main = styled.div<MainProps>`
    transition: all 0.2s;
    width: 100%;

    @media (min-width: 996px) {
        margin-left: ${({ open, sidebarWidth }) => (open ? `${sidebarWidth}px` : '0px')};
        width: ${({ open, sidebarWidth }) => (open ? `calc(100% - ${sidebarWidth}px)` : '100%')};
    }
`;

export default Main;
