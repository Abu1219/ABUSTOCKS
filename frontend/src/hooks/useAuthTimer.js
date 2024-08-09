import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAuthTimer = (isAuthenticated, expriytime) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;
    console.log("timer statreted");
    const timer = setTimeout(() => {
      dispatch(logout());
      toast.warn("Token expries klindly login again", {
        position: "top-center",
      });
    }, expriytime);
    return () => clearTimeout(timer);
  }, [dispatch, expriytime, isAuthenticated]);
};
export default useAuthTimer;
