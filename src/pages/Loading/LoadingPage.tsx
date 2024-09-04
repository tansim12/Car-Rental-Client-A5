import React from "react";
import {  Spin } from "antd";

const contentStyle: React.CSSProperties = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;

const LoadingPage: React.FC = () => (
  
    <div className="flex justify-center items-center min-h-[60vh] min-w-[70%]">
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </div>
 
);

export default LoadingPage;
