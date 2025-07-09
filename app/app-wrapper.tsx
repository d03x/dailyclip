import type { ReactNode } from "react";
import { AppContextProvider } from "./contexts/AppContext";
import { Outlet } from "react-router";

export default function AppWrapper() {
  return (
    <AppContextProvider>
      <Outlet />
    </AppContextProvider>
  );
}
