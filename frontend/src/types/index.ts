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
    userId: string;
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
    userId: string;
    userName: string;
    img: string;
    dateText: string;
    dateNumber: number;
    message: string;
}
