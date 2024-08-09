import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "../Redux/slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../Redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updateProfile] = useUpdateProfileMutation();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    console.log();
    setData({
      name: userInfo.name,
      email: userInfo.email,
    });
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    if (confirmPassword !== data.password) {
      return toast.error("password and confirm Password is not Same");
    }
    try {
      const res = await updateProfile({
        email: data.email,
        password: data.password,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully");
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-green-100 flex justify-center">
        <div className="text-lg md:text-xl max-md:w-[80%] md:w-[60%] lg:w-[30%]  flex flex-col justify-evently   border-2 mt-6   bg-white  drop-shadow-md max-h-[70vh]">
          <p className="p-4 text-green-600 md:mt-6 md:fornt-semibold ">
            Profile
          </p>
          <form
            className="flex flex-col px-4 w-[80%] "
            onSubmit={submitHandler}
          >
            <input
              type="text"
              onChange={changeHandler}
              name="name"
              placeholder="Name"
              value={data.name}
              className="px-2 text-green-500 duration-200 border-b-2 border-green-300 md:p-2 focus:outline-none focus:bg-green-500 focus:text-white"
            />
            <input
              type="email"
              onChange={changeHandler}
              placeholder="email"
              value={data.email}
              name="email"
              className="px-2 mt-6 text-green-500 duration-200 border-b-2 border-green-300 md:p-2 focus:outline-none focus:bg-green-500 focus:text-white "
            />
            <input
              type="password"
              placeholder="password"
              onChange={changeHandler}
              name="password"
              value={data.password}
              className="px-2 mt-6 text-green-500 duration-200 border-b-2 border-green-300 md:p-2 focus:outline-none focus:bg-green-500 focus:text-white "
            />
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-2 mt-6 text-green-500 duration-200 border-b-2 border-green-300 md:p-2 focus:outline-none focus:bg-green-500 focus:text-white"
            />
            <button
              type="submit"
              className="block p-2 mt-6 text-white transition-all bg-green-400 rounded-sm w-min hover:bg-green-500 active:scale-95"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
