import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import CustomNavLink from "../../../utils/customNavlink";
import { TUser } from "../../../Types/user.type";
import ProfileDropDown from "./ProfileDropDown";
import { USER_STATUS } from "../../../Const/user.const";
import CustomOutlineButton from "../Button/CustomOutlineButton";
import { useNavigate } from "react-router-dom";

const MenuDrawer = ({
  userData,
  id,
}: {
  userData: Partial<TUser>;
  id: string;
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <Button onClick={showDrawer}>
          <IoMenu />
        </Button>
      </Space>

      <Drawer
        title="Navbar"
        autoFocus={false}
        closeIcon={<IoMdClose className="text-white" />}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
        bodyStyle={{ backgroundColor: "#1b1b1b" }} // Ensure the body of the drawer is black as well
      >
        {/* <div className="flex flex-col gap-3">
          <CustomNavLink label="Home" to="/"  />
          <CustomNavLink label="About" to="/about"  />
        </div> */}
        <div className="text-white flex flex-col items-center  gap-5 text-sm w-full justify-end">
          <CustomNavLink label="Home" to="/" fontWidth="16px" />
          <CustomNavLink label="Car Listing" to="/listing" fontWidth="16px" />

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
      </Drawer>
    </>
  );
};

export default MenuDrawer;
