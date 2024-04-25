import React, { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState(null);

  return (
    <SharedStateContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => useContext(SharedStateContext);