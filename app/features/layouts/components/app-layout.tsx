import { Outlet } from "react-router";
import layouts from "./styles/app-layout.module.scss";
import { Navbar } from "~/features/navbar";
import { SideMain } from "~/features/sidemain";
import cn from "~/utils/cn";
const AppLayout = () => {
  return (
    <div className={layouts.layout}>
      <header className={layouts.header}>
        <Navbar />
      </header>
      <div className={cn(layouts.navSide, "hidden  lg:block")}>
        <SideMain />
      </div>
      <div className={layouts.main}>
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
