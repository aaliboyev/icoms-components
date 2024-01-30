import React, { createContext, useContext, useState, ReactNode } from 'react';

type LightboxContextType = {
    isOpen: boolean;
    openLightbox: () => void;
    closeLightbox: () => void;
};

const LightboxContext = createContext<LightboxContextType | null>(null);

export const useLightboxContext = (): LightboxContextType => {
    const context = useContext(LightboxContext);
    if (!context) {
        throw new Error('useLightboxContext must be used within a LightboxProvider');
    }
    return context;
}

type LightboxProviderProps = {
    children: ReactNode;
};

export const LightboxProvider: React.FC<LightboxProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => setIsOpen(true);
    const closeLightbox = () => setIsOpen(false);

    const value = { isOpen, openLightbox, closeLightbox };

    return (
        <LightboxContext.Provider value={value}>
            {children}
        </LightboxContext.Provider>
    );
};
