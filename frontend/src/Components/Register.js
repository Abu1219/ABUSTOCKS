import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigation = useNavigate();
  return (
    <div className="bg-green-500 h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="w-[70%] bg-white h-[75%] md:w-[40%] rounded drop-shadow-md">
        <p className="mt-6 text-center md:text-2xl">Create Account</p>
        <p className="text-center md:text-lg ">
          Already have an count?{" "}
          <span
            className="text-green-500 underline"
            onClick={() => {
              navigation("/Login");
            }}
          >
            Sigin
          </span>
        </p>

        <form action="" className="flex flex-col justify-around mt-12">
          <div className="flex flex-col items-center w-full mb-4 ">
            <input
              type="text"
              className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none "
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col items-center w-full mb-4">
            <input
              type="gmail"
              className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none "
              placeholder="mail"
            />
          </div>
          <div className="flex flex-col items-center w-full mb-4">
            <input
              type="password"
              className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none "
              placeholder="password"
            />
          </div>
          <button className="w-[40%] md:max-w-min mx-auto p-2 bg-green-400 text-white hover:bg-green-500 cursor-pointer rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
