import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { GiTechnoHeart } from "react-icons/gi";
import { GiOilPump } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { AiFillBank } from "react-icons/ai";
import { MdHealthAndSafety } from "react-icons/md";
import { GiSteelClaws } from "react-icons/gi";
import { FaShip } from "react-icons/fa6";
import { GiPowerLightning } from "react-icons/gi";
import { MdCellTower } from "react-icons/md";
const Filter = ({ filter }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-around w-full p-2 mx-auto mb-2 text-green-500 max-md:bg-green-100/50 md:w-4/6 md:px-4 max-md:shadow-md">
        <div
          className="flex flex-col items-center "
          onClick={() => filter("pharma")}
        >
          <FaHandHoldingMedical className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold ">Pharma</p>
        </div>

        <div
          className="flex flex-col items-center"
          onClick={() => filter("auto")}
        >
          <FaCarRear className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Auto</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => filter("it")}
        >
          <GiTechnoHeart className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">IT</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => filter("oil")}
        >
          <GiOilPump className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Oil&Gas</p>
        </div>

        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("fmg")}
        >
          <FaBowlFood className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">FMG</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("finance")}
        >
          <AiFillBank className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Banking</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("insurance")}
        >
          <MdHealthAndSafety className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Insurance</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("steel")}
        >
          <GiSteelClaws className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Steel</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("port")}
        >
          <FaShip className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Port</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("power")}
        >
          <GiPowerLightning className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Power</p>
        </div>
        <div
          className="flex flex-col items-center max-md:hidden"
          onClick={() => filter("telecom")}
        >
          <MdCellTower className="p-2 text-4xl text-green-600 duration-150 bg-green-200 rounded-full cursor-pointer md:text-6xl hover:text-green-200 hover:bg-green-600" />
          <p className="text-sm md:font-semibold">Telecom</p>
        </div>
      </div>
    </>
  );
};

export default Filter;
