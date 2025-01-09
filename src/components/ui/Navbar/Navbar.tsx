import { MdPhoneCallback } from "react-icons/md";
import MenuDrawer from "./MenuDrawer";
import CustomNavLink from "../../../utils/customNavlink";
import logo from "../../../assets/Image/logo.png";
import { useNavigate } from "react-router-dom";
import CustomOutlineButton from "../Button/CustomOutlineButton";
import { FiLogIn } from "react-icons/fi";
import { useAppSelector } from "../../../Redux/hook";
import { useGetUserInfoQuery } from "../../../Redux/Feature/Public User/user";
import { USER_STATUS } from "../../../Const/user.const";
import ProfileDropDown from "./ProfileDropDown";
import { TUser } from "../../../Types/user.type";
import { useDispatch } from "react-redux";
import { currentLocation } from "../../../Redux/Feature/Normal/availableAreaSlice";
// import ThemeToggle from "../Theme/ThemeToggle";

const Navbar = () => {
  const handleClick = () => {
    const phoneNumber = "8801849184000";
    const message = "Hello, I need assistance.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  const navigate = useNavigate();

  const user = useAppSelector((s) => s?.auth?.user);
  const id = user ? user?.id : null;
  const { data: userData } = useGetUserInfoQuery(id, { skip: !id });
  const setLocation = useDispatch();
  return (
    <div className="absolute w-full  ">
      {/* navbar  */}
      <div className="bg-pageBg opacity-30 h-16 absolute w-full"></div>
      <div className="bg-transparent  w-full sticky top-0 z-[999px]  ">
        <div className="w-full max-w-7xl mx-auto p-1 sm:p-2 ">
          <div className=" justify-between gap-2  md:visible flex items-center ">
            {/* logo div  */}
            <div className="w-[25%]">
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="logo"
                className="w-fit h-6 cursor-pointer"
              />
            </div>
            {/* menu div  */}
            <div className=" hidden md:flex justify-evenly items-center gap-5 w-[75%] ">
              <div className="text-white flex items-center  gap-5 text-sm w-full justify-end">
                <CustomNavLink label="Home" to="/" fontWidth="16px" />
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setLocation(currentLocation(""));
                    navigate("/listing");
                  }}
                >
                  <CustomNavLink
                    label="Car Listing"
                    to="/listing"
                    fontWidth="16px"
                  />
                </div>

                <CustomNavLink label="About" to="/about" fontWidth="16px" />

                {userData?.status === USER_STATUS.active && id ? (
                  <div>
                    <ProfileDropDown
                      customCss="md:border-r md:pr-5"
                      userData={userData as Partial<TUser>}
                    />
                  </div>
                ) : (
                  <div onClick={() => navigate("/login")}>
                    <CustomOutlineButton
                      isTransParent={false}
                      name="Login"
                      customCss="text-sm px-1"
                      textColor="black"
                      icon={FiLogIn}
                    />
                  </div>
                )}
              </div>
              {/* contact number  */}
              <div className="flex justify-center items-center gap-5 ">
                <div
                  className="border rounded-full p-2 border-secondary hover:bg-secondary hover:cursor-pointer"
                  onClick={handleClick}
                >
                  <MdPhoneCallback
                    color="white"
                    size={32}
                    className="hover:text-primary"
                  />
                </div>
                <div className="text-sm text-white">
                  <p>Need help?</p>
                  <p>01849184000</p>
                </div>
              </div>
            </div>

            <div>{/* <ThemeToggle /> */}</div>

            {/* small device menu div  */}
            <div className="visible md:hidden flex justify-center items-center gap-4">
              <div
                className="border rounded-full p-2 border-secondary hover:bg-secondary hover:cursor-pointer"
                onClick={handleClick}
              >
                <MdPhoneCallback
                  color="white"
                  size={32}
                  className="hover:text-primary"
                />
              </div>
              <MenuDrawer
                userData={userData as Partial<TUser>}
                id={id as string}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
