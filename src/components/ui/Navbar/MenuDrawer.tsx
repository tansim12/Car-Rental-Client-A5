import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import CustomNavLink from "../../../utils/customNavlink";

const MenuDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

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
        <div className="flex flex-col gap-3">
          <CustomNavLink label="Home" to="/"  />
          <CustomNavLink label="About" to="/about"  />
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
