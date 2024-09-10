import { Layout, Menu } from "antd";
const { Sider } = Layout;




import verifyToken from "../../utils/verifyToken";
import useAuthUserInfo from "../../hooks/useAuthUserInfo";
import { adminPath } from "../../routes/route.admin";
import generateRoutesNavLinks from "../../utils/generateRoutesNavLinks";
import { userPath } from "../../routes/route.user";
import logo from '../../assets/Image/logo.png';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { token,  } = useAuthUserInfo();
const navigate = useNavigate()
  let userData;
  if (token) {
    userData = verifyToken(token);
  }
  const user = userData?.data;

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
      <div className="flex justify-center items-center m-5 ">
        {/* logo div  */}
        <div className="">
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="logo"
                className="w-fit h-6 cursor-pointer"
              />
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
