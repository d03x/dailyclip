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
  ];
  return (
    <div
      className={cn(
        "content-width overflow-x-auto  mx-2 mt-2.5 gap-x-3",
        `lg:max-w-full max-w-[420px]`
      )}
    >
      {cats.map((item, index) => {
        return (
          <Link
            className={cn(
              "px-3 py-1.5 text-gray-600 rounded-lg text-xs whitespace-nowrap",
              index == 0 ? "bg-black text-white font-semibold" : " bg-gray-100"
            )}
            to={`?a=${item}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
