import React from "react";
import { NavLink } from "react-router-dom";

// CustomNavLink component
const CustomNavLink: React.FC<{
  to: string;
  label: string;
  fontWidth?: string;
}> = ({ to, label, fontWidth }) => {
  // Function to dynamically generate classes based on the active state
  const getClassNames = (isActive: boolean) =>
    `text-lg text-white hover:text-gray-100 transition duration-300 relative cursor-pointer ${
      isActive ? "text-primary" : ""
    }`;

  return (
    <NavLink to={to} className={({ isActive }) => getClassNames(isActive)}>
      <span
        style={{ fontSize: fontWidth ? fontWidth : "1.875rem" }}
        className={`relative after:bg-white after:absolute pb-1 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 `}
      >
        {label}
      </span>
    </NavLink>
  );
};

export default CustomNavLink;
