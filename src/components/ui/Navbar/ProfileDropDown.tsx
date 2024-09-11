import React, { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../Redux/Feature/Auth/authSlice";
import toast from "react-hot-toast";

type ProfileDropDownProps = {
  userData: {
    name?: string;
    role?: string;
  };
  customCss?: string;
};

const ProfileDropDown: React.FC<ProfileDropDownProps> = ({
  userData,
  customCss,
}) => {
  const dispatch = useDispatch();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // Delay before hiding the dropdown
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDropdownVisible(false); // Close the dropdown after navigation
  };

  const handleLogout = () => {
    const toastId = toast.loading("Logout pending");
    dispatch(logout());
    toast.success("Logout successfully done", { id: toastId, duration: 2000 });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile section */}
      <div className={`${customCss} cursor-pointer flex flex-col items-center`}>
        <CgProfile size={36} />
        <p>{userData?.name ? userData?.name.slice(0, 7) : ""}</p>
      </div>

      {/* Dropdown menu */}
      {isDropdownVisible && (
        <div
          className="absolute right-0 pt-5 w-48 bg-white rounded-md shadow-lg"
          style={{ zIndex: 999 }}
        >
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
