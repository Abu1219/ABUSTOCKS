import React, { useState } from "react";
import { BsMenuButtonWide, BsMenuButtonWideFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";

const Nav = () => {
  const [showMobileMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-green-200 p-2 drop-shadow-md relative ">
      {/* mobilemenu sidebar */}
      <div
        className={`w-3/4  h-[100vh] bg-green-200  md:hidden  absolute top-14 right-0 transition-transform  duration-500 ${
          showMobileMenu ? "" : "translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-2">
          <TfiClose
            className="text-green-700 text-2xl cursor-pointer hover:scale-90 transition-all"
            onClick={() => setShowMenu(!showMobileMenu)}
          />
        </div>
        <div className="flex-col items-center w-full">
          <div>
            <Link to="">Home</Link>
          </div>
          <div>
            <Link to="">Watchlist</Link>
          </div>
          <div>
            <Link to="">Portfolio</Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <img
          src="https://cdn-icons-png.freepik.com/512/9226/9226554.png"
          alt="ABUSM"
          className="w-10"
        />
        <p className="text-green-700 font-semibold uppercase">Stock You Need</p>

        {/* menu for mobile devices */}
        <div className="md:hidden">
          {!showMobileMenu ? (
            <BsMenuButtonWide
              className="text-green-700 text-2xl cursor-pointer active:scale-95 transition-all"
              onClick={() => setShowMenu(!showMobileMenu)}
            />
          ) : (
            <BsMenuButtonWideFill
              onClick={() => setShowMenu(!showMobileMenu)}
              className="text-green-700 text-2xl cursor-pointer active:scale-95 transition-all"
            />
          )}
        </div>
        {/* menu fro large devices */}
        <div className="max-md:hidden">
          <ul className="flex items-center justify-between space-x-8">
            <Link to="">Home</Link>
            <Link to="">Watchlist</Link>
            <Link to="">Portfolio</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
