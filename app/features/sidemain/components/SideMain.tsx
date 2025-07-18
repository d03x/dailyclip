import { Radio } from "lucide-react";
import { Link } from "react-router";
import { MenuNav } from "~/features/navbar";
import cn from "~/utils/cn";
import { faker } from "@faker-js/faker";
import ChannelLists from "./channel-list";
import { useAppContext } from "~/contexts/AppContext";
const SideMain = () => {
  const {isMenuOpen} = useAppContext();
  return (
    <aside className={cn('group mt-3 select-none',isMenuOpen && 'is-active')}>
      <div className="px-2 mb-1.5">
        <MenuNav />
      </div>
      <div className="w-full  border-[0.51px] border-gray-50"></div>
      <div className="mt-1.5">
        <ChannelLists />
      </div>
    </aside>
  );
};

export default SideMain;
