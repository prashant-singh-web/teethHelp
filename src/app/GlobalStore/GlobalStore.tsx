"use client"
import React, { createContext, useContext, useState } from 'react';
  interface LocalState{
    isOpen: boolean;
    setIsOpen:any
  }
export const AppContext = createContext({} as LocalState);


export default function ProviderContext({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setfirst] = useState("open")

  return (
    <AppContext.Provider value={{isOpen,setIsOpen}}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalHook = () => {
  return useContext(AppContext);
};

  
  
