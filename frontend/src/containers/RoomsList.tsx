import ScrollArea from 'react-scrollbar';
import {
    SidebarButton,
    SidebarList,
    SidebarListContainer,
    SidebarListElement,
    SidebarListTitle,
} from '../components/Sidebar/Sidebar';
import roomsMock from '../mock/rooms';

const RoomsList: React.FC = () => {
    const roomsElements = roomsMock.map((room) => (
        <SidebarListElement>
            <SidebarButton>{room.roomName}</SidebarButton>
        </SidebarListElement>
    ));

    return (
        <SidebarListContainer>
            <SidebarListTitle>Rooms</SidebarListTitle>
            <ScrollArea speed={0.2}>
                <SidebarList>{roomsElements}</SidebarList>
            </ScrollArea>
        </SidebarListContainer>
    );
};

export default RoomsList;
