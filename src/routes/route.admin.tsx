import AdminDashboard from "../pages/Admin/AdminDashboard";
import AllUsers from "../pages/Admin/User Management/AllUsers";
import { IAccRoutes } from "../Types/routes.type";
import generateRoutes from "../utils/generateRoutes";

export const adminPath: IAccRoutes[] = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <AdminDashboard />,
    },
    {
      name: "User Management",
      children: [
        {
          name: "All Users",
          path: "all-users",
          element: <AllUsers />,
        },
        
      ],
      path: "",
      element: undefined,
    },
  
   
  ];
  
  // logical way creating  [{path:"----", element:<--- />}] such as routes.tsx
  export const adminRoutes = generateRoutes(adminPath);