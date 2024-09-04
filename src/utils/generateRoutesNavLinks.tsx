import { NavLink } from "react-router-dom";
import { IAccRoutes, IAccRoutesMenuItem } from "../types/admin.types";

export const generateRoutesNavLinks = (path: IAccRoutes[], role: string): IAccRoutesMenuItem[] => {
  return path.reduce<IAccRoutesMenuItem[]>((acc, item) => {
    // Ensure key is a string, provide a default if necessary
    const key = item.name ?? "default-key";

    if (item?.name && item?.path) {
      acc.push({
        key,
        label: <NavLink to={`/${role}/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key,
        label: item?.name,
        children: item.children.map((child) => {
          // Ensure key for child is a string, provide a default if necessary
          const childKey = child?.name ?? "default-child-key";
          return {
            key: childKey,
            label: (
              <NavLink to={`/${role}/${child?.path}`}>{child?.name}</NavLink>
            ),
          };
        }),
      });
    }

    return acc;
  }, []);
};

export default generateRoutesNavLinks;
