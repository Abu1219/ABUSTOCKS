import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCheckAuthMutation } from "../Redux/slices/userApiSlice";
import { setCredentials, logout } from "../Redux/slices/authSlice";
import { toast } from "react-toastify";

const useCheckAuth = (intervalTime = 60 * 60 * 1000) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [checkUserInfo] = useCheckAuthMutation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated || isAuthenticated === null) return;
    const checkAuthStatus = async () => {
      try {
        const res = await checkUserInfo().unwrap();

        if (res && res.user) {
          dispatch(setCredentials(res.user));
        }
      } catch (error) {
        dispatch(logout());
      }
    };
    checkAuthStatus();

    const intervalId = setInterval(checkAuthStatus, intervalTime);
    return () => clearInterval(intervalId);
  }, [dispatch, checkUserInfo, isAuthenticated]);
};

export default useCheckAuth;
