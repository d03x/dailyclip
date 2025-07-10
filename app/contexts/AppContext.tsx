import { useContext, useMemo, useState, type ReactNode } from "react";
import { createContext } from "react";
type AppContextType = {
  isWatchingPage: boolean;
  isMenuOpen: boolean;
  menuToggle: (val: boolean) => void;
  setIsWatchingPage: (val: boolean) => void;
};

const contextValue: AppContextType = {
  isWatchingPage: false,
  setIsWatchingPage(val) {},
  isMenuOpen: false,
  menuToggle: function (val: boolean): void {},
};

const AppContext = createContext<AppContextType>(contextValue);
type AppContextProviderProps = {
  children: ReactNode;
};
const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isWatchingPage, setIsWatching] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const setIsWatchingPage = (val: boolean) => {
    setIsWatching(val);
  };

  const menuToggle = (val: boolean) => {
    setIsMenuOpen(val);
  };

  const value = useMemo(() => {
    return {
      isWatchingPage,
      isMenuOpen,
      menuToggle,
      setIsWatchingPage,
    };
  }, [isWatchingPage, isMenuOpen]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AppContextProvider");
  }
  return context;
};

export { AppContext, AppContextProvider, useAppContext };
