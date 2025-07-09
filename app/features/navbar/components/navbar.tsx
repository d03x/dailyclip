import {  Info, Menu, Radio, Search, UploadCloud } from "lucide-react";
import { InputText } from "~/components/input-text";
import {Divide as Hamburger} from "hamburger-react"
import Logo from "./logo";
const Navbar = () => {
  return (
    <div className="lg:px-3  shadow-sm lg:shadow-none px-3 grid grid-cols-2 lg:grid-cols-3 items-center  w-full h-full bg-white">
      <div className="flex items-center">
        <Hamburger size={24}/>
        <span className="lg:text-2xl text-lg font-semibold">
          <Logo/>
        </span>
      </div>
      <div className="lg:flex hidden bg-gray-100 hover:ring-1 select-none hover:ring-gray-400 focus-within:ring-gray-600 transition-all text-gray-500 cursor-pointer items-center py-1.5 px-2 rounded-2xl">
        <Search />
        <div className="flex-1 text-sm ml-2">Cari apa hari ini?</div>
      </div>
      <div className="flex lg:ml-8 items-center">
        <div className="hidden ml-auto lg:ml-0 sm:flex lg:flex items-center gap-4">
          <button>
            <UploadCloud />
          </button>
          <button>
            <Info />
          </button>
        </div>
        <button className="ml-auto font-semibold hover:bg-slate-700 text-sm bg-slate-600 text-white px-8 py-2 cursor-pointer rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
