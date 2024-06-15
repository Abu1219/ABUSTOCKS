import React from "react";
import data from "./stocks.json";
import { Link } from "react-router-dom";

const SimilarStock = ({ sector, stockName }) => {
  return (
    <>
      <p className="p-2 m-2 text-lg font-semibold text-green-600 md:px-6 md:text-2xl ">
        Related Stocks
      </p>
      <div className="flex flex-col p-2 m-2 space-y-2 rounded md:mx-auto md:w-3/4 bg-slate-100 md:p-4 drop-shadow-md ">
        {data
          .filter((el) => el.sector === sector && el.name !== stockName)
          .map((stock) => (
            <Link
              key={stock.name}
              to={`/${stock.symbol}/stock_details`}
              className="flex justify-between w-full px-2 text-sm text-green-600 cursor-pointer md:text-lg lg:text-xl hover:bg-green-500 hover:rounded hover:drop-shadow-md group hover:text-white "
            >
              <p className="">{stock.name}</p>
              <p className="">&#8377;{Math.floor(stock.LTP)}</p>
            </Link>
          ))}
      </div>
    </>
  );
};

export default SimilarStock;
