import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { carCategoryArray } from "../../../Const/car.const";

const CategoryMegaMenu = () => {
  const navigate = useNavigate();
  const handleMenuClick = (category: string) => {
    navigate(`/listing?category=${category}`);
  };

  const menu = (
    <Menu>
      {carCategoryArray?.map((category) => (
        <Menu.Item key={category} onClick={() => handleMenuClick(category)}>
          <span className="hover:text-yellow-600  ">{category}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div className="flex items-center gap-5">
      <Dropdown overlay={menu} trigger={["hover"]} className="cursor-pointer ">
        <div className="flex items-center gap-2">
          <span
            onClick={() => navigate("/listing")}
            className="hover:text-secondary"
          >
            Categories
          </span>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  );
};

export default CategoryMegaMenu;
