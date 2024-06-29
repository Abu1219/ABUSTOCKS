import Reacts, { useState } from "react";
import SearchBar from "./Utility/SearchBar";
import data from "./stocks.json";
import { useNavigate } from "react-router-dom";
import Filter from "./Utility/Filter";
import { UseSelector, useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const [filterBy, setFilterBy] = useState("");
  const loginUser = useSelector((state) => state.user);
  const fillterHandler = (e) => {
    setFilterBy(e);
  };
  return (
    <div className="relative h-[100vh]">
      <SearchBar />

      <div className="w-[95%] lg:w-[98%]  mx-auto  ">
        {/* <div className="flex text-sm ">
          <p>Result PerPage</p>
          <select>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>25</option>
            <option>all</option>
          </select>
        </div> */}
        <div>
          <Filter filter={fillterHandler} />
        </div>
        <table className="w-full mx-auto text-sm border border-spacing-2 md:w-4/6 md:px-4">
          <thead className="">
            <tr className=" md:text-lg bg-slate-200">
              <th className="font-semibold text-center lg:font-bold md:font-semibold lg:p-2">
                Name
              </th>
              <th className="font-semibold text-center lg:font-bold md:font-semibold lg:p-2">
                Price
              </th>
              <th className="font-semibold text-center lg:font-bold md:font-semibold lg:p-2">
                52w-low
              </th>
              <th className="font-semibold text-center lg:font-bold md:font-semibold lg:p-2">
                52w-High
              </th>
              <th className="font-semibold text-center lg:font-bold md:font-semibold lg:p-2">
                PE Ratio
              </th>
            </tr>
          </thead>
          <tbody>
            {filterBy === ""
              ? data.map((stock) => (
                  <tr
                    key={stock.name}
                    className="text-green-800 transition-all duration-150 cursor-pointer tab md:text-lg hover:bg-green-600 hover:text-white group"
                    onClick={() => {
                      navigate(`/${stock.symbol}/stock_details`);
                    }}
                  >
                    <td className="font-normal text-left md:p-2 ">
                      {stock.name}
                    </td>
                    <td className="font-semibold text-center md:p-2">
                      {Math.floor(stock.LTP)}
                    </td>
                    <td className="font-normal text-center md:p-2">
                      {Math.floor(stock.low)}
                    </td>
                    <td className="font-normal text-center md:p-2">
                      {Math.floor(stock.high)}
                    </td>
                    <td className="font-normal text-center md:p-2">
                      {Math.floor(stock.PEratio)}
                    </td>
                  </tr>
                ))
              : data
                  .filter((stock) => stock.sector === filterBy)
                  .map((stock) => (
                    <tr
                      key={stock.name}
                      className="text-green-800 transition-all duration-150 cursor-pointer tab md:text-lg hover:bg-green-600 hover:text-white group"
                      onClick={() => {
                        navigate(`/${stock.symbol}/stock_details`);
                      }}
                    >
                      <td className="font-normal text-left md:p-2 ">
                        {stock.name}
                      </td>
                      <td className="font-normal text-center md:p-2">
                        {Math.floor(stock.LTP)}
                      </td>
                      <td className="font-normal text-center md:p-2">
                        {Math.floor(stock.low)}
                      </td>
                      <td className="font-normal text-center md:p-2">
                        {Math.floor(stock.high)}
                      </td>
                      <td className="font-normal text-center md:p-2">
                        {Math.floor(stock.PEratio)}
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
