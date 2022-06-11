import styled from '@emotion/styled';
import stc from 'string-to-color';
import invert from 'invert-color';
import { Box, Button, TextField } from '@mui/material';
import { MessageProp } from '../types';
import { messagesMock } from '../mock/messages';
import { usersMock } from '../mock/users';
import { useEffect, useState } from 'react';
import ScrollArea from 'react-scrollbar';

const ChatContainer = styled.div`
    height: calc(100vh - 48px);
    max-height: calc(100vh - 48px);
    display: flex;
    flex-direction: column;
`;

const ChatInputContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    background: #eee;
    padding: 0 15px;
`;

const ChatMessagesContainer = styled.div`
    flex: 8;
    border-bottom: 1px solid #ccc;
    height: 100%;
    padding: 25px;
`;

const ChatInput = styled(TextField)`
    background: #fff;
    margin-right: 15px;
`;

const MessageContainer = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

export const AvatarContainer = styled.div`
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    position: relative;
    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const UserName = styled.h6`
    font-size: 16px;
    margin: 0;
    padding-right: 5px;
`;

const MessageDate = styled.p`
    margin: 0;
    font-size: 13px;
`;

const MessagesTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MessageText = styled.p<{ textColor: string; backgroudnColor: string }>`
    margin: 0 0 3px 0;
    font-size: 14px;
    color: ${({ textColor }) => textColor};
    background: ${({ backgroudnColor }) => backgroudnColor};
    font-weight: 600;
    padding: 7px 14px;
    border-radius: 10px;
`;

const Message: React.FC<MessageProp> = ({ userName, img, dateText, messages }) => {
    const mainColor = stc(userName);
    const invertedColor = invert(mainColor);

    const messagesElements = messages.map((message) => (
        <MessageText backgroudnColor={mainColor} textColor={invertedColor} key={message}>
            {message}
        </MessageText>
    ));

    return (
        <MessageContainer>
            <AvatarContainer>
                <img src={img} alt={`${userName} Avatar`} />
            </AvatarContainer>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <UserName>{userName}</UserName>
                    <MessageDate>{dateText}</MessageDate>
                </Box>
                <MessagesTextContainer>{messagesElements}</MessagesTextContainer>
            </Box>
        </MessageContainer>
    );
};

const Chat: React.FC = () => {
    const [messagesResponse, setMessagesResponse] = useState(messagesMock);
    const [messages, setMessages] = useState<MessageProp[]>([]);

    useEffect(() => {
        let updatedMsg: MessageProp[] = [];
        messagesResponse.forEach((msgRes) => {
            if (updatedMsg.length && updatedMsg[updatedMsg.length - 1].userId === msgRes.userId) {
                const lastMsg = updatedMsg[updatedMsg.length - 1];
                lastMsg.messages = [...lastMsg.messages, msgRes.message];
                updatedMsg.pop();
                updatedMsg = [...updatedMsg, lastMsg];
            } else {
                const user = usersMock.find((user) => user.userId === msgRes.userId);
                if (user) {
                    updatedMsg = [
                        ...updatedMsg,
                        {
                            userId: msgRes.userId,
                            userName: user.userName,
                            dateNumber: msgRes.dateNumber,
                            dateText: msgRes.dateText,
                            img: user.userAvatar,
                            messages: [msgRes.message],
                        },
                    ];
                } else {
                    throw Error('Wrong User ID');
                }
            }
        });
        setMessages(updatedMsg);
    }, [messagesResponse]);

    const elements = messages.map((msg) => (
        <Message
            userId={msg.userId}
            userName={msg.userName}
            messages={msg.messages}
            key={msg.dateNumber + msg.userId}
            dateText={msg.dateText}
            dateNumber={msg.dateNumber}
            img={msg.img}
        />
    ));

    return (
        <ChatContainer>
            <ScrollArea speed={0.1}>
                <ChatMessagesContainer>{elements}</ChatMessagesContainer>
            </ScrollArea>
            <ChatInputContainer>
                <ChatInput fullWidth />
                <Button>SEND</Button>
            </ChatInputContainer>
        </ChatContainer>
    );
};

export default Chat;
