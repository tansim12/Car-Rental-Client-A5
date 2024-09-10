import React from "react";
import {  Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import DashboardNavbar from "../../components/ui/Dashboard/DashboardNavbar";

const { Header, Content } = Layout;
const MainLayout: React.FC = () => {


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();



  return (
    <Layout className="h-full">
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          {/* DashboardNavbar  */}
          <div>
            <DashboardNavbar />
          </div>
       
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
