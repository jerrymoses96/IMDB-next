import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <div className="flex justify-between p-3 items-center max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about " address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex items-center gap-1 ">
          <span className="text-2xl font-bold bg-amber-500  py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline ">clone</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
