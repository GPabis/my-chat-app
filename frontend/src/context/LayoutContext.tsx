import React, { createContext, useCallback, useMemo, useState } from 'react';
import { LayoutContextState } from '../types';

const LayoutContext = createContext<LayoutContextState>({
    open: false,
    sidebarWidth: 200,
    openSidebarHandler: () => {},
    closeSidebarHandler: () => {},
});

export const LayoutProvider: React.FC<{ children: React.ReactNode; sidebarWidth?: number }> = ({
    children,
    sidebarWidth = 200,
}) => {
    const [open, setOpen] = useState(false);

    const openSidebarHandler = useCallback(() => setOpen(true), []);

    const closeSidebarHandler = useCallback(() => setOpen(false), []);

    const value: LayoutContextState = useMemo(
        () => ({
            open,
            sidebarWidth,
            openSidebarHandler,
            closeSidebarHandler,
        }),
        [open, sidebarWidth, openSidebarHandler, closeSidebarHandler],
    );

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutContext;
