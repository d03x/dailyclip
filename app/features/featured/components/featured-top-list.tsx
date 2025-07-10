import { Login } from "~/features/auth";
import { Link } from "react-router";
import cn from "~/utils/cn";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function FeaturedTopLists() {
  const cats = [
    "MyPick",
    "My Feed",
    "Coding",
    "Live",
    "Crypto",
    "Indonesia",
    "Penguna",
        "Penguna",

    "Penguna",

        "Penguna",
    "Penguna",
    "Penguna",

    "MyPick",
    "My Feed",
    "Coding",
  ];
  return (
    <div className="flex items-center w-full">
      <button className="bg-gray-50 hover:ring-4 cursor-pointer hover:bg-white ring-gray-100   ml-1 rounded-full mr-2 px-2 py-2  flex items-center justify-center inset-0">
        <AiOutlineArrowRight />
      </button>
      <div
        className={cn(
          "h-full ",
          "scrollbar-hide",
          "overflow-x-auto gap-x-3",
          `lg:max-w-full max-w-[max-content] py-2`
        )}
      >
        {cats.map((item, index) => {
          return (
            <Link
              className={cn(
                "px-3 py-1.5 italic font-bold mx-2 text-gray-600 rounded-lg text-xs whitespace-nowrap",
                index == 0
                  ? "bg-black text-white font-semibold"
                  : " bg-gray-100"
              )}
              to={`?a=${item}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
