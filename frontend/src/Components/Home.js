import Reacts from "react";
import SearchBar from "./Utility/SearchBar";
import SingleStocketails from "./SingleStocketails";
import data from "./stocks.json";
import { useNavigate } from "react-router-dom";
import Loader from "./Utility/Loader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[100vh]">
      <SearchBar />
      <div className="absolute hidden w-full opacity-0 top-1/2 ">
        <Loader />
      </div>
      <div className="w-[95%] lg:w-[98%]  mx-auto  ">
        <table className="w-full mx-auto text-sm border border-spacing-2 md:w-4/6 md:px-4">
          <thead className="">
            <tr className="text-green-600 md:text-lg">
              <th className="font-semibold border border-green-600 lg:font-bold md:font-semibold">
                Name
              </th>
              <th className="font-semibold border border-green-600 lg:font-bold md:font-semibold">
                Price
              </th>
              <th className="font-semibold border border-green-600 lg:font-bold md:font-semibold">
                52w-low
              </th>
              <th className="font-semibold border border-green-600 lg:font-bold md:font-semibold">
                52w-High
              </th>
              <th className="font-semibold border border-green-600 lg:font-bold md:font-semibold">
                PE Ratio
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock) => (
              <tr
                key={stock.name}
                className="text-green-800 transition-all duration-150 cursor-pointer md:text-lg hover:bg-green-600 hover:text-white group"
                onClick={() => {
                  navigate(`/${stock.symbol}/stock_details`);
                }}
              >
                <td className="font-normal border border-green-600 md:p-2 ">
                  {stock.name}
                </td>
                <td className="font-normal text-right border border-green-600 md:p-2">
                  {Math.floor(stock.LTP)}
                </td>
                <td className="font-normal text-right border border-green-600 md:p-2">
                  {Math.floor(stock.low)}
                </td>
                <td className="font-normal text-right border border-green-600 md:p-2">
                  {Math.floor(stock.high)}
                </td>
                <td className="font-normal text-right border border-green-600 md:p-2">
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
