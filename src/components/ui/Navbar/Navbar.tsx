import { NavLink } from "react-router-dom";
import { MdPhoneCallback } from "react-icons/md";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
  return (
    <div className="absolute  w-full">
      {/* navbar  */}
      <div className="bg-transparent  w-full sticky top-0 z-50 ">
        <div className="w-full max-w-7xl mx-auto p-1 sm:p-2 ">
          <div className=" justify-between gap-2  md:visible flex items-center ">
            {/* logo div  */}
            <div className="w-[40%]">
              <img
                src="https://webredox.net/demo/wp/renax/wp-content/themes/renax/includes/img/logo-light.png"
                alt="logo"
                className="w-fit h-6"
              />
            </div>
            {/* menu div  */}
            <div className=" hidden md:flex justify-evenly items-center gap-5 w-[60%] ">
              <div className="text-white flex  gap-5 text-sm ">
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/"}>Home </NavLink>
              </div>
              {/* contact number  */}
              <div className="flex justify-center items-center gap-5">
                <div className="border rounded-full p-2 border-primary hover:bg-primary hover:cursor-pointer">
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

            {/* small device menu div  */}
            <div className="visible md:hidden">
              
              <MenuDrawer />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
