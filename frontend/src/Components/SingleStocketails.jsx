import React from "react";
import { useParams } from "react-router-dom";
import data from "./stocks.json";
import { AiOutlineStock } from "react-icons/ai";
import SimilarStock from "./SimilarStock";
import { useDispatch, useSelector } from "react-redux";
import { useAddtoWatchListMutation } from "../Redux/slices/userApiSlice.js";
import { updateWatchList } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";
import { IoIosAddCircle } from "react-icons/io";

import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
  MdBarChart,
} from "react-icons/md"; //down
import { FaRupeeSign } from "react-icons/fa"; //rupee

const SingleStocketails = (props) => {
  const { id } = useParams() || "";
  const stock = props?.stock || data.find((el) => el.symbol === id);
  const [addtowatchlist] = useAddtoWatchListMutation();
  const dispatch = useDispatch();

  const addTowatchListHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await addtowatchlist(stock).unwrap();
      console.log(res);
      dispatch(updateWatchList(res));
      toast.success("added");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div>
      <div className="p-2 m-4 mt-4 space-y-2 bg-green-100 border-2 border-green-100 rounded drop-shadow-md md:w-3/4 md:mx-auto md:mt-6 lg:w-[600px] lg:p-4 md:text-lg ">
        {/* name & price */}
        <div className="flex items-center justify-between">
          <p>
            {stock.name}

            {/* (<span className="text-sm text-green-700">{stock.symbol}</span>) */}
          </p>
          <div className="flex items-center font-semibold text-green-700">
            <FaRupeeSign />
            <span className="">{stock.LTP}</span>
          </div>
        </div>
        {/* pe & weightage */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <AiOutlineStock className="text-green-700" />
            <p>PE : {Math.round(stock.PEratio)}</p>
          </div>
          <button
            className="flex items-center p-2 duration-150 bg-green-300 rounded max-md:text-xs hover:bg-green-500 hover:text-white active:scale-95"
            onClick={addTowatchListHandler}
            title="add to watchlist"
          >
            <IoIosAddCircle size={25} />
            watchlist
          </button>
          <div className="flex items-center space-x-2">
            <MdBarChart className="text-green-700" />
            <p>{stock.weightage}</p>
          </div>
        </div>
        {/* 52high&low */}
        <div className="flex items-center justify-between ">
          <div className="flex items-center space-x-2">
            <MdKeyboardDoubleArrowDown className="text-red-500 animate-bounce" />
            <p className="px-2 bg-red-200 rounded ">{Math.floor(stock.low)}</p>
          </div>
          <div>
            <p className="text-slate-700">52 week Low/High</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdKeyboardDoubleArrowUp className="text-green-800 animate-bounce" />
            <p className="px-2 bg-green-200 rounded ">
              {" "}
              {Math.floor(stock.high)}
            </p>
          </div>
        </div>
        {/* option  */}
      </div>
      <div>
        <SimilarStock sector={stock.sector} stockName={stock.name} />
      </div>
    </div>
  );
};

export default SingleStocketails;
