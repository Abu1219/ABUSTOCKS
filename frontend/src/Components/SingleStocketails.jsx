import React from "react";
import { useParams } from "react-router-dom";
import data from "./stocks.json";
import { AiOutlineStock } from "react-icons/ai";
import { RiStockFill } from "react-icons/ri";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
  MdBarChart,
} from "react-icons/md"; //down
import { FaRupeeSign } from "react-icons/fa"; //rupee

const SingleStocketails = () => {
  const { id } = useParams();
  const stock = data.find((el) => el.symbol === id);

  return (
    <div className="p-2 m-2 border-2 border-green-200">
      <div>
        <div className="flex justify-between px-2">
          <p className="font-semibold capitalize text-green-950">
            {stock.name}
          </p>
          <p className="flex items-center text-green-500">
            <FaRupeeSign /> <span className="text-green-800">{stock.LTP}</span>
          </p>
        </div>{" "}
        <p className="flex px-2 text-green-700 capitalize">
          <span className="text-orange-500">
            <RiStockFill />
            PE :{" "}
          </span>
          {stock.PEratio}
        </p>
      </div>
    </div>
  );
};

export default SingleStocketails;
