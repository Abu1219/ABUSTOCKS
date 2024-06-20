import React, { useState } from "react";
import { BsMenuButtonWide, BsMenuButtonWideFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

import { Link } from "react-router-dom";

const Nav = () => {
  const [showMobileMenu, setShowMenu] = useState(false);
  return (
    <div className="relative z-10 w-full p-2 bg-green-200 md:text-xl lg:text-2xl drop-shadow-md">
      {/* mobilemenu sidebar */}
      <div
        className={`w-3/4 h-[100vh] bg-green-200 md:hidden absolute top-14 right-0 transition-transform duration-500 ${
          showMobileMenu ? "" : "translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-2">
          <TfiClose
            className="text-2xl text-green-700 transition-all cursor-pointer hover:scale-90"
            onClick={() => setShowMenu(!showMobileMenu)}
          />
        </div>
        <div className="flex-col items-center w-full p-2">
          <div>
            <Link to="" onClick={() => setShowMenu(!showMobileMenu)}>
              Home
            </Link>
          </div>
          {/* <div>
            <Link to="">Watchlist</Link>
          </div> */}
          <div className="">
            <Link
              to="/Login"
              onClick={() => setShowMenu(!showMobileMenu)}
              className=""
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between min-w-min max-w-[1440px] mx-auto">
        <Link to="/">
          <img
            src="https://cdn-icons-png.freepik.com/512/9226/9226554.png"
            alt="ABUSM"
            className="w-10"
          />
        </Link>
        <p className="font-semibold text-green-700 uppercase">
          Know Your Stock
        </p>

        {/* menu for mobile devices */}
        <div className="md:hidden">
          {!showMobileMenu ? (
            <BsMenuButtonWide
              className="text-2xl text-green-700 transition-all cursor-pointer active:scale-95"
              onClick={() => setShowMenu(!showMobileMenu)}
            />
          ) : (
            <BsMenuButtonWideFill
              onClick={() => setShowMenu(!showMobileMenu)}
              className="text-2xl text-green-700 transition-all cursor-pointer active:scale-95"
            />
          )}
        </div>
        {/* menu fro large devices */}
        <div className="max-md:hidden">
          <ul className="flex items-center justify-between space-x-8">
            <Link to="">Home</Link>
            {/* <Link to="">Watchlist</Link> */}
            <Link to="/Login">Login</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
