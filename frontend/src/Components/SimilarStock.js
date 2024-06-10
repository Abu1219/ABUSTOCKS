import React from "react";
import data from "./stocks.json";
import { useNavigate } from "react-router-dom";

const SimilarStock = ({ sector, stockName }) => {
  const navigate = useNavigate();

  return (
    <>
      <p className="p-2 m-2 text-lg font-semibold text-green-800">
        Related Stocks
      </p>
      <div className="flex flex-col items-start p-2 m-2 space-y-2 md:mx-4 lg:mx-6 ">
        {data
          .filter((el) => el.sector === sector && el.name !== stockName)
          .map((stock) => (
            <div className="flex justify-between w-full px-2 text-sm text-green-600 cursor-pointer md:text-lg lg:text-xl hover:bg-green-500 hover:rounded hover:drop-shadow-md group hover:text-white ">
              <p className="">{stock.name}</p>
              <p className="">&#8377;{Math.floor(stock.LTP)}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default SimilarStock;
