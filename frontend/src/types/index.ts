//==============================================================================
// Context
//==============================================================================

export interface LayoutContextState {
    open: boolean;
    sidebarWidth: number;
    openSidebarHandler: () => void;
    closeSidebarHandler: () => void;
}

//==============================================================================
// Props
//==============================================================================

export interface MessageProp {
    userId: number;
    userName: string;
    img: string;
    dateText: string;
    dateNumber: number;
    messages: string[];
}

//==============================================================================
// API
//==============================================================================

export interface MessageResponse {
    userId: number;
    dateText: string;
    dateNumber: number;
    message: string;
}

export interface UsersResponse {
    userId: number;
    userName: string;
    userAvatar: string;
    userStatus: 'online' | 'offline';
}

export interface RoomsResponse {
    roomId: number;
    roomName: string;
}

//==============================================================================
// State
//==============================================================================

export interface AuthState {
    token?: string;
    refreshToken?: string;
    expirationDate?: string;
    user?: UsersResponse;
}
