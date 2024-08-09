import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useAuthTimer = (expriytime) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(logout());
      toast.warn("Token expries klindly login again", {
        position: "top-center",
      });
    }, expriytime);
    return () => clearTimeout(timer);
  }, [dispatch, expriytime]);
};
export default useAuthTimer;
