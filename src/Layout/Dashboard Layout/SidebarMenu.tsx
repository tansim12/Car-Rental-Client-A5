import { Layout, Menu } from "antd";
const { Sider } = Layout;
import generateRoutesNavLinks from "../../utils/generateRoutesNavLinks";
import { adminPath } from "../../routes/route.admin";
import { useNavigate } from "react-router-dom";
const SidebarMenu = () => {
  const navigate = useNavigate();
  const userRole = {
    ADMIN: "admin",
  };
  const role = "admin" as string;

  let sidebarItems;

  switch (role) {
    case userRole?.ADMIN:
      sidebarItems = generateRoutesNavLinks(adminPath, "admin");
      break;
    default:
      break;
  }

  return (
    <Sider
      className="h-screen "
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={() => {}}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div onClick={()=>navigate("/")} className="demo-logo-vertical rounded-b-xl p-2 border-b-4 border-black flex justify-center cursor-pointer">
        <img
          src="https://i.ibb.co/FDnCPmH/pngwing-com-25.png"
          alt="Camping"
          className="size-16 mr-4"
        />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SidebarMenu;
