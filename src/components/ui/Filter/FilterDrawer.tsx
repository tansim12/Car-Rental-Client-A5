import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { IoMdClose } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import Filter from "./Filter";
import { TQueryParams } from "../../../Types/car.types";

const FilterDrawer = ({
  setParams,
}: {
  setParams: React.Dispatch<React.SetStateAction<TQueryParams[]>>;
}) => {
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
        <Button
          className="bg-secondary border-none text-xl"
          onClick={showDrawer}
        >
          <FaFilter /> Filter
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
        width={320}
        bodyStyle={{ backgroundColor: "#1b1b1b" }} // Ensure the body of the drawer is black as well
      >
        <div className="">
          <Filter setParams={setParams} />
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
