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
   "MyPick",
    "My Feed",
    "Coding",
    "Live",
    "Crypto",
    "Indonesia",
    "Penguna",
  ];
  return (
    <div className="content-width mt-2.5 gap-x-3">
      {cats.map((item,index) => {
        return (
          <Link
            className={cn('px-3 py-1.5 text-gray-600 rounded-full text-xs whitespace-nowrap',index == 0 ? "bg-black text-white font-semibold" : " bg-gray-100")}
            to={`?a=${item}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
