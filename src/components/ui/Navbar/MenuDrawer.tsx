import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
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
        closeIcon={<IoMdClose />}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
        className="bg-pageBg"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
