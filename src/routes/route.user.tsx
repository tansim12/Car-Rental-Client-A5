
import AllBookingByUser from "../pages/User/Booking Management By user/AllBookingByUser";
import UserDashboard from "../pages/User/UserDashboard";
import { IAccRoutes } from "../Types/routes.type";
import generateRoutes from "../utils/generateRoutes";

export const userPath: IAccRoutes[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "all-bookings",
        element: <AllBookingByUser />,
      },
      
    ],
    path: "",
    element: undefined,
  },
 
];

// logical way creating  [{path:"----", element:<--- />}] such as routes.tsx
export const userRoutes = generateRoutes(userPath);
