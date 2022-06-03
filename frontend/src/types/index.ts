//==============================================================================
// Context
//==============================================================================

export interface LayoutContextState {
    open: boolean;
    sidebarWidth: number;
    openSidebarHandler: () => void;
    closeSidebarHandler: () => void;
}
