import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// CustomNavLink component
const CustomNavLink: React.FC<{
  to: string;
  label: string;
  fontWidth?: string;
}> = ({ to, label, fontWidth }) => {
  const { pathname } = useLocation();

  return (
    <NavLink to={to}>
      <span
        style={{ fontSize: fontWidth ? fontWidth : "1.875rem" }}
        className={`relative after:bg-white after:absolute pb-1 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 ${
          pathname === to ? "text-secondary" : "text-white"
        } `}
      >
        {label}
      </span>
    </NavLink>
  );
};

export default CustomNavLink;
