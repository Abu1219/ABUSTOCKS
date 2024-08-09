import React, { useState, useEffect } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../Redux/slices/userApiSlice";
import { setCredentials } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      setEmail("");
      setPassword("");
    }

    //connect to api
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-green-500 flex  justify-center items-center -mt-4 cursor-pointer">
      <div className="w-[80%] bg-white h-1/2 md:h-3/5 drop-shadow-md p-4  md:w-[50%] lg:w-[30%] ">
        <p className="text-2xl font-semibold text-green-800 md:text-4xl">
          Login
        </p>

        <form
          className="mt-4 text-green-600 "
          onSubmit={submitHandler}
          action=""
        >
          <input
            className="w-[90%] mx-2 border-b-2 border-green-500 text-lg md:text-2xl p-1 my-2 outline-none  "
            type="email"
            placeholder="Mail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <div className="flex items-center border-b-2 w-[90%] border-green-500 justify-between">
            <input
              className="p-1 mx-2 my-2 text-lg outline-none md:text-2xl md:mt-4"
              placeholder="Password"
              name="password"
              value={password}
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showPassword && (
              <IoEye
                className="ml-4 text-2xl cursor-pointer hover:scale-110"
                onClick={() => setshowPassword(!showPassword)}
              />
            )}

            {!showPassword && (
              <IoEyeOff
                className="ml-4 text-2xl text-green-800 cursor-pointer hover:scale-110 "
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </div>
          <p className="mt-2 text-center text-green-400 md:text-2xl md:mt-4 hover:underline ">
            Forget password ?
          </p>

          <div className="absolute left-0 w-[100%] bottom-0">
            <button className="w-1/2 p-2 text-lg text-green-600 transition-all bg-green-200 cursor-pointer md:text-2xl hover:text-green-200 hover:bg-green-600 active:font-semibold">
              <Link to="/Register">Register</Link>
            </button>
            <button
              type="submit"
              className="w-1/2 p-2 text-lg text-white transition-all cursor-pointer bg-green-800/70 md:text-2xl active:font-semibold hover:underline"
            >
              Signin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
