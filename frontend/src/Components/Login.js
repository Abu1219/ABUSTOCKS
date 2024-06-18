import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ username: "", password: "" });
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-green-500 flex  justify-center items-center -mt-4 cursor-pointer">
      <div className="w-[80%] bg-white h-1/2 md:h-2/4 drop-shadow-md p-4  md:w-[50%] lg:w-[40%] ">
        <p className="text-2xl font-semibold text-green-800 md:text-4xl">
          Login
        </p>
        <form className="mt-4 text-green-600 ">
          <input
            className="w-[90%] mx-2 border-b-2 border-green-500 text-lg md:text-2xl p-1 my-2 outline-none  "
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
          <div className="flex items-center border-b-2 w-[90%] border-green-500 justify-between">
            <input
              className="p-1 mx-2 my-2 text-lg outline-none md:text-2xl md:mt-4"
              placeholder="Password"
              name="password"
              value={data.password}
              type={showPassword ? "text" : "password"}
              onChange={changeHandler}
            />

            {showPassword && (
              <IoEye
                className="ml-4 text-2xl cursor-pointer hover:scale-110"
                onClick={() => setshowPassword(!showPassword)}
              />
            )}

            {!showPassword && (
              <IoEyeOff
                className="z-10 ml-4 text-2xl cursor-pointer "
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </div>
          <p className="mt-2 text-center text-green-400 md:text-2xl md:mt-4 ">
            Forget password ?
          </p>
        </form>
        <div className="absolute left-0 w-[100%] bottom-0">
          <button
            className="w-1/2 p-2 text-lg text-green-600 transition-all bg-green-200 cursor-pointer md:text-2xl hover:text-green-200 hover:bg-green-600 active:font-semibold"
            onClick={() => navigate("/Register")}
          >
            Register
          </button>
          <button
            onClick={submitHandler}
            type="submit"
            className="w-1/2 p-2 text-lg text-white transition-all cursor-pointer bg-green-800/70 md:text-2xl active:font-semibold hover:underline"
          >
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
