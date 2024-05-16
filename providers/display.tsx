import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';
export const DisplayContext = createContext<DisplayContextProps>({
  openSidebar: true,
  setOpenSidebar: () => { }
});
export const DisplayProvider = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <DisplayContext.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </DisplayContext.Provider>
  )
}


interface DisplayContextProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}
