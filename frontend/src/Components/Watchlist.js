"use strict";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useRemovefromWatchListMutation } from "../Redux/slices/userApiSlice";
import { updateWatchList } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";

const Watchlist = () => {
  const stock = useSelector((state) => state.auth.userInfo.watchList);
  const navigate = useNavigate();
  const [removestock] = useRemovefromWatchListMutation();
  const dispatch = useDispatch();
  const removeHandler = async (st) => {
    if (window.confirm(`Do you want remove ${st.name}`)) {
      try {
        const res = await removestock(st).unwrap();
        dispatch(updateWatchList(res));
        toast.success("removed");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto">
      `
      <h1 className="p-4 text-lg text-center text-green-800 md:text-xl lg:text-2xl drop-shadow">
        Watch List
      </h1>
      <div>
        {stock[0] ? (
          stock?.map((st) => (
            <div className=" lg:text-xl grid grid-flow-col grid-cols-3 space-x-4  mt-2 p-2 border-b-2 border-green-200 w-[80%] mx-auto cursor-pointer group hover:bg-green-200  duration-200">
              <div
                className=""
                onClick={() => {
                  navigate(`/${st.symbol}/stock_details`);
                }}
              >
                {st.symbol}
              </div>
              <div className="capitalize">{st.sector}</div>
              <div className="font-bold">{st.LTP}</div>
              <div
                className="z-[9] text-red-500 duration-150 cursor-pointer "
                onClick={() => removeHandler(st)}
              >
                <MdDelete size={25} className="text-xl" title="remove" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center text-red-500">
            {" "}
            no stocks were added...!
          </p>
        )}
      </div>
      `
    </div>
  );
};

export default Watchlist;
