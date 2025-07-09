import {
  Coins,
  Compass,
  Home,
  Rocket,
  UserCircle,
  VideoIcon,
} from "lucide-react";
import { Link } from "react-router";
import { TbCompass, TbHome, TbUserCircle, TbVideoPlus } from "react-icons/tb";
import {
  BsClock,
  BsClockHistory,
  BsCollectionPlay,
  BsShop,
} from "react-icons/bs";
import cn from "~/utils/cn";
function MenuNav() {
  const menu = [
    {
      name: "For You",
      icon: <TbHome size={24} />,
      to: "/",
    },
    {
      name: "Explore",
      icon: <TbCompass size={24} />,
      to: "/",
    },
    {
      name: "Pilihan Editor",
      icon: <TbUserCircle size={24} />,
      to: "/",
    },
    {
      name: "Short",
      icon: <BsCollectionPlay size={20} />,
      to: "/",
    },
    {
      name: "Watch Later",
      icon: <BsClockHistory size={21} />,
      to: "/",
    },
    {
      name: "Daily Coint",
      icon: <Coins size={21} />,
      to: "/",
    },
  ];
  return (
    <div className={cn("flex  flex-col gap-1")}>
      {menu.map((e, index) => {
        return (
          <Link
            key={index}
            className={cn(
              "group-[.is-active]:gap-y-1.5",
              "group-[.is-active]:flex-col flex-row  group-[.is-active]:text-center group-[.is-active]:text-[10px] flex text-sm hover:bg-gray-100 transition-all py-2 items-center px-2 rounded"
            )}
            to={"/"}
          >
            <span className={cn("group-[.is-active]:mr-0 mr-3")}>{e.icon}</span>
            <span>{e.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default MenuNav;
