import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuthUserInfo from "../hooks/useAuthUserInfo";
import verifyToken from "../utils/verifyToken";
import { logout } from "../Redux/Feature/Auth/authSlice";

type TPrivateRoute = {
  children: ReactNode;
  roles: string[];  // Array of roles
};

const BothPrivateRoute = ({ children, roles }: TPrivateRoute) => {
  const { token } = useAuthUserInfo();
  const dispatch = useDispatch();
  let user;

  if (token) {
    user = verifyToken(token);
  }

  // Check if the user role is included in the allowed roles array
  if (!roles.includes(user?.data?.role as string)) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true} />;
  }

  if (!token && !user?.data?.role) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
};

export default BothPrivateRoute;
