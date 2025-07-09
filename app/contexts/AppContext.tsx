import { useContext, type ReactNode } from "react";
import { createContext } from "react";

const AppContext = createContext(null);
type AppContextProviderProps = {
  children: ReactNode;
};
const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AppContextProvider");
  }
  return context;
};

export { AppContext, AppContextProvider, useAppContext };
