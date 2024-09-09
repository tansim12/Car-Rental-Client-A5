import { Layout, Menu } from "antd";
const { Sider } = Layout;




import verifyToken from "../../utils/verifyToken";
import useAuthUserInfo from "../../hooks/useAuthUserInfo";
import { adminPath } from "../../routes/route.admin";
import generateRoutesNavLinks from "../../utils/generateRoutesNavLinks";
import { userPath } from "../../routes/route.user";
const Sidebar = () => {
  const { token,  } = useAuthUserInfo();

  let userData;
  if (token) {
    userData = verifyToken(token);
  }
  const user = userData?.data;
console.log(user?.role);

  const userRole = {
    ADMIN: "admin",
    USER: "user",
    
  };
  const role = user?.role as string;

  let sidebarItems;

  switch (role) {
    case userRole?.ADMIN:
      sidebarItems = generateRoutesNavLinks(adminPath, "admin");
      break;
    case userRole?.USER:
      sidebarItems = generateRoutesNavLinks(userPath, "user");
      break;
    default:
      break;
  }

  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="flex justify-center items-center  ">
        <div className="bg-white rounded-full size-20 flex justify-center items-center   font-extrabold  my-auto">
          PH-UNI
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as unknown as never}
      />
    </Sider>
  );
};

export default Sidebar;
