import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [showPassword, setshowPassword] = useState(false);
  const navigation = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="bg-green-500 h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="w-[70%] bg-white h-[75%] md:w-[60%] lg:w-[40%] rounded drop-shadow-md">
        <p className="mt-6 text-center md:text-2xl">Create Account</p>
        <p className="text-center md:text-lg ">
          Already have an count?{" "}
          <span
            className="text-green-500 underline cursor-pointer"
            onClick={() => {
              navigation("/Login");
            }}
          >
            Sigin
          </span>
        </p>

        <form
          action=""
          className="flex flex-col justify-around mt-12 "
          onSubmit={submitHandler}
        >
          <div className="flex flex-col items-center w-full mb-4 ">
            <input
              type="text"
              className="p-1 px-2 text-green-700 border-2 rounded-md lg:w-1/2 focus:outline-none   md:w-1/2 w-[70%]"
              placeholder="Username"
              onChange={changeHandler}
              value={data.username}
              name="username"
            />
          </div>
          <div className="flex flex-col items-center w-full mb-4">
            <input
              type="mail"
              className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none md:w-1/2 w-[70%] "
              placeholder="Mail"
              value={data.mail}
              name="mail"
              required
              onChange={changeHandler}
            />
          </div>

          <div className="flex items-center mx-auto mb-4 border-2 rounded-md  md:w-1/2 w-[70%]">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-1 px-2 focus:outline-none "
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            />
            {showPassword && (
              <IoEye
                className="ml-4 text-2xl text-green-800 cursor-pointer hover:scale-110"
                onClick={() => setshowPassword(!showPassword)}
              />
            )}

            {!showPassword && (
              <IoEyeOff
                className="z-10 ml-4 text-2xl text-green-800 cursor-pointer "
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </div>
          <div className="flex items-center mx-auto mb-4 border-2 rounded-md md:w-1/2 w-[70%]">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-1 px-2 focus:outline-none "
              placeholder="Conforim Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
            />
            {showPassword && (
              <IoEye
                className="ml-4 text-2xl text-green-800 cursor-pointer hover:scale-110"
                onClick={() => setshowPassword(!showPassword)}
              />
            )}

            {!showPassword && (
              <IoEyeOff
                className="z-10 ml-4 text-2xl text-green-800 cursor-pointer "
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </div>
          <button className="w-[40%] md:max-w-min mx-auto p-2 bg-green-500 text-white hover:bg-green-600 cursor-pointer rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
