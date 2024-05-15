import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import data from "../stocks.json";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [stock, setstock] = useState([]);
  const changeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (value.trim() === "") {
      setstock("");
      return; // Exit the function early
    }

    const result = data.find((el) =>
      el?.symbol.trim().toLowerCase().includes(value.trim().toLowerCase())
    );

    setstock(() => (result ? result : "no match"));
  };
  return (
    <div className="">
      <div className="m-4 ">
        <div className="flex items-center justify-between p-2 border md:mx-auto border-black/50 md:w-4/6 md:px-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-lg focus:outline-none"
            onChange={changeHandler}
          />
          <IoSearch className="text-2xl cursor-pointer active:text-orange-600" />
        </div>
        <div className="p-2 md:mx-auto md:w-4/6 md:px-4">
          <Link
            className="cursor-pointer text-slate-500 hover:text-black active:text-green-500"
            to={`/${stock.symbol}/stock_details`}
          >
            {stock.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
