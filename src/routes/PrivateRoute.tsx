import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthUserInfo from "../hooks/useAuthUserInfo";
import verifyToken from "../utils/verifyToken";
import { logout } from "../Redux/Feature/Auth/authSlice";


type TPrivateRoute = {
  children: ReactNode;
  role: string | undefined;
};

const PrivateRoute = ({ children, role }: TPrivateRoute) => {
  const { token } = useAuthUserInfo();
  const dispatch = useDispatch();
  let user;
  if (token) {
    user = verifyToken(token);
  }
  if (role !== user?.data?.role && role !== undefined) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  }

  if (!token && !user?.data?.role) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};

export default PrivateRoute;
