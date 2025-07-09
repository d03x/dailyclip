import { Login } from "~/features/auth";
import { Link } from "react-router";
import cn from "~/utils/cn";
export default function FeaturedTopLists() {
  const cats = [
    "MyPick",
    "My Feed",
    "Coding",
    "Live",
    "Crypto",
    "Indonesia",
    "Penguna",
    "Pndiikan",
    "Live Streaming",
    "Data",
    "Podcasts",
    "Leaderboard",
    "VLogs",
    "Music",
  ];
  return (
    <div className="content-width lg:mx-9 overflow-x-auto flex items-center justify-start mt-3 lg:mt-4">
      {cats.map((item,index) => {
        return (
          <Link
            className={cn('px-4 py-1.5 text-gray-600 rounded-full text-xs mx-2 whitespace-nowrap',index == 0 ? "bg-black text-white font-semibold" : " bg-gray-100")}
            to={`?a=${item}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
