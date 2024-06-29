"use strict";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removefromWatchlist } from ".././Redux/UserSlice";

const Watchlist = () => {
  const stock = useSelector((state) => state.user.watchList);
  console.log(stock);
  const dispatch = useDispatch();
  const removeHandler = (name) => {
    // dispatch(removefromWatchlist(name));
    // alert(e.name);
    return;
  };

  return (
    <div className="max-w-[1024px] mx-auto">
      <h1 className="p-4 text-lg text-center text-green-800 md:text-xl lg:text-2xl drop-shadow">
        Watch List
      </h1>
      <div>
        {stock.map((st) => (
          <div className=" lg:text-xl grid grid-flow-col grid-cols-3 space-x-4  mt-2 p-2 border-b-2 border-green-200 w-[80%] mx-auto cursor-pointer group hover:bg-green-200  hover:scale-95 duration-200">
            <div className="">{st.symbol}</div>
            <div className="">{st.sector}</div>
            <div className="font-bold">{st.LTP}</div>
            <div
              className="hidden text-red-400 duration-150 cursor-pointer hover:text-red-500 hover:underline group-hover:flex group-hover:transition-all"
              onClick={removeHandler(st.name)}
            >
              remove
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
