import React, { useState } from "react";
import { BsMenuButtonWide, BsMenuButtonWideFill } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/authSlice";
import { useLogoutMutation } from "../../Redux/slices/userApiSlice";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const Nav = () => {
  const [showMobileMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logoutApiCall();
    dispatch(logout());
  };
  return (
    <div className="relative z-10 w-full p-2 bg-green-200 md:text-xl drop-shadow-md">
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////mobilemenu sidebar */}
      <div
        className={`w-3/4 h-[100vh] bg-green-200 md:hidden absolute top-14 right-0 transition-transform duration-500 ${
          showMobileMenu ? "" : "translate-x-full"
        }`}
      >
        <div className="absolute right-2 top-2">
          <TfiClose
            className="text-xl text-green-700 transition-all cursor-pointer hover:scale-90"
            onClick={() => setShowMenu(!showMobileMenu)}
          />
        </div>
        <div className="flex-col items-center w-full p-2">
          <div>
            <Link to="" onClick={() => setShowMenu(!showMobileMenu)}>
              Home
            </Link>
          </div>
          {userInfo && (
            <>
              <div>
                <Link
                  to="/Profile"
                  onClick={() => {
                    setShowMenu(!showMobileMenu);
                  }}
                >
                  Profile
                </Link>
              </div>
              <div>
                <Link
                  to="/Watchlist"
                  onClick={() => {
                    setShowMenu(!showMobileMenu);
                  }}
                >
                  Watchlist
                </Link>
              </div>
            </>
          )}
          <div className="">
            {!userInfo && (
              <Link
                to="/Login"
                onClick={() => setShowMenu(!showMobileMenu)}
                className=""
              >
                Login
              </Link>
            )}
            {userInfo && (
              <Link
                to="/"
                onClick={() => {
                  setShowMenu(!showMobileMenu);
                  dispatch(logout());
                }}
                className=""
              >
                Logout
              </Link>
            )}
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
        <p className="font-semibold text-green-700 uppercase">Stock Fusion</p>

        <div className="md:hidden">
          {!showMobileMenu ? (
            <BsMenuButtonWide
              className="text-xl text-green-700 transition-all cursor-pointer active:scale-95"
              onClick={() => setShowMenu(!showMobileMenu)}
            />
          ) : (
            <BsMenuButtonWideFill
              onClick={() => setShowMenu(!showMobileMenu)}
              className="text-xl text-green-700 transition-all cursor-pointer active:scale-95"
            />
          )}
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// menu fro large devices */}
        <div className="max-md:hidden">
          <ul className="flex items-center justify-between space-x-8">
            <Link to="">Home</Link>
            {userInfo && (
              <div>
                <Link to="/Watchlist">Watchlist</Link>
              </div>
            )}
            {!userInfo ? (
              <Link to="/Login">Login</Link>
            ) : (
              <div
                className="relative flex items-center justify-between cursor-pointer "
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <FaUserCircle className="relative text-xl text-green-700 cursor-pointer " />
                <p className="px-1 ml-2 text-green-800 border-2 border-green-300 rounded active:border-green-600 ">
                  {" "}
                  {userInfo ? userInfo.name : ""}
                </p>
                <ul
                  className={`absolute z-10 w-full py-2 border-2 border-b-2 top-8  ${
                    !showProfileMenu ? "hidden" : "block duration-150`"
                  }`}
                >
                  <li className="w-full px-4 cursor-pointer hover:bg-green-200">
                    <Link to="/Profile">Profile</Link>
                  </li>
                  <li className="w-full px-4 cursor-pointer hover:bg-green-200">
                    {" "}
                    <Link to="/" onClick={logoutHandler}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
