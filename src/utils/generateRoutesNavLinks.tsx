import { NavLink } from "react-router-dom";
import { IAccRoutes, IAccRoutesItem } from "../Types/routes.type";

export const generateRoutesNavLinks = (path: IAccRoutes[], role: string) => {
  return path.reduce((acc: IAccRoutesItem[], item) => {
    if (item?.name && item?.path) {
      acc?.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc?.push({
        key: item?.name as string,
        label: item?.name,
        children: item?.children?.map((child) => {
          if (child?.name) {
            return {
              key: child?.name,
              label: (
                <NavLink to={`/${role}/${child?.path}`}>{child?.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);
};

export default generateRoutesNavLinks;
