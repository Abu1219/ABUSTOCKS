import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center ">
      <img
        src="loader.png"
        alt="loading"
        className="w-[150px] animate-pulse duration-75 "
      />
    </div>
  );
};

export default Loader;
