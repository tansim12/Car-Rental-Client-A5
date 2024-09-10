import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateCar from "../pages/Admin/Car Management/CreateCar";
import UpdateCar from "../pages/Admin/Car Management/UpdateCar";
import ViewCars from "../pages/Admin/Car Management/ViewCars";
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
  {
    name: "Car Management",
    children: [
      {
        name: "Create Car",
        path: "create-car",
        element: <CreateCar />,
      },
      {
        name: "View Cars",
        path: "view-cars",
        element: <ViewCars />,
      },
      {
        path: "update-car",
        element: <UpdateCar />,
      },
    ],
    path: "",
    element: undefined,
  },
];

// logical way creating  [{path:"----", element:<--- />}] such as routes.tsx
export const adminRoutes = generateRoutes(adminPath);
