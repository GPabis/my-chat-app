import { SidebarList, SidebarListContainer, SidebarListElement, SidebarListTitle } from '../components/Sidebar/Sidebar';
import { usersMock } from '../mock/users';
import { AvatarContainer, UserName } from './Chat';
import ScrollArea from 'react-scrollbar';
import styled from '@emotion/styled';

const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

const UserStatus = styled.div<{ status: 'online' | 'offline' }>`
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${({ status }) => (status === 'online' ? '#00ff00' : '#ff0000')};
`;

const UsersList: React.FC = () => {
    const users = usersMock.map((user) => (
        <SidebarListElement>
            <UserContainer>
                <AvatarContainer>
                    <img src={user.userAvatar} alt={`${user.userName} Avatar`} />
                    <UserStatus status={user.userStatus} />
                </AvatarContainer>
                <UserName>{user.userName}</UserName>
            </UserContainer>
        </SidebarListElement>
    ));

    return (
        <SidebarListContainer>
            <SidebarListTitle>Users</SidebarListTitle>
            <ScrollArea speed={0.2}>
                <SidebarList>{users}</SidebarList>
            </ScrollArea>
        </SidebarListContainer>
    );
};

export default UsersList;
