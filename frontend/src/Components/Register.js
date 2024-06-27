import React, { useState } from "react";
import axios from "axios";
import Loader from "../Components/Utility/Loader";

import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // const UserImageRef = useRef();
  const navigation = useNavigate();

  const [data, setData] = useState({
    userName: "",
    userMail: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setStatus("");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      return setStatus("password and confirm Password is not Same");
    }
    let loaction;

    try {
      setLoading(true);
      setStatus("Sending...");
      const res = await axios.post("http://localhost:5000/api/adduser", data);
      setTimeout(() => {
        setStatus(res.data.message);
        loaction = res.data.loaction;
      }, 1000);
    } catch (error) {
      if (error.response) {
        setStatus(error.response.data.message);
      } else {
        setStatus("An unexpected error occurred");
      }
    }

    setTimeout(() => {
      setLoading(false);
      setData({
        userName: "",
        userMail: "",
        password: "",
        confirmPassword: "",
      });
      navigation(`/${loaction || ""} `);
    }, 2000);
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
        {loading ? (
          <div className="flex flex-col items-center">
            <Loader />
            <p className="text-green-400">{status}</p>
          </div>
        ) : (
          <form
            action=""
            className="flex flex-col items-center justify-around mt-12 "
            onSubmit={submitHandler}
          >
            {/* <div className="flex flex-col items-center">
            {" "}
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/64/64572.png?ga=GA1.1.893105558.1715590453&semt=ais_hybrid"
              className="w-[50px] md:w-[75px] my-2 cursor-pointer "
              onClick={() => {
                UserImageRef.current.click();
              }}
            />
            <p className="">Choose Image</p>
          </div>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/*"
            ref={UserImageRef}
            hidden
          ></input> */}

            <div className="flex flex-col items-center w-full mb-4">
              <input
                type="text"
                className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none md:w-1/2 w-[70%] "
                placeholder="username"
                value={data.userName}
                name="userName"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="flex flex-col items-center w-full mb-4">
              <input
                type="email"
                className="p-1 px-2 text-green-700 border-2 rounded-md focus:outline-none md:w-1/2 w-[70%] "
                placeholder="Mail"
                value={data.userMail}
                name="userMail"
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
                required
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
                required
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
            {
              <p className="p-2 text-red-500 max-md:text-sm ">
                {status === "password and confirm Password is not Same" &&
                  "Password & confirm Password is not Same"}
              </p>
            }
            <button className="w-[40%] md:max-w-min mx-auto p-2 bg-green-500 text-white hover:bg-green-600 cursor-pointer rounded">
              Create
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
