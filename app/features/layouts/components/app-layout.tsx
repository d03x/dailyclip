import { Outlet, useLocation } from "react-router";
import layouts from "./styles/app-layout.module.scss";
import { Navbar } from "~/features/navbar";
import { SideMain } from "~/features/sidemain";
import cn from "~/utils/cn";
import { useAppContext } from "~/contexts/AppContext";
import { useEffect } from "react";
const AppLayout = () => {
  
  const { isWatchingPage,isMenuOpen, setIsWatchingPage } = useAppContext();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/watch") {
      setIsWatchingPage(true);
    } else {
      setIsWatchingPage(false);
    }
  }, [location.pathname]);

  return (
    <div
      className={cn(layouts.layout, isWatchingPage && layouts.is_watching,isMenuOpen && layouts.menu_active)}
    >
      <header className={layouts.header}>
        <Navbar />
      </header>
      {!isWatchingPage && (
        <div className={cn(layouts.navSide, "hidden  lg:block")}>
          <SideMain />
        </div>
      )}
      <div className={layouts.main}>
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
