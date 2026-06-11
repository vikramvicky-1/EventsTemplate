import React, { createContext, useContext, useState } from 'react';

interface PreloaderContextType {
  isComplete: boolean;
  complete: () => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
  isComplete: false,
  complete: () => {},
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isComplete, setIsComplete] = useState(false);

  const complete = () => {
    setIsComplete(true);
  };

  return (
    <PreloaderContext.Provider value={{ isComplete, complete }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
