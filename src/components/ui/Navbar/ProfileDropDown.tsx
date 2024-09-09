/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { TUser } from "../../../Types/user.type";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/Feature/Auth/authSlice";
import toast from "react-hot-toast";

type ProfileDropDownProps = {
  userData: Partial<TUser>;
};

const ProfileDropDown = ({ userData }: ProfileDropDownProps) => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDropdownVisible(false); // Close the dropdown after navigation
  };

  const handleLogout = () => {
    const toastId = toast.loading("Logout pending");
    dispatch(logout());
    toast.success("Logout Successfully done", { id: toastId, duration: 2000 });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile section */}
      <div className="md:border-r md:pr-5 cursor-pointer">
        <CgProfile size={36} />
        <p>{userData?.name ? userData?.name.slice(0, 7) : ""}</p>
      </div>

      {/* Dropdown menu */}
      {isDropdownVisible && (
        <div className="absolute right-0 pt-5 w-48 bg-white rounded-md shadow-lg">
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
            onClick={() => handleNavigation("/profile")}
          >
            Profile
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
            onClick={() => handleNavigation(`/${userData?.role}/dashboard`)}
          >
            Dashboard
          </div>
          <div
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
